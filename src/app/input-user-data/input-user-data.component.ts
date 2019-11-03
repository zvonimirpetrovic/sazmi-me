import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule, NgForm } from '@angular/forms';
import { ApiServiceService } from '@service/api-service.service';

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
    // console.log(summaryForm.value.title);
    // console.log(summaryForm.value.content);
    let url = '/contact';
    let body = {};
    body['title'] = summaryForm.value.title;
    body['content'] = summaryForm.value.content;


    // TODO improve data sent
    //body['content'] = '"""' + body['content'] + '"""';
    //body['content'] = body['content'].replace(/\s/g,'');
    this.apiService.post(body,url).subscribe((res) => {

        console.log('RES:', res);
        // this.spinnerModule.hide();
      },(err) => {
      }
    );
  }

}
