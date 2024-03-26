import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';
import { ICountry } from '../models/ICountry';
import { ErrorService } from './error.service';
import { IStafRole } from '../models/IStafRole';
import { IGenre } from '../models/IGenre';
import { IQuality } from '../models/IQuality';
import { IPremium } from '../models/IPremium';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient,private errorService: ErrorService) { }
  getCountries():Observable<HttpResponse<ICountry[]>>
  {
    return this.http
    .get<ICountry[]>('https://localhost:7158/api/Data/getcountries', {observe: 'response'})
    .pipe(catchError(this.errorService.errorHendler));
  }
  getRoles():Observable<HttpResponse<IStafRole[]>>
  {
    return this.http
    .get<IStafRole[]>('https://localhost:7158/api/Data/getroles', {observe: 'response'})
    .pipe(catchError(this.errorService.errorHendler));
  }

  getGenres():Observable<HttpResponse<IGenre[]>>
  {
    return this.http
    .get<IGenre[]>('https://localhost:7158/api/Data/getgenres', {observe: 'response'})
    .pipe(catchError(this.errorService.errorHendler));
  }

  getQualities():Observable<HttpResponse<IQuality[]>>
  {
    return this.http
    .get<IQuality[]>('https://localhost:7158/api/Data/getqualities', {observe: 'response'})
    .pipe(catchError(this.errorService.errorHendler));
  }

  getPremiums():Observable<HttpResponse<IPremium[]>>
  {
    return this.http
    .get<IPremium[]>('https://localhost:7158/api/Data/getpremiums', {observe: 'response'})
    .pipe(catchError(this.errorService.errorHendler));
  }
}
