/**
 * This is a template for new plugin wrappers
 *
 * TODO:
 * - Add/Change information below
 * - Document usage (importing, executing main functionality)
 * - Remove any imports that you are not using
 * - Add this file to /src/index.ts (follow style of other plugins)
 * - Remove all the comments included in this template, EXCEPT the @Plugin wrapper docs and any other docs you added
 * - Remove this note
 *
 */
import { Injectable } from '@angular/core';
import { Plugin, Cordova, CordovaProperty, CordovaInstance, InstanceProperty, IonicNativePlugin } from '@ionic-native/core';
import { Observable } from 'rxjs/Observable';

/**
 * @name Firebase Analytics
 * @description
 * This plugin does something
 *
 * @usage
 * ```typescript
 * import { FirebaseAnalytics } from '@ionic-native/firebase-analytics';
 *
 *
 * constructor(private firebaseAnalytics: FirebaseAnalytics) { }
 *
 * ...
 *
 *
 * this.firebaseAnalytics.functionName('Hello', 123)
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
@Plugin({
  pluginName: 'FirebaseAnalytics',
  plugin: 'cordova-plugin-firebase-analytics',
  pluginRef: 'cordova.plugins.firebase.analytics',
  repo: 'https://github.com/chemerisuk/cordova-plugin-firebase-analytics',
  platforms: ['Android', 'iOS']
})
@Injectable()
export class FirebaseAnalytics extends IonicNativePlugin {

  /**
   * This function does something
   * @param arg1 {string} Some param to configure something
   * @param arg2 {number} Another param to configure something
   * @return {Promise<any>} Returns a promise that resolves when something happens
   */
  @Cordova()
  functionName(arg1: string, arg2: number): Promise<any> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

}
