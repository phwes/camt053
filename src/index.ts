import express, { Express } from "express";
import readXmlFile from "./utils/readXmlFile";
import Camt053 from "./service/Camt053";
import routes from "./routes";
import attachCamtData from "./middleware/attachCamtData";

const data = readXmlFile("res/camt053.xml");
const camt053 = new Camt053(data);

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(attachCamtData(camt053));
app.use(routes);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}.`);
});
