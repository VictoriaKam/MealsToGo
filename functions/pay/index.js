module.exports.payRequest = (request, response, stripe) => {
  const body = JSON.parse(request.body);
  console.log(body.token, body.amount, body.name);
  response.send("success");
};

// module.exports.payRequest = (request, response, stripeClient) => {
//   const body = JSON.parse(request.body);
//   const { token, amount } = body;
//   stripeClient.paymentIntents
//     .create({
//       amount,
//       currency: "USD",
//       payment_method_types: ["card"],
//       payment_method_data: {
//         type: "card",
//         card: {
//           token,
//         },
//       },
//       confirm: true,
//     })
//     .then((paymentIntent) => {
//       response.json(paymentIntent);
//     })
//     .catch((e) => {
//       console.log(e);
//       response.status(400);
//       response.send(e);
//     });
// };
