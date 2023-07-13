import express from "express";
import helmet from "helmet";
import cors from "cors";
import rateLimit from "express-rate-limit";
import compression from "compression";

import mainRoutes from "./routes/main.routes";
import userRoutes from "./routes/user.routes";
import productsRoutes from "./routes/products.routes";

const app = express();
const port = 4000;

const rateLimiter = rateLimit({
  windowMs: 60 * 1000, // 1 min
  max: 100, // Limit each IP to 100 requests per `window` (here, per minute)
});

app.use(compression());

// Apply the rate limiting middleware to API calls only
// Further info about rate limiting https://en.wikipedia.org/wiki/Rate_limiting
app.use(rateLimiter);

// Parse incoming JSON requests and add it in `req.body`
app.use(express.json());

app.use(helmet());
app.use(cors());

app.use("/v1", mainRoutes);
app.use("/v1/user", userRoutes);
app.use("/v1/products", productsRoutes);

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
