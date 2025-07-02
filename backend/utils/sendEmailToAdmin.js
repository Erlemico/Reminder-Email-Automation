const nodemailer = require("nodemailer");
require("dotenv").config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

module.exports = async function sendEmailToAdmin({
  id,
  stage,
  status,
  picName,
}) {
  const mailOptions = {
    from: process.env.GMAIL_USER,
    to: process.env.ADMIN_EMAIL, // Admin email dari .env
    subject: `Update Pengajuan ${id}: ${status} oleh ${picName}`,
    html: `
      <h3>Notifikasi Perubahan Status</h3>
      <p>Submission ID: <strong>${id}</strong></p>
      <p>Stage: <strong>${stage}</strong></p>
      <p>Status baru: <strong>${status}</strong></p>
      <p>Diupdate oleh: <strong>${picName}</strong></p>
      <p>Waktu: ${new Date().toLocaleString()}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log(`📧 Notifikasi dikirim ke admin untuk ${id}`);
  } catch (error) {
    console.error("Gagal mengirim email ke admin:", error);
  }
};