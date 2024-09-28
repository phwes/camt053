import readXmlFile from "./readXmlFile";

describe("readXmlFile", () => {
  it("should read XML file", () => {
    const data = readXmlFile("res/camt053.xml");

    expect(data).toBeDefined();
    expect(data).toHaveProperty("Document");
  });
});
