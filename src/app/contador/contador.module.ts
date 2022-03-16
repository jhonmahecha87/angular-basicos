import { NgModule } from "@angular/core";

import { ContadorComponent } from './contador/contador.component';
import { CommonModule } from '@angular/common';
import { NgModel } from "@angular/forms";

@NgModule ({
    declarations: [
        ContadorComponent
    ],

    exports: [
        ContadorComponent
    ],
})

export class ContadorModule {}

