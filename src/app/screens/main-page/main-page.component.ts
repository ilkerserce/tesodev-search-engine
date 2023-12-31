import { Component } from '@angular/core';
import { PrimaryButtonComponentComponent } from '../../components/primary-button-component/primary-button-component.component';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [
    PrimaryButtonComponentComponent,
    ReactiveFormsModule,
  ],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})

export class MainPageComponent {
  searchKeywordForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.searchKeywordForm = this.fb.group({
      searchKeyword: '',
    })
  }

  ngOnInit() {
    this.searchKeywordForm.valueChanges.subscribe((newValue) => {
      console.log(newValue);
    });
  }
}
