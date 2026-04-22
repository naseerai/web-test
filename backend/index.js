const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors()); // This allows your React app to connect

// 1. Setup Hostinger SMTP Transporter
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: true, // true for 465
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// 2. Define the Email Route
app.post('/send-blog-notification', async (req, res) => {
  const { title, slug, imageUrl, subscribers } = req.body;

  if (!subscribers || subscribers.length === 0) {
    return res.status(400).json({ error: "No subscribers found" });
  }

  const blogUrl = `https://myaccesscloud.com/blogs/${slug}`;

  try {
    const info = await transporter.sendMail({
      from: `"MYACCESS Blog" <${process.env.SMTP_USER}>`,
      bcc: subscribers, // Sends to everyone privately
      subject: ` New Article: ${title}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: auto; border: 1px solid #eee; padding: 20px; border-radius: 15px;">
          <img src="${imageUrl}" style="width: 100%; border-radius: 10px; margin-bottom: 20px;" />
          <h1 style="color: #171717; font-size: 24px;">${title}</h1>
          <p style="color: #555; font-size: 16px; line-height: 1.6;">
            We just published a new article on our blog. Click the button below to read the full story.
          </p>
          <a href="${blogUrl}" style="display: inline-block; background: #f47c20; color: white; padding: 14px 28px; text-decoration: none; border-radius: 10px; font-weight: bold; margin-top: 10px;">
            Read Full Article →
          </a>
          <hr style="margin-top: 30px; border: none; border-top: 1px solid #eee;" />
          <p style="font-size: 12px; color: #999; text-align: center;">
            MYACCESS Engineering Team<br/>
            You received this because you subscribed to our newsletter.
          </p>
        </div>
      `,
    });

    console.log("Message sent: %s", info.messageId);
    res.status(200).json({ success: true, message: "Emails sent!" });
  } catch (error) {
    console.error("SMTP Error:", error);
    res.status(500).json({ error: "Failed to send email" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Backend running on http://localhost:${PORT}`));