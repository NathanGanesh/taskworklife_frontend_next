export class AddNoteResp {
  id:number = -1;
  pageNumber:number = -1;

  constructor(id: number = -1, pageNumber: number = -1) {
    this.id = id;
    this.pageNumber = pageNumber;
  }
}
