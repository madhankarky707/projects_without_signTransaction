import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoanServiceService } from '../Service/loan-service.service';
import $ from 'jquery';
import * as Web3 from 'web3';
declare let window: any;
import { NgxSpinnerService } from "ngx-spinner";
@Component({
  selector: 'app-addloan',
  templateUrl: './addloan.component.html',
  styleUrls: ['./addloan.component.css']
})
export class AddloanComponent implements OnInit {

  public  _web3: any;
  public bank_id;
  public borrower_id;
  public loan_details=[];
  public account;
  public id1;

  constructor(private ls:LoanServiceService,private router: Router, private spinner: NgxSpinnerService) { }
  
  upload(borrowerid,borrowerloanAmount,interestrate,loanduration,assetdetails,assetamt,borrowerpaid)
  {
    if((document.getElementById('id1') as HTMLInputElement).value ==''){
      alert("Enter Borrower Id")
      return;
    }
    if((document.getElementById('id2') as HTMLInputElement).value ==''){
      alert("Enter Borrower Loan Amount")
      return;
    }
    if((document.getElementById('id3') as HTMLInputElement).value ==''){
      alert("Enter Interest rate")
      return;
    }
    if((document.getElementById('id4') as HTMLInputElement).value ==''){
      alert("Enter Loan Duration")
      return;
    }
    if((document.getElementById('id5') as HTMLInputElement).value ==''){
      alert("Enter Asset Details")
      return;
    }
    if((document.getElementById('id6') as HTMLInputElement).value ==''){
      alert("Enter Asset Amount(in rupees)")
      return;
    }

    this.spinner.show();
    this.ls.getAccount().then(address=>{
      this.ls.add_loan(borrowerid,borrowerloanAmount,interestrate,loanduration,assetdetails,assetamt,borrowerpaid,address).then(result =>{
        (document.getElementById('id1') as HTMLInputElement).value ='';
        (document.getElementById('id2') as HTMLInputElement).value ='';
        (document.getElementById('id3') as HTMLInputElement).value ='';
        (document.getElementById('id4') as HTMLInputElement).value ='';
        (document.getElementById('id5') as HTMLInputElement).value ='';
        (document.getElementById('id6') as HTMLInputElement).value ='';
        (document.getElementById('id7') as HTMLInputElement).value ='';
      
        this.spinner.hide();
        if(result == 0) {
          alert("You Rejected this Transaction");
         
        }
        else if(result == 2) {
          alert("Transaction Failed !")
        }
        else if(result == 1) {
          this.table();
          this.ls.loan_ids().then(loan_ids => {
            alert("Loan Added Successfully and Generated Loan Id Is:  "+loan_ids.length)
          });
        }
      })
    })
  }
 
  table()
  {
    this.loan_details=[];
    this.ls.loan_ids().then(ids=>{
      ids.forEach(element => {
        let obj={};
        this.ls.borrower_details_map(element).then(result =>{
          obj['loanid']=element;
          obj['borrowerid']=result[0]
          obj['borrowerloanamt']=result[1]
          obj['borrowerintrest']=result[2]
          obj['loanduration']=result[3]
          obj['assetid']=result[4]
          obj['assetdetails']=result[5]
          obj['assetamt']=result[6]
          obj['borrowerpaid']=result[7]
          console.log(result)
          this.loan_details.push(obj)           
        })
      });
    })
  }
  

  ngOnInit() {
    this.table()
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
          }, 200);
       });

  }
  ngOnDestroy() {
    if (this.id1) {
      clearInterval(this.id1);
    }

  }
 
}