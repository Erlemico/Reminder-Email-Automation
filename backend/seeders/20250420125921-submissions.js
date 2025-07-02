"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    const titles = [
      "SSO Feature Request",
      "API Doc Revision",
      "Dev Server Upgrade",
      "VPN Access Request",
      "UAT Env Setup",
      "Email Notification Deployment",
      "ERP Webhook Integration",
      "Feature Toggle Service",
      "Monitoring Dashboard Update",
      "LDAP Sync Enhancement",
      "Custom Theme Deployment",
      "Login Bug Fixing",
      "Report Export Module",
      "PDF Preview Integration",
      "Mobile UI Enhancement",
      "OAuth2 Migration",
      "CDN Performance Boost",
      "Monthly Usage Report",
      "Integrate WebSocket",
      "SLA Monitoring Feature",
      "Cloud Cost Dashboard",
      "Multi-Tenant Separation",
      "SSO SAML Extension",
      "Salesforce Sync Tool",
      "Incident Timeline Viewer",
      "QA Bug Tracking",
      "Kubernetes Job Trigger",
      "Release Management App",
      "Dark Mode Toggle",
      "Internal Wiki App",
    ];

    const statusList = ["Approved", "Revise", "Rejected", "Closed"];
    const blockStatuses = ["Revise", "Rejected", "Waiting", "Closed"];
    const stageOrder = ["TD", "TAP", "AB", "TA", "TXC", "TX", "DF"];

    const submissions = [];
    const now = new Date();
    const overdueDays = 7;

    for (let i = 1; i <= 30; i++) {
      const padded = i.toString().padStart(2, "0");

      const submittedDate = new Date();
      submittedDate.setDate(now.getDate() - i);

      const stageData = {};
      let block = false;

      stageOrder.forEach((stage, index) => {
        const statusKey = `${stage}_status`;
        const dateKey = `${stage}_date`;

        if (block) {
          stageData[statusKey] = null;
          stageData[dateKey] = null;
        } else {
          const status =
            i % (index + 3) === 0
              ? "Waiting"
              : statusList[(i + index) % statusList.length];

          stageData[statusKey] = status;

          const offsetDays = index + 1;
          const date =
            status === "Waiting"
              ? new Date(
                  new Date().setDate(now.getDate() - overdueDays - offsetDays)
                )
              : new Date(
                  submittedDate.getTime() + offsetDays * 24 * 60 * 60 * 1000
                );

          stageData[dateKey] = date;

          if (blockStatuses.includes(status)) {
            block = true;
          }
        }
      });

      submissions.push({
        id: `REQ-04${padded}`,
        title: titles[i - 1] || `Auto Task ${i}`,
        submittedAt: submittedDate,
        ...stageData,
        createdAt: now,
        updatedAt: now,
      });
    }

    await queryInterface.bulkInsert("Submissions", submissions);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Submissions", null, {});
  },
};