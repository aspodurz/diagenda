import { Component, OnInit, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

import { AsyncPipe, CommonModule } from '@angular/common';
import { StoreConstants } from './utils/constants.component';
import { TranslateService, TranslatePipe, TranslateDirective } from "@ngx-translate/core";

import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { BaseService } from './service/base.service';
import { SecureStoreService } from './service/store.service';

@Component({
  selector: 'app-root',
  //imports: [RouterOutlet, AsyncPipe],
  imports: [TranslatePipe, TranslateDirective, CommonModule, RouterOutlet, RouterLink, RouterLinkActive, MatButtonModule, MatMenuModule, MatIconModule,MatFormFieldModule,MatInputModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
  providers: [SecureStoreService, BaseService] // <- add here!
})
export class App implements OnInit {
  protected readonly name = signal('nome');
  protected readonly title = signal('diagenda');
  value$!: Promise<string>;

  ngOnInit() {
    this.value$ = this.storeService.getItemDefault(StoreConstants.ENTRY_KEY,StoreConstants.DEFAULT_ENTRY);
  }


  constructor(private storeService: SecureStoreService,private baseService: BaseService) { } 

  getTitle(){
    return this.baseService.getTitle();
  }

  setTitle(item: string) {
    this.baseService.setTitle(item);
  }

  
}
