import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from "@ngrx/effects";
import { StoreRouterConnectingModule } from "@ngrx/router-store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { AgmCoreModule } from "@agm/core";

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { ServerCommunicationService } from "./server-communication.service";
import { NavigationComponent } from './navigation/navigation.component';
import { NavigationTabsComponent } from './navigation/navigation-tabs/navigation-tabs.component';
import { RealtyListComponent } from './realty-list/realty-list.component';
import { RealtyItemComponent } from './realty-list/realty-item/realty-item.component';
import { ParamsRealtyEffect } from "./realty-list/store/realty.effects";
import { RealtyDetailComponent } from './realty-list/realty-detail/realty-detail.component';
import { reducers } from "./store/app.reducer";
import { KeysPipe } from './keys.pipe';
import { googleMapKey } from "../../googleMapKey";
import { AppRoutingModule } from "./app-routing/app-routing.module";


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    NavigationTabsComponent,
    RealtyListComponent,
    RealtyItemComponent,
    RealtyDetailComponent,
    KeysPipe
    // DropdownDirective,
    // ReversePipe,
    // SortByPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    EffectsModule.forRoot([ParamsRealtyEffect]),
    StoreModule.forRoot(reducers),
    AgmCoreModule.forRoot({
      apiKey: googleMapKey
    }),
    StoreRouterConnectingModule,
    AppRoutingModule,
    !environment.production ? StoreDevtoolsModule.instrument() : []
    // ReactiveFormsModule
  ],
  providers: [ServerCommunicationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
