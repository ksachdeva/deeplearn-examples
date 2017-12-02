import { Component } from '@angular/core';
import { TipPredictorService } from '../tip-predictor.service';

@Component({
  selector: 'app-tip-evaluate',
  templateUrl: './evaluate.component.html'
})
export class EvaluateComponent {
  constructor(private tipPredictorService: TipPredictorService) {
  }

  async evaluate() {
    await this.tipPredictorService.eval();
  }
}
