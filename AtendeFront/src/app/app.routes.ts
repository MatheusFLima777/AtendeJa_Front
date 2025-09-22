import { Routes } from '@angular/router';
import { Nav } from './components/nav/nav';
import { Home } from './components/home/home';
import { TecnicoList } from './components/tecnico/tecnico-list/tecnico-list';



export const routes: Routes = [{
  path: '',
  component: Nav,
  children: [
    { path: 'home', component: Home }, 
    { path: 'ticket', children: [] },
    { path: 'agentes', 
            children: [
            {path: '', component: TecnicoList },
            ]},
    { path: 'funcionarios', children: [] },
    { path: 'logout', children: [] },
    { path: '', redirectTo: 'home', pathMatch: 'full' }
  ]
}];

