import {
  Component,
  Input,
  OnInit,
  EventEmitter,
  Output
} from '@angular/core';
import {Book} from "../../shared/interfaces/book";
import {BookNote} from "../../shared/interfaces/book-note";
import {MatDialog} from "@angular/material/dialog";
import {DialogOverviewExampleDialog} from "../../dialog-overview/dialog-overview.component";
import {AddNoteResp} from "../../shared/interfaces/add-note-resp";
import {BookService} from "../../shared/services/book.service";


@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  @Input() books: Book[] = [];
  @Output() courseSelected = new EventEmitter<Book>();
  @Output() bookDeleted = new EventEmitter<number>();
  @Output() addNoteToBook = new EventEmitter<AddNoteResp>();


  @Input() searchValue:string = '';

  constructor(public dialog: MatDialog) {

  }

  ngOnInit(): void {
  }


  deleteBook(id: number) {
    this.bookDeleted.emit(id);
  }

  openDialog(id: number, bookNoteArrayList: BookNote[] | undefined): void {
    let length = bookNoteArrayList ? bookNoteArrayList?.[bookNoteArrayList.length-1].pageNumber : 0;
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      data: {
        id,
        lastPage: length
      },
    });


    dialogRef.afterClosed().subscribe(result => {
      this.addNoteToBook.emit(result);
      //doing call to backend here
      console.log(result)
    });
  }



}
