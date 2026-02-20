import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterInteface } from './character.inteface';

describe('CharacterInteface', () => {
  let component: CharacterInteface;
  let fixture: ComponentFixture<CharacterInteface>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharacterInteface]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharacterInteface);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
