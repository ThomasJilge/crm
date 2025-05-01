import { Component, inject } from '@angular/core';
import { MatDialogActions, MatDialogContent, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { User } from '../../models/user.class';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Firestore, updateDoc , collection, doc, docData } from '@angular/fire/firestore';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-dialog-edit-address',
  standalone: true,
  imports: [CommonModule,
    MatDialogContent,
    MatProgressBarModule,
    MatFormFieldModule,
    MatDialogActions,
    FormsModule,
    MatInputModule
  ],
  templateUrl: './dialog-edit-address.component.html',
  styleUrl: './dialog-edit-address.component.scss'
})
export class DialogEditAddressComponent {
  user!: User;
  userId!: string;
  loading = false;
  firestore = inject(Firestore);

  constructor(public dialogRef: MatDialogRef<DialogEditAddressComponent>) {}

  saveUser() {
    const userDocRef = doc(this.firestore, `users/${this.userId}`);
    updateDoc(userDocRef, this.user.toJSON()).then(() => {
      this.loading = false;
      this.dialogRef.close();
    }).catch((error) => {
      console.error('Fehler beim Aktualisieren des Benutzers:', error);
      this.loading = false;
    });
  }
  

}
