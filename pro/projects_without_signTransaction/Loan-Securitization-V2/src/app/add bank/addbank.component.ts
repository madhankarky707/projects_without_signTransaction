import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { LoanServiceService } from '../Service/loan-service.service';
import $ from 'jquery';
import * as Web3 from 'web3';
declare let window: any;
import { NgxSpinnerService } from "ngx-spinner";



@Component({
  selector: 'app-addbank',
  templateUrl: './addbank.component.html',
  styleUrls: ['./addbank.component.scss']
})
export class AddbankComponent implements OnInit, OnDestroy { 
  public bankid;
  public account;
  public id1;
  public _web3:any;
  public banklist = [];
  constructor(private ls:LoanServiceService,private router: Router, private spinner: NgxSpinnerService) { 

    $("#issuer").addClass("active");
    $("#spv").removeClass("active");
    $("#investor").removeClass("active");
    this.bankid='';
  }

  get_bank_Id(bname) {

    var temp=bname.trim()
    
    if(temp !== ''){
      let bank_names = [];
      var tmp;
  
      tmp = bname.trim().split(",");
      for(var i=0;i < tmp.length;i++){
        bank_names.push(tmp[i])
      } 
      this.spinner.show();
      this.ls.getAccount().then(address=>{
         this.ls.add_bank(bank_names,address).then(result=>{
           (document.getElementById('id1') as HTMLInputElement).value ='';
          this.spinner.hide();
          if(result == 0) {
            alert("You Rejected this Transaction!")
          }
          else if(result == 2) {
            alert("Transaction Failed !")
          }
          else if(result == 1) {
            this.ls.bank_ids().then(ids=>{
              this.bankid =ids.length;
              alert("Bank(s) Registered Successfully!")
            })
          }
        })
      })
    }

    else{
      alert("Enter Bank Name In Input textbox")
      return;
    }
  }

  bank_table(){
    this.banklist.length = 0;
    this.ls.bank_ids().then(bank_ids =>{
      bank_ids.forEach(bank_id => {
        let obj = {};
        this.ls.bank_detail_map(bank_id).then(b_d =>{
          obj['bankid']= bank_id;
          obj['bankname'] = b_d;
          this.banklist.push(obj);
        })
      })
      
    })
  }

  ngOnInit() {
      this.bank_table();
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
