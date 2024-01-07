import { Component, ElementRef, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimaryButtonComponentComponent } from '../../components/primary-button-component/primary-button-component.component';
import { RouterLinkService } from '../../services/router-link-service';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../services/data.service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-search-page',
  standalone: true,
  imports: [
    CommonModule,
    PrimaryButtonComponentComponent,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './search-page.component.html',
  styleUrl: './search-page.component.scss'
})

export class SearchPageComponent {
  searchKeywordForm: FormGroup;
  selectedOption: string = 'Order By';
  showOptionsFlag: boolean = false;
  nameSurname!: string;

  constructor(public routerLinkService: RouterLinkService,
    private renderer: Renderer2,
    private elementRef: ElementRef,
    private route: ActivatedRoute,
    public dataService: DataService,
    private fb: FormBuilder) {

    this.route.queryParams.subscribe(params => {
      this.nameSurname = params['nameSurname'];
      this.dataService.filterDataByKeyValuePair('nameSurname', this.nameSurname);
    });

    this.searchKeywordForm = this.fb.group({
      searchKeyword: '',
    })
  }

  ngOnInit() {
    this.searchKeywordForm.patchValue({
      searchKeyword: this.nameSurname,
    })
    this.dataService.divideResultsIntoArrays();
    this.dataService.getPageNumbers();
  }

  removeShowClass() {
    const element = this.elementRef.nativeElement.querySelector('.select-items');
    if (element) {
      this.renderer.removeClass(element, 'show');
    }
  }

  toggleOptions() {
    this.showOptionsFlag = !this.showOptionsFlag;
  }

  selectOption(option: string) {
    this.selectedOption = option;

    if (option === 'Name ascending') {
      this.dataService.sortDataByName('asc');
    } else if (option === 'Name descending') {
      this.dataService.sortDataByName('desc');
    } else if (option === 'Year ascending') {
      this.dataService.sortDataByDate('asc');
    } else if (option === 'Year descending') {
      this.dataService.sortDataByDate('desc');
    }
    this.removeShowClass()
  }

  goToPage(pageNumber: number) {
    this.dataService.currentPage = pageNumber;
  }

  search() {
    this.dataService.filterDataByKeyValuePair('nameSurname', this.searchKeywordForm.value['searchKeyword']);
  };
}
