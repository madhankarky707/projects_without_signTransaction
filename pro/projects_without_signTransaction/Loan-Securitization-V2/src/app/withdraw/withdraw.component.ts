import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { LoanServiceService } from '../Service/loan-service.service';
import $ from 'jquery';
import * as Web3 from 'web3';
declare let window: any;
import { NgxSpinnerService } from "ngx-spinner";


@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.css']
})
export class WithdrawComponent implements OnInit, OnDestroy {
  public bank_id;
  public borrower_id;
  public loan_details=[];
  public balance:number;
  public account;
  public id1;
  public amount : any;
  public _web3:any;

  constructor(private ls:LoanServiceService,private router: Router,private spinner: NgxSpinnerService) { 

    $("#issuer").addClass("active");
    $("#spv").removeClass("active");
    $("#investor").removeClass("active");

    this.borrower_id='';
    this.bank_id='';
    this.ls.contract_balance().then(result=>this.balance=result/1000000000000000000)
  }

  withdraw(amount)
  {
   
   
    if((document.getElementById('id1') as HTMLInputElement).value == '' || amount<=0){
      alert("Please Enter a valid amount");
      return;
    }
    
   
    this.ls.contract_balance().then(result=> {
    
    if(result <amount*1000000000000000000){
     alert("You Can withdraw upto " +result/1000000000000000000);
     (document.getElementById('id1') as HTMLInputElement).value = '';
    // // /1000000000000000000
    return;
    }
    
    
 this.spinner.show(); 
    this.ls.getAccount().then(address =>{
      this.ls.issuer_withdraw(amount*1000000000000000000,address).then(res=>{
        (document.getElementById('id1') as HTMLInputElement).value ='';
        this.spinner.hide();
        this.fetch();
        if(res == 0) {
          alert("You Rejected the Transaction")
        }
        else if(res == 2) {
          (document.getElementById('id1') as HTMLInputElement).value = '';
          alert("Transaction Failed !")
        }
        else if(res == 1)
        {
          (document.getElementById('id1') as HTMLInputElement).value = '';
          alert("Amount Credited to Your Wallet")          
        }
      })
    })
  
  });
}

fetch()
    {
      this.ls.contract_balance().then(result=>{this.balance=result/1000000000000000000;
        console.log(result/1000000000000000000);
      })
    }


  ngOnInit() {
  
    this.ls.contract_balance().then(result=>this.balance=result/1000000000000000000)
       let meta = this;
         meta.ls.getAccount().then(acc => {
             this.account = acc;
             meta.id1 = setInterval(function() {
              if (typeof window.web3 !== 'undefined') {
                  meta._web3 = new Web3(window.web3.currentProvider);
                  if (meta._web3.eth.accounts[0] !== meta.account) {
                      meta.account = meta._web3.eth.accounts[0];
                      if (meta._web3.eth.accounts[0] === undefined) {
                          meta.router.navigate(['metamask']);
                          clearInterval(this.interval);
                      } else {
                          window.location.reload(true);             
                               }
                  }
              } else {
                  meta.router.navigate(['metamask']);
              }
             }, 100);
          });
   
     }
     ngOnDestroy() {
       if (this.id1) {
         clearInterval(this.id1);
       }
   
     }

}
