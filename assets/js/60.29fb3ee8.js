(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{444:function(t,s,a){"use strict";a.r(s);var e=a(0),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"条件运算符"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#条件运算符"}},[t._v("#")]),t._v(" 条件运算符")]),t._v(" "),a("p",[a("strong",[t._v("条件运算符（Conditional Operator）"),a("strong",[t._v("是 Javascript 中唯一的一个")]),t._v("三元运算符")]),t._v("（三个操作数），有时直接称做三元运算符。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("variable "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" boolean_expression "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" true_value "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" false_value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("本质上，这就是基于对 "),a("code",[t._v("boolean_expression")]),t._v(" 求值的结果，决定给变量 "),a("code",[t._v("variable")]),t._v(" 赋什么值。如果求值结果是 "),a("code",[t._v("true")]),t._v(" ，则给变量 "),a("code",[t._v("variable")]),t._v(" 赋值"),a("code",[t._v("true_value")]),t._v("；如果求值结果是 "),a("code",[t._v("false")]),t._v("，则给变量 "),a("code",[t._v("variable")]),t._v(" 赋值"),a("code",[t._v("false_value")]),t._v("。")]),t._v(" "),a("p",[t._v("条件运算符的操作数可以是任意类型，第一个操作数当成布尔值，如果它是真值 "),a("code",[t._v("true")]),t._v("，那么将计算第二个操作数，并返回其计算结果。否则，如果第一个操作数是假值 "),a("code",[t._v("false")]),t._v("，那么将计算第三个操作数，并返回其计算结果。第二个和第三个操作数总是会计算其中之一，不可能两者同时执行。")]),t._v(" "),a("p",[t._v("其实使用 "),a("code",[t._v("if")]),t._v(" 语句也会带来同样的效果，"),a("code",[t._v("?:")]),t._v("运算符只是提供了一种简写形式。下面是一个 "),a("code",[t._v("?:")]),t._v(" 的典型应用场景，判断一个变量是否有定义(并拥有一个有意义的真值)，如果有定义则使用它，如果无定义则使用一个默认值:")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("greeting "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hello '")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("username "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" username "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'there'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("这和下面使用 "),a("code",[t._v("if")]),t._v(" 语句的代码是等价的，但显然上面的代码更加简洁:")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("greeting "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hello '")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("username"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" greeting "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" username"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" greeting "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'there'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("条件运算符（三元条件表达式）与 "),a("code",[t._v("if...else")]),t._v(" 语句具有同样表达效果，但是两者有一个重大差别")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("项")]),t._v(" "),a("th",[t._v("类型")]),t._v(" "),a("th",[t._v("返回值")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",[t._v("if...else")])]),t._v(" "),a("td",[t._v("语句")]),t._v(" "),a("td",[t._v("无")])]),t._v(" "),a("tr",[a("td",[t._v("条件运算符")]),t._v(" "),a("td",[t._v("表达式")]),t._v(" "),a("td",[t._v("有")])])])]),t._v(" "),a("p",[t._v("因此，在需要返回值的场合，只能使用条件运算符（三元条件表达式），而不能使用 "),a("code",[t._v("if...else")]),t._v("。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'T'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'F'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//  'T'")]),t._v("\n")])])]),a("p",[t._v("上面代码中，"),a("code",[t._v("console.log()")]),t._v("方法的参数必须是一个表达式，这时就只能使用三元条件表达式。")])])}),[],!1,null,null,null);s.default=n.exports}}]);