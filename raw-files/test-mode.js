/*

|                  Starblast Asteroid War    (v2.1)

|  (This version of the shiptree has never been used in any event before)
|           (You may have never played with this ships before).
  
|  Classic ship's testing mod (originally was made for Nok's shiptree)

*/

/*

| Original Idea: LX
| Main Developer: Megalodon
| Main Ship Builder: Hazard

| Contributors: Nébuleuse (Active contributions)
|               Bylolopro (Ship Building Help)
|               SCM (Ship Building Help)

| Special Thanks: Notus (Events Orginasation) (Coding Help)
|                 Bhpsngum (Coding Help)


|    What is SAW about ?

|  Starblast Asteroid War is a team mode game in which players must battle for the win.
|  Our new mode adds a large new ship tree that introduces new gameplay elements as well as new game mechanics such as solar pulses and asteroid waves..
|  A Saucer can also be seen, often referred to as the 'King of Asteroids.' Defeating this boss grants a substantial advantage.
|  And guess what.. This is only the beginning!

|    This is SAW!

*/

var version = "v2.1 (Official Ships Release)";
var delays = { // in seconds
  spectate: 1,
  swich: 0,
  restore: 0,
  reset: 0,
  stats: 0
};

var ships = [
  
];
var admins = ['{"name":"AdminToolPrecision","level":1.9,"model":2,"size":1,"zoom":0.5,"specs":{"shield":{"capacity":[1e+300,1e+300],"reload":[1e+300,1e+300]},"generator":{"capacity":[1e+300,1e+300],"reload":[1e+300,1e+300]},"ship":{"mass":1e+300,"speed":[450,450],"rotation":[1000,1000],"acceleration":[350,350]}},"bodies":{"object0":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0],"y":[-40,-40,0,0],"z":[0,0,0,0]},"width":[0,5,5,0],"height":[0,5,5,0],"texture":[17,4],"angle":0,"laser":{"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"angle":0}}},"typespec":{"name":"AdminToolPrecision","level":1.9,"model":2,"code":192,"specs":{"shield":{"capacity":[1e+300,1e+300],"reload":[1e+300,1e+300]},"generator":{"capacity":[1e+300,1e+300],"reload":[1e+300,1e+300]},"ship":{"mass":1e+300,"speed":[450,450],"rotation":[1000,1000],"acceleration":[350,350]}},"shape":[0.802,0.803,0.375,0.227,0.16,0.126,0.107,0.095,0.085,0.078,0.075,0.072,0.071,0.071,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.071,0.072,0.075,0.078,0.085,0.095,0.107,0.126,0.16,0.227,0.375,0.803],"lasers":[{"x":0,"y":-0.8,"z":0,"angle":0,"damage":[1055,1055],"rate":-1,"speed":[400,400],"number":1,"spread":0,"error":0,"recoil":0}],"radius":0.803}}'];
var spec = ['{"name":"Spectator","level":1.9,"model":1,"size":0.025,"zoom":0.05,"specs":{"shield":{"capacity":[1e-30,1e-30],"reload":[1000,1000]},"generator":{"capacity":[1e-30,1e-30],"reload":[1,1]},"ship":{"mass":1,"speed":[250,250],"rotation":[1000,1000],"acceleration":[1000,1000]}},"bodies":{"face":{"section_segments":100,"angle":0,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],"y":[-2,-2,2,2],"z":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},"width":[0,1,1,0],"height":[0,1,1,0],"vertical":true,"texture":[6]}},"typespec":{"name":"Spectator","level":1.9,"model":1,"code":191,"specs":{"shield":{"capacity":[1e-30,1e-30],"reload":[1000,1000]},"generator":{"capacity":[1e-30,1e-30],"reload":[1,1]},"ship":{"mass":1,"speed":[250,250],"rotation":[1000,1000],"acceleration":[1000,1000]}},"shape":[0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001],"lasers":[],"radius":0.001}}'];

//  ----  //

var info = {
  shipTree: { codes: [], tree: {} },
  adminTree: { codes: [], tree: {} },
  spectator: { codes: [], tree: {} }
};

var buttons = {  
  "admin": {
    position: { x: 4-0.3, y: 48 },
    color: { text: "#ffffff", fill: "rgba(255,0,0,0.6)"},
    shortcut: "8"
  },
  "spectate": {
    position: { x: 4-0.3, y: 36 },
    color: { text: "#ffffff", fill: "rgba(206,255,0,0.6)"},
    shortcut: "3"
  },
  "switch_next": {
    position: { x: 4-0.3, y: 30 },
    color: { text: "#ffffff", fill: "rgba(0,183,255,0.6)"},
    shortcut: "1"
  },
  "switch_prev": {
    position: { x: 10+0.3, y: 30 },
    color: { text: "#ffffff", fill: "rgba(0,183,255,0.6)"},
    shortcut: "2"
  },
  "regen": {
    position: { x: 4-0.3, y: 42 },
    color: { text: "#ffffff", fill: "rgba(0,255,16,0.6)"},
    shortcut: "4"
  },
  "reset": {
    position: { x: 10+0.3, y: 42 },
    color: { text: "#ffffff", fill: "rgba(255,255,255,0.6)"},
    shortcut: "5"
  },
  "stats": {
    position: { x: 10+0.3, y: 36 },
    color: { text: "#ffffff", fill: "rgba(255,188,0,0.6)"},
    shortcut: "6"
  }
};

var map =
"     865     39     86     539           6439          7643 \n"+
"399    976     3     987           298      5     298     75\n"+
"  429           532     9    96       99     65     399     \n"+
"          997      4             6 9           754          \n"+
"    7542     9     7       2             329     6     539  \n"+
"98     95   9        7             9             9976     4 \n"+
" 398     6     4             5        8     54      98     5\n"+
"    9     86      3             5             643     97    \n"+
"    4399     7             8             9            7298  \n"+
"75     42            5             6       9     86539    9 \n"+
" 97     5      9             3        6      9      75  9  2\n"+
"   97    75            8        2             32     86     \n"+
"    998                   7             9         9   9976  \n"+
"43     9             2             4             54      9  \n"+
" 65           78                           9      7 4     9 \n"+
"   6     4             6                      98  7  5      \n"+
"    87      4                           6             86    \n"+
"99          6                                   439    9    \n"+
" 4             5                           8             98 \n"+
"  53     9                  3  3              7     4       \n"+
"  976                    33  33  33                   54    \n"+
"86    6                 333      333            99    7     \n"+
" 9                                                 9     7  \n"+
" 42      8            33            33             3        \n"+
"3                    33              33               3     \n"+
"      4    2                                    8           \n"+
" 86      3          33                33             9  64  \n"+
"    7       7                                            9 5\n"+
"9 9         5                                               \n"+
"3     9            33                  33       6           \n"+
"754      9         33                  33               3   \n"+
"   64                                             9        3\n"+
"      7                                              8      \n"+
"9     9             33                33               9    \n"+
"439      7                                         2    98  \n"+
"   32                33              33               9     \n"+
"    4      9          33            33          7     4     \n"+
"  9   5                                                 539 \n"+
"998           3         333      333               9  9     \n"+
"   9                     33  33  33          5             6\n"+
"    2      86               3  3                4     99    \n"+
"4 7  439                                  9             298 \n"+
"875           9                                   865   7 9 \n"+
"        64       9                           3        9    4\n"+
"   987     54                          8             9865   \n"+
"     998           3                      7     4       97  \n"+
"642 9        87       2             4             5429    8 \n"+
"        32       6                          99          7 39\n"+
"  9764     7             4             5             754    \n"+
"  9  87            9             2             399      6   \n"+
"39     8     64            7        9     7       39     75 \n"+
"  2  9 7987     5            97             865     2     98\n"+
"  6539     9                           3            6939 9  \n"+
"  9  64     9      7             8             9875     3   \n"+
"9     75     32         9995        8     53  9   97     4  \n"+
" 99 7  976 9         9        4     9       54     99     75\n"+
"  4298    8     54      98   9        298     5     9998    \n"+
"     3     9       43            64            76999   2    \n"+
"7     42     989       9   29    7       429     96     32  \n"+
" 86    653        9  86       9     864     39     76     43";

const vocabulary = [
  {text: "You", icon: "\u004e", key: "O"},
  {text: "Me", icon: "\u004f", key: "E"},
  {text: "Wait", icon: "\u0048", key: "T"},
  {text: "Yes", icon: "\u004c", key: "Y"},

  {text: "No", icon: "\u004d", key: "N"},
  {text: "Hello", icon: "\u0045", key: "H"},
  {text: "Sorry", icon: "\u00a1", key: "S"},
  {text: "Thanks", icon: "\u0041", key: "X"},

  {text: "Attack", icon: "\u0049", key: "A"},
  {text: "Follow Me", icon: "\u0050", key: "F"},
  {text: "Good Game", icon: "\u00a3", key: "G"},
  {text: "Spectate", icon: "\u0059", key: "L"},

  {text: "Gems", icon: "\u0044", key: "M"},
  {text: "Stats", icon: "\u0078", key: "K"},
  {text: "Hmm", icon: "\u004b", key: "Q"},
  {text: "No Prb", icon: "\u0047", key: "P"},
  
  {text: "Discord", icon: "\u007b", key: "D"},
  {text: "Idiot", icon: "\u0079", key: "I"},
  {text: "Lag", icon: "\u0069", key: "J"}
];

var SAWLogo = {
  id: "SAWLogo",
  obj: "https://starblast.data.neuronality.com/mods/objects/plane.obj",
  emissive: "https://raw.githubusercontent.com/TheGreatMegalodon/Starblast-Asteroid-War-public/main/images/SAWgamelogo.png",
};

this.options = {
  root_mode: "",
  map_name: info.Name,
  soundtrack: "civilisation.mp3",
  starting_ship: 801,
  map_size: 60,
  weapons_store: false,
  reset_tree: true,
  radar_zoom: 1.5,
  asteroids_strength: 1.3,
  crystal_value: 3,
  
  ships: ships.concat(admins.concat(spec)),
  custom_map: map,
  vocabulary: vocabulary
};

const utilities = {
  buildShiptree: function() {
    ships.forEach((str) => {
      const data = JSON.parse(str);
      const stats = info.shipTree;
      stats.tree[data.typespec.code.toString()] = data;
      stats.codes.push(Number(data.typespec.code));
    });
    admins.forEach((str) => {
      const data = JSON.parse(str);
      const stats = info.adminTree;
      stats.tree[data.typespec.code.toString()] = data;
      stats.codes.push(Number(data.typespec.code));
    });
    spec.forEach((str) => {
      const data = JSON.parse(str);
      const stats = info.spectator;
      stats.tree[data.typespec.code.toString()] = data;
      stats.codes.push(Number(data.typespec.code));
    });
  },
  buildButtons: function() {
    Object.entries(buttons).forEach(([key, info]) => {
      buttons[key] = {
        id: key,
        position: [info.position.x, info.position.y, 6, 5],
        clickable: true,
        visible: true,
        shortcut: info.shortcut.toUpperCase(),
        components: [
          { type:  "box", position:[0,0,100,100], fill: info.color.fill},
          { type: "text", position:[0,5,100,50], value: (key.includes("_"))?key.match(/([^_]+)_([^_]+)/)[2]:key, color: info.color.text},
          { type: "text", position:[0,60,100,30], value: `[ ${info.shortcut.toUpperCase()} ]`, color: info.color.text}
        ]
      };
    });
  },
  stateInitialize: function() {
    game.custom.gameLaunched = true;
    game.modding.terminal.echo("[[b;dodgerblue;]\n              SAW Testing Area ]\n[[i;#fff870;]\nVersion:  "+version+"\nAll credits goes to:  LX, Megalodon, Hazard, Nébuleuse\n]");
    game.modding.terminal.echo("[[bu;#70dcff;]Discord Server:]");
    game.modding.terminal.echo("[[;#70dcff;] | ]https://discord.gg/CGktC6BsS8\n");
  },
  alert: function(ship, text1, color) {
    clearTimeout(ship.custom.messager);
    ship.setUIComponent({
      id: "messager", position: [-5, -5, 110, 110], clickable: false, visible: true,
      components: [
        {type: "text", position: [-5, 20, 110, 4], color: color, value: text1}
      ]
    });
    ship.custom.warning = setTimeout(() => {
      ship.setUIComponent({id: "messager",visible: false});
    }, 2000);
  },
  functions: {
    admin: function(ship, select=null) {
      if (select == "add") {
        ship.custom.isAdmin = true;
        ship.setUIComponent(buttons[`admin`]);
        return;
      } else if (select == "remove") {
        ship.custom.isAdmin = false;
        ship.setUIComponent({ id: "admin", visible: false });
        if (info.adminTree.codes.includes(ship.type)) this.reset(ship);
        return;
      }
      if (info.spectator.codes.includes(ship.type) || info.shipTree.codes.includes(ship.type)) {
        nextShip = info.adminTree.codes[0];
      } else {
        let index = info.adminTree.codes.indexOf(ship.type);
        if (index >= 0) nextShip = info.adminTree.codes[(index + 1) % info.adminTree.codes.length];
        ship.custom.lastAdminShip = nextShip;
      }
      ship.set({
        type: nextShip, shield: 999, collider: true,
        stats: ship.custom.keep_maxed ? 11111111 * Math.trunc(nextShip / 100):0,
        crystals: 20 * Math.pow(Math.trunc(nextShip / 100), 2)
      });
    },
    spectate: function(ship) {
      if (!ship.custom.spectate || game.step >= ship.custom.spectate) {
        ship.custom.spectate = game.step + delays.spectate * 60;
        if (ship.custom.spectating) {
          ship.custom.spectating = false;
          nextShip = ship.custom.lastShip;
        } else {
          ship.custom.spectating = true;
          nextShip = info.spectator.codes[0];
          ship.custom.lastShip = ship.type;
        }
        ship.set({
          type: nextShip, shield: 999, 
          collider: !ship.custom.spectating,
          stats: ship.custom.keep_maxed ? 11111111 * Math.trunc(nextShip / 100):0,
          crystals: 20 * Math.pow(Math.trunc(nextShip / 100), 2),
          vx: 0, vy: 0, generator: 0
        });
      } else utilities.alert(ship, "You are being rate limited", "rgba(255,55,55,0.8)");
    },
    switch: function(ship, select) {
      if (!ship.custom.swich || game.step >= ship.custom.swich) {
        ship.custom.swich = game.step + delays.swich * 60;
        if (info.spectator.codes.includes(ship.type) || info.adminTree.codes.includes(ship.type)) {
          this.spectate(ship);
        } else {
          let index = info.shipTree.codes.indexOf(ship.type);
          switch(select) {
            case "next": if (index >= 0) nextShip = info.shipTree.codes[(index + 1) % info.shipTree.codes.length]; break;
            case "prev": if (index !== -1) nextShip = info.shipTree.codes[(index - 1 + info.shipTree.codes.length) % info.shipTree.codes.length]; break;
          }
          ship.custom.lastShip = nextShip;
          ship.set({
            type: nextShip, shield: 9999, collider: true,
            stats: ship.custom.keep_maxed ? 11111111 * Math.trunc(nextShip / 100):0,
            crystals: 20 * Math.pow(Math.trunc(nextShip / 100), 2)
          });
        }
      } else utilities.alert(ship, "You are being rate limited", "rgba(255,55,55,0.8)");
    },
    regen: function(ship) {
      if (!ship.custom.restore || game.step >= ship.custom.restore) {
        ship.custom.restore = game.step + delays.restore * 60;
        ship.set({
          shield: 999,
          stats: ship.custom.keep_maxed ? 11111111 * Math.trunc(ship.type / 100):0,
          crystals: 20 * Math.pow(Math.trunc(ship.type / 100), 2)
        });
      } else utilities.alert(ship, "You are being rate limited", "rgba(255,55,55,0.8)");
    },
    reset: function(ship) {
      if (!ship.custom.reset || game.step >= ship.custom.reset) {
        ship.custom.reset = game.step + delays.reset * 60;
        if (ship.custom.spectating) {
          this.spectate(ship);
        }
        ship.set({
          type: info.shipTree.codes[0], shield: 999,
          stats: ship.custom.keep_maxed ? 11111111 * Math.trunc(info.shipTree.codes[0] / 100):0,
          crystals: 20 * Math.pow(Math.trunc(info.shipTree.codes[0] / 100), 2),
          shield: 999
        });
      } else utilities.alert(ship, "You are being rate limited", "rgba(255,55,55,0.8)");
    },
    stats: function(ship) {
      if (!ship.custom.stats || game.step >= ship.custom.stats) {
        ship.custom.stats = game.step + delays.stats * 60;
        var level = Math.trunc(ship.type / 100); 
        var max = 11111111 * level;
        if (level < 7) {
          if (ship.stats == max) {
            ship.custom.keep_maxed = false;
            ship.set({stats: 0});
          } else {
            ship.custom.keep_maxed = true;
            ship.set({stats: 11111111 * level});
          }
        }
      } else utilities.alert(ship, "You are being rate limited", "rgba(255,55,55,0.8)");
    }
  }
};

this.event = function(event, game) {
  switch(event.name) {
    case "ui_component_clicked":
      if (!event.id.includes("_")) {
        utilities.functions[event.id](event.ship);
      } else {
        var source = event.id.match(/([^_]+)_([^_]+)/);
        utilities.functions[source[1]](event.ship, source[2]);
      }
      break;
    case "ship_spawned":
      if (!event.ship.custom.init) {
        Object.values(buttons).filter(key => key.id != "admin").forEach(key => event.ship.setUIComponent(key));
        if (!event.ship.custom.isAdmin && event.ship.id === 1) {
          event.ship.custom.isAdmin = true;
          event.ship.setUIComponent(buttons[`admin`]);
        }
      }
      break;
  }
};

utilities.buildShiptree();
utilities.buildButtons();
utilities.stateInitialize();
game.setObject({
  id: "SAWLogo",
  type: SAWLogo,
  position: {x: 0, y: 0, z: -14},
  scale: {x: 50, y: 30, z: 0},
  rotation: {x: Math.PI, y: 0, z: 0}
});
