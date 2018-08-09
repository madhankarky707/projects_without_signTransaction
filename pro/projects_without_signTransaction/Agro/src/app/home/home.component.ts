import { Component, OnInit } from '@angular/core';
import { ChainServiceService } from '../service/chain-service.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public address:string;
  public balance:number;
  constructor(private cs:ChainServiceService) { 
    this.cs.getAccount().then(add => {
      this.address=add;
    this.cs.getUserBalance(add).then(balance => this.balance = balance);
  })
  }

  ngOnInit() {
  }

}
