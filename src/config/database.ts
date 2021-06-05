import Mongoose, { Error } from "mongoose";

export const database = () => {
  Mongoose.connect(
    process.env.NODE_ENV
      ? process.env.MONGODB_URI
      : "mongodb://localhost/chicago-boost",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    }
  )
    .then(() => console.log("Connected to MongoDB 🚀!"))
    .catch((err: Error) => console.log(err));
};
