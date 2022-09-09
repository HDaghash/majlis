import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MajlisListComponent } from './majlis-list.component';

describe('MajlisListComponent', () => {
  let component: MajlisListComponent;
  let fixture: ComponentFixture<MajlisListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MajlisListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MajlisListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
