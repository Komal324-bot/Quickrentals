import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PharmaComponent } from './pharma/pharma.component';
import { MedicalComponent } from './medical/medical.component';
import {IndustrialComponent} from './industrial/industrial.component'
import {ElectronicsComponent} from './electronics/electronics.component'
import {BuildingComponent} from './building/building.component'
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SellerComponent } from './seller/seller.component';
import { ProductDescriptionComponent } from './product-description/product-description.component';
import { ProfileComponent } from './profile/profile.component';
import { FooterComponent } from './footer/footer.component';
import { ProductListComponent } from './product-list/product-list.component';
import { EditprofileComponent } from './editprofile/editprofile.component';


const routes: Routes = [
  {
    path:'',
  
  component:HomeComponent,

  },
  
  {
    path:"pharma",
    component:PharmaComponent
  },
  {
    path:"medical",
    component:MedicalComponent

  }
  ,
  {
    path:"industrial",
    component:IndustrialComponent

  },
  {
    path:"electronics",
    component:ElectronicsComponent
  }
  ,
  {
    path:"building",
    component:BuildingComponent
  }
  ,{
    path:"login",
    component:LoginComponent
 
  }
  ,{
    path:"register",
    component:RegisterComponent
 
  },{
    path:"seller",
    component:SellerComponent
  }
  ,
  {
    path:"productDescription/:productId",
    component:ProductDescriptionComponent
  }
  ,
  {
    path:"profile",
    component:ProfileComponent
  },
  {
    path:"footer",
    component:FooterComponent
  },
  {
    path : "product-list",
    component : ProductListComponent
  },
  {
    path : "editprofile",
    component :  EditprofileComponent
  },
 
  ];
  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }