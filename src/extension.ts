// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

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
	});

	//Completion
	const provider1 = vscode.languages.registerCompletionItemProvider(
		'cpp',
		{
			provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {

				let linePrefix = document.lineAt(position).text.substr(0, position.character);
				if (!linePrefix.endsWith('a')) {
					return undefined;
				}

				return [
					new vscode.CompletionItem('add',vscode.CompletionItemKind.Function),
				];
			}
		},
		'.' // triggered whenever a 'a' is being typed
	);

	const provider2 = vscode.languages.registerCompletionItemProvider(
		'cpp',
		{
			provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {

				let keywords=['CvPoint','CvPoint2D32f','CvPoint3D32f',
					'CvPoint2D64f','CvPoint3D64f','CvSize','CvSize2D32f',
					'CvRect','CvBox2D','CvScalar','CvTermCriteria',
					'CvMat','CvMatND','CvSparseMat'];
				let linePrefix = document.lineAt(position).text.substr(0, position.character);
				if (!linePrefix.endsWith('C')) {
					return undefined;
				}

				return [
					new vscode.CompletionItem(keywords[0], vscode.CompletionItemKind.Class),
					new vscode.CompletionItem(keywords[1], vscode.CompletionItemKind.Class),
					new vscode.CompletionItem(keywords[2], vscode.CompletionItemKind.Class),
					new vscode.CompletionItem(keywords[3], vscode.CompletionItemKind.Class),
					new vscode.CompletionItem(keywords[4], vscode.CompletionItemKind.Class),
					new vscode.CompletionItem(keywords[5], vscode.CompletionItemKind.Class),
					new vscode.CompletionItem(keywords[6], vscode.CompletionItemKind.Class),
					new vscode.CompletionItem(keywords[7], vscode.CompletionItemKind.Class),
					new vscode.CompletionItem(keywords[8], vscode.CompletionItemKind.Class),
					new vscode.CompletionItem(keywords[9], vscode.CompletionItemKind.Class),
					new vscode.CompletionItem(keywords[10], vscode.CompletionItemKind.Class),
					new vscode.CompletionItem(keywords[11], vscode.CompletionItemKind.Class),
					new vscode.CompletionItem(keywords[12], vscode.CompletionItemKind.Class),
					new vscode.CompletionItem(keywords[13], vscode.CompletionItemKind.Class),				
				];
			}
		},
		'.' 
	);

	const provider3 = vscode.languages.registerCompletionItemProvider(
		'cpp',
		{
			provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {

				let linePrefix = document.lineAt(position).text.substr(0, position.character);
				if (!linePrefix.endsWith('c')) {
					return undefined;
				}

				return [
					new vscode.CompletionItem('circle',vscode.CompletionItemKind.Function),
					new vscode.CompletionItem('clipLine',vscode.CompletionItemKind.Function),
				];
			}
		},
		'.' 
	);

	const provider4 = vscode.languages.registerCompletionItemProvider(
		'cpp',
		{
			provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {

				let linePrefix = document.lineAt(position).text.substr(0, position.character);
				if (!linePrefix.endsWith('e')) {
					return undefined;
				}

				return [
					new vscode.CompletionItem('ellipse', vscode.CompletionItemKind.Function),
					new vscode.CompletionItem('ellipse2Poly', vscode.CompletionItemKind.Function),					
				];
			}
		},
		'.' 
	);

	const provider5 = vscode.languages.registerCompletionItemProvider(
		'cpp',
		{
			provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {

				let linePrefix = document.lineAt(position).text.substr(0, position.character);
				if (!linePrefix.endsWith('f')) {
					return undefined;
				}

				return [
					new vscode.CompletionItem('fillConvexPoly', vscode.CompletionItemKind.Function),
					new vscode.CompletionItem('fillPoly', vscode.CompletionItemKind.Function),					
				];
			}
		},
		'.' 
	);

	const provider6 = vscode.languages.registerCompletionItemProvider(
		'cpp',
		{
			provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {

				let linePrefix = document.lineAt(position).text.substr(0, position.character);
				if (!linePrefix.endsWith('g')) {
					return undefined;
				}

				return [
					new vscode.CompletionItem('getTextSize', vscode.CompletionItemKind.Function),
				];
			}
		},
		'.' 
	);

	const provider7 = vscode.languages.registerCompletionItemProvider(
		'cpp',
		{
			provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {

				let linePrefix = document.lineAt(position).text.substr(0, position.character);
				if (!linePrefix.endsWith('i')) {
					return undefined;
				}

				return [
					new vscode.CompletionItem('imread', vscode.CompletionItemKind.Method),
					new vscode.CompletionItem('imshow', vscode.CompletionItemKind.Method),
					new vscode.CompletionItem('imwrite', vscode.CompletionItemKind.Method),
				];
			}
		},
		'.' 
	);

	const provider8 = vscode.languages.registerCompletionItemProvider(
		'cpp',
		{
			provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {

				let linePrefix = document.lineAt(position).text.substr(0, position.character);
				if (!linePrefix.endsWith('l')) {
					return undefined;
				}

				return [
					new vscode.CompletionItem('line', vscode.CompletionItemKind.Function),
				];
			}
		},
		'.' 
	);

	const provider9 = vscode.languages.registerCompletionItemProvider(
		'cpp',
		{
			provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {

				let linePrefix = document.lineAt(position).text.substr(0, position.character);
				if (!linePrefix.endsWith('M')) {
					return undefined;
				}

				return [
					new vscode.CompletionItem('Mat', vscode.CompletionItemKind.Class),					
				];
			}
		},
		'.' 
	);

	const provider10 = vscode.languages.registerCompletionItemProvider(
		'cpp',
		{
			provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {

				let linePrefix = document.lineAt(position).text.substr(0, position.character);
				if (!linePrefix.endsWith('P')) {
					return undefined;
				}

				return [
					new vscode.CompletionItem('Point_', vscode.CompletionItemKind.Class),
					new vscode.CompletionItem('Point3_', vscode.CompletionItemKind.Class),
					new vscode.CompletionItem('Ptr', vscode.CompletionItemKind.Class),
				];
			}
		},
		'.' 
	);

	const provider11 = vscode.languages.registerCompletionItemProvider(
		'cpp',
		{
			provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {

				let linePrefix = document.lineAt(position).text.substr(0, position.character);
				if (!linePrefix.endsWith('p')) {
					return undefined;
				}

				return [
					new vscode.CompletionItem('polylines', vscode.CompletionItemKind.Function),
					new vscode.CompletionItem('putText', vscode.CompletionItemKind.Function),
				];
			}
		},
		'.' 
	);

	const provider12 = vscode.languages.registerCompletionItemProvider(
		'cpp',
		{
			provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {

				let linePrefix = document.lineAt(position).text.substr(0, position.character);
				if (!linePrefix.endsWith('R')) {
					return undefined;
				}

				return [
					new vscode.CompletionItem('Rect', vscode.CompletionItemKind.Class),
					new vscode.CompletionItem('RotatedRect', vscode.CompletionItemKind.Class),
				];
			}
		},
		'.' 
	);

	const provider13 = vscode.languages.registerCompletionItemProvider(
		'cpp',
		{
			provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {

				let linePrefix = document.lineAt(position).text.substr(0, position.character);
				if (!linePrefix.endsWith('r')) {
					return undefined;
				}

				return [
					new vscode.CompletionItem('rectangle', vscode.CompletionItemKind.Function),
				];
			}
		},
		'.' 
	);



	//subscription
	context.subscriptions.push(disposable,provider1,provider2,provider3,
		provider4,provider5,provider6,provider7,provider8,provider9,provider10,
		provider11,provider12,provider13);
}


// this method is called when your extension is deactivated
export function deactivate() {}
