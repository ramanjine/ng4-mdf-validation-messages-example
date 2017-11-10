import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2MDFValidationMessagesModule } from 'ng2-mdf-validation-messages';

import { AppComponent } from './app.component';

//Start:: Solution using 'useFactory'
export function Ng2MDFValidationMessagesModuleFactory() {
    return Ng2MDFValidationMessagesModule.globalConfig({
        class: 'text-danger',
        defaultErrorMessages: {
            required: 'Default Custom Required Message'
        }
    });
}
//End:: Solution using 'useFactory'

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        //Start:: Default Plugin code
        /*Ng2MDFValidationMessagesModule.globalConfig({
            class: 'text-danger',
            defaultErrorMessages: {
                required: 'Default Custom Required Message'
            }
        })*/
        //End:: Default Plugin code
    ],
    //Start:: Solution using 'useFactory'
    providers: [
        {
            provide: Ng2MDFValidationMessagesModule,
            useFactory: Ng2MDFValidationMessagesModuleFactory
        }
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ],
    //End:: Solution using 'useFactory'
    bootstrap: [AppComponent]
})
export class AppModule { }
