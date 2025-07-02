const nodemailer = require("nodemailer");
require("dotenv").config();

// Setup transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

/**
 * Helper untuk menentukan sapaan berdasarkan gender
 * @param {string} gender - 'male' atau 'female'
 * @returns {string} - 'Bapak' atau 'Ibu'
 */
function getSalutationByGender(gender) {
  if (gender === "male") return "Bapak";
  if (gender === "female") return "Ibu";
  return "PIC";
}

/**
 * Fungsi untuk mengirim email pengingat
 * @param {string} to - Email penerima
 * @param {object} submission - Data submission (punya title & id)
 * @param {string} picName - Nama PIC
 * @param {string} gender - Gender PIC ('male' / 'female')
 */
async function sendReminderEmail(to, submission, stage, picName, gender) {
  const salutation = `${getSalutationByGender(gender)} ${
    picName || "PIC Tahap " + stage
  }`;

  const mailOptions = {
    from: '"SFA Notification" <moammarsaddam1@gmail.com>',
    to,
    subject: `🔔 Reminder Review Budget: ${submission.title}`,
    html: `
      <p>Dengan hormat <strong>${salutation}</strong>,</p>

      <p>Untuk memastikan perkembangan proyek tetap berjalan sesuai jadwal, dimohon untuk melakukan <strong>review</strong> (Approve/Revise) budget pada project berikut:</p>

      <p style="margin-left: 20px;"><strong>${submission.title} - ${submission.id}</strong></p>

      <p>Jika ada kendala atau kebutuhan diskusi lebih lanjut, silakan informasikan kepada kami segera.</p>

      <p>Terima kasih atas kerja samanya.</p>

      <br/>
      <p>Regards,<br/><strong>Admin PMO IT</strong></p>
    `,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log(
      `✅ Email terkirim ke ${to} | ID: ${submission.id} | Stage: ${stage}`
    );
    return info;
  } catch (error) {
    console.error(
      `❌ Gagal kirim ke ${to} | ID: ${submission.id} | Stage: ${stage}`
    );
    console.error("Error:", error.message);
  }
}

module.exports = { sendReminderEmail };