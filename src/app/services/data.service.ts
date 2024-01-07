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
  dividedData: any[][] = [];

  currentPage = 1;
  totalPages!: number;
  pageScale: number[] = [];


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
    this.divideResultsIntoArrays()
  }

  divideResultsIntoArrays() {
    const chunkSize = 5;
    let index = 0;
    this.dividedData = [];

    while (index < this.filteredData.length) {
      this.dividedData.push(this.filteredData.slice(index, index + chunkSize));
      index += chunkSize;
    }

    this.getPageNumbers();
  }

  sortDataByName(order: string): void {
    if (order === 'asc') {
      this.filteredData.sort((a, b) => (a.nameSurname && b.nameSurname) ? a.nameSurname.localeCompare(b.nameSurname) : 0);
    } else if (order === 'desc') {
      this.filteredData.sort((a, b) => (a.nameSurname && b.nameSurname) ? b.nameSurname.localeCompare(a.nameSurname) : 0);
    }
    this.currentPage = 1;
    this.divideResultsIntoArrays();
  }

  sortDataByDate(order: string): void {
    if (order === 'asc') {
      this.filteredData.sort((a, b) => {
        if (a.date && b.date) {
          const dateA = new Date(a.date);
          const dateB = new Date(b.date);
          return dateA.getTime() - dateB.getTime();
        }
        return 0;
      });
    } else if (order === 'desc') {
      this.filteredData.sort((a, b) => {
        if (a.date && b.date) {
          const dateA = new Date(a.date);
          const dateB = new Date(b.date);
          return dateB.getTime() - dateA.getTime();
        }
        return 0;
      });
    }
    this.currentPage = 1;
    this.divideResultsIntoArrays();
  }

  getPageNumbers() {
    this.totalPages = this.dividedData.length;
    this.prepareRangeScale();
  }

  prepareRangeScale() {
    this.pageScale = [];
    const rangeLength: number = this.totalPages - 2;
    if (this.totalPages > 6) {
      for (let i = 1; i <= 3; i++) {
        this.pageScale.push(i);
      }
      for (let i = rangeLength; i <= this.dividedData.length; i++) {
        this.pageScale.push(i);
      }
    } else {
      for (let i = 1; i <= this.dividedData.length; i++) {
        this.pageScale.push(i);
      }
    }
  }

  addFormData(formData: any): void {
    this.allDatas.push(formData);
    localStorage.setItem('formData', JSON.stringify(formData));
  }
}
