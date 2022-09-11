import { Component, Input, OnChanges } from '@angular/core';
import { IMajlisForm } from '../majlis-form/types';
import { ChartOptions } from 'chart.js';
import { LookupItemPipe } from 'app/pipes/lookup-item.pipe';
import { CITIES, DISTRICTS } from '../majlis-form/config';
import { IDataSetItem, IStatistic } from './types';
import { CHART_COLORS, HOVER_CHART_COLORS, STATUS_LEGEND } from './config';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less']
})
export class DashboardComponent implements OnChanges {
  @Input() items: IMajlisForm[] = [];
  readonly CHART_COLORS = CHART_COLORS;
  citiesLabels: string[] = [];
  statusLabels: string[] = [...STATUS_LEGEND];
  citiesData: IDataSetItem[] = [];
  statusData: IDataSetItem[] = [];
  pieChartLegend = true;
  pieChartPlugins = [];
  pieChartOptions: ChartOptions<'pie'> = {
    responsive: true
  };

  constructor(private lookupItemPipe: LookupItemPipe) {}

  ngOnChanges() {
    this.shapeData(this.items);
  }

  shapeData(items: IMajlisForm[]) {
    const cities: IStatistic[] = [];
    const coloring = { backgroundColor: CHART_COLORS, hoverBackgroundColor: HOVER_CHART_COLORS };
    items.map((item: IMajlisForm) => {
      const city = this.lookupItemPipe.transform(item.city, CITIES);
      this.pushItem(cities, city);
    });
    const citiesNumbers = cities.map(city => city.total);
    const availableMajlis = items.filter(item => item.status)?.length;
    const unAvailableMajlis = items.filter(item => item.status === false)?.length;

    this.citiesData = [{ data: citiesNumbers, ...coloring }];
    this.statusData = [{ data: [availableMajlis, unAvailableMajlis], ...coloring }];

    this.citiesLabels = cities.map(city => city.name);
  }

  pushItem(items: IStatistic[], value: string) {
    if (!items.some(i => i.name === value)) {
      items.push({ name: value, total: 1 });
    } else {
      const target = items.findIndex(c => c.name === value);
      items[target].total += 1;
    }
  }
}
