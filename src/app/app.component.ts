import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

import { ValidationExtensions } from 'ng2-mdf-validation-messages';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    editorForm: FormGroup;
    firstName: FormControl;

    constructor(private formBuilder: FormBuilder) { }

    ngOnInit() {
        this.firstName = this.formBuilder.control('', ValidationExtensions.required());
        
        this.editorForm = this.formBuilder.group({
            firstName: this.firstName,
        });
    }
}
