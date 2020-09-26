/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import {
	commands,
	Disposable,
	ExtensionContext,
	OutputChannel,
	window,
	Uri
  } from "vscode";
import { configuration } from "./common/configuration";
import { log, pathExists, logValue } from './util';
import * as path from 'path';


export let logOutputChannel: OutputChannel | undefined;


export async function activate(context: ExtensionContext) 
{
	const disposables: Disposable[] = [];
	context.subscriptions.push(
	  new Disposable(() => Disposable.from(...disposables).dispose())
	);
  
	await _activate(context, disposables).catch(err => console.error(err));
}

async function _activate(context: ExtensionContext, disposables: Disposable[])
{
	logOutputChannel = window.createOutputChannel("Visual Studio Launcher");
	disposables.push(logOutputChannel);

	log('');
	log('Init extension');
	
	commands.registerCommand("vsLauncher.showOutput", () => logOutputChannel.show());
	const showOutput = configuration.get<boolean>("showOutput");
	if (showOutput) {
		logOutputChannel.show();
	}

	var disposable = commands.registerCommand('vsLauncher.openInVS', (fileUri: Uri) =>
	{
		let vsPath2019E: string = 'C:\\Program Files (x86)\\Microsoft Visual Studio\\2019\\Enterprise\\Common7\\IDE\\devenv.exe';
		let vsPath2019P: string = 'C:\\Program Files (x86)\\Microsoft Visual Studio\\2019\\Professional\\Common7\\IDE\\devenv.exe';
		let vsPath2019C: string = 'C:\\Program Files (x86)\\Microsoft Visual Studio\\2019\\Community\\Common7\\IDE\\devenv.exe';
		let vsPath2017E: string = 'C:\\Program Files (x86)\\Microsoft Visual Studio\\2017\\Enterprise\\Common7\\IDE\\devenv.exe';
		let vsPath2017P: string = 'C:\\Program Files (x86)\\Microsoft Visual Studio\\2017\\Professional\\Common7\\IDE\\devenv.exe';
		let vsPath2017C: string = 'C:\\Program Files (x86)\\Microsoft Visual Studio\\2017\\Community\\Common7\\IDE\\devenv.exe';
		let vsPath2015: string = 'C:\\Program Files (x86)\\Microsoft Visual Studio 14.0\\Common7\\IDE\\devenv.exe';
		let vsPath2013: string = 'C:\\Program Files (x86)\\Microsoft Visual Studio 12.0\\Common7\\IDE\\devenv.exe';
		let vsPath2012: string = 'C:\\Program Files (x86)\\Microsoft Visual Studio 11.0\\Common7\\IDE\\devenv.exe';
		let vsPath2010: string = 'C:\\Program Files (x86)\\Microsoft Visual Studio 10.0\\Common7\\IDE\\devenv.exe';
		let vsPath: string;
		
		log('');
		log('Received openInVS command');

		vsPath = configuration.get<string>("pathToVS");
		
		if (!vsPath) 
		{
			if (pathExists(vsPath2019E))
			{
				vsPath = vsPath2017E;            
			}
			else if (pathExists(vsPath2019C))
			{
				vsPath = vsPath2017C;            
			}
			else if (pathExists(vsPath2019P))
			{
				vsPath = vsPath2017P;            
			}
			else if (pathExists(vsPath2017E))
			{
				vsPath = vsPath2017E;            
			}
			else if (pathExists(vsPath2017C))
			{
				vsPath = vsPath2017C;            
			}
			else if (pathExists(vsPath2017P))
			{
				vsPath = vsPath2017P;            
			}
			else if (pathExists(vsPath2015))
			{
				vsPath = vsPath2015;            
			}
			else if (pathExists(vsPath2013))
			{
				vsPath = vsPath2013;            
			}
			else if (pathExists(vsPath2012))
			{
				vsPath = vsPath2012;            
			}
			else if (pathExists(vsPath2010))
			{
				vsPath = vsPath2010;            
			}
		}

		if (!vsPath) 
		{
			window.showErrorMessage('Visual Studio not found');
			return;
		}
		
		log('   found visual studio');
		logValue('      path', vsPath);

		if (!fileUri)
		{
			log('   fileUri empty, editor check');

			var editor = window.activeTextEditor;
			if (!editor) {
					window.showErrorMessage('Could not find and valid text editor. Please open a file in Code first.');
					return; // No open text editor
			}
			
			if (editor.document.isUntitled) {
					window.showErrorMessage('Please save the file first.');
					return; // No open text editor
			}

			fileUri = editor.document.uri;
		}

		logValue('   current file to open', path.basename(fileUri.fsPath));

		let args: Array<string> = [];
		let isProj: boolean = path.extname(fileUri.fsPath) === '.csproj' ||
							  path.extname(fileUri.fsPath) === '.vcproj' ||
							  path.extname(fileUri.fsPath) === '.vbproj' ||
							  path.extname(fileUri.fsPath) === '.vdproj' ||
							  path.extname(fileUri.fsPath) === '.sln';
		if (isProj) {
			log('      VS project/solution detected');
		}
		else {
			args.push('/edit');
		}
		args.push(fileUri.fsPath);

		log('   launching visual studio...');
		
		/*
		let options = {
			"cwd": path.dirname(fileUri.fsPath)
		};

		let execution = new ProcessExecution(vsPath, args, options);
		let kind: TaskDefinition = {
			type: 'vsstudio'
		};
		tasks.executeTask(new Task(kind, workspace.getWorkspaceFolder(fileUri), 'launch', 'vsstudio', execution));
		*/

		const execFile = require('child_process').execFile;
		execFile(vsPath, args, (error, stdout, stderr) =>
		{
			log(`   stdout: ${stdout}`);
			log(`   stderr: ${stderr}`);
			if (error !== null) {
				log('   error launching Visual Studio');
				console.log(error);
			}	
		});

		// Display a message box to the user
		log('   file opened');
	});

	context.subscriptions.push(disposable);
}

export function deactivate() {}
