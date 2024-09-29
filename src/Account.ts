class Account {
  accountNumber: string;
  currency: string;
  ownerName: string;
  balance: number;

  constructor(camt053Data: any) {
    // Instructions pointed to Othr object, but I will assume we can use the Id directly
    // If not, create a new class or interface for Othr
    this.accountNumber =
      camt053Data.Document.BkToCstmrStmt.Stmt.Acct.Id.Othr.Id;
    this.currency = camt053Data.Document.BkToCstmrStmt.Stmt.Acct.Ccy;
    this.ownerName = camt053Data.Document.BkToCstmrStmt.Stmt.Acct.Ownr.Nm;
    this.balance = this.parseAccountBalance(camt053Data);

    this.validate();
  }

  parseAccountBalance(camt053Data: any): number {
    // Assuming we always have and want the closing balance
    const closingBalanceStatement =
      camt053Data.Document.BkToCstmrStmt.Stmt.Bal.find(
        (bal: any) => bal.Tp.CdOrPrtry.Cd === "CLBD"
      );
    const hasNegativeBalance = closingBalanceStatement.CdtDbtInd === "DR";

    const closingBalance = parseFloat(closingBalanceStatement.Amt);

    return hasNegativeBalance ? -closingBalance : closingBalance;
  }

  validate() {
    if (!this.accountNumber)
      throw new Error(`Invalid Account number: ${this.accountNumber}`);

    if (!this.currency)
      throw new Error(`Invalid Account currency: ${this.currency}`);

    if (!this.ownerName)
      throw new Error(`Invalid Account owner name: ${this.ownerName}`);

    if (!this.balance)
      throw new Error(`Invalid Account balance: ${this.balance}`);
  }
}

export default Account;
