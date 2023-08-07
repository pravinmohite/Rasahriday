import { Component, OnInit } from '@angular/core';
import { SafeResourceUrlPipe } from 'src/app/pipes/safe-resource-url.pipe';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';



@Component({
  selector: 'app-blogs-by-category',
  templateUrl: './blogs-by-category.component.html',
  styleUrls: ['./blogs-by-category.component.scss'],
  providers: [SafeResourceUrlPipe]
})
export class BlogsByCategoryComponent implements OnInit {
  productImages = [];
  currentlyUploadedImageSrc = [];

  constructor(
    private safeResourceUrl: SafeResourceUrlPipe,
    private formBuilder: FormBuilder
  ) { }

  urls = [];

  allowDrop(event: Event) {
    event.preventDefault();
  }

  drag(event: DragEvent) {
    event.dataTransfer!.setData('text', (event.currentTarget['parentElement'] as HTMLElement).id);
  }

  drop(event: DragEvent) {
    event.preventDefault();
    const data = event.dataTransfer!.getData('text');
    const dropzone = event.target as HTMLElement;
    dropzone.appendChild(document.getElementById(data)!);
  }

  // choose photos
  onselectFile(e: any) {
    if (e.target.files) {
      for (let i = 0; i < e.target.files.length; i++) {
        var reader = new FileReader();
        reader.readAsDataURL(e.target.files[i]);
        reader.onload = (events: any) => {
          this.urls.push(events.target.result);
        }
      }
    }
  }

  setCurrentlyUploadedImgArr(file) {
    let imgSrc = URL.createObjectURL(file)
    this.currentlyUploadedImageSrc.push(imgSrc);
  }

  getFiles(event) {
    this.productImages = [];
    for (var i = 0; i < event.target.files.length; i++) {
      this.productImages.push(event.target.files[i]);
      this.setCurrentlyUploadedImgArr(event.target.files[i]);
      // this.setCurrentlyUploadedImgArr(event.target.files[i])
    }
  }

  // angular editor


  form: FormGroup;

  htmlContent1 = '';

  config1: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    minHeight: '5rem',
    maxHeight: 'auto',
    placeholder: 'Enter text here...',
    translate: 'no',
    sanitize: false,
    // toolbarPosition: 'top',
    outline: true,
    defaultFontName: 'Comic Sans MS',
    defaultFontSize: '5',
    // showToolbar: false,
    defaultParagraphSeparator: 'p',
    customClasses: [
      {
        name: 'quote',
        class: 'quote',
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      },
    ],
    toolbarHiddenButtons: [
      ['bold', 'italic'],
      ['fontSize']
    ]
  };

  ngOnInit(): void {

  }

  onChange(event) {
    console.log('changed');
    this.checkForImage(); // Call the method to check for images and add the class
  }

  onBlur(event) {
    console.log('blur ' + event);
  }

  checkForImage() {
    console.log('Checking for images');
    const editor = document.getElementById('editor1'); // Get the editor element by its ID
    console.log('Editor element:', editor);
    const images = editor.getElementsByTagName('img'); // Get all <img> elements inside the editor
    console.log('Number of images:', images.length);

    // Convert HTMLCollectionOf to an array
    const imageArray = Array.from(images) as HTMLImageElement[];
  
    for (const image of imageArray) {
      image.classList.add('your-dynamic-class'); // Replace 'your-dynamic-class' with your actual class name
    }
  }

}
