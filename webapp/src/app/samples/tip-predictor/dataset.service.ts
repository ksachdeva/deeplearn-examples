import { Injectable } from '@angular/core';

export interface TipDataSet {
  bill: number;
  tip: number;
}

@Injectable()
export class TipDataSetService {

  TIP_DATA_SET: TipDataSet[] = [
    { bill: 34, tip: 5 },
    { bill: 108, tip: 17 },
    { bill: 64, tip: 11 },
    { bill: 88, tip: 8 },
    { bill: 99, tip: 15 },
    { bill: 51, tip: 5 }
  ];

  constructor() {
  }

  getDataSet() {
    return Promise.resolve(this.TIP_DATA_SET);
  }

}
