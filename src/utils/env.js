const liveHost = "https://some-live-host";
const localHost = "http://localhost:5001/mealstogo-fa5bf/us-central1";

export const isDevelopment = process.env.NODE_ENV === "development";

export const host = isDevelopment ? localHost : liveHost;
