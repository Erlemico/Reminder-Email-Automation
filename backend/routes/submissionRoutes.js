const express = require("express");
const router = express.Router();
const submissionController = require("../controllers/submissionController");

router.get("/", submissionController.getAllSubmissions);
router.post("/", submissionController.createSubmission);
router.patch("/:id/status", submissionController.updateSubmissionStatus);

module.exports = router;