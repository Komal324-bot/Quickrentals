import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import {CloudinaryModule} from '@cloudinary/ng';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from "@angular/material/card"
import {MatExpansionModule} from '@angular/material/expansion';
import {MatListModule} from '@angular/material/list';
import { NavbarComponent } from './navbar/navbar.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { BuildingComponent } from './building/building.component';
import { ElectronicsComponent } from './electronics/electronics.component';
import { PharmaComponent } from './pharma/pharma.component';
import { MedicalComponent } from './medical/medical.component';
import { IndustrialComponent } from './industrial/industrial.component';
import { Navbar2Component } from './navbar2/navbar2.component';
import { Component } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SellerComponent } from './seller/seller.component';
import { HttpClientModule } from '@angular/common/http';
import { ChunkPipe } from './chunk.pipe';
import { ProductDescriptionComponent } from './product-description/product-description.component';
import { ProfileComponent } from './profile/profile.component';
import { FooterComponent } from './footer/footer.component';
import { RouterService } from './router.service';
import { ProductListComponent } from './product-list/product-list.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import {MatStepperModule} from '@angular/material/stepper';
import  {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Navbar2Component,
    NavbarComponent,
    BuildingComponent,
    ElectronicsComponent,
    PharmaComponent,
    MedicalComponent,
    IndustrialComponent,
    Navbar2Component,
    LoginComponent,
    RegisterComponent,
    SellerComponent,
    ChunkPipe,
    ProductDescriptionComponent,
    ProfileComponent,
    FooterComponent,
    ProductListComponent,
    ProfileComponent,
    EditprofileComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatIconModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatCardModule,
    MatExpansionModule,
    MatListModule,
    MatGridListModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    CloudinaryModule,
    MatMenuModule,
    MatStepperModule,
    ReactiveFormsModule
  ],
  providers: [RouterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
