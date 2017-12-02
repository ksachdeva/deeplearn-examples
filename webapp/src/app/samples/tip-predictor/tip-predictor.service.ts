import { Injectable } from '@angular/core';
import {
  Graph, Tensor, NDArrayMathCPU, Session,
  Scalar, InCPUMemoryShuffledInputProviderBuilder,
  SGDOptimizer, CostReduction
} from 'deeplearn';

@Injectable()
export class TipPredictorService {

  session: Session;
  y: Tensor;
  x: Tensor;

  constructor() {
  }

  public async train() {
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

      const xs: Scalar[] = [
        track(Scalar.new(34)),
        track(Scalar.new(108)),
        track(Scalar.new(64)),
        track(Scalar.new(88)),
        track(Scalar.new(99)),
        track(Scalar.new(51))
      ];
      const ys: Scalar[] = [
        track(Scalar.new(5)),
        track(Scalar.new(17)),
        track(Scalar.new(11)),
        track(Scalar.new(8)),
        track(Scalar.new(15)),
        track(Scalar.new(5))
      ];

      const shuffledInputProviderBuilder =
        new InCPUMemoryShuffledInputProviderBuilder([xs, ys]);
      const [xProvider, yProvider] =
        shuffledInputProviderBuilder.getInputProviders();

      // Training is broken up into batches.
      const NUM_BATCHES = 200;
      const BATCH_SIZE = xs.length;

      const LEARNING_RATE = .0001;
      const optimizer = new SGDOptimizer(LEARNING_RATE);

      for (let i = 0; i < NUM_BATCHES; i++) {
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

  public async eval() {
    // Now print the value from the trained model for x = 120, should be ~17.0.
    const result = this.session.eval(this.y, [{ tensor: this.x, data: Scalar.new(120) }]);
    console.log('result should be ~17.0:');
    console.log(result);
    console.log(await result.data());
  }

}
