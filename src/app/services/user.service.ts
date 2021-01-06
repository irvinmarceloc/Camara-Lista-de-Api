import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User} from '../model/user.service';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  getUsuarios() {
    return this.http.get<User[]>( 'https://script.googleusercontent.com/macros/echo?user_content_key=RSNdQ-Rgr756w8oMQ9BbUQrjMuXwvRbl1-LwawgW8umU6ldqavB9UdwlfIVf1Pw8QxJbGMSew45rV4v9-4J92gfx4SNOcPBqm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnG91RbuGGpq3vbvCJsLJBI8QKGWUOoWESN10XAiMbS0amqHwDiRWu3pl3q_9hrEvSvmT0Z1v5PHN&lib=M8YJJ0GmH6inRDJCd3Gd1tSa8y3_y6sfW' );
  }
}
