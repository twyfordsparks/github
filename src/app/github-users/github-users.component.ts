import { Component, OnInit } from '@angular/core';
import { RequestService } from '../git-API/request.service';
import { Users } from '../users';
import { Repo } from '../repo'

@Component({
  selector: 'app-github-users',
  templateUrl: './github-users.component.html',
  styleUrls: ['./github-users.component.css'],
  providers: [RequestService]
})
export class GithubUsersComponent implements OnInit {
  public nameToSearch = 'twyfordsparks';
  public newName;
  users: Users;
  repo = []

  searchUser(name) {
    this.newName = '';
    for (var i = 0; i < name.length; i++) {
      if (name.charAt(i) === " " || name.charAt(i) === "?" || name.charAt(i) === "/") {
        alert(`Username should not contain spaces`);
        this.newName = 'twyfordsparks';
        break;
      } else if (name.charAt(i) !== " " || name.charAt(i) !== "?" || name.charAt(i) !== "/") {
        this.newName = this.newName.concat(name.charAt(i));
      }
    }
    this.nameToSearch = this.newName;
    this.ngOnInit();
  }

  constructor(public gitUserRequests: RequestService, public gitUserRepo: RequestService) { }

  ngOnInit() {
    this.gitUserRequests.findUser(this.nameToSearch);
    this.users = this.gitUserRequests.users;
    this.gitUserRepo.getUserRepo(this.nameToSearch);
  }

}
