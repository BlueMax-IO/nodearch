<h1 align="left" >NodeArch</h1>

<img align="right" src="/assets/isolated-layout.svg" height="200" width="300" alt="NodeArch Logo" />

<p>
  <a href="https://nodearch.io" target="_blank">
    <img alt="Programming Language" src="https://img.shields.io/badge/typescript-100%25-blue.svg" />
  </a>
  <a href="https://www.npmjs.com/package/@nodearch/core" target="_blank">
    <img alt="Version" src="https://img.shields.io/npm/v/@nodearch/core.svg?label=Version" />
  </a>
  <a href="https://github.com/ahmedali7o1/nodearch/blob/master/LICENSE" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
  <a href="https://https://www.npmjs.com/package/@nodearch/core" target="_blank">
    <img alt="Downloads" src="https://img.shields.io/npm/dt/@nodearch/core.svg" />
  </a>
  <a href="https://coveralls.io/github/nodearch/core?branch=master" target="_blank">
    <img alt="Code Coverage" src="https://coveralls.io/repos/github/BlueMax-IO/nodearch/badge.svg?branch=master" />
  </a>
  <a href="https://img.shields.io/snyk/vulnerabilities/npm/@nodearch/core" target="_blank">
    <img alt="Vulnerabilities" src="https://img.shields.io/snyk/vulnerabilities/npm/@nodearch/core.svg" />
  </a>
  <a href="https://img.shields.io/github/workflow/status/bluemax-io/nodearch/Deploy/master" target="_blank">
    <img alt="Build Status" src="https://img.shields.io/github/workflow/status/bluemax-io/nodearch/Deploy/master?label=Build" />
  </a>
  <a href="https://github.com/ahmedali7o1/nodearch/stargazers" target="_blank">
    <img alt="Star on GitHub" src="https://img.shields.io/github/stars/bluemax-io/nodearch?style=social" />
  </a>
</p>

## 👋 Welcome to NodeArch

NodeArch is a Node.js backend framework targeting to solve the design and architectural problems when creating Node.js APPs for the backend. Using Typescript and dependency injection, we bring the concepts we used to in languages like Java, C# etc. While still getting the best out of Javascript flexibility and Node.js non-blocking I/O model. There is also a big focus on wiring everything together, so our intention is not to reinvent/rewrite the tools/frameworks we already know and use. Instead, our target is to wire everything together and leverage the opensource community behind Node.js and Javascript. You can think of NodeArch as the glue that links all your tools and libraries together and helps create a readable, maintainable and scalable application architecture. 


## 🔗 Links

* [Homepage](https://nodearch.io)
* [Documentation](https://nodearch.io/docs)

## 📦 Install

You need to install the NodeArch command-line interface to be able to generate new apps. Start by Running the following command in your terminal to install the CLI globally.

```sh
npm i -g @nodearch/cli
```

Once installed, you can run `nodearch -h` in your terminal to see the usage.

## 🚀 Usage

```sh
# start your app
nodearch start

# start your app in Watch mode
nodearch  start -w

# run test cases
nodearch test

# run test cases in watch mode
nodearch test -w

# build your app ( only required in production mode )
nodearch build
```
```bash
❯ nodearch -h
Usage: nodearch <command> [options]

Commands:
  nodearch build  Build NodeArch app                                [aliases: b]
  nodearch new    Generate new NodeArch APP                         [aliases: n]
  nodearch start  Start NodeArch APP                                [aliases: s]
  nodearch test   run automated testing                             [aliases: t]

Options:
  -y, --notify   turn desktop notifier on or off       [boolean] [default: true]
  -h, --help     Show help                                             [boolean]
  -v, --version  Show version number                                   [boolean]

Examples:
  nodearch new    generates new app
  nodearch build  build existing app from the current directory
  nodearch start  starts existing app from the current directory
```

for all the options, please check the [documentation](https://nodearch.io/docs)

## 🤝 Contributing
Contributions, issues and feature requests are welcome! If you like the idea and want to improve, add, or suggest something, please use the GitHub Issue tracker to communicate your thoughts with us.

## 👷 Development
### Prerequisites
* [Node.js](https://nodejs.org/en/download/)
* [Microsoft Rush](https://rushjs.io/pages/intro/get_started/)
* [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

### Setup
Clone the project on your local machine, using the following command.
```bash
git clone https://github.com/ahmedali7o1/nodearch.git
```

Switch to the repo directory, and then install dependencies
```bash
rush install
```

Now build the project
```bash
rush build
```

### Usage

```bash
# Build the project
rush build

# Run test cases
rush test

# Add NPM package as a dependency
rush add
```

For more details on how to use Rush to add packages, commands, build and run stuff. check it on the official [Rush website](https://rushjs.io/pages/intro/welcome/)

## Show your support

Give a ⭐️ if this project helped you! 

[![Star on GitHub](https://img.shields.io/github/stars/bluemax-io/nodearch?style=social)](https://github.com/ahmedali7o1/nodearch/stargazers)

## 📝 License

Copyright © 2020 [BlueMax IO](https://github.com/ahmedali7o1).<br />
This project is [MIT](https://github.com/ahmedali7o1/nodearch/blob/master/LICENSE) licensed.

***

Open Source Software made with ❤️ for the Node.js Community.<br />
© BlueMax IO. All rights reserved. [Ahmed Ali](https://github.com/AhmedAli7O1)
