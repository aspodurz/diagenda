import { AfterViewInit, Injectable, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { SecureStoreService } from './store.service';
import { LanguageConstants, StoreConstants } from '../utils/constants.component';

@Injectable()
export class BaseService implements OnInit {

  // Observable string sources
  private currentLanguageSource = new Subject<string>();

  // Observable string streams
  currentLanguage$ = this.currentLanguageSource.asObservable();

  private title = 'app.home.title';

  language: string='en';

  constructor(
      private secureStore: SecureStoreService
    ) {
        this.secureStore=secureStore;
    }

  ngOnInit() {
    this.initLanguage().then( (language) => {
      this.setCurrentLanguage(language);
    });
  }


  //async initiate():Promise<string> {
  //   return await this.initLanguage();
  //  }

  setCurrentLanguage(language: string) {
    this.currentLanguageSource.next(language);
    this.language=language;
  }

  getTitle(){
    return this.title;
  }

  setTitle(title:string){
    this.title=title;
  }

  async initLanguage(): Promise<string>{
      console.log('init language');
      return await this.secureStore.getItemDefault(StoreConstants.LANGUAGE_KEY, LanguageConstants.EN);
  }

}