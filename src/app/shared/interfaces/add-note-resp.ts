export class AddNoteResp {
  id:number = -1;
  pageNumber:number = -1;

  constructor(id: number, pageNumber: number) {
    this.id = id;
    this.pageNumber = pageNumber;
  }
}
