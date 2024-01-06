import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimaryButtonComponentComponent } from '../../components/primary-button-component/primary-button-component.component';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLinkService } from '../../services/router-link-service';
import { DataService } from '../../services/data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    PrimaryButtonComponentComponent
  ],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})

export class MainPageComponent {
  private subscription: Subscription;
  searchKeywordForm: FormGroup;

  constructor(private fb: FormBuilder,
    public routerLinkService: RouterLinkService,
    public dataService: DataService) {
    this.searchKeywordForm = this.fb.group({
      searchKeyword: '',
    })

    this.subscription = this.searchKeywordForm.controls['searchKeyword'].valueChanges.subscribe((newValue) => {
      if (newValue || newValue === '') { // Kontrolün boş bir string olduğunu kontrol et
        this.dataService.filterDataByKeyValuePair('nameSurname', newValue);
      }
    });
  }

  ngOnInit() {
    this.searchKeywordForm.patchValue({
      searchKeyword: ''
    });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  redirectToSearchPage() {
    const searchKeyword = this.searchKeywordForm.value.searchKeyword;
    this.routerLinkService.redirectRouterLink('./search-page', { nameSurname: searchKeyword });
  }
}
