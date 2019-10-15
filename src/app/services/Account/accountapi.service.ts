import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

const headers = new HttpHeaders()
                          .set("Content-Type","application/x-www-form-urlencoded")
                          .set("X_CASINO", "kGzv5nlQ10hlMTBhZGMzOTQ5YmE1OWFiYmU1NmUwNTdmMjBmODgzZUAjJCUWTGpacKKkQ6qUy+wy3WCu");


@Injectable({
  providedIn: 'root'
})

export class AccountapiService {

  getAccountList() { 
    return this 
           .httpClient
           .post('http://casino.dfsglotech.com/Account/Lists',"", {headers}); 
  }
  
  getUserList(){
    return this.httpClient.get('https://gorest.co.in/public-api/users',{headers});
  }

  constructor(private httpClient: HttpClient) { }
}
