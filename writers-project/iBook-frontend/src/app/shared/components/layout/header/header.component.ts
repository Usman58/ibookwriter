import { Component, OnInit, } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  username = "Usman Khan";
 initial=""

  designation = "";
  Manager: any;
  headerData: any = {
    // title: 'Attendance',
    // tabs:[{title:'My Attendance',url:'connect/attendance', isActive:true},{title:'My Requests',url:'', isActive:false},{title:'Team Requests',url:'', isActive:false}],
    // subtitle: ['My Attendance','My Requests','Team Requests'],
    // isTab: true,
  };
  currentroute: any;
  constructor(private router: Router, private _authS: AuthService) {
    const urlSegments = this.router.url.split('/');
    const moduleSegment = urlSegments[2];
  }

  ngOnInit(): void {
    //this.username = localStorage.getItem('username');
    

  }
  signOut() {
    this._authS.doLogout();
  }

}
