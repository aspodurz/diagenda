import { AfterViewInit, Component, inject} from '@angular/core';
import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
//import { Configuration, ConfigurationElement } from '../dto/configuration';
import { TranslateDirective, TranslatePipe } from '@ngx-translate/core';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
//import { Filesystem, Directory, Encoding } from '@capacitor/filesystem';
//import { Platform } from '@ionic/angular';
//import { AppComponent } from '../app.component';
import { BaseService } from '../service/base.service';
import { SecureStoreService } from '../service/store.service';
import { LanguageConstants, StoreConstants } from '../utils/constants.component';

interface LanguageData {
  id: string;
  label: string;
}

const LANGUAGES: LanguageData[] = [
  {"id":LanguageConstants.EN, "label":"app.languages.en"},
  {"id":LanguageConstants.IT, "label":"app.languages.it"}
];

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TranslatePipe, TranslateDirective, FormsModule, MatFormFieldModule, MatButtonModule, MatSelectModule, ReactiveFormsModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './setting.component.html',
  styleUrl: './setting.component.scss',
  providers: [DatePipe]
})
export class SettingComponent implements AfterViewInit {
  //platform = inject(Platform);
  selectedFile: any = null;
  language: string;
  languageFormControl;

  constructor(private storeService: SecureStoreService, private baseService: BaseService, private datepipe: DatePipe) {
    this.language=baseService.language;
    console.log('tab: ',this.language);
    this.languageFormControl= new FormControl(this.language, [Validators.required]);
    
  }

  async ngAfterViewInit() {

  }

  setTitle(item: string) {
    this.baseService.setTitle(item);
  }

  getLanguages(){
    return LANGUAGES;
  }

  changeLanguage() {
    var value=this.languageFormControl.value!;
    this.language=value;
    this.baseService.setCurrentLanguage(value);
    
  }

  async importSelectedData(event: Event): Promise<void> {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
        this.selectedFile = input.files[0];
        const data=await this.selectedFile.text();
        const res = JSON.parse(data).elements;
        if(res.length>0){
          //await this.storeservice.clear();
          for(let i=0; i<res.length; i++){
            //await this.storeservice.setItem(res[i].key, res[i].value);
          }
          console.log("importing file : ",data );
        }
    }
  }

  async createExportData(): Promise<string>{
    //const content=await this.storeservice.getAllKeysValues();
    //let config: Configuration=new Configuration();
    //for(let i=0; i<content.length; i++){
    //  config.add(new ConfigurationElement(content[i].key, content[i].value));
    //}
    //console.log(config);
    //const data=JSON.stringify(config, null, 2);
    const data='';
    return data;
  }

  async getFileName(): Promise<string>{
    const date =this.datepipe.transform(new Date(), 'yyyyMMddHHmmssSSS');
    const filename='btools-export_'+date+'.json';
    return filename;
  }

  async exportSelectedData() {
    
    const data=await this.createExportData();
    const filename=await this.getFileName();
    //if(this.platform.is('desktop')){
    //  console.log('browser');
    //  await this.exportSelectedWebData(data, filename);
    //} else{
    //  console.log('other os detected');
    //  await this.exportSelectedOtherData(data, filename);
    //}
  }

  async exportSelectedOtherData(data: string, filename: string) {   
    //await Filesystem.writeFile({
    //  path: filename,
    //  data: data,
    //  directory: Directory.External,
    //  encoding: Encoding.UTF8,
    //});
  };

  async exportSelectedWebData(data: string, filename: string) {
    const blob=new Blob([data], { type: 'application/json'});
    const url=window.URL.createObjectURL(blob);
    const link=document.createElement('a');
    link.href=url;
    link.download=filename;
    link.click();
    window.URL.revokeObjectURL(url);
  }

  async resetData() {
      //await this.storeservice.clear();
  }

}
