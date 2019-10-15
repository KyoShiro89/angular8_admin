import { Component, OnInit } from "@angular/core";
import {AccountapiService} from "../../services/Account/accountapi.service";

@Component({
  selector: "app-account",
  templateUrl: "account.component.html",
 // providers:  [ AccountapiService ]
})


export class AccountComponent implements OnInit {
  accountList;
  constructor(private accountApi: AccountapiService) {}
  
  ngOnInit() {
    console.log(1111);
    this.accountApi.getAccountList().subscribe((data)=>{
      console.log(data);
      this.accountList = data['data'];
    });

  }

  
}
