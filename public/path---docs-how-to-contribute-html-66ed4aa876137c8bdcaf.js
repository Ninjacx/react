webpackJsonp([33716254774806],{"./node_modules/json-loader/index.js!./.cache/json/docs-how-to-contribute-html.json":function(e,t){e.exports={data:{markdownRemark:{html:'<p>React is one of Facebook’s first open source projects that is both under very active development and is also being used to ship code to everybody on <a href="https://www.facebook.com">facebook.com</a>. We’re still working out the kinks to make contributing to this project as easy and transparent as possible, but we’re not quite there yet. Hopefully this document makes the process for contributing clear and answers some questions that you may have.</p>\n<h3 id="code-of-conduct"><a href="#code-of-conduct" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><a href="https://code.facebook.com/codeofconduct">Code of Conduct</a></h3>\n<p>Facebook has adopted a Code of Conduct that we expect project participants to adhere to. Please read <a href="https://code.facebook.com/codeofconduct">the full text</a> so that you can understand what actions will and will not be tolerated.</p>\n<h3 id="open-development"><a href="#open-development" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Open Development</h3>\n<p>All work on React happens directly on <a href="https://github.com/facebook/react">GitHub</a>. Both core team members and external contributors send pull requests which go through the same review process.</p>\n<h3 id="branch-organization"><a href="#branch-organization" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Branch Organization</h3>\n<p>We will do our best to keep the <a href="https://github.com/facebook/react/tree/master"><code>master</code> branch</a> in good shape, with tests passing at all times. But in order to move fast, we will make API changes that your application might not be compatible with. We recommend that you use <a href="/downloads.html">the latest stable version of React</a>.</p>\n<p>If you send a pull request, please do it against the <code>master</code> branch. We maintain stable branches for major versions separately but we don’t accept pull requests to them directly. Instead, we cherry-pick non-breaking changes from master to the latest stable major version.</p>\n<h3 id="semantic-versioning"><a href="#semantic-versioning" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Semantic Versioning</h3>\n<p>React follows <a href="http://semver.org/">semantic versioning</a>. We release patch versions for bugfixes, minor versions for new features, and major versions for any breaking changes. When we make breaking changes, we also introduce deprecation warnings in a minor version so that our users learn about the upcoming changes and migrate their code in advance.</p>\n<p>We tag every pull request with a label marking whether the change should go in the next <a href="https://github.com/facebook/react/pulls?q=is:open+is:pr+label:semver-patch">patch</a>, <a href="https://github.com/facebook/react/pulls?q=is:open+is:pr+label:semver-minor">minor</a>, or a <a href="https://github.com/facebook/react/pulls?q=is:open+is:pr+label:semver-major">major</a> version. We release new patch versions every few weeks, minor versions every few months, and major versions one or two times a year.</p>\n<p>Every significant change is documented in the <a href="https://github.com/facebook/react/blob/master/CHANGELOG.md">changelog file</a>.</p>\n<h3 id="bugs"><a href="#bugs" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Bugs</h3>\n<h4 id="where-to-find-known-issues"><a href="#where-to-find-known-issues" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Where to Find Known Issues</h4>\n<p>We are using <a href="https://github.com/facebook/react/issues">GitHub Issues</a> for our public bugs. We keep a close eye on this and try to make it clear when we have an internal fix in progress. Before filing a new task, try to make sure your problem doesn’t already exist.</p>\n<h4 id="reporting-new-issues"><a href="#reporting-new-issues" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Reporting New Issues</h4>\n<p>The best way to get your bug fixed is to provide a reduced test case. This <a href="https://jsfiddle.net/84v837e9/">JSFiddle template</a> is a great starting point.</p>\n<h4 id="security-bugs"><a href="#security-bugs" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Security Bugs</h4>\n<p>Facebook has a <a href="https://www.facebook.com/whitehat/">bounty program</a> for the safe disclosure of security bugs. With that in mind, please do not file public issues; go through the process outlined on that page.</p>\n<h3 id="how-to-get-in-touch"><a href="#how-to-get-in-touch" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>How to Get in Touch</h3>\n<ul>\n<li>IRC: <a href="https://webchat.freenode.net/?channels=reactjs">#reactjs on freenode</a></li>\n<li>Discussion forum: <a href="https://discuss.reactjs.org/">discuss.reactjs.org</a></li>\n</ul>\n<p>There is also <a href="http://www.reactiflux.com/">an active community of React users on the Discord chat platform</a> in case you need help with React.</p>\n<h3 id="proposing-a-change"><a href="#proposing-a-change" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Proposing a Change</h3>\n<p>If you intend to change the public API, or make any non-trivial changes to the implementation, we recommend <a href="https://github.com/facebook/react/issues/new">filing an issue</a>. This lets us reach an agreement on your proposal before you put significant effort into it.</p>\n<p>If you’re only fixing a bug, it’s fine to submit a pull request right away but we still recommend to file an issue detailing what you’re fixing. This is helpful in case we don’t accept that specific fix but want to keep track of the issue.</p>\n<h3 id="your-first-pull-request"><a href="#your-first-pull-request" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Your First Pull Request</h3>\n<p>Working on your first Pull Request? You can learn how from this free video series:</p>\n<p><strong><a href="https://egghead.io/series/how-to-contribute-to-an-open-source-project-on-github">How to Contribute to an Open Source Project on GitHub</a></strong></p>\n<p>To help you get your feet wet and get you familiar with our contribution process, we have a list of <strong><a href="https://github.com/facebook/react/issues?q=is:open+is:issue+label:%22Difficulty:+beginner%22">beginner friendly issues</a></strong> that contain bugs which are fairly easy to fix. This is a great place to get started.</p>\n<p>If you decide to fix an issue, please be sure to check the comment thread in case somebody is already working on a fix. If nobody is working on it at the moment, please leave a comment stating that you intend to work on it so other people don’t accidentally duplicate your effort.</p>\n<p>If somebody claims an issue but doesn’t follow up for more than two weeks, it’s fine to take over it but you should still leave a comment.</p>\n<h3 id="sending-a-pull-request"><a href="#sending-a-pull-request" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Sending a Pull Request</h3>\n<p>The core team is monitoring for pull requests. We will review your pull request and either merge it, request changes to it, or close it with an explanation. For API changes we may need to fix our internal uses at Facebook.com, which could cause some delay. We’ll do our best to provide updates and feedback throughout the process.</p>\n<p><strong>Before submitting a pull request,</strong> please make sure the following is done:</p>\n<ol>\n<li>Fork <a href="https://github.com/facebook/react">the repository</a> and create your branch from <code>master</code>.</li>\n<li>If you’ve added code that should be tested, add tests!</li>\n<li>If you’ve changed APIs, update the documentation.</li>\n<li>Ensure the test suite passes (<code>npm test</code>).</li>\n<li>Format your code with <a href="https://github.com/prettier/prettier">prettier</a> (<code>npm run prettier</code>).</li>\n<li>Make sure your code lints (<code>npm run lint</code>).</li>\n<li>Run the <a href="https://flowtype.org/">Flow</a> typechecks (<code>npm run flow</code>).</li>\n<li>If you haven’t already, complete the CLA.</li>\n</ol>\n<h3 id="contributor-license-agreement-cla"><a href="#contributor-license-agreement-cla" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Contributor License Agreement (CLA)</h3>\n<p>In order to accept your pull request, we need you to submit a CLA. You only need to do this once, so if you’ve done this for another Facebook open source project, you’re good to go. If you are submitting a pull request for the first time, just let us know that you have completed the CLA and we can cross-check with your GitHub username.</p>\n<p><strong><a href="https://code.facebook.com/cla">Complete your CLA here.</a></strong></p>\n<h3 id="contribution-prerequisites"><a href="#contribution-prerequisites" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Contribution Prerequisites</h3>\n<ul>\n<li>You have <code>node</code> installed at v6.0.0+ and <code>npm</code> at v3.0.0+.</li>\n<li>You have <code>gcc</code> installed or are comfortable installing a compiler if needed. Some of our <code>npm</code> dependencies may require a compilation step. On OS X, the Xcode Command Line Tools will cover this. On Ubuntu, <code>apt-get install build-essential</code> will install the required packages. Similar commands should work on other Linux distros. Windows will require some additional steps, see the <a href="https://github.com/nodejs/node-gyp#installation"><code>node-gyp</code> installation instructions</a> for details.</li>\n<li>You are familiar with <code>npm</code> and know whether or not you need to use <code>sudo</code> when installing packages globally.</li>\n<li>You are familiar with <code>git</code>.</li>\n</ul>\n<h3 id="development-workflow"><a href="#development-workflow" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Development Workflow</h3>\n<p>After cloning React, run <code>npm install</code> to fetch its dependencies.\nThen, you can run several commands:</p>\n<ul>\n<li><code>npm run lint</code> checks the code style.</li>\n<li><code>npm test</code> runs the complete test suite.</li>\n<li><code>npm test -- --watch</code> runs an interactive test watcher.</li>\n<li><code>npm test &#x3C;pattern></code> runs tests with matching filenames.</li>\n<li><code>npm run flow</code> runs the <a href="https://flowtype.org/">Flow</a> typechecks.</li>\n<li><code>npm run build</code> creates a <code>build</code> folder with all the packages.</li>\n</ul>\n<p>We recommend running <code>npm test</code> (or its variations above) to make sure you don’t introduce any regressions as you work on your change. However it can be handy to try your build of React in a real project.</p>\n<p>First, run <code>npm run build</code>. This will produce pre-built bundles in <code>build</code> folder, as well as prepare npm packages inside <code>build/packages</code>.</p>\n<p>The easiest way to try your changes is to run <code>npm run build</code> and then open <code>fixtures/packaging/babel-standalone/dev.html</code>. This file already uses <code>react.js</code> from the <code>build</code> folder so it will pick up your changes.</p>\n<p>If you want to try your changes in your existing React project, you may copy <code>build/dist/react.development.js</code>, <code>build/dist/react-dom.development.js</code>, or any other build products into your app and use them instead of the stable version. If your project uses React from npm, you may delete <code>react</code> and <code>react-dom</code> in its dependencies and use <code>npm link</code> to point them to your local <code>build</code> folder:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-sh"><code>cd your_project\nnpm link ~/path_to_your_react_clone/build/packages/react\nnpm link ~/path_to_your_react_clone/build/packages/react-dom</code></pre>\n      </div>\n<p>Every time you run <code>npm run build</code> in the React folder, the updated versions will appear in your project’s <code>node_modules</code>. You can then rebuild your project to try your changes.</p>\n<p>We still require that your pull request contains unit tests for any new functionality. This way we can ensure that we don’t break your code in the future.</p>\n<h3 id="style-guide"><a href="#style-guide" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Style Guide</h3>\n<p>Our linter will catch most styling issues that may exist in your code.\nYou can check the status of your code styling by simply running <code>npm run lint</code>.</p>\n<p>However, there are still some styles that the linter cannot pick up. If you are unsure about something, looking at <a href="https://github.com/airbnb/javascript">Airbnb’s Style Guide</a> will guide you in the right direction.</p>\n<h3 id="code-conventions"><a href="#code-conventions" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Code Conventions</h3>\n<ul>\n<li>Use semicolons <code>;</code></li>\n<li>Commas last <code>,</code></li>\n<li>2 spaces for indentation (no tabs)</li>\n<li>Prefer <code>\'</code> over <code>"</code></li>\n<li><code>\'use strict\';</code></li>\n<li>120 character line length (<strong>except documentation</strong>)</li>\n<li>Write “attractive” code</li>\n<li>Do not use the optional parameters of <code>setTimeout</code> and <code>setInterval</code></li>\n</ul>\n<h3 id="introductory-video"><a href="#introductory-video" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Introductory Video</h3>\n<p>You may be interested in watching <a href="https://www.youtube.com/watch?v=wUpPsEcGsg8">this short video</a> (26 mins) which gives an introduction on how to contribute to React.</p>\n<h3 id="meeting-notes"><a href="#meeting-notes" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Meeting Notes</h3>\n<p>React team meets once a week to discuss the development of React, future plans, and priorities. You can find the meeting notes in a <a href="https://github.com/reactjs/core-notes/">dedicated repository</a>.</p>\n<h3 id="license"><a href="#license" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>License</h3>\n<p>By contributing to React, you agree that your contributions will be licensed under its MIT license.</p>\n<h3 id="what-next"><a href="#what-next" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>What Next?</h3>\n<p>Read the <a href="/docs/codebase-overview.html">next section</a> to learn how the codebase is organized.</p>',frontmatter:{title:"How to Contribute",next:"codebase-overview.html",prev:null},fields:{path:"docs/how-to-contribute.md",slug:"docs/how-to-contribute.html"}}},pathContext:{slug:"docs/how-to-contribute.html"}}}});
//# sourceMappingURL=path---docs-how-to-contribute-html-66ed4aa876137c8bdcaf.js.map