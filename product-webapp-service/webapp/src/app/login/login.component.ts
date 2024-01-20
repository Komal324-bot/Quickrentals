import { Component } from '@angular/core';
import { LoginCredentials } from '../loginCredential';
import { ProductService } from '../product.service';
import Swal from 'sweetalert2';
import { RouterService } from '../router.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  confirmPassword = '';
  loginCredential: LoginCredentials = new LoginCredentials();

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private routerService: RouterService
  ) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    console.log('Form data:', this.loginForm.value);
    console.log(this.loginForm.value);

    this.productService.loginUser(this.loginForm.value).subscribe({
      next: (response: any) => {
        console.log('API Response:', response);

        if (response && response.token) {
          const authToken = response.token;
          const email=response.email;
          localStorage.setItem('authToken', authToken);
          localStorage.setItem('authEmail', email);
          

          

          Swal.fire({
            icon: 'success',
            title: 'Login',
            text: 'Login successfully!'
          }).then((result) => {
            if (result.isConfirmed) {
              this.clearForm();
              console.log(result);
              this.routerService.routeToHome();
            }
          });
        } else {
          console.error('Token not found in API response');
        }
      },
      error: () => {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'An error occurred while LogIn'
        });
      }
    });
  }

  clearForm() {
    this.loginForm.reset();
  }
  
}
