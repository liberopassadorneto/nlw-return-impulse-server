import nodemailer from "nodemailer";
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "1fded381d34625",
    pass: "88b914066d5771",
  },
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: "Equipe Feedget <oi@feedget.com>",
      to: "Libero <liberopassadorneto@gmail.com>",
      subject,
      html: body,
      // html: [
      //   `<div style="font-family: sans-serif; font-size: 16px; color: #111">`,
      //   `<p>Tipo de feedback: ${type}</p>`,
      //   `<p>Comentário: ${comment}</p>`,
      //   `</div>`,
      // ].join("\n"),
    });
  }
}
