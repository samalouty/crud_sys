import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ProductDTO } from 'src/modules/shared/interfaces/ProductDTO';
import { ResultViewModel } from 'src/modules/shared/interfaces/ResultViewModel';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

private readonly APIURL: string = environment.APIURL + "/Product"

constructor(private _HttpClient: HttpClient) { }

GetAllProduct(): Observable<ResultViewModel<ProductDTO[]>> {
  return this._HttpClient.get<ResultViewModel<ProductDTO[]>>(this.APIURL + '/GetAllProducts');
}

}
