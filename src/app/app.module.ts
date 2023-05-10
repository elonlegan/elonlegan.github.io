import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectListComponent } from './components/project-list/project-list.component';
import { ProjectCardComponent } from './components/project-card/project-card.component';

import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { EventsComponent } from './components/events/events.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [AppComponent, ProjectListComponent, ProjectCardComponent, HeaderComponent, HeroComponent, EventsComponent, SkillsComponent, ContactComponent, FooterComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
