const projects = [
  {
    "id": "sotn-decomp",
    "name": "SOTN decomp",
    "links": [
      {
        "name": "page",
        "url": "https://sotn.xee.dev/"
      },
      {
        "name": "source",
        "url": "https://github.com/xeeynamo/sotn-decomp"
      },
    ],
    "description": "A work-in-progress decompilation in C of the videogame Castlevania: Symphony of the Night for PlayStation 1. The source code rebuilds into the same binaries of the original videogame by assuming what the original developers originally wrote. The code is tweaked until the compiler produces the same binary byte-for-byte. Once complete, the project aims to open the pandora's box for technical knowledge, moddings, spin-offs and new games. A prominent example is that it is now possible to port <a href=\"https://twitter.com/xeeynamo/status/1641117477617778688\">stages from different games</a> into Castlevania."
  },
  {
    "id": "openkh",
    "name": "OpenKH",
    "links": [
      {
        "name": "page",
        "url": "https://openkh.dev/"
      },
      {
        "name": "source",
        "url": "https://github.com/Xeeynamo/OpenKh"
      }
    ],
    "description": "Centralises all the technical knowledge of the videogame series Kingdom Hearts providing documentation, tools, code libraries and the foundation to mod and expand the original commercial games. Developed in C# using the latest iteration of .NET. Includes the OpenKH Engine, which simulates the original game behavior using untransformed game assets. Features the OpenKH Mods Manager for loading <a href=\"https://twitter.com/xeeynamo/status/1379858976494456832\">different mods</a> without overwriting the original game files."
  },
  {
    "id": "swords-of-calengal",
    "name": "Swords of Calengal",
    "links": [
      {
        "name": "page",
        "url": "https://unitedlinesstudio.com"
      },
      {
        "name": "trailer",
        "url": "https://www.youtube.com/watch?v=q8Ka9LjGZ64"
      }
    ],
    "description": "A 2D action-rpg inspired by old-school games of the SNES era. Developed using modern technologies. Created by a team of four people, with me being the sole developer. Winner of multiple awards, including Best Game at Modena Nerd 2017 and Best Technical Game at Svilupparty 2017, featured in the Italian videogame magazine The Games Machine. Development halted when two team members left."
  },
  {
    "id": "xeengine",
    "name": "XeEngine",
    "links": [
      {
        "name": "source",
        "url": "https://github.com/XeEngine"
      }
    ],
    "description": "A cross-platform game engine focused on running on low-budget hardware using hardware rendering. Primarily designed for 2D games and basic 3D graphics. It implements graphics effects inspired by games like Sonic the Hedgehog 2 and Castlevania: Symphony of the Night, including features like palette, multi-layer tilemap rendering, and parallax using line scrolling."
  },
  {
    "id": "sonic-psvita",
    "name": "Sonic the Hedgehog PS Vita ports",
    "links": [
      {
        "name": "sonic cd",
        "url": "https://vitadb.rinnegatamante.it/#/info/604"
      },
      {
        "name": "sonic 1&2",
        "url": "https://store.brewology.com/vita/ahomebrew.php?brewid=895"
      },
    ],
    "description": "Ports of Sonic the Hedgehog CD, 1 and 2 on PlayStation Vita using the open-source decompilation of the three games."
  },
  {
    "id": "ffxv",
    "name": "FFXV EXML/XMB2 research",
    "links": [
      {
        "name": "page",
        "url": "https://github.com/Xeeynamo/ffxv/blob/master/docs/index.md"
      },
      {
        "name": "source",
        "url": "https://github.com/Xeeynamo/ffxv"
      }
    ],
    "description": "Research on the XMB2 format used in Final Fantasy XV, a binary-encoded XML file that determines the game's business logic via a node system. Reverse engineering the format allowed for modifications of cutscenes, events, triggers, and effects. The research contributed to the development of the modding tool called <a href=\"https://github.com/Kizari/Flagrum/\">Flagrum</a>, created years later."
  },
  {
    "id": "vscode-rsdk",
    "name": "Visual Studio Code RSDK extension",
    "links": [
      {
        "name": "extension",
        "url": "https://marketplace.visualstudio.com/items?itemName=xeeynamo.rsdk-script"
      },
      {
        "name": "source",
        "url": "https://github.com/Xeeynamo/vscode-rsdk"
      }
    ],
    "description": "Provides syntax highlighting for reversed engineered scripts from commercial RSDK ports of Sonic the Hedgehog. Used by game modders to create or modify the game's code."
  },
  {
    "id": "sonic-hybrid-rsdk",
    "name": "Sonic Hybrid RSDK",
    "links": [
      {
        "name": "source",
        "url": "https://github.com/Xeeynamo/sonic-hybrid-rsdk"
      }
    ],
    "description": "Combines Sonic the Hedgehog 1, Sonic the Hedgehog CD, and Sonic the Hedgehog 2 into a single game. Allows for the selection and porting of components from Sonic 1 or Sonic 2 across the three games. Released as an open-source tool to programmatically generate the mod. Inspired by the mod <a href=\"https://info.sonicretro.org/Sonic_Delta\">Sonic Delta</a>."
  },
  {
    "id": "xe-binarymapper",
    "name": "Xe.BinaryMapper",
    "links": [
      {
        "name": "page",
        "url": "https://www.nuget.org/packages/Xe.BinaryMapper/"
      },
      {
        "name": "source",
        "url": "https://github.com/Xeeynamo/Xe.BinaryMapper"
      }
    ],
    "description": ".NET library for serializing and deserializing binary files using C# class declarations. Fast, easy to use, and does not require additional dependencies. Has been downloaded more than 10k times from NuGet."
  },
  {
    "id": "rsdk-reverse-and-tools",
    "name": "RSDK reverse and tools",
    "links": [
      {
        "name": "gamebanana",
        "url": "https://gamebanana.com/tools/6437"
      },
      {
        "name": "source",
        "url": "https://github.com/Xeeynamo/RSDK"
      }
    ],
    "description": "Sprite animation editor for the videogames Sonic Mania, Sonic 1, Sonic 2, Sonic CD, Sonic Nexus, Sonic XG, and Retro Sonic. Used for 6 years by multiple videogame modders to create custom playable characters in Sonic Mania. The repository also includes an RSDK script decompiler, which was a breakthrough discovery used four years later to fully decompile Sonic 1, Sonic 2, and Sonic CD by a different author."
  }, {
    "id": "psndb",
    "name": "PSN DB",
    "links": [
      {
        "name": "twitter bot",
        "url": "https://twitter.com/psnrelease2"
      },
      {
        "name": "source",
        "url": "https://github.com/Xeeynamo/psndb"
      }
    ],
    "description": "Spider that fetches and publishes upcoming new game releases and updates from the PlayStation Store. Able to detect game titles before their official announcement. Received press coverage and stored scraped data in an openly readable database for preservation. Shut down due to  Elon Musk puting the Twitter Developer API behind a paywall."
  },
  {
    "id": "piupsp-tools",
    "name": "Pump It UP Exceed/Zero tools",
    "links": [
      {
        "name": "source",
        "url": "https://github.com/Xeeynamo/piupsp-tools"
      }
    ],
    "description": "Allows for the downgrade of custom and official charts to the Exceed/Zero engine for a portable experience on-the-go."
  },
  {
    "id": "kingdom-save-editor",
    "name": "Kingdom Save Editor",
    "links": [
      {
        "name": "source",
        "url": "https://github.com/Xeeynamo/KingdomSaveEditor"
      }
    ],
    "description": "Multi-purpose videogame save editor written in .NET Core with WPF. It runs on Linux and Steam Deck with Proton. Supports save editing of Kingdom Hearts, Final Fantasy VII Remake, Persona 5 (Royal), and Persona 3 (FES/Portable). Abandoned due to the overwhelming effort of adding new games and the choice of technology."
  },
  {
    "id": "mipsdump",
    "name": "mipsdump",
    "links": [
      {
        "name": "source",
        "url": "https://github.com/Xeeynamo/mipsdump"
      }
    ],
    "description": "A MIPS-1 disassembler that produces recompilable assembly code. Built as a replacement for GNU objdump, enabling recompiling the output with GNU AS. Written entirely in F# using pure functional programming. Notable achievement in fitting a significant amount of business logic into a clear and concise codebase."
  },
  {
    "id": "ffmpeg-optimised",
    "name": "ffmpeg optimised",
    "links": [
      {
        "name": "source",
        "url": "https://github.com/Xeeynamo/ffmpeg-gcc-latest/blob/main/.github/workflows/build.yml"
      }
    ],
    "description": "Compiler rules to build a more performant version of ffmpeg for encoding audio files into specific formats. Used during my time at 7digital and resulted in a 15% improvement encoding throughput in production."
  },
  {
    "id": "khlua",
    "name": "khlua",
    "links": [
      {
        "name": "source",
        "url": "https://github.com/Xeeynamo/khlua"
      }
    ],
    "description": "Decompiled and recompilable code from Kingdom Hearts: Birth By Sleep in LUA."
  },
  {
    "id": "einhander",
    "name": "Einhander unpacker",
    "links": [
      {
        "name": "source",
        "url": "https://github.com/Xeeynamo/einhander"
      }
    ],
    "description": "Game data unpacker for the commercial videogame Einhander for PlayStation 1."
  },
  {
    "id": "s3kse",
    "name": "Sonic 3 & Knuckles Save Editor",
    "links": [
      {
        "name": "source",
        "url": "https://github.com/Xeeynamo/S3KSE"
      }
    ],
    "description": "A save game data editor for Sonic & Knuckles Collection, enabling editing of save files."
  },
  {
    "id": "megaedx",
    "name": "MegaEdX",
    "links": [
      {
        "name": "romhacking.net",
        "url": "https://www.romhacking.net/utilities/1039/"
      },
      {
        "name": "source",
        "url": "https://github.com/Xeeynamo/MegaEdX"
      }
    ],
    "description": "A level editor for the commercial videogame MegaMan X for Super Nintendo. Iterated and enhanced to support MegaMan X2 and MegaMan X3 by different authors."
  },
  {
    "id": "re-sonic",
    "name": "RE: Sonic the Hedgehog",
    "links": [
      {
        "name": "blog post",
        "url": "https://forums.sonicretro.org/index.php?threads/re-sonic-discontinued.36846/"
      },
      {
        "name": "source",
        "url": "https://github.com/Xeeynamo/RESonic"
      }
    ],
    "description": "A recreation of Sonic the Hedgehog 1 using modern 2D techniques and pixel art redrawn at 2x the original size. Aimed to be as accurate as possible to the original experience, both visually and in gameplay. Abandoned when Sega announced their Sonic the Hedgehog 1 remake by Christian Whitehead."
  },
  {
    "id": "dark-cloud-unpacker-repacker",
    "name": "Dark Cloud unpacker/repacker",
    "links": [
      {
        "name": "source",
        "url": "https://github.com/Xeeynamo/DarkCloud"
      }
    ],
    "description": "Tools for unpacking and repacking the game assets of Dark Cloud for PlayStation 2."
  },
  {
    "id": "vitareg",
    "name": "VitaReg",
    "links": [
      {
        "name": "source",
        "url": "https://github.com/Xeeynamo/VitaReg"
      }
    ],
    "description": "Tool used to modify the registry of the PlayStation Vita video game console."
  },
  {
    "id": "kingdomheartspatch",
    "name": "KingdomHeartsPatch",
    "links": [
      {
        "name": "source",
        "url": "https://github.com/Xeeynamo/KingdomHeartsPatch"
      }
    ],
    "description": "A set of older tools used to create translation patches in Italian and English for the game Kingdom Hearts II: Final Mix."
  }
];

export default projects;
