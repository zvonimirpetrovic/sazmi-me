import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputSummaryDataComponent } from './output-summary-data.component';

describe('OutputSummaryDataComponent', () => {
  let component: OutputSummaryDataComponent;
  let fixture: ComponentFixture<OutputSummaryDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutputSummaryDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutputSummaryDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
