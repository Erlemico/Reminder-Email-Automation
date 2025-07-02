const cron = require("node-cron");
const { runReminderCheck } = require("../services/reminder");

cron.schedule("*/1 * * * *", async () => {
  console.log("⏰ Reminder job jalan...");
  await runReminderCheck();
});