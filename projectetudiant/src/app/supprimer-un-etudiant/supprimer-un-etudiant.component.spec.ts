import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupprimerUnEtudiantComponent } from './supprimer-un-etudiant.component';

describe('SupprimerUnEtudiantComponent', () => {
  let component: SupprimerUnEtudiantComponent;
  let fixture: ComponentFixture<SupprimerUnEtudiantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupprimerUnEtudiantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupprimerUnEtudiantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
