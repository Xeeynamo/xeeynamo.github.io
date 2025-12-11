const projects = [
  {
    "id": "sotn-decomp",
    "name": "SOTN Decomp",
    "links": [
      {
        "name": "progress",
        "url": "https://sotn.xee.dev/"
      },
      {
        "name": "source",
        "url": "https://github.com/Xeeynamo/sotn-decomp"
      }
    ],
    "description": "A matching decompilation of Castlevania: Symphony of the Night recreating the original source code through static and dynamic analysis. Supports multiple game builds, re-releases and console ports in a unified codebase, orchestrated by complex tooling and backed by open-source community projects. With 800+ stars and 50+ contributors, it has become a collaborative effort using tools like decomp.me for function matching. The decompiled code compiles byte-for-byte to identical binaries, enabling modding such as <a href=\"https://twitter.com/xeeynamo/status/1641117477617778688\">cross-game stage porting</a> and <a href=\"https://www.resetera.com/threads/playable-maria-hacked-into-castlevania-symphony-of-the-night.1236699/\">custom playable characters</a>. This project also helped bootstrap other PS1-related decompilation efforts."
  },
  {
    "id": "kingdom-save-editor",
    "name": "Kingdom Save Editor",
    "links": [
      {
        "name": "page",
        "url": "https://kingdomsaveeditor.xee.dev/"
      },
      {
        "name": "source",
        "url": "https://github.com/Xeeynamo/KingdomSaveEditor"
      }
    ],
    "description": "A multi-platform save editor supporting Kingdom Hearts I through III, Final Fantasy VII Remake, and Persona 5 (Royal). Built with .NET Core and WPF, it runs on Windows, Linux, and Steam Deck via Proton. The project garnered 233 stars and 12 contributors, covering save formats across PS2, PS3, PS4, PSP, 3DS, and PC platforms for multiple regional releases. The project is archived as it is considered feature-complete."
  },
  {
    "id": "gobindiff",
    "name": "gobindiff",
    "links": [
      {
        "name": "AUR package",
        "url": "https://aur.archlinux.org/packages/gobindiff"
      },
      {
        "name": "source",
        "url": "https://github.com/Xeeynamo/gobindiff"
      }
    ],
    "description": "A cross-platform TUI for comparing binary files in hexadecimal format with highlighted differences. Designed as a modern replacement for vbindiff, it handles files larger than 4GB with minimal footprint (under 3MB executable, ~11MB RAM for 20GB+ files comparison). Compares up to three files concurrently. Written in Go, usable as a standalone CLI tool or as a downloadable module for any Go application. Available on the Arch User Repository."
  },
  {
    "id": "xe-binarymapper",
    "name": "Xe.BinaryMapper",
    "links": [
      {
        "name": "NuGet",
        "url": "https://www.nuget.org/packages/Xe.BinaryMapper/"
      },
      {
        "name": "docs",
        "url": "https://xee.dev/Xe.BinaryMapper/"
      },
      {
        "name": "source",
        "url": "https://github.com/Xeeynamo/Xe.BinaryMapper"
      }
    ],
    "description": "A standalone .NET library for mapping binary streams to C# objects. Supports primitives, enums, strings, arrays, nested classes, and bit-level boolean packing. Features configurable byte ordering, custom text encodings, and flexible offset/stride control via attributes. With 19K+ downloads on NuGet, it powers projects like OpenKH and Kingdom Save Editor. Compatible with .NET Framework 3.5+, .NET Standard 2.0, and Mono runtimes including Unity3D."
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
    "description": "A MIPS-I disassembler that produces assembly code recompilable with GNU AS. Built as a replacement for objdump, it generates cleaner output with automatic label detection from branches and jumps, and supports importing user-defined labels from IDA databases. Written entirely in F# using pure functional programming, demonstrating how complex business logic can be expressed concisely. Compatible with PlayStation 1 processors."
  },
  {
    "id": "ffxv",
    "name": "FFXV EXML/XMB2 Research",
    "links": [
      {
        "name": "docs",
        "url": "https://github.com/Xeeynamo/ffxv/blob/master/docs/index.md"
      },
      {
        "name": "source",
        "url": "https://github.com/Xeeynamo/ffxv"
      }
    ],
    "description": "Reverse engineering research on Final Fantasy XV's file formats, primarily XMB2: a binary-encoded XML format that drives the game's business logic through a node system. The documentation covers package structures, archive formats, and texture specifications. This research enabled modifications of cutscenes, events, and effects, and contributed to the development of <a href=\"https://github.com/Kizari/Flagrum/\">Flagrum</a>, a comprehensive modding tool created years later."
  },
  {
    "id": "rsdk",
    "name": "RSDK Reverse Engineering",
    "links": [
      {
        "name": "vscode extension",
        "url": "https://marketplace.visualstudio.com/items?itemName=xeeynamo.rsdk-script"
      },
      {
        "name": "gamebanana",
        "url": "https://gamebanana.com/tools/6437"
      },
      {
        "name": "source",
        "url": "https://github.com/Xeeynamo/RSDK"
      }
    ],
    "description": "Tools and documentation for Christian Whitehead's Retro-SDK, covering versions from Retro Sonic through Sonic Mania. Includes a sprite animation editor used for six years by modders to create custom characters, and a bytecode disassembler from 2012 that became foundational for later full decompilations of Sonic 1, 2, and CD by other authors. Complemented by a <a href=\"https://github.com/Xeeynamo/vscode-rsdk\">VS Code extension</a> providing syntax highlighting for decompiled scripts."
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
        "url": "https://github.com/OpenKH/OpenKh"
      }
    ],
    "description": "A comprehensive modding framework for Kingdom Hearts, centralizing documentation, tools, and code libraries. Features 50+ specialized editors for models, animations, maps, and battle systems. The Mods Manager enables loading modifications without overwriting game files, supporting PC ports from the Epic Games Store and Steam as well as PS2 versions. With 365 stars, 57 contributors, and 861 releases, it has become the standard toolset for Kingdom Hearts modding."
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
    "description": "A 2D action-RPG inspired by 16-bit SNES classics, built on the custom XeEngine with all assets created from scratch. Developed by a four-person team at United Lines Studio, with sole programming responsibility. Winner of Best Game at Modena Nerd 2017 and Best Technical Game at Svilupparty 2017, and featured in the Italian magazine The Games Machine. Development paused when team members departed."
  },
  {
    "id": "re-sonic",
    "name": "RE: Sonic the Hedgehog",
    "links": [
      {
        "name": "sonic retro post",
        "url": "https://forums.sonicretro.org/index.php?threads/re-sonic-discontinued.36846/"
      },
      {
        "name": "source",
        "url": "https://github.com/Xeeynamo/RESonic"
      }
    ],
    "description": "A from-scratch recreation of Sonic the Hedgehog 1 and 2 with 2x enhanced pixel art, sub-pixel camera movement, animated palettes, and improved parallax effects. Built in C++ with OpenGL using libXeEngine, featuring a built-in level editor and cross-platform support. Received positive community reception on Sonic Retro forums. Discontinued in 2017 following Sega's announcement of the official Christian Whitehead remakes."
  }
];

export default projects;
