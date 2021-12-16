var APP_DATA = {
  "scenes": [
    {
      "id": "0-along-engineering-drive-1",
      "name": "Along Engineering Drive 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.21126144377006462,
        "pitch": 0.06227642945698264,
        "fov": 0.5090288185928291
      },
      "linkHotspots": [
        {
          "yaw": 0.2397290371573888,
          "pitch": -0.23073617094902232,
          "rotation": 12.566370614359176,
          "target": "1-engineering-auditorium"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.5484653696532611,
          "pitch": -0.2179209356147247,
          "title": "Welcome",
          "text": "Go up the hill"
        }
      ]
    },
    {
      "id": "1-engineering-auditorium",
      "name": "Engineering Auditorium",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": -1.3095998458118743,
        "pitch": -0.6615820910037247,
        "fov": 0.5090288185928291
      },
      "linkHotspots": [
        {
          "yaw": 0.12503846789993034,
          "pitch": -0.002533492768739265,
          "rotation": 0,
          "target": "2-engineering-auditorium-atrium"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.2384826134800484,
          "pitch": -0.05183890281071157,
          "title": "Air con inside",
          "text": "Text"
        }
      ]
    },
    {
      "id": "2-engineering-auditorium-atrium",
      "name": "Engineering Auditorium Atrium",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 2.6508364676608682,
        "pitch": -1.4821153564553349,
        "fov": 1.3174782681794857
      },
      "linkHotspots": [
        {
          "yaw": -2.965336629424522,
          "pitch": -0.04380439202072672,
          "rotation": 0,
          "target": "0-along-engineering-drive-1"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.679570897991038,
          "pitch": 0.08249304666481905,
          "title": "sun",
          "text": "or rain"
        }
      ]
    }
  ],
  "name": "WTM test ENGIN",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
