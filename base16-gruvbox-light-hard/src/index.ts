import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { IThemeManager } from '@jupyterlab/apputils';

/**
 * A plugin for base16-gruvbox-light-hard
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'base16-gruvbox-light-hard:plugin',
  requires: [IThemeManager],
  activate: function(app: JupyterFrontEnd, manager: IThemeManager) {
    const style = '@arbennett/base16-gruvbox-light-hard/index.css';

    manager.register({
      name: 'base16-gruvbox-light-hard',
      isLight: true,
      load: () => manager.loadCSS(style),
      unload: () => Promise.resolve(undefined)
    });
  },
  autoStart: true
};

export default plugin;
