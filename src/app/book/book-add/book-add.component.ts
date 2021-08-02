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

@Component({
  selector: 'app-book-add',
  templateUrl: './book-add.component.html',
  styleUrls: ['./book-add.component.css']
})
export class BookAddComponent implements OnInit {

  allCategories: string[] = ['Apple', 'Lemon', 'Lime', 'Orange', 'Strawberry', 'aap'];
  selectedCategories: string[] = ['Psychology'];
  inputName = "Select category"
  // @ts-ignore
  bookForm: FormGroup;
  books$: Book[] = [];
  id: number = -1;
  book: Book = new Book();
  // @ts-ignore
  selectedFile: any = null;
  inputLabel: string = "Categories";

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

  handleListBooks() {
    this.bookService.getAllBooks().subscribe(
      (response: Book[]) => {
        this.books$ = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }


  // name: new FormControl('', [Validators.required, Validators.minLength(3)]),
  // currentPage: new FormControl(''),
  // finalPage: new FormControl('', [Validators.required]),
  // author: new FormControl('', [Validators.required]),
  // status: new FormControl("NO_STATUS", [Validators.required, ]),
  // startDate: new FormControl('', ),
  // endDate: new FormControl(''),
  ngOnInit(): void {
    this.bookForm = new FormGroup({
      name: new FormControl('Man and his symbols', [Validators.required, Validators.minLength(3)]),
      currentPage: new FormControl(),
      finalPage: new FormControl(490, [Validators.required]),
      author: new FormControl('Carl jung', [Validators.required]),
      status: new FormControl("NO_STATUS", [Validators.required,]),
      startDate: new FormControl('',),
      endDate: new FormControl(''),
      // @ts-ignore
    }, {validators: [this.customCheckMinValueInput(), this.checkDateInRange()]})

    if (this.route.snapshot.params['id'] != null) {
      this.id = this.route.snapshot.params['id'];
      this.bookService.getBookById(this.id).subscribe(data => {
        this.book = data;
        console.log(data)
      }, error => console.log(error))
    }
    this.handleListBooks();
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
    let value = this.bookForm.value;
    //FormData API provides methods and properties to allow us easily prepare form data to be sent with POST HTTP requests.
    let reqObject: AddBook;
    const uploadImageData = new FormData();

    if (this.selectedFile != null) {
      uploadImageData.append('image', this.selectedFile);
      reqObject = {
        ...value,
        categories: this.selectedCategories,
        image: uploadImageData
      }
    } else {
      reqObject = {
        ...value,
        categories: this.selectedCategories,
      }
    }
    console.log(reqObject)
    this.bookService.addBook(reqObject).subscribe();
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
