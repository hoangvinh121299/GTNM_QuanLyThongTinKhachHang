import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LichsugiaodichkhachhangComponent } from './lichsugiaodichkhachhang.component';

describe('LichsugiaodichkhachhangComponent', () => {
  let component: LichsugiaodichkhachhangComponent;
  let fixture: ComponentFixture<LichsugiaodichkhachhangComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LichsugiaodichkhachhangComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LichsugiaodichkhachhangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
