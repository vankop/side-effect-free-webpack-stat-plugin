class SideEffectFreeWebpackStatPlugin {
	apply(compiler) {
		compiler.hooks.compilation.tap("SideEffectFreeWebpackStatPlugin", compilation => {
			compilation.hooks.statsFactory.tap("SideEffectFreeWebpackStatPlugin", stats => {
				stats.hooks.extract.for("module")
					.tap({ name: "SideEffectFreeWebpackStatPlugin", stage: 100 }, (obj, data) => {
						obj.sideEffectFreeModule = data.factoryMeta
							? (data.factoryMeta.sideEffectFree || false)
							: false;
						obj.sideEffectFreeContent = data.buildMeta
							? data.buildMeta.sideEffectFree !== undefined ? data.buildMeta.sideEffectFree : null
							: null;
					});
			});
		});
	}
}

module.exports = SideEffectFreeWebpackStatPlugin;
