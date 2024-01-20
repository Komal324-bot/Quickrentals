import { Component, OnInit } from '@angular/core';
import {User} from '../user';
import { HttpClient, HttpHeaders,HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent  implements OnInit{
  emailtoken: any;
   newUser = new User();

   constructor(private httpClient: HttpClient)
   {
  
   }
  ngOnInit(): void {
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
  

  

}
