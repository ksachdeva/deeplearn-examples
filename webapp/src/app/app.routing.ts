import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { HomeComponent } from './home';
import {
  TipPredictorComponent
} from './samples';

const samplesRoutes = [{
  path: 'samples/tip-predictor',
  component: TipPredictorComponent
}];

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'samples', pathMatch: 'full', redirectTo: 'samples/tip-predictor' },
  ...samplesRoutes,
  { path: '**', redirectTo: 'home' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: true });
