import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GithubSearchComponent } from './github-search/github-search.component';
import { GithubUsersComponent } from './github-users/github-users.component';
import { GithubRepoComponent } from './github-repo/github-repo.component';




const routes: Routes = [{
path: '',component:GithubSearchComponent
},
{
   path: 'users',component:GithubUsersComponent
},
{
  path: 'repo',component:GithubRepoComponent

}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
