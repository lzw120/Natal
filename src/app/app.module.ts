import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import 'hammerjs';
import { HeaderContainerComponent } from './header-container/header-container.component';
import { ContentContainerComponent } from './content-container/content-container.component';
import { NavContainerComponent } from './nav-container/nav-container.component';
import { NavItemComponent } from './nav-item/nav-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderContainerComponent,
    ContentContainerComponent,
    NavContainerComponent,
    NavItemComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
