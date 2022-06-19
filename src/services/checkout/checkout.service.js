import createStripe from "stripe-client";

import { host } from "../../utils/env";

const stripe = createStripe(
  "pk_test_51LBeqZCzHl8VbQYCA1LyWyUNYQm3PkkY3D5aI5ZBdyWm5w501orWHY3Zl65soENOjDNveXtTXc0Q2ZWKXqCFzPJl00H3NnczA7"
);

export const cardTokenRequest = (card) => stripe.createToken({ card });

export const payRequest = (token, amount, name) => {
  return fetch(`${host}/pay`, {
    body: JSON.stringify({
      token,
      name,
      amount,
    }),
    method: "POST",
  }).then((res) => {
    if (res.status > 200) {
      return Promise.reject("something went wrong processing your payment");
    }
    return res.json();
  });
};
