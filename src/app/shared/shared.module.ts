import { NgModule } from '@angular/core';

import { MenuItems } from './menu-items/menu-items';
import { AccordionAnchorDirective, AccordionLinkDirective, AccordionDirective } from './accordion';
import { DefaultTableComponent } from './components/tables/default-table/default-table.component';
import { TablesModule } from './components/tables/tables.module';


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
    TablesModule
  ],
  providers: [
    MenuItems
  ]
})
export class SharedModule { }
