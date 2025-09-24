import { Routes } from '@angular/router';
import { Nav } from './components/nav/nav';
import { Home } from './components/home/home';
import { AgenteList } from './components/agente/agente-list/agente-list';



export const routes: Routes = [{
  path: '',
  component: Nav,
  children: [
    { path: 'home', component: Home }, 
    { path: 'ticket', children: [] },
    { path: 'agentes', 
            children: [
            {path: '', component: AgenteList },
            ]},
    { path: 'funcionarios', children: [] },
    { path: 'logout', children: [] },
    { path: '', redirectTo: 'home', pathMatch: 'full' }
  ]
}];

