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
  MatTableModule,
  MatSelectModule,
  MatOptionModule,
  MatFormFieldModule
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
    MatTableModule,
    MatOptionModule,
    MatSelectModule,
    MatFormFieldModule
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
    MatTableModule,
    MatOptionModule,
    MatSelectModule,
    MatFormFieldModule
  ],
})
export class MaterialModule {
}
