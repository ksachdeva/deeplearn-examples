import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-tip-dataset',
  styleUrls: ['./dataset.component.css'],
  templateUrl: './dataset.component.html'
})
export class DataSetComponent {
  displayedColumns = ['position', 'bill', 'tip'];
  dataSource = new MatTableDataSource<TipDataSet>(TIP_DATA_SET);
}

export interface TipDataSet {
  position: number;
  bill: number;
  tip: number;
}

const TIP_DATA_SET: TipDataSet[] = [
  { position: 1, bill: 1.0079, tip: 1 },
  { position: 2, bill: 2.0, tip: 4 }
];
