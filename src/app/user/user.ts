import { Component, input,computed, Output, EventEmitter,output, Input } from '@angular/core';
import { Users } from '../models/User';
import { Card } from "../shared/card/card";

//import { DUMMY_USERS } from '../dummy-users';

//const randomIndex = Math.floor(Math.random()*DUMMY_USERS.length)

@Component({
  selector: 'app-user',
  templateUrl: './user.html',
  styleUrl: './user.css',
  imports: [Card]
})
export class User {
  // @Input({required:true}) avatar!: string;
  // @Input({required:true}) name!: string;

  user = input.required<Users>(); // ✅ One signal input object
  @Input({required:true}) selected!:boolean;
  // id = input.required<string>();
  // avatar = input.required<string>();
  // name = input.required<string>();
  select = output<{ id: string; name: string }>(); // ✅ emit both id & name

  //select = output<string>(); 

  //@Input({required:true}) id!:string; //old
  //@Output() select = new EventEmitter(); //old
//selectedUser=  signal(DUMMY_USERS[randomIndex]);
//imagePath = computed(()=> 'assets/users/'+this.selectedUser().avatar)
imagePath = computed(()=> {
  return  'assets/users/'+this.user().avatar
})

// get imagePath() {
// return 'assets/users/' + this.avatar;
// }

onSelectUser() {
  //const randomIndex = Math.floor(Math.random()*DUMMY_USERS.length);
//  this.selectedUser.set(DUMMY_USERS[randomIndex]);
//this.select.emit(this.id);
    const u = this.user();
this.select.emit({id: u.id,name:u.name});
}
}

