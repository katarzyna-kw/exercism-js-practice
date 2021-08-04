//
// This is only a SKELETON file for the 'Bank Account' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class BankAccount {
  constructor() {
    this.accountOpen = false;
    this.balanceIs = 0;
  }

  open() {
    if (this.accountOpen) throw new ValueError()
    this.accountOpen = true;
  }

  close() {
    if (!this.accountOpen) throw new ValueError()
    this.accountOpen = false;
    this.balanceIs = 0;
  }

  deposit(deposit) {
    if (!this.accountOpen || deposit<0) throw new ValueError()
    this.balanceIs += deposit;
  }

  withdraw(withdrawal) {
    if (!this.accountOpen || this.balanceIs <= 0 || withdrawal <= 0 || withdrawal > this.balanceIs) throw new ValueError()
    this.balanceIs -= withdrawal
  }

  get balance() {
    if (!this.accountOpen) throw new ValueError()
    return this.balanceIs;
  }
}

export class ValueError extends Error {
  constructor() {
    super('Bank account error');
  }
};