import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatOptionModule } from '@angular/material/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-issue-dialog',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatFormFieldModule, MatSelectModule, MatInputModule, MatButtonModule, ReactiveFormsModule, MatOptionModule],
  templateUrl: './issue-dialog.component.html',
  styleUrl: './issue-dialog.component.scss'
})
export class IssueDialogComponent {
  issueForm!: FormGroup;
  projects = ['Project A', 'Project B', 'Project C'];
  issueTypes = ['Bug', 'Feature', 'Task', 'Improvement'];

  constructor(private fb: FormBuilder, private dialogRef: MatDialogRef<IssueDialogComponent>) {
    this.issueForm = this.fb.group({
      project: ['', Validators.required],
      issueType: ['', Validators.required],
      summary: ['', [Validators.required, Validators.maxLength(100)]],
      description: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  onCancel() {
    this.dialogRef.close();
  }

  onCreate() {
    localStorage.setItem('key', JSON.stringify(this.issueForm.value))
  }

}
