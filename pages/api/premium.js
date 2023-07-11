const { Client } = require("@sendgrid/client");
const client = new Client();
client.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req, res) {
  const body = JSON.parse(req.body);

  console.log("log", body);

  const request = {
    method: "PUT",
    url: "/v3/marketing/contacts",
    body: {
      contacts: [
        {
          email: body.email,
          first_name: body.name,
          line: "Premium",
        },
      ],
    },
  };
  client
    .request(request)
    .then(console.log("Email Sent"))
    .then((json) => console.log(json))
    .catch(console.error);
}

export const config = {
  api: {
    externalResolver: true,
  },
}