const speedTyping = 30
const speedNewLine = 600

const printInDOMNode = (DOMNode, Text) => {
    let textPosition = 0
    let lineSize = Text[0].length
    let index = 0
    let contents = ""
    let row = 0
    let continueMessage = true
    let id = null
    let id2 = null

    const typeText = () => {
        if (!continueMessage){ 
            clearTimeout(id)
            clearTimeout(id2)
            return
        }
        contents = ""

        row = Math.max(0, index - 6)
        while (row < index) contents += Text[row++] 
        DOMNode.innerText = contents + Text[index].substring(0, textPosition) + "_"

        if (textPosition++ === lineSize) {
            textPosition = 0
            index++
            if (index !== Text.length) {
                lineSize = Text[index].length
                id = setTimeout(typeText, speedNewLine)
                
            }
        } else {
            id2 = setTimeout(typeText, speedTyping)
        }
    }
    typeText()
    const stopWriting = () => {
        continueMessage = false
    }
    return stopWriting
}

export default printInDOMNode