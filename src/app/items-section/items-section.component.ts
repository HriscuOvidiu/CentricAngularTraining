import { Component, OnInit, Output, EventEmitter, OnChanges } from '@angular/core';
import { ItemsService } from '../services/items.service';

@Component({
  selector: 'items-section',
  templateUrl: './items-section.component.html',
  styleUrls: ['./items-section.component.css']
})
export class ItemsSectionComponent implements OnInit {
  private items: any[] = [];

  selectedItem: number;
  @Output() details: EventEmitter<any> = new EventEmitter<any>();
  constructor(private readonly itemsService: ItemsService) { }

  ngOnInit() {
    this.itemsService.getItems().subscribe((data: any[]) => {
      this.items = data;
    });
  }

  sendDetails(item: any) {
    this.details.emit(item);
    this.selectedItem = item.id;
  }

}
