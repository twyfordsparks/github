import { Component, OnInit,EventEmitter,Output } from '@angular/core';
import { Search } from '../search';
// import { Users } from '../users';
// import { RequestService } from '../git-API/request.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  // providers: [RequestService],
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
searchRequest = new Search("");

@Output() getName = new EventEmitter<Search>();

  // find:string
  // user: Users;
  submitSearch(data){
   this.getName.emit(data.value.find);
   data.reset();
 }

  constructor() {

  }

  // submitSearch(){
  //
  //   this.searchService.updateUserName(this.find);
  //     console.log(this.find);
  //
  //     this.searchService.findUser()
  //     this.user = this.searchService.user
  // }

  ngOnInit() {
  }

}
