import { Injectable } from '@angular/core';


import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.prod';


@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor(private readonly http: HttpClient ) { 
    
  }

  getItems(){
    return this.http.get(environment.jsonUrl);
  }
  
  getItemsById(id:number){
    return this.http.get(environment.jsonUrl+"/"+id);
  }

}
