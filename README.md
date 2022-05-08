# ThreeJS - A Base Project
This project is intended to serve as a base for ThreeJS projects written in TypeScript. It includes packages that
allow the use of TypeScript with ThreeJS in a way that compiles everything into a single
file via webpack, suited for browser-based applications.



# Packages

### Node.js
This project can be setup as most node-based projects via the `npm install` command.
This command will install all the dependencies listed in the `package.json` file along with necessary type definitions
for use with TypeScript. This install will include `TypeScript` and `Webpack` along with 
necessary and helpful packages such as `webpack-cli` and `ts-loader`

The following command, listed as a script in the `package.json` file, can be run to create a bundle file
via webpack:

`npm run build`

### TypeScript
Configurations are outlined in `tsconfig.json` that specify the following points:

**Compiler Options**
- `module: commonJs` - used by Node.js
- `target: es5` -  Target output format (older, but well-supported)
- `sourceMap: true` - Generates sourcemap files that trace to the original .ts files
- `noImplicitAny: true` - forces strict typing
- `moduleResolution: node` - uses Node.js module resolution system
- `outDir` - the directory to which emitted files are created/updated

**Include**
- `src/**/*.ts` - any .ts file, located in any subdirectory, within the `src` directory

**Exclude**
- `node_modules` - won't emit compiled files using anything in project packages without explicitly importing.

### Webpack
This project uses Webpack to bundle all transpiled TypeScript files located into a single Browser-compatible
file named `main.js`. This file is located in the `dist` directory and is updated everytime Webpack is run via the
`npm run build` command. Configurations for webpack are located in the `webpack.config.js` file in the
project's root directory and are as follows:

- `mode: [production|development|none]` - Defaults to `none` (output file size varies significantly).
- `entry: ./src/index.ts` - the root file from which Webpack's build tree is produced.
- `output` - defines the _single_ output file location
- `resolve: [.ts, .js]` - specifies the heirarchy in which names resolve wrt to file types. .js files allow imports from certain node modules that would otherwise not be possible.
- `module: rules: [use: ts-loader]` - instructs Webpack to use the `ts-loader` package to bundle TypeScript files
