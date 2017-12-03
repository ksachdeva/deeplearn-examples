import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { TipPredictorService } from '../tip-predictor.service';

@Component({
  selector: 'app-tip-evaluate',
  templateUrl: './evaluate.component.html'
})
export class EvaluateComponent {

  options: FormGroup;

  constructor(
    private fb: FormBuilder,
    private tipPredictorService: TipPredictorService) {
    this.options = fb.group({
      bill: [200, Validators.required],
      tip: new FormControl({ value: '', disabled: true })
    });
  }

  async evaluate() {
    const newBill = this.options.value.bill;
    const newTip = await this.tipPredictorService.eval(newBill);
    this.options.setControl('tip', this.fb.control(newTip[0]));
  }
}
