import Account from "./Account";
import Transaction from "./Transaction";

class Camt053 {
  account: Account;
  transactions: Transaction[];

  // TODO: Create camt053Data type or interface
  constructor(camt053Data: any) {
    this.account = new Account(camt053Data);
    this.transactions = Transaction.fromCamt053(camt053Data);
  }
}

export default Camt053;
