import { Accounts } from 'apollo-accounts';

export default class extends Accounts {
  constructor(connector) {
    super();
    this.connector = connector;
  }
  findUser(args) {
    console.log(args);
  }
  createUser(args) {

  }
}
