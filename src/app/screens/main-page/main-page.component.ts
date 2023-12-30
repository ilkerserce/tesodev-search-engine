import { Component } from '@angular/core';
import { PrimaryButtonComponentComponent } from '../../components/primary-button-component/primary-button-component.component';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [PrimaryButtonComponentComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {

}
