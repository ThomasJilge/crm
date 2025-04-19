import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialog } from '@angular/material/dialog';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule } from '@angular/forms';
import { User } from '../../models/user.class';
import {MatCardModule} from '@angular/material/card';


@Component({
  selector: 'app-user',
  standalone: true,
  imports: [MatIconModule,
    MatTooltipModule,
    MatDialogModule,
    MatNativeDateModule,
    FormsModule,
    MatCardModule
  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {

  User = new User();

  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(DialogAddUserComponent);
  }

}


