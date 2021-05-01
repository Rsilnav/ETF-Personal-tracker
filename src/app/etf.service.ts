import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
// TODO: find out a better place for services
export class EtfService {
  etfs: Etf[] = [
    { isin: "LU0996182563" },
    { isin: "IE00B42W3S00" },
  ]

  constructor() { }

  addEtf(etf: Etf) : void {
    this.etfs.push(etf);
  }

  getEtfs(): Etf[] {
    return this.etfs;
  }
}

// TODO: find out a better place for type definitions
type Etf = {
  isin: string;
}