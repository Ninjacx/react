webpackJsonp([6358605092957],{"./node_modules/json-loader/index.js!./.cache/json/blog-2013-11-06-community-roundup-10-html.json":function(e,t){e.exports={data:{markdownRemark:{html:'<p>This is the 10th round-up already and React has come quite far since it was open sourced. Almost all new web projects at Khan Academy, Facebook, and Instagram are being developed using React. React has been deployed in a variety of contexts: a Chrome extension, a Windows 8 application, mobile websites, and desktop websites supporting Internet Explorer 8! Language-wise, React is not only being used within JavaScript but also CoffeeScript and ClojureScript.</p>\n<p>The best part is that no drastic changes have been required to support all those use cases. Most of the efforts were targeted at polishing edge cases, performance improvements, and documentation.</p>\n<h2 id="khan-academy---officially-moving-to-react"><a href="#khan-academy---officially-moving-to-react" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Khan Academy - Officially moving to React</h2>\n<p><a href="http://joelburget.com/">Joel Burget</a> announced at Hack Reactor that new front-end code at Khan Academy should be written in React!</p>\n<blockquote>\n<p>How did we get the rest of the team to adopt React? Using interns as an attack vector! Most full-time devs had already been working on their existing projects for a while and weren’t looking to try something new at the time, but our class of summer interns was just arriving. For whatever reason, a lot of them decided to try React for their projects. Then mentors became exposed through code reviews or otherwise touching the new code. In this way React knowledge diffused to almost the whole team over the summer.</p>\n<p>Since the first React checkin on June 5, we’ve somehow managed to accumulate 23500 lines of jsx (React-flavored js) code. Which is terrifying in a way - that’s a lot of code - but also really exciting that it was picked up so quickly.</p>\n<p>We held three meetings about how we should proceed with React. At the first two we decided to continue experimenting with React and deferred a final decision on whether to adopt it. At the third we adopted the policy that new code should be written in React.</p>\n<p>I’m excited that we were able to start nudging code quality forward. However, we still have a lot of work to do! One of the selling points of this transition is adopting a uniform frontend style. We’re trying to upgrade all the code from (really old) pure jQuery and (regular old) Backbone views / Handlebars to shiny React. At the moment all we’ve done is introduce more fragmentation. We won’t be gratuitously updating working code (if it ain’t broke, don’t fix it), but are seeking out parts of the codebase where we can shoot two birds with one stone by rewriting in React while fixing bugs or adding functionality.</p>\n<p><a href="http://joelburget.com/backbone-to-react/">Read the full article</a></p>\n</blockquote>\n<h2 id="react-rethinking-best-practices"><a href="#react-rethinking-best-practices" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>React: Rethinking best practices</h2>\n<p><a href="http://www.petehunt.net/">Pete Hunt</a>’s talk at JSConf EU 2013 is now available in video.</p>\n<div>\n          <div\n            class="gatsby-resp-iframe-wrapper"\n            style="padding-bottom: 56.92307692307692%; position: relative; height: 0; overflow: hidden;"\n          >\n            <html><head></head><body><figure><iframe src="//www.youtube-nocookie.com/embed/x7cQ3mrcKaY" frameborder="0" allowfullscreen style="\n            position: absolute;\n            top: 0;\n            left: 0;\n            width: 100%;\n            height: 100%;\n          "></iframe></figure></body></html>\n          </div>\n          </div>\n<h2 id="server-side-react-with-php"><a href="#server-side-react-with-php" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Server-side React with PHP</h2>\n<p><a href="http://www.phpied.com/">Stoyan Stefanov</a>’s series of articles on React has two new entries on how to execute React on the server to generate the initial page load.</p>\n<blockquote>\n<p>This post is an initial hack to have React components render server-side in PHP.</p>\n<ul>\n<li>Problem: Build web UIs</li>\n<li>Solution: React</li>\n<li>Problem: UI built in JS is anti-SEO (assuming search engines are still noscript) and bad for perceived performance (blank page till JS arrives)</li>\n<li>Solution: <a href="https://github.com/facebook/react-page">React page</a> to render the first view</li>\n<li>Problem: Can’t host node.js apps / I have tons of PHP code</li>\n<li>Solution: Use PHP then!</li>\n</ul>\n<p><a href="http://www.phpied.com/server-side-react-with-php/"><strong>Read part 1 …</strong></a></p>\n<p><a href="http://www.phpied.com/server-side-react-with-php-part-2/"><strong>Read part 2 …</strong></a></p>\n<p>Rendered markup on the server:</p>\n<html><head></head><body><figure><a href="http://www.phpied.com/server-side-react-with-php-part-2/">\n  <a class="gatsby-resp-image-link" href="/static/b5fff9e81996175f90c9de3e1a89018f-6ff1c.png" style="display: block" target="_blank" rel="noopener">\n  \n  <span class="gatsby-resp-image-wrapper" style="position: relative; display: block; ; max-width: 225px; margin-left: auto; margin-right: auto;">\n    <span class="gatsby-resp-image-background-image" style="padding-bottom: 128%; position: relative; bottom: 0; left: 0; background-image: url(&apos;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAaCAIAAAA44esqAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAC/UlEQVQ4y51UW2/bNhTW/3/o07p2KNo9Dhg2dEXTYQ9OggwIBhdtEt9lKZJl6y5R1I2SKUokeywtbbIE2ZYPxNEnkp94xHNRzs7OxuPxx/H4/Pz84uJiMpmoqrper7W7uD8DUC4vL2H39Q0Mw9hsNtZ/g5JlaZJg+SQonuf7fvBE8f4A+kQxY21PxO1Z0WMgj4mjwEVJinCGMU7g7zGO4xghBCRNU7CoByx9nR9eYbey+HQ6XW2mS1PXtKurKwjK58+fVivVNE24T4jHcrlcLJbqSp3NZvPFQtf1FSyrKkRPcbaGvbMMQ7es3bVhel6w29oxSqIYwQijOOxJFMWDhZmoH0AU8M7ZRTjOeJNLyaRs+8FuLLv7enu1VSpSfZwWH/4qzxbkZE6OF/XJrDiZladzAnY0I6N5fTw78NPejuYwUx1Py9GkUNq2VZ3i5z+DZ7/4z36yf/jVePEhfHkUfPfOe/F78PrI+fGt+fK9+/y9//yd+/2R//q37Zu3m1d/hG9GMYSKDffOKctdQra4qWpWVjQjssoldqRvSpL2sRzCVkteDvwg5kJwIbkUOWG2z207t6xs6xSpHTHdZJrZbuwGFx2pWdMSKpmQLZdtJ76dPKRD2wrL2i+Xsa7H1xtMdEtOpnIyF9OFWK2RG2pazSj/mmHsVmJJuuc4bcuSlgXFBWM5kVEkIySDUMaoKkqUsK6T98WiaWgU1p5XBEHu+oTGiTRNYdly59Cy7h7K7ZsL49z36dZiGFVpUqW4ZnkJp0mMZZp1tLmf5UrTNL1SpBi8lf+rwA4nQ+n4XrZec8ercyeQqsrNjdA0oRssQu2+uVd1d8VxXDgOeNcethIi61pWFRC+p7zrHjsZHmAxzuD7lDVlVZP9PiuKsqr+pZ4HcdexJEFwZ1Crun4N/RMa4Ww6PzTNtRZCBaFDhXV3vfgmRigGQkjl2C70NdtxbNt2HWe3s6HPUUq7TvzDkb/Fed6GIStLMcQMNg12IICH3ab7xnVb3++ahj/6gw/gCxmfuL3bQrJ0AAAAAElFTkSuQmCC&apos;); background-size: cover; display: block;">\n      <img class="gatsby-resp-image-image" style="width: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;" alt="react php" title="" src="/static/b5fff9e81996175f90c9de3e1a89018f-6ff1c.png" srcset="/static/b5fff9e81996175f90c9de3e1a89018f-6ae3d.png 210w,\n/static/b5fff9e81996175f90c9de3e1a89018f-6ff1c.png 300w" sizes="(max-width: 225px) 100vw, 225px">\n    </span>\n  </span>\n  \n  </a>\n    </a></figure></body></html>\n</blockquote>\n<h2 id="todomvc-benchmarks"><a href="#todomvc-benchmarks" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>TodoMVC Benchmarks</h2>\n<p>Webkit has a <a href="https://github.com/WebKit/webkit/tree/master/PerformanceTests/DoYouEvenBench">TodoMVC Benchmark</a> that compares different frameworks. They recently included React and here are the results (average of 10 runs in Chrome 30):</p>\n<ul>\n<li><strong>AngularJS:</strong> 4043ms</li>\n<li><strong>AngularJSPerf:</strong> 3227ms</li>\n<li><strong>BackboneJS:</strong> 1874ms</li>\n<li><strong>EmberJS:</strong> 6822ms</li>\n<li><strong>jQuery:</strong> 14628ms</li>\n<li><strong>React:</strong> 2864ms</li>\n<li><strong>VanillaJS:</strong> 5567ms</li>\n</ul>\n<p><a href="http://www.petehunt.net/react/tastejs/benchmark.html">Try it yourself!</a></p>\n<p>Please don’t take those numbers too seriously, they only reflect one very specific use case and are testing code that wasn’t written with performance in mind.</p>\n<p>Even though React scores as one of the fastest frameworks in the benchmark, the React code is simple and idiomatic. The only performance tweak used is the following function:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token comment" spellcheck="true">/**\n * This is a completely optional performance enhancement that you can implement\n * on any React component. If you were to delete this method the app would still\n * work correctly (and still be very performant!), we just use it as an example\n * of how little code it takes to get an order of magnitude performance improvement.\n */</span>\nshouldComponentUpdate<span class="token punctuation">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>nextProps<span class="token punctuation">,</span> nextState<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>\n    nextProps<span class="token punctuation">.</span>todo<span class="token punctuation">.</span>id <span class="token operator">!==</span> <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>todo<span class="token punctuation">.</span>id <span class="token operator">||</span>\n    nextProps<span class="token punctuation">.</span>todo <span class="token operator">!==</span> <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>todo <span class="token operator">||</span>\n    nextProps<span class="token punctuation">.</span>editing <span class="token operator">!==</span> <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>editing <span class="token operator">||</span>\n    nextState<span class="token punctuation">.</span>editText <span class="token operator">!==</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>editText\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">,</span>\n</code></pre>\n      </div>\n<p>By default, React “re-renders” all the components when anything changes. This is usually fast enough that you don’t need to care. However, you can provide a function that can tell whether there will be any change based on the previous and next states and props. If it is faster than re-rendering the component, then you get a performance improvement.</p>\n<p>The fact that you can control when components are rendered is a very important characteristic of React as it gives you control over its performance. We are going to talk more about performance in the future, stay tuned.</p>\n<h2 id="guess-the-filter"><a href="#guess-the-filter" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Guess the filter</h2>\n<p><a href="http://conr.me">Connor McSheffrey</a> implemented a small game using React. The goal is to guess which filter has been used to create the Instagram photo.</p>\n<html><head></head><body><figure><a href="http://guessthefilter.com/">\n  <a class="gatsby-resp-image-link" href="/static/f43785b4e739e9b321be15192b6a9e42-fcc4a.jpg" style="display: block" target="_blank" rel="noopener">\n  \n  <span class="gatsby-resp-image-wrapper" style="position: relative; display: block; ; max-width: 375px; margin-left: auto; margin-right: auto;">\n    <span class="gatsby-resp-image-background-image" style="padding-bottom: 86%; position: relative; bottom: 0; left: 0; background-image: url(&apos;data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAARABQDASIAAhEBAxEB/8QAGAABAAMBAAAAAAAAAAAAAAAAAAEEBQP/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEAMQAAABmlpVK2XVAEg//8QAHBAAAQQDAQAAAAAAAAAAAAAAAgADBBMRICIj/9oACAEBAAEFApnBeirBS2jcOl/On//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQMBAT8BH//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQIBAT8BH//EAB4QAAEDBAMAAAAAAAAAAAAAAAIAATIREiAiYYGR/9oACAEBAAY/AgtoPSmygPiBwaKPVtucf//EAB0QAQADAAEFAAAAAAAAAAAAAAEAESExEEFxsdH/2gAIAQEAAT8hxGKN0djXbzwfIUnoQJzq9haKHK4OCd+v/9oADAMBAAIAAwAAABB/CAD/xAAXEQADAQAAAAAAAAAAAAAAAAABESBB/9oACAEDAQE/EAtj/8QAFhEAAwAAAAAAAAAAAAAAAAAAASAx/9oACAECAQE/EBE//8QAHhABAAICAQUAAAAAAAAAAAAAAQARITFBYXGBsfH/2gAIAQEAAT8QdlShGCViusz6JSYl8aRTLqF/KZ5CWBmxPUGgHQazDRPAR0nD3hqf/9k=&apos;); background-size: cover; display: block;">\n      <img class="gatsby-resp-image-image" style="width: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;" alt="guess filter" title="" src="/static/f43785b4e739e9b321be15192b6a9e42-fcc4a.jpg" srcset="/static/f43785b4e739e9b321be15192b6a9e42-6b2e6.jpg 210w,\n/static/f43785b4e739e9b321be15192b6a9e42-48f86.jpg 420w,\n/static/f43785b4e739e9b321be15192b6a9e42-fcc4a.jpg 500w" sizes="(max-width: 375px) 100vw, 375px">\n    </span>\n  </span>\n  \n  </a>\n    </a></figure></body></html>\n<h2 id="react-vs-fruitmachine"><a href="#react-vs-fruitmachine" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>React vs FruitMachine</h2>\n<p><a href="http://trib.tv/">Andrew Betts</a>, director of the <a href="http://labs.ft.com/">Financial Times Labs</a>, posted an article comparing <a href="https://github.com/ftlabs/fruitmachine">FruitMachine</a> and React.</p>\n<blockquote>\n<p>Eerily similar, no? Maybe Facebook was inspired by Fruit Machine (after all, we got there first), but more likely, it just shows that this is a pretty decent way to solve the problem, and great minds think alike. We’re graduating to a third phase in the evolution of web best practice - from intermingling of markup, style and behaviour, through a phase in which those concerns became ever more separated and encapsulated, and finally to a model where we can do that separation at a component level. Developments like Web Components show the direction the web community is moving, and frameworks like React and Fruit Machine are in fact not a lot more than polyfills for that promised behaviour to come.</p>\n<p><a href="http://labs.ft.com/2013/10/client-side-layout-engines-react-vs-fruitmachine/">Read the full article…</a></p>\n</blockquote>\n<p>Even though we weren’t inspired by FruitMachine (React has been used in production since before FruitMachine was open sourced), it’s great to see similar technologies emerging and becoming popular.</p>\n<h2 id="react-brunch"><a href="#react-brunch" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>React Brunch</h2>\n<p><a href="http://elucidata.net/">Matthew McCray</a> implemented <a href="https://npmjs.org/package/react-brunch">react-brunch</a>, a JSX compilation step for <a href="http://brunch.io/">Brunch</a>.</p>\n<blockquote>\n<p>Adds React support to brunch by automatically compiling <code>*.jsx</code> files.</p>\n<p>You can configure react-brunch to automatically insert a react header (<code>/** @jsx React.DOM */</code>) into all <code>*.jsx</code> files. Disabled by default.</p>\n<p>Install the plugin via npm with <code>npm install --save react-brunch</code>.</p>\n<p><a href="https://npmjs.org/package/react-brunch">Read more…</a></p>\n</blockquote>\n<h2 id="random-tweet"><a href="#random-tweet" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Random Tweet</h2>\n<p>I’m going to start adding a tweet at the end of each round-up. We’ll start with this one:</p>\n<blockquote class="twitter-tweet"><p>This weekend <a href="https://twitter.com/search?q=%23angular&amp;src=hash">#angular</a> died for me. Meet new king <a href="https://twitter.com/search?q=%23reactjs&amp;src=hash">#reactjs</a></p>&mdash; Eldar Djafarov &#x30C3; (@edjafarov) <a href="https://twitter.com/edjafarov/statuses/397033796710961152">November 3, 2013</a></blockquote>',excerpt:"This is the 10th round-up already and React has come quite far since it was open sourced. Almost all new web projects at Khan Academy, Facebook, and Instagram are being developed using React. React has been deployed in a variety of contexts: a Chrome extension, a Windows 8 application, mobile websites, and desktop websites supporting Internet Explorer 8! Language-wise, React is not only being used within JavaScript but also CoffeeScript and ClojureScript. The best part is that no drastic changes…",frontmatter:{title:"Community Round-up #10",next:null,prev:null,author:[{frontmatter:{name:"Vjeux",url:"https://twitter.com/vjeux"}}]},fields:{date:"November 05, 2013",path:"blog/2013-11-06-community-roundup-10.md",slug:"/blog/2013/11/06/community-roundup-10.html"}},allMarkdownRemark:{edges:[{node:{frontmatter:{title:"React v16.0"},fields:{slug:"/blog/2017/09/26/react-v16.0.html"}}},{node:{frontmatter:{title:"React v15.6.2"},fields:{slug:"/blog/2017/09/25/react-v15.6.2.html"}}},{node:{frontmatter:{title:"DOM Attributes in React 16"},fields:{slug:"/blog/2017/09/08/dom-attributes-in-react-16.html"}}},{node:{frontmatter:{title:"Error Handle in React 16"},fields:{slug:"/blog/2017/07/26/error-handle-in-react-16.html"}}},{node:{frontmatter:{title:"Error Handling in React 16"},fields:{slug:"/blog/2017/07/26/error-handling-in-react-16.html"}}},{node:{frontmatter:{title:"React v15.6.0"},fields:{slug:"/blog/2017/06/13/react-v15.6.0.html"}}},{node:{frontmatter:{title:"What's New in Create React App"},fields:{slug:"/blog/2017/05/18/whats-new-in-create-react-app.html"}}},{node:{frontmatter:{title:"React v15.5.0"},fields:{slug:"/blog/2017/04/07/react-v15.5.0.html"}}},{node:{frontmatter:{title:"React v15.4.0"},fields:{slug:"/blog/2016/11/16/react-v15.4.0.html"}}},{node:{frontmatter:{title:"Our First 50,000 Stars"},fields:{slug:"/blog/2016/09/28/our-first-50000-stars.html"}}}]}},pathContext:{slug:"/blog/2013/11/06/community-roundup-10.html"}}}});
//# sourceMappingURL=path---blog-2013-11-06-community-roundup-10-html-1bdff41a1a559617780b.js.map