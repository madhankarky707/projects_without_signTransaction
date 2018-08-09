import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoanServiceService } from '../Service/loan-service.service';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(private ls:LoanServiceService,private router:Router) { }

  ngOnInit() {
    this.ls.getAccount().then(address =>{
      this.ls.check_issuer().then(result =>{
        if(result == true)
        {
        this.router.navigate(['issuer'])
        }
        else
        {
          this.router.navigate(['WelcomeComponent'])
          }
      })
    })
  }

}
