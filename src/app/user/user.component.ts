import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule } from '@angular/forms';
import { User } from '../../models/user.class';
import { MatCardModule } from '@angular/material/card';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';  // Import Router for navigation

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [
    MatIconModule,
    MatTooltipModule,
    MatDialogModule,
    MatNativeDateModule,
    FormsModule,
    MatCardModule,
    CommonModule
  ],
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  User = new User();
  allUsers: User[] = [];
  firestore = inject(Firestore);

  constructor(public dialog: MatDialog, private router: Router) {}  // Inject Router here

  ngOnInit(): void {
    const usersCollection = collection(this.firestore, 'users');
    collectionData(usersCollection, { idField: 'customIdName' }).subscribe((changes: any) => {
      console.log('Received changes from DB', changes);
      this.allUsers = changes.map((user: any) => new User(user));  // Map Firestore data to User instances
    });
}


  openDialog() {
    this.dialog.open(DialogAddUserComponent);
  }

  goToUser(userId: string): void {
    this.router.navigate(['/user', userId]); 
  }

}
