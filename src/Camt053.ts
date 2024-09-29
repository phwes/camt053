import Account from "./Account";

class Camt053 {
  account: Account;

  // TODO: Create camt053Data type or interface
  constructor(camt053Data: any) {
    this.account = new Account(camt053Data);
  }
}

export default Camt053;
