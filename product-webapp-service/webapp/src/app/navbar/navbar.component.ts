import { Component, OnInit,ElementRef, ViewChild  } from '@angular/core';
import { RouterService } from '../router.service';
import { FormBuilder, FormControl, Validators } from '@angular/forms';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  searchForm:FormBuilder=new FormBuilder();
  formdata : string = ''; //searchbar form data
  // address : string = '';

  
  constructor(private formBuilder:FormBuilder, private rs : RouterService) {

  }

  
  isLoggedIn: boolean = false;
    


  ngOnInit(): void {
    
    const token = localStorage.getItem('authToken');
    this.isLoggedIn = !!token;
    
  }
  
  login() {
    
    this.isLoggedIn = true;
    
  }

  logout() {
    
    
    this.isLoggedIn = false;
    localStorage.removeItem('authToken');
    localStorage.removeItem('authEmail');
    
  }
   

 
  onSubmit(){
    this.goToProductList();
    localStorage.setItem('search', this.formdata);
    console.log('Search submitted:', this.formdata);
     //storing form data to  pass to product list page
 }

 goToProductList(){
  this.rs.routeToProductList();
 }
  
  
 


}
