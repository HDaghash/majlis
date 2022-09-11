import { Component, Input, OnChanges } from '@angular/core';
import { IMajlisForm } from '../majlis-form/types';
import { ChartOptions } from 'chart.js';
import { LookupItemPipe } from 'app/pipes/lookup-item.pipe';
import { CITIES, DISTRICTS } from '../majlis-form/config';
import { IDataSetItem, IStatistic } from './types';
import { CHART_COLORS, HOVER_CHART_COLORS } from './config';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less']
})
export class DashboardComponent implements OnChanges {
  @Input() items: IMajlisForm[] = [];
  readonly CHART_COLORS = CHART_COLORS;
  citiesLabels: string[] = [];
  districtsLabels: string[] = [];
  citiesData: IDataSetItem[] = [];
  districtsData: IDataSetItem[] = [];
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
    const districts: IStatistic[] = [];
    const coloring = { backgroundColor: CHART_COLORS, hoverBackgroundColor: HOVER_CHART_COLORS };
    items.map((item: IMajlisForm) => {
      const city = this.lookupItemPipe.transform(item.city, CITIES);
      const district = this.lookupItemPipe.transform(item.district, DISTRICTS);

      this.pushItem(cities, city);
      this.pushItem(districts, district);
    });
    const citiesNumbers = cities.map(city => city.total);
    const districtsNumbers = districts.map(district => district.total);

    this.citiesData = [{ data: citiesNumbers, ...coloring }];
    this.districtsData = [{ data: districtsNumbers, ...coloring }];

    this.citiesLabels = cities.map(city => city.name);
    this.districtsLabels = districts.map(district => district.name);
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
