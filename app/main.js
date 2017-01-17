"use strict";
// JIT 即时编译器动态引导
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
// AOT 预编译器静态引导
// import { platformBrowser } from '@angular/platform-browser';
var app_module_1 = require('./app.module');
// import { AppModuleNgFactory } from './app.module.ngfactory';
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);
// platformBrowser().bootstrapModuleFactory( AppModuleNgFactory ); 
//# sourceMappingURL=main.js.map