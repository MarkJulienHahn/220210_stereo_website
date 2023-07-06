const mail = require("@sendgrid/mail");

mail.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req, res) {
  const body = JSON.parse(req.body);

  const message = `
   ${body.name} möchte sich mit der Mailadresse: ${
    body.email
  } für unser Premium Program registrieren. Projekt: ${
    body.project ? body.project : "Kein Projekt angegeben"
  }`;

  console.log(message);

  const data = {
    to: "info@stereotypefaces.com",
    from: {
      email: "premium@stereotypefaces.com",
      name: "Stereo Typefaces",
    },
    subject: `Premium-Anfrage von ${body.name}`,
    text: message,
  };

  return mail
    .send(data)
    .then((response) => console.log("Email sent..."))
    .catch((error) => console.log(error.message));
  res.status(200).json({ status: "Ok" });
}
