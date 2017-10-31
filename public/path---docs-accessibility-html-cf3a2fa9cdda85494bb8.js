webpackJsonp([0xda0c20c4d4c4],{"./node_modules/json-loader/index.js!./.cache/json/docs-accessibility-html.json":function(a,n){a.exports={data:{markdownRemark:{html:'<h2 id="为何要需要可访问性？"><a href="#%E4%B8%BA%E4%BD%95%E8%A6%81%E9%9C%80%E8%A6%81%E5%8F%AF%E8%AE%BF%E9%97%AE%E6%80%A7%EF%BC%9F" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>为何要需要可访问性？</h2>\n<p>Web可访问性（也被称为 <a href="https://en.wiktionary.org/wiki/a11y"><strong>a11y</strong></a>）是让网站对所有人群可用的的设计和发明。通过辅助技术来与页面交互对于可访问性支持是必要的。</p>\n<p>React完全支持构建可访问性的页面， 通常通过使用标准的 HTML 技术。</p>\n<h2 id="标准和指导"><a href="#%E6%A0%87%E5%87%86%E5%92%8C%E6%8C%87%E5%AF%BC" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>标准和指导</h2>\n<h3 id="wcag"><a href="#wcag" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>WCAG</h3>\n<p><a href="https://www.w3.org/WAI/intro/wcag">网络内容可访问性指南</a> 为创建可访问性站点提供了指导。</p>\n<p>下列的WCAG列表提供了概览：</p>\n<ul>\n<li><a href="https://www.wuhcag.com/wcag-checklist/">WCAG checklist from Wuhcag</a></li>\n<li><a href="http://webaim.org/standards/wcag/checklist">WCAG checklist from WebAIM</a></li>\n<li><a href="http://a11yproject.com/checklist.html">Checklist from The A11Y Project</a></li>\n</ul>\n<h3 id="wai-aria"><a href="#wai-aria" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>WAI-ARIA</h3>\n<p><a href="https://www.w3.org/WAI/intro/aria">网络可访问倡议 - 可访问性富网络应用</a> 文档涵盖了构建完整的可访问JavaScript工具技术。</p>\n<p>注意JSX完全支持所有的<code>aria-*</code> HTML属性。然而，在React中大部分DOM属性和特性采用小驼峰命名规则，这些特性应该采用小写：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span>\n  <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> \n<span class="gatsby-highlight-code-line">  <span class="token attr-name">aria-label</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>labelText<span class="token punctuation">}</span></span>\n</span><span class="gatsby-highlight-code-line">  <span class="token attr-name">aria-required</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span>\n</span>  <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>onchangeHandler<span class="token punctuation">}</span></span>\n  <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>inputValue<span class="token punctuation">}</span></span>\n  <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>name<span class="token punctuation">"</span></span>\n<span class="token punctuation">/></span></span>\n</code></pre>\n      </div>\n<h2 id="可访问表单"><a href="#%E5%8F%AF%E8%AE%BF%E9%97%AE%E8%A1%A8%E5%8D%95" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>可访问表单</h2>\n<h3 id="标签"><a href="#%E6%A0%87%E7%AD%BE" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>标签</h3>\n<p>每个HTML表单控件，例如<code>&#x3C;input></code> 和 <code>&#x3C;textarea></code>，都需要被标记上的可访问的标签。我们需要提供描述性的标签同时也展示给屏幕阅读器。</p>\n<p>下列资源展示了如何使用标签：</p>\n<ul>\n<li><a href="https://www.w3.org/WAI/tutorials/forms/labels/">W3C关于如何标记元素的说明</a></li>\n<li><a href="http://webaim.org/techniques/forms/controls">WebAIM关于如何标记元素的说明</a></li>\n<li><a href="https://www.paciellogroup.com/blog/2017/04/what-is-an-accessible-name/">Paciello小组关于可访问性名称的说明</a></li>\n</ul>\n<p>尽管这些标准的HTML实践可以直接用于React，但需要注意在JSX中，<code>for</code>特性被写作<code>htmlFor</code>:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="gatsby-highlight-code-line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span> <span class="token attr-name">htmlFor</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>namedInput<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Name<span class="token punctuation">:</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">></span></span>\n</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>namedInput<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>name<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>\n</code></pre>\n      </div>\n<h3 id="告知用户异常"><a href="#%E5%91%8A%E7%9F%A5%E7%94%A8%E6%88%B7%E5%BC%82%E5%B8%B8" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>告知用户异常</h3>\n<p>异常环境需要所有用户理解。下列链接也说明了如何显示错误文案给屏幕阅读器：</p>\n<ul>\n<li><a href="https://www.w3.org/WAI/tutorials/forms/notifications/">W3C演示用户提醒</a></li>\n<li><a href="http://webaim.org/techniques/formvalidation/">WebAIM检查表单验证</a></li>\n</ul>\n<h2 id="焦点控件"><a href="#%E7%84%A6%E7%82%B9%E6%8E%A7%E4%BB%B6" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>焦点控件</h2>\n<p>确保你的网络应用可以完全仅通过键盘来操作：</p>\n<ul>\n<li><a href="http://webaim.org/techniques/keyboard/">WebAIM 关于键盘可访问性的演讲</a></li>\n</ul>\n<h3 id="键盘焦点和焦点边框"><a href="#%E9%94%AE%E7%9B%98%E7%84%A6%E7%82%B9%E5%92%8C%E7%84%A6%E7%82%B9%E8%BE%B9%E6%A1%86" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>键盘焦点和焦点边框</h3>\n<p>键盘焦点涉及DOM中被键盘选中用于接受输入的当前元素。我们可以在每一处地方看见如下图所示的类似的焦点边框：</p>\n<html><head></head><body></body></html>\n<p>仅能使用CSS来移除这一边框，若你要用其他边框来替换他，例如可以设置<code>outline: 0</code>。</p>\n<h3 id="定位到期望内容的机制"><a href="#%E5%AE%9A%E4%BD%8D%E5%88%B0%E6%9C%9F%E6%9C%9B%E5%86%85%E5%AE%B9%E7%9A%84%E6%9C%BA%E5%88%B6" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>定位到期望内容的机制</h3>\n<p>在应用中提供一种机制用以允许用户跳过之前的导航部分来帮助和加速键盘导航。</p>\n<p>Skiplinks 或 Skip Navigation Links 隐藏在导航链接中，仅当用户用键盘与页面进行交互时可见。他们非常容易通过页面内部锚点和一些样式来实现：</p>\n<ul>\n<li><a href="http://webaim.org/techniques/skipnav/">WebAIM - Skip Navigation Links</a></li>\n</ul>\n<p>也可使用路标元素和角色作为辅助技术，例如<code>&#x3C;main></code> 和 <code>&#x3C;aside></code>，来将页面划分区域以允许用户快速导航到这些部分。</p>\n<p>阅读更多了解关于使用这些元素以提高可访问性：</p>\n<ul>\n<li><a href="https://dequeuniversity.com/assets/html/jquery-summit/html5/slides/landmarks.html">Deque University - HTML 5 and ARIA Landmarks</a></li>\n</ul>\n<h3 id="编程式地管理焦点"><a href="#%E7%BC%96%E7%A8%8B%E5%BC%8F%E5%9C%B0%E7%AE%A1%E7%90%86%E7%84%A6%E7%82%B9" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>编程式地管理焦点</h3>\n<p>我们的React应用会在运行期间持续地修改HTML DOM元素，有时会导致键盘焦点丢失或定位到未知元素上。为修复该问题，我们需要用代码微调键盘焦点到正确的方向。例如，重设键盘焦点到一个打开模态窗口的按钮上，在模态窗口关闭之后。</p>\n<p>Mozilla开发者网络可以查看并描述了我们如何构建<a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/Keyboard-navigable_JavaScript_widgets">键盘导航的JavaScript工具</a>。</p>\n<p>为在React中设置焦点，我们可使用<a href="refs-and-the-dom.html">Refs to Components</a>。</p>\n<p>为使用它，我们先在组件类的JSX中创建一个元素的ref：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n<span class="gatsby-highlight-code-line">  <span class="token comment" spellcheck="true">// Use the `ref` callback to store a reference to the text input DOM</span>\n</span><span class="gatsby-highlight-code-line">  <span class="token comment" spellcheck="true">// element in an instance field (for example, this.textInput).</span>\n</span>  <span class="token keyword">return</span> <span class="token punctuation">(</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span>\n      <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span>\n<span class="gatsby-highlight-code-line">      <span class="token attr-name">ref</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span>input<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span> <span class="token keyword">this</span><span class="token punctuation">.</span>textInput <span class="token operator">=</span> input<span class="token punctuation">;</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n</span>  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>而后，当需要时，我们可以在我们组件的其他地方设置焦点：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token function">focus</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token comment" spellcheck="true">// Explicitly focus the text input using the raw DOM API</span>\n  <span class="token keyword">this</span><span class="token punctuation">.</span>textInput<span class="token punctuation">.</span><span class="token function">focus</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>一个不错的焦点管理的例子是<a href="https://github.com/davidtheclark/react-aria-modal">react-aria-modal</a>。这是个相对罕见的完全可访问的模态窗口的例子。不仅将初始焦点设在取消按钮（阻止用户意外地激活成功操作）和在模态对话框内记录键盘焦点，其还重置焦点回到最初触发对话框的元素上。</p>\n<blockquote>\n<p>注意：</p>\n</blockquote>\n<blockquote>\n<p>尽管这对于可访问性特性非常重要，其也应该审慎地应用。当被中断时使用其来修复键盘的焦点，而不是尝试和期望用户如何使用应用。</p>\n</blockquote>\n<h2 id="更为复杂的工具"><a href="#%E6%9B%B4%E4%B8%BA%E5%A4%8D%E6%9D%82%E7%9A%84%E5%B7%A5%E5%85%B7" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>更为复杂的工具</h2>\n<p>更为复杂的用户体验并不意味着更少的可访问性特性。反之，可访问性能够通过将其尽可能编码到HTML中而非常容易实现，即使最为复杂的工具也能够进行可访问性编码。</p>\n<p>这里我们要求具备 <a href="https://www.w3.org/TR/wai-aria/roles">ARIA 角色</a> 以及 <a href="https://www.w3.org/TR/wai-aria/states_and_properties">ARIA 声明和属性</a>的相关知识。这些工具箱涵盖了所有JSX支持的同时能够支持构建完整的可访问性高阶函数式的React组件的HTML特性。</p>\n<p>每一类型的工具都具有特定的设计模式，并由用户和用户代理以某些方式生效：</p>\n<ul>\n<li><a href="https://www.w3.org/TR/wai-aria-practices/#aria_ex">WAI-ARIA 开发实践 - 设计模式和工具</a></li>\n<li><a href="http://heydonworks.com/practical_aria_examples/">Heydon Pickering - ARIA 例子</a></li>\n<li><a href="https://inclusive-components.design/">包含性组件</a></li>\n</ul>\n<h2 id="其他要点的考量"><a href="#%E5%85%B6%E4%BB%96%E8%A6%81%E7%82%B9%E7%9A%84%E8%80%83%E9%87%8F" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>其他要点的考量</h2>\n<h3 id="设置语言"><a href="#%E8%AE%BE%E7%BD%AE%E8%AF%AD%E8%A8%80" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>设置语言</h3>\n<p>在页面中声明语言类型以让屏幕阅读器软件能够使用其来选择正确的发音设置：</p>\n<ul>\n<li><a href="http://webaim.org/techniques/screenreader/#language">WebAIM - 文档语言</a></li>\n</ul>\n<h3 id="设置文档标题"><a href="#%E8%AE%BE%E7%BD%AE%E6%96%87%E6%A1%A3%E6%A0%87%E9%A2%98" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>设置文档标题</h3>\n<p>我们可以在React中使用<a href="https://github.com/gaearon/react-document-title">React文档标题组件</a>来进行设置。</p>\n<h3 id="颜色对比"><a href="#%E9%A2%9C%E8%89%B2%E5%AF%B9%E6%AF%94" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>颜色对比</h3>\n<p>确保页面上所有可读的文本都有丰富的颜色对比以让低视力用户能够最大程度的可读：</p>\n<ul>\n<li><a href="https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html">WCAG - 理解必要的颜色对比</a></li>\n<li><a href="https://www.smashingmagazine.com/2014/10/color-contrast-tips-and-tools-for-accessibility/">关于颜色对比以及为何需要重新思考它</a></li>\n<li><a href="http://a11yproject.com/posts/what-is-color-contrast/">A11yProject - 什么是颜色对比</a></li>\n</ul>\n<p>手动地计算页面上所有合适的颜色组合十分无趣，替代地，你可以<a href="http://jxnblk.com/colorable/">通过Colorable来计算整个可访问性颜色</a>。</p>\n<p>之前提到的aXe和WAVE也包含了颜色对比测试并会报告颜色对比错误。</p>\n<p>若你想扩展你的对比测试能力，可以使用如下工具：</p>\n<ul>\n<li>\n<p><a href="http://webaim.org/resources/contrastchecker/">WebAIM - Color Contrast Checker</a></p>\n</li>\n<li>\n<p><a href="https://www.paciellogroup.com/resources/contrastanalyser/">The Paciello Group - Color Contrast Analyzer</a></p>\n</li>\n</ul>\n<h2 id="开发及测试工具"><a href="#%E5%BC%80%E5%8F%91%E5%8F%8A%E6%B5%8B%E8%AF%95%E5%B7%A5%E5%85%B7" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>开发及测试工具</h2>\n<p>在创建可访问性网路应用时，有大量工具可以协助我们完成该工作。</p>\n<h3 id="键盘"><a href="#%E9%94%AE%E7%9B%98" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>键盘</h3>\n<p>目前最简单也是最重要的检查是通过键盘来整个页面是否达标和使用。做法如下：</p>\n<ol>\n<li>拔掉鼠标。</li>\n<li>使用<code>Tab</code>和<code>Shift+Tab</code>切换到浏览器。</li>\n<li>使用<code>Enter</code>激活元素。</li>\n<li>当满足要求后，使用键盘的方向键与一些元素进行交互，例如菜单和下拉列表。</li>\n</ol>\n<h3 id="开发助手"><a href="#%E5%BC%80%E5%8F%91%E5%8A%A9%E6%89%8B" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>开发助手</h3>\n<p>我们可以在JSX代码里直接查看一些可访问性特性。通常在一些识别JSX语法的集成开发环境中（IDE）已经提供了为ARIA用户（roles），声明和属性的智能检查。我们也可采用如下工具：</p>\n<h4 id="eslint-plugin-jsx-a11y"><a href="#eslint-plugin-jsx-a11y" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>eslint-plugin-jsx-a11y</h4>\n<p> 基于ESLint的<a href="https://github.com/evcohen/eslint-plugin-jsx-a11y">eslint-plugin-jsx-a11y</a> 插件提供了在JSX代码中关于可访问性问题的抽象语法树检查反馈。大部分IDE能够直接在代码分析和源码窗口中直接集成这些发现。</p>\n<p><a href="https://github.com/facebookincubator/create-react-app">Create React App</a>包含了带有部分激活规则的这一插件。若想要支持更多的可访问性规则，你可以在项目的根目录下创建一个<code>.eslintrc</code>文件并包含如下内容：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsxon"><code>{\n  "extends": ["react-app", "plugin:jsx-a11y/recommended"],\n  "plugins": ["jsx-a11y"]\n}</code></pre>\n      </div>\n<h3 id="浏览器的可访问性测试"><a href="#%E6%B5%8F%E8%A7%88%E5%99%A8%E7%9A%84%E5%8F%AF%E8%AE%BF%E9%97%AE%E6%80%A7%E6%B5%8B%E8%AF%95" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>浏览器的可访问性测试</h3>\n<p>在浏览器里已有大量工具能够在页面上运行可访问性审计。可以结合之前提到过的其他可访问性检查工具来使用他们，因为他们仅可以测试HTML中技术上的可访问性。</p>\n<h4 id="axe-axe-core-and-react-axe"><a href="#axe-axe-core-and-react-axe" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>aXe, aXe-core and react-axe</h4>\n<p>双端系统为应用提供了自动化和端到端的可访问性测试<a href="https://www.deque.com/products/axe-core/">aXe-core</a> 。这一模块包含了Selenium的集成。</p>\n<p><a href="https://www.deque.com/products/axe/">可访问性Engine</a> 或 aXe，是一款基于<code>aXe-core</code>构建的可访问性检测器的浏览器插件。</p>\n<p>你也可以在开发和调试环节，使用<a href="https://github.com/dylanb/react-axe">react-axe</a>模块在控制台中直接报告可访问性问题。</p>\n<h4 id="webaim-wave"><a href="#webaim-wave" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>WebAIM WAVE</h4>\n<p><a href="http://wave.webaim.org/extension/">Web Accessibility Evaluation Tool</a> 是另外一个可访问性浏览器插件。</p>\n<h4 id="accessibility-inspectors-and-the-accessibility-tree"><a href="#accessibility-inspectors-and-the-accessibility-tree" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Accessibility inspectors and the Accessibility Tree</h4>\n<p><a href="https://www.paciellogroup.com/blog/2015/01/the-browser-accessibility-tree/">可访问树（The Accessibility Tree）</a> 是一个DOM结构的子集，其包含每个应暴露给辅助性工具，如屏幕阅读器等DOM元素的可访问性对象。</p>\n<p>在一些浏览器我们可以在可访问树中轻松地访问每个元素的可访问性信息：</p>\n<ul>\n<li><a href="https://gist.github.com/marcysutton/0a42f815878c159517a55e6652e3b23a">在Chrome浏览器下激活Accessibility Inspector</a></li>\n<li><a href="https://developer.apple.com/library/content/documentation/Accessibility/Conceptual/AccessibilityMacOSX/OSXAXTestingApps.html">在OS X系统下的Safari浏览器使用Accessibility Inspector</a></li>\n</ul>\n<h3 id="屏幕阅读器"><a href="#%E5%B1%8F%E5%B9%95%E9%98%85%E8%AF%BB%E5%99%A8" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>屏幕阅读器</h3>\n<p>结合屏幕阅读器进行测试应构成可访问性测试的一部分。</p>\n<p>注意浏览器 / 屏幕阅读器的结合。建议在浏览器中选择最适合的屏幕阅读器测试应用程序。</p>\n<h4 id="firefox下的nvda"><a href="#firefox%E4%B8%8B%E7%9A%84nvda" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>FireFox下的NVDA</h4>\n<p><a href="https://www.nvaccess.org/">NonVisual Desktop Access</a> 或 NVDA是一款广泛使用的开源的窗口屏幕阅读器。</p>\n<p>关于如何更好使用NVDA参考如下指南:</p>\n<ul>\n<li><a href="http://webaim.org/articles/nvda/">WebAIM - 使用 NVDA来计算可访问性</a></li>\n<li><a href="https://dequeuniversity.com/screenreaders/nvda-keyboard-shortcuts">Deque - NVDA 快捷键介绍</a></li>\n</ul>\n<h4 id="safari下的voiceover"><a href="#safari%E4%B8%8B%E7%9A%84voiceover" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Safari下的VoiceOver</h4>\n<p>VoiceOver是一款集成在苹果设备的屏幕阅读器。</p>\n<p>参考以下指南了解关于如何集合和使用VoiceOver：</p>\n<ul>\n<li><a href="http://webaim.org/articles/voiceover/">WebAIM - 使用 VoiceOver 计算可访问性</a></li>\n<li><a href="https://dequeuniversity.com/screenreaders/voiceover-keyboard-shortcuts">Deque - OSX 上的VoiceOver 快捷键操作</a></li>\n<li><a href="https://dequeuniversity.com/screenreaders/voiceover-ios-shortcuts">Deque - iOS上的VoiceOver快捷键操作</a></li>\n</ul>\n<h4 id="internet-explorer下的jaws"><a href="#internet-explorer%E4%B8%8B%E7%9A%84jaws" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Internet Explorer下的JAWS</h4>\n<p><a href="http://www.freedomscientific.com/Products/Blindness/JAWS">Job Access With Speech</a> or JAWS，是一款在Windows平台广泛使用的屏幕阅读器。</p>\n<p>参考以下链接了解关于更好使用JAWS</p>\n<ul>\n<li><a href="http://webaim.org/articles/jaws/">WebAIM - 使用 JAWS 计算可访问性</a></li>\n<li><a href="https://dequeuniversity.com/screenreaders/jaws-keyboard-shortcuts">Deque - JAWS 快捷键操作</a></li>\n</ul>',frontmatter:{title:"Accessibility",next:null,prev:null},fields:{path:"docs/accessibility.md",slug:"docs/accessibility.html"}}},pathContext:{slug:"docs/accessibility.html"}}}});
//# sourceMappingURL=path---docs-accessibility-html-cf3a2fa9cdda85494bb8.js.map