import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterUnEtudiantComponent } from './ajouter-un-etudiant.component';

describe('AjouterUnEtudiantComponent', () => {
  let component: AjouterUnEtudiantComponent;
  let fixture: ComponentFixture<AjouterUnEtudiantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterUnEtudiantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterUnEtudiantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
