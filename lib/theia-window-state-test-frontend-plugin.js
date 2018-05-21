"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var theia = require("@wiptheia/plugin");
var disposables = [];
function start() {
    console.log('>>> Loading sample window state plugin');
    var showStateCommand = {
        id: 'show-window-state',
        label: 'Window State'
    };
    disposables.push(theia.commands.registerCommand(showStateCommand, function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        console.log('>>> Window state: ', theia.window.state);
    }));
    var showStateWithDelayCommand = {
        id: 'show-window-state-delayed',
        label: 'Window State After 2.5 seconds'
    };
    disposables.push(theia.commands.registerCommand(showStateWithDelayCommand, function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        setTimeout(function () { return console.log('>>> Window state: ', theia.window.state); }, 2500);
    }));
    disposables.push(theia.window.onDidChangeWindowState(function (windowState) {
        console.log('>>> Focus: ', windowState.focused);
    }));
    console.log('>>> Window state plugin has been loaded.');
}
exports.start = start;
function stop(api) {
    while (disposables.length) {
        var disposable = disposables.pop();
        if (disposable) {
            disposable.dispose();
        }
    }
}
exports.stop = stop;
//# sourceMappingURL=theia-window-state-test-frontend-plugin.js.map