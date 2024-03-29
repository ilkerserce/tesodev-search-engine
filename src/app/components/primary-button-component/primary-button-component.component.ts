import { Component, Input } from '@angular/core';

@Component({
  selector: 'primary-button-component',
  standalone: true,
  imports: [],
  templateUrl: './primary-button-component.component.html',
  styleUrl: './primary-button-component.component.scss'
})
export class PrimaryButtonComponentComponent {
  @Input() buttonContent!: string;
  @Input() disableCondition!: boolean;
}
