import {Component, Input, OnInit} from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';
import {StateChart} from '../../../../@core/dto/customer/teva/state';


@Component({
  selector: 'app-teva-unitchart',
  templateUrl: './unitchart.component.html',
  styleUrls: ['./unitchart.component.scss']
})

export class TevaUnitchartComponent implements OnInit {

  @Input() data: StateChart;
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
          'age0',
          'age2',
          'age3',
          'age4',
          'age5',
          'age6',
          'age7',
          'age8',
          'age9',
          'age10'
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
        data: this.data.co2
      }, {
        color: '#c1bcc2',
        name: 'PH',
        data: this.data.ph
      }]
    };

    HC_exporting(Highcharts);
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
      }, 300);

  }

}
