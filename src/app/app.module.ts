import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { NavigationComponent } from './header/navigation/navigation.component';
import { LabelComponent } from './label/label.component';
import { TabsComponent } from './tabs/tabs.component';
import { NavigationSearchComponent } from './header/navigation-search/navigation-search.component';
import { NavigationLabelComponent } from './header/navigation-label/navigation-label.component';
import { NavigationTabsComponent } from './header/navigation-tabs/navigation-tabs.component';


@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    NavigationComponent,
    LabelComponent,
    TabsComponent,
    NavigationSearchComponent,
    NavigationLabelComponent,
    NavigationTabsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
