(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{456:function(t,e,a){"use strict";a.r(e);var c=a(0),n=Object(c.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"运算符优先级"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#运算符优先级"}},[t._v("#")]),t._v(" 运算符优先级")]),t._v(" "),a("p",[t._v("运算符的优先级决定了表达式中运算执行的先后顺序，优先级高的运算符最先被执行。")]),t._v(" "),a("h2",{attrs:{id:"结合性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#结合性"}},[t._v("#")]),t._v(" 结合性")]),t._v(" "),a("p",[t._v("结合性决定了拥有相同优先级的运算符的执行顺序。考虑下面这个表达式：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("a "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("OP")]),t._v(" b "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("OP")]),t._v(" c\n")])])]),a("ul",[a("li",[a("p",[t._v("左结合（左到右）相当于把左边的子表达式加上小括号 "),a("code",[t._v("(a OP b) OP c")])])]),t._v(" "),a("li",[a("p",[t._v("右关联（右到左）相当于 "),a("code",[t._v("a OP (b OP c)")])])])]),t._v(" "),a("p",[t._v("赋值运算符是右关联的，所以你可以这么写：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" b "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("结果："),a("code",[t._v("a")]),t._v("  和  "),a("code",[t._v("b")]),t._v("  的值都会成为 5。这是因为赋值运算符的返回结果就是赋值运算符右边的那个值，具体过程是："),a("code",[t._v("b")]),t._v(" 被赋值为 5，然后 "),a("code",[t._v("a")]),t._v(" 也被赋值为  "),a("code",[t._v("b=5")]),t._v("  的返回值，也就是 5。")]),t._v(" "),a("h2",{attrs:{id:"汇总表"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#汇总表"}},[t._v("#")]),t._v(" 汇总表")]),t._v(" "),a("p",[t._v("以下示例中使用 "),a("code",[t._v("foo")]),t._v(" 和 "),a("code",[t._v("bar")]),t._v(" 作为演示变量或表达式。")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("优先级")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("运算类型")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("关联性")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("运算符示例")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("20")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("分组表达式")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("n/a")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("(foo)")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("19")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("属性访问器")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("从左到右")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("foo.bar")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("属性访问器")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("从左到右")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("foo[bar]")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("实例化对象（带参数列表）")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("n/a")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("new Foo(bar)")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("函数调用")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("从左到右")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("foo()")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("18")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("实例化对象（无参数列表）")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("从左到右")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("new Foo")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("17")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("更新表达式（后置递增）")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("n/a")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("foo++")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("更新表达式（后置递减）")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("n/a")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("foo--")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("16")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("逻辑运算符（逻辑非）")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("从右到左")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("!foo")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("按位非")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("~foo")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("一元加法")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("+foo")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("一元减法")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("-foo")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("更新表达式（前置递增）")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("++foo")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("更新表达式（前置递减）")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("--foo")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("typeof")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("typeof foo")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("void")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("void foo")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("delete")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("delete foo")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("await")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("await foo")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("15")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("算术运算符（幂）")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("从右到左")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("foo ** bar")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("14")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("算术运算符（乘法）")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("从左到右")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("foo * bar")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("算术运算符（除法）")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("foo / bar")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("算术运算符（取模）")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("foo % bar")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("13")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("算术运算符（加法）")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("从左到右")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("foo + bar")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("算术运算符（减法）")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("foo - bar")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("12")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("按位左移")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("从左到右")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("foo << bar")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("按位右移")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("foo >> bar")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("无符号右移")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("... >>> bar")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("11")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("小于")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("从左到右")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("foo < bar")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("小于等于")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("foo <= bar")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("大于")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("foo > bar")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("大于等于")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("foo >= bar")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("in")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("foo in bar")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("instanceof")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("foo instance bar")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("10")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("等号")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("从左到右")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("foo == bar")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("非等号")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("foo !== bar")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("全等号")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("foo === bar")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("非全等号")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("foo !== bar")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("9")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("按位与")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("从左到右")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("foo & bar")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("8")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("按位异或")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("从左到右")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("foo ^ bar")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("7")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("按位或")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("从左到右")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("foo | bar")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("6")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("逻辑运算符（逻辑与）")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("从左到右")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("foo && bar")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("5")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("逻辑运算符（逻辑或）")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("从左到右")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("foo ||bar")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("4")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("条件运算符")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("从右到左")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("foo ? foo : bar")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("3")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("赋值运算符")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("从右到左")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("foo = bar")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("赋值运算符")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("foo += bar")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("赋值运算符")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("foo -= bar")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("赋值运算符")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("foo *= bar")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("赋值运算符")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("foo /= bar")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("赋值运算符")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("foo %= bar")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("赋值运算符")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("foo <<= bar")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("赋值运算符")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("foo >>= bar")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("赋值运算符")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("foo >>>= bar")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("赋值运算符")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("foo &= bar")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("赋值运算符")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("foo ^= bar")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("赋值运算符")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("foo \\|= bar")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("2")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("yield")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("从右到左")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("yield foo")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("yield*")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("yield* foo")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("1")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("扩展运算符")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("n/a")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("...foo")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("0")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("逗号运算符")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("从左到右")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("foo, bar")])])])])])])}),[],!1,null,null,null);e.default=n.exports}}]);