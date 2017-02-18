import {Injectable, Inject, Optional} from '@angular/core'
import { Http, RequestMethod} from '@angular/http';

@Injectable()
export class Client {

constructor(){}

// PUT
putLogin( username: String, password: String ): any {
  let _uri : String = '/api/V1/login';
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
  let _uri : String = "/api/V1/student"
}

// PUT
changeAvatar( username: String, avatar : any): any {
  let _uri : String = "/api/V1/avatar/:avatarId"
}

// GET
getAvatars(): any {
  let _uri : String = "/api/V1/avatar"
}

// GET
getUsers(): any {
  let _uri : String = "/api/V1/student"
}

// GET
getChapters(): any {
  let _uri : String = "/api/V1/chapter"
}

// GET
getChapter(): any {
  let _uri : String = "/api/V1/chapter/:chapterId"
}

// GET
getIllustration(): any {
  let _uri : String = "/api/V1/chapterillustrations/:chapterId"
}

// GET
getEducationPlans(): any {
  let _uri : String = "/api/V1/educationPlan"
}

// GET
getEducationPlan(): any {
  let _uri : String = "/api/V1/educationPlan/:educationPlanId"
}

}
