import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrawlerComponent } from './brawler.component';

describe('BrawlerComponent', () => {
  let component: BrawlerComponent;
  let fixture: ComponentFixture<BrawlerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrawlerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrawlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
