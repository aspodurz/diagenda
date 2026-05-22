import { Injectable } from "@angular/core";
import { SecureStoragePlugin } from 'capacitor-secure-storage-plugin';

@Injectable()
export class SecureStoreService {

    /**
     * check if a given Key exists
     * @param key string 
     */
    async hasItem(key:string): Promise<boolean> {
      if(key.length > 0) {
        try {
          const {value} = await SecureStoragePlugin.get({ key });
          console.log("in getItem value ",value)
          return Promise.resolve(true);
        } catch (err) {
          console.log(`$$$$$ in getItem key: ${key} err: ${JSON.stringify(err)}`)
          return Promise.resolve(false)
        }      
      } else {
        return Promise.reject(new Error("getItem: Must give a key"));
      }
  }

  /**
     * Get the Value for a given Key
     * @param key string 
     */
    async getItem(key:string): Promise<any> {
      if(key.length > 0) {
        try {
          const {value} = await SecureStoragePlugin.get({ key });
          console.log("in getItem value ",value)
          return Promise.resolve(value);
        } catch (err) {
          console.log(`$$$$$ in getItem key: ${key} err: ${JSON.stringify(err)}`)
          return Promise.reject(err)
        }      
      } else {
        return Promise.reject(new Error("getItem: Must give a key"));
      }
  }

  /**
     * Get the Value for a given Key
     * @param key string 
     * @param default string  
     */
    async getItemDefault(key:string, value:string): Promise<any> {
      if(key.length > 0) {
        try {
          const {value} = await SecureStoragePlugin.get({ key });
          console.log("in getItem value ",value)
          return Promise.resolve(value);
        } catch (err) {
          await this.setItem(key, value );
          return this.getItem(key);
        }      
      } else {
        return Promise.reject(new Error("getItem: Must give a key"));
      }
  }

  /**
   * Set of Key
   * @param key string 
   * @param value string
   */
  async setItem(key:string,value:string): Promise<void> {
      if(key.length > 0) {
        try {
          await SecureStoragePlugin.set({ key, value });
          return Promise.resolve();
        } catch (err) {
          return Promise.reject(err);
        }      
      } else {
        return Promise.reject(new Error("setItem: Must give a key"));
      }
    } 
  }