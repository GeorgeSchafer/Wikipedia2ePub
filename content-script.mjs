
const article = document.querySelector('#mw-content-text > .mw-parser-output')
const tableOfContents = document.querySelector('#mw-panel-toc-list')
const elements = ['style','meta','div']



const stripElements = (elements) => {
    elements.forEach( element => {
        const elements = article.querySelectorAll(element)

        elements.forEach(element => {
            element.remove()
        })
    } )
}



stripElements(elements)

export { article as default }
