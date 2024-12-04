import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  issues: any[] = [];
  ngOnInit(): void {
    const savedIssues = localStorage.getItem('key');
    if (savedIssues) {
      try {
        const parsedData = JSON.parse(savedIssues);
        this.issues = Array.isArray(parsedData) ? parsedData : [];
        console.log('Loaded issues:', this.issues);
      } catch (error) {
        console.error('Error parsing local storage data:', error);
        this.issues = [];
      }
    } else {
      console.warn('No data found in localStorage for "key".');
      this.issues = [];
    }
  }



}

