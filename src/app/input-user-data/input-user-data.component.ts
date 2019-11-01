import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule, NgForm } from '@angular/forms';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-input-user-data',
  templateUrl: './input-user-data.component.html',
  styleUrls: ['./input-user-data.component.css']
})
export class InputUserDataComponent implements OnInit {

  constructor(private apiService: ApiServiceService) { }

  ngOnInit() {
  }

  onSubmit(summaryForm: NgForm) {
    console.log(summaryForm.value.title);
    console.log(summaryForm.value.content);
    this.apiService.postAPIData(summaryForm.value.title, summaryForm.value.content);
  } 

}
