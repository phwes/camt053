import readXmlFile from "./utils/readXmlFile";
import Camt053 from "./Camt053";

const data = readXmlFile("res/camt053.xml");
const camt053 = new Camt053(data);

console.log(camt053);
