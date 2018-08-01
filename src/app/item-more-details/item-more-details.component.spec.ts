import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemMoreDetailsComponent } from './item-more-details.component';

describe('ItemMoreDetailsComponent', () => {
  let component: ItemMoreDetailsComponent;
  let fixture: ComponentFixture<ItemMoreDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemMoreDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemMoreDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
