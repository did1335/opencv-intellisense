import * as vscode from 'vscode';

//Completion
export const provider1 = vscode.languages.registerCompletionItemProvider(
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

export const provider2 = vscode.languages.registerCompletionItemProvider(
    'cpp',
    {
        provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {

            //class
            let keywords=['CvPoint','CvPoint2D32f','CvPoint3D32f',
                'CvPoint2D64f','CvPoint3D64f','CvSize','CvSize2D32f',
                'CvRect','CvBox2D','CvScalar','CvTermCriteria',
                'CvMat','CvMatND','CvSparseMat'];
            let linePrefix = document.lineAt(position).text.substr(0, position.character);
            if (!linePrefix.endsWith('C')) {
                return undefined;
            }

            var obj=[];				
            for(let i=0;i<=13;i++){
                obj[i]= new vscode.CompletionItem(keywords[i], vscode.CompletionItemKind.Class);
            }
            
            return obj;				
        }
    },
    '.' 
);

export const provider3 = vscode.languages.registerCompletionItemProvider(
    'cpp',
    {
        provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {

            //Structure
            let keywords=['CvMemStorage','CvMemBlock','CvMemStoragePos','CvSeq',
                        'CvSlice','CvSet','CvSetElem','CvGraph','CvGraphVtx',
                        'CvGraphEdge','CvGraphScanner','CvTreeNodeIterator'];
            let linePrefix = document.lineAt(position).text.substr(0, position.character);
            if (!linePrefix.endsWith('C')) {
                return undefined;
            }

            var obj=[];				
            for(let i=0;i<=11;i++){
                obj[i]= new vscode.CompletionItem(keywords[i], vscode.CompletionItemKind.Struct);
            }
            
            return obj;				
        }
    },
    '.' 
);

export const provider4 = vscode.languages.registerCompletionItemProvider(
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

export const provider5 = vscode.languages.registerCompletionItemProvider(
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

export const provider6 = vscode.languages.registerCompletionItemProvider(
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

export const provider7 = vscode.languages.registerCompletionItemProvider(
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

export const provider8 = vscode.languages.registerCompletionItemProvider(
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

export const provider9 = vscode.languages.registerCompletionItemProvider(
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

export const provider10 = vscode.languages.registerCompletionItemProvider(
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

export const provider11 = vscode.languages.registerCompletionItemProvider(
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

export const provider12 = vscode.languages.registerCompletionItemProvider(
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

export const provider13 = vscode.languages.registerCompletionItemProvider(
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

export const provider14 = vscode.languages.registerCompletionItemProvider(
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
