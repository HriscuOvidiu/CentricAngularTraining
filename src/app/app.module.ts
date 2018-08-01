import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { ItemsSectionComponent } from './items-section/items-section.component';
import { ItemsService } from './services/items.service';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { ItemMoreDetailsComponent } from './item-more-details/item-more-details.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    ItemsSectionComponent,
    ItemDetailsComponent,
    ItemMoreDetailsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    ItemsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
