import { Injectable } from '@angular/core';
import { Users } from '../users';
import { Repo } from '../repo';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { resolve } from 'url';
import { reject } from 'q';


@Injectable({
  providedIn: 'root'
})
export class RequestService {
  users: Users;
  repo: Repo;
  newRepo: any;
  searchRepo: any;
  // private searchName:"Fahari"

  constructor(private http: HttpClient) {
    this.users = new Users('', '', '', '', 0, 0, new Date(), 0);
    // this.repo = new Repo("","","",new Date())
  }

  // updateUserName(username:string){
  //   this.searchName =this.username
  // }

  findUser(searchName) {
    interface ApiResponse {
      name: string;
      login: string;
      avatar_url: string;
      html_url: string;
      public_repos: number;
      created_at: Date;
      followers: number;
      following: number;
    }
    let promise = new Promise((resolve, reject) => {
      this.http.get<ApiResponse>('https://api.github.com/users/' + searchName + '?access_token=dc7660e95d86c6b6772345f4b8979cb16f479b4b').toPromise().then(getResponse => {
        this.users.name = getResponse.name;
        this.users.login = getResponse.login;
        this.users.avatar_url = getResponse.avatar_url;
        this.users.html_url = getResponse.html_url;
        this.users.public_repos = getResponse.public_repos;
        this.users.created_at = getResponse.created_at;
        this.users.followers = getResponse.followers;
        this.users.following = getResponse.following;
        resolve();
      }, error => {
        console.log('Loading has Failed. Try Again later');

        reject(error);
      });
    });
    return promise;
  }

  getUserRepo(searchName) {
    interface ApiResponse {
      name: string;
      html_url: string;
      description: string;
      created_at: Date;
    }
    let myPromise = new Promise((resolve, reject) => {
      this.http.get<ApiResponse>('https://api.github.com/users/' + searchName + '/repos?order=created&sort=asc?access_token=dc7660e95d86c6b6772345f4b8979cb16f479b4b').toPromise().then(getRepoResponse => {
        this.newRepo = getRepoResponse;
        resolve();
      }, error => {
        console.log('Loading has Failed. Try Again later');

        reject(error);
      });
    });
    return myPromise;
  }

  findRepo(searchName, toShow) {
    interface ApiResponse {
      items: any;
    }
    let promise = new Promise((resolve, reject) => {
      this.http.get<ApiResponse>('https://api.github.com/search/repositories?q=' + searchName + '&per_page=' + toShow + '&sort=forks&order=asc?access_token=dc7660e95d86c6b6772345f4b8979cb16f479b4b').toPromise().then(getRepoResponse => {
        this.searchRepo = getRepoResponse.items;
        resolve();
      }, error => {
        this.searchRepo = 'Type above to make a search request';
        console.log('Loading has Failed. Try Again later');
        reject(error);
      });
    });
    return promise;
  }
}
