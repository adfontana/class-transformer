# Class transformer example

## Overview
Testing the [class-transformer](https://github.com/typestack/class-transformer) lib

## Installation
1. Install module:
    ```
    npm i class-transformer
    ```

2. reflect-metadata shim is required, install it too:
    ```
    npm i reflect-metadata
    ```

    add import in then `index.ts`

    ```
    import 'reflect-metadata';
    ```
3. Install Typescript and others devDependecies `-D`
    ```
    npm i -D typescript ts-node-dev
    ```
4. Create a `tsconfig.json` file with default compiler options
    ```
    npx tsc --init
    ```
    Open the file created in your root directory, and add the lines below
    ```json
    "rootDir": "src",
    "outDir": "dist"
    ```
    This will tell the typescript compiler where the source (`"rootDir": "src"`) of the `.ts` files are, and where to generate the compiled `.js` files (`"outDir": "dist"`).
## Usage
Install the dependencies in the `package.json` file
```
npm i
```
Start the app
```
npm start
```
