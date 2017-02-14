import {Component, OnInit, Input} from '@angular/core';
import {forEach} from "@angular/router/src/utils/collection";

@Component({
  selector: 'app-check-klasse',
  templateUrl: './check-klasse.component.html',
  styleUrls: ['./check-klasse.component.css']
})
export class CheckKlasseComponent implements OnInit {

  constructor() {
  }

  /*
   * 0 : premier chiffre {0..10}
   * 1 : lettre {a..f}
   * 2 : active/inactive
   * 3 : big/''
   */
  image_root  = "assets/img/images-master/images-master/studyGroup/studyGroup_";

  @Input() images = new Array();

  lettres : any = [ {0 : ''}, { 1: 'a'} , {2: 'b'}, {3:'c'}, {4:'d'}, {5:'e'}, {6:'f' }, {7: 'j'}];

  ngOnInit() {

    // for( let i = 0; i< 11 ; i++ ){
    //   let result = new Array();
    //
    //   for( let j = 0 ; j< this.lettres.length; j++){
    //     result.push( this.image_root + i + this.lettres[j][j] + "_active" + ".png");
    //   }
    //   this.images.push(result)
    // }

    for( let j = 0 ; j< this.lettres.length; j++){
      let result = new Array();

      for( let i = 0; i< 11 ; i++ ){
        result.push( this.image_root + i + this.lettres[j][j] + "_active" + ".png");
      }
      this.images.push(result)

    }


  }

}
