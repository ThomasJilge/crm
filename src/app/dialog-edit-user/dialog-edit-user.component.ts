import { Component, inject } from '@angular/core';
import { MatDialogActions, MatDialogContent, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { User } from '../../models/user.class';
import { FormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { Firestore, updateDoc, collection, doc, docData } from '@angular/fire/firestore';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-dialog-edit-user',
  standalone: true,
  imports: [MatDialogActions,
    MatDialogContent,
    MatFormFieldModule,
    MatProgressBarModule,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule, 
    CommonModule
  ],
  templateUrl: './dialog-edit-user.component.html',
  styleUrl: './dialog-edit-user.component.scss'
})
export class DialogEditUserComponent {
  user!: User;
  userId!: string;
  birthDate!: Date;
  loading = false;
  firestore = inject(Firestore);

  constructor(public dialogRef: MatDialogRef<DialogEditUserComponent>) {}

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
