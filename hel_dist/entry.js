(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('hel-lib-proxy')) :
	typeof define === 'function' && define.amd ? define(['exports', 'hel-lib-proxy'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global["comps-vue3-datav"] = {}, global.HelLibProxy));
})(this, (function (exports, helLibProxy) { 'use strict';

	/*
	|--------------------------------------------------------------------------
	|
	| 对应 package.json / appGroupName
	|
	| 注意：rollup 会把这个文件当普通 JS 读取，不要写只有 TS 能解析的语法。
	|
	|--------------------------------------------------------------------------
	*/

	const LIB_NAME$1 = 'comps-vue3-datav';

	/*
	|--------------------------------------------------------------------------
	|
	| 导出入口，同时也作为 rollup 的打包入口文件。
	|
	| 这里只调用 exposeLib 生成空壳代理，rollup 打包后是一个仅包含 hel-lib-proxy 的代理文件，
	| 对模块使用方的包体构建大小无影响。
	|
	| 模块使用方：通过 npm i 本包后，只要在头文件处执行过 preFetchLib，
	| 则整个项目像使用本地模块一样载入提供方的组件 / 工具。
	|
	|--------------------------------------------------------------------------
	*/

	/**
	 * 将提供给用户的 lib 暴露出去
	 */
	const dtlib = helLibProxy.exposeLib(LIB_NAME$1);

	const LIB_NAME = dtlib.LIB_NAME;
	const DvMap25D = dtlib.DvMap25D;
	const DvRegionSelect = dtlib.DvRegionSelect;
	const components = dtlib.components;
	const install = dtlib.install;
	const installDatavComponents = dtlib.installDatavComponents;
	const clearGeojsonCache = dtlib.clearGeojsonCache;
	const defaultGeojsonLoader = dtlib.defaultGeojsonLoader;
	const GEOJSON_API_BASE = dtlib.GEOJSON_API_BASE;
	const getFeatureCenter = dtlib.getFeatureCenter;
	const getFeatureCode = dtlib.getFeatureCode;
	const getFeatureName = dtlib.getFeatureName;
	const getGeojsonBbox = dtlib.getGeojsonBbox;
	const isGeojson = dtlib.isGeojson;
	const loadGeojson = dtlib.loadGeojson;
	const resolveGeojsonUrl = dtlib.resolveGeojsonUrl;
	const toMapRegion = dtlib.toMapRegion;
	const CN_PROVINCES = dtlib.CN_PROVINCES;
	const CN_REGIONS = dtlib.CN_REGIONS;
	const findRegion = dtlib.findRegion;

	exports.CN_PROVINCES = CN_PROVINCES;
	exports.CN_REGIONS = CN_REGIONS;
	exports.DvMap25D = DvMap25D;
	exports.DvRegionSelect = DvRegionSelect;
	exports.GEOJSON_API_BASE = GEOJSON_API_BASE;
	exports.LIB_NAME = LIB_NAME;
	exports.clearGeojsonCache = clearGeojsonCache;
	exports.components = components;
	exports.default = dtlib;
	exports.defaultGeojsonLoader = defaultGeojsonLoader;
	exports.dtlib = dtlib;
	exports.findRegion = findRegion;
	exports.getFeatureCenter = getFeatureCenter;
	exports.getFeatureCode = getFeatureCode;
	exports.getFeatureName = getFeatureName;
	exports.getGeojsonBbox = getGeojsonBbox;
	exports.install = install;
	exports.installDatavComponents = installDatavComponents;
	exports.isGeojson = isGeojson;
	exports.loadGeojson = loadGeojson;
	exports.resolveGeojsonUrl = resolveGeojsonUrl;
	exports.toMapRegion = toMapRegion;

	Object.defineProperty(exports, '__esModule', { value: true });

}));
