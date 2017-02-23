import {Injectable, Inject, Optional} from '@angular/core'
import { Http, RequestMethod, Headers, RequestOptions} from '@angular/http';
import {UserService} from '../user.service';

@Injectable()
export class Client {

constructor(private http: Http, private userService: UserService) {}

reqOptions(): RequestOptions {
    const headers = new Headers({ 'Authorization': this.userService.getToken() });
    headers.append('Content-Type', 'application/json');
    return new RequestOptions({ headers: headers });
}

// PUT
changePassword( username: string, password: string ): any {
  const _uri = '/api/V1/reuquestPasswordRecovery';
  return this.http.put(_uri, { username : username, password: password}, this.reqOptions())
              .map(response => response.json(), err => console.log(err));
}

// PUT
resetChangePassword(username: String, password: string ): any {
  const _uri = '/api/V1/passwordRecovery/reset';
  return this.http.put(_uri, { username : username, password: password}, this.reqOptions())
          .map(response => response.json(), err => console.log(err));
}

// DELETE
deletProfile( username: string, password: string ): any {
  const _uri = '/api/V1/student';
  this.http.delete(_uri, this.userService.getToken())
  .map(res => res.json());
}

// PUT
changeAvatar( username: string, avatarId : any): any {
  const _uri = '/api/V1/avatar/:avatarId';
  this.http.put(_uri, this.reqOptions())
}

getRequest(uri: string): any {
    return this.http.get(uri, this.reqOptions())
            .map((response: any) => response.json());
}
// GET
getAvatars(): any {
  const _uri = '/api/V1/avatar';
  return  this.getRequest(_uri);
}

getUserInfos(): any {
  const _uri = '/api/V1/student';
  return  this.getRequest(_uri);
}

// GET
getChapters(): any {
  const _uri = '/api/V1/chapter';
  return this.getRequest(_uri);
}

// GET
getChapter(chapterId: any): any {
  const _uri = '/api/V1/chapter/' + chapterId;
  return this.getRequest(_uri);
}

// GET
getIllustration(chapterIllustrationId: any): any {
  const _uri = '/api/V1/chapterillustrations/' + chapterIllustrationId;
  return this.getRequest(_uri);
}

// GET
getEducationPlans(): any {
  const _uri = '/api/V1/educationPlan';
  return this.getRequest(_uri);
}

// GET
getEducationPlan(educationPlanId: any): any {
  const _uri = '/api/V1/educationPlan/' + educationPlanId;
  return this.getRequest(_uri);
}

}
