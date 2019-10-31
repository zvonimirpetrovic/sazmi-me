import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-input-user-data',
  templateUrl: './input-user-data.component.html',
  styleUrls: ['./input-user-data.component.css']
})
export class InputUserDataComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSubmit(summaryForm: NgForm) {
    console.log(summaryForm.value.title);
    console.log(summaryForm.value.content);
  } 

}
