import { Component } from '@angular/core';
import { HistoryFacade } from "./history.facade";

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrl: './history.component.scss',
  providers: [HistoryFacade]
})
export class HistoryComponent {
  dataSource: any;
  displayedColumns: any;
  data;
  constructor(private facade: HistoryFacade) {
    this.data = this.facade.getAlerts()
  }

}
