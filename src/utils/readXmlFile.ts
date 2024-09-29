import xmlParser from "fast-xml-parser";
import fs from "fs";

const readXmlFile = (file: string) => {
  const parser = new xmlParser.XMLParser({
    ignoreAttributes: false,
    attributeNamePrefix: "attr_",
    textNodeName: "value",
  });
  const rawData = fs.readFileSync(file, "utf8");
  const data = parser.parse(rawData);

  return data;
};

export default readXmlFile;
