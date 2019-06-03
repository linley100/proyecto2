import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent }   	from './login/login.component';
import { InicioComponent }   from './inicio/inicio.component';
import { ChatPComponent }   	from './chat-p/chat-p.component';
import { ChatGComponent }   from './chat-g/chat-g.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'inicio', component: InicioComponent },
  { path: 'chat-p', component: ChatPComponent },
  { path: 'chat-g', component: ChatGComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
