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

    return books.filter(book => {
      return (book.name.toLowerCase().includes(searchValue.toLowerCase()) || book.author.toLowerCase().includes(searchValue.toLowerCase()));
    })
  }

}
