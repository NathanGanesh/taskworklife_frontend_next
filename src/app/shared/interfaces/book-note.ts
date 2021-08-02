export class BookNote {
  id:number;
  pageNumber:number;
  date:Date;

  constructor(id: number, pageNumber: number, date: Date) {
    this.id = id;
    this.pageNumber = pageNumber;
    this.date = date;
  }
}
