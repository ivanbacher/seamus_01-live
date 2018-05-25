System.config({
  defaultJSExtensions: true,
  transpiler: false,
  paths: {
    "*": "dist/*",
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },
  map: {
    "CodeMirror": "npm:codemirror@5.36.0",
    "aurelia-animator-css": "npm:aurelia-animator-css@1.0.1",
    "aurelia-bootstrapper": "npm:aurelia-bootstrapper@1.0.0",
    "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.1",
    "aurelia-fetch-client": "npm:aurelia-fetch-client@1.3.1",
    "aurelia-framework": "npm:aurelia-framework@1.0.6",
    "aurelia-history-browser": "npm:aurelia-history-browser@1.0.0",
    "aurelia-loader-default": "npm:aurelia-loader-default@1.0.0",
    "aurelia-logging-console": "npm:aurelia-logging-console@1.0.0",
    "aurelia-pal-browser": "npm:aurelia-pal-browser@1.0.0",
    "aurelia-polyfills": "npm:aurelia-polyfills@1.1.1",
    "aurelia-router": "npm:aurelia-router@1.0.6",
    "aurelia-templating-binding": "npm:aurelia-templating-binding@1.0.0",
    "aurelia-templating-resources": "npm:aurelia-templating-resources@1.1.1",
    "aurelia-templating-router": "npm:aurelia-templating-router@1.0.0",
    "bluebird": "npm:bluebird@3.4.1",
    "bootstrap": "npm:bootstrap@4.1.0",
    "css": "github:systemjs/plugin-css@0.1.37",
    "d3": "npm:d3@4.1.1",
    "escodegen": "npm:escodegen@1.9.1",
    "escope": "npm:escope@3.6.0",
    "esprima": "npm:esprima@4.0.0",
    "fetch": "github:github/fetch@1.0.0",
    "font-awesome": "npm:font-awesome@4.6.3",
    "fullpage": "npm:fullpage.js@2.9.7",
    "jquery": "npm:jquery@3.3.1",
    "json": "github:systemjs/plugin-json@0.3.0",
    "text": "github:systemjs/plugin-text@0.0.8",
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.4.1"
    },
    "github:jspm/nodelibs-buffer@0.1.1": {
      "buffer": "npm:buffer@5.1.0"
    },
    "github:jspm/nodelibs-events@0.1.1": {
      "events": "npm:events@1.0.2"
    },
    "github:jspm/nodelibs-http@1.7.1": {
      "Base64": "npm:Base64@0.2.1",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "github:jspm/nodelibs-https@0.1.0": {
      "https-browserify": "npm:https-browserify@0.0.0"
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "path-browserify": "npm:path-browserify@0.0.0"
    },
    "github:jspm/nodelibs-process@0.1.2": {
      "process": "npm:process@0.11.10"
    },
    "github:jspm/nodelibs-stream@0.1.0": {
      "stream-browserify": "npm:stream-browserify@1.0.0"
    },
    "github:jspm/nodelibs-url@0.1.0": {
      "url": "npm:url@0.10.3"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "github:jspm/nodelibs-vm@0.1.0": {
      "vm-browserify": "npm:vm-browserify@0.0.4"
    },
    "npm:assert@1.4.1": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "npm:util@0.10.3"
    },
    "npm:aurelia-animator-css@1.0.1": {
      "aurelia-metadata": "npm:aurelia-metadata@1.0.1",
      "aurelia-pal": "npm:aurelia-pal@1.0.0",
      "aurelia-templating": "npm:aurelia-templating@1.1.1"
    },
    "npm:aurelia-binding@1.0.9": {
      "aurelia-logging": "npm:aurelia-logging@1.4.0",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.1",
      "aurelia-pal": "npm:aurelia-pal@1.0.0",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.1.0"
    },
    "npm:aurelia-bootstrapper@1.0.0": {
      "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.1",
      "aurelia-framework": "npm:aurelia-framework@1.0.6",
      "aurelia-history": "npm:aurelia-history@1.0.0",
      "aurelia-history-browser": "npm:aurelia-history-browser@1.0.0",
      "aurelia-loader-default": "npm:aurelia-loader-default@1.0.0",
      "aurelia-logging-console": "npm:aurelia-logging-console@1.0.0",
      "aurelia-pal": "npm:aurelia-pal@1.0.0",
      "aurelia-pal-browser": "npm:aurelia-pal-browser@1.0.0",
      "aurelia-polyfills": "npm:aurelia-polyfills@1.1.1",
      "aurelia-router": "npm:aurelia-router@1.0.6",
      "aurelia-templating": "npm:aurelia-templating@1.1.1",
      "aurelia-templating-binding": "npm:aurelia-templating-binding@1.0.0",
      "aurelia-templating-resources": "npm:aurelia-templating-resources@1.1.1",
      "aurelia-templating-router": "npm:aurelia-templating-router@1.0.0"
    },
    "npm:aurelia-dependency-injection@1.1.0": {
      "aurelia-metadata": "npm:aurelia-metadata@1.0.1",
      "aurelia-pal": "npm:aurelia-pal@1.0.0"
    },
    "npm:aurelia-event-aggregator@1.0.1": {
      "aurelia-logging": "npm:aurelia-logging@1.4.0"
    },
    "npm:aurelia-framework@1.0.6": {
      "aurelia-binding": "npm:aurelia-binding@1.0.9",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.1.0",
      "aurelia-loader": "npm:aurelia-loader@1.0.0",
      "aurelia-logging": "npm:aurelia-logging@1.4.0",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.1",
      "aurelia-pal": "npm:aurelia-pal@1.0.0",
      "aurelia-path": "npm:aurelia-path@1.1.1",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.1.0",
      "aurelia-templating": "npm:aurelia-templating@1.1.1"
    },
    "npm:aurelia-history-browser@1.0.0": {
      "aurelia-history": "npm:aurelia-history@1.0.0",
      "aurelia-pal": "npm:aurelia-pal@1.0.0"
    },
    "npm:aurelia-loader-default@1.0.0": {
      "aurelia-loader": "npm:aurelia-loader@1.0.0",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.1",
      "aurelia-pal": "npm:aurelia-pal@1.0.0"
    },
    "npm:aurelia-loader@1.0.0": {
      "aurelia-metadata": "npm:aurelia-metadata@1.0.1",
      "aurelia-path": "npm:aurelia-path@1.1.1"
    },
    "npm:aurelia-logging-console@1.0.0": {
      "aurelia-logging": "npm:aurelia-logging@1.4.0"
    },
    "npm:aurelia-metadata@1.0.1": {
      "aurelia-pal": "npm:aurelia-pal@1.0.0"
    },
    "npm:aurelia-pal-browser@1.0.0": {
      "aurelia-pal": "npm:aurelia-pal@1.0.0"
    },
    "npm:aurelia-polyfills@1.1.1": {
      "aurelia-pal": "npm:aurelia-pal@1.0.0"
    },
    "npm:aurelia-route-recognizer@1.1.0": {
      "aurelia-path": "npm:aurelia-path@1.1.1"
    },
    "npm:aurelia-router@1.0.6": {
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.1.0",
      "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.1",
      "aurelia-history": "npm:aurelia-history@1.0.0",
      "aurelia-logging": "npm:aurelia-logging@1.4.0",
      "aurelia-path": "npm:aurelia-path@1.1.1",
      "aurelia-route-recognizer": "npm:aurelia-route-recognizer@1.1.0"
    },
    "npm:aurelia-task-queue@1.1.0": {
      "aurelia-pal": "npm:aurelia-pal@1.0.0"
    },
    "npm:aurelia-templating-binding@1.0.0": {
      "aurelia-binding": "npm:aurelia-binding@1.0.9",
      "aurelia-logging": "npm:aurelia-logging@1.4.0",
      "aurelia-templating": "npm:aurelia-templating@1.1.1"
    },
    "npm:aurelia-templating-resources@1.1.1": {
      "aurelia-binding": "npm:aurelia-binding@1.0.9",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.1.0",
      "aurelia-loader": "npm:aurelia-loader@1.0.0",
      "aurelia-logging": "npm:aurelia-logging@1.4.0",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.1",
      "aurelia-pal": "npm:aurelia-pal@1.0.0",
      "aurelia-path": "npm:aurelia-path@1.1.1",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.1.0",
      "aurelia-templating": "npm:aurelia-templating@1.1.1"
    },
    "npm:aurelia-templating-router@1.0.0": {
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.1.0",
      "aurelia-logging": "npm:aurelia-logging@1.4.0",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.1",
      "aurelia-pal": "npm:aurelia-pal@1.0.0",
      "aurelia-path": "npm:aurelia-path@1.1.1",
      "aurelia-router": "npm:aurelia-router@1.0.6",
      "aurelia-templating": "npm:aurelia-templating@1.1.1"
    },
    "npm:aurelia-templating@1.1.1": {
      "aurelia-binding": "npm:aurelia-binding@1.0.9",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.1.0",
      "aurelia-loader": "npm:aurelia-loader@1.0.0",
      "aurelia-logging": "npm:aurelia-logging@1.4.0",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.1",
      "aurelia-pal": "npm:aurelia-pal@1.0.0",
      "aurelia-path": "npm:aurelia-path@1.1.1",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.1.0"
    },
    "npm:bluebird@3.4.1": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:bootstrap@4.1.0": {
      "jquery": "npm:jquery@3.3.1",
      "tether": "npm:tether@1.4.4"
    },
    "npm:buffer@5.1.0": {
      "base64-js": "npm:base64-js@1.3.0",
      "ieee754": "npm:ieee754@1.1.11"
    },
    "npm:codemirror@5.36.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:core-util-is@1.0.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1"
    },
    "npm:d3-brush@1.0.1": {
      "d3-dispatch": "npm:d3-dispatch@1.0.0",
      "d3-drag": "npm:d3-drag@1.0.0",
      "d3-interpolate": "npm:d3-interpolate@1.1.0",
      "d3-selection": "npm:d3-selection@1.0.0",
      "d3-transition": "npm:d3-transition@1.0.0"
    },
    "npm:d3-chord@1.0.0": {
      "d3-array": "npm:d3-array@1.0.0",
      "d3-path": "npm:d3-path@1.0.0"
    },
    "npm:d3-drag@1.0.0": {
      "d3-dispatch": "npm:d3-dispatch@1.0.0",
      "d3-selection": "npm:d3-selection@1.0.0"
    },
    "npm:d3-dsv@1.0.0": {
      "rw": "npm:rw@1.3.3"
    },
    "npm:d3-force@1.0.0": {
      "d3-collection": "npm:d3-collection@1.0.0",
      "d3-dispatch": "npm:d3-dispatch@1.0.0",
      "d3-quadtree": "npm:d3-quadtree@1.0.0",
      "d3-timer": "npm:d3-timer@1.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:d3-geo@1.1.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "d3-array": "npm:d3-array@1.0.0"
    },
    "npm:d3-interpolate@1.1.0": {
      "d3-color": "npm:d3-color@1.0.0"
    },
    "npm:d3-request@1.0.1": {
      "d3-collection": "npm:d3-collection@1.0.0",
      "d3-dispatch": "npm:d3-dispatch@1.0.0",
      "d3-dsv": "npm:d3-dsv@1.0.0",
      "xmlhttprequest": "npm:xmlhttprequest@1.8.0"
    },
    "npm:d3-scale@1.0.1": {
      "d3-array": "npm:d3-array@1.0.0",
      "d3-collection": "npm:d3-collection@1.0.0",
      "d3-color": "npm:d3-color@1.0.0",
      "d3-format": "npm:d3-format@1.0.0",
      "d3-interpolate": "npm:d3-interpolate@1.1.0",
      "d3-time": "npm:d3-time@1.0.0",
      "d3-time-format": "npm:d3-time-format@2.0.0"
    },
    "npm:d3-shape@1.0.0": {
      "d3-path": "npm:d3-path@1.0.0"
    },
    "npm:d3-time-format@2.0.0": {
      "d3-time": "npm:d3-time@1.0.0"
    },
    "npm:d3-transition@1.0.0": {
      "d3-color": "npm:d3-color@1.0.0",
      "d3-dispatch": "npm:d3-dispatch@1.0.0",
      "d3-ease": "npm:d3-ease@1.0.0",
      "d3-interpolate": "npm:d3-interpolate@1.1.0",
      "d3-selection": "npm:d3-selection@1.0.0",
      "d3-timer": "npm:d3-timer@1.0.1"
    },
    "npm:d3-zoom@1.0.2": {
      "d3-dispatch": "npm:d3-dispatch@1.0.0",
      "d3-drag": "npm:d3-drag@1.0.0",
      "d3-interpolate": "npm:d3-interpolate@1.1.0",
      "d3-selection": "npm:d3-selection@1.0.0",
      "d3-transition": "npm:d3-transition@1.0.0"
    },
    "npm:d3@4.1.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "d3-array": "npm:d3-array@1.0.0",
      "d3-axis": "npm:d3-axis@1.0.0",
      "d3-brush": "npm:d3-brush@1.0.1",
      "d3-chord": "npm:d3-chord@1.0.0",
      "d3-collection": "npm:d3-collection@1.0.0",
      "d3-color": "npm:d3-color@1.0.0",
      "d3-dispatch": "npm:d3-dispatch@1.0.0",
      "d3-drag": "npm:d3-drag@1.0.0",
      "d3-dsv": "npm:d3-dsv@1.0.0",
      "d3-ease": "npm:d3-ease@1.0.0",
      "d3-force": "npm:d3-force@1.0.0",
      "d3-format": "npm:d3-format@1.0.0",
      "d3-geo": "npm:d3-geo@1.1.1",
      "d3-hierarchy": "npm:d3-hierarchy@1.0.0",
      "d3-interpolate": "npm:d3-interpolate@1.1.0",
      "d3-path": "npm:d3-path@1.0.0",
      "d3-polygon": "npm:d3-polygon@1.0.0",
      "d3-quadtree": "npm:d3-quadtree@1.0.0",
      "d3-queue": "npm:d3-queue@3.0.1",
      "d3-random": "npm:d3-random@1.0.0",
      "d3-request": "npm:d3-request@1.0.1",
      "d3-scale": "npm:d3-scale@1.0.1",
      "d3-selection": "npm:d3-selection@1.0.0",
      "d3-shape": "npm:d3-shape@1.0.0",
      "d3-time": "npm:d3-time@1.0.0",
      "d3-time-format": "npm:d3-time-format@2.0.0",
      "d3-timer": "npm:d3-timer@1.0.1",
      "d3-transition": "npm:d3-transition@1.0.0",
      "d3-voronoi": "npm:d3-voronoi@1.0.1",
      "d3-zoom": "npm:d3-zoom@1.0.2",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:d@1.0.0": {
      "es5-ext": "npm:es5-ext@0.10.42"
    },
    "npm:es5-ext@0.10.42": {
      "es6-iterator": "npm:es6-iterator@2.0.3",
      "es6-symbol": "npm:es6-symbol@3.1.1",
      "next-tick": "npm:next-tick@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:es6-iterator@2.0.3": {
      "d": "npm:d@1.0.0",
      "es5-ext": "npm:es5-ext@0.10.42",
      "es6-symbol": "npm:es6-symbol@3.1.1"
    },
    "npm:es6-map@0.1.5": {
      "d": "npm:d@1.0.0",
      "es5-ext": "npm:es5-ext@0.10.42",
      "es6-iterator": "npm:es6-iterator@2.0.3",
      "es6-set": "npm:es6-set@0.1.5",
      "es6-symbol": "npm:es6-symbol@3.1.1",
      "event-emitter": "npm:event-emitter@0.3.5"
    },
    "npm:es6-set@0.1.5": {
      "d": "npm:d@1.0.0",
      "es5-ext": "npm:es5-ext@0.10.42",
      "es6-iterator": "npm:es6-iterator@2.0.3",
      "es6-symbol": "npm:es6-symbol@3.1.1",
      "event-emitter": "npm:event-emitter@0.3.5"
    },
    "npm:es6-symbol@3.1.1": {
      "d": "npm:d@1.0.0",
      "es5-ext": "npm:es5-ext@0.10.42"
    },
    "npm:es6-weak-map@2.0.2": {
      "d": "npm:d@1.0.0",
      "es5-ext": "npm:es5-ext@0.10.42",
      "es6-iterator": "npm:es6-iterator@2.0.3",
      "es6-symbol": "npm:es6-symbol@3.1.1"
    },
    "npm:escodegen@1.9.1": {
      "esprima": "npm:esprima@3.1.3",
      "estraverse": "npm:estraverse@4.2.0",
      "esutils": "npm:esutils@2.0.2",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "optionator": "npm:optionator@0.8.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "source-map": "npm:source-map@0.6.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:escope@3.6.0": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "es6-map": "npm:es6-map@0.1.5",
      "es6-weak-map": "npm:es6-weak-map@2.0.2",
      "esrecurse": "npm:esrecurse@4.2.1",
      "estraverse": "npm:estraverse@4.2.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:esprima@3.1.3": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:esprima@4.0.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:esrecurse@4.2.1": {
      "estraverse": "npm:estraverse@4.2.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:estraverse@4.2.0": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:event-emitter@0.3.5": {
      "d": "npm:d@1.0.0",
      "es5-ext": "npm:es5-ext@0.10.42",
      "events": "github:jspm/nodelibs-events@0.1.1"
    },
    "npm:font-awesome@4.6.3": {
      "css": "github:systemjs/plugin-css@0.1.37"
    },
    "npm:fullpage.js@2.9.7": {
      "jquery": "npm:jquery@3.3.1"
    },
    "npm:https-browserify@0.0.0": {
      "http": "github:jspm/nodelibs-http@1.7.1"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:levn@0.3.0": {
      "prelude-ls": "npm:prelude-ls@1.1.2",
      "type-check": "npm:type-check@0.3.2"
    },
    "npm:next-tick@1.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:optionator@0.8.2": {
      "deep-is": "npm:deep-is@0.1.3",
      "fast-levenshtein": "npm:fast-levenshtein@2.0.6",
      "levn": "npm:levn@0.3.0",
      "prelude-ls": "npm:prelude-ls@1.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "type-check": "npm:type-check@0.3.2",
      "wordwrap": "npm:wordwrap@1.0.0"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:process@0.11.10": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:punycode@1.3.2": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:readable-stream@1.1.14": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "core-util-is": "npm:core-util-is@1.0.2",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "isarray": "npm:isarray@0.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream-browserify": "npm:stream-browserify@1.0.0",
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "npm:rw@1.3.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:source-map@0.6.1": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:stream-browserify@1.0.0": {
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "readable-stream": "npm:readable-stream@1.1.14"
    },
    "npm:string_decoder@0.10.31": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1"
    },
    "npm:tether@1.4.4": {
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:type-check@0.3.2": {
      "prelude-ls": "npm:prelude-ls@1.1.2"
    },
    "npm:url@0.10.3": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "punycode": "npm:punycode@1.3.2",
      "querystring": "npm:querystring@0.2.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:vm-browserify@0.0.4": {
      "indexof": "npm:indexof@0.0.1"
    },
    "npm:xmlhttprequest@1.8.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "https": "github:jspm/nodelibs-https@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "url": "github:jspm/nodelibs-url@0.1.0"
    }
  },
  depCache: {
    "data_manager.js": [
      "../data/01_people_cant.csv!text",
      "../data/02_marriges_cant.csv!text",
      "../data/03_children_cant.csv!text",
      "../data/04_cant.csv!text",
      "d3"
    ],
    "FORCEDIRECTED.js": [
      "THREE"
    ],
    "main.js": [
      "bootstrap",
      "bootstrap/dist/css/bootstrap.min.css!"
    ],
    "view_05.js": [
      "d3",
      "./data_manager.js",
      "./helpers.js"
    ],
    "github:systemjs/plugin-json@0.3.0.js": [
      "github:systemjs/plugin-json@0.3.0/json"
    ],
    "github:systemjs/plugin-text@0.0.8.js": [
      "github:systemjs/plugin-text@0.0.8/text"
    ],
    "github:systemjs/plugin-css@0.1.37.js": [
      "github:systemjs/plugin-css@0.1.37/css"
    ],
    "npm:jquery@3.3.1.js": [
      "npm:jquery@3.3.1/dist/jquery.js"
    ],
    "npm:bootstrap@4.1.0.js": [
      "npm:bootstrap@4.1.0/dist/js/bootstrap"
    ],
    "npm:bootstrap@4.1.0/dist/js/bootstrap.js": [
      "jquery",
      "tether"
    ],
    "npm:tether@1.4.4.js": [
      "npm:tether@1.4.4/dist/js/tether.js"
    ],
    "npm:d3@4.1.1.js": [
      "npm:d3@4.1.1/build/d3.js"
    ],
    "npm:d3@4.1.1/build/d3.js": [
      "buffer",
      "process"
    ],
    "github:jspm/nodelibs-buffer@0.1.1.js": [
      "github:jspm/nodelibs-buffer@0.1.1/index"
    ],
    "github:jspm/nodelibs-process@0.1.2.js": [
      "github:jspm/nodelibs-process@0.1.2/index"
    ],
    "github:jspm/nodelibs-process@0.1.2/index.js": [
      "process"
    ],
    "github:jspm/nodelibs-buffer@0.1.1/index.js": [
      "buffer"
    ],
    "npm:process@0.11.10.js": [
      "npm:process@0.11.10/browser.js"
    ],
    "npm:buffer@5.1.0.js": [
      "npm:buffer@5.1.0/index.js"
    ],
    "npm:buffer@5.1.0/index.js": [
      "base64-js",
      "ieee754"
    ],
    "npm:ieee754@1.1.11.js": [
      "npm:ieee754@1.1.11/index.js"
    ],
    "npm:base64-js@1.3.0.js": [
      "npm:base64-js@1.3.0/index.js"
    ],
    "npm:aurelia-logging-console@1.0.0.js": [
      "npm:aurelia-logging-console@1.0.0/aurelia-logging-console"
    ],
    "npm:aurelia-logging-console@1.0.0/aurelia-logging-console.js": [
      "aurelia-logging"
    ],
    "npm:aurelia-logging@1.4.0.js": [
      "npm:aurelia-logging@1.4.0/aurelia-logging"
    ],
    "npm:aurelia-history-browser@1.0.0.js": [
      "npm:aurelia-history-browser@1.0.0/aurelia-history-browser"
    ],
    "npm:aurelia-history-browser@1.0.0/aurelia-history-browser.js": [
      "aurelia-pal",
      "aurelia-history"
    ],
    "npm:aurelia-pal@1.0.0.js": [
      "npm:aurelia-pal@1.0.0/aurelia-pal"
    ],
    "npm:aurelia-history@1.0.0.js": [
      "npm:aurelia-history@1.0.0/aurelia-history"
    ],
    "npm:aurelia-loader-default@1.0.0.js": [
      "npm:aurelia-loader-default@1.0.0/aurelia-loader-default"
    ],
    "npm:aurelia-loader-default@1.0.0/aurelia-loader-default.js": [
      "aurelia-loader",
      "aurelia-pal",
      "aurelia-metadata"
    ],
    "npm:aurelia-loader@1.0.0.js": [
      "npm:aurelia-loader@1.0.0/aurelia-loader"
    ],
    "npm:aurelia-metadata@1.0.1.js": [
      "npm:aurelia-metadata@1.0.1/aurelia-metadata"
    ],
    "npm:aurelia-loader@1.0.0/aurelia-loader.js": [
      "aurelia-path",
      "aurelia-metadata"
    ],
    "npm:aurelia-metadata@1.0.1/aurelia-metadata.js": [
      "aurelia-pal"
    ],
    "npm:aurelia-path@1.1.1.js": [
      "npm:aurelia-path@1.1.1/aurelia-path"
    ],
    "npm:aurelia-templating-router@1.0.0.js": [
      "npm:aurelia-templating-router@1.0.0/aurelia-templating-router"
    ],
    "npm:aurelia-templating-router@1.0.0/aurelia-templating-router.js": [
      "aurelia-router",
      "./route-loader",
      "./router-view",
      "./route-href"
    ],
    "npm:aurelia-router@1.0.6.js": [
      "npm:aurelia-router@1.0.6/aurelia-router"
    ],
    "npm:aurelia-router@1.0.6/aurelia-router.js": [
      "aurelia-logging",
      "aurelia-route-recognizer",
      "aurelia-dependency-injection",
      "aurelia-history",
      "aurelia-event-aggregator"
    ],
    "npm:aurelia-route-recognizer@1.1.0.js": [
      "npm:aurelia-route-recognizer@1.1.0/aurelia-route-recognizer"
    ],
    "npm:aurelia-dependency-injection@1.1.0.js": [
      "npm:aurelia-dependency-injection@1.1.0/aurelia-dependency-injection"
    ],
    "npm:aurelia-event-aggregator@1.0.1.js": [
      "npm:aurelia-event-aggregator@1.0.1/aurelia-event-aggregator"
    ],
    "npm:aurelia-route-recognizer@1.1.0/aurelia-route-recognizer.js": [
      "aurelia-path"
    ],
    "npm:aurelia-dependency-injection@1.1.0/aurelia-dependency-injection.js": [
      "aurelia-metadata",
      "aurelia-pal"
    ],
    "npm:aurelia-event-aggregator@1.0.1/aurelia-event-aggregator.js": [
      "aurelia-logging"
    ],
    "npm:aurelia-templating-router@1.0.0/route-loader.js": [
      "aurelia-dependency-injection",
      "aurelia-templating",
      "aurelia-router",
      "aurelia-path",
      "aurelia-metadata"
    ],
    "npm:aurelia-templating@1.1.1.js": [
      "npm:aurelia-templating@1.1.1/aurelia-templating"
    ],
    "npm:aurelia-templating@1.1.1/aurelia-templating.js": [
      "aurelia-logging",
      "aurelia-metadata",
      "aurelia-pal",
      "aurelia-path",
      "aurelia-loader",
      "aurelia-dependency-injection",
      "aurelia-binding",
      "aurelia-task-queue"
    ],
    "npm:aurelia-binding@1.0.9.js": [
      "npm:aurelia-binding@1.0.9/aurelia-binding"
    ],
    "npm:aurelia-task-queue@1.1.0.js": [
      "npm:aurelia-task-queue@1.1.0/aurelia-task-queue"
    ],
    "npm:aurelia-binding@1.0.9/aurelia-binding.js": [
      "aurelia-logging",
      "aurelia-pal",
      "aurelia-task-queue",
      "aurelia-metadata"
    ],
    "npm:aurelia-task-queue@1.1.0/aurelia-task-queue.js": [
      "aurelia-pal"
    ],
    "npm:aurelia-templating-router@1.0.0/route-href.js": [
      "aurelia-templating",
      "aurelia-dependency-injection",
      "aurelia-router",
      "aurelia-pal",
      "aurelia-logging"
    ],
    "npm:aurelia-templating-router@1.0.0/router-view.js": [
      "aurelia-dependency-injection",
      "aurelia-templating",
      "aurelia-router",
      "aurelia-metadata",
      "aurelia-pal"
    ],
    "npm:aurelia-templating-resources@1.1.1.js": [
      "npm:aurelia-templating-resources@1.1.1/aurelia-templating-resources"
    ],
    "npm:aurelia-templating-resources@1.1.1/aurelia-templating-resources.js": [
      "./compose",
      "./if",
      "./with",
      "./repeat",
      "./show",
      "./hide",
      "./sanitize-html",
      "./replaceable",
      "./focus",
      "aurelia-templating",
      "./css-resource",
      "./html-sanitizer",
      "./attr-binding-behavior",
      "./binding-mode-behaviors",
      "./throttle-binding-behavior",
      "./debounce-binding-behavior",
      "./signal-binding-behavior",
      "./binding-signaler",
      "./update-trigger-binding-behavior",
      "./abstract-repeater",
      "./repeat-strategy-locator",
      "./html-resource-plugin",
      "./null-repeat-strategy",
      "./array-repeat-strategy",
      "./map-repeat-strategy",
      "./set-repeat-strategy",
      "./number-repeat-strategy",
      "./repeat-utilities",
      "./analyze-view-factory",
      "./aurelia-hide-style"
    ],
    "npm:aurelia-templating-resources@1.1.1/signal-binding-behavior.js": [
      "./binding-signaler"
    ],
    "npm:aurelia-templating-resources@1.1.1/repeat-strategy-locator.js": [
      "./null-repeat-strategy",
      "./array-repeat-strategy",
      "./map-repeat-strategy",
      "./set-repeat-strategy",
      "./number-repeat-strategy"
    ],
    "npm:aurelia-templating-resources@1.1.1/map-repeat-strategy.js": [
      "./repeat-utilities"
    ],
    "npm:aurelia-templating-resources@1.1.1/compose.js": [
      "aurelia-dependency-injection",
      "aurelia-task-queue",
      "aurelia-templating",
      "aurelia-pal"
    ],
    "npm:aurelia-templating-resources@1.1.1/if.js": [
      "aurelia-templating",
      "aurelia-dependency-injection"
    ],
    "npm:aurelia-templating-resources@1.1.1/with.js": [
      "aurelia-dependency-injection",
      "aurelia-templating",
      "aurelia-binding"
    ],
    "npm:aurelia-templating-resources@1.1.1/replaceable.js": [
      "aurelia-dependency-injection",
      "aurelia-templating"
    ],
    "npm:aurelia-templating-resources@1.1.1/show.js": [
      "aurelia-dependency-injection",
      "aurelia-templating",
      "aurelia-pal",
      "./aurelia-hide-style"
    ],
    "npm:aurelia-templating-resources@1.1.1/hide.js": [
      "aurelia-dependency-injection",
      "aurelia-templating",
      "aurelia-pal",
      "./aurelia-hide-style"
    ],
    "npm:aurelia-templating-resources@1.1.1/css-resource.js": [
      "aurelia-templating",
      "aurelia-loader",
      "aurelia-dependency-injection",
      "aurelia-path",
      "aurelia-pal"
    ],
    "npm:aurelia-templating-resources@1.1.1/sanitize-html.js": [
      "aurelia-binding",
      "aurelia-dependency-injection",
      "./html-sanitizer"
    ],
    "npm:aurelia-templating-resources@1.1.1/attr-binding-behavior.js": [
      "aurelia-binding"
    ],
    "npm:aurelia-templating-resources@1.1.1/focus.js": [
      "aurelia-templating",
      "aurelia-binding",
      "aurelia-dependency-injection",
      "aurelia-task-queue",
      "aurelia-pal"
    ],
    "npm:aurelia-templating-resources@1.1.1/binding-mode-behaviors.js": [
      "aurelia-binding",
      "aurelia-metadata"
    ],
    "npm:aurelia-templating-resources@1.1.1/debounce-binding-behavior.js": [
      "aurelia-binding"
    ],
    "npm:aurelia-templating-resources@1.1.1/throttle-binding-behavior.js": [
      "aurelia-binding"
    ],
    "npm:aurelia-templating-resources@1.1.1/binding-signaler.js": [
      "aurelia-binding"
    ],
    "npm:aurelia-templating-resources@1.1.1/update-trigger-binding-behavior.js": [
      "aurelia-binding"
    ],
    "npm:aurelia-templating-resources@1.1.1/html-resource-plugin.js": [
      "aurelia-templating",
      "./dynamic-element"
    ],
    "npm:aurelia-templating-resources@1.1.1/number-repeat-strategy.js": [
      "./repeat-utilities"
    ],
    "npm:aurelia-templating-resources@1.1.1/set-repeat-strategy.js": [
      "./repeat-utilities"
    ],
    "npm:aurelia-templating-resources@1.1.1/aurelia-hide-style.js": [
      "aurelia-pal"
    ],
    "npm:aurelia-templating-resources@1.1.1/repeat-utilities.js": [
      "aurelia-binding"
    ],
    "npm:aurelia-templating-resources@1.1.1/repeat.js": [
      "aurelia-dependency-injection",
      "aurelia-binding",
      "aurelia-templating",
      "./repeat-strategy-locator",
      "./repeat-utilities",
      "./analyze-view-factory",
      "./abstract-repeater"
    ],
    "npm:aurelia-templating-resources@1.1.1/array-repeat-strategy.js": [
      "./repeat-utilities",
      "aurelia-binding"
    ],
    "npm:aurelia-templating-resources@1.1.1/dynamic-element.js": [
      "aurelia-templating"
    ],
    "npm:aurelia-polyfills@1.1.1.js": [
      "npm:aurelia-polyfills@1.1.1/aurelia-polyfills"
    ],
    "npm:aurelia-polyfills@1.1.1/aurelia-polyfills.js": [
      "aurelia-pal"
    ],
    "npm:aurelia-templating-binding@1.0.0.js": [
      "npm:aurelia-templating-binding@1.0.0/aurelia-templating-binding"
    ],
    "npm:aurelia-templating-binding@1.0.0/aurelia-templating-binding.js": [
      "aurelia-logging",
      "aurelia-binding",
      "aurelia-templating"
    ],
    "npm:aurelia-animator-css@1.0.1.js": [
      "npm:aurelia-animator-css@1.0.1/aurelia-animator-css"
    ],
    "npm:aurelia-animator-css@1.0.1/aurelia-animator-css.js": [
      "aurelia-templating",
      "aurelia-pal"
    ],
    "npm:aurelia-fetch-client@1.3.1.js": [
      "npm:aurelia-fetch-client@1.3.1/aurelia-fetch-client"
    ],
    "npm:aurelia-bootstrapper@1.0.0.js": [
      "npm:aurelia-bootstrapper@1.0.0/aurelia-bootstrapper"
    ],
    "npm:aurelia-bootstrapper@1.0.0/aurelia-bootstrapper.js": [
      "aurelia-pal",
      "aurelia-pal-browser",
      "aurelia-polyfills"
    ],
    "npm:aurelia-pal-browser@1.0.0.js": [
      "npm:aurelia-pal-browser@1.0.0/aurelia-pal-browser"
    ],
    "npm:aurelia-pal-browser@1.0.0/aurelia-pal-browser.js": [
      "aurelia-pal"
    ],
    "npm:aurelia-framework@1.0.6.js": [
      "npm:aurelia-framework@1.0.6/aurelia-framework"
    ],
    "npm:aurelia-framework@1.0.6/aurelia-framework.js": [
      "aurelia-dependency-injection",
      "aurelia-binding",
      "aurelia-metadata",
      "aurelia-templating",
      "aurelia-loader",
      "aurelia-task-queue",
      "aurelia-path",
      "aurelia-pal",
      "aurelia-logging"
    ]
  },
  bundles: {
    "app-build-a67bc1b7d0.js": [
      "FORCEDIRECTED.js",
      "app.html!github:systemjs/plugin-text@0.0.8.js",
      "app.js",
      "data_manager.js",
      "helpers.js",
      "main.js",
      "view_05.html!github:systemjs/plugin-text@0.0.8.js",
      "view_05.js"
    ],
    "thirdParty-9d5b11833c.js": [
      "github:jspm/nodelibs-buffer@0.1.1.js",
      "github:jspm/nodelibs-buffer@0.1.1/index.js",
      "github:jspm/nodelibs-process@0.1.2.js",
      "github:jspm/nodelibs-process@0.1.2/index.js",
      "github:systemjs/plugin-css@0.1.37.js",
      "github:systemjs/plugin-css@0.1.37/css.js",
      "github:systemjs/plugin-json@0.3.0.js",
      "github:systemjs/plugin-json@0.3.0/json.js",
      "github:systemjs/plugin-text@0.0.8.js",
      "github:systemjs/plugin-text@0.0.8/text.js",
      "npm:base64-js@1.3.0.js",
      "npm:base64-js@1.3.0/index.js",
      "npm:bootstrap@4.1.0.js",
      "npm:bootstrap@4.1.0/dist/js/bootstrap.js",
      "npm:buffer@5.1.0.js",
      "npm:buffer@5.1.0/index.js",
      "npm:d3@4.1.1.js",
      "npm:d3@4.1.1/build/d3.js",
      "npm:ieee754@1.1.11.js",
      "npm:ieee754@1.1.11/index.js",
      "npm:jquery@3.3.1.js",
      "npm:jquery@3.3.1/dist/jquery.js",
      "npm:process@0.11.10.js",
      "npm:process@0.11.10/browser.js",
      "npm:tether@1.4.4.js",
      "npm:tether@1.4.4/dist/js/tether.js"
    ],
    "aurelia-906518ce68.js": [
      "npm:aurelia-animator-css@1.0.1.js",
      "npm:aurelia-animator-css@1.0.1/aurelia-animator-css.js",
      "npm:aurelia-binding@1.0.9.js",
      "npm:aurelia-binding@1.0.9/aurelia-binding.js",
      "npm:aurelia-bootstrapper@1.0.0.js",
      "npm:aurelia-bootstrapper@1.0.0/aurelia-bootstrapper.js",
      "npm:aurelia-dependency-injection@1.1.0.js",
      "npm:aurelia-dependency-injection@1.1.0/aurelia-dependency-injection.js",
      "npm:aurelia-event-aggregator@1.0.1.js",
      "npm:aurelia-event-aggregator@1.0.1/aurelia-event-aggregator.js",
      "npm:aurelia-fetch-client@1.3.1.js",
      "npm:aurelia-fetch-client@1.3.1/aurelia-fetch-client.js",
      "npm:aurelia-framework@1.0.6.js",
      "npm:aurelia-framework@1.0.6/aurelia-framework.js",
      "npm:aurelia-history-browser@1.0.0.js",
      "npm:aurelia-history-browser@1.0.0/aurelia-history-browser.js",
      "npm:aurelia-history@1.0.0.js",
      "npm:aurelia-history@1.0.0/aurelia-history.js",
      "npm:aurelia-loader-default@1.0.0.js",
      "npm:aurelia-loader-default@1.0.0/aurelia-loader-default.js",
      "npm:aurelia-loader@1.0.0.js",
      "npm:aurelia-loader@1.0.0/aurelia-loader.js",
      "npm:aurelia-logging-console@1.0.0.js",
      "npm:aurelia-logging-console@1.0.0/aurelia-logging-console.js",
      "npm:aurelia-logging@1.4.0.js",
      "npm:aurelia-logging@1.4.0/aurelia-logging.js",
      "npm:aurelia-metadata@1.0.1.js",
      "npm:aurelia-metadata@1.0.1/aurelia-metadata.js",
      "npm:aurelia-pal-browser@1.0.0.js",
      "npm:aurelia-pal-browser@1.0.0/aurelia-pal-browser.js",
      "npm:aurelia-pal@1.0.0.js",
      "npm:aurelia-pal@1.0.0/aurelia-pal.js",
      "npm:aurelia-path@1.1.1.js",
      "npm:aurelia-path@1.1.1/aurelia-path.js",
      "npm:aurelia-polyfills@1.1.1.js",
      "npm:aurelia-polyfills@1.1.1/aurelia-polyfills.js",
      "npm:aurelia-route-recognizer@1.1.0.js",
      "npm:aurelia-route-recognizer@1.1.0/aurelia-route-recognizer.js",
      "npm:aurelia-router@1.0.6.js",
      "npm:aurelia-router@1.0.6/aurelia-router.js",
      "npm:aurelia-task-queue@1.1.0.js",
      "npm:aurelia-task-queue@1.1.0/aurelia-task-queue.js",
      "npm:aurelia-templating-binding@1.0.0.js",
      "npm:aurelia-templating-binding@1.0.0/aurelia-templating-binding.js",
      "npm:aurelia-templating-resources@1.1.1.js",
      "npm:aurelia-templating-resources@1.1.1/abstract-repeater.js",
      "npm:aurelia-templating-resources@1.1.1/analyze-view-factory.js",
      "npm:aurelia-templating-resources@1.1.1/array-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.1.1/attr-binding-behavior.js",
      "npm:aurelia-templating-resources@1.1.1/aurelia-hide-style.js",
      "npm:aurelia-templating-resources@1.1.1/aurelia-templating-resources.js",
      "npm:aurelia-templating-resources@1.1.1/binding-mode-behaviors.js",
      "npm:aurelia-templating-resources@1.1.1/binding-signaler.js",
      "npm:aurelia-templating-resources@1.1.1/compose.js",
      "npm:aurelia-templating-resources@1.1.1/css-resource.js",
      "npm:aurelia-templating-resources@1.1.1/debounce-binding-behavior.js",
      "npm:aurelia-templating-resources@1.1.1/dynamic-element.js",
      "npm:aurelia-templating-resources@1.1.1/focus.js",
      "npm:aurelia-templating-resources@1.1.1/hide.js",
      "npm:aurelia-templating-resources@1.1.1/html-resource-plugin.js",
      "npm:aurelia-templating-resources@1.1.1/html-sanitizer.js",
      "npm:aurelia-templating-resources@1.1.1/if.js",
      "npm:aurelia-templating-resources@1.1.1/map-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.1.1/null-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.1.1/number-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.1.1/repeat-strategy-locator.js",
      "npm:aurelia-templating-resources@1.1.1/repeat-utilities.js",
      "npm:aurelia-templating-resources@1.1.1/repeat.js",
      "npm:aurelia-templating-resources@1.1.1/replaceable.js",
      "npm:aurelia-templating-resources@1.1.1/sanitize-html.js",
      "npm:aurelia-templating-resources@1.1.1/set-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.1.1/show.js",
      "npm:aurelia-templating-resources@1.1.1/signal-binding-behavior.js",
      "npm:aurelia-templating-resources@1.1.1/throttle-binding-behavior.js",
      "npm:aurelia-templating-resources@1.1.1/update-trigger-binding-behavior.js",
      "npm:aurelia-templating-resources@1.1.1/with.js",
      "npm:aurelia-templating-router@1.0.0.js",
      "npm:aurelia-templating-router@1.0.0/aurelia-templating-router.js",
      "npm:aurelia-templating-router@1.0.0/route-href.js",
      "npm:aurelia-templating-router@1.0.0/route-loader.js",
      "npm:aurelia-templating-router@1.0.0/router-view.js",
      "npm:aurelia-templating@1.1.1.js",
      "npm:aurelia-templating@1.1.1/aurelia-templating.js"
    ]
  }
});