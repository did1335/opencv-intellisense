// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

//import module
import * as comp from './completion';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "opencv-intellisense" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('extension.cvintellisense', () => {
		// The code you place here will be executed every time your command is executed

		// Display a message box to the user
		vscode.window.showInformationMessage('Welcome to OpenCV Intellisense');
		//Display Status Bar Msg to the user
		vscode.window.setStatusBarMessage('OpenCV Extension Started');
	});

	//subscription	
	context.subscriptions.push(disposable,comp.provider1,comp.provider2,comp.provider3,
		comp.provider4,comp.provider5,comp.provider6,comp.provider7,comp.provider8,
		comp.provider9,comp.provider10,comp.provider11,comp.provider12,comp.provider13,
		comp.provider14);
}


// this method is called when your extension is deactivated
export function deactivate() {}
