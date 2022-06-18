import createStripe from "stripe-client";

const stripe = createStripe(
  "pk_test_51LBeqZCzHl8VbQYCA1LyWyUNYQm3PkkY3D5aI5ZBdyWm5w501orWHY3Zl65soENOjDNveXtTXc0Q2ZWKXqCFzPJl00H3NnczA7"
);

export const cardTokenRequest = (card) => stripe.createToken({ card });
