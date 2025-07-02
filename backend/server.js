require("./cron/reminderJob");
const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 5000;

const submissionRoutes = require("./routes/submissionRoutes");

app.use(cors());
app.use(express.json());

app.use("/submissions", submissionRoutes); // << panggil via /submissions

app.listen(PORT, () => {
  console.log(`🚀 Server jalan di http://localhost:${PORT}`);
});
