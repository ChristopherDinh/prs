import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './feature/user/user-list/user-list.component';
import { MenuComponent } from './core/menu/menu.component';
import { AboutComponent } from './core/about/about.component';
import { HomeComponent } from './core/home/home.component';
import { UserService } from './service/user.service';
import { UserCreateComponent } from './feature/user/user-create/user-create.component';
import { UserDetailComponent } from './feature/user/user-detail/user-detail.component';
import { UserEditComponent } from './feature/user/user-edit/user-edit.component';
import { UserLoginComponent } from './feature/user/user-login/user-login.component';
import { VendorListComponent } from './feature/vendor/vendor-list/vendor-list.component';
import { VendorEditComponent } from './feature/vendor/vendor-edit/vendor-edit.component';
import { VendorDetailComponent } from './feature/vendor/vendor-detail/vendor-detail.component';
import { VendorCreateComponent } from './feature/vendor/vendor-create/vendor-create.component';
import { VendorService } from './service/vendor.service';
import { ProductCreateComponent } from './feature/product/product-create/product-create.component';
import { ProductDetailComponent } from './feature/product/product-detail/product-detail.component';
import { ProductEditComponent } from './feature/product/product-edit/product-edit.component';
import { ProductListComponent } from './feature/product/product-list/product-list.component';
import { ProductService } from './service/product.service';
import { PurchaserequestCreateComponent } from './feature/purchaserequest/purchaserequest-create/purchaserequest-create.component';
import { PurchaserequestEditComponent } from './feature/purchaserequest/purchaserequest-edit/purchaserequest-edit.component';
import { PurchaserequestListComponent } from './feature/purchaserequest/purchaserequest-list/purchaserequest-list.component';
import { PurchaserequestDetailComponent } from './feature/purchaserequest/purchaserequest-detail/purchaserequest-detail.component';
import { PurchaserequestService } from './service/purchaserequest.service';
import { PrliCreateComponent } from './feature/purchaserequestlineitem/prli-create/prli-create.component';
import { PrliEditComponent } from './feature/purchaserequestlineitem/prli-edit/prli-edit.component';
import { PrliService } from './service/prli.service';
import { PurchaserequestLineComponent } from './feature/purchaserequest/purchaserequest-line/purchaserequest-line.component';
import { SystemService } from './service/system.service';
import { SortPipe } from './pipe/sort.pipe';
import { PurchaserequestReviewComponent } from './feature/purchaserequest/purchaserequest-review/purchaserequest-review.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    MenuComponent,
    AboutComponent,
    HomeComponent,
    UserCreateComponent,
    UserDetailComponent,
    UserEditComponent,
    UserLoginComponent,
    VendorListComponent,
    VendorEditComponent,
    VendorDetailComponent,
    VendorCreateComponent,
    ProductCreateComponent,
    ProductDetailComponent,
    ProductEditComponent,
    ProductListComponent,
    PurchaserequestCreateComponent,
    PurchaserequestEditComponent,
    PurchaserequestListComponent,
    PurchaserequestDetailComponent,
    PrliCreateComponent,
    PrliEditComponent,
    PurchaserequestLineComponent,
    SortPipe,
    PurchaserequestReviewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [UserService, VendorService, ProductService, PurchaserequestService, PrliService, SystemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
