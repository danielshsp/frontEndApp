import {Component, Input, OnInit} from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';


@Component({
  selector: 'app-teva-unitchart',
  templateUrl: './unitchart.component.html',
  styleUrls: ['./unitchart.component.scss']
})

export class TevaUnitchartComponent implements OnInit {

  @Input() label: string = String();
  chartOptions: any = {} ;
  Highcharts = Highcharts;

  constructor() { }

  ngOnInit(): void {
    this.chartOptions = {
      chart: {
        type: 'areaspline',
        backgroundColor: null,
        borderWidth: 0
      },
      title: {
        text: null
      },
      subtitle: {
        text: 'Teva'
      },
      xAxis: {
        categories: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday'
        ]
      },
      tooltip: {
        shared: true,
        valueSuffix: null
      },
      credits: {
        enabled: false
      },
      exporting: {
        enabled: true,
      },
      series: [{
        name: 'Co2',
        data: [3, 4, 3, 5, 4, 10, 12]
      }, {
        color: '#c1bcc2',
        name: 'PH',
        data: [1, 3, 4, 3, 3, 5, 4]
      }]
    };

    HC_exporting(Highcharts);
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
      }, 300);

  }

}
