export * from './tip-predictor.component';

import { NgModule } from '@angular/core';

import { DataSetComponent } from './dataset';
import { TrainComponent } from './train';
import { EvaluateComponent } from './evaluate';
import { TipPredictorComponent } from './tip-predictor.component';
import { SharedModule } from '../../shared/modules/shared.module';
import { TipPredictorService } from './tip-predictor.service';
import { TipDataSetService } from './dataset.service';

@NgModule({
  imports: [
    SharedModule
  ],
  providers: [TipPredictorService, TipDataSetService],
  exports: [TipPredictorComponent],
  declarations: [
    DataSetComponent,
    TrainComponent,
    TipPredictorComponent,
    EvaluateComponent
  ]
})
export class TipPredictorModule { }
