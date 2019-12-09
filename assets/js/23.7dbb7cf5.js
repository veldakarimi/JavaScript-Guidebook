(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{268:function(_,v,t){_.exports=t.p+"assets/img/130d1ab7-3dad-4bf1-a2c8-9b7edb4de9a1.b99085fe.jpg"},269:function(_,v,t){_.exports=t.p+"assets/img/61290857-9bc3-400a-a013-d4ae43a56f09.75885839.jpg"},366:function(_,v,t){"use strict";t.r(v);var e=t(0),r=Object(e.a)({},(function(){var _=this,v=_.$createElement,e=_._self._c||v;return e("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[e("h1",{attrs:{id:"http2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#http2"}},[_._v("#")]),_._v(" HTTP2")]),_._v(" "),e("p",[_._v("HTTP2 特性：")]),_._v(" "),e("ul",[e("li",[_._v("二进制分帧")]),_._v(" "),e("li",[_._v("多路复用")]),_._v(" "),e("li",[_._v("服务器推送")]),_._v(" "),e("li",[_._v("头部压缩")]),_._v(" "),e("li",[_._v("优先级与依赖性")]),_._v(" "),e("li",[_._v("重置流")]),_._v(" "),e("li",[_._v("流量控制")]),_._v(" "),e("li",[_._v("HTTPS RFC 规范并没有要求 HTTP2 强制使用 TLS，但是目前世界所有浏览器和* 服务器实现都基于 HTTPS 来实现 HTTP2")])]),_._v(" "),e("h2",{attrs:{id:"二进制分帧"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#二进制分帧"}},[_._v("#")]),_._v(" 二进制分帧")]),_._v(" "),e("p",[_._v("HTTP/2 所有性能增强的核心在于新的"),e("span",{staticStyle:{"font-weight":"bold",color:"red"}},[_._v("二进制分帧层")]),_._v("，它定义了如何封装 HTTP 消息并在客户端与服务器之间传输。")]),_._v(" "),e("p",[e("img",{attrs:{src:t(268),alt:"传输报文格式"}})]),_._v(" "),e("p",[_._v("这里所谓的“层”，指的是位于套接字接口与应用可见的高级 HTTP API 之间一个经过优化的新编码机制：HTTP 的语义（包括各种动词、方法、标头）都不受影响，不同的是传输期间对它们的编码方式变了。 HTTP/1.x 协议以换行符作为纯文本的分隔符，而 HTTP/2 将所有传输的信息分割为更小的消息和帧，并采用二进制格式对它们编码。")]),_._v(" "),e("p",[_._v("这样一来，客户端和服务器为了相互理解，都必须使用新的二进制编码机制：HTTP/1.x 客户端无法理解只支持 HTTP/2 的服务器，反之亦然。 不过不要紧，现有的应用不必担心这些变化，因为客户端和服务器会替我们完成必要的分帧工作。")]),_._v(" "),e("h2",{attrs:{id:"数据流、消息和帧"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#数据流、消息和帧"}},[_._v("#")]),_._v(" 数据流、消息和帧")]),_._v(" "),e("p",[_._v("新的二进制分帧机制改变了客户端与服务器之间交换数据的方式。 为了说明这个过程，我们需要了解 HTTP/2 的三个概念：")]),_._v(" "),e("ul",[e("li",[e("strong",[_._v("数据流")]),_._v("：已建立的连接内的双向字节流，可以承载一条或多条消息。")]),_._v(" "),e("li",[e("strong",[_._v("消息")]),_._v("：与逻辑请求或响应消息对应的完整的一系列帧。")]),_._v(" "),e("li",[e("strong",[_._v("帧")]),_._v("：HTTP/2 通信的最小单位，每个帧都包含帧头，至少也会标识出当前帧所属的数据流。")])]),_._v(" "),e("p",[_._v("这些概念的关系总结如下：")]),_._v(" "),e("ul",[e("li",[_._v("所有通信都在一个 TCP 连接上完成，此连接可以承载任意数量的双向数据流。")]),_._v(" "),e("li",[_._v("每个数据流都有一个唯一的标识符和可选的优先级信息，用于承载双向消息。")]),_._v(" "),e("li",[_._v("每条消息都是一条逻辑 HTTP 消息（例如请求或响应），包含一个或多个帧。")]),_._v(" "),e("li",[_._v("帧是最小的通信单位，承载着特定类型的数据，例如 HTTP 标头、消息负载等等。 来自不同数据流的帧可以交错发送，然后再根据每个帧头的数据流标识符重新组装。")])]),_._v(" "),e("p",[_._v("HTTP/2 将 HTTP 协议通信分解为二进制编码帧的交换，这些帧对应着特定数据流中的消息。所有这些都在一个 TCP 连接内复用。 这是 HTTP/2 协议所有其他功能和性能优化的基础。")]),_._v(" "),e("h2",{attrs:{id:"多路复用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#多路复用"}},[_._v("#")]),_._v(" 多路复用")]),_._v(" "),e("p",[_._v("当我们打开网站时，浏览器会对每个网页并发的连接进行限制，一般浏览器的 HTTP 请求并发数限制在 6-8 个。但实际上，绝大部分网站首页所需要的资源个数远大于这个限制。所以为了不让资源在下载阶段就被阻塞住，我们往往会把一些静态资源分散到 CDN 或其他服务器上，从而通过多域名的方式突破浏览器对并发连接数的限制，从而使得网站能同时下载尽可能多的资源。")]),_._v(" "),e("p",[_._v("但建立更多的连接也意味更多的开销。每个 HTTP 请求都对应建立 TCP 连接，也许有些资源体积只有几 kb，这些情况下建立连接本身的开销就变得更客观，很可能三次握手的实践比传输时间还长")]),_._v(" "),e("p",[_._v("在 HTTP/2 中，有了二进制分帧之后，HTTP/2 不再依赖 TCP 链接去实现多流并行，而是通过"),e("strong",[_._v("流")]),_._v("支持多路复用。")]),_._v(" "),e("p",[_._v("将 HTTP 消息分解为独立的帧，交错发送，然后在另一端重新组装是 HTTP 2 最重要的一项增强。事实上，这个机制会在整个网络技术栈中引发一系列连锁反应，从而带来巨大的性能提升，让我们可以：")]),_._v(" "),e("ul",[e("li",[_._v("并行交错地发送多个请求，请求之间互不影响。")]),_._v(" "),e("li",[_._v("并行交错地发送多个响应，响应之间互不干扰。")]),_._v(" "),e("li",[_._v("使用一个连接并行发送多个请求和响应。")]),_._v(" "),e("li",[_._v("不必再为绕过 HTTP/1.x 限制而做很多工作（请参阅"),e("a",{attrs:{href:"https://hpbn.co/optimizing-application-delivery/#optimizing-for-http1x",target:"_blank",rel:"noopener noreferrer"}},[_._v("针对 HTTP/1.x 进行优化"),e("OutboundLink")],1),_._v("，例如级联文件、image sprites 和域名分片。")]),_._v(" "),e("li",[_._v("消除不必要的延迟和提高现有网络容量的利用率，从而减少页面加载时间。")]),_._v(" "),e("li",[_._v("等等...")])]),_._v(" "),e("p",[_._v("HTTP/2 中的新二进制分帧层解决了 HTTP/1.x 中存在的"),e("strong",[_._v("队首阻塞")]),_._v("问题，也消除了并行处理和发送请求及响应时对多个连接的依赖。 结果，应用速度更快、开发更简单、部署成本更低。")]),_._v(" "),e("h2",{attrs:{id:"数据流优先级"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#数据流优先级"}},[_._v("#")]),_._v(" 数据流优先级")]),_._v(" "),e("p",[_._v("将 HTTP 消息分解为很多独立的帧之后，我们就可以复用多个数据流中的帧，客户端和服务器交错发送和传输这些帧的顺序就成为关键的性能决定因素。 为了做到这一点，HTTP/2 标准允许每个数据流都有一个关联的权重和依赖关系：")]),_._v(" "),e("ul",[e("li",[_._v("可以向每个数据流分配一个介于 1 至 256 之间的整数。")]),_._v(" "),e("li",[_._v("每个数据流与其他数据流之间可以存在显式依赖关系。")])]),_._v(" "),e("p",[_._v("数据流依赖关系和权重的组合让客户端可以构建和传递“优先级树”，表明它倾向于如何接收响应。 反过来，服务器可以使用此信息通过控制 CPU、内存和其他资源的分配设定数据流处理的优先级，在资源数据可用之后，带宽分配可以确保将高优先级响应以最优方式传输至客户端。")]),_._v(" "),e("p",[_._v("HTTP/2 内的数据流依赖关系通过将另一个数据流的唯一标识符作为父项引用进行声明；如果忽略标识符，相应数据流将依赖于“根数据流”。 声明数据流依赖关系指出，应尽可能先向父数据流分配资源，然后再向其依赖项分配资源。 换句话说，“请先处理和传输响应 D，然后再处理和传输响应 C”。")]),_._v(" "),e("p",[_._v("共享相同父项的数据流（即，同级数据流）应按其权重比例分配资源。 例如，如果数据流 A 的权重为 12，其同级数据流 B 的权重为 4，那么要确定每个数据流应接收的资源比例，请执行以下操作：")]),_._v(" "),e("ul",[e("li",[_._v("将所有权重求和：4 + 12 = 16")]),_._v(" "),e("li",[_._v("将每个数据流权重除以总权重：A = 12/16，B = 4/16\n因此，数据流 A 应获得四分之三的可用资源，数据流 B 应获得四分之一的可用资源；数据流 B 获得的资源是数据流 A 所获资源的三分之一。")])]),_._v(" "),e("p",[_._v("我们来看一下上图中的其他几个操作示例。 从左到右依次为：")]),_._v(" "),e("ol",[e("li",[_._v("数据流 A 和数据流 B 都没有指定父依赖项，依赖于显式“根数据流”；A 的权重为 12，B 的权重为 4。因此，根据比例权重：数据流 B 获得的资源是 A 所获资源的三分之一。")]),_._v(" "),e("li",[_._v("数据流 D 依赖于根数据流；C 依赖于 D。 因此，D 应先于 C 获得完整资源分配。 权重不重要，因为 C 的依赖关系拥有更高的优先级。")]),_._v(" "),e("li",[_._v("数据流 D 应先于 C 获得完整资源分配；C 应先于 A 和 B 获得完整资源分配；数据流 B 获得的资源是 A 所获资源的三分之一。")]),_._v(" "),e("li",[_._v("数据流 D 应先于 E 和 C 获得完整资源分配；E 和 C 应先于 A 和 B 获得相同的资源分配；A 和 B 应基于其权重获得比例分配。")])]),_._v(" "),e("p",[_._v("如上面的示例所示，数据流依赖关系和权重的组合明确表达了资源优先级，这是一种用于提升浏览性能的关键功能，网络中拥有多种资源类型，它们的依赖关系和权重各不相同。 不仅如此，HTTP/2 协议还允许客户端随时更新这些优先级，进一步优化了浏览器性能。 换句话说，我们可以根据用户互动和其他信号更改依赖关系和重新分配权重。")]),_._v(" "),e("p",[_._v("注：数据流依赖关系和权重表示传输优先级，而不是要求，因此不能保证特定的处理或传输顺序。 即，客户端无法强制服务器通过数据流优先级以特定顺序处理数据流。 尽管这看起来违反直觉，但却是一种必要行为。 我们不希望在优先级较高的资源受到阻止时，还阻止服务器处理优先级较低的资源。")]),_._v(" "),e("h2",{attrs:{id:"流控制"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#流控制"}},[_._v("#")]),_._v(" 流控制")]),_._v(" "),e("p",[_._v("流控制是一种阻止发送方向接收方发送大量数据的机制，以免超出后者的需求或处理能力：发送方可能非常繁忙、处于较高的负载之下，也可能仅仅希望为特定数据流分配固定量的资源。 例如，客户端可能请求了一个具有较高优先级的大型视频流，但是用户已经暂停视频，客户端现在希望暂停或限制从服务器的传输，以免提取和缓冲不必要的数据。 再比如，一个代理服务器可能具有较快的下游连接和较慢的上游连接，并且也希望调节下游连接传输数据的速度以匹配上游连接的速度来控制其资源利用率；等等。")]),_._v(" "),e("p",[_._v("上述要求会让您想到 TCP 流控制吗？您应当想到这一点；因为问题基本相同（请参阅"),e("a",{attrs:{href:"https://hpbn.co/building-blocks-of-tcp/#flow-control",target:"_blank",rel:"noopener noreferrer"}},[_._v("流控制"),e("OutboundLink")],1),_._v(" 不过，由于 HTTP/2 数据流在一个 TCP 连接内复用，TCP 流控制既不够精细，也无法提供必要的应用级 API 来调节各个数据流的传输。 为了解决这一问题，HTTP/2 提供了一组简单的构建块，这些构建块允许客户端和服务器实现其自己的数据流和连接级流控制：")]),_._v(" "),e("ul",[e("li",[_._v("流控制具有方向性。 每个接收方都可以根据自身需要选择为每个数据流和整个连接设置任意的窗口大小。")]),_._v(" "),e("li",[_._v("流控制基于信用。 每个接收方都可以公布其初始连接和数据流流控制窗口（以字节为单位），每当发送方发出 DATA 帧时都会减小，在接收方发出 WINDOW_UPDATE 帧时增大。")]),_._v(" "),e("li",[_._v("流控制无法停用。 建立 HTTP/2 连接后，客户端将与服务器交换 SETTINGS 帧，这会在两个方向上设置流控制窗口。 流控制窗口的默认值设为 65,535 字节，但是接收方可以设置一个较大的最大窗口大小（2^31-1 字节），并在接收到任意数据时通过发送 WINDOW_UPDATE 帧来维持这一大小。")]),_._v(" "),e("li",[_._v("流控制为逐跃点控制，而非端到端控制。 即，可信中介可以使用它来控制资源使用，以及基于自身条件和启发式算法实现资源分配机制。")])]),_._v(" "),e("p",[_._v("HTTP/2 未指定任何特定算法来实现流控制。 不过，它提供了简单的构建块并推迟了客户端和服务器实现，可以实现自定义策略来调节资源使用和分配，以及实现新传输能力，同时提升网页应用的实际性能和感知性能（请参阅"),e("a",{attrs:{href:"https://hpbn.co/primer-on-web-performance/#speed-performance-and-human-perception",target:"_blank",rel:"noopener noreferrer"}},[_._v("速度、性能和人类感知"),e("OutboundLink")],1),_._v("）。")]),_._v(" "),e("p",[_._v("例如，应用层流控制允许浏览器仅提取一部分特定资源，通过将数据流流控制窗口减小为零来暂停提取，稍后再行恢复。 换句话说，它允许浏览器提取图像预览或首次扫描结果，进行显示并允许其他高优先级提取继续，然后在更关键的资源完成加载后恢复提取。")]),_._v(" "),e("h2",{attrs:{id:"服务器推送"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#服务器推送"}},[_._v("#")]),_._v(" 服务器推送")]),_._v(" "),e("p",[_._v("HTTP/2 中的 Server Push 并不是指类似于现在的 Server Sent Event 或者 WebSocket 的推送技术。它是一种服务器根据客户端以前发送的请求来“猜测”未来的请求，并提前讲未来请求的结果推送给客户端的技术。")]),_._v(" "),e("p",[_._v("为什么在浏览器中需要一种此类机制呢？一个典型的网络应用包含多种资源，客户端需要检查服务器提供的文档才能逐个找到它们。 那为什么不让服务器提前推送这些资源，从而减少额外的延迟时间呢？ 服务器已经知道客户端下一步要请求什么资源，这时候服务器推送即可派上用场。")]),_._v(" "),e("p",[_._v("事实上，如果您在网页中内联过 CSS、JavaScript，或者通过数据 URI 内联过其他资产（请参阅"),e("a",{attrs:{href:"https://hpbn.co/http1x/#resource-inlining",target:"_blank",rel:"noopener noreferrer"}},[_._v("资源内联"),e("OutboundLink")],1),_._v("），那么您就已经亲身体验过服务器推送了。 对于将资源手动内联到文档中的过程，我们实际上是在将资源推送给客户端，而不是等待客户端请求。 使用 HTTP/2，我们不仅可以实现相同结果，还会获得其他性能优势。 推送资源可以进行以下处理：")]),_._v(" "),e("ul",[e("li",[_._v("由客户端缓存")]),_._v(" "),e("li",[_._v("在不同页面之间重用")]),_._v(" "),e("li",[_._v("与其他资源一起复用")]),_._v(" "),e("li",[_._v("由服务器设定优先级")]),_._v(" "),e("li",[_._v("被客户端拒绝")])]),_._v(" "),e("h2",{attrs:{id:"标头压缩"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#标头压缩"}},[_._v("#")]),_._v(" 标头压缩")]),_._v(" "),e("p",[_._v("每个 HTTP 传输都承载一组标头，这些标头说明了传输的资源及其属性。 在 HTTP/1.x 中，此元数据始终以纯文本形式，通常会给每个传输增加 500–800 字节的开销。如果使用 HTTP Cookie，增加的开销有时会达到上千字节。 （请参阅测量和控制协议开销。） 为了减少此开销和提升性能，HTTP/2 使用 HPACK 压缩格式压缩请求和响应标头元数据，这种格式采用两种简单但是强大的技术：")]),_._v(" "),e("ol",[e("li",[_._v("这种格式支持通过静态霍夫曼代码对传输的标头字段进行编码，从而减小了各个传输的大小。")]),_._v(" "),e("li",[_._v("这种格式要求客户端和服务器同时维护和更新一个包含之前见过的标头字段的索引列表（换句话说，它可以建立一个共享的压缩上下文），此列表随后会用作参考，对之前传输的值进行有效编码。")])]),_._v(" "),e("p",[_._v("利用霍夫曼编码，可以在传输时对各个值进行压缩，而利用之前传输值的索引列表，我们可以通过传输索引值的方式对重复值进行编码，索引值可用于有效查询和重构完整的标头键值对。")]),_._v(" "),e("ul",[e("li",[_._v("HEADERS frame 头部帧")]),_._v(" "),e("li",[_._v("DATA frame 数据帧")])]),_._v(" "),e("p",[e("strong",[_._v("头部压缩示意图")])]),_._v(" "),e("p",[e("img",{attrs:{src:t(269),alt:"报文头部压缩示意图"}})]),_._v(" "),e("p",[_._v("客户端发了两次请求，第一次请求有完整的 HTTP 报文头部，第二次请求的时候只有一个 "),e("code",[_._v("path")]),_._v(" 的字段不一样，但是这次报文头它只需要发送一个 "),e("code",[_._v("path")]),_._v(" 的字段就好了，这样就大大减少了发送的量。这个的实现要求客户端和服务同时维护一个报文头表。")]),_._v(" "),e("p",[_._v("作为一种进一步优化方式，HPACK 压缩上下文包含一个静态表和一个动态表：")]),_._v(" "),e("ul",[e("li",[_._v("静态表在规范中定义，并提供了一个包含所有连接都可能使用的常用 HTTP 标头字段（例如，有效标头名称）的列表；")]),_._v(" "),e("li",[_._v("动态表最初为空，将根据在特定连接内交换的值进行更新。")])]),_._v(" "),e("p",[_._v("因此，为之前未见过的值采用静态 Huffman 编码，并替换每一侧静态表或动态表中已存在值的索引，可以减小每个请求的大小。")]),_._v(" "),e("p",[_._v("注：在 HTTP/2 中，请求和响应标头字段的定义保持不变，仅有一些微小的差异：所有标头字段名称均为小写，请求行现在拆分成各个 :method、:scheme、:authority 和 :path 伪标头字段。")]),_._v(" "),e("hr"),_._v(" "),e("p",[e("strong",[_._v("参考资料：")])]),_._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://developers.google.com/web/fundamentals/performance/http2/",target:"_blank",rel:"noopener noreferrer"}},[_._v("📖 Google developers document: Introduction to HTTP/2"),e("OutboundLink")],1)]),_._v(" "),e("li",[e("a",{attrs:{href:"https://imququ.com/post/http2-resource.html",target:"_blank",rel:"noopener noreferrer"}},[_._v("📖 HTTP2 资料汇总"),e("OutboundLink")],1)]),_._v(" "),e("li",[e("a",{attrs:{href:"https://ye11ow.gitbooks.io/http2-explained/content/",target:"_blank",rel:"noopener noreferrer"}},[_._v("📝 HTTP2 讲解"),e("OutboundLink")],1)]),_._v(" "),e("li",[e("a",{attrs:{href:"https://segmentfault.com/a/1190000007219256",target:"_blank",rel:"noopener noreferrer"}},[_._v("📝 深入研究：HTTP2 的真正性能到底如何"),e("OutboundLink")],1)]),_._v(" "),e("li",[e("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/29609078",target:"_blank",rel:"noopener noreferrer"}},[_._v("📝 怎样把网站升级到 HTTP/2"),e("OutboundLink")],1)]),_._v(" "),e("li",[e("a",{attrs:{href:"https://juejin.im/post/5c5ada2e6fb9a049dd80be75",target:"_blank",rel:"noopener noreferrer"}},[_._v("📝 HTTP/2 常见问题解答"),e("OutboundLink")],1)]),_._v(" "),e("li",[e("a",{attrs:{href:"https://juejin.im/post/5c6a9f85e51d4503831ad4fa",target:"_blank",rel:"noopener noreferrer"}},[_._v("📝 从理论到实践，全面理解 HTTP/2"),e("OutboundLink")],1)]),_._v(" "),e("li",[e("a",{attrs:{href:"https://juejin.im/post/5c4e6d11e51d4534dc477f05",target:"_blank",rel:"noopener noreferrer"}},[_._v("📝 再谈 HTTP2 性能提升之背后原理"),e("OutboundLink")],1)])])])}),[],!1,null,null,null);v.default=r.exports}}]);