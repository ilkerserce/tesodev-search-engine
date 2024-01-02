import { Component } from '@angular/core';
import { PrimaryButtonComponentComponent } from '../../components/primary-button-component/primary-button-component.component';
import { RouterLinkService } from '../../services/router-link-service';

@Component({
  selector: 'app-search-page',
  standalone: true,
  imports: [
    PrimaryButtonComponentComponent,
  ],
  templateUrl: './search-page.component.html',
  styleUrl: './search-page.component.scss'
})

export class SearchPageComponent {
  constructor(public routerLinkService: RouterLinkService) { }
}
