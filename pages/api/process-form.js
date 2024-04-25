import axios from "axios";

function createEmailTemplate(data) {
  return `
      <h1>Contact Request Notification</h1>
      <p>You have a new contact request from your website:</p>
      <ul>
        <li>Name: ${data.firstName} ${data.lastName}</li>
        <li>Company: ${data.company}</li>
        <li>Email: ${data.email}</li>
        <li>Message: ${data.message}</li>
      </ul>
    `;
}

export default async function POST(req, res) {
  if (req.method === "POST") {
    const { firstName, lastName, company, email, message } = await req.body;
    console.log({ firstName, lastName, company, email, message });

    await axios
      .post(
        `${process.env.NODE_MAILER}/send`,
        {
          subject: `[Portfolio Get In Touch] - Company: ${company}`,
          html: createEmailTemplate({
            firstName,
            lastName,
            company,
            email,
            message,
          }),
          targetEmail: process.env.TARGET_EMAIL,
        },
        {
          headers: {
            authorization: `Bearer ${process.env.NODEMAILER_API_KEY}`,
          },
        },
      )
      .catch((err) => {
        res.status(500).json({ message: "Something went wrong" });
        return;
      });

    res.status(200).json({ message: "Data received successfully" });
  }
  res.status(400).json({ message: "Bad request" })
}
