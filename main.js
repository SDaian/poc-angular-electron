const { app, BrowserWindow, ipcMain } = require("electron");
const url = require("url");
const path = require("path");

function onReady() {
  win = new BrowserWindow({
    width: 900,
    height: 6700,
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true,
      contextIsolation: false,
    },
  });
  win.loadURL(
    url.format({
      pathname: path.join(
        __dirname,
        "dist/poc-angular-electron-app/index.html"
      ),
      protocol: "file:",
      slashes: true,
    })
  );
  win.webContents.openDevTools();
}

app.on("ready", onReady);

ipcMain.on("window:minimize", () => {
  win.blur();
  win.minimize();
});
