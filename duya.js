/* eslint-disable */
const VERSION = '0.0.1',
	tomato = function () {
		return new tomato.fn.init();
	};

const EnumType = Object.freeze({
	'[object Number]': 'number',
	'[object String]': 'string',
	'[object Symbol]': 'symbol',
	'[object Function]': 'function',
	'[object Boolean]': 'boolean',
	'[object Object]': 'object',
	'[object Array]': 'array',
	'[object Error]': 'error',
	'[object RegExp]': 'regexp',
	'[object Date]': 'date',
});

tomato.fn = tomato.prototype = {
	tomato: VERSION,
	constructor: tomato,
	init: function (selector, context, root) {
		if (!selector) {
			return this;
		}

		return this;
	},
	/* 判断一个对象是不是一个纯粹的对象 */
	isPlainObject: function (obj) {
		let proto, Ctor;
		// 排除 undefined null 和 非 object 情况
		if (!obj || toString.call(obj) !== '[object, object]') {
			return false;
		}

		proto = Object.getPrototypeOf(obj);

		if (!proto) {
			return true;
		}

		Ctor = class2type.hasOwnProperty.call(proto, 'constructor') && proto.constructor;
		return typeof Ctor === 'function' && class2type.hasOwnProperty.toString.call(Ctor) === class2type.hasOwnProperty.toString.call(Object);
	},
	get: function (num) {
		if (num == null) {
			return slice.call(this);
		}

		return num < 0 ? this[num + this.length] : this[num];
	},
	/* 做类型判断 */
	type: function (value) {
		if (value == null) {
			return value + '';
		};

		return EnumType[toString.call(value)];
	},
	/* 循环遍历 */
	each: function () {
		return this;
	}
}

tomato.fn.init.prototype = tomato.fn;

console.log('🍅 Tomato 当前工具的版本: ', tomato.fn.init().version);
console.log('\n');
console.log(tomato);
console.log('\n');
console.log('---- Tomato 类型测试 start ----');
console.log('value: 1        类型为:', tomato.fn.type(1));
console.log("value: '1'      类型为:", tomato.fn.type('1'));
console.log("value: Symbol   类型为:", tomato.fn.type(Symbol('duya')));
console.log("value: Function 类型为:", tomato.fn.type(function type () {}));
console.log("value: False    类型为:", tomato.fn.type(false));
console.log("value: True     类型为:", tomato.fn.type(true));
console.log("value: Object   类型为:", tomato.fn.type({}));
console.log("value: Array    类型为:", tomato.fn.type([]));
console.log('---- Tomato 类型测试 end ----');
console.log('\n');
console.log('---- Tomato extrend start ----');
// tomato.extrend = tomato.fn.extrend = tomato.prototype.extrend = () => {
// 	var options, name, src, copy, copyIsArray, clone, target = arguments[0] || {},
// 		i = 1;
// 		length = arguments.length,
// 		deep = false;
// 		console.log('target', target);
// 		// 判断是否是深拷贝
// 		if (tomato.fn.type(target) === 'boolean') {
// 			console.log('🔟 深度拷贝');
// 		}
// }
// console.log('tomato.extrend', tomato.fn.extrend(true))
console.log('😣 暂时没看懂源码');
console.log('---- Tomato extrend end ----\n');
console.log('----- Tomato isPlainObject start -----');

console.log('----- Tomato isPlainObject end -----');