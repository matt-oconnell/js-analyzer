JS logger backend for Online Python Tutor runtime visualizer

First version created on: 2015-01-02 by Philip Guo
- on 2016-05-01, ported over to also work on Node v6.0.0, which supports ES6

Run as:
node --expose-debug-as=Debug jslogger.js

Usage:

# to output trace as 'var trace=<trace object>' to a JavaScript file, run:
node --expose-debug-as=Debug jslogger.js --jsfile=<path> <filename of user's script>

# to dump compact json to stdout, run:
node --expose-debug-as=Debug jslogger.js --jsondump=true <filename of user's script>

# to dump a pretty-printed version suitable for diffing and regression tests
node --expose-debug-as=Debug jslogger.js --prettydump=true <filename of user's script>

# to run with a script provided on the command line, run something like:
node --expose-debug-as=Debug jslogger.js --jsondump=true --code="<user's script>"

see v8/src/debug-debugger.js for some of the impl of the API

v8 debugger protocol:
https://code.google.com/p/v8-wiki/wiki/DebuggerProtocol


See package.json for dependencies. Right now it's very picky about
dependency versions, especially the exact versions of:

  "eval": "0.1.0" (or else line numbers don't show up on syntax errors)
  "typescript": "1.4"


From: https://code.google.com/p/v8-wiki/wiki/DebuggerProtocol
regarding the 'handle_' field of serialized objects ...

  All objects exposed through the debugger is assigned an ID called a
  handle. This handle is serialized and can be used to identify objects.
  A handle has a certain lifetime after which it will no longer refer to
  the same object. Currently the lifetime of handles match the
  processing of a debug event. For each debug event handles are
  recycled.


TODOs:

Low-priority TODOs:

- maybe directly use vm.runInContext
- realize that running within VM module leads to subtle behavioral
  differences, as documented in the Node docs

- check out PromiseEvent and AsyncTaskEvent for maybe handling callbacks?

```js
Debug.DebugEvent = {
  Break: 1,
  Exception: 2,
  NewFunction: 3,
  BeforeCompile: 4,
  AfterCompile: 5,
  CompileError: 6,
  PromiseEvent: 7,
  AsyncTaskEvent: 8,
  BreakForCommand: 9
};
```
