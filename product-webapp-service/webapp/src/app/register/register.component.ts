import { Component } from '@angular/core';
import { User } from '../user';
import Swal from 'sweetalert2';
import { ProductService } from '../product.service';
import { RouterService } from '../router.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  user: User = new User();
  confirmPassword = '';
  confirmPasswordPlaceholder = 'Confirm password*';

  constructor(private productService: ProductService, private routerService: RouterService) {}

  onSubmit(registrationForm: NgForm) {
    if (registrationForm.invalid || this.user.password !== this.confirmPassword) {
      return; // Don't proceed if the form is invalid or passwords don't match
    }

    console.log('Registration data:', this.user);
    console.log(this.user);
    this.productService.addUser(this.user).subscribe({
      next: () => {
        Swal.fire({
          icon: 'success',
          title: 'User Added',
          text: 'User Register successfully!'
        }).then((result) => {
          if (result.isConfirmed) {
            this.clearForm();
            this.routerService.routeToLogin();
          }
        });
      },
      error: () => {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'An error occurred while adding the product.'
        });
      }
    });
  }

  clearForm() {
    this.user = new User();
    this.confirmPassword = '';
  }
 
}




