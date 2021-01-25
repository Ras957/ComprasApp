import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map, filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProveedoresService {
  presURL = 'https://comprasapps-43cdc.firebaseio.com/proveedores.json';
  preURL = 'https://comprasapps-43cdc.firebaseio.com/proveedores';

  proveedores: any = [
    {
      nombre: 'Telefónica',
      cif: 'B12345678',
      direccion: 'Paseo de la Castellana, 100',
      cp: '28.010',
      localidad: 'Madrid',
      provincia: 'Madrid',
      telefono: 911111111,
      email: 'info@telefonica.com',
      contacto: 'Juan Pérez'
    },
    {
      nombre: 'Iberdrola',
      cif: 'B87654321',
      direccion: 'Príncipe de Vergara, 200',
      cp: '28.015',
      localidad: 'Madrid',
      provincia: 'Madrid',
      telefono: 922222222,
      email: 'info@iberdrola.com',
      contacto: 'Laura Martínez'
    }
  ];

  constructor(private http: HttpClient) { }

  postProveedor(proveedor: any) {
    const newprovee = JSON.stringify(proveedor);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post(this.presURL, newprovee, { headers }).pipe(
      map(res => {
        console.log(res);
        return res;
      }))
  }

  getProveedores(){
    return this.http.get(this.presURL).pipe(
      map(res => res));
  }

  getProveedor(id$: string) {
    const url = `${this.preURL}/${id$}.json`;
    return this.http.get(url).pipe(
      map(res => res));
  }

  putProveedor(proveedor: any, id$: string) {
    const newprovee = JSON.stringify(proveedor);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    const url = `${this.preURL}/${id$}.json`;
    return this.http.put(url, newprovee ,{ headers }).pipe(
      map(res => {
        console.log(res);
        return res;
      }))
  }

  delProveedor ( id$: string ) {
    const url = `${ this.preURL }/${ id$ }.json`;
    return this.http.delete( url ).pipe(
    map( res => res));
    }
  /*
    Estos son los métodos de HttpClient:

      get(url: string, options: {...}): Observable<any>
delete(url: string, options: {...}): Observable<any>
patch(url: string, body: any|null, options: {...}): Observable<any>
post(url: string, body: any|null, options: {...}): Observable<any>
put(url: string, body: any|null, options: {...}): Observable<any>

head(url: string, options: {...}): Observable<any>
options(url: string, options: {...}): Observable<any>
jsonp<T>(url: string, callbackParam: string): Observable<T>

request(first: string|HttpRequest<any>, url?: string, options: {...}): Observable<any>

//new Angular HttpClient service
http.get('/api/items')
.subscribe(data => {   // data is already a JSON object
    console.log(data['someProperty']);
});

  ngOnInit(): void {
    //try some HTTP request:
    this.http.get('some/url').subscribe(data => {
        console.log(data);
    });
  }*/
}


