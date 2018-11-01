import { Component, OnInit } from '@angular/core';
import  {UserdataService} from '../userdata.service';
import { Observable } from 'rxjs';
import { Userinterface } from '../UserInterface/userinterface';

interface Applications {
  name: string;
  address: string;
  password: string;
}

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  
  apps: Userinterface[];
  constructor(private userService: UserdataService) { }

  ngOnInit() {
    this.onGetAll();
  }

  onGetAll()
  {
    console.log("dileep");
    this.userService.getUser().subscribe(data =>  this.apps=data,
            err => console.error(err),
            () => console.log('done loading foods')
            
    )
  //  let body = JSON.stringify(this.allusers);
  //  console.log(body);
  }

  onAdd()
  {
    let userd = { "name":"Vipin", "address": "Delhi", "password": "2654"};
        this.userService.addUser(userd).subscribe(
           data => {
             // refresh the list
             this.onGetAll();
             return true;
           },
           error => {
             console.error("Error saving food!");
             return Observable.throw(error);
         }
        );

  }

  onUpdate()
  {

  }

  onDelete(){

  }



}
