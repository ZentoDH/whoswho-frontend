import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopscoresComponent } from './topscores.component';

describe('TopscoresComponent', () => {
  let component: TopscoresComponent;
  let fixture: ComponentFixture<TopscoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopscoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopscoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
