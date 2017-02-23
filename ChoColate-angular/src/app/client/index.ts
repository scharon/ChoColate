import {Injectable, Inject, Optional} from '@angular/core'
import { Http, RequestMethod, Headers, RequestOptions} from '@angular/http';
import {UserService} from '../user.service';

@Injectable()
export class Client {

constructor(private http: Http, private userService: UserService) {}

reqOptions() : RequestOptions{
    let headers = new Headers({ 'Authorization': this.userService.getToken() });
    headers.append('Content-Type', 'application/json');
    console.log(headers);
    return new RequestOptions({ headers: headers });
}

// PUT
changePassword( username: String, password: String ): any {
  let _uri : String = '/api/V1/reuquestPasswordRecovery';
}

// PUT
resetChangePassword(username: String, password: String ): any {
  let _uri : String = '/api/V1/passwordRecovery/reset';
}

// DELETE
deletProfile( username: String, password: String ): any {
  let _uri : string = "/api/V1/student"
}

// PUT
changeAvatar( username: String, avatar : any): any {
  let _uri : String = "/api/V1/avatar/:avatarId"
}

getRequest(uri: string): any {
    return this.http.get(uri, this.reqOptions())
            .map((response: any) => response.json());
}
// GET
getAvatars(): any {
  let _uri : string = "/api/V1/avatar"
  return  this.getRequest(_uri);
}

// GET
getUsers(): any {
  let _uri : string = "/api/V1/student"
  return  this.getRequest(_uri);
}

getUserInfos(): any {
  let _uri : string = "/api/V1/student"
  return  this.getRequest(_uri);
}

// GET
getChapters(): any {
  let _uri : string = "/api/V1/chapter"
  return this.getRequest(_uri);
}

// GET
getChapter(): any {
  let _uri : string = "/api/V1/chapter/:chapterId"
  return this.getRequest(_uri);
}

// GET
getIllustration(): any {
  let _uri : string = "/api/V1/chapterillustrations/:chapterId"
  return this.getRequest(_uri);
}

// GET
getEducationPlans(): any {
  let _uri : string = "/api/V1/educationPlan"
  return this.getRequest(_uri);
}

// GET
getEducationPlan(): any {
  let _uri : string = "/api/V1/educationPlan/:educationPlanId"
  return this.getRequest(_uri);
}

}
