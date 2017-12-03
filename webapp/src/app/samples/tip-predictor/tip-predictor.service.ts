import { Injectable } from '@angular/core';
import {
  Graph, Tensor, NDArrayMathCPU, Session,
  Scalar, InCPUMemoryShuffledInputProviderBuilder,
  SGDOptimizer, CostReduction
} from 'deeplearn';
import { TipDataSetService } from './dataset.service';

@Injectable()
export class TipPredictorService {

  session: Session;
  y: Tensor;
  x: Tensor;

  constructor(private dataSetService: TipDataSetService) {
  }

  public async train(input: {
    cpu: string;
    batch: number;
    rate: number;
  }) {
    const graph = new Graph();

    this.x = graph.placeholder('x', []);
    const w: Tensor = graph.variable('w', Scalar.new(Math.random()));
    const b: Tensor = graph.variable('b', Scalar.new(Math.random()));

    const order: Tensor = graph.multiply(w, this.x);
    this.y = graph.add(b, order);

    const yLabel: Tensor = graph.placeholder('y label', []);

    const cost: Tensor = graph.meanSquaredCost(this.y, yLabel);

    const math = new NDArrayMathCPU();
    this.session = new Session(graph, math);

    await math.scope(async (keep, track) => {

      // get the data set
      const ds = await this.dataSetService.getDataSet();

      const xs: Scalar[] = ds.map(s => track(Scalar.new(s.bill)));
      const ys: Scalar[] = ds.map(s => track(Scalar.new(s.tip)));

      const shuffledInputProviderBuilder =
        new InCPUMemoryShuffledInputProviderBuilder([xs, ys]);
      const [xProvider, yProvider] =
        shuffledInputProviderBuilder.getInputProviders();

      // Training is broken up into batches.
      const BATCH_SIZE = xs.length;
      const optimizer = new SGDOptimizer(input.rate);

      for (let i = 0; i < input.batch; i++) {
        // Train takes a cost tensor to minimize; this call trains one batch and
        // returns the average cost of the batch as a Scalar.
        const costValue = this.session.train(
          cost,
          // Map input providers to Tensors on the graph.
          [{ tensor: this.x, data: xProvider }, { tensor: yLabel, data: yProvider }],
          BATCH_SIZE, optimizer, CostReduction.MEAN);

        console.log('average cost: ' + await costValue.data());
      }
    });

  }

  public async eval(newBill: number) {
    const result = this.session.eval(
      this.y, [{ tensor: this.x, data: Scalar.new(newBill) }]);
    return result.data();
  }

}
