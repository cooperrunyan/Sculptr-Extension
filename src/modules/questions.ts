import * as Config from '../types/Configuration.js';
import { Platform, Script, Style } from '../types/QuickPick.js';

export const platforms = (() => {
  let returnValue = [];
  for (let i = 0; i < Config.platforms.length; i++) {
    returnValue.push(new Platform(Config.platforms[i]));
  }
  return returnValue;
})();

export const scripts = (() => {
  let returnValue = [];
  for (let i = 0; i < Config.scripts.length; i++) {
    returnValue.push(new Script(Config.scripts[i]));
  }
  return returnValue;
})();

export const styles = (() => {
  let returnValue = [];
  for (let i = 0; i < Config.styles.length; i++) {
    returnValue.push(new Style(Config.styles[i]));
  }
  return returnValue;
})();
