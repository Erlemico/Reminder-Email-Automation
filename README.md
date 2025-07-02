# Reminder Automation

## Description
The Reminder Automation project consists of two main parts:

- **Frontend**: A React.js based web application providing an interactive dashboard for managing reminders.
- **Backend**: A Node.js API server using Express.js and Sequelize ORM to handle reminder data, email notifications, and cron jobs for automated reminders.

---

## Frontend

### Main Features
- Display a paginated list of reminders with search functionality.
- Detailed reminder panel.
- Navigation with sidebar and topbar.
- Modular and responsive UI components.

### Main Folder Structure
- `src/components` — Main React components.
- `src/utils` — Helper functions.
- `public` — Static files.
- Environment configuration files `.env`.

### Running the Frontend
```bash
cd reminder-automation/frontend
npm install
npm start
```
Access the app at `http://localhost:3000`.

---

## Backend

### Main Features
- REST API to manage reminder data (submissions).
- CRUD for reminders and related stages.
- Automatic reminder email sending using SMTP service.
- Scheduled cron jobs for automated reminders.
- Sequelize ORM for database interactions.
- Modular folder structure:  
  - `controllers/` — API endpoint logic.  
  - `routes/` — API route definitions.  
  - `models/` — Sequelize model definitions.  
  - `migrations/` and `seeders/` — Database migrations and seed data.  
  - `services/` — Business logic services, including email sending.  
  - `cron/` — Cron job scripts for reminder processing.

### Main Folder Structure
- `server.js` — Backend application entry point.
- `.env` — Environment configuration (database, SMTP, etc.).
- `package.json` — Dependencies and scripts.
- `config/config.json` — Sequelize database configuration.
- Folders for models, controllers, routes, migrations, seeders, utils, services, and cron jobs.

### Running the Backend
```bash
cd reminder-automation/backend
npm install
npm run migrate    # to run database migrations
npm run seed       # to insert dummy data (optional)
npm start
```
Server runs on `http://localhost:3001` (or as configured).

---

## Environment Configuration

Create `.env` files in both frontend and backend folders with example content from `.env.example`.

Backend typical configuration:

```
DB_HOST=localhost
DB_USER=your_db_user
DB_PASSWORD=your_password
DB_NAME=your_db_name
DB_DIALECT=postgres

SMTP_HOST=smtp.yourmail.com
SMTP_PORT=587
SMTP_USER=your_email@example.com
SMTP_PASS=your_email_password
```

Frontend `.env` example:

```
REACT_APP_API_URL=http://localhost:3001
```

---

## Testing

Frontend uses Jest and React Testing Library.

Backend testing can be added as needed (currently none).

---

## Technologies

- Frontend: React.js, JavaScript, CSS
- Backend: Node.js, Express.js, Sequelize ORM, PostgreSQL (or other DB)
- Email sending via Nodemailer (SMTP)
- Scheduled cron jobs for automated reminders

---

## Contribution Guide

- Fork the repository and create a new branch.
- Develop features or fixes and test them.
- Submit pull requests with clear descriptions.
