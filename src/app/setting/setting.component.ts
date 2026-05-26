import { AfterViewInit, Component, inject} from '@angular/core';
import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

import { TranslateDirective, TranslatePipe } from '@ngx-translate/core';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { Filesystem, Directory, Encoding } from '@capacitor/filesystem';
import { Platform } from '@ionic/angular';
import { BaseService } from '../service/base.service';
import { SecureStoreService } from '../service/store.service';
import { LanguageConstants, StoreConstants } from '../utils/constants.component';
import { ConfigurationDto } from '../dto/configuration';
import { ConfigDataDto } from '../dto/config.data';
import { PlanDto } from '../dto/plan';

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
  imports: [TranslatePipe, FormsModule, MatFormFieldModule, MatButtonModule, MatSelectModule, ReactiveFormsModule],
  templateUrl: './setting.component.html',
  styleUrl: './setting.component.scss',
  providers: [DatePipe]
})
export class SettingComponent implements AfterViewInit {
  platform = inject(Platform);
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
        const res = JSON.parse(data);
        if(res.elements.length>0){
          await this.storeService.clear();
          let config: ConfigurationDto=new ConfigurationDto();
          for(let i=0; i<res.elements.length; i++){
            let plan:PlanDto= res.elements.at(i);
            const pdata=JSON.stringify(plan, null, 2);
            const key=plan.name?? '';
            await this.storeService.setItem(key, pdata);
            config.add(key);
          }
          const cdata=JSON.stringify(config, null, 2);
          await this.storeService.setItem(StoreConstants.CONFIGURATIONS_KEY, cdata);
          console.log("importing file : ",data );
        }
    }
  }

  async createExportData(): Promise<string>{
    let config: ConfigurationDto=new ConfigurationDto();
    const df=JSON.stringify(config, null, 2);
    const content=await this.storeService.getItemDefault(StoreConstants.CONFIGURATIONS_KEY, df);
    config = JSON.parse(content);
    let configData: ConfigDataDto=new ConfigDataDto();
    for(let i=0; i<content.length; i++){
      const element = config.elements.at(i);
      if(element!==undefined){
        const content=await this.storeService.getItem(element);
        let plan:PlanDto=JSON.parse(content);
        configData.add(plan);
      }
    }
    console.log(configData);
    const data=JSON.stringify(configData, null, 2);
    return data;
  }

  async getFileName(): Promise<string>{
    const date =this.datepipe.transform(new Date(), 'yyyyMMddHHmmssSSS');
    const filename='diagenda-export_'+date+'.json';
    return filename;
  }

  async exportSelectedData() {
    
    const data=await this.createExportData();
    const filename=await this.getFileName();
    if(this.platform.is('desktop')){
      console.log('browser');
      await this.exportSelectedWebData(data, filename);
    } else{
      console.log('other os detected');
      await this.exportSelectedOtherData(data, filename);
    }
  }

  async exportSelectedOtherData(data: string, filename: string) {   
    await Filesystem.writeFile({
      path: filename,
      data: data,
      directory: Directory.External,
      encoding: Encoding.UTF8,
    });
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
      await this.storeService.clear();
  }

}
