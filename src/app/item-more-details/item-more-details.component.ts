import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '../../../node_modules/@angular/router';
import { ItemsService } from '../services/items.service';

@Component({
  selector: 'app-item-more-details',
  templateUrl: './item-more-details.component.html',
  styleUrls: ['./item-more-details.component.css']
})
export class ItemMoreDetailsComponent implements OnInit {

  item:any;
  constructor(private _route:ActivatedRoute,
              private itemService:ItemsService) { }

  ngOnInit() {
    let id =+ this._route.snapshot.paramMap.get('id');
    this.itemService.getItemsById(id).subscribe((data:any)=>{this.item=data});
  }

}
