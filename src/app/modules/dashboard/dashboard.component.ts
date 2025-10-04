import { Component } from '@angular/core';
import { NavbarComponent } from '../../shared/navbar/navbar.component'; // adjust path if needed

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NavbarComponent],  // ✅ Import NavbarComponent here
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {}
