import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortlinkComponent } from './shortlink.component';

describe('ShortlinkComponent', () => {
  let component: ShortlinkComponent;
  let fixture: ComponentFixture<ShortlinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShortlinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShortlinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
