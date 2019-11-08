import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule, NgForm } from '@angular/forms';
import { ApiServiceService } from '@service/api-service.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-input-user-data',
  templateUrl: './input-user-data.component.html',
  styleUrls: ['./input-user-data.component.css']
})
export class InputUserDataComponent implements OnInit {

  constructor(private apiService: ApiServiceService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(summaryForm: NgForm) {

    let url = '/contact';
    let body = {};
    body['title'] = summaryForm.value.title;
    body['content'] = summaryForm.value.content;

    this.apiService.post(body,url).subscribe((res) => {
      
      // Set data for Behavior Subject
      this.apiService.setData(res);

      },(err) => {
      }
    );
    this.router.navigateByUrl('/summary');
  }

}
