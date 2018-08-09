import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes } from '@angular/router';
import { AddspvComponent } from './addspv/addspv.component';
import { AppRoutingModule } from './app-routing.module';
import { routes } from './app-routing/routes';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SpvComponent } from './spv/spv.component';
import { InvestorComponent } from './investor/investor.component';
import { CreatepackComponent } from './createpack/createpack.component';
import { UpdateloanComponent } from './updateloan/updateloan.component';
import { AddinvestorComponent } from './addinvestor/addinvestor.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AddloanComponent } from './addloan/addloan.component';
import { AddbankComponent } from './add bank/addbank.component';
import { AddborrowerComponent } from './addborrower/addborrower.component';
import { WithdrawComponent } from './withdraw/withdraw.component';
import { NgxSpinnerModule } from "ngx-spinner";
import { MetamaskErrorComponent } from './metamask-error/metamask-error.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SpvComponent,
    InvestorComponent,
    CreatepackComponent,
    UpdateloanComponent,
    AddspvComponent,
    AddinvestorComponent,
    WelcomeComponent,
    AddloanComponent,
    AddbankComponent,
    AddborrowerComponent,
    WithdrawComponent,
    MetamaskErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    NgxSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
