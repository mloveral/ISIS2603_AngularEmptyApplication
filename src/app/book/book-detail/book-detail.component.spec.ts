/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BookDetailComponent } from './book-detail.component';
import { Editorial } from '../../editorial/editorial';
import { faker } from '@faker-js/faker';
import { Author } from '../../author/author';
import { BookDetail } from '../book-detail';

describe('BookDetailComponent', () => {
  let component: BookDetailComponent;
  let fixture: ComponentFixture<BookDetailComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [],
      declarations: [ BookDetailComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookDetailComponent);
    component = fixture.componentInstance;


    const editorial = new Editorial(
      faker.number.int(),
      faker.lorem.sentence()
    );


    const authors: Author[] = [];
    for (let i = 0; i < 3; i++) {
      const author = new Author (
        faker.number.int(),
        faker.lorem.sentence(),
        faker.number.int(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
      );
      authors.push(author);
    }


    component.bookDetail= new BookDetail(
      faker.number.int(),
      faker.lorem.sentence(),
      faker.lorem.sentence(),
      faker.lorem.sentence(),
      faker.image.url(),
      faker.date.past(),
      editorial,
      authors,
      []
    );


    fixture.detectChanges();
    debug = fixture.debugElement;
  });


});