import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GithubSearchComponent } from './github-search/github-search.component';
import { NavComponent } from './nav/nav.component';
import { FormComponent } from './form/form.component';
import { GithubUsersComponent } from './github-users/github-users.component';
import { GithubRepoComponent } from './github-repo/github-repo.component';
import {HttpClientModule} from '@angular/common/http'


@NgModule({
  declarations: [
    AppComponent,
    GithubSearchComponent,
    NavComponent,
    FormComponent,
    GithubUsersComponent,
    GithubRepoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
