import { Component } from '@angular/core';
import { PrimaryButtonComponentComponent } from "../../components/primary-button-component/primary-button-component.component";
import { RouterLinkService } from '../../services/router-link-service';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { DataService } from '../../services/data.service';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-add-link-page',
    standalone: true,
    templateUrl: './add-link-page.component.html',
    styleUrl: './add-link-page.component.scss',
    imports: [
        CommonModule,
        PrimaryButtonComponentComponent,
        FormsModule,
        ReactiveFormsModule
    ]
})
export class AddLinkPageComponent {
    addFormGroup: FormGroup;

    constructor(public routerLinkService: RouterLinkService,
        public dataService: DataService,
        private fb: FormBuilder) {
        this.addFormGroup = this.fb.group({
            nameSurname: ['',
                [Validators.required,
                Validators.pattern('^[a-zA-Z ]{4,60}$')]],
            country: ['',
                [Validators.required,
                Validators.pattern('^[a-zA-Z ]{2,40}$')]],
            city: ['',
                [Validators.required,
                Validators.pattern('^[a-zA-Z ]{2,40}$')]],
            email: ['',
                [Validators.required,
                Validators.email]],
            website: ['',
                [Validators.required,
                Validators.pattern('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?')]],
        });
    }

    get f() {
        return this.addFormGroup.controls;
    }

    addNewRecord() {
        if (this.addFormGroup.valid) {
            this.dataService.addFormData(this.addFormGroup.value);
            this.addFormGroup.reset();
        }
        this.showNotification();
    }

    showNotification() {
        var notification = document.getElementById('record-success-notification');
        notification?.classList.add('show');
        setTimeout(function () {
            notification?.classList.remove('show');
        }, 6000);
        setTimeout(() => {
            this.routerLinkService.redirectRouterLink('./search-page');
        }, 3000);

    }
}
