import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../shared/admin.service';

@Component({
  selector: 'app-admin-register',
  templateUrl: './admin-register.component.html',
  styleUrls: ['./admin-register.component.css']
})
export class AdminRegisterComponent implements OnInit {

  registerAdminData={name:'',userName:'',password:'',address:'',address2:'',city:'',state:'',zip:''}

  constructor(private adminService : AdminService,private _router:Router) { }

  ngOnInit(): void {
  }

  registerAdmin(){
    this.adminService.registeredAdmin(this.registerAdminData)
    .subscribe((res)=>{
      console.log(res)
      this._router.navigate(['register'])
    },
    (err)=>{
      
      console.log(err)
      
    }
    )
  }

}
