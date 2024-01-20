import { Component } from '@angular/core';
import { Product } from '../Product';
import { ProductService } from '../product.service';
import Swal from 'sweetalert2';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

declare var cloudinary: any; // Declare the cloudinary variable

@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.css']
})
export class SellerComponent {
  productForm: FormGroup;
  product: Product = new Product();

  constructor(private productService: ProductService, private formBuilder: FormBuilder) {
    this.productForm = this.formBuilder.group({
      sellerName: ['', Validators.required],
      sellerEmail: ['', [Validators.required, Validators.email]],
      productName: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(0)]],
      quantity: ['', [Validators.required, Validators.min(1)]],
      address: ['', Validators.required],
      description: ['', Validators.required],
      category: ['', Validators.required]
    });
  }

  openWidget() {
    cloudinary.openUploadWidget({
      // Cloudinary configuration here
      cloudName: 'dwqbytnjp',
            uploadPreset: 'ppatejrn',
            sources: ['local', 'url'],
            showAdvancedOptions: true,
            cropping: 'server',
            multiple: false,
            defaultSource: 'local',
            styles: {
              palette: {
                window: '#FFFFFF',
                sourceBg: '#FFFFFF',
                windowBorder: '#90a0b3',
                tabIcon: '#0078ff',
                inactiveTabIcon: '#69778A',
                menuIcons: '#0078ff',
                link: '#0078ff',
                action: '#0078ff',
                inProgress: '#0078ff',
                complete: '#0078ff',
                error: '#ff0000',
                textDark: '#000000',
                textLight: '#FFFFFF'
              },
              fonts: {
                default: null,
                "'Poppins', sans-serif": {
                  url: 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap',
                  active: true
                }
              }
            }
          
    }, (error: any, result: any) => {
      if (!error && result && result.event === 'success') {
        this.productForm.patchValue({ imageUrl: result.info.secure_url });
      }
    });
  }

  addproduct() {
    if (this.productForm.invalid) {
      this.productForm.markAllAsTouched();
      return;
    }

    this.product = this.productForm.value;
    console.log(this.product);
    
    this.productService.addProduct(this.product).subscribe({
      next: () => {
        Swal.fire({
          icon: 'success',
          title: 'Product Added',
          text: 'The product has been added successfully!'
        }).then((result) => {
          if (result.isConfirmed) {
            this.clearForm();
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
    this.productForm.reset();
  }
}
