import { Injectable } from '@angular/core';
import { Plugin, Cordova, IonicNativePlugin } from '@ionic-native/core';

/**
 * @name BiometricWrapper
 * @description
 * This plugin capture biometric(Iris and Fingerprint) and validate the user.
 * May be used in Banking domain
 *
 * @usage
 * ```typescript
 * import { BiometricWrapper } from '@ionic-native/biometric-wrapper/ngx';
 *
 *
 * constructor(private biometricWrapper: BiometricWrapper) { }
 *
 * ...
 *
 *
 * this.biometricWrapper.activateIris({'PID_XML': '<pid-xml/>'})
 *   .then((res: any) => )
 *   .catch((error: any) => );
 *
 * ```
 */

@Plugin({
  pluginName: 'BiometricWrapper',
  plugin: 'cordova-plugin-biometric',
  pluginRef: 'cordova.plugins.BiometricWrapper',
  repo: '',
  install: '',
  installVariables: [],
  platforms: ['Android'],
})
@Injectable()
export class BiometricWrapper extends IonicNativePlugin {
  /**
   * This function activate iris activity
   * @return {Promise<any>} Returns a promise that resolves when iris data captured
   */
  @Cordova()
  activateIris(args: any): Promise<any> {
    return;
  }

  /**
   * This function activate fingerprint activity
   * @return {Promise<any>} Returns a promise that resolves when FP data captured
   */
  @Cordova()
  activateFingerprint(args: any): Promise<any> {
    return;
  }
}
