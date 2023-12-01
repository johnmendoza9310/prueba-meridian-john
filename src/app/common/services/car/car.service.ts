import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IBrands } from '../../models/brand.model';
import { Observable } from 'rxjs';
import { ICarModels } from '../../models/car-models';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  private _url: string =
    'https://b39a7859-1749-4d86-aa8c-25de832e78a1.mock.pstmn.io';
  constructor(private http: HttpClient) {}

  getBrands(): Observable<IBrands[]> {
    return this.http.get<IBrands[]>(`${this._url}/carbrands`);
  }

  getModels(idModel: string): Observable<ICarModels> {
    return this.http.get<ICarModels>(`${this._url}/carbrands/${idModel}`);
  }
}
