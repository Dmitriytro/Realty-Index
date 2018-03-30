import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { FormsModule } from '@angular/forms';
import { ServerCommunicationService } from '../server-communication.service';
import { MaterialModule } from '../material/material.module';
import { SidenavComponent } from './sidenav/sidenav.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NavigationComponent } from './navigation/navigation.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

@NgModule({
  declarations: [
    HomeComponent,
    SidenavComponent,
    NavigationComponent,
    ToolbarComponent
  ],
  imports: [
    SharedModule,
    AppRoutingModule,
    FormsModule,
    MaterialModule,
    FlexLayoutModule
  ],
  providers: [
    ServerCommunicationService
  ],
  exports: [
    AppRoutingModule,
    SidenavComponent
  ]
})
export class CoreModule { }
