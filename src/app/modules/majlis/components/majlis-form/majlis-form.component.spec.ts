import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MajlisFormComponent } from './majlis-form.component';

describe('MajlisFormComponent', () => {
  let component: MajlisFormComponent;
  let fixture: ComponentFixture<MajlisFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MajlisFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MajlisFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
