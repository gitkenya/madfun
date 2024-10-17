import nodemailer from "nodemailer";

type EmailPayload = {
  to: string;
  replyTo: string;
  subject: string;
  html: string;
};

// Replace with your SMTP credentials
const smtpOptions = {
  host: process.env.ZEPTO_MAIL_SMTP_HOST,
  port: parseInt(process.env.ZEPTO_MAIL_SMTP_PORT!),
  secure: false,
  auth: {
    user: process.env.ZEPTO_MAIL_SMTP_USER,
    pass: process.env.ZEPTO_MAIL_SMTP_PASSWORD,
  },
};

export const ZeptoMailer = async (data: EmailPayload) => {
  const transporter = nodemailer.createTransport({
    ...smtpOptions,
  });

  return await transporter.sendMail({
    from: {
      name: "Madfun",
      address: process.env.ZEPTO_MAIL_SMTP_FROM!,
    },
    ...data,
  });
};
