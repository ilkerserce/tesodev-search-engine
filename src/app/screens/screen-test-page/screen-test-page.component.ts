import { Component } from '@angular/core';

import { PrimaryButtonComponentComponent } from '../../components/primary-button-component/primary-button-component.component';

@Component({
  selector: 'app-screen-test-page',
  standalone: true,
  imports: [PrimaryButtonComponentComponent],
  templateUrl: './screen-test-page.component.html',
  styleUrl: './screen-test-page.component.scss'
})
export class ScreenTestPageComponent {

}
