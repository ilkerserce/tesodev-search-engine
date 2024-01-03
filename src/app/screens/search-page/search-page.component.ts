import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimaryButtonComponentComponent } from '../../components/primary-button-component/primary-button-component.component';
import { RouterLinkService } from '../../services/router-link-service';

@Component({
  selector: 'app-search-page',
  standalone: true,
  imports: [
    CommonModule,
    PrimaryButtonComponentComponent,
  ],
  templateUrl: './search-page.component.html',
  styleUrl: './search-page.component.scss'
})

export class SearchPageComponent {
  constructor(public routerLinkService: RouterLinkService) { }

  selectedOption: string = 'Order By';
  showOptionsFlag: boolean = false;

  toggleOptions() {
    this.showOptionsFlag = !this.showOptionsFlag;
  }

  selectOption(option: string) {
    this.selectedOption = option;
    this.showOptionsFlag = false;
  }
}
