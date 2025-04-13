import { Component } from '@angular/core';
import { MatDialogContent, MatDialogActions } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule } from '@angular/forms';
import { User } from '../../models/user.class';
import { Firestore, collection, addDoc, getFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-dialog-add-user',
  standalone: true, // Ensure it's a standalone component
  imports: [
    MatDialogContent,
    MatDialogActions,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule
  ],
  templateUrl: './dialog-add-user.component.html',
  styleUrls: ['./dialog-add-user.component.scss']
})
export class DialogAddUserComponent {

  User = new User();
  birthDate!: Date;

  constructor() { }


  saveUser() {
    this.User.birthDate = this.birthDate?.getTime();
    console.log('Current user is', this.User);

    const firestore = getFirestore();

    addDoc(collection(firestore, 'users'), this.User.toJSON())
      .then((result: any) => {
        console.log('Adding user finish', result);
      });
  }

}
