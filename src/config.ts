declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: string | undefined;
      PORT: string | undefined;
      MONGODB_URI: string;
    }
  }
}

export {};
