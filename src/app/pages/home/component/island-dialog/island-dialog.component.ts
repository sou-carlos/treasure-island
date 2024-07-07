import {Component, inject, model } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

@Component({
  selector: 'app-island-dialog',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
  ],
  templateUrl: './island-dialog.component.html',
  styleUrl: './island-dialog.component.scss'
})
export class IslandDialogComponent {
  readonly dialogRef = inject(MatDialogRef<IslandDialogComponent>);
  readonly data = inject(MAT_DIALOG_DATA);
  readonly answer = model(this.data.animal);

  close(): void {
    this.dialogRef.close();
  }
}
