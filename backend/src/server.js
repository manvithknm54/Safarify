import app from "./app.js";
import { ENV } from "./config/env.js";

const PORT = process.env.PORT || ENV.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});