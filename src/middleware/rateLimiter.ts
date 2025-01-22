import rateLimit from "express-rate-limit";
import { ErrorMessages } from "../utils/ErrorMessages";

export const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // Limit each IP to 5 login attempts
  message: {
    message: ErrorMessages.RATE_LIMIT_TRY_LATER,
  },
  standardHeaders: true, // Return rate limit info in `RateLimit-*` headers
  legacyHeaders: false, // Disable `X-RateLimit-*` headers
});
