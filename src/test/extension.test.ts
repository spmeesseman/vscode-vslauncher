/* tslint:disable */

//
// Documentation on https://mochajs.org/ for help.
//

import * as assert from 'assert';
import * as vscode from "vscode";
import * as testUtil from "./testUtil";
import { configuration } from "../common/configuration";


suite("Extension Tests", () => 
{
  // Before Each
  setup(async () => { });

  teardown(() => {
    
  });

  test("Get extension", () => {
    assert.ok(vscode.extensions.getExtension("spmeesseman.vscode-vslauncher"));
  });


  // tslint:disable-next-line: only-arrow-functions
  test("Activate extension", function (done) 
  {

    this.timeout(60 * 1000);

    const extension = vscode.extensions.getExtension(
      "spmeesseman.vscode-vslauncher"
    ) as vscode.Extension<any>;

    if (!extension) {
      assert.fail("Extension not found");
    }

    assert(configuration.update('debug', true));

    if (!extension.isActive) 
    {
      extension.activate().then(
        api => {
          assert(vscode.commands.executeCommand("vsLauncher.showOutput"));
          done();
        },
        () => {
          assert.fail("Failed to activate extension");
        }
      );
    } else {
      assert(vscode.commands.executeCommand("vsLauncher.showOutput"));
      done();
    }
  });

  

});


