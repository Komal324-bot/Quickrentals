import { Component, OnInit } from '@angular/core';
import {  ElementRef, HostListener, ViewChild } from '@angular/core';
import { ProductService } from '../product.service';
import { Pipe, PipeTransform } from '@angular/core';
import { ChunkPipe } from '../chunk.pipe';
import {User} from '../user';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  constructor(private productService:ProductService,private httpClient: HttpClient){};
  currentPage: number = 1;
  itemsPerPage: number = 10;
  jsonData:any;
  recommendationData:any;
  address:any;
  emailtoken: any;
   newUser = new User();
   
  
  ngOnInit(): void {

    

   
    this.productService.getProduct().subscribe((data)=>
    {
     console.log(data);
     this.jsonData=data;
   }
    );
    this.emailtoken = localStorage.getItem('authEmail');

    if (this.emailtoken !== null) {
      this.httpClient.get<User>(`http://localhost:8085/user/${this.emailtoken}`).subscribe(
        (user: User) => {
          this.address=user.address;
          console.log(this.address);

          this.productService.getProductsRecommendtion(`${this.address}`).subscribe(
            (data) => {
              this.recommendationData = data;
              console.log(this.recommendationData);
            },
            (error) => {
              console.error('An error occurred:', error);
              
            }
          );
  
        },
        (error) => {
          
          console.error('Error fetching user data:', error);
        }
      );

     
      
    } 

  


}
   
   
   

  



 

  
  

}
