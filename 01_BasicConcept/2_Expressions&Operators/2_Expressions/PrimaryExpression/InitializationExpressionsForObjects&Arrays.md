# 对象和数组的初始化表达式

对象和数组初始化表达式实际上是一个新创建的对象和数组。这些初始化表达式有时称作“对象直接量”和“数组直接量”。然而和布尔值直接量不同，它们实际上不是原始表达式，因为它们所包含的成员或者元素都是子表达式。

## 数组初始化表达式

数组初始化表达式是通过一对方括号和其内由逗号隔开的列表构成的。

初始化的结果是一个新创建的数组。

数组的元素是逗号分隔的表达式的值。

```javascript
[]			// 一个空数组：[]内留空即表示该数组没有任何元素
[1+2, 3+4]	// 拥有两个元素的数组，第一个是3，第二个是7
```

数组初始化表达式中的元素初始化表达式也可以是数组的初始化表达式。也就是说，这些表达式是可以嵌套的。

```javascript
var matrix = [[1,2,3],[4,5,6],[7,8,9]];
```

数组直接量中的列表逗号之间的元素可以省略，这时省略的空位会填充值 `undefined`。

```javascript
var sparseArray = [1,,,,5];
```

数组直接量的元素列表结尾处可以留下单个逗号，这时并不会创建一个新的值为 `undefined` 的值。

## 对象初始化表达式

对象初始化表达式和数组初始化表达式非常相似，只是方括号被花括号代替，并且每个子表达式都包含一个属性名和一个冒号作为前缀。

```javascript
var p = {x: 2.3, y: -1.2};	// 一个拥有两个属性成员的对象
var q = {};				   // 一个空对象
q.x = 2.3; q.y = -1.2;	    // q的属性成员和p的一样
```

对象直接量也可以嵌套

```javascript
var rectangle = {upperLeft: {x: 2, y: 2},
    			lowRight: {x: 4, y: 5} };
```

JavaScript 求对象初始化表达式的值的时候，对象表达式也都会各自计算一次，并且它们不必包含常数值：它们可以是任意 JavaScript 表达式。

同样，对喜爱那个直接量中的属性名称可以是字符串而不是标识符（这在那些只能使用保留字或一些非法标识符作为属性名的地方非常有用）

```javascript
var side = 1;
var square = {"upperLeft": {x: p.x, y: p.y},
              'lowerRight': {x: p.x + side, y: p.y + side}};
```
