# Visual Studio Launcher - Open a projects and files in VS via context menu

[![Version](https://vsmarketplacebadge.apphb.com/version-short/spmeesseman.vscode-vslauncher.svg)](https://marketplace.visualstudio.com/items?itemName=spmeesseman.vscode-vslauncher)
[![Installs](https://vsmarketplacebadge.apphb.com/installs-short/spmeesseman.vscode-vslauncher.svg)](https://marketplace.visualstudio.com/items?itemName=spmeesseman.vscode-vslauncher)
[![Downloads](https://vsmarketplacebadge.apphb.com/downloads-short/spmeesseman.vscode-vslauncher.svg)](https://marketplace.visualstudio.com/items?itemName=spmeesseman.vscode-vslauncher)
[![Ratings](https://vsmarketplacebadge.apphb.com/rating-short/spmeesseman.vscode-vslauncher.svg)](https://marketplace.visualstudio.com/items?itemName=spmeesseman.vscode-vslauncher)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![Build Status](https://dev.azure.com/spmeesseman/vscode-vslauncher/_apis/build/status/spmeesseman.vscode-vslauncher?branchName=master)](https://dev.azure.com/spmeesseman/vscode-vslauncher/_build/latest?definitionId=10&branchName=master)
[![codecov](https://codecov.io/gh/spmeesseman/vscode-vslauncher/branch/master/graph/badge.svg)](https://codecov.io/gh/spmeesseman/vscode-vslauncher)

[![Dependencies Status](https://david-dm.org/spmeesseman/vscode-vslauncher/status.svg)](https://david-dm.org/spmeesseman/vscode-vslauncher)
[![DevDependencies Status](https://david-dm.org/spmeesseman/vscode-vslauncher/dev-status.svg)](https://david-dm.org/spmeesseman/vscode-vslauncher?type=dev)
[![Known Vulnerabilities](https://snyk.io/test/github/spmeesseman/vscode-vslauncher/badge.svg)](https://snyk.io/test/github/spmeesseman/vscode-vslauncher)
[![Average time to resolve an issue](https://isitmaintained.com/badge/resolution/spmeesseman/vscode-vslauncher.svg)](https://isitmaintained.com/project/spmeesseman/vscode-vslauncher "Average time to resolve an issue")
[![Percentage of issues still open](https://isitmaintained.com/badge/open/spmeesseman/vscode-vslauncher.svg)](https://isitmaintained.com/project/spmeesseman/vscode-vslauncher "Percentage of issues still open") [![Greenkeeper badge](https://badges.greenkeeper.io/spmeesseman/vscode-vslauncher.svg)](https://greenkeeper.io/)

## Description

> Provides a command in the context menu of both the file explorer and file editor to open that file in Visual Studio.  If the file is a `project` or `solution` file (vcproj, vcproj, vbproj, sln), the Visual Studio `project` or `solution` will be opened as opposed to the file itself (unlike other similar extensions on the marketplace).

## Usage

The location of your Visual Studio installation and the IDE executable is attemtped to be found automatically.  In most cases, if you have only a single VS installation, and you installed to the default installation directory,this works fine.  If you have more than one version of VS installed, the file is opened with the first version located.  If you did not install to a default location, the installation directory will not be found.  In either case, you can explicity set the location of your VS IDE executable in Settings.

## Feedback & Contributing

* Please report any bugs, suggestions or documentation requests via the
  [Issues](https://github.com/spmeesseman/vscode-vslauncher/issues)
* Feel free to submit [pull requests](https://github.com/spmeesseman/vscode-vslauncher/pulls)
* [Contributors](https://github.com/spmeesseman/vscode-vslauncher/graphs/contributors)

## Settings

|Config|Description|Default|
|-|-|-|
|`vslauncher.debug`|Turn on logging|`false`|
|`vslauncher.pathToVS`|The path to the Visual Studio program (devenv.exe)||

## Open Source Projects

|Package|Use Case|Repository|Marketplace|
|-|-|-|-|
|app-publisher|Release Automation / CI|[GitHub](https://www.npmjs.com/package/@spmeesseman/app-publisher)|[Npmjs.org Registry](https://www.npmjs.com/package/@spmeesseman/app-publisher)|
|arg-parser|Node Argument Parser|[GitHub](https://github.com/spmeesseman/arg-parser)|[Npmjs.org Registry](https://www.npmjs.com/package/@spmeesseman/arg-parser)|
|code-package|Code Dev Environment|[GitHub](https://github.com/spmeesseman/code-package)|[GitHub Releases](https://github.com/spmeesseman/code-package/releases)|
|env-ci|CI ENvironment Detection|[GitHub](https://github.com/spmeesseman/env-ci)|[Npmjs.org Registry](https://www.npmjs.com/package/@spmeesseman/env-ci)|
|extjs-pkg-filterbar|ExtJS Grid Filter Bar|[GitHub](https://github.com/spmeesseman/extjs-pkg-filterbar)|[Npmjs.org Registry](https://www.npmjs.com/package/@spmeesseman/extjs-pkg-filterbar)|
|extjs-pkg-fontawesome|ExtJS FontAwesome Integration|[GitHub](https://github.com/spmeesseman/extjs-pkg-fontawesome)|[Npmjs.org Registry](https://www.npmjs.com/package/@spmeesseman/extjs-pkg-fontawesome)|
|extjs-pkg-fontawesome-pro|ExtJS FontAwesome Pro Integration|[GitHub](https://github.com/spmeesseman/extjs-pkg-fontawesome-pro)|[Npmjs.org Private Registry](https://www.npmjs.com/package/@spmeesseman/@spmeesseman/extjs-pkg-fontawesome-pro)|
|extjs-pkg-intltelinput|ExtJS IntlTelInput Wrapper|[GitHub](https://github.com/spmeesseman/extjs-pkg-intltelinput)|[Npmjs.org Registry](https://www.npmjs.com/package/@spmeesseman/extjs-pkg-intltelinput)|
|extjs-pkg-mantis|ExtJS MantisBT Integration|[GitHub](https://github.com/spmeesseman/extjs-pkg-mantis)|[Npmjs.org Registry](https://www.npmjs.com/package/@spmeesseman/extjs-pkg-mantis)|
|extjs-pkg-plyr|ExtJS Plyr Wrapper|[GitHub](https://github.com/spmeesseman/extjs-pkg-plyr)|[Npmjs.org Registry](https://www.npmjs.com/package/@spmeesseman/extjs-pkg-plyr)|
|extjs-pkg-tinymce|ExtJS TinyMCE Wrapper|[GitHub](https://github.com/spmeesseman/extjs-pkg-tinymce)|[Npmjs.org Registry](https://www.npmjs.com/package/@spmeesseman/extjs-pkg-tinymce)|
|extjs-pkg-websocket|ExtJS WebSocket Wrapper|[GitHub](https://github.com/spmeesseman/extjs-pkg-websocket)|[Npmjs.org Registry](https://www.npmjs.com/package/@spmeesseman/extjs-pkg-websocket)|
|extjs-pkg-webworker|ExtJS WebWorker Wrapper|[GitHub](https://github.com/spmeesseman/extjs-pkg-webworker)|[Npmjs.org Registry](https://www.npmjs.com/package/@spmeesseman/extjs-pkg-webworker)|
|extjs-theme-graphite-small|ExtJS Dark Theme|[GitHub](https://github.com/spmeesseman/extjs-theme-graphite-small)|[Npmjs.org Private Registry](https://www.npmjs.com/package/@spmeesseman/@spmeesseman/extjs-theme-graphite-small)|
|extjs-theme-amethyst|ExtJS Purple Theme|[GitHub](https://github.com/spmeesseman/extjs-theme-amethyst)|[Npmjs.org Registry](https://www.npmjs.com/package/@spmeesseman/extjs-theme-amethyst)|
|extjs-theme-emerald|ExtJS Green Theme|[GitHub](https://github.com/spmeesseman/extjs-theme-emerald)|[Npmjs.org Registry](https://www.npmjs.com/package/@spmeesseman/extjs-theme-emerald)|
|extjs-theme-ruby|ExtJS Red Theme|[GitHub](https://github.com/spmeesseman/extjs-theme-ruby)|[Npmjs.org Registry](https://www.npmjs.com/package/@spmeesseman/extjs-theme-ruby)|
|extjs-theme-ruby-dark|ExtJS Dark Theme|[GitHub](https://github.com/spmeesseman/extjs-theme-ruby-dark)|[Npmjs.org Registry](https://www.npmjs.com/package/@spmeesseman/extjs-theme-ruby-dark)|
|extjs-theme-turquoise|ExtJS Blue Theme|[GitHub](https://github.com/spmeesseman/extjs-theme-turquoise)|[Npmjs.org Registry](https://www.npmjs.com/package/@spmeesseman/extjs-theme-turquoise)|
|extjs-theme-turquoise-dark|ExtJS Dark Theme|[GitHub](https://github.com/spmeesseman/extjs-theme-turquoise-dark)|[Npmjs.org Registry](https://www.npmjs.com/package/@spmeesseman/extjs-theme-turquoise-dark)|
|jenkins-mantisbt-plugin|Jenkins MantisBT Integration|[GitHub](https://github.com/spmeesseman/jenkins-mantisbt-plugin)|[Npmjs.org Registry](https://www.npmjs.com/package/@spmeesseman/jenkins-mantisbt-plugin)|
|jenkins-utility-server|Jenkins Desktop Server|[GitHub](https://github.com/spmeesseman/jenkins-utility-server)|[Npmjs.org Registry](https://www.npmjs.com/package/@spmeesseman/jenkins-utility-server)|
|mantisbt|MantisBT Custom Site|[GitHub](https://github.com/spmeesseman/mantisbt)|[GitHub Releases](https://github.com/spmeesseman/mantisbt/releases)|
|ApiExtend|MantisBT API Extensions|[GitHub](https://github.com/mantisbt-plugins/ApiExtend)|[GitHub Releases](https://github.com/mantisbt-plugins/ApiExtend/releases)|
|CommitReact|MantisBT Post Commit Actions|[GitHub](https://github.com/mantisbt-plugins/CommitReact)|[GitHub Releases](https://github.com/mantisbt-plugins/CommitReact/releases)|
|GanttChart|MantisBT Gantt Chart|[GitHub](https://github.com/mantisbt-plugins/GanttChart)|[GitHub Releases](https://github.com/mantisbt-plugins/GanttChart/releases)|
|IFramed|MantisBT IFramed Pages|[GitHub](https://github.com/mantisbt-plugins/IFramed)|[GitHub Releases](https://github.com/mantisbt-plugins/IFramed/releases)|
|ProjectPages|MantisBT Custom Nav Buttons|[GitHub](https://github.com/mantisbt-plugins/ProjectPages)|[GitHub Releases](https://github.com/mantisbt-plugins/ProjectPages/releases)|
|Releases|MantisBT Releases Management|[GitHub](https://github.com/mantisbt-plugins/Releases)|[GitHub Releases](https://github.com/mantisbt-plugins/Releases/releases)|
|SecurityExtend|MantisBT SPAM Filter|[GitHub](https://github.com/mantisbt-plugins/SecurityExtend)|[GitHub Releases](https://github.com/mantisbt-plugins/SecurityExtend/releases)|
|ServerFiles|MantisBT Server File Editor|[GitHub](https://github.com/mantisbt-plugins/ServerFiles)|[GitHub Releases](https://github.com/mantisbt-plugins/ServerFiles/releases)|
|svn-scm-ext|VSCode SVN Extension|[GitHub](https://github.com/spmeesseman/svn-scm-ext)|[Visual Studio Marketplace](https://marketplace.visualstudio.com/itemdetails?itemName=spmeesseman.svn-scm-ext)|
|vscode-extjs|VSCode ExtJS Intellisense|[GitHub](https://github.com/spmeesseman/vscode-extjs)|[Visual Studio Marketplace](https://marketplace.visualstudio.com/itemdetails?itemName=spmeesseman.vscode-extjs)|
|vscode-taskexplorer|VSCode Tasks Management|[GitHub](https://github.com/spmeesseman/vscode-taskexplorer)|[Visual Studio Marketplace](https://marketplace.visualstudio.com/itemdetails?itemName=spmeesseman.vscode-taskexplorer)|
|vscode-vslauncher|VSCode VS Project Launcher|[GitHub](https://github.com/spmeesseman/vscode-vslauncher)|[Visual Studio Marketplace](https://marketplace.visualstudio.com/itemdetails?itemName=spmeesseman.vscode-vslauncher)|
