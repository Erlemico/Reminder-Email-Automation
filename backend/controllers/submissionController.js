const { Submission } = require("../models");
const sendEmailToAdmin = require("../utils/sendEmailToAdmin");

exports.getAllSubmissions = async (req, res) => {
  try {
    const submissions = await Submission.findAll();
    res.json(submissions);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch submissions" });
  }
};

exports.createSubmission = async (req, res) => {
  try {
    const submission = await Submission.create(req.body);
    res.status(201).json(submission);
  } catch (err) {
    res.status(400).json({ error: "Failed to create submission" });
  }
};

exports.updateSubmissionStatus = async (req, res) => {
  const { id } = req.params;
  const { stage, status, picName } = req.body;

  try {
    const submission = await Submission.findByPk(id);
    if (!submission)
      return res.status(404).json({ error: "Submission not found" });

    // Update status dan tanggal
    submission[`${stage}_status`] = status;
    submission[`${stage}_date`] = new Date();
    await submission.save();

    // Kirim email ke admin jika status valid
    if (["Approved", "Revise", "Rejected"].includes(status)) {
      await sendEmailToAdmin({ id, stage, status, picName });
    }

    res.json({ message: "Status updated", submission });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Update failed" });
  }
};