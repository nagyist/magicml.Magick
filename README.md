<p align="center"><img src="apps/docs/readme-files/magick-github-banner.png" /></p>

<p align="center">
  <a href="https://bit.ly/magickdiscordgh">
    <img src="https://dcbadge.vercel.app/api/server/tacYgMnuzP?style=social" alt="Join Discord" />
  </a>
  <a href="https://twitter.com/magickml">
    <img src="https://img.shields.io/twitter/follow/magickml?style=social" alt="Follow on Twitter" />
  </a>
  <a href="https://www.linkedin.com/company/magickml/about/">
    <img src="https://img.shields.io/badge/LinkedIn-Follow-blue?style=social&logo=linkedin" alt="Follow on LinkedIn" />
  </a>
  <a href="https://www.youtube.com/@magickml">
    <img src="https://img.shields.io/badge/YouTube-Subscribe-red?style=social&logo=youtube" alt="Subscribe on YouTube" />
  </a>
</p>

<h3 align = "center">Magick is a groundbreaking visual AIDE (Artificial Intelligence Development Environment) for no-code data pipelines and multimodal agents. Magick can connect to other services and comes with nodes and templates well-suited for intelligent agents, chatbots, complex reasoning systems and realistic characters.</h3>

## 🗝 Key Features

- Realtime agents which can perform actions on their own, interact with users and other agents in different modalities with a unified memory and self
- Social connectors to Discord, Twitter and Twilio -- Zoom, Google Meet, Reddit, Slack connectors will be available soon as plugins!
- Search Google, Wikipedia and the Semantic Web
- Many included powertools, including voice and image generation and vector search
- Powerful graph-based IDE for complex data pipelines
- Graphs can be embedded in subgraphs and shared for rapid community development.

## 🔮 Magick: Automate, Build, and Bring Your Ideas to Life with AI.

With Magick, you can unleash the power of AI without needing to know how to code everything in a command line interface. Using our visual node based environment, you can connect to popular services and explore a world of pre-built nodes and connectors to bring your vision to life.

<p align="center"><img src="apps/docs/readme-files/ui.png" /></p>

<p align="center">
  <a href="https://www.youtube.com/watch?v=Xy7tMmKluvE" target="_blank">
    <img src="https://img.youtube.com/vi/Xy7tMmKluvE/0.jpg" alt="Magick - AI for Mere Mortals" style="width:65%;max-width:640px;" />
  </a>
  <br />
  ▶️ <strong>Click the image above to watch the <a href="https://www.youtube.com/watch?v=Xy7tMmKluvE" target="_blank">video</a></strong>
</p>

## Core Concepts

### Spells

A spell is a pipeline that describes data moving from one place to another, running through different processes we call "nodes", via wires we call "connections". In Magick, the collection of data, nodes, variables, and presets for each graph is known as a "spell".
Spell is not a machine learning term.

We just like it. Spells can be imported and exported at any time. Spells in their raw form are JSON, a standard format that is easy to share.

### Nodes

**At the core, Magick is a system for taking in data, doing stuff to it, and then sending the final data out.**

This "stuff" is called a "transformation", the data transforms from one thing into the next. The "stuff" that is happening to the data is a black box that takes something in, anything, and returns something out.

We call the black box where the transformstion takes place a "node". Nodes are the building blocks of Magick.

### Creating Nodes

Nodes are created in the composer window of the "Spells" tab. You can right-click in the composer and add nodes from the context menu. You can also drag and drop nodes from the "Nodes" tab into the composer. Nodes can be dragged and dropped around the composer to re-arrange them.

Nodes can be deleted by right-clicking on them and selecting "Delete".

### Node Types

- Input Node
- Prompt Template
- Code Node: Lets you define both inputs and outputs.
- Generator Node: Lets you define your own input sockets and then work with that data inside of the node.
- Wait For All Node: Used to wait for different execution branches to complete before joining back into a single branch -- this is a good way to do several slow tasks at once.
- ...and lots more! (if you have suggestions for any, do let us know)

### Inputs and Outputs

All nodes have some inputs and/or outputs, although they don't necessarily have to have both. Inputs and outputs are visually displayed as sockets. The color of the socket determines the type of data it can receive, with "gray" being the default untyped or "any" type.

### Sockets

Data passed into sockets is available to the node. It can process that data, do something to it, and return the result to the output socket. Some nodes (like Generator node) let you define your own input sockets and then work with that data inside of the node. Some nodes (like the Code node) let you define both inputs and outputs.

### Triggers

Triggers tell nodes to start asynchronous tasks. Some nodes can process data without needing a trigger, but most nodes need triggers. Triggers can be emitted from one socket out to more than one input, however the order of execution is not guaranteed. You can use the "Wait For All" node to wait for different execution branches to complete before joining back into a single branch -- this is a good way to do several slow tasks at once

<hr />

# ⚙️ Installation

Choose your operating system's installation guide for detailed setup instructions:

- [macOS Installation Guide](docs/installation/macos.md)
- [Linux Installation Guide](docs/installation/linux.md)
- [Windows Installation Guide](docs/installation/windows.md)

Each guide includes:

- System requirements and prerequisites
- Step-by-step installation instructions
- Environment setup
- Database configuration
- Troubleshooting tips

For detailed development documentation and architecture overview, see:

- [Development Guide](docs/development/README.md)
- [Architecture Overview](docs/architecture/README.md)

## Development Tips

### Self-signed certificates

For local development, you may want to have Chrome accept self-signed certificates from localhost. To enable this:

1. Navigate to: `chrome://flags/#allow-insecure-localhost`
2. Enable the feature

## Contributors

<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->

[![All Contributors](https://img.shields.io/badge/all_contributors-27-orange.svg?style=flat-square)](#contributors-)

<!-- ALL-CONTRIBUTORS-BADGE:END -->

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/michaelsharpe"><img src="https://avatars.githubusercontent.com/u/2397603?v=4?s=100" width="100px;" alt="Michael"/><br /><sub><b>Michael</b></sub></a><br /><a href="https://github.com/Oneirocom/Magick/commits?author=michaelsharpe" title="Code">💻</a> <a href="#platform-michaelsharpe" title="Packaging/porting to new platform">📦</a> <a href="#business-michaelsharpe" title="Business development">💼</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://thenexus.city"><img src="https://avatars.githubusercontent.com/u/18633264?v=4?s=100" width="100px;" alt="M̵̞̗̝̼̅̏̎͝Ȯ̴̝̻̊̃̋̀Õ̷̼͋N̸̩̿͜ ̶̜̠̹̼̩͒"/><br /><sub><b>M̵̞̗̝̼̅̏̎͝Ȯ̴̝̻̊̃̋̀Õ̷̼͋N̸̩̿͜ ̶̜̠̹̼̩͒</b></sub></a><br /><a href="https://github.com/Oneirocom/Magick/commits?author=lalalune" title="Code">💻</a> <a href="#platform-lalalune" title="Packaging/porting to new platform">📦</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/alextitonis"><img src="https://avatars.githubusercontent.com/u/45359358?v=4?s=100" width="100px;" alt="alextitonis"/><br /><sub><b>alextitonis</b></sub></a><br /><a href="https://github.com/Oneirocom/Magick/commits?author=alextitonis" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://msub2.com"><img src="https://avatars.githubusercontent.com/u/70986246?v=4?s=100" width="100px;" alt="Daniel Adams"/><br /><sub><b>Daniel Adams</b></sub></a><br /><a href="https://github.com/Oneirocom/Magick/commits?author=msub2" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://3ov.xyz"><img src="https://avatars.githubusercontent.com/u/8985705?v=4?s=100" width="100px;" alt="Anthony Burchell"/><br /><sub><b>Anthony Burchell</b></sub></a><br /><a href="https://github.com/Oneirocom/Magick/commits?author=antpb" title="Code">💻</a> <a href="#blog-antpb" title="Blogposts">📝</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://xrdevlog.com/"><img src="https://avatars.githubusercontent.com/u/32600939?v=4?s=100" width="100px;" alt="jin"/><br /><sub><b>jin</b></sub></a><br /><a href="#blog-madjin" title="Blogposts">📝</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/sshivaditya2019"><img src="https://avatars.githubusercontent.com/u/53160903?v=4?s=100" width="100px;" alt="Shivaditya Shivganesh"/><br /><sub><b>Shivaditya Shivganesh</b></sub></a><br /><a href="https://github.com/Oneirocom/Magick/commits?author=sshivaditya2019" title="Code">💻</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/khalildh"><img src="https://avatars.githubusercontent.com/u/16530987?v=4?s=100" width="100px;" alt="khalildh"/><br /><sub><b>khalildh</b></sub></a><br /><a href="https://github.com/Oneirocom/Magick/commits?author=khalildh" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/pigloo"><img src="https://avatars.githubusercontent.com/u/1707563?v=4?s=100" width="100px;" alt="Pigloo"/><br /><sub><b>Pigloo</b></sub></a><br /><a href="https://github.com/Oneirocom/Magick/commits?author=pigloo" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/avirtualfuture"><img src="https://avatars.githubusercontent.com/u/118632766?v=4?s=100" width="100px;" alt="avirtualfuture"/><br /><sub><b>avirtualfuture</b></sub></a><br /><a href="https://github.com/Oneirocom/Magick/commits?author=avirtualfuture" title="Code">💻</a> <a href="https://github.com/Oneirocom/Magick/commits?author=avirtualfuture" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://www.alexjorgef.com"><img src="https://avatars.githubusercontent.com/u/3478673?v=4?s=100" width="100px;" alt="Alexandre Ferreira"/><br /><sub><b>Alexandre Ferreira</b></sub></a><br /><a href="https://github.com/Oneirocom/Magick/commits?author=alexjorgef" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://matei3d.com"><img src="https://avatars.githubusercontent.com/u/45219403?v=4?s=100" width="100px;" alt="Matei Anghel"/><br /><sub><b>Matei Anghel</b></sub></a><br /><a href="https://github.com/Oneirocom/Magick/commits?author=matei3d" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/Trentalantar"><img src="https://avatars.githubusercontent.com/u/28672708?v=4?s=100" width="100px;" alt="Trentalantar"/><br /><sub><b>Trentalantar</b></sub></a><br /><a href="https://github.com/Oneirocom/Magick/commits?author=Trentalantar" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/DavinciDreams"><img src="https://avatars.githubusercontent.com/u/64185677?v=4?s=100" width="100px;" alt="Lisa Mega Watts"/><br /><sub><b>Lisa Mega Watts</b></sub></a><br /><a href="https://github.com/Oneirocom/Magick/commits?author=DavinciDreams" title="Documentation">📖</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/rjphnx"><img src="https://avatars.githubusercontent.com/u/12023783?v=4?s=100" width="100px;" alt="r2"/><br /><sub><b>r2</b></sub></a><br /><a href="https://github.com/Oneirocom/Magick/commits?author=rjphnx" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/FabriceIRANKUNDA"><img src="https://avatars.githubusercontent.com/u/58092199?v=4?s=100" width="100px;" alt="IRANKUNDA Fabrice"/><br /><sub><b>IRANKUNDA Fabrice</b></sub></a><br /><a href="https://github.com/Oneirocom/Magick/commits?author=FabriceIRANKUNDA" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://kiennguyensys.blogspot.com/"><img src="https://avatars.githubusercontent.com/u/24317011?v=4?s=100" width="100px;" alt="Kien Nguyen"/><br /><sub><b>Kien Nguyen</b></sub></a><br /><a href="https://github.com/Oneirocom/Magick/commits?author=kiennguyensys" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/BMO-tech"><img src="https://avatars.githubusercontent.com/u/7051219?v=4?s=100" width="100px;" alt="Ben Moore"/><br /><sub><b>Ben Moore</b></sub></a><br /><a href="https://github.com/Oneirocom/Magick/commits?author=BMO-tech" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/stackedq"><img src="https://avatars.githubusercontent.com/u/20498757?v=4?s=100" width="100px;" alt="Q"/><br /><sub><b>Q</b></sub></a><br /><a href="https://github.com/Oneirocom/Magick/commits?author=stackedq" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/thomageanderson"><img src="https://avatars.githubusercontent.com/u/122855509?v=4?s=100" width="100px;" alt="thomageanderson"/><br /><sub><b>thomageanderson</b></sub></a><br /><a href="https://github.com/Oneirocom/Magick/commits?author=thomageanderson" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://palmesi.com"><img src="https://avatars.githubusercontent.com/u/3073099?v=4?s=100" width="100px;" alt="Pietro"/><br /><sub><b>Pietro</b></sub></a><br /><a href="https://github.com/Oneirocom/Magick/commits?author=pizzooid" title="Code">💻</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="http://twitter.com/codingsh"><img src="https://avatars.githubusercontent.com/u/57037080?v=4?s=100" width="100px;" alt="codingsh"/><br /><sub><b>codingsh</b></sub></a><br /><a href="https://github.com/Oneirocom/Magick/commits?author=developerfred" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/benbot"><img src="https://avatars.githubusercontent.com/u/1340967?v=4?s=100" width="100px;" alt="Ben Botwin"/><br /><sub><b>Ben Botwin</b></sub></a><br /><a href="https://github.com/Oneirocom/Magick/commits?author=benbot" title="Code">💻</a> <a href="#platform-benbot" title="Packaging/porting to new platform">📦</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://chibifire.com"><img src="https://avatars.githubusercontent.com/u/32321?v=4?s=100" width="100px;" alt="K. S. Ernest (iFire) Lee"/><br /><sub><b>K. S. Ernest (iFire) Lee</b></sub></a><br /><a href="https://github.com/Oneirocom/Magick/commits?author=fire" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/coffeeorgreentea"><img src="https://avatars.githubusercontent.com/u/90069434?v=4?s=100" width="100px;" alt="coffeeorgreentea"/><br /><sub><b>coffeeorgreentea</b></sub></a><br /><a href="https://github.com/Oneirocom/Magick/commits?author=coffeeorgreentea" title="Code">💻</a> <a href="#infra-coffeeorgreentea" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="#business-coffeeorgreentea" title="Business development">💼</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://knar.dev/"><img src="https://avatars.githubusercontent.com/u/4692561?v=4?s=100" width="100px;" alt="Knar"/><br /><sub><b>Knar</b></sub></a><br /><a href="https://github.com/Oneirocom/Magick/commits?author=Knar33" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/Emmyn5600"><img src="https://avatars.githubusercontent.com/u/55635977?v=4?s=100" width="100px;" alt="Emmy NSABIMANA "/><br /><sub><b>Emmy NSABIMANA </b></sub></a><br /><a href="https://github.com/Oneirocom/Magick/commits?author=emmyn5600" title="Code">💻</a></td>
    </tr>
  </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

## Based on Thoth by Latitude Games

The original source code was made by the following contributors to Thoth, which is archived [here](http://github.com/latitudegames/thoth)

<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/HaruHunab1320"><img src="https://avatars.githubusercontent.com/u/51176775?v=4?s=100" width="100px;" alt="Jakob"/><br /><sub><b>Jakob</b></sub></a><br /><a href="https://github.com/Oneirocom/Magick/commits?author=HaruHunab1320" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://seangillespie.dev"><img src="https://avatars.githubusercontent.com/u/1413443?v=4?s=100" width="100px;" alt="Sean Gillespie"/><br /><sub><b>Sean Gillespie</b></sub></a><br /><a href="https://github.com/Oneirocom/Magick/commits?author=seang" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/michaelsharpe"><img src="https://avatars.githubusercontent.com/u/2397603?v=4?s=100" width="100px;" alt="Michael"/><br /><sub><b>Michael</b></sub></a><br /><a href="https://github.com/Oneirocom/Magick/commits?author=michaelsharpe" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://prestongull.com"><img src="https://avatars.githubusercontent.com/u/9013237?v=4?s=100" width="100px;" alt="Preston Gull"/><br /><sub><b>Preston Gull</b></sub></a><br /><a href="https://github.com/Oneirocom/Magick/commits?author=pgull" title="Code">💻</a><a href="https://github.com/Oneirocom/Magick/commits?author=pgull" title="Design">🎨</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/nickwalton"><img src="https://avatars.githubusercontent.com/u/22206272?v=4?s=100" width="100px;" alt="Nick Walton"/><br /><sub><b>Nick Walton</b></sub></a><br /><a href="https://github.com/Oneirocom/Magick/commits?author=nickwalton" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/mitchellgordon95"><img src="https://avatars.githubusercontent.com/u/7490438?v=4?s=100" width="100px;" alt="Mitchell Gordon"/><br /><sub><b>Mitchell Gordon</b></sub></a><br /><a href="https://github.com/Oneirocom/Magick/commits?author=mitchellgordon95" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://generative.ink"><img src="https://avatars.githubusercontent.com/u/19345266?v=4?s=100" width="100px;" alt="?/janus"/><br /><sub><b>?/janus</b></sub></a><br /><a href="https://github.com/Oneirocom/Magick/commits?author=socketteer" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/aawalton"><img src="https://avatars.githubusercontent.com/u/1708223?v=4?s=100" width="100px;" alt="Alan Walton"/><br /><sub><b>Alan Walton</b></sub></a><br /><a href="https://github.com/Oneirocom/Magick/commits?author=aawalton" title="Code">💻</a></td>
    </tr>
  </tbody>
</table>

# Come Build With Us!

We are building Magick as a community in the open on Discord. If you are interested in contributing to the project, we'd love to have you.

Join us here: https://bit.ly/magickdiscordgh

<p align="center"><img src="apps/docs/readme-files/wizard.png" /></p>
