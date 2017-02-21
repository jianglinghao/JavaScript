var _ = {
    chunk: function(array, size) {
        var l = Math.ceil(array.length / size)
        var division = []
        for (var i = 0; i < l; i++) {
            division[i] = []
        }

        for (var j = 0; j < array.length; j++) {
            division[parseInt(j / size)][j % size] = array[j]
        }
        return division
    },

    chunk2: function(arr, n) {
        var division = []
        var temp = []
        for (var i = 0; i < arr.length; i++) {
            temp.push(arr[i])
            if ((i + 1) % n == 0 || i == arr.length - 1) {
                division.push(temp)
                temp = []
            }
            // division
        }
        return division
    },



    /*
     *函数作用:删除数组中所有false值。The values false, null, 0, "", undefined, and NaN are falsey.
     *参数作用:The array to compact.
     *返回值:压缩后的新数组
     **/

    compact: function(array) {
        var compacted = []
        for (var i = 0; i < array.length; i++) {
            if (!!array[i] == false) {
                continue
            } else {
                compacted.push(array[i])
            }
        }
        return compacted
    },

    /**
     *Creates a new array concatenating array with any additional arrays and/or values.
     *array (Array): The array to concatenate.
     *[values] (...*): The values to concatenate.
     *Returns (Array): Returns the new concatenated array.
     */

    concat: function(array, af) {
        var arr = []
        l = arguments.length
        for (var i = 0; i < l; i++) {
            if (arguments[i] instanceof Array) {
                for (var j = 0; j < arguments[i].length; j++) {
                    arr.push(arguments[i][j])
                }
            } else {
                arr.push(arguments[i])
            }
        }
        return arr
    },



    difference: function(array, sameValueZero) {
        var arr = array
        var brr = sameValueZero
        var crr = []
        for (var i = 0; i < arr.length; i++) {
            var isSingle = true
            for (var j = 0; j < brr.length; j++) {
                if (arr[i] == brr[j]) {
                    brr.splice(j, 1)
                    isSingle = false
                    break
                }
            }
            if (isSingle == true) {
                crr.push(arr[i])
            }
        }
        return crr
    },



    differenceBy: function(array, sameValueZero, identity) {
        var arr = array
        var brr = sameValueZero
        var crr = []
        var obj = {}
        for (var i = 0; i < arr.length; i++) {
            for (var j = 0; j < brr.length; j++) {
                if (identity instanceof Object) {
                    if (identity(arr[i]) == identity(brr[j])) {
                        brr.splice(j, 1)
                        continue
                    } else {
                        crr.push(arr[i])
                    }
                } else {
                    if (arr[i][identity] == brr[j][identity]) {
                        brr.splice(j, 1)
                        continue
                    } else {
                        crr.push(arr[i])
                    }

                }
            }
        }
        return crr
    },

    pullAt: function(array) {
        var arr = []
        var l = array.length
        var brr = arguments
        var crr = []
        var drr = []
        for (var i = 0; i < l; i++) {
            arr[i] = array[i]
        }
        var p = 0

        for (var j = 0; j < brr[1].length; j++) {

            crr.push(arr[brr[1][j]])
            drr[j] = array[brr[1][j]]

        }
        for (var i = 0; i < crr.length; i++) {
            if (arr[i] == crr[i]) {}
        }
        array = brr
        return crr
    },


    reverse: function(array) {
        var brr = []
        var l = array.length
        for (var i = 0; i < l; i++) {
            brr[l - 1 - i] = array[i]
        }
        array = brr
        return array
    },


    tail: function(array) {
        var arr = []
        var l = array.length
        for (var i = 0; i < l; i++) {
            arr[i] = array[i]
        }
        arr.splice(0, 1)
        return arr
    },

    take: function(array) {
        var arr = []
        var l = array.length
        var brr = arguments
        var n = brr[1]
        if (n == undefined) {
            n = 1
        }
        for (var i = 0; i < l; i++) {
            arr[i] = array[i]
        }
        arr.splice(n, l - n)
        return arr
    },


    takeRight: function(array) {
        var arr = []
        var l = array.length
        var brr = arguments
        var n = brr[1]
        var crr = []
        if (n == undefined) {
            n = 1
        }
        for (var i = 0; i < l; i++) {
            arr[i] = array[i]
        }
        for (var i = 0; i < n; i++) {
            if (i > l) {
                return arr
            }
            crr.unshift(array[l - 1 - i])
        }

        // arr.splice(l ,-n)
        return crr
    },



    uniq: function(array) {
        var arr = []
        var l = array.length
        var brr = []
        var isSingle = true
        for (var i = 0; i < l; i++) {
            arr[i] = array[i]
        }
        for (var i = 0; i < l; i++) {
            for (var j = 0; j < l; j++) {
                if (i == j) {
                    continue
                }
                //此处arr长度减少导致下标指向错误 但是由于是遍历所有后去除后一个所以能用
                if (arr[i] == arr[j]) {
                    arr.splice(j, 1)

                }
            }
        }
        return arr
    },



    unzip: function(array) {
        var arr = []
        var l = array.length
        var brr = []
        for (var i = 0; i < l; i++) {
            arr[i] = array[i]
        }
        for (var i = 0; i < arr[1].length; i++) {
            brr[i] = []
        }
        for (var i = 0; i < l; i++) {
            for (var j = 0; j < arr[i].length; j++) {

                brr[j][i] = arr[i][j]
            }
        }
        return brr

    },

    zip: function() {
        var arr = []
        var l = arguments.length
        var brr = []

        for (var i = 0; i < l; i++) {
            arr[i] = arguments[i]
        }
        for (var i = 0; i < arr[1].length; i++) {
            brr[i] = []
        }
        for (var i = 0; i < l; i++) {
            for (var j = 0; j < arr[i].length; j++) {

                brr[j][i] = arr[i][j]
            }
        }
        return brr
    },


    drop: function(array, n) {
        if (arguments[1] == undefined) {
            arguments[1] = 1
        }
        var arr = array
        var brr = []
        var l = arguments[1]
        for (var i = 0; i < arr.length; i++) {
            if (i < l) {
                continue
            } else {
                brr.push(arr[i])
            }
        }
        return brr
    },


    dropRight: function(array, n) {
        if (arguments[1] == undefined) {
            arguments[1] = 1
        }
        var arr = array
        var brr = []
        var l = arguments[1]
        var arrLength = arr.length
        for (var i = 0; i < arrLength; i++) {
            if (i + l > arrLength - 1) {
                continue
            } else {
                brr.push(arr[i])
            }
        }
        return brr
    },



    fill: function(array, value) {
        var arr = array
        var l = arr.length
        var start = arguments[2]
        var end = arguments[3]
        if (start == undefined && end == undefined) {
            start = 0
            end = l
        }
        for (var i = start; i < end; i++) {
            arr[i] = value
        }
        return arr
    },



    flatten: function(array) {
        var result = []
        for (var i = 0; i < array.length; i++) {
            if (array[i] instanceof Array) {
                for (var j = 0; j < array[i].length; j++) {
                    result.push(array[i][j])
                }
            } else {
                result.push(array[i])
            }
        }
        return result

    },


    flattenDeep: function(a) {
        var newArr = []

        function fun(a) {
            for (var i = 0; i < a.length; i++) {
                if (Array.isArray(a[i]) === true) {
                    fun(a[i])
                } else {
                    newArr.push(a[i])
                }
            }
        }
        fun(a)
        return newArr
            // arr = arr.join(" ").split("")
            // for (var i = 0; i < arr.length; i++) {
            //   if (arr[i] == "," || arr[i] == " ") {
            //     continue
            //   } else {
            //     brr.push(+arr[i])
            //   }
            // }
            // return brr
    },



    fromPairs: function(pairs) {
        var arr = pairs
        var obj = {}
        for (var i = 0; i < arr.length; i++) {
            var char = arr[i][0]
            obj[char] = arr[i][1]
        }
        return obj
    },



    initial: function(array) {
        var arr = array
        arr.splice(arr.length - 1, 1)
        return arr
    },



    intersection: function(arrays) {
        var arr = arguments
        var brr = []
        for (var i = 1; i < arr.length; i++) {
            for (var j = 0; j < arr[i].length; j++) {
                if (arr[0][j] == arr[i][j]) {
                    brr.push(arr[0][j])
                }
            }
        }
        return brr
    },



    pull: function(array) {
        var brr = arguments
        var l = array.length
        for (var i = 0; i < l; i++) {
            for (var j = 1; j < brr.length; j++) {
                if (array[i] == brr[j]) {
                    array.splice(i, 1)
                    i = array.indexOf(arguments[i])
                }
            }
        }
        return array
    },



    pullAll: function(array, values) {
        var brr = values
        var arr = []
        var l = array.length
        var p = 0

        for (var i = 0; i < l; i++) {
            arr[i] = array[i]
        }
        for (var i = 0; i < l; i++) {
            for (var j = 0; j < brr.length; j++) {
                if (arr[i] == brr[j]) {

                    array.splice(i - p, 1)
                    p++
                }
            }
        }



        return array
    },



    pullAt: function(array) {
        var arr = []
        var l = array.length
        var brr = arguments
        var crr = []
        for (var i = 0; i < l; i++) {
            arr[i] = array[i]
        }
        for (var i = 0; i < l; i++) {
            for (var j = 0; j < brr[1].length; j++) {

                crr.push(arr[brr[1][j]])

            }
        }
        return crr
    },

    map: function(arr, f) {
        var brr = []
        for (var i = 0; i < arr.length; i++) {
            brr.push(f(arr[i], i, arr))
        }
        return brr
    },

    filter: function(collection, f) {
        var brr = []
        var l = collection.length
        var arr = []
        for (var i = 0; i < l; i++) {
            arr[i] = collection[i]
        }
        for (var i = 0; i < l; i++) {
            if (f(arr[i], i, arr)) {
                brr.push(arr[i])
            }
        }
        return brr
    },



    partition: function(collection, f) {
        var brr = []
        var l = collection.length
        var arr = []
        var crr = []
        for (var i = 0; i < l; i++) {
            arr[i] = collection[i]
        }
        for (var i = 0; i < l; i++) {
            if (f(arr[i], i, arr)) {
                brr.push(arr[i])
            } else {
                crr.push(arr[i])
            }
        }
        var drr = []
        drr.push(brr)
        drr.push(crr)
        return drr
    },
    head: function(array) {
        var first = array[0]
        return first
    },
    indexOf: function(array, value, fromIndex) {
        var l = array.length
        var form = arguments[2]
        if (form == undefined) {
            form = 0
        }
        for (var i = form; i < l; i++) {
            if (array[i] == value) {
                return i
            }
        }
        return -1
    },
    join: function(array, separator) {
        var s = arguments[1]
        if (s == undefined) {
            s = ","
        }
        var arr = array.join(s)
        return arr
    },
    reduce: function(collection, iteratee, ac) {
        var l = collection.length
        var start = 0
        if (ac == undefined) {
            ac = collection[0]
            start = 1
        }
        for (var i = start; i < l; i++) {
            ac = iteratee(ac, collection[i])
        }
        return ac
    },
    nth: function(array, num) {
        var num = (num == undefined) ? 0 : num
        var l = array.length
        for (var i = 0; i < l; i++) {
            if (num < 0) {
                if (i == l + num) {
                    return array[i]
                }
            } else {
                if (i == num) {
                    return array[i]
                }
            }
        }
    },

    sortedIndex: function(array, value) {
        for (var i = 0; i < array.length; i++) {
            if (array[i] < value < array[i + 1]) {
                return i + 1
            }
        }
    },
    every: function(collection, f) {
        var l = collection.length
        var bool = true
        for (var i = 0; i < l; i++) {
            if (!f(collection[i])) {
                bool = false
            }

        }
        return bool
    },



    some: function(collection, f) {
        var l = collection.length
        var bool = false
        for (var i = 0; i < l; i++) {
            if (f(collection[i])) {
                bool = true
                return bool
            }

        }

        return bool
    },



    reject: function(collection, f) {
        var brr = []
        var l = collection.length
        var arr = []
        for (var i = 0; i < l; i++) {
            arr[i] = collection[i]
        }
        for (var i = 0; i < l; i++) {
            if (f(arr[i], i, arr)) {
                continue
            } else {
                brr.push(arr[i])
            }
        }
        return brr
    },

    capitalize: function(str) {
        str = str.toLowerCase()
        var first = str[0].toUpperCase()
        for (var i = 1; i < str.length; i++) {
            first += str[i]
        }
        return first
    },
    endsWith: function(string, target, position) {
        var str = string ? string : ''
        var pos = position ? position : string.length
        if (str[pos - 1] == target) {
            return true
        } else {
            return false
        }
    },
    escape: function(str) {
        var arr = str.split("")
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] == "&") {
                arr[i] = "&amp;"
            }
            if (arr[i] == ">") {
                arr[i] = "&gt;"
            }
            if (arr[i] == "<") {
                arr[i] = "&lt;"
            }
            if (arr[i] == "'") {
                arr[i] = "&apos;"
            }
            if (arr[i] == '"') {
                arr[i] = "&quot;"
            }
        }
        str = arr.join("")
        return str
    },

    escapeRegExp: function(str) {
        var arr = str.split("")
        var result = []
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] == "^" || arr[i] == "$" || arr[i] == "" || arr[i] == "." || arr[i] == "*" || arr[i] == "+" || arr[i] == "?" || arr[i] == "(" || arr[i] == ")" || arr[i] == "[" || arr[i] == "]" || arr[i] == "{" || arr[i] == "}" || arr[i] == "|") {
                result[i] = "\\" + arr[i]
            } else {
                result[i] = arr[i]
            }

        }
        str = result.join("")
        return str
    },
    lowerFirst: function(str) {
        var first = str[0].toLowerCase()
        for (var i = 1; i < str.length; i++) {
            first += str[i]
        }
        return first
    },

    pad: function(str, length, chars) {
        var length = length ? length : 0
        var chars = chars ? chars : ' '
        var strpad = length - str.length
        var startpad = parseInt(strpad / 2)
        var endpad = strpad - startpad
        var arr = str.split("")
        if (str.length < length) {
            for (var i = 0; i < startpad / chars.length; i++) {
                arr.unshift(chars)
            }
            for (var i = 0; i < endpad; i++) {
                arr.push(chars[i % chars.length])
            }
            // charAt(0)
        }
        var result = arr.join("")
        return result
    },



    padEnd: function(str, length, chars) {
        var length = length ? length : 0
        var chars = chars === undefined ? ' ' : chars
        var strpad = length - str.length
        var arr = str.split("")
        if (str.length < length) {
            for (var i = 0; i < strpad; i++) {
                arr.push(chars[i % chars.length])
            }
            // charAt(0)
        }
        var result = arr.join("")
        return result
    },
    padStart: function(str, length, chars) {
        var length = length ? length : 0
        var chars = chars === undefined ? ' ' : chars
        var strpad = length - str.length
        var arr = str.split("")
        if (str.length < length) {
            for (var i = 0; i < strpad; i++) {
                arr.unshift(chars[i % chars.length])
            }
            // charAt(0)
        }
        var result = arr.join("")
        return result
    },


    parseInt: function(string, radix) {
        if (radix == 0 || radix == undefined) {
            radix = 10
        }
        var str = +string
        return str
    },
    repeat: function(string, n) {
        var n = (n == undefined) ? 1 : n
        var string = string ? string : ''
        var arr = string.split("")
        if (n == 0) {
            return ''
        }
        for (var i = 0; i < n - 1; i++) {
            arr.push(string)
        }
        string = arr.join("")
        return string

    },
    replace: function(str, pattern, replacement) {
        var arr = str.split(" ")
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] == pattern) {
                arr[i] = replacement
            }
        }
        str = arr.join(" ")
        return str
    },
    split: function(str, separator, limit) {
        var arr = str.split("")
        var brr = []
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] == separator) {
                arr.splice(i, 1)
            }
        }
        var limit = limit ? limit : arr.length
        for (var i = 0; i < limit; i++) {
            brr.push(arr[i])
        }
        return brr
    },
    deburr: function(str) {
        var arr = str.split("")
        for (var i = 0; i < arr.length; i++) {
            if (arr[i].charCodeAt(0) == 224) {
                arr[i] = String.fromCharCode(97)
            }
            if (arr[i].charCodeAt(0) == 233) {
                arr[i] = String.fromCharCode(101)
            }
        }
        str = arr.join("")
        return str
    },
    without: function(arr, values) {
        var arg = arguments
        var result = []
        var bool
        for (var i = 0; i < arr.length; i++) {
            bool = true
            for (var j = 1; j < arg.length; j++) {
                if (arr[i] == arg[j]) {
                    bool = false
                    continue
                }
            }
            if (bool) {
                result.push(arr[i])
            }
        }
        return result
    },

    includes: function(collection, value, fromIndex) {
        var fromIndex = fromIndex ? fromIndex : 0
        var isInc = false
        for (var i = fromIndex; i < collection.length; i++) {
            if (collection[i] == value) {
                isInc = true
            }
        }
        return isInc
    },
    invert: function(object) {
        var result = {}
        for (key in object) {
            result[object[key]] = key
        }
        return result
    },
    mapKeys: function(object, iteratee) {
        if (iteratee == undefined) {
            iteratee = this.identity
        }
        var mapped = {}

        for (var key in object) {
            mapped[iteratee(object[key], key, object)] = object[key]
        }
        return mapped
    },
    identity: function(argument) {
        return argument
    },
    merge: function(object, sources) {

        for (var key in object) {
            for (var i = 0; i < sources[key].length; i++) {
                object[key].push(sources[key][i])
            }
        }
        return object
    },
    pick: function(object, paths) {
        var picked = {}
        for (var i = 0; i < paths.length; i++) {
            picked[paths[i]] = object[paths[i]]
        }
        return picked
    },
    after: function(n, func) {
        var counter = n
        return function(arg) {
            if (--counter <= 1) {
                return func(arg)
            }
        }
    },
    last: function(arr) {
        return arr[arr.length - 1]
    },
    lastIndexOf: function(arr, val, fromIndex) {
        var fromIndex = (fromIndex == undefined) ? (arr.length - 1) : fromIndex
        for (var i = fromIndex; i > 0; i--) {
            if (arr[i] == val) {
                return i
            }
        }
    },
    lt: function(value, other) {
        return value < other
    },
    sortedIndex: function(arr, value) {
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] < value) {
                return i + 1
            }
        }
    },
    sortedIndexOf: function(arr, value) {
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] == value) {
                return i
            }
        }
    },
    sortedIndexBy: function(arr, value, f) {
        for (var i = 0; i < arr.length; i++) {
            if ((typeof f) == "string") {
                var x = value[f]
            }
            if (f instanceof Object) {
                var x = f(value)
            }
            for (var keys in arr[i]) {
                if (arr[i][keys] == x) {
                    return i
                }
            }
        }

    },
    sortedLastIndex: function(arr, value) {
        for (var i = arr.length; i >= 0; i--) {
            if (arr[i] == value) {
                return i + 1
            }
        }
    },
    sortedLastIndexBy: function(arr, value, f) {
        for (var i = arr.length; i >= 0; i--) {
            if ((typeof f) == "string") {
                var x = value[f]
            }
            if (f instanceof Object) {
                var x = f(value)
            }
            for (var keys in arr[i]) {
                if (arr[i][keys] == x) {
                    return i + 1
                }
            }
        }
    },
    sortedLastIndexOf: function(arr, value) {
        for (var i = arr.length; i >= 0; i--) {
            if (arr[i] == value) {
                return i
            }
        }
    },
    sortedUniq: function(arr) {
        var result = []
        for (var i = 0; i < arr.length; i++) {
            if (result.indexOf(arr[i]) < 0) {
                result.push(arr[i])
            }
        }
        return result
    },
    sortedUniqBy: function(arr, f) {
        var result = []
        var temp = []
        for (var i = 0; i < arr.length; i++) {
            if (temp.indexOf(f(arr[i])) < 0) {
                temp.push(f(arr[i]))
                result.push(arr[i])
            }
        }
        return result
    },
    forOwn: function(obj, f) {
        for (var key in obj) {
            if (obj.hasOwnProperty(key)) {
                if (f(obj[key], key, obj) === false) {
                    return
                }
            }
        }
        return obj
    },

    maxBy: function(array, iteratee) {
        var biggest = -Infinity
        var max
        for (var i = 0; i < array.length; i++) {
            if (iteratee instanceof Object) {
                if (iteratee(array[i]) > biggest) {
                    biggest = iteratee(array[i])
                    max = array[i]
                }
            } else {
                if (array[i][iteratee] > biggest) {
                    biggest = array[i][iteratee]
                    max = array[i]
                }
            }
        }

        return max

    },

    mean: function(array) {
        return array.reduce((a, b) => a + b, 0) / array.length
    },
    meanBy: function(array, iteratee) {
        if (iteratee instanceof Object) {
            return array.map(iteratee).reduce((a, b) => a + b, 0) / array.length
        } else {
            return array.map(a => a[iteratee]).reduce((a, b) => a + b, 0) / array.length
        }
    },
    min: function(array) {
        var minimum = Infinity
        if (array.length == 0) {
            return undefined
        }
        if (array.some(o => !o)) {
            return undefined
        }
        for (var i = 0; i < array.length; i++) {
            if (array[i] < minimum) {
                minimum = array[i]
            }
        }
        return minimum
    },
    minBy: function(array, iteratee) {
        var minimum = Infinity
        var min
        for (var i = 0; i < array.length; i++) {
            if (iteratee instanceof Object) {
                if (iteratee(array[i]) < minimum) {
                    minimum = iteratee(array[i])
                    min = array[i]
                }
            } else {
                if (array[i][iteratee] < minimum) {
                    minimum = array[i][iteratee]
                    min = array[i]
                }
            }
        }
        return min
    },
    multiply: function(multiplier, multiplicand) {
        return multiplier * multiplicand
    },
    round: function(n, precision) {
        var precision = precision ? precision : 0
        return n = (parseInt(n * Math.pow(10, precision) + 0.5)) / Math.pow(10, precision)
    },

    subtract: function(minuend, subtrahend) {
        return minuend - subtrahend
    },
    sum: function(array) {
        var sum = 0
        for (var i = 0; i < array.length; i++) {
            sum += array[i]
        }
        return sum
    },
    sumBy: function(array, iteratee) {
        var sum = 0
        for (var i = 0; i < array.length; i++) {
            if (iteratee instanceof Object) {
                sum += iteratee(array[i])
            } else {
                sum += array[i][iteratee]
            }
        }
        return sum
    },
    clamp: function(number, lower, upper) {
        if (upper > number && number > lower) {
            return number
        } else if (number < lower) {
            return lower
        } else if (number > upper) {
            return upper
        }
    },

    inRange: function(number) {
        if (arguments.length == 2) {
            start = 0
            end = arguments[1]
        } else {
            start = arguments[1]
            end = arguments[2]
        }
        var min = start < end ? start : end
        var max = start < end ? end : start
        return max > number && number > min
    },
    random: function(lower, upper, floating) {
        var len = arguments.length
        if (len == 0) {
            return Math.random()
        }
        if (len == 1) {
            upper = arguments[0]
            lower = 0
        }
        if (len == 2) {
            lower = arguments[0]
            upper = arguments[1]
        }
        if (len == 3) {
            lower = arguments[0]
            upper = arguments[1]
            floating = arguments[2]
        }
        if (Number.isInteger(lower) && Number.isInteger(upper) || floating == true) {
            return Math.round(Math.random() * (upper - lower) + lower)
        } else {
            return Math.random() * (upper - lower) + lower
        }
    },

    isUndefined: function(value) {
        return value === undefined
    },
    isWeakMap: function(value) {
        return value instanceof WeakMap
    },


    isWeakSet: function(value) {
        return value instanceof WeakSet
    },
    lt: function(value, other) {
        return value < other
    },

    lte: function(value, other) {
        return value <= other
    },

    add: function(a, b) {
        return a + b
    },
    ceil: function(n, precision) {
        var precision = precision ? precision : 0
        return n = (parseInt(n * Math.pow(10, precision)) + 1) / Math.pow(10, precision)
    },
    divide: function(dividend, divisor) {
        return dividend / divisor
    },
    floor: function(n, precision) {
        var precision = precision ? precision : 0
        return n = (parseInt(n * Math.pow(10, precision))) / Math.pow(10, precision)
    },



    max: function(array) {
        var biggest = -Infinity
        if (array.length == 0) {
            return undefined
        }
        for (var i = 0; i < array.length; i++) {
            if (array[i] == false) {
                return undefined
            }
            if (array[i] > biggest) {
                biggest = array[i]
            }
        }
        return biggest
    },
    isNil: function(value) {
        return value === null || value === undefined
    },

    isNull: function(value) {
        return value === null
    },
    isNumber: function(value) {
        return (typeof value) === (typeof 3)
    },
    isSet: function(value) {
        return value instanceof Set
    },
    isObject: function(value) {
        var type = typeof value;
        return value != null && (type == 'object' || type == 'function');
    },
    isObjectLike: function(value) {
        return value != null && typeof value == 'object'
    },
    isSafeInteger: function(value) {
        return Number.isSafeInteger(value) && typeof value === 'number'
    },
    isRegExp: function(value) {
        return value instanceof RegExp
    },
    isString: function(value) {
        return typeof value === 'string'
    },
    isSymbol: function(value) {
        return typeof value === 'symbol'
    },

    isArray: function(value) {
        if (value instanceof Array) {
            return true
        } else {
            return false
        }
    },


    isArrayBuffer: function(value) {
        return value instanceof ArrayBuffer
    },


    isArrayLike: function(value) {
        if (value.length >= 0 && !(value instanceof Function)) {
            return true
        } else {
            return false
        }

    },

    isBoolean: function(value) {
        return (typeof value) === (typeof false)
    },

    isDate: function(value) {
        if (value instanceof Date) {
            return true
        } else {
            return false
        }
    },
    isElement: function(value) {
        if (value instanceof HTMLElement) {
            return true
        } else {
            return false
        }
    },

    isEmpty: function(value) {
        if (value instanceof Object) {
            return (Object.keys(value).length === 0)
        }
        if (value instanceof Array) {
            return (value.length === 0)
        }
        if (value !== undefined) {
            return true
        } else {
            return false
        }
    },

    isFinite: function(value) {
        return Number.isFinite(value) && (typeof value) === (typeof 3)
    },

    isError: function(value) {
        var arr = [Error, EvalError, RangeError, ReferenceError, SyntaxError, TypeError, URIError]
        for (var i = 0; i < arr.length; i++) {
            if (value instanceof arr[i]) {
                return true
            }
        }
        return false

    },


    isFunction: function(value) {
        return value instanceof Function

    },
    isInteger: function(value) {
        return Number.isInteger(value) && (typeof value) === 'number'
    },
    isLength: function(value) {
        return Number.isInteger(value) && value >= 0
    },
    isMap: function(value) {
        return value instanceof Map
    },

    parseJson: function(str) {
        json = str
        var i = 0
        return parse()

        function parse() {
            var currChar = json[i]
            if (currChar == 't') {
                return parseTrue()
            }

            if (currChar == 'n') {
                return parseNull()
            }
            if (currChar == 'f') {
                return parseFalse()
            }
            if (currChar == '"') {
                return parseString()
            }
            if (currChar == '[') {
                return parseArray()
            }
            if (currChar == '{') {
                return parseObject()
            }
            if (currChar == ':') {

            }
            if (Number.isInteger(+currChar)) {
                return parseNumber()
            }
        }

        function parseTrue() {
            i += 4
            return true
        }

        function parseFalse() {
            i += 5
            return false
        }

        function parseNull() {
            i += 4
            return null
        }

        function parseNumber() {
            var startIndex = i
            var char
            for (var j = startIndex + 1;; j++) {
                char = json[j]
                if (!Number.isInteger(+char)) {
                    i = j
                    break
                }
            }
            var newNum = json.slice(startIndex, j)
            return +newNum
        }

        function parseString() {
            var startIndex = i
            var endIndex = json.indexOf('"', startIndex + 1)
            var newStr = json.slice(startIndex + 1, endIndex)
            i = endIndex + 1
            return newStr
        }

        function parseObject() {
            var result = {}
            var key
            i++
            var value
            if (json[i] == '}') {
                i++
                return {}
            }
            while (true) {
                key = parseString()
                i++
                value = parse()
                result[key] = value
                    // if (json[i] == ',') {
                    //  i++
                    // }
                if (json[i] == '}') {
                    break
                } else {
                    i++
                    continue
                }
            }
            i++
            return result
        }

        function parseArray() {
            i++
            var value
            var result = []
            if (json[i] == ']') {
                i++
                return []
            }
            while (true) {
                value = parse()
                result.push(value)
                if (json[i] == ',') {
                    i++
                    continue
                }
                if (json[i] == ']') {

                    break
                }
            }
            i++
            return result
        }
    },


    toUpper: function(string) {
        string = string || ''
        var result = []

        for (var i = 0; i < string.length; i++) {
            if (97 <= string[i].charCodeAt(0) &&
                string[i].charCodeAt(0) <= 122) {
                result[i] = String.fromCharCode(
                    string[i]
                    .charCodeAt(0) - 32)
            } else {
                result[i] = string[i]
            }
        }
        return result.join("")
    },

    toLower: function(string) {
        string = string || ''
        var result = []

        for (var i = 0; i < string.length; i++) {
            if (65 <= string[i].charCodeAt(0) &&
                string[i].charCodeAt(0) <= 90) {
                result[i] = String.fromCharCode(string[i]
                    .charCodeAt(0) + 32)
            } else {
                result[i] = string[i]
            }
        }
        return result.join("")
    },

    defaultTo: function(value, defaultValue) {
        if (value === null ||
            value === undefined ||
            Number.isNaN(value)) {
            return defaultValue
        } else {
            return value
        }
    },

    toPath: function(value) {
        return value.replace(/\./g, '').replace(/\[/g, '').replace(/\]/g, '').split('')
    },
    constant: function(value) {
        return function() {
            return value
        }
    },
    times: function(n, iteratee) {
        var result = []
        for (var i = 0; i < n; i++) {
            result.push(iteratee(i))
        }
        return result

    },
    rangeRight: function(start, end, step) {
        if (end === undefined) {
            end = start;
            start = 0;
        }
        step = step === undefined ? (start < end ? 1 : -1) : step;
        var result = []
        if (step == 0) {
            for (var i = end; start > end ? i < start : i > start; i--) {
                result.push(start)
            }
        } else {
            for (var i = end; start > end ? i < start : i > start; i = i - step) {
                result.push(i - step)
            }
        }
        return result
    },

    range: function(start, end, step) {
        if (end === undefined) {
            end = start;
            start = 0;
        }
        step = step === undefined ? (start < end ? 1 : -1) : step;
        var result = []
        if (step == 0) {
            for (var i = start; start > end ? i > end : i < end; i++) {
                result.push(start)
            }
        } else {

            for (var i = start; start > end ? i > end : i < end; i = i + step) {
                result.push(i)
            }
        }
        return result
    },

    findKey: function(object, predicate) {
        var result = []
        for (var key in object) {
            var value = object[key]
            if (Array.isArray(predicate)) {
                if (value[predicate[0]] == predicate[1]) {
                    return key
                }
            } else
            if (typeof predicate === 'function') {
                if (predicate(value)) {
                    return key
                }
            } else
            if (typeof predicate == 'string') {
                if (value[predicate]) {
                    return key
                }
            } else
            if (typeof predicate === 'object') {
                var flag = true
                for (var keys in value) {
                    if (value[keys] !== predicate[keys]) {
                        flag = false
                    }
                }
                if (flag) {
                    return key
                }

            }
        }
    },
    defaultsDeep: function(object, sources) {
        if (arguments.length == 1) {
            return object
        }
        for (var key in sources) {
            if (sources[key] instanceof Object) {
                this.defaults(object[key], sources[key])
            } else if (!(key in object)) {
                object[key] = sources[key]
            }

        }
        return object
    },
    valuesIn: function(object) {
        var result = []
        for (var key in object) {
            result.push(object[key])
        }
        return result
    },

    values: function(object) {
        var result = []
        for (var key in object) {
            if (object.hasOwnProperty(key)) {
                result.push(object[key])
            }
        }
        return result
    },


    takeWhile: function(array, predicate) {
        var result = []
        for (var i = 0; i < array.length; i++) {
            var value = array[i]
            if (Array.isArray(predicate)) {
                if (value[predicate[0]] == predicate[1]) {
                    result.push(value)
                } else {
                    return result
                }
            } else
            if (typeof predicate === 'function') {
                if (predicate(value)) {
                    result.push(value)
                } else {
                    return result
                }
            } else
            if (typeof predicate == 'string') {
                if (value[predicate]) {
                    result.push(value)
                } else {
                    return result
                }
            } else
            if (typeof predicate === 'object') {
                var flag = true
                for (var key in value) {
                    if (value[key] !== predicate[key]) {
                        flag = false
                    }
                }
                if (flag) {
                    result.push(value)
                } else {
                    return result
                }
            }
        }

    },

    takeRightWhile: function(array, predicate) {
        var result = []
        for (var i = array.length - 1; i >= 0; i--) {
            var value = array[i]
            if (Array.isArray(predicate)) {
                if (value[predicate[0]] == predicate[1]) {
                    result.push(value)
                } else {
                    return result
                }
            } else
            if (typeof predicate === 'function') {
                if (predicate(value)) {
                    result.push(value)
                } else {
                    return result
                }
            } else
            if (typeof predicate == 'string') {
                if (value[predicate]) {
                    result.push(value)
                } else {
                    return result
                }
            } else
            if (typeof predicate === 'object') {
                var flag = true
                for (var key in value) {
                    if (value[key] !== predicate[key]) {
                        flag = false
                    }
                }
                if (flag) {
                    result.push(value)
                } else {
                    return result
                }
            }
        }

    },



    defaults: function(object, sources) {
        if (arguments.length == 1) {
            return object
        }
        for (var key in sources) {
            if (!(key in object)) {
                object[key] = sources[key]
            }
        }
        return object
    },

    gt: function(value, other) {
        return value > other
    },
    gte: function(value, other) {
        return value >= other
    },

    eq: function(value, other) {
        if (Number.isNaN(value) && Number.isNaN(other)) {
            return true
        }
        return value === other
    },

    castArray: function(value) {
        var result = []
        if (arguments.length == 0) {
            return []
        }
        if (Array.isArray(value)) {
            return value
        } else {
            result[0] = value
        }
        return result
    },
    flattenDepth: function(array, depth) {
        var depth = depth || 1
        var result = array
        for (var i = 0; i < depth; i++) {
            result = this.flatten(result)
        }
        return result
    },

    deepCopy: function(array) {
        var result = [],
            len = array.length
        for (var i = 0; i < len; i++) {
            if (array[i] instanceof Array) {
                result[i] = deepCopy(array[i])
            } else result[i] = array[i]
        }
        return result;
    },
    findIndex: function(array, predicate, fromIndex) {
        var fromIndex = fromIndex ? fromIndex : 0
        for (var i = fromIndex; i < array.length; i++) {
            var obj = array[i]
            if (Array.isArray(predicate)) {
                if (obj[predicate[0]] == predicate[1]) {
                    return i
                }
            } else
            if (typeof predicate === 'function') {
                if (predicate(obj)) {
                    return i
                }
            } else
            if (typeof predicate == 'string') {
                if (obj[predicate]) {
                    return i
                }
            } else
            if (typeof predicate === 'object') {
                var flag = true
                for (var key in obj) {
                    if (obj[key] !== predicate[key]) {
                        flag = false
                    }
                }
                if (flag) {
                    return i
                }
            }
        }
    },



    find: function(array, predicate, fromIndex) {
        var fromIndex = fromIndex ? fromIndex : 0
        for (var i = fromIndex; i < array.length; i++) {
            var obj = array[i]
            if (Array.isArray(predicate)) {
                if (obj[predicate[0]] == predicate[1]) {
                    return obj
                }
            } else
            if (typeof predicate === 'function') {
                if (predicate(obj)) {
                    return obj
                }
            } else
            if (typeof predicate == 'string') {
                if (obj[predicate]) {
                    return obj
                }
            } else
            if (typeof predicate === 'object') {
                var flag = true
                for (var key in predicate) {
                    if (obj[key] !== predicate[key]) {
                        flag = false
                    }
                }
                if (flag) {
                    return obj
                }
            }
        }

    },
    findLastIndex: function(array, predicate, fromIndex) {
        var fromIndex = fromIndex ? fromIndex : array.length - 1
        for (var i = fromIndex; i >= 0; i--) {
            var obj = array[i]
            if (Array.isArray(predicate)) {
                if (obj[predicate[0]] == predicate[1]) {
                    return i
                }
            } else
            if (typeof predicate === 'function') {
                if (predicate(obj)) {
                    return i
                }
            } else
            if (typeof predicate == 'string') {
                if (obj[predicate]) {
                    return i
                }
            } else
            if (typeof predicate === 'object') {
                var flag = true
                for (var key in obj) {
                    if (obj[key] !== predicate[key]) {
                        flag = false
                    }
                }
                if (flag) {
                    return i
                }
            }
        }
    },

    differenceWith: function(array, values, comparator) {
        return array.filter(it => {
            for (var i = 0; i < values.length; i++) {
                if (!comparator(values[i], it)) {
                    return it
                }
            }
        })

    },

    /**
     *真就删除
     *假的返回
     *
     *
     */
    dropWhile: function(array, predicate) {
        return array.filter(function(value, index, array) {
            if (Array.isArray(predicate)) {
                if (value[predicate[0]] !== predicate[1]) {
                    return value
                }
            } else
            if (typeof predicate === 'function') {
                if (!predicate(value)) {
                    return value
                }
            } else
            if (typeof predicate == 'string') {
                if (value.hasOwnProperty(predicate)) {
                    return value
                }
            } else
            if (typeof predicate === 'object') {
                for (var key in value) {
                    if (value[key] !== predicate[key]) {
                        return value
                    }
                }
            }

        })
    },

    dropRightWhile: function(array, predicate) {
        return array.filter(function(value, index, array) {
            if (Array.isArray(predicate)) {
                if (value[predicate[0]] !== predicate[1]) {
                    return value
                }
            } else
            if (typeof predicate === 'function') {
                if (!predicate(value)) {
                    return value
                }
            } else
            if (typeof predicate == 'string') {
                if (value.hasOwnProperty(predicate)) {
                    return value
                }
            } else
            if (typeof predicate === 'object') {
                for (var key in value) {
                    if (value[key] !== predicate[key]) {
                        return value
                    }
                }
            }

        })
    },

    forIn: function(object, iteratee) {
        for (var key in object) {
            iteratee(object[key], key, object)
        }
        return object
    },



    //unshift 入栈 再正序输出

    forInRight: function(object, iteratee) {
        var temp = []
        for (var key in object) {
            temp.unshift(key)
        }
        temp.map(it => iteratee(object[it], it, object))
        return object
    },

    forOwn: function(object, iteratee) {
        for (var key in object) {
            if (object.hasOwnProperty(key)) {
                iteratee(object[key], key, object)
            }
        }
        return object
    }


    ,

    forOwnRight: function(object, iteratee) {
        var temp = []
        for (var key in object) {
            if (object.hasOwnProperty(key)) {
                temp.unshift(key)
            }

        }
        temp.map(it => iteratee(object[it], it, object))
        return object
    }

    ,
    functions: function(object) {
        return Object.keys(object)
    },

    functionsIn: function(object) {
        var result = []
        for (var key in object) {
            result.push(key)
        }
        return result
    }

    ,

    get: function(object, path, defaultValue) {
        var result
        if (typeof path === 'string') {
            path = path.replace(/[\[\]\.]/g, '').split('')
        }
        if (path instanceof Array) {
            result = path.reduce((a, b) => {
                try {
                    return a[b]
                } catch (e) {
                    return defaultValue
                }
            }, object)
        }
        return result

    },
    forEach: function(collection, iteratee) {
        if (iteratee instanceof Array) {
            for (var i = 0; i < collection.length; i++) {
                iteratee(collection[i], i, collection)
            }
        } else {
            for (var key in collection) {
                iteratee(collection[key], key, collection)
            }
        }
        return collection
    },


    forEachRight: function(collection, iteratee) {
        for (var i = collection.length; i >= 0; i--) {
            iteratee(collection[i], i, collection)
        }
        return collection
    },

    findLast: function(collection, predicate, fromIndex) {
        fromIndex = fromIndex || collection.length - 1
        for (var i = fromIndex; i >= 0; i--) {
            var obj = collection[i]
            if (Array.isArray(predicate)) {
                if (obj[predicate[0]] == predicate[1]) {
                    return obj
                }
            } else if (typeof predicate === 'function') {
                if (predicate(obj)) {
                    return obj
                }
            } else if (typeof predicate == 'string') {
                if (obj[predicate]) {
                    return obj
                }
            } else if (typeof predicate === 'object') {
                var flag = true
                for (var key in predicate) {
                    if (obj[key] !== predicate[key]) {
                        flag = false
                    }
                }
                if (flag) {
                    return obj
                }
            }
        }
    },


    flatMapDeep: function(collection, iteratee) {
        var result = []
        var arr = collection.map(iteratee)
        flat(arr)

        function flat(arr) {
            for (var i = 0; i < arr.length; i++) {
                if (Array.isArray(arr[i])) {
                    flat(arr[i])
                } else {
                    result.push(arr[i])
                }
            }
        }
        return result
    }

    ,

    flatMap: function(collection, iteratee) {
        var result = []
        for (var i = 0; i < collection.length; i++) {
            var value = collection[i]
            result = result.concat(iteratee(value, i, collection))
        }
        return result
    },


    mapValues: function(object, iteratee) {
        var result = {}
        for (var key in object) {
            var value = object[key]
            if (typeof iteratee === 'string') {
                result[key] = value[iteratee]
            } else if (iteratee instanceof Function) {

                result[key] = iteratee(value, key, object)
            }
        }
        return result
    },

    isPlainObject: function(value) {
        return Object.getPrototypeOf(value) == null ||
            Object.getPrototypeOf(value).constructor === Object
    }

    ,
    identity: function(value) {
        return value;
    }

    ,
    invertBy: function(object, iteratee) {
        iteratee = iteratee || this.identity
        var result = {}
        for (var key in object) {
            var val = object[key]

            if (Array.isArray(result[iteratee(val)])) {
                result[iteratee(val)].push(key)
            } else {
                result[iteratee(val)] = []
                result[iteratee(val)].push(key)
            }


        }
        return result
    }


    ,
    startsWith: function(string, target, position) {
        position = position || 0
        string = string || ''
        return string[position] === target
    },
    has: function(object, path) {
        if (typeof path === 'string') {
            path = path.replace(/[\[\]\.]/g, '').split('')
        }
        for (var i = 0; i < path.length; i++) {
            if (object[path[i]] === undefined || !object.hasOwnProperty(path[i])) {
                return false
            } else {
                object = object[path[i]]
            }
        }
        return true
    }



    ,
    pickBy: function(object, predicate) {
        predicate = predicate || this.identity
        var picked = {}
        for (var key in object) {
            var val = object[key]
            if (predicate(val, key)) {
                picked[key] = val
            }
        }
        return picked
    }


    ,
    omit: function(object, paths) {
        var omitted = {}
        for (var key in object) {
            var val = object[key]
            if (paths.indexOf(key) < 0) {
                omitted[key] = val
            }
        }
        return omitted
    }



    ,
    omitBy: function(object, predicate) {
        predicate = predicate || this.identity
        var omitted = {}
        for (var key in object) {
            var val = object[key]
            if (!predicate(val, key)) {
                omitted[key] = val
            }
        }
        return omitted
    }



    ,
    toPairs: function(object) {
        var result = []
        Object.keys(object)
        var count = 0
        for (var key in object) {
            var val = object[key]
            if (object.hasOwnProperty(key)) {
                result[count] = []
                result[count].push(key)
                result[count].push(val)
                count++
            }
        }
        return result
    }


    ,
    toPairsIn: function(object) {
        var result = []
        Object.keys(object)
        var count = 0
        for (var key in object) {
            var val = object[key]
            result[count] = []
            result[count].push(key)
            result[count].push(val)
            count++

        }
        return result
    },
    camelCase: function(string) {
        return string = string.toLowerCase()
            .replace(/((?!\_)\w)[\W\_](\w)/g, function(all, g1, g2) {
                g2 = g2.toUpperCase()
                return g1 + ' ' + g2
            }).replace(/[\W\_]/g, '')

    },
    snakeCase: function(string) {
        return string = string
            .replace(/(\w)\W(\w)/g, "$1_$2")
            .replace(/([a-z]){*}?([A-Z])/g, "$1_$2")
            .replace(/\W(?!\_)/g, '').toLowerCase();　
    },

    toArray: function(value) {
        if (typeof value === 'string') {
            return value.split("")
        } else
        if (value instanceof Object) {
            return Object.values(value)
        } else {
            return []
        }
    },


    toFinite: function(value) {
        if (value > 1.7976931348623157e+308) {
            return 1.7976931348623157e+308
        }
        if (value < 5e-324) {
            return 5e-324
        }
        return Number(value)
    },
    toInteger: function(value) {
        if (value > 1.7976931348623157e+308) {
            return 1.7976931348623157e+308
        }
        if (value < 5e-324) {
            return -5e-324
        }
        return Math.floor(value)
    },

    toLength: function(value) {
        if (value > 4294967295) {
            return 4294967295
        }
        if (value < 0) {
            return 0
        }
        return Math.floor(value)
    },
    toNumber: function(value) {
        return Number(value)
    },

    isNaN: function(value) {
        return Number.isNaN(value) && typeof value === 'number' ||
            value instanceof Number
    },

    toSafeInteger: function(value) {
        if (value > 9007199254740991) {
            return 9007199254740991
        }
        if (value < -9007199254740991) {
            return -9007199254740991
        }
        return Math.floor(value)
    },
    isArrayLikeObject: function(value) {
        return this.isArrayLike(value) && value instanceof Object
    },


    hasIn: function(object, path) {
        if (typeof path === 'string') {
            path = path.replace(/[\[\]\.]/g, '').split('')
        }
        for (var i = 0; i < path.length; i++) {
            var key = path[i]
            if (object[key] === undefined) {
                return false
            } else {
                object = object[key]
            }
        }
        return true
    },

    has: function(object, path) {
        if (typeof path === 'string') {
            path = path.replace(/[\[\]\.]/g, '').split('')
        }
        for (var i = 0; i < path.length; i++) {
            if (object[path[i]] === undefined || !object.hasOwnProperty(path[i])) {
                return false
            } else {
                object = object[path[i]]
            }
        }
        return true
    },
    defer: function(func, ...args) {
        return setTimeout(function() {
            func(...args)
        }, 1)
    },

    delay: function(func, wait, ...args) {
        return setTimeout(function() {
            func(...args)
        }, wait)
    },

    zipObject: function(props, values) {
        props = props || []
        values = values || []
        var result = {}
        for (var i = 0; i < props.length; i++) {
            result[props[i]] = values[i]
        }
        return result

    },

    zipObjectDeep: function(props, values) {
        props = props || []
        values = values || []
        var result = {}
        if (typeof path === 'string') {
            path = path.replace(/[\[\]\.]/g, '').split('')
        }
        for (var i = 0; i < props.length; i++) {
            result[props[i]] = values[i]
        }
        return result

    },

    uniqBy: function(array, iteratee) {
        var result = []
        var tempArr = []
        for (var i = 0; i < array.length; i++) {
            var val = array[i]
            if (iteratee instanceof Function) {
                if (tempArr.indexOf(iteratee(val)) < 0) {
                    tempArr.push(iteratee(val))
                    result.push(val)
                }
            } else {
                if (tempArr.indexOf(val[iteratee]) < 0) {
                    tempArr.push(val[iteratee])
                    result.push(val)
                }
            }
        }
        return result
    },
    isNative: function(func) {
        return /\{ \[native code\] \}/.test(func.toString())
    },
    trim: function(string, chars) {
        string = string || ''
        chars = chars || '\\s'
        var regexp = new RegExp("\[" + chars + "\]", "g");
        return string.replace(regexp, '')
    },
    trimEnd: function(string, chars) {
        string = string || ''
        chars = chars || '\\s'
        string = string.split('').reverse().join("")
        var regexp = new RegExp("\[" + chars + "\]+(?=[a-zA-Z]+)", "g");
        return string.replace(regexp, '').split('').reverse().join("")
    },

    trimStart: function(string, chars) {
        string = string || ''
        chars = chars || '\\s'
        var regexp = new RegExp("\[" + chars + "\]+(?=[a-zA-Z]+)", "g");
        return string.replace(regexp, '')
    },
    truncate: function(string, options) {
        options = options || {
            length: 30,
            omission: '...',
            separator: ''
        }
        options.length = options.length || 30
        options.omission = options.omission || '...'
        options.separator = options.separator || ''
        string = string || ''
        var result = []
        var maxLength = 0
        var tempStr = ''
        var str2arr = string.split(options.separator)
        for (var i = 0; i < str2arr.length; i++) {
            maxLength += str2arr[i].length
            if (maxLength > options.length) {
                break
            }
            result.push(str2arr[i])
        }
        var temp = result.slice(0, string.length - options.omission.length - 1)
        for (var i = 0; i < temp.length; i++) {
            tempStr += temp[i]
        }
        return tempStr + options.omission
    },

    upperFirst: function(string) {
        string = string || ""
        return string[0].toUpperCase() + string.slice(1)
    },
    startCase: function(string) {
        return this.camelCase(string)[0].toUpperCase() + this.camelCase.slice(1)
    },
    words: function(string, pattern) {
        var string = string ? string : ''
        var pattern = pattern || /\w+/g
        return string
            .replace(/[0-9]*/g, '')
            .match(pattern)
    },
    upperCase: function(string) {
        string = string || ''
        return string = string
            .replace(/([a-zA-Z])[\W_]([a-zA-Z])/g, function(all, $1, $2) {
                $1 = $1.toLowerCase()
                $2 = $2.toUpperCase()
                return $1 + $2
            }).replace(/[\W_]/g, '')
            .replace(/([a-z])([A-Z])/g, '$1 $2')
            .toUpperCase()
    },
    lowerCase: function(string) {
        string = string || ''
        return string = string
            .replace(/([a-zA-Z])[\W_]([a-zA-Z])/g, function(all, $1, $2) {
                $1 = $1.toLowerCase()
                $2 = $2.toUpperCase()
                return $1 + $2
            }).replace(/[\W_]/g, '')
            .replace(/([a-z])([A-Z])/g, '$1 $2')
            .toLowerCase()
    },
    kebabCase: function(string) {
        return string = string
            .replace(/([a-zA-Z])[\W_]([a-zA-Z])/g, function(all, $1, $2) {
                $1 = $1.toLowerCase()
                $2 = $2.toUpperCase()
                return $1 + $2
            }).replace(/[\W_]/g, '')
            .replace(/([a-z])([A-Z])/g, '$1-$2')
            .toLowerCase()
    },
    unescape: function(string) {
        string = string || ''
        var htmlUnescapes = {
            '&amp;': '&',
            '&lt;': '<',
            '&gt;': '>',
            '&quot;': '"',
            '&#39;': "'"
        };

        function basePropertyOf(object) {
            return function(key) {
                return object == null ? undefined : object[key];
            };
        }
        return string.replace(/&(?:amp|lt|gt|quot|#39);/g, basePropertyOf(htmlUnescapes))
    },



}
