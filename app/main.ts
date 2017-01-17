// JIT 即时编译器动态引导
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// AOT 预编译器静态引导
// import { platformBrowser } from '@angular/platform-browser';

import { AppModule } from './app.module';
// import { AppModuleNgFactory } from './app.module.ngfactory';

platformBrowserDynamic().bootstrapModule(AppModule);
// platformBrowser().bootstrapModuleFactory( AppModuleNgFactory );