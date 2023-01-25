import { Component } from '@angular/core';
import { IpcRenderer } from 'electron';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'poc-angular-electron-app';

  private ipcRenderer: IpcRenderer;
  constructor() {
    try {
      this.ipcRenderer = window.require('electron').ipcRenderer;
    } catch (e) {
      throw e;
    }
  }

  minimizeWindow() {
    if (this.ipcRenderer) {
      console.log('Minimize Window');
      this.ipcRenderer.send('window:minimize');
    }
  }
}
