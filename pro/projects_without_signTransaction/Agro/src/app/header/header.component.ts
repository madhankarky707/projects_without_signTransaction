import { Component, OnInit } from '@angular/core';
import { ChainServiceService } from '../service/chain-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
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
