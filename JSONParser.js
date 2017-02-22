  /**
   * [parseJson description]
   * @param  {[type]} string [需解析的json字符串]
   * @return {[type]}     [返回解析后的对象]
   */

function parseJson(json) {
    var i = 0
    return parse()
    function parse() {
       
        if (!isNaN(json[i])) {
            return parseNumber()
        }
        if (json[i] === '"') {
            return parseString()
        }
        if (json[i] === 't') {
            return parseTrue()
        }
        if (json[i] === 'f') {
            return parseFalse()
        }
        if (json[i] === 'n') {
            return parseNull()
        }
        if (json[i] === '[') {
            return parseArray()
        }
        if (json[i] === '{') {
            return parseObject()
        }
    }

    function parseNumber() {
        var start = i
        while (true) {
            i++
            if (isNaN(json[i])) {
                return Number(json.slice(start, i))
            }
        }
    }

    function parseString() {
        var start = i + 1
        var index = json.indexOf('"', start)
        var string = json.slice(start, index)
        i = index + 1
        return string
    }

    function parseTrue() {
        i = i + 4
        return true
    }

    function parseFalse() {
        i = i + 5
        return false
    }

    function parseNull() {
        i = i + 4
        return null
    }

    function parseArray() {
        var result = []
        i++
        while (true) {
            if (json[i] === ']') {
                i++
                break
            }
            result.push(parse())
            if (json[i] == ',') {
                i++
            }
        }
        return result
    }

    function parseObject() {
        var result = {}
        i++
        var key
        var value
        while (true) {
            key = parseString()
            i++
            value = parse()
            result[key] = value
            if (json[i] == '}') {
                break
            } else {
                i++
                continue
            }
        }
        return result
    }
}