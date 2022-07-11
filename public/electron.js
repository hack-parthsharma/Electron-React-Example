const path = require("path");
const { app, BrowserWindow } = require("electron");

function createWindow() {
  win = new BrowserWindow({ width: 800, height: 600 });
  win.loadURL(`file://${path.join(__dirname, "../build/index.html")}`);
  win.on('closed', () => win = null);
}

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});

app.on("ready", createWindow);
