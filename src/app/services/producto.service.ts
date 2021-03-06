import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { Producto } from '../models/producto';
import { GLOBAL } from './global';

@Injectable()  //decorador
export class ProductoService{
	public url:string;

	constructor(
		public _http: Http
	){
		this.url = GLOBAL.url;
	}

	getProductos(){
		return this._http.get(this.url+'productos').pipe(map(res=>res.json()));
	}
}