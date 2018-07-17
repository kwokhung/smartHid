import { Component } from '@angular/core';
import * as echarts from 'echarts';
import 'echarts-liquidfill';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor() {
  }
  ionViewDidEnter() {
    const ec = echarts as any;
    const container = document.getElementById('chart');
    const chart = ec.init(container);
    chart.setOption({
      series: {
        type: 'liquidFill',
        data: [0.5, 0.4, 0.3, 0.2]
      }
    });
  }
}