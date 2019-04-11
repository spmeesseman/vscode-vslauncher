import { logOutputChannel } from './extension';
import { workspace } from 'vscode';
import * as fs from 'fs';

const logValueWhiteSpace = 40;


export function camelCase(name: string, indexUpper: number) 
{
    if (!name) {
      return name;
    }

    return name
        .replace(/(?:^\w|[A-Za-z]|\b\w)/g, (letter, index) => {
            return index !== indexUpper ? letter.toLowerCase() : letter.toUpperCase();
        })
        .replace(/[\s\-]+/g, '');
}


export function properCase(name: string) 
{
    if (!name) {
      return name;
    }

    return name
        .replace(/(?:^\w|[A-Z]|\b\w)/g, (letter, index) => {
            return index !== 0 ? letter.toLowerCase() : letter.toUpperCase();
        })
        .replace(/[\s\-]+/g, '');
}


export function timeout(ms: number) 
{
    return new Promise(resolve => setTimeout(resolve, ms));
}


export function pathExists(path: string) 
{
    try {
        fs.accessSync(path);
    } catch (err) {
        return false;
    }
    return true;
}


export async function readFile(file: string): Promise<string> 
{
    return new Promise<string>((resolve, reject) => {
        fs.readFile(file, (err, data) => {
            if (err) {
                reject(err);
            }
            resolve(data.toString());
        });
    });
}


export async function log(msg: string, level?: number) 
{
    //let cfgLevel = configuration.get<number>('logLevel');

    if (workspace.getConfiguration('vsLauncher').get('debug') === true) 
    {
        console.log(msg);
        logOutputChannel.appendLine(msg);
    }
}


export async function logValue(msg: string, value: any, level?: number) 
{
    var logMsg = msg;

    //let cfgLevel = configuration.get<number>('logLevel');

    for (var i = msg.length; i < logValueWhiteSpace; i++) {
        logMsg += ' ';
    }

    if (value || value === 0 || value === '') {
        logMsg += ': ';
        logMsg += value.toString();
    } 
    else if (value === undefined) {
        logMsg += ': undefined';
    } 
    else if (value === null) {
        logMsg += ': null';
    }

    if (workspace.getConfiguration('vsLauncher').get('debug') === true) {
        console.log(logMsg);
        logOutputChannel.appendLine(logMsg);
    }
}
