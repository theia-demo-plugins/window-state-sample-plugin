import * as theia from '@wiptheia/plugin';
const disposables: theia.Disposable[] = [];

export function start() {
    console.log('>>> Loading sample window state plugin');

    const showStateCommand: theia.Command = {
        id: 'show-window-state',
        label: 'Window State'
    };
    disposables.push(
        theia.commands.registerCommand(showStateCommand, (...args: any[]) => {
            console.log('>>> Window state: ', theia.window.state);
        })
    );

    const showStateWithDelayCommand: theia.Command = {
        id: 'show-window-state-delayed',
        label: 'Window State After 2.5 seconds'
    };
    disposables.push(
        theia.commands.registerCommand(showStateWithDelayCommand, (...args: any[]) => {
            setTimeout(() => console.log('>>> Window state: ', theia.window.state), 2500);
        })
    );

    disposables.push(
        theia.window.onDidChangeWindowState((windowState: theia.WindowState) => {
            console.log('>>> Focus: ', windowState.focused);
        })
    );

    console.log('>>> Window state plugin has been loaded.');
}

export function stop(api: typeof theia) {
    while (disposables.length) {
        const disposable = disposables.pop();
        if (disposable) {
            disposable.dispose();
        }
    }
}
