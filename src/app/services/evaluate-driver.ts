import {environment} from '../../enviroments/enviroment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root', // Esto la registra como proveedor global
})
export class EvaluateDriver{
  private apiUrl = environment.apiUrl+'/desempeño/evaluarDesempeno';  // URL del backend

  constructor(private http: HttpClient) {}

  postEvaluateDriver(data: any): Observable<any> {
    const headers = { 'Content-Type': 'application/json' };
    return this.http.post<any>(this.apiUrl, data, { headers });
  }
}
