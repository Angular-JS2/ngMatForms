import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import { SelectionModel, DataSource } from '@angular/cdk/collections';
import { UserdataService } from '../userdata.service';
import { Userinterface } from '../UserInterface/userinterface';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {
  ELEMENT_DATA: Userinterface[];
  
  dataSource = new UserDataSource(this.userService);
  displayedColumns: string[] = [ 'userID', 'name', 'address', 'password'];
 
 
  
  constructor(private userService: UserdataService) { }
  ngOnInit(): void {
    this.onGetAll();
  //  this.dataSource = this.ELEMENT_DATA;
   
  }
 

 


onGetAll()
{
  console.log("dileep");
  this.userService.getUser().subscribe(data =>  this.ELEMENT_DATA =data ,
          err => console.error(err),
          () => console.log('done loading foods')
          
  )
  
}

}
 

export class UserDataSource extends DataSource<any> {
  constructor(private userService: UserdataService) {
    super();
  }
  connect(): Observable<Userinterface[]> {
    return this.userService.getUser();
  }
  disconnect() {}
}