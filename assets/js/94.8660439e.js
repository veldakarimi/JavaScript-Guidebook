(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{337:function(o,e,t){"use strict";t.r(e);var v=t(0),a=Object(v.a)({},(function(){var o=this,e=o.$createElement,t=o._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":o.$parent.slotKey}},[t("h1",{attrs:{id:"cookie"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cookie"}},[o._v("#")]),o._v(" Cookie")]),o._v(" "),t("p",[o._v("HTTP Cookie，通常直接叫做 Cookie，是服务端保存在浏览器的一小段文本信息。每个 Cookie 的大小一般不超过 4kb。该标准要求服务器对任意 HTTP 请求发送 Set-Cookie 作为响应的一部分，其中包含会话信息。")]),o._v(" "),t("h2",{attrs:{id:"运作原理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#运作原理"}},[o._v("#")]),o._v(" 运作原理")]),o._v(" "),t("p",[o._v("首先必须明确一点，存储 Cookie 是浏览器提供的功能。Cookie 其实是存储在浏览器中的纯文本，浏览器的安装目录下会专门有一个 Cookie 文件夹用于存放各个域下设置的 Cookie。")]),o._v(" "),t("p",[o._v("当网页要发 HTTP 请求时，浏览器会先检查是否有相应的 Cookie，有则自动添加在请求头中的 Cookie 字段中。这些是浏览器自动帮我们完成的，而且每一次 HTTP 请求浏览器都会自动帮我们完成。这个特点很重要，因为这关系关乎于什么样的数据适合存储在 Cookie 中。")]),o._v(" "),t("p",[o._v("存储在 Cookie 中的数据，每次都会被浏览器自动放在 HTTP 请求中，如果这些数据并不是每个请求都需要发给服务端的数据，浏览器设置自动处理无疑增加了网络开销；但如果这些数据是每个请求都需要发给服务端的数据（比如身份认证信息），浏览器这设置自动处理就大大免去了重复添加操作。所以对于设置那些“每次请求都要携带的信息（最典型的就是身份认证信息）”就特别适合放在  Cookie 中，其他类型的数据就不适合了。")]),o._v(" "),t("p",[o._v("但在 LocalStorage 出现之前，Cookie 被滥用当做了浏览器的存储工具。什么数据都放在 Cookie 中，即使这些数据只在页面中使用而不需要随请求传送到服务端。当然 Cookie 标准还是做了一些限制的：每个域名下的 Cookie 的大小最大为 4KB，每个域名下的 Cookie 数量最多为 20 个（但很多浏览器厂商在具体实现时支持大于 20 个）。")]),o._v(" "),t("h2",{attrs:{id:"构成"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#构成"}},[o._v("#")]),o._v(" 构成")]),o._v(" "),t("table",[t("thead",[t("tr",[t("th",[o._v("属性")]),o._v(" "),t("th",[o._v("名称")]),o._v(" "),t("th",[o._v("说明")])])]),o._v(" "),t("tbody",[t("tr",[t("td",[o._v("Name")]),o._v(" "),t("td",[o._v("名称")]),o._v(" "),t("td",[o._v("Cookie 名称不能相同，相同的名称会被覆盖。")])]),o._v(" "),t("tr",[t("td",[o._v("Value")]),o._v(" "),t("td",[o._v("值")]),o._v(" "),t("td",[o._v("储存在 Cookie 中的字符串值。值必须被 URL 编码。")])]),o._v(" "),t("tr",[t("td",[o._v("Domain")]),o._v(" "),t("td",[o._v("域")]),o._v(" "),t("td",[o._v("当该值与客户端请求的域相匹配时，浏览器会自动添加到请求头中。")])]),o._v(" "),t("tr",[t("td",[o._v("Path")]),o._v(" "),t("td",[o._v("路径")]),o._v(" "),t("td",[o._v("对于指定域中的那个路径，应该向服务器发送 Cookie。例如，你可以指定 Cookie 只有从 "),t("code",[o._v("http://www.wrox.com/books/")]),o._v(" 中才能访问，那么 "),t("code",[o._v("http://www.wrox.com")]),o._v(" 的页面就不会发送 Cookie 信息，即使请求都是来自同一个域的。")])]),o._v(" "),t("tr",[t("td",[o._v("Expires")]),o._v(" "),t("td",[o._v("失效时间")]),o._v(" "),t("td",[o._v("表示 Cookie 将被删除的时间戳。"),t("a",{attrs:{href:"#expires"}},[o._v("📍详情点击")])])]),o._v(" "),t("tr",[t("td",[o._v("Max-Age")]),o._v(" "),t("td",[o._v("失效时间")]),o._v(" "),t("td",[o._v("表示 Cookie 将被删除的剩余时间，单位为秒。过了这个时间 ，浏览器将不会保留这个 Cookie。如果同时指定了 Expires 和 Max-Age，那么 Max-Age 的值将优先生效。")])]),o._v(" "),t("tr",[t("td",[o._v("Size")]),o._v(" "),t("td",[o._v("大小")]),o._v(" "),t("td",[o._v("Cookie 大小")])]),o._v(" "),t("tr",[t("td",[o._v("HTTP")]),o._v(" "),t("td"),o._v(" "),t("td",[o._v("指定该 Cookie 无法通过 JavaScript 脚本访问。主要是 "),t("code",[o._v("document.cookie")]),o._v(" 属性、"),t("code",[o._v("XMLHttpRequest")]),o._v(" 对象和 "),t("code",[o._v("Request API")]),o._v(" 都无法访问。唯有浏览器发送 HTTP 请求时，才会自动添加 Cookie 至请求中。")])]),o._v(" "),t("tr",[t("td",[o._v("Secure")]),o._v(" "),t("td",[o._v("安全标志")]),o._v(" "),t("td",[o._v("浏览器只有在加密协议 HTTPS 下，才将这个 Cookie 发送到服务器。另一方面，如果当前协议是 HTTP，浏览器会自动忽略服务器发来的的 Secure 属性。")])]),o._v(" "),t("tr",[t("td",[o._v("SameSite")]),o._v(" "),t("td"),o._v(" "),t("td")])])]),o._v(" "),t("h4",{attrs:{id:"name"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#name"}},[o._v("#")]),o._v(" Name")]),o._v(" "),t("ul",[t("li",[o._v("不区分大小写")]),o._v(" "),t("li",[o._v("实践中需要区分大小写，某些服务器会处理")]),o._v(" "),t("li",[o._v("名称必须是 URL 编码")])]),o._v(" "),t("blockquote",[t("p",[o._v("由于 Cookie 规定是名称/值是不允许包含分号，逗号，空格的，所以为了不给用户到来麻烦，考虑服务器的兼容性，任何存储 Cookie 的数据都应该被编码。")])]),o._v(" "),t("h4",{attrs:{id:"expires"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#expires"}},[o._v("#")]),o._v(" Expires")]),o._v(" "),t("ul",[t("li",[o._v("必须为 GMT 格式的日期（Wdy，DD-Mon-YYYY HH:SS GMT），用于指定应该删除 Cookie 的准确时间。可以通过 "),t("code",[o._v("new Date().toGMTString()")]),o._v(" 或者 "),t("code",[o._v("new Date().toUTCString()")]),o._v(" 来获得。")]),o._v(" "),t("li",[o._v("如果没有设置 Expires，则默认有效期为 session，即当浏览器会话结束时即将所有 Cookie 删除。")]),o._v(" "),t("li",[o._v("Cookie 可在浏览器关闭后依然保存在用户的机器上。")]),o._v(" "),t("li",[o._v("如果你设置的失效日期是个以前的时间，则 Cookie 会被立刻删除。")])]),o._v(" "),t("h4",{attrs:{id:"domain-和-path"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#domain-和-path"}},[o._v("#")]),o._v(" Domain 和 Path")]),o._v(" "),t("ul",[t("li",[o._v("Domain\n"),t("ul",[t("li",[o._v("如果没有明确设置，那么浏览器会自动获取 url 的 host 作为 domain 值")]),o._v(" "),t("li",[o._v("这个值可以包含子域（subdomain，如 "),t("code",[o._v("www.javascript.com")]),o._v("），也可以不包含它（如 "),t("code",[o._v(".javascript.com")]),o._v("，则对于 "),t("code",[o._v("javascript.com")]),o._v(" 的所有子域都有效）")]),o._v(" "),t("li",[o._v("新的规范中，显式设置 domain 时，如果 value 最前面带点，则浏览器处理时会将这个点去掉，所以最后浏览器存的就是没有点的（注意：但目前大多数浏览器并未全部这么实现）")]),o._v(" "),t("li",[o._v("前面带点和不带点的区别\n"),t("ul",[t("li",[o._v("带点：任何 subdomain 都可以访问，包括父 domain")]),o._v(" "),t("li",[o._v("不带点：只有完全一样的域名才能访问，subdomain 不能（但在 IE 下比较特殊，它支持 subdomain 访问）")])])])])]),o._v(" "),t("li",[o._v("Path\n"),t("ul",[t("li",[o._v("默认值为设置该 Cookie 的网页所在的目录")])])])]),o._v(" "),t("blockquote",[t("p",[o._v("⚠️ 注意：发生跨域 XHR 请求时，即使请求 URL 的域名和路径都满足 Cookie 的 domain 和 path，默认情况下 Cookie 也不会自动被添加到请求头部中。")]),o._v(" "),t("p",[o._v("⚠️ 注意：domain 是可以设置为页面本身的域名（本域），或页面本身域名的父域，但不能是公共后缀 "),t("a",{attrs:{href:"https://link.juejin.im?target=https%3A%2F%2Fpublicsuffix.org%2F",target:"_blank",rel:"noopener noreferrer"}},[o._v("public suffix"),t("OutboundLink")],1),o._v("。举例说明下：如果页面域名为 "),t("code",[o._v("www.baidu.com")]),o._v("，"),t("code",[o._v("domain")]),o._v(" 可以设置为 "),t("code",[o._v("www.baidu.com")]),o._v("，也可以设置为 "),t("code",[o._v("baidu.com")]),o._v("，但不能设置为 "),t("code",[o._v(".com")]),o._v(" 或 "),t("code",[o._v("com")]),o._v("。")])]),o._v(" "),t("h4",{attrs:{id:"http"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#http"}},[o._v("#")]),o._v(" HTTP")]),o._v(" "),t("ul",[t("li",[o._v("该属性为 Cookie 的 HttpOnly 属性\n"),t("ul",[t("li",[o._v("当值为 true 时，则只有在 HTTP 请求头中会带此 Cookie 的信息，客户端无法通过 JavaScrept 代码访问 cookie。（能有效地防止 XSS 攻击）")]),o._v(" "),t("li",[o._v("当值为 false 时，客户端可以通过 JavaScript 代码去访问（包括读取、修改、删除等）这个 Cookie 的。")])])]),o._v(" "),t("li",[o._v("在客户端不能通过 JavaScript 代码去设置一个 "),t("code",[o._v("HttpOnly")]),o._v(" 类型的 cookie，而需要通过服务端来设置。")])]),o._v(" "),t("h2",{attrs:{id:"特性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#特性"}},[o._v("#")]),o._v(" 特性")]),o._v(" "),t("ol",[t("li",[o._v("一个浏览器针对一个网站最多存 20 个 Cookie，浏览器一般只允许存放 300 个 Cookie")]),o._v(" "),t("li",[o._v("每个 Cookie 的长度不能超过 4KB（稀缺）。但不同的浏览器实现的不同")]),o._v(" "),t("li",[o._v("Cookie 的不可跨域名性。")]),o._v(" "),t("li",[o._v("浏览器的同源政策规定，两个网址只要域名和端口相同，就可以共享 Cookie。注意，这里不要求协议相同。")])]),o._v(" "),t("h2",{attrs:{id:"分类"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#分类"}},[o._v("#")]),o._v(" 分类")]),o._v(" "),t("p",[o._v("Cookie 有两种类型：")]),o._v(" "),t("ul",[t("li",[o._v("临时 Cookie")]),o._v(" "),t("li",[o._v("永久 Cookie")])]),o._v(" "),t("p",[o._v("不设置过期时间，则表示这个 Cookie 生命周期为浏览器会话期间，只要关闭浏览器窗口，cookie 就消失了。这种生命周期为浏览器会话期的 Cookie 被称为会话 cookie。会话 Cookie 一般不保存在硬盘上二十保存在内存里。可以类比于本地存储的 SessionStorage。")]),o._v(" "),t("p",[o._v("设置了过期时间，浏览器就会把 Cookie 保存到硬盘上，关闭后再次打开浏览器，这些 Cookie 依然有效直到超过设定的过期时间。")]),o._v(" "),t("p",[o._v("存储在硬盘上的 Cookie 可以在不同的浏览器进程间共享，比如两个 IE 窗口。而对于保存在内存的 cookie，不同的浏览器有不同的处理方式。可以类比于本地存储的 LocalStorage。")]),o._v(" "),t("h2",{attrs:{id:"设置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#设置"}},[o._v("#")]),o._v(" 设置")]),o._v(" "),t("h4",{attrs:{id:"服务端设置-cookie"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#服务端设置-cookie"}},[o._v("#")]),o._v(" 服务端设置 Cookie")]),o._v(" "),t("p",[o._v("服务端通过对客户端的网络请求的响应头，设置字段 "),t("code",[o._v("Set-Cookie")]),o._v(" 进行设置 cookie。")]),o._v(" "),t("ul",[t("li",[o._v("一个 Set-Cookie 字段只能设置一个 cookie，当你要设置多个 cookie，需要添加同样多的 Set-Cookie 字段")]),o._v(" "),t("li",[o._v("服务端可以设置 Cookie 的所有选项：Expires、Domain、Path、Secure、HttpOnly")])]),o._v(" "),t("h4",{attrs:{id:"客户端设置-cookie"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#客户端设置-cookie"}},[o._v("#")]),o._v(" 客户端设置 Cookie")]),o._v(" "),t("ul",[t("li",[o._v("客户端可以设置 Cookie 的选贤：Expires、Domain、Path、Secure（有条件：只有在 HTTP 协议的网页中，客户端设置 Secure 类型的 Cookie 才能成功），但无法设置 HttpOnly 选项。")])]),o._v(" "),t("p",[o._v("设置多个 Cookie")]),o._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[o._v("// Example")]),o._v("\ndocument"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[o._v(".")]),o._v("cookie "),t("span",{pre:!0,attrs:{class:"token operator"}},[o._v("=")]),o._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[o._v('"name=Jonh"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[o._v(";")]),o._v("\ndocument"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[o._v(".")]),o._v("cookie "),t("span",{pre:!0,attrs:{class:"token operator"}},[o._v("=")]),o._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[o._v('"age=12"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[o._v(";")]),o._v("\ndocument"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[o._v(".")]),o._v("cookie "),t("span",{pre:!0,attrs:{class:"token operator"}},[o._v("=")]),o._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[o._v('"grade=111"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[o._v(";")]),o._v("\n")])])]),t("h2",{attrs:{id:"操作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#操作"}},[o._v("#")]),o._v(" 操作")]),o._v(" "),t("h3",{attrs:{id:"发送"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#发送"}},[o._v("#")]),o._v(" 发送")]),o._v(" "),t("p",[o._v("浏览器向服务器发送 HTTP 请求时，每个请求都会带上相应的 Cookie。 也就是说，把服务器早前保存在浏览器的这段信息，再发回服务器。 这时要使用 HTTP 头信息的 Cookie 字段。")]),o._v(" "),t("h3",{attrs:{id:"读取"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#读取"}},[o._v("#")]),o._v(" 读取")]),o._v(" "),t("p",[o._v("查看浏览器是否开启 Cookie 功能：")]),o._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[o._v("window"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[o._v(".")]),o._v("navigator"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[o._v(".")]),o._v("cookieEnabled\n")])])]),t("p",[o._v("获取当前网页的 Cookie：")]),o._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[o._v("document"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[o._v(".")]),o._v("cookie\n")])])]),t("h3",{attrs:{id:"修改"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#修改"}},[o._v("#")]),o._v(" 修改")]),o._v(" "),t("p",[o._v("Cookie 的修改只需要对 Cookie 进行重新赋值，旧的值即会被新的值所覆盖。但需要注意的是，在设置新的 Cookie 时，key、domain、path 和 secure 这几个选项一定要与旧 Cookie 保持一致。否则不会修改旧值，而是添加了一个新的 cookie。")]),o._v(" "),t("h3",{attrs:{id:"删除"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#删除"}},[o._v("#")]),o._v(" 删除")]),o._v(" "),t("p",[o._v("Cookie 的删除同样需要对 Cookie 进行重新赋值，同时，将这个新的 Cookie 的 expires 选项设置为一个过去的时间点就行了。同样需要注意的是，key、domain、path 和 secure 这几个选项一定要与旧 Cookie 保持一致。")]),o._v(" "),t("h2",{attrs:{id:"实现原理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#实现原理"}},[o._v("#")]),o._v(" 实现原理")]),o._v(" "),t("p",[o._v("Cookie 实际上是一小段的文本信息。客户端请求服务器，如果服务器需要记录该用户状态，就使用响应头向客户端器颁发一个 Cookie。客户端浏览器会把 Cookie 保存起来。当浏览器再请求该网站时，浏览器把请求的网址连同该 Cookie 一同提交给服务器。服务器检查该 Cookie，以此来辨认用户状态。服务器还可以根据需要修改 Cookie 的内容。")]),o._v(" "),t("p",[o._v("这个跟其实浏览器缓存类似：")]),o._v(" "),t("ol",[t("li",[o._v("客户端在浏览器的地址栏中键入 Web 服务的 URL，浏览器发送读取网页的请求")]),o._v(" "),t("li",[o._v("服务器接收到请求后，产生一个 Set-Cookie 报头，放在 HTTP 报文中一起回传客户端，发起一次会话")]),o._v(" "),t("li",[o._v("客户端收到答应后，若要继续该次会话，则将 Set-Cookie-ie 中的内容取出，形成一个 Cookie.txt 文件储存在客户端计算机里")])]),o._v(" "),t("h2",{attrs:{id:"安全问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安全问题"}},[o._v("#")]),o._v(" 安全问题")]),o._v(" "),t("p",[o._v("通常 Cookie 信息都是使用 HTTP 连接传递数据，这种传递方式很容易被查看，而且 JavaScript 里面直接有一个 "),t("code",[o._v("document.Cookie")]),o._v(" 方法，可以直接获取到用户的 cookie，所以 Cookie 存储的信息容易被窃取。假如 Cookie 中所传递的内容比较重要，那么就要求使用加密的数据传输。")]),o._v(" "),t("p",[t("strong",[o._v("如何来防范 Cookie 的安全呢？有以下几种方法：")])]),o._v(" "),t("ol",[t("li",[o._v("HttpOnly 属性：如果在 Cookie 中设置了 HttpOnly 属性，那么通过程序（JavaScript 脚本、Applet 等）将无法读取到 Cookie 信息，这样能有效的防止 XSS 攻击。")]),o._v(" "),t("li",[o._v("Secure 属性：当设置为 true 时，表示创建的 Cookie 会被以安全的形式向服务器传输，也就是只能在 HTTPS 连接中被浏览器传递到服务器端进行会话验证，如果是 HTTP 连接则不会传递该信息，所以不会被盗取到 Cookies 的具体内容。")])]),o._v(" "),t("p",[t("strong",[o._v("登录时候用 Cookie 的话，安全性问题怎么解决？")])]),o._v(" "),t("p",[t("strong",[o._v("第一种是：")])]),o._v(" "),t("p",[o._v("把用户对象（包含了用户 ID、用户名、是否登录..）序列化成字符串再加密存入 cookie。")]),o._v(" "),t("p",[o._v("密钥是：客户端 IP + 浏览器 Agent + 用户标识 + 固定的私有密钥")]),o._v(" "),t("p",[o._v("当 Cookie 被窃取后，只要任一信息不匹配，就无法解密 cookie，进而也就不能登录了。")]),o._v(" "),t("p",[o._v("这样做的缺点是 IP 不能变动、频繁加密解密会加重 CPU 负担")]),o._v(" "),t("p",[t("strong",[o._v("第二种是：")])]),o._v(" "),t("p",[o._v("将用户的认证信息保存在一个 Cookie 中，具体如下：")]),o._v(" "),t("ol",[t("li",[o._v("Cookie 名：UID。推荐进行加密，比如 MD5（站点名称）等。")]),o._v(" "),t("li",[o._v("Cookie 值：登录名 | 有效时间 Expires | hash 值。\n"),t("ul",[t("li",[o._v("hash 值可以由 "),t("code",[o._v("登录名 + 有效时间 Expires + 用户密码（加密后的）的前几位 + Salt")]),t("strong",[o._v("（Salt 是保证在服务器端站点配置文件中的随机数）")])])])])]),o._v(" "),t("p",[o._v("这样子设计有以下几个优点：")]),o._v(" "),t("ol",[t("li",[o._v("即使数据库被盗了，盗用者还是无法登录到系统，因为组成 Cookie 值的 salt 是保证在服务器站点配置文件中而非数据库。")]),o._v(" "),t("li",[o._v("如果账户被盗了，用户修改密码，可以使盗用者的 Cookie 值无效。")]),o._v(" "),t("li",[o._v("如果服务器端的数据库被盗了，通过修改 salt 值可以使所有用户的 Cookie 值无效，迫使用户重新登录系统。")]),o._v(" "),t("li",[o._v("有效时间 Expires 可以设置为 "),t("code",[o._v("当前时间+过去时间")]),o._v("（比如 2 天），这样可以保证每次登录的 Cookie 值都不一样，防止盗用者窥探到自己的 Cookie 值后作为后门，长期登录。")])]),o._v(" "),t("h2",{attrs:{id:"常用场景"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#常用场景"}},[o._v("#")]),o._v(" 常用场景")]),o._v(" "),t("p",[o._v("Cookie 主要用来分辨两个请求是否来自同一浏览器，以及用来保存一些状态信息。")]),o._v(" "),t("ol",[t("li",[o._v("会话管理（Session）：保存登陆，购物车等需要记录的信息")]),o._v(" "),t("li",[o._v("个性化：保存用户的偏好，如网页的背景色，字体大小等")]),o._v(" "),t("li",[o._v("追踪：记录和分析用户行为")])]),o._v(" "),t("p",[o._v("很多人用 Cookie 作为客户端的存储，虽然可行，但是并不推荐这种做法。")]),o._v(" "),t("ol",[t("li",[o._v("Cookie 设计初衷并非用于客户端存储，且可存储容量很小")]),o._v(" "),t("li",[o._v("缺乏数据操作接口")]),o._v(" "),t("li",[o._v("影响浏览器性能")])]),o._v(" "),t("p",[o._v("客户端存储推荐使用 "),t("router-link",{attrs:{to:"/browser-object-model/browser-cache/web-storage.html"}},[o._v("WebStorageAPI")])],1),o._v(" "),t("h2",{attrs:{id:"替代方案"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#替代方案"}},[o._v("#")]),o._v(" 替代方案")]),o._v(" "),t("h4",{attrs:{id:"jwt"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jwt"}},[o._v("#")]),o._v(" JWT")]),o._v(" "),t("p",[o._v("JSON Web Token（JWT）是一个自包含的信息包，可以用来存储用户标识以及认证信息。可以被用来代替 Session Cookie。和 Cookie 自动附加到每个 HTTP 请求的方式不一样，JWT 必须被 Web 应用明确指定附加到那个 HTTP 请求上。")]),o._v(" "),t("h4",{attrs:{id:"http-认证"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#http-认证"}},[o._v("#")]),o._v(" HTTP 认证")]),o._v(" "),t("p",[o._v("HTTP 包含基本认证以及摘要认证协议，利用这些协议只有在提供了正确的用户名和密码后才能访问到 Web 页面。如果服务端需要类似的认证信息来确保 Web 页面的访问权限，那么浏览器每次页面请求的时候都要发送这些认证信息。这些认证信息也可以用来追踪用户。")]),o._v(" "),t("h4",{attrs:{id:"ip-地址"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ip-地址"}},[o._v("#")]),o._v(" IP 地址")]),o._v(" "),t("p",[o._v("有些用户可能会被基于访问页面的电脑 IP 地址追踪过，服务端知道当前正在运行浏览器的电脑的 IP 地址，理论上可以对这个 IP 地址关联一个用户 Session。")]),o._v(" "),t("p",[o._v("然后 IP 地址通常不是一个可靠的追踪 Session 或者标识用户的方法。许多电脑设计的时候就是为了让一个单独用户使用的，例如办公 PC，家庭 PC 会在网络地址转换协议下共享一个公共的 IP 地址。而且某些系统，例如 Tor 设计的时候就是为了保持匿名性的，利用 IP 地址追踪用户显然是不合适的，也是不可能的。")]),o._v(" "),t("h4",{attrs:{id:"url-查询字符串"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#url-查询字符串"}},[o._v("#")]),o._v(" URL 查询字符串")]),o._v(" "),t("p",[o._v("一个更精确的技术是基于 URL 中嵌入信息。URL 中的查询字符串部分通常就是为了实现这个目的的，当然也可以使用其他部分。Java Servlet 和 PHP Session 机制都是使用这种机制，如果 Cookie 被禁止了。")]),o._v(" "),t("p",[o._v("这种方法由服务端在 Web 页面的所有链接中追加包含一个独立 Session 标识的查询字符串组成。当用户点击了其中了一个链接，浏览器把查询字符串传给服务端，允许服务端识别用户维持状态。")]),o._v(" "),t("p",[o._v("这些类型的查询字符串非常像 Cookie，都包含任意的信息供服务端选择，都会随请求返回给服务端。然而其中还是有点不同的。由于查询字符串是 URL 中的一部分，如果 URL 后面被重复发送了，那么上面附加的相同信息将会被发送到服务端，这样可能会产生混乱。例如，如果用户的偏好信息被放在了查询字符串中，用户把这个 URL 通过邮件发给了另一个用户，那么这些偏好信息就会变成另一个用户的。")]),o._v(" "),t("p",[o._v("而且如果相同用户从不同的源多次访问相同的页面，这样不能确保每次使用相同的查询字符串。例如，如果一个用户第一次通过一个页面的内部站点访问了一个页面，然后第二次又通过外部的搜索引擎访问到这个页面，这样查询字符串可能会不同。如果在这种情况下使用 Cookie，Cookie 可以是相同的。")]),o._v(" "),t("p",[o._v("使用查询字符串其他缺点就是安全问题。在查询字符串中存储标识 Session 的数据可以导致 Session 固定攻击， Referer 日志攻击以及其他安全漏洞。把 Session 标识转成 HTTP Cookie 更安全。")]),o._v(" "),t("h4",{attrs:{id:"隐藏的表单字段"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#隐藏的表单字段"}},[o._v("#")]),o._v(" 隐藏的表单字段")]),o._v(" "),t("p",[o._v("另一种会话跟踪是使用隐藏域的 Web 表单。这个技术很像使用 URL 查询字符串去保存信息，也有一些优点和缺点。事实上，如果通过 HTTP 的 GET 方法处理表单，那么这种技术就和使用 URL 查询字符串类似，因为 GET 方法会把表单字段作为查询字符串追加到 URL 后面。但是大部分表单都是通过 HTTP 的 POST 方法处理，这样表单信息包括隐藏的字段都会在 HTTP 请求体中发送，这样既不是 URL 中的一部分，也不是 Cookie 的一部分。")]),o._v(" "),t("p",[o._v("从追踪的角度来看这种方式有两种好处。第一，把追踪信息放在 HTTP 请求体中而不是 URL 中意味着它不会被普通用户察觉。第二，当用户复制 URL 的时候不会复制到 Session 信息。")]),o._v(" "),t("h4",{attrs:{id:"window-name-dom-属性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#window-name-dom-属性"}},[o._v("#")]),o._v(" Window.name DOM 属性")]),o._v(" "),t("p",[o._v("所有的现代浏览器都可以通过 JavaScript 使用 DOM 属性 window.name 存储一个相当大的数据（2-23M）。这个数据可以用来代替 Session Cookie 也是可以跨域的。这个技术可以和 JSON 对象一起使用来存储客户端上的复杂 Session 变量集合。")]),o._v(" "),t("p",[o._v("不足就是美国单独的窗口或者 Tab 页刚开始打开的时候会有一个空的 window.name 属性。而且，这个属性可以用来追踪不同站点的访问者。")]),o._v(" "),t("p",[o._v("在某些方面，这种方法可能比 Cookie 更加方便，因为它的内容不会像 Cookie 那样在每次请求的时候自动的发送给服务端，所以它不易收到网络 Cookie 嗅探攻击。然而如果不采用特殊的方法保护数据，它很容易受到其他攻击，因为数据可以被在同一个窗口或者 Tab 中打开的其他站点获取到。")]),o._v(" "),t("h4",{attrs:{id:"广告主标识码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#广告主标识码"}},[o._v("#")]),o._v(" 广告主标识码")]),o._v(" "),t("p",[o._v("苹果使用了追踪技术称为 "),t("strong",[o._v("广告主标识码")]),o._v("（IDFA）。这种技术会给每个购买苹果产品的用户分配一个唯一标识。这个唯一标识会被苹果网络广告系统使用，来确定用户正在查看或者回复的广告。")]),o._v(" "),t("h4",{attrs:{id:"etag"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#etag"}},[o._v("#")]),o._v(" ETag")]),o._v(" "),t("p",[o._v("因为浏览器会缓存 ETags，然后在后续的请求相同资源时返回，追踪服务器可以简单的复制从浏览器接受的任意 ETag 来确保 ETag 长久留存（就像持久化 Cookie 一样）。增加缓存头也可以加强 ETag 数据的保存。")]),o._v(" "),t("p",[o._v("在某些浏览器中可以通过清理缓存来清除 ETag 数据。")]),o._v(" "),t("h4",{attrs:{id:"web-存储"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#web-存储"}},[o._v("#")]),o._v(" web 存储")]),o._v(" "),t("p",[o._v("一些 Web 浏览器支持持久化机制，允许页面本地存储信息以后使用。")]),o._v(" "),t("p",[o._v("HTML5 标准（绝大多数现代浏览器在某种程度上都支持）包含了一个 Javascript API 叫做 Web storage：Local Storage 和 Session Storage。Local Storage 的行为和持久化 Cookie 类似，而 Session Storage 的行为和 Session Cookie 的行为类似，也就是 Session Storage 是绑定在一个单独的 Tab 或者窗口的生命周期中的（也就是页面 Session），而 Session Cookie 是针对整个浏览器的。")]),o._v(" "),t("p",[o._v("IE 支持在浏览器历史中持久化信息，在浏览器的收藏夹中，以一个 XML 格式存储，或者直接在页面中存储到硬盘。")]),o._v(" "),t("p",[o._v("一些 Web 浏览器插件也包含持久化机制。例如 Flash 有 Local shared object，Silverlight 有 Isolated storage。")]),o._v(" "),t("h4",{attrs:{id:"浏览器缓存"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#浏览器缓存"}},[o._v("#")]),o._v(" 浏览器缓存")]),o._v(" "),t("p",[o._v("浏览器缓存也可以用来存储信息，利用这些信息也可以用来追踪用户。这项技术利用的真相是当浏览器判断出来缓存的已经是最新资源时可以利用缓存而不是重新从站点下载。")]),o._v(" "),t("p",[o._v("例如，一个站点托管了一个 JavaScript 文件，这个 JavaScript 文件可以给用户指定一个唯一标识（例如，"),t("code",[o._v("var userId = 3243242")]),o._v("）。只要用户访问之后，每次用户再访问这个页面时，这个文件都会从缓存中获取而不是从服务端获取。所以它的内容永远不会变。")]),o._v(" "),t("h4",{attrs:{id:"浏览器指纹"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#浏览器指纹"}},[o._v("#")]),o._v(" 浏览器指纹")]),o._v(" "),t("p",[o._v("浏览器指纹是指浏览器配置信息的集合，例如版本号，屏幕分辨率，操作系统。指纹信息可以用来完全或者部分标识独立用户或者设备，即使 Cookie 已经被关闭了。")]),o._v(" "),t("p",[o._v("基本的 Web 浏览器配置信息一直都在被 Web 分析服务搜集为了精确的统计真实网络流量和不同类型的点击欺诈。在客户端脚本的帮助下，搜集更多的参数也是有可能的。")])])}),[],!1,null,null,null);e.default=a.exports}}]);