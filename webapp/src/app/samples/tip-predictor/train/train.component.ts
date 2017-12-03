import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { TipPredictorService } from '../tip-predictor.service';

@Component({
  selector: 'app-tip-train',
  styleUrls: ['./train.component.css'],
  templateUrl: './train.component.html'
})
export class TrainComponent {

  options: FormGroup;

  units = [
    { value: 'cpu', viewValue: 'CPU' },
    { value: 'gpu', viewValue: 'GPU' }
  ];

  constructor(
    fb: FormBuilder,
    private tipPredictorService: TipPredictorService) {
    this.options = fb.group({
      unit: ['cpu', Validators.required],
      batch: [200, Validators.required],
      rate: [0.0001, Validators.required]
    });
  }

  async startTraining() {
    const model = this.options.value;
    await this.tipPredictorService.train(model);
  }

}

