import cors from "cors";

const allowedOrigins = ["http://localhost:3000"];

export const CORSOptions: cors.CorsOptions = {
  origin: allowedOrigins,
};
