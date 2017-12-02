import {
  MatToolbarModule,
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatSliderModule,
  MatSnackBarModule,
  MatTooltipModule,
  MatChipsModule,
  MatTableModule
} from '@angular/material';
import { CdkTableModule } from '@angular/cdk/table';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    CdkTableModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatCardModule,
    MatSliderModule,
    MatProgressBarModule,
    MatInputModule,
    MatGridListModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatTooltipModule,
    MatListModule,
    MatDialogModule,
    MatChipsModule,
    MatTableModule
  ],
  exports: [
    CdkTableModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatCardModule,
    MatSliderModule,
    MatProgressBarModule,
    MatInputModule,
    MatGridListModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatTooltipModule,
    MatListModule,
    MatDialogModule,
    MatChipsModule,
    MatTableModule
  ],
})

export class MaterialModule {
}
