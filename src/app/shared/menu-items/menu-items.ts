import { Injectable } from '@angular/core';

export interface Menu {
  state: string;
  name: string;
  type: string;
  icon: string;
  hasCreate: boolean;
  hasSearch: boolean;
}

const MENUITEMS = [
  { state: 'cargo', type: 'link', name: 'Cargos', icon: 'work', hasCreate: true, hasSearch: true },
  { state: 'forma-pagamento', type: 'link', name: 'Formas de Pagamento', icon: 'payment', hasCreate: false, hasSearch: false },
  { state: 'franqueado', type: 'link', name: 'Franqueados', icon: 'business', hasCreate: true, hasSearch: true },
  { state: 'funcionario', type: 'link', name: 'Funcionarios', icon: 'group', hasCreate: true, hasSearch: true },
  { state: 'situacao', type: 'link', name: 'Situações', icon: 'poll', hasCreate: true, hasSearch: true }
];

@Injectable()
export class MenuItems {
  getMenuitem(): Menu[] {
    return MENUITEMS;
  }
}
