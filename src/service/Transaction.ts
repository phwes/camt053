class Transaction {
  transactionId: string;
  bookingDate: Date;
  currency: string;
  amount: number;
  // TODO: Figure out remittance information structure
  remittanceInformation: any;

  constructor(data: any) {
    // Unsure if this is a good unique identifier.
    this.transactionId = data?.AcctSvcrRef;
    this.amount = parseFloat(data?.Amt.value);
    this.currency = data?.Amt.attr_Ccy;
    this.bookingDate = data?.BookgDt?.Dt;
    this.remittanceInformation = data?.NtryDtls?.TxDtls?.RmtInf;
  }

  static fromCamt053(camtData: any): Transaction[] {
    const entries = camtData?.Document?.BkToCstmrStmt?.Stmt?.Ntry || [];
    return entries.map((entry: any) => new Transaction(entry));
  }

  validate() {
    if (
      !this.transactionId ||
      !this.amount ||
      !this.currency ||
      !this.bookingDate
    ) {
      throw new Error("Invalid Transaction data");
    }
  }
}

export default Transaction;
