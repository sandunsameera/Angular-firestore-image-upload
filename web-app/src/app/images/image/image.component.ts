import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styles: []
})
export class ImageComponent implements OnInit {


  formTemplate = new FormGroup({
    caption:new FormControl(''),
    category:new FormControl(''),
    imageURL:new FormControl(''),
  })
  constructor() { }

  ngOnInit() {
  }

}
