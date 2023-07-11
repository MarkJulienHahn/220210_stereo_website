import { Client } from "@sendgrid/client";
const sgMail = require("@sendgrid/mail");

sgMail.setClient(new Client());
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req, res) {
  const body = JSON.parse(req.body);

  const message = `
    Name: ${body.firstName} ${body.lastName}\r\n
    Adress: ${body.adress}\r\n
    Zip-Code: ${body.zip}\r\n
    City: ${body.city}\r\n
    Country: ${body.country}\r\n
    State: ${body.state}\r\n
    Items: ${body.items}\r\n
    Discount: ${body.discount}\r\n
    Total: ${body.total}\r\n
    Tax: ${body.tax}\r\n
    Link: ${body.link}\r\n
    Payment: ${body.paymentMethod}\r\n
    Invoice-Number: ${body.id}
  `;

  const data = {
    to: body.email,
    from: {
      email: "orders@stereotypefaces.com",
      name: "Stereo Typefaces",
    },
    subject: `Thank you for your Order, ${body.firstName}`,
    text: message,
    html: "<p>Hello HTML world!</p>",
    template_id: "d-481ad35bffc74473a0ce7d72772a16b7",
    dynamic_template_data: {
      firstName: body.firstName,
      lastName: body.lastName,
      adress: body.adress,
      zip: body.zip,
      city: body.city,
      line_items: body.line_items,
      items: body.items,
      total: body.total,
      tax: body.tax,
      link: body.link,
      id: body.id,
      licensing: body.licensing,
    },
    attachments: [
      {
        content: body.attachment,
        filename: `STRTYPFCS-${body.id}.pdf`,
        type: "application/pdf",
        disposition: "attachment",
        content_id: "mytext",
      },
    ],
  };

  console.log("attachment:", body.attachment, body.licensing);
  // console.log(data);
  // console.log(pdfAttachment);

  return sgMail
    .send(data)
    .then(() => {
      console.log("res", res.json);
      return res.status(200).end();
    })
    .catch((error) => {
      console.log("error", error);
      return res.status(500).send(error);
    });
}

export const config = {
  api: {
    externalResolver: true,
  },
}