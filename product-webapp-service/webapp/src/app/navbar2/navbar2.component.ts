import { Component, OnInit } from '@angular/core';
import {User} from '../user';
import { HttpClient, HttpHeaders,HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-navbar2',
  templateUrl: './navbar2.component.html',
  styleUrls: ['./navbar2.component.css']
})
export class Navbar2Component  implements OnInit{
  token: any;
  isLoggedIn: boolean = false;
  emailtoken: any;
  newUser = new User();

  constructor(private httpClient: HttpClient)
  {
 
  }
  ngOnInit(): void {
    this.token = localStorage.getItem('authToken');
    if (this.token) {
      this.isLoggedIn = true;
    }
    else{
      this.isLoggedIn=false;
    }
    this.emailtoken = localStorage.getItem('authEmail');

    if (this.emailtoken !== null) {
      this.httpClient.get<User>(`http://localhost:8085/user/${this.emailtoken}`).subscribe(
        (user: User) => {
          
          console.log('User data:', user);
          this.newUser=user;
        },
        (error) => {
          
          console.error('Error fetching user data:', error);
        }
      );
      
    } else {
     console.log("data not exist");
    }

  }
  

  logout() {
    this.isLoggedIn = false;
    localStorage.removeItem('authToken');
  }

}
