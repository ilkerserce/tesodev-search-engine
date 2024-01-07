import { Component, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimaryButtonComponentComponent } from '../../components/primary-button-component/primary-button-component.component';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLinkService } from '../../services/router-link-service';
import { DataService } from '../../services/data.service';
import { Subscription } from 'rxjs';
import { UlvisService } from '../../services/ulvis.service';

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
  @ViewChild('carouselContainer') carouselContainer!: ElementRef;

  private subscription: Subscription;
  searchKeywordForm: FormGroup;
  scrollPosition = 0;
  itemWidth = 328;

  constructor(private fb: FormBuilder,
    public routerLinkService: RouterLinkService,
    public dataService: DataService,
    private ulvisService: UlvisService) {
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
    this.ulvisService.ulvisMinifyUrl();
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

  scrollCarousel(direction: string): void {
    const container: HTMLElement = this.carouselContainer.nativeElement;
    const containerScrollPosition = container.scrollLeft;
    const itemWidth = 328; // Her bir carousel öğesinin genişliği (örneğin)

    if (direction === 'left') {
      container.scrollTo({
        left: containerScrollPosition - itemWidth,
        behavior: 'smooth' // Daha yumuşak kaydırma için
      });
    } else if (direction === 'right') {
      container.scrollTo({
        left: containerScrollPosition + itemWidth,
        behavior: 'smooth'
      });
    }
  }
}
