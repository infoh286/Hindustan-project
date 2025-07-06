# Contact Form App

A simple server‑rendered contact/registration form built with **Node.js**, **Express**, **EJS**, and **Nodemailer**.

## Prerequisites

- Node.js (v14+ recommended)
- A Gmail account (or any SMTP credentials)

## Setup

```bash
git clone <repo-url>
cd contact-form-app
cp .env.example .env        # Add your email credentials to .env
npm install                 # Install dependencies
npm start                   # Start the server
```

Visit `http://localhost:3000` in your browser.

## Environment Variables

| Variable     | Description                                          |
|--------------|------------------------------------------------------|
| `EMAIL_USER` | Your email address (used as sender & recipient)      |
| `EMAIL_PASS` | Email password or Gmail App Password (if using Gmail)|
| `PORT`       | (Optional) Server port, defaults to 3000             |

## Folder Structure

```
contact-form-app/
├── index.js           # Express server
├── package.json
├── .env.example
├── views/
│   └── index.ejs      # Page template
└── public/
    └── style.css      # Styles
```
