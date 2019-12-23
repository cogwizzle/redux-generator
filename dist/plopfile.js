module.exports=function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=1)}([function(e,n){e.exports=require("path")},function(e,n,t){var r=t(2),o=r.loadSettings,s=r.applySettings,i=t(9),c=(i.getFileInfo,i.getJsFileExtension,t(10).prompt),u=t(11).addAction,a=o();e.exports=function(e){e.setGenerator("hello world",{prompts:[c("input","name","What is your name?")],actions:function(e){return s(e,a),[u("hello_world.txt","Hello {{name}}!")]}})}},function(e,n,t){function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var o=t(3),s=t(4),i=function(){try{return JSON.parse(o.readFileSync("".concat(s.path,"/package.json"),"utf8"))}catch(e){throw new Error("You must have a package.json file initialized.".concat(e))}},c=function(){try{return JSON.parse(o.readFileSync("".concat(s.path,"/.eslintrc.json"),"utf8"))}catch(e){return null}},u=function(e){return Object.keys(e).some((function(e){return"typescript"===e}))},a=function(e){return Object.keys(e).some((function(e){return"postcss"===e}))},f=function(e){return Object.keys(e).some((function(e){return"@storybook/cli"===e}))},l=function(e){return Object.keys(e).some((function(e){return"node-sass"===e}))},p=function(e){return Object.keys(e).some((function(e){return"jest"===e}))},d=function(e){var n=e.rules;return Object.keys(n).some((function(e){return"react/jsx-filename-extension"===e}))&&n["react/jsx-filename-extension"][1].extensions.indexOf("jsx")>-1},m=function(e){var n=e.rules;return!Object.keys(n).some((function(e){return"semi"===e}))||Object.keys(n).some((function(e){return"semi"===e}))&&"never"!==n.semi[1]};e.exports={loadSettings:function(){var e=i(),n=c(),t=function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},o=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),o.forEach((function(n){r(e,n,t[n])}))}return e}({},e.devDependencies,e.dependencies);return{isTypescript:u(t),isPostcss:a(t),isStorybook:f(t),isSass:l(t),isJest:p(t),isJsx:n&&d(n),isSemicolons:n&&m(n)}},checkIsTypescript:u,checkIsPostcss:a,checkIsStorybook:f,checkIsSass:l,checkIsJestInstalled:p,checkIsJsx:d,checkIsSemicolon:m,loadPackages:i,loadEslint:c,applySettings:function(e,n){return Object.keys(n).forEach((function(t){e[t]=n[t]}))}}},function(e,n){e.exports=require("fs")},function(e,n,t){"use strict";(function(n){var r=t(5);e.exports=r(n)}).call(this,"node_modules/app-root-path")},function(e,n,t){"use strict";e.exports=function(e){var n=t(0),r=t(6)(e),o={resolve:function(e){return n.join(r,e)},require:function(e){return t(8)(o.resolve(e))},toString:function(){return r},setPath:function(e){r=n.resolve(e),o.path=r},path:r};return o}},function(e,n,t){"use strict";var r,o=t(0),s=t(7).globalPaths;r="win32"===process.platform?o.dirname(process.execPath):o.dirname(o.dirname(process.execPath));var i=o.resolve(r,"lib","node_modules"),c=o.sep,u=require;const a=function(e){const n=c+"node_modules";if(-1!==e.indexOf(n)){const t=e.split(n);if(t.length)return t[0]}return null};e.exports=function(e){if(process.env.APP_ROOT_PATH)return o.resolve(process.env.APP_ROOT_PATH);if(process.versions.pnp)try{var n=u("pnpapi");return n.getPackageInformation(n.topLevel).packageLocation}catch(e){}if("undefined"!=typeof window&&window.process&&"renderer"===window.process.type)try{return u("electron").remote.require("app-root-path").path}catch(e){}if(process.env.LAMBDA_TASK_ROOT&&process.env.AWS_EXECUTION_ENV)return process.env.LAMBDA_TASK_ROOT;var t=o.resolve(e),r=!1,f=null;return function(e){const n=c+".pnpm";for(const t of s)if(-1!==t.indexOf(n)&&-1!==e.indexOf(n))return!0;return!1}(t)&&(f=a(t))?f:(s.forEach((function(e){r||0!==t.indexOf(e)||(r=!0)})),r||(f=a(t)),(r||null==f)&&(f=o.dirname(u.main.filename)),r&&-1!==f.indexOf(i)&&f.length-4===f.indexOf(c+"bin")&&(f=f.slice(0,-4)),f)}},function(e,n){e.exports=require("module")},function(e,n){function t(e){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}t.keys=function(){return[]},t.resolve=t,e.exports=t,t.id=8},function(e,n){function t(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=[],r=!0,o=!1,s=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(t.push(i.value),!n||t.length!==n);r=!0);}catch(e){o=!0,s=e}finally{try{r||null==c.return||c.return()}finally{if(o)throw s}}return t}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var r=function(e){return e?"ts":"js"},o=function(e){switch(e.toLowerCase()){case"scss":case"sass":return"scss";case"postcss":case"post-css":case"css":default:return"css"}},s=function(e){return process.cwd().indexOf("src/components")<0&&e.indexOf("src/components")<0?"src/components/".concat(e):e},i=function(e){if(e.indexOf("/")>-1){var n=e.lastIndexOf("/"),t=[e.slice(0,n),e.slice(n+1,e.length)],r=t[1];return[s(t[0]),r]}return[s(""),e]};e.exports={getJsFileExtension:r,getStyleSheetExtension:o,extractPathAndComponentName:i,getFileInfo:function(e,n){var s=n.isTypescript,c=n.isSass,u=(n.isJsx,t(i(e),2)),a=u[0];return{componentName:u[1],path:a,jsExtension:r(s),styleExtension:o(c?"sass":"css")}},generatePathWithPrefix:s}},function(e,n){e.exports={prompt:function(e,n,t){return{type:e,name:n,message:t}}}},function(e,n){e.exports={addAction:function(e,n){var t=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return{type:"add",path:e,template:n,skipIfExists:t}},modifyAction:function(e,n,t){return{type:"modify",path:e,pattern:n,template:t}}}}]);