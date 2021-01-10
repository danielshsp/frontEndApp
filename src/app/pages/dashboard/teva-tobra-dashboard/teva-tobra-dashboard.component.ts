import { Component, OnInit } from '@angular/core';
import {DashboardTevaService} from '../../../@core/services/customer/teva/dashboard-teva.service';
import {take} from 'rxjs/operators';
import {Monitored, State, StateChart} from '../../../@core/dto/customer/teva/state';

@Component({
  selector: 'app-teva-tobra-dashboard',
  templateUrl: './teva-tobra-dashboard.component.html',
  styleUrls: ['./teva-tobra-dashboard.component.scss']
})
export class TevaTobraDashboardComponent implements OnInit {
  stateChart: StateChart;

  constructor(private dashboardTevaService: DashboardTevaService) {
    this.dashboardTevaService.findStateByBatchId(0, 10,  'batchAgeInMin', 'desc', '5520Prod').pipe(take(1)).
    subscribe(res => {
      const arr = res.findStateByBatchId;
      const co2 = arr.map(x => x.monitored.co2);
      const ph = arr.map(x => x.monitored.onlinePH);
      this.stateChart = new StateChart(co2, ph);
      console.log(this.stateChart);
    });
  }

  ngOnInit(): void {
  }

}
