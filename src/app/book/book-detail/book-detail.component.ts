import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {BookService} from "../../shared/services/book.service";
import {Book} from "../../shared/interfaces/book";

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
  id: number = -1;
  // @ts-ignore
  book: Book = new Book();
  constructor(private route: ActivatedRoute,private bookService:BookService) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.bookService.getBookById(this.id).subscribe(data =>{
      this.book = data;
      console.log(data)
    }, error => console.log(error))

  }

}
