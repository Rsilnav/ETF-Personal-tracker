import { Component, ViewChild } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { MatTable } from '@angular/material/table';
import { EtfService } from '../etf.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent {
  addEtfForm = this.fb.group({
    isin: [null, [Validators.required, Validators.pattern('^[A-Za-z]{2}[A-Za-z0-9]{9}[0-9]$')]],
  });

  myEtfs = [];
  displayedColumns: string[] = ['isin'];

  @ViewChild(MatTable, { static: true }) etfTable: MatTable<any>;
  @ViewChild('formDirective') private formDirective: NgForm;

  constructor(
    private fb: FormBuilder,
    private etfService: EtfService,
  ) {
    this.fetchEtfs();
  }

  get isin() {
    return this.addEtfForm.get('isin');
  }

  submitNewEtf(): void {
    if (this.addEtfForm.valid) {
      this.etfService.addEtf({ isin: this.isin.value.toUpperCase() });
      this.formDirective.resetForm();
      this.etfTable.renderRows();
    }
    else {
      alert('Invalid ISIN');
    }
  }

  fetchEtfs(): void {
    this.myEtfs = this.etfService.getEtfs();
  }
}
