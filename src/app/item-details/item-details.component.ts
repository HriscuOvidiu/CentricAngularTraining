import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit, OnChanges {


  @Input() itemToBeSend:any={};
  path:string;

  constructor() { }

  ngOnInit() {  }

  ngOnChanges(){
    this.path="/"+this.itemToBeSend.id;
  }

}
