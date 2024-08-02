import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment as env } from 'src/environments/environment';
import { ResultViewModel } from 'src/modules/shared/interfaces/ResultViewModel';
import { UserDTO } from 'src/modules/shared/interfaces/UserDTO';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly APIURL: string = env.APIURL + '/User';

  constructor(private _HttpClient: HttpClient) { }

  GetAllUser(): Observable<ResultViewModel<UserDTO[]>> {
    return this._HttpClient.get<ResultViewModel<UserDTO[]>>(this.APIURL + '/GetAllUsers');
  }

  GetUser(userId: number): Observable<ResultViewModel<UserDTO>> {
    return this._HttpClient.get<ResultViewModel<UserDTO>>(this.APIURL + `/GetUserById/${userId}`);
  }

  AddUser(user: UserDTO): Observable<UserDTO> {
    return this._HttpClient.post<UserDTO>(this.APIURL + '/AddUser', user);
  }

  DeleteUser(userId: number): Observable<ResultViewModel<boolean>>{
    return this._HttpClient.delete<ResultViewModel<boolean>>(`${this.APIURL}/DeleteUser/${userId}`)
  }


  UpdateUser(user: UserDTO): Observable<UserDTO> {
    return this._HttpClient.put<UserDTO>(this.APIURL + `/UpdateUser/${user.id}`, user);
  }
}
