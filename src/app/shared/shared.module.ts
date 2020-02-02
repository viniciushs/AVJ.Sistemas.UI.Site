import { NgModule } from '@angular/core';

import { MenuItems } from './menu-items/menu-items';
import { AccordionAnchorDirective, AccordionLinkDirective, AccordionDirective } from './accordion';
import { TablesModule } from './components/tables/tables.module';
import { BreadcumbModule } from './components/breadcumb/breadcumb.module';


@NgModule({
  declarations: [
    AccordionAnchorDirective,
    AccordionLinkDirective,
    AccordionDirective
  ],
  exports: [
    AccordionAnchorDirective,
    AccordionLinkDirective,
    AccordionDirective,

    BreadcumbModule,
    TablesModule
  ],
  providers: [
    MenuItems
  ]
})
export class SharedModule { }
