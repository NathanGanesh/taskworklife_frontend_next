import {
  ChangeDetectorRef,
  Component, ElementRef,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges, ViewChild
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup, FormGroupDirective, NgForm,
  Validators
} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {BookService} from "../../shared/services/book.service";
import {Book} from "../../shared/interfaces/book";
import {tap} from "rxjs/operators";
import {Observable} from "rxjs";
import {
  MatDatepicker,
  MatDatepickerInputEvent
} from "@angular/material/datepicker";
import {HttpErrorResponse} from "@angular/common/http";
import {AddBook} from "../../shared/interfaces/add-book";
import {SelectedItem} from "../../shared/interfaces/selected-item";
import {InputOneBiggerThenTwo} from "../../shared/helpers/input-value-bigger";
import {CustomDateAdapter} from "../../shared/helpers/custom-date-adapter";
import {BookNote} from "../../shared/interfaces/book-note";

@Component({
  selector: 'app-book-add',
  templateUrl: './book-add.component.html',
  styleUrls: ['./book-add.component.css']
})
export class BookAddComponent implements OnInit {
  allCategories: string[] = [];
  selectedCategories: string[] = [];
  inputName = "Select category"
  // @ts-ignore
  bookForm: FormGroup;
  id: number = -1;
  // @ts-ignore
  book: Book;
  // @ts-ignore
  selectedFile: any = null;
  inputLabel: string = "Categories";
  bookNoteArrayList:number[] = []

  selectedItems: SelectedItem[] = [
    {value: "READING", viewValue: 'Currently reading'},
    {value: "DROPPED", viewValue: 'Dropped'},
    {value: "NO_STATUS", viewValue: "No status"},
    {value: "PLAN_TO_READ", viewValue: "Plan to read"},
    {value: "COMPLETED", viewValue: "Completed"}
  ];

  // @ts-ignore
  @ViewChild('myForm') formGroupDirective: FormGroupDirective;


  constructor(private route: ActivatedRoute, private bookService: BookService) {

  }


  ngOnInit(): void {
    this.bookForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      currentPage: new FormControl(''),
      finalPage: new FormControl('', [Validators.required]),
      author: new FormControl('', [Validators.required]),
      status: new FormControl("NO_STATUS", [Validators.required, ]),
      startDate: new FormControl('', ),
      endDate: new FormControl(''),
      // @ts-ignore
    }, {validators: [this.customCheckMinValueInput(), this.checkDateInRange()]})

    if (this.route.snapshot.params['id'] != null) {
      this.id = this.route.snapshot.params['id'];
      this.bookService.getBookById(this.id).subscribe(data => {
        console.log(data)
        this.book = data;
        this.selectedCategories = data.categories;
        // let currentPage = data.bookNoteArrayList.length!==0
        // data?.bookNoteArrayList?.length!=0? data?.bookNoteArrayList[data.bookNoteArrayList.length-1]?.pageNumber : ""
        this.bookForm = new FormGroup({
          name: new FormControl(data.name, [Validators.required, Validators.minLength(3)]),
          currentPage: new FormControl( data.bookNoteArrayList?.length!==0?data.bookNoteArrayList[data.bookNoteArrayList.length-1].pageNumber:""),
          finalPage: new FormControl(data.finalPage, [Validators.required]),
          author: new FormControl(data.author, [Validators.required]),
          status: new FormControl(data.status, [Validators.required, ]),
          startDate: new FormControl(data.startDate!=null?data.startDate:"", ),
          endDate: new FormControl(data.endDate!=null?data.endDate:""),
          // @ts-ignore
        }, {validators: [this.customCheckMinValueInput(), this.checkDateInRange()]})

      }, error => console.log(error));
    }
    // else{

    // }

  }

  customCheckMinValueInput() {
    return (form: FormGroup) => {
      const min = form.get('currentPage');
      const max = form.get('finalPage');
      // @ts-ignore
      return min.value && max.value && +max.value < +min.value ? {error: 'min value'} : null
    }
  }


  checkDateInRange() {
    return (form: FormGroup) => {
      let startDate = form.get('startDate')?.value;
      let endDate = form.get('endDate')?.value;
      if (endDate != "" && startDate != "") {
        startDate = new Date((startDate));
        endDate = new Date((endDate));
        if (startDate.getTime() > endDate.getTime()) {
          return {dateError: 'min value'};
        }
      }
      return null;
    }
  }

  onFileChanged(event: any) {
    this.selectedFile = event.target.files[0];
  }

  onSubmit() {
    if (this.id===-1){
      this.addBook();
    }else{
      this.onEditSubmit();
    }
  }

  addBook(){
    console.log("addBook")
    let value = this.bookForm.value;
    //FormData API provides methods and properties to allow us easily prepare form data to be sent with POST HTTP requests.
    let newBook: AddBook;
    const uploadImageData = new FormData();

    if (this.selectedFile != null) {
      uploadImageData.append('image', this.selectedFile);
      newBook = {
        ...value,
        categories: this.selectedCategories,
        image: uploadImageData
      }
    } else {
      newBook = {
        ...value,
        categories: this.selectedCategories,
      }
    }
    console.log(newBook)
    this.bookService.addBook(newBook).subscribe();
    setTimeout(() => this.formGroupDirective.resetForm(), 0)
    this.selectedCategories = []
    this.selectedFile = null;
  }
  onEditSubmit(){
    console.log("editBook")
    let value = this.bookForm.value;
    let newBook: Book;
    const uploadImageData = new FormData();
    if (this.selectedFile != null) {
      uploadImageData.append('image', this.selectedFile);
      newBook = {
        ...value,
        id:this.id,
        bookNoteArrayList:this.book.bookNoteArrayList,
        categories: this.selectedCategories,
        image: uploadImageData
      }
    } else {
      newBook = {
        ...value,
        id:this.id,
        bookNoteArrayList:this.book.bookNoteArrayList,
        categories: this.selectedCategories,
      }
    }
    console.log(newBook)
    this.bookService.editBook(newBook).subscribe();
    setTimeout(() => this.formGroupDirective.resetForm(), 0)
    this.selectedCategories = []
    this.selectedFile = null;
  }

  // upload() {
  //   this.progress = 0;
  //
  //   this.currentFile = this.selectedFiles.item(0);
  //   this.uploadService.upload(this.currentFile).subscribe(
  //     event => {
  //       if (event.type === HttpEventType.UploadProgress) {
  //         this.progress = Math.round(100 * event.loaded / event.total);
  //       } else if (event instanceof HttpResponse) {
  //         this.message = event.body.message;
  //         this.fileInfos = this.uploadService.getFiles();
  //       }
  //     },
  //     err => {
  //       this.progress = 0;
  //       this.message = 'Could not upload the file!';
  //       this.currentFile = undefined;
  //     });
  //
  //   this.selectedFiles = undefined;
  // }

}
