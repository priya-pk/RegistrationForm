import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../shared/admin.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  loginAdminData = {userName:'',password:''}
  constructor(private adminService : AdminService, private _router:Router) { }

  ngOnInit(): void {
  }

  loginAdmin(){
    this.adminService.loginAdmin(this.loginAdminData).subscribe((res)=>{
      console.log(this.loginAdminData)
      this._router.navigate(['register'])
    },
    (err)=>{
      alert("Invalid")
      console.log(err)
    }
    )
  }
}
