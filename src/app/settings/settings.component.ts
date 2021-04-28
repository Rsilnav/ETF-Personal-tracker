import { Component, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatTable } from '@angular/material/table';
import { EtfService } from '../etf.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent {
  addEtfForm = this.fb.group({
    isin: [null, Validators.required],
  });

  myEtfs = [];
  displayedColumns: string[] = ['isin'];

  @ViewChild(MatTable, {static: true}) table: MatTable<any>;

  constructor(
    private fb: FormBuilder,
    private etfService: EtfService,
  ) {
    this.fetchEtfs();
   }

  submitNewEtf(): void {
    if (this.addEtfForm.valid) {
      let formValue = this.addEtfForm.value;
      let isin = formValue.isin;
      this.etfService.addEtf({ isin: isin });
      this.fetchEtfs();
    }
    else {
      alert('Invalid ISIN');
    }
  }

  fetchEtfs(): void{
    this.myEtfs = this.etfService.getEtfs();
  }

  // TODO: [ETF-5] Make list of ETFs dynamic
}
