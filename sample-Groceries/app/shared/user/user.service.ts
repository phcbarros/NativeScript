import {Injectable} from "angular2/core";
import {Http, Headers, Response} from "angular2/http";
import {User} from "./user";
import {Config} from "../config";
import {Observable} from "rxjs/Rx";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";

@Injectable()
export class UserService {
    
    constructor(private _http:Http){}
    
    public register(user: User): Observable<Response>{
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        
        return this._http.post(
            Config.apiUrl + 'Users',
            JSON.stringify({
                UserName: user.email,
                Email: user.email,
                Password: user.password
            }),
            { headers: headers}
        )
        .catch(this.handleErrors);
    }
    
    public login(user: User): Observable<Response>{
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        
        return this._http.post(
            Config.apiUrl + 'oauth/token',
            JSON.stringify({
                username: user.email,
                password: user.password,
                grant_type: 'password'
            }),
            { headers: headers }
        )
        .map(response => response.json())
        .do(data => {
            Config.token = data.Result.access_token;
        })
        .catch(this.handleErrors);
    }
    
    handleErrors(error: Response): Observable<Response>{
        console.log(JSON.stringify(error.json()));
        return Observable.throw(error);
    }
}