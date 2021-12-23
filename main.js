const electron = require("electron")
const app = electron.app
const BrowerWindow = electron.BrowserWindow
const path = require("path")
const url = require("url")
const ipc = electron.ipcMain
const dialog = electron.dialog
const Menu = electron.Menu;
process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true';
function createWindows() {
  let win = new BrowerWindow(
    {
      webPreferences: {
        nodeIntegration: true,
        contextIsolation: false,
        enableRemoteModule: true
      }
    }
  );
  win.loadURL(
    url.format({
      pathname: path.join(__dirname, 'index.html'),
      protocol: 'file',
      slashes: true
    }));
  // win.webContents.openDevTools();
  win.on('closed', () => {
    win = null;
  })
}

ipc.on('message', function (event) {
  console.log('message');
  dialog.showMessageBoxSync({
    message: "Wish you a merry Christmas!",
    title: "Message",
    icon: "./assets/reindeer.png"
  });
  event.sender.send('reply', 'OK')
})

app.on('ready',
  function () {
    createWindows();
    const template = [
      {
        label: 'Edit',
        submenu: [
          { role: 'undo' },
          { role: 'redo' },
          { type: 'separator' },
          { role: 'cut' },
          { role: 'copy' },
          { role: 'paste' },
          { role: 'pasteandmatchstyle' },
          { role: 'delete' },
          { role: 'selectall' }
        ]
      },
      {
        label: 'View',
        submenu: [
          { role: 'reload' },
          {
            label: 'View on the web',
            click: function () {
              electron.shell.openExternal("https://github.com/miktae")
            }
          },
        ]
      },
      {
        label: 'Contact',
        // Sub menu 
        submenu: [
          {
            label: 'Facebook',
            click: function () {
              electron.shell.openExternal("https://www.facebook.com/miktae07")
            }
          },
          {
            type: 'separator'// horizontal line
          },
          {
            label: 'Instagram',
            click: function () {
              electron.shell.openExternal("https://www.instagram.com/mik_tae_7")
            }
          },
          {
            type: 'separator'// horizontal line
          },
          {
            label: 'Github',
            click: function () {
              electron.shell.openExternal('https://github.com/miktae');// Open link
            }
          },
        ]
      }
    ];

    const menu = Menu.buildFromTemplate(template);
    Menu.setApplicationMenu(menu);
  }
);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
})
