import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private baseUrl = "assets/fakedb.json";
  allDatas: any[] = [];
  dataColumns: any[] = [];
  filteredData: any[] = [];

  constructor(private httpClient: HttpClient) { }

  getDatas(): Observable<any> {
    return this.httpClient.get<any>(this.baseUrl);
  }

  transformData(response: any): void {
    const { cols, data } = response;

    this.allDatas = data.map((item: any) => {
      const transformedObject: any = {};
      cols.forEach((columnName: string, index: number) => {
        transformedObject[columnName] = item[index];
      });
      return transformedObject;
    });

    console.log(this.allDatas);
  }

  filterDataByKeyValuePair(key: string, value: string): void {
    if (value && value.length >= 2) {
      this.filteredData = this.allDatas.filter(item => {
        const itemValue = String(item[key]).toLowerCase();
        return itemValue.includes(value.toLowerCase());
      });
    } else {
      this.filteredData = [];
    }
  }
}
