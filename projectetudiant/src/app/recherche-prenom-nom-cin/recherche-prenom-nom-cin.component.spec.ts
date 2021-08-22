import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecherchePrenomNomCinComponent } from './recherche-prenom-nom-cin.component';

describe('RecherchePrenomNomCinComponent', () => {
  let component: RecherchePrenomNomCinComponent;
  let fixture: ComponentFixture<RecherchePrenomNomCinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecherchePrenomNomCinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecherchePrenomNomCinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
