import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LesEtudiantComponent } from './les-etudiant.component';

describe('LesEtudiantComponent', () => {
  let component: LesEtudiantComponent;
  let fixture: ComponentFixture<LesEtudiantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LesEtudiantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LesEtudiantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
