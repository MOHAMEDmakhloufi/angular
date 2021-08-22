import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulterLesEtudiantComponent } from './consulter-les-etudiant.component';

describe('ConsulterLesEtudiantComponent', () => {
  let component: ConsulterLesEtudiantComponent;
  let fixture: ComponentFixture<ConsulterLesEtudiantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsulterLesEtudiantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsulterLesEtudiantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
