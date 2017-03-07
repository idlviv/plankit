import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { routes } from './app.router';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { VizComponent }  from './components/viz.component';
import { SideComponent }  from './components/side.component';
import { TabComponent }  from './components/tab.component';
import { TabsComponent }  from './components/tabs.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule, routes, HttpModule ],
  declarations: [ AppComponent, VizComponent,  SideComponent, TabsComponent, TabComponent,  AboutComponent,  HomeComponent],
  providers: [],
  bootstrap:    [ AppComponent ]
})
export class AppModule {}
