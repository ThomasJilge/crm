import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import {  MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ActivatedRoute, RouterModule, Router } from '@angular/router';
import { Firestore, collection, doc, docData } from '@angular/fire/firestore';
import { inject } from '@angular/core';
import { User } from '../../models/user.class';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import { DialogEditAddressComponent } from '../dialog-edit-address/dialog-edit-address.component';
import { DialogEditUserComponent } from '../dialog-edit-user/dialog-edit-user.component';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [
    MatCardModule,
    MatDialogModule,
    RouterModule,
    MatIconModule,
    MatMenuModule
  ],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.scss'
})
export class UserDetailComponent {

  userId = '';
  user: User = new User();
  firestore = inject(Firestore);

constructor (private route: ActivatedRoute, public dialog: MatDialog, private router: Router) { 
}

ngOnInit(): void {
  this.route.paramMap.subscribe( paramMap => {
    this.userId = paramMap.get('id') || '';
    console.log('GOT ID', this.userId);
    this.getUser();
  })
}

getUser() {
  const userDocRef = doc(this.firestore, 'users', this.userId);
  docData(userDocRef).subscribe((user: any) => {
    this.user = new User(user);
    console.log('Reviewed User', this.user); 
  });
}

editUserDetail() {
  this.dialog.open(DialogEditUserComponent);
}

editMenu() {
  const dialog = this.dialog.open(DialogEditAddressComponent);
  dialog.componentInstance.user = this.user;
}

}

