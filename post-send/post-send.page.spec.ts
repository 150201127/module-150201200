import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostSendPage } from './post-send.page';

describe('PostSendPage', () => {
  let component: PostSendPage;
  let fixture: ComponentFixture<PostSendPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostSendPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostSendPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
