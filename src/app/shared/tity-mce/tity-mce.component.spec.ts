import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TityMceComponent } from './tity-mce.component';

describe('TityMceComponent', () => {
  let component: TityMceComponent;
  let fixture: ComponentFixture<TityMceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TityMceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TityMceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
