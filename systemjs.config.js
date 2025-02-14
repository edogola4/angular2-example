/**
 * System configuration for Angular 2 samples.
 * Adjust as necessary for your application's needs.
 */
(function(global) {
    // Map tells the System loader where to look for things.
    var map = {
      'app': 'app',
      '@angular': 'node_modules/@angular',
      'angular2-in-memory-web-api': 'node_modules/angular2-in-memory-web-api',
      'rxjs': 'node_modules/rxjs'
    };
  
    // Packages tells the System loader how to load when no filename and/or no extension is provided.
    var packages = {
      'app': { main: 'main.js', defaultExtension: 'js' },
      'rxjs': { defaultExtension: 'js' },
      'angular2-in-memory-web-api': { main: 'index.js', defaultExtension: 'js' }
    };
  
    // Add Angular package configurations.
    var ngPackageNames = [
      'common',
      'compiler',
      'core',
      'forms',
      'http',
      'platform-browser',
      'platform-browser-dynamic',
      'router',
      'router-deprecated',
      'upgrade'
    ];
  
    // Choose between individual index files or UMD bundles.
    function packIndex(pkgName) {
      packages['@angular/' + pkgName] = { main: 'index.js', defaultExtension: 'js' };
    }
    function packUmd(pkgName) {
      packages['@angular/' + pkgName] = { main: '/bundles/' + pkgName + '.umd.js', defaultExtension: 'js' };
    }
  
    // Use UMD bundles for most environments.
    var setPackageConfig = packUmd;
    ngPackageNames.forEach(setPackageConfig);
  
    var config = {
      map: map,
      packages: packages
    };
    System.config(config);
  })(this);
  