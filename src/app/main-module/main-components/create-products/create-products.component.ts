import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-products',
  templateUrl: './create-products.component.html',
  styleUrls: ['./create-products.component.css']
})
export class CreateProductsComponent implements OnInit {
  @ViewChild('fileSelect') fileSelect:any
  productForm: FormGroup | any;
  color = ["Red", "Black", "Blue", "Olive"];
  sizes = ["X-s", "S", "M", "L", "X-L", "XX-L"];
  categories = ["Cap", "Hoddies", "Jackets"];
  newSize: any = [];
  images: any = [];



  constructor(
    private formBuilder: FormBuilder,
  ) { this.buildForm() }

  ngOnInit(): void {
  }
  buildForm() {
    this.productForm = this.formBuilder.group({
      productName: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(100)]),
      productQunatity: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]*$/)]),
      productPrice: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]*$/)]),
      companyName: new FormControl('', [Validators.required, Validators.pattern(/^[A-Za-z]+$/)]),
      selectColor: new FormControl('', [Validators.required, Validators.pattern(/^[A-Za-z]+$/)]),
      sizes: new FormArray([]),
      discription: new FormControl('', [Validators.required]),
      productMaterial: new FormControl('', [Validators.required]),
      color: new FormControl('', [Validators.required, Validators.pattern(/^[A-Za-z]+$/)]),
      category: new FormControl('', Validators.required),
    })
  
  }
  getsizes(event:any){
    if(event.target.checked){
      this.newSize.push(event.target.value);
    }
    else{
      this.newSize= this.newSize.filter((value:any) => value!= event.target.value) 
    }
  }
  getimages(event:any){
    let filesLength = event.target.files.length;
    if (event.target.files.length <= 5) {
      [...event.target.files].forEach(file => this.images.push(file));
    
    } else {
      this.images = [];
      this.fileSelect.nativeElement.value = null;
    }
  }
  submitProductForm() {
    this.newSize.forEach((elements: string) => {
      let formControl = new FormControl(elements);
      this.productForm.get("size").push(formControl);
      this.productForm.value;
    })

  }


}
