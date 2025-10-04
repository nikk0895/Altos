import { Component } from '@angular/core';
import { NavbarComponent } from '../../shared/navbar/navbar.component'; 

@Component({
  selector: 'app-configurator',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './configurator.component.html',
  styleUrl: './configurator.component.css'
})
export class ConfiguratorComponent {

}
