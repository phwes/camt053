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
        Ntry: [
          {
            Amt: {
              attr_Ccy: "EUR",
              value: "100",
            },

            BookgDt: {
              Dt: new Date(),
            },
            NtryDtls: {
              RmtInf: "Test transaction",
            },
          },
          {
            Amt: {
              attr_Ccy: "EUR",
              value: "200",
            },
            BookgDt: {
              Dt: new Date(),
            },
            NtryDtls: {
              RmtInf: "Test transaction 2",
            },
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
    expect(camt053.transactions).toHaveLength(2);
    expect(camt053.transactions[0].amount).toBe(100);
    expect(camt053.transactions[0].currency).toBe("EUR");
    expect(camt053.transactions[0].bookingDate).toBeInstanceOf(Date);
  });
});
