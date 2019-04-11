/* tslint:disable */

//
// Documentation on https://mochajs.org/ for help.
//

import * as assert from "assert";
import { workspace, Uri } from "vscode";
import * as testUtil from "./testUtil";
import * as util from "../util";


suite("Util tests", () => 
{
  let repoUri: Uri;
  let checkoutDir: Uri;

  suiteSetup(async () => {
    await testUtil.activeExtension();
  });

  suiteTeardown(() => {
    
  });

  test("Turn logging on", () => {
    assert.ok(workspace.getConfiguration('vsLauncher').update('debug', true));
  });

  test("Log to output window", () => {
    assert.ok(util.log("spmeesseman.vscode-vslauncher"));
  });

  test("Log value to output window", () => {
    assert.ok(util.logValue("spmeesseman.vscode-vslauncher", "true"));
  });

  test("Camel case a value", () => {
    assert(util.camelCase("vslauncher", 2) == 'vsLauncher');
  });

  test("Proper case a value", () => {
    assert(util.properCase("vslauncher") == 'Vslauncher');
  });

  test("Timeout", () => {
    assert.ok(util.timeout(500));
  });

});
