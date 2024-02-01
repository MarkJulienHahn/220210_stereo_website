export default async function handler(req, res) {
  try {
    const body = JSON.parse(req.body);

    const headers = {
      "X-Authorization": process.env.CHEC_SECRET_KEY,
      "Content-Type": "application/json",
      Accept: "application/json",
    };

    const orderResponse = await fetch(
      `${process.env.CHEC_API_URL}/v1/orders/${body.id}`,
      { headers: headers }
    );
    const order = await orderResponse.json();

    console.log(order);
    const transactionId = order.transactions[0].id;

    const updateResponse1 = await fetch(
      `${process.env.CHEC_API_URL}/v1/orders/${body.id}/transactions/${transactionId}`,
      {
        method: "PUT",
        headers: headers,
        body: JSON.stringify({
          status: "complete",
          gateway_transaciton_id: "",
        }),
      }
    );

    const updateResponse2 = body.fulfillment.digital.downloads.map(
      async (download) => {
        const response = await fetch(
          `${process.env.CHEC_API_URL}/v1/orders/${body.id}/fulfillments/digital/packages/${download.id}`,
          {
            method: "POST",
            headers: headers,
            body: JSON.stringify({
              remaining_downloads: null,
            }),
          }
        );
        return response.json();
      }
    );

    const updateResult1 = await updateResponse1.json();
    const updateResult2 = await updateResponse2.json();

    res
      .status(200)
      .json({ message: "Order processed", updateResult1, updateResult2 });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
