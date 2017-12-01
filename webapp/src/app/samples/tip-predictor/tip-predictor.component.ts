import { Component } from '@angular/core';
import { TipPredictorService } from './tip-predictor.service';

@Component({
  selector: 'app-tip-predictor',
  providers: [TipPredictorService],
  templateUrl: './tip-predictor.component.html'
})
export class TipPredictorComponent {
  constructor(private tipPredictorService: TipPredictorService) {
  }

  async train() {
    await this.tipPredictorService.train();
  }

}
