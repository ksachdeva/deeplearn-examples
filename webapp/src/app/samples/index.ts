export * from './tip-predictor';

import { NgModule } from '@angular/core';
import { TipPredictorModule } from './tip-predictor';

@NgModule({
  imports: [
  ],
  exports: [
    TipPredictorModule
  ]
})
export class SamplesModule { }
