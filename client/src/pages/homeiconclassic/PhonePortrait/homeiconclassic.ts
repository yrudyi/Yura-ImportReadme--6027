import { Component } from '@angular/core';
import { Screen } from 'app/screen';

@Component({
  selector: 'screen-homeiconclassic-phoneportrait',
  templateUrl: 'homeiconclassic.html'
})
export class homeiconclassic_PhonePortrait extends Screen {
  data: any;

  ngOnInit(): void {
    super.ngOnInit();
    // Logic to run when the screen loads goes here.
  }

  ngOnDestroy(): void {
    super.ngOnDestroy();
    // Logic to run when the screen unloads goes here.
  }

  onDataLoad(data: any): void {
    // Logic to run when the screen's data is updated goes here.
  }
}
