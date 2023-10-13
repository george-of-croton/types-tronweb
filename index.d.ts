import EventEmitter = require("events");

type Headers = { [K: string]: string | number };

export type Account = {
  privateKey: string;
  publicKey: string;
  address: {
    base58: string;
    hex: string;
  };
};

export default class TronWeb extends EventEmitter {
  constructor(options?: {
    fullHost?: string;
    privateKey?: string;
    headers?: Headers;
  });

  isAddress(address: string): Promise<boolean>;
  createAccount(): Promise<Account>;
}
