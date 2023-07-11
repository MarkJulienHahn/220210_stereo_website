export default async function handler(req, res) {
  const body = JSON.parse(req.body);

  const url = new URL(
    `https://api.chec.io/v1/checkouts/${body}/helper/set_tax_zone`
  );

  const params = {
    "ip_address": "",
    "country": "0",
    "region": "CA",
    "postal_zip_code": "94107",
  };

  Object.keys(params).forEach((key) =>
    url.searchParams.append(key, params[key])
  );

  const headers = {
    "X-Authorization": process.env.CHEC_SECRET_KEY,
    "Content-Type": "application/json",
    Accept: "application/json",
  };

  console.log(body);

  fetch(url, {
    method: "GET",
    headers: headers,
  }).then((response) => response.json());
  return res.status(200).end();
}

export const config = {
  api: {
    externalResolver: true,
  },
}