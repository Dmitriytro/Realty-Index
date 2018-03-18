import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AgmCoreModule } from '@agm/core';

import { SharedModule } from '../shared/shared.module';
import { RealtyRoutingModule } from './realty-routing/realty-routing.module';
import { RealtyItemComponent } from './realty-list/realty-item/realty-item.component';
import { RealtyListComponent } from './realty-list/realty-list.component';
import { RealtyDetailComponent } from './realty-list/realty-detail/realty-detail.component';

import { realtyReducer } from './realty-list/store/realty.reducer';
import { ParamsRealtyEffect } from './realty-list/store/realty.effects';
import { googleMapKey } from '../../../googleMapKey';
import { KeysPipe } from '../keys.pipe';

@NgModule({
  imports: [
    SharedModule,
    RealtyRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: googleMapKey
    }),
    StoreModule.forFeature('realtyReducer', realtyReducer),
    EffectsModule.forFeature([ParamsRealtyEffect]),
  ],
  declarations: [
    RealtyListComponent,
    RealtyItemComponent,
    RealtyDetailComponent,
    KeysPipe,
  ]
})
export class RealtyModule { }
