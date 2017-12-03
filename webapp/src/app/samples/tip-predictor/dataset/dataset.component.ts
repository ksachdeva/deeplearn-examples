import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { TipDataSet, TipDataSetService } from '../dataset.service';

@Component({
  selector: 'app-tip-dataset',
  styleUrls: ['./dataset.component.css'],
  templateUrl: './dataset.component.html'
})
export class DataSetComponent implements OnInit {
  displayedColumns = ['bill', 'tip'];
  dataSource = new MatTableDataSource<TipDataSet>();

  constructor(private dataSetService: TipDataSetService) {
  }

  ngOnInit() {
    this.dataSetService.getDataSet().then((dataSet) => {
      this.dataSource = new MatTableDataSource<TipDataSet>(dataSet);
    });
  }
}

