import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';

@NgModule({
exports:[    BrowserAnimationsModule,
    MatSliderModule,MatMenuModule,MatToolbarModule]
})

export class MaterialModule{}