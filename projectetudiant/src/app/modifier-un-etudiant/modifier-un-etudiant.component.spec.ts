import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierUnEtudiantComponent } from './modifier-un-etudiant.component';

describe('ModifierUnEtudiantComponent', () => {
  let component: ModifierUnEtudiantComponent;
  let fixture: ComponentFixture<ModifierUnEtudiantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierUnEtudiantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierUnEtudiantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
