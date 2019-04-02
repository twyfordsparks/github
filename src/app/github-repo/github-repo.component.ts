import { Component, OnInit } from '@angular/core';
import { RequestService } from '../git-API/request.service';
// import { Users } from '../users';
import { Repo } from '../repo';

@Component({
  selector: 'app-github-repo',
  templateUrl: './github-repo.component.html',
  styleUrls: ['./github-repo.component.css'],
  providers: [RequestService]
})
export class GithubRepoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
