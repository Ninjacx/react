webpackJsonp([0x7fd96684d0f7],{"./node_modules/json-loader/index.js!./.cache/json/docs-components-and-props-html.json":function(n,a){n.exports={data:{markdownRemark:{html:'<p>组件可以将UI切分成一些的独立的、可复用的部件，这样你就只需专注于构建每一个单独的部件。</p>\n<p>组件从概念上看就像是函数，它可以接收任意的输入值（称之为“props”），并返回一个需要在页面上展示的React元素。</p>\n<h2 id="函数定义类定义组件"><a href="#%E5%87%BD%E6%95%B0%E5%AE%9A%E4%B9%89%E7%B1%BB%E5%AE%9A%E4%B9%89%E7%BB%84%E4%BB%B6" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>函数定义/类定义组件</h2>\n<p>定义一个组件最简单的方式是使用JavaScript函数：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token keyword">function</span> <span class="token function">Welcome</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>Hello<span class="token punctuation">,</span> <span class="token punctuation">{</span>props<span class="token punctuation">.</span>name<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>该函数是一个有效的React组件，它接收一个单一的“props”对象并返回了一个React元素。我们之所以称这种类型的组件为函数定义组件，是因为从字面上来看，它就是一个JavaScript函数。</p>\n<p>你也可以使用 <a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Classes">ES6 class</a> 来定义一个组件:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token keyword">class</span> <span class="token class-name">Welcome</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>Hello<span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>name<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>上面两个组件在React中是相同的。</p>\n<p>我们将在<a href="/docs/state-and-lifecycle.html">下一节</a>讨论类的一些额外特性。在那之前，我们都将使用较为简洁的函数定义组件。</p>\n<h2 id="组件渲染"><a href="#%E7%BB%84%E4%BB%B6%E6%B8%B2%E6%9F%93" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>组件渲染</h2>\n<p>在前面，我们遇到的React元素都只是DOM标签：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token keyword">const</span> element <span class="token operator">=</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token punctuation">/></span></span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>然而，React元素也可以是用户自定义的组件：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token keyword">const</span> element <span class="token operator">=</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Welcome</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Sara<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>当React遇到的元素是用户自定义的组件，它会将JSX属性作为单个对象传递给该组件,这个对象称之为“props”。</p>\n<p>例如,这段代码会在页面上渲染出”Hello,Sara”:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="gatsby-highlight-code-line"><span class="token keyword">function</span> <span class="token function">Welcome</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n</span>  <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>Hello<span class="token punctuation">,</span> <span class="token punctuation">{</span>props<span class="token punctuation">.</span>name<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="gatsby-highlight-code-line"><span class="token keyword">const</span> element <span class="token operator">=</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Welcome</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Sara<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">;</span>\n</span>ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  element<span class="token punctuation">,</span>\n  document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">\'root\'</span><span class="token punctuation">)</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p><a href="http://codepen.io/gaearon/pen/YGYmEG?editors=0010">在 CodePen 上试试。</a></p>\n<p>我们来回顾一下在这个例子中发生了什么：</p>\n<ol>\n<li>我们对<code>&#x3C;Welcome name="Sara" /></code>元素调用了<code>ReactDOM.render()</code>方法。</li>\n<li>React将<code>{name: \'Sara\'}</code>作为props传入并调用<code>Welcome</code>组件。</li>\n<li><code>Welcome</code>组件将<code>&#x3C;h1>Hello, Sara&#x3C;/h1></code>元素作为结果返回。</li>\n<li>React DOM将DOM更新为<code>&#x3C;h1>Hello, Sara&#x3C;/h1></code>。</li>\n</ol>\n<blockquote>\n<p><strong>警告:</strong></p>\n<p>组件名称必须以大写字母开头。</p>\n<p>例如，<code>&#x3C;div /></code>表示一个DOM标签，但<code>&#x3C;Welcome /></code>表示一个组件并限定了它的可用范围。</p>\n</blockquote>\n<h2 id="组合组件"><a href="#%E7%BB%84%E5%90%88%E7%BB%84%E4%BB%B6" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>组合组件</h2>\n<p>组件可以在它的输出中引用其它组件，这就可以让我们用同一组件来抽象出任意层次的细节。在React应用中，按钮、表单、对话框、整个屏幕的内容等，这些通常都被表示为组件。</p>\n<p>例如，我们可以创建一个<code>App</code>组件，用来多次渲染<code>Welcome</code>组件：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token keyword">function</span> <span class="token function">Welcome</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>Hello<span class="token punctuation">,</span> <span class="token punctuation">{</span>props<span class="token punctuation">.</span>name<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n<span class="gatsby-highlight-code-line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Welcome</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Sara<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n</span><span class="gatsby-highlight-code-line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Welcome</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Cahal<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n</span><span class="gatsby-highlight-code-line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Welcome</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Edite<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n</span>    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>App</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>\n  document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">\'root\'</span><span class="token punctuation">)</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p><a href="http://codepen.io/gaearon/pen/KgQKPr?editors=0010">在 CodePen 上试试。</a></p>\n<p>通常，一个新的React应用程序的顶部是一个<code>App</code>组件。但是，如果要将React集成到现有应用程序中，则可以从下而上使用像<code>Button</code>这样的小组件作为开始，并逐渐运用到视图层的顶部。</p>\n<blockquote>\n<p><strong>警告:</strong></p>\n<p>组件的返回值只能有一个根元素。这也是我们要用一个<code>&#x3C;div></code>来包裹所有<code>&#x3C;Welcome /></code>元素的原因。</p>\n</blockquote>\n<h2 id="提取组件"><a href="#%E6%8F%90%E5%8F%96%E7%BB%84%E4%BB%B6" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>提取组件</h2>\n<p>你可以将组件切分为更小的组件，这没什么好担心的。</p>\n<p>例如，来看看这个<code>Comment</code>组件：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token keyword">function</span> <span class="token function">Comment</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Comment<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>UserInfo<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Avatar<span class="token punctuation">"</span></span>\n          <span class="token attr-name">src</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>props<span class="token punctuation">.</span>author<span class="token punctuation">.</span>avatarUrl<span class="token punctuation">}</span></span>\n          <span class="token attr-name">alt</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>props<span class="token punctuation">.</span>author<span class="token punctuation">.</span>name<span class="token punctuation">}</span></span>\n        <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>UserInfo-name<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n          <span class="token punctuation">{</span>props<span class="token punctuation">.</span>author<span class="token punctuation">.</span>name<span class="token punctuation">}</span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Comment-text<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n        <span class="token punctuation">{</span>props<span class="token punctuation">.</span>text<span class="token punctuation">}</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Comment-date<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n        <span class="token punctuation">{</span><span class="token function">formatDate</span><span class="token punctuation">(</span>props<span class="token punctuation">.</span>date<span class="token punctuation">)</span><span class="token punctuation">}</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p><a href="http://codepen.io/gaearon/pen/VKQwEo?editors=0010">在 CodePen 上试试。</a></p>\n<p>这个组件接收<code>author</code>(对象)、<code>text</code>(字符串)、以及<code>date</code>(Date对象)作为props, 用来描述一个社交媒体网站上的评论。</p>\n<p>这个组件由于嵌套，变得难以被修改，可复用的部分也难以被复用。所以让我们从这个组件中提取出一些小组件。</p>\n<p>首先，我们来提取<code>Avatar</code>组件：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token keyword">function</span> <span class="token function">Avatar</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>\n<span class="gatsby-highlight-code-line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Avatar<span class="token punctuation">"</span></span>\n</span><span class="gatsby-highlight-code-line">      <span class="token attr-name">src</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>props<span class="token punctuation">.</span>user<span class="token punctuation">.</span>avatarUrl<span class="token punctuation">}</span></span>\n</span><span class="gatsby-highlight-code-line">      <span class="token attr-name">alt</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>props<span class="token punctuation">.</span>user<span class="token punctuation">.</span>name<span class="token punctuation">}</span></span>\n</span><span class="gatsby-highlight-code-line">    <span class="token punctuation">/></span></span>\n</span>  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p><code>Avatar</code>作为<code>Comment</code>的内部组件，不需要知道是否被渲染。因此我们将<code>author</code>改为一个更通用的名字<code>user</code>。</p>\n<p>我们建议从组件自身的角度来命名props，而不是根据使用组件的上下文命名。</p>\n<p>现在我们可以对<code>Comment</code>组件做一些小小的调整：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token keyword">function</span> <span class="token function">Comment</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Comment<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>UserInfo<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n<span class="gatsby-highlight-code-line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Avatar</span> <span class="token attr-name">user</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>props<span class="token punctuation">.</span>author<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n</span>        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>UserInfo-name<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n          <span class="token punctuation">{</span>props<span class="token punctuation">.</span>author<span class="token punctuation">.</span>name<span class="token punctuation">}</span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Comment-text<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n        <span class="token punctuation">{</span>props<span class="token punctuation">.</span>text<span class="token punctuation">}</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Comment-date<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n        <span class="token punctuation">{</span><span class="token function">formatDate</span><span class="token punctuation">(</span>props<span class="token punctuation">.</span>date<span class="token punctuation">)</span><span class="token punctuation">}</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>接下里，我们要提取一个<code>UserInfo</code>组件，用来渲染<code>Avatar</code>旁边的用户名：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token keyword">function</span> <span class="token function">UserInfo</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>\n<span class="gatsby-highlight-code-line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>UserInfo<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n</span><span class="gatsby-highlight-code-line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Avatar</span> <span class="token attr-name">user</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>props<span class="token punctuation">.</span>user<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n</span><span class="gatsby-highlight-code-line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>UserInfo-name<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n</span><span class="gatsby-highlight-code-line">        <span class="token punctuation">{</span>props<span class="token punctuation">.</span>user<span class="token punctuation">.</span>name<span class="token punctuation">}</span>\n</span><span class="gatsby-highlight-code-line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n</span><span class="gatsby-highlight-code-line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n</span>  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>这可以让我们进一步简化<code>Comment</code>组件：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token keyword">function</span> <span class="token function">Comment</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Comment<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n<span class="gatsby-highlight-code-line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>UserInfo</span> <span class="token attr-name">user</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>props<span class="token punctuation">.</span>author<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n</span>      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Comment-text<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n        <span class="token punctuation">{</span>props<span class="token punctuation">.</span>text<span class="token punctuation">}</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Comment-date<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n        <span class="token punctuation">{</span><span class="token function">formatDate</span><span class="token punctuation">(</span>props<span class="token punctuation">.</span>date<span class="token punctuation">)</span><span class="token punctuation">}</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p><a href="http://codepen.io/gaearon/pen/rrJNJY?editors=0010">在 CodePen 上试试。</a></p>\n<p>提取组件一开始看起来像是一项单调乏味的工作，但是在大型应用中，构建可复用的组件完全是值得的。当你的UI中有一部分重复使用了好几次（比如，<code>Button</code>、<code>Panel</code>、<code>Avatar</code>），或者其自身就足够复杂（比如，<code>App</code>、<code>FeedStory</code>、<code>Comment</code>），类似这些都是抽象成一个可复用组件的绝佳选择，这也是一个比较好的做法。</p>\n<h2 id="props的只读性"><a href="#props%E7%9A%84%E5%8F%AA%E8%AF%BB%E6%80%A7" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Props的只读性</h2>\n<p>无论是使用<a href="#%E5%87%BD%E6%95%B0%E5%AE%9A%E4%B9%89/%E7%B1%BB%E5%AE%9A%E4%B9%89%E7%BB%84%E4%BB%B6">函数或是类</a>来声明一个组件，它决不能修改它自己的props。来看这个<code>sum</code>函数：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token keyword">function</span> <span class="token function">sum</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> a <span class="token operator">+</span> b<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>类似于上面的这种函数称为<a href="https://en.wikipedia.org/wiki/Pure_function">“纯函数”</a>，它没有改变它自己的输入值，当传入的值相同时，总是会返回相同的结果。</p>\n<p>与之相对的是非纯函数，它会改变它自身的输入值：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token keyword">function</span> <span class="token function">withdraw</span><span class="token punctuation">(</span>account<span class="token punctuation">,</span> amount<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  account<span class="token punctuation">.</span>total <span class="token operator">-=</span> amount<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>React是非常灵活的，但它也有一个严格的规则：</p>\n<p><strong>所有的React组件必须像纯函数那样使用它们的props。</strong></p>\n<p>当然，应用的界面是随时间动态变化的，我们将在<a href="/docs/state-and-lifecycle.html">下一节</a>介绍一种称为“state”的新概念，State可以在不违反上述规则的情况下，根据用户操作、网络响应、或者其他状态变化，使组件动态的响应并改变组件的输出。</p>',
frontmatter:{title:"组件 & Props",next:"state-and-lifecycle.html",prev:"rendering-elements.html"},fields:{path:"docs/components-and-props.md",slug:"docs/components-and-props.html"}}},pathContext:{slug:"docs/components-and-props.html"}}}});
//# sourceMappingURL=path---docs-components-and-props-html-b392dc15a6146b260273.js.map