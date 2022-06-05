const client = require("@sendgrid/client");
client.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req, res) {
  const body = JSON.parse(req.body);

  const data = {
    contacts: [
      {
        email: body.email,
        custom_fields: {
          name: body.name,
        },
      },
    ],
  };

  const request = {
    url: `/v3/marketing/contacts`,
    method: "PUT",
    body: data,
  };

  client
    .request(request)
    .then(([response, body]) => {
      console.log(response.statusCode);
      console.log(response.body);
    })
    .catch((error) => {
      console.error(error);
    });
}
