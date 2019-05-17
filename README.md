# Launch Extension Tutorial

A tutorial project on how to get started with building Launch Extensions.

This repository provides:
* **Coinhive extension** - based off the tutorial from https://www.youtube.com/watch?v=rxjtC9o4rl0
* **Salesforce extension** - An extension I'm building to learn about building third party extensions.

## Getting Started

You will need to make sure you have `npx` available in your terminal. If you do not have it you can install it by running `npm install -g npx`

### Creating A New Extension

To create a new extension simply create a new folder by doing the following:

```
mkdir <new folder name>
cd <new folder name>
npx @adobe/reactor-scaffold
```
This will run the scaffolding to get you started with an Extension Wizard that will help you set up the file structure and folder needed to get started.

More information here at https://developer.adobelaunch.com/extensions/guides/quickstart/

### Running the Sandbox

In order to run the sandbox environment provided by Adobe, all you need to do is go into one of the extensions and run the command `npx @adobe/reactor-sandbox`

Running it for the first time will take a bit of time. Once this is done it will create an environment on `http://localhost:3000` and `https://localhost:4000` for you to test your extension.

localhost:3000 is an **http environment**, whereas the locahost:4000 is an **https secure environment**.

A TODO task that I'm trying to figure out is if there is a way to set a watch so that we don't have to re-run the sandbox everytime a change is made.

### Other Example Extensions

Example Extensions
There are example extensions on Github you can review or use as starter projects:

* Hello World example extension - https://github.com/adobe/reactor-helloworld-extension
* Facebook example extension - https://github.com/Adobe-Marketing-Cloud-Activation/extension-facebookpixel
* Typekit example extension - https://github.com/jeffchasin/extension-fonts
* Pinterest example extension - https://github.com/jeffchasin/extension-pinterest




