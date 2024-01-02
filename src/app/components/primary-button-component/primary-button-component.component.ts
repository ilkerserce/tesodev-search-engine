import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'primary-button-component',
  standalone: true,
  imports: [],
  templateUrl: './primary-button-component.component.html',
  styleUrl: './primary-button-component.component.scss'
})
export class PrimaryButtonComponentComponent {
  @Input() buttonContent!: string;
}
