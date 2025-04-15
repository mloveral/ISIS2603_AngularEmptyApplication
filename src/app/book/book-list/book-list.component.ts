import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book.service';
import { BookDetail } from '../book-detail';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
  standalone: false
})
export class BookListComponent implements OnInit {

  books: Array<BookDetail> = [];

  selectedBook!: BookDetail;
  selected: Boolean = false;

  constructor(private bookService: BookService) { }

  getBooks() {
    this.bookService.getBooks().subscribe(books => {
      this.books = books;
    });
  }

  onSelected(book:BookDetail): void {
    this.selected = true;
    this.selectedBook = book;
  }

  ngOnInit() {
    this.getBooks();
  }

}
