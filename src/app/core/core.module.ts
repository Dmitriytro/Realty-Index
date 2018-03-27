import { NgModule } from '@angular/core';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { NavigationTabsComponent } from './navigation/navigation-tabs/navigation-tabs.component';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { FormsModule } from '@angular/forms';
import { ServerCommunicationService } from '../server-communication.service';
import { MaterialModule } from '../material/material.module';
import { SidenavComponent } from './sidenav/sidenav.component';

@NgModule({
  declarations: [
    NavigationComponent,
    NavigationTabsComponent,
    HomeComponent,
    SidenavComponent
  ],
  imports: [
    SharedModule,
    AppRoutingModule,
    FormsModule,
    MaterialModule
  ],
  providers: [
    ServerCommunicationService
  ],
  exports: [
    AppRoutingModule,
    NavigationComponent,
    SidenavComponent
  ]
})
export class CoreModule { }
