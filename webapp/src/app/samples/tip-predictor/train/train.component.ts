import { Component } from '@angular/core';
import { TipPredictorService } from '../tip-predictor.service';

@Component({
  selector: 'app-tip-train',
  styleUrls: ['./train.component.css'],
  templateUrl: './train.component.html'
})
export class TrainComponent {

  constructor(private tipPredictorService: TipPredictorService) {
  }

  async startTraining() {
    await this.tipPredictorService.train();
  }

}

