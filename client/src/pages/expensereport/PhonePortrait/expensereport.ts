import { Component } from '@angular/core';
import { Screen } from 'app/screen';

declare var window: any;

@Component({
  selector: 'screen-expensereport-phoneportrait',
  templateUrl: 'expensereport.html'
})
export class expensereport_PhonePortrait extends Screen {
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
