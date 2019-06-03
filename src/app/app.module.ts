import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppRoutingModule }     from './app-routing.module';

import { AppComponent }         from './app.component';
import { InicioComponent }   from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { ChatPComponent } from './chat-p/chat-p.component';
import { ChatGComponent } from './chat-g/chat-g.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    InicioComponent,
    LoginComponent,
    ChatPComponent,
    ChatGComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
