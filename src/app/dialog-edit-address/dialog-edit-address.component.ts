import { Component } from '@angular/core';
import { MatDialogActions, MatDialogContent, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { User } from '../../models/user.class';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dialog-edit-address',
  standalone: true,
  imports: [MatDialogContent,
    MatProgressBarModule,
    MatFormFieldModule,
    MatDialogActions,FormsModule
  ],
  templateUrl: './dialog-edit-address.component.html',
  styleUrl: './dialog-edit-address.component.scss'
})
export class DialogEditAddressComponent {
  user!: User;
  loading = false;

  constructor(public dialogRef: MatDialogRef<DialogEditAddressComponent>) {}

  saveUser() {
    
  }

}
