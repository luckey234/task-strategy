import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentnScrollComponent } from './componentn-scroll.component';

describe('ComponentnScrollComponent', () => {
  let component: ComponentnScrollComponent;
  let fixture: ComponentFixture<ComponentnScrollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentnScrollComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentnScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
