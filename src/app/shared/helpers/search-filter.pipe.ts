import { Pipe, PipeTransform } from '@angular/core';
import {Book} from "../interfaces/book";
import {AddBook} from "../interfaces/add-book";

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(books: AddBook[], searchValue:string): AddBook[] {

    if (!books || !searchValue){
      return books;
    }
    console.log(books.filter(book => {
      console.log(book.name.toLowerCase().includes(searchValue.toLowerCase()))
      book.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
    }));

    return books.filter(book =>{
       return (book.name.toLowerCase().includes(searchValue.toLowerCase()))
    })
  }

}
