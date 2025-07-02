const { StagePic, Submission } = require("../models");
const { sendReminderEmail } = require("../utils/sendEmail");
const { Op } = require("sequelize");

const stageList = ["TD", "TAP", "AB", "TA", "TXC", "TX", "DF"];
const maxDays = 5;

function isOverdue(date, status) {
  if (!date || status !== "Waiting") return false;
  const now = new Date();
  const diff = (now - new Date(date)) / (1000 * 60 * 60 * 24);
  return diff > maxDays;
}

async function runReminderCheck() {
  console.log("⏰ Mengecek submissions...");

  const submissions = await Submission.findAll();

  for (const submission of submissions) {
    for (const stage of stageList) {
      const status = submission[`${stage}_status`];
      const date = submission[`${stage}_date`];

      if (isOverdue(date, status)) {
        const stagePIC = await StagePic.findOne({
          where: { stage_name: stage },
        });

        if (stagePIC) {
          await sendReminderEmail(
            stagePIC.pic_email,
            submission,
            stage,
            stagePIC.pic_name,
            stagePIC.gender,
          );
          console.log(
            `✅ Reminder dikirim ke ${stagePIC.pic_email} (PIC: ${stagePIC.pic_name}) untuk stage ${stage} (Submission: ${submission.id})`
          );
        } else {
          console.warn(`⚠️ Tidak ditemukan PIC untuk stage ${stage}`);
        }

        // ⛔ Jangan break, biar lanjut ke tahap lain yang mungkin overdue juga
      } else {
        // ⛔ Hanya stop kalau chain approval-nya benar-benar putus
        if (["Revise", "Rejected", "Closed"].includes(status)) {
          break;
        }
      }
    }
  }
}

module.exports = { runReminderCheck };
