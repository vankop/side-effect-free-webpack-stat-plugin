# side-effect-free-webpack-stat-plugin
Add side effect free flags to webpack build stats

### Install

```bash
npm i --save-dev side-effect-free-webpack-stat-plugin
```

### Usage

in webpack.config.js
```js
const SideEffectFreeWebpackStatPlugin = require('side-effect-free-webpack-stat-plugin');
module.exports = {
	plugins: [new SideEffectFreeWebpackStatPlugin()],
	stats: {
		modules: true
	}
};
```

then in `stats.json` in each module will be 2 fields:
 - `sideEffectFreeModule` will be `true` if module is side effect free due to [sideEffects flag](https://webpack.js.org/guides/tree-shaking/#clarifying-tree-shaking-and-sideeffects)
 - `sideEffectFreeContent` will be `true` if module code is side effect free, `null` for unknown state (webpack did not require to check this)
 
