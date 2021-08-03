import {Pipe, PipeTransform} from '@angular/core';
import {Book} from "../interfaces/book";

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(books: Book[], searchValue: string): Book[] {

    if (!books || !searchValue) {
      return books;
    }
    console.log(books.filter(book => {
      console.log(book.name.toLowerCase().includes(searchValue.toLowerCase()))
      book.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
    }));

    return books.filter(book => {
      return (book.name.toLowerCase().includes(searchValue.toLowerCase()) || book.author.toLowerCase().includes(searchValue.toLowerCase()) || book.endDate.toDateString().toLowerCase().includes(searchValue.toLowerCase()) || book.startDate.toDateString().toLowerCase().includes(searchValue.toLowerCase()) || book.status.toString().toLowerCase().includes(searchValue.toLowerCase()) || book.finalPage.toString().toLowerCase().includes(searchValue.toLowerCase()) || book.id.toString().includes(searchValue.toLowerCase()) || book.categories.includes(searchValue.toLowerCase()))
    })
  }

}
