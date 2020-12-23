import {Component, Input, OnInit} from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-teva-cardwidget',
  templateUrl: './cardwidget.component.html',
  styleUrls: ['./cardwidget.component.scss']
})
export class TevaCardwidgetComponent implements OnInit {

  @Input() label: string = String();
  @Input() total: string = String();
  @Input() percentage: string = String();
  chartOptions: any = {} ;
  Highcharts = Highcharts;

  constructor() { }

  ngOnInit(): void {
    this.chartOptions = {
      chart: {
        type: 'area',
        backgroundColor: null,
        borderWidth: 0,
        margin: [2, 2, 2, 2],
        height: 60
      },
      title: {
        text: null
      },
      subtitle: {
        text: null
      },
      tooltip: {
        split: true,
        outside: true
      },
      legend: {
        enabled: false
      },
      credits: {
        enabled: false
      },
      exporting: {
        enabled: false,
      },
      xAxis: {
        labels: {
          enabled: false,
        },
        title: {
          text: null
        },
        startOnTick: false,
        endOnTick: false,
        tickOptions: []
      },
      yAxis: {
        labels: {
          enabled: false,
        },
        title: {
          text: null
        },
        startOnTick: false,
        endOnTick: false,
        tickOptions: []
      },
      series: [{
        data: [10, 22, 34, 24]
      }]
    };

    HC_exporting(Highcharts);
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 300);

  }

}
