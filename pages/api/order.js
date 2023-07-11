export default async function handler(req, res) {
  const body = JSON.parse(req.body);

  const url = new URL(`https://api.chec.io/v1/checkouts/${body.id}`);

  console.log(body.id);

  let headers = {
    "X-Authorization": process.env.CHEC_SECRET_KEY,
    "Content-Type": "application/json",
    Accept: "application/json",
  };

  fetch(url, {
    method: "POST",
    headers: headers,
    body: body,
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
}

export const config = {
  api: {
    externalResolver: true,
  },
};
