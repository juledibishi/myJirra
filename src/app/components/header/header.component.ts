import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { FormControl, FormControlName, ReactiveFormsModule } from '@angular/forms';
import { IssueDialogComponent } from '../issue-dialog/issue-dialog.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatButtonModule, MatInputModule, ReactiveFormsModule, MatDialogModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  readonly dialog = inject(MatDialog);
  constructor() { }

  ngOnInit() { }
  openDialog(): void {
    const dialogRef = this.dialog.open(IssueDialogComponent, {

    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });
  }
}

