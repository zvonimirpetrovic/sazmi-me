import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '@app/service/api-service.service';

@Component({
  selector: 'app-output-summary-data',
  templateUrl: './output-summary-data.component.html',
  styleUrls: ['./output-summary-data.component.css']
})
export class OutputSummaryDataComponent implements OnInit {
  
  res: any;

  constructor( private apiService: ApiServiceService) { 

    apiService.apiData$.subscribe(res => this.res = res);
  }

  ngOnInit() {}

}
