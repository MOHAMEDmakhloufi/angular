import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulterUnEtudiantComponent } from './consulter-un-etudiant.component';

describe('ConsulterUnEtudiantComponent', () => {
  let component: ConsulterUnEtudiantComponent;
  let fixture: ComponentFixture<ConsulterUnEtudiantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsulterUnEtudiantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsulterUnEtudiantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
