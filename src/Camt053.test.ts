import Account from "./Account";
import Camt053 from "./Camt053";

const camt053Data = {
  Document: {
    BkToCstmrStmt: {
      Stmt: {
        Acct: {
          Id: {
            Othr: {
              Id: "1234567890",
            },
          },
          Ccy: "EUR",
          Ownr: {
            Nm: "John Doe",
          },
        },
        Bal: [
          {
            Tp: {
              CdOrPrtry: {
                Cd: "CLBD",
              },
            },
            Amt: { value: "1000" },
          },
        ],
      },
    },
  },
};

describe("Camt053", () => {
  it("should create a new instance of Camt053", () => {
    const camt053 = new Camt053(camt053Data);
    expect(camt053).toBeInstanceOf(Camt053);
    expect(camt053.account).toBeInstanceOf(Account);
    expect(camt053.account.accountNumber).toBe("1234567890");
    expect(camt053.account.currency).toBe("EUR");
    expect(camt053.account.ownerName).toBe("John Doe");
    expect(camt053.account.balance).toBe(1000);
  });
});
