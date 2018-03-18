import { NgModule } from '@angular/core';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { NavigationTabsComponent } from './navigation/navigation-tabs/navigation-tabs.component';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { FormsModule } from '@angular/forms';
import { ServerCommunicationService } from '../server-communication.service';

@NgModule({
  declarations: [
    NavigationComponent,
    NavigationTabsComponent,
    HomeComponent
  ],
  imports: [
    SharedModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [
    ServerCommunicationService
  ],
  exports: [
    AppRoutingModule,
    NavigationComponent
  ]
})
export class CoreModule { }
