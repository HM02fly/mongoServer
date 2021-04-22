import mongoose from "mongoose";
import app from "./app";
import config from "./config";

mongoose
  .connect(config.mongo, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log("DB connected..."))
  .catch(() => console.log("Error connecting to database"));

app.listen(config.port, (error) => {
  if (error) return console.log(error);
  console.log(`Server is listening on port ${config.port}`);
});
