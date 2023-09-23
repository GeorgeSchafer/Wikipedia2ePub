'use strict';



const article = document.createElement('article')



const stripElements = (elements) => {
    elements.forEach( element => {
        const elements = article.querySelectorAll(element)

        elements.forEach(element => {
            element.remove()
        })
    } )
}

async function getCurrentTab(){
    let queryOptions = { active: true, lastFocusedWindow: true }
    // `tab` will either be a `tabs.Tab` instance or `undefined`.
    let tab = await chrome.tabs.query(queryOptions)
    return tab;
}



chrome.scripting.executeScript({
    target : {
        tabId : getCurrentTab(), 
        // frameIds : [ frameId1, frameId2 ]},
        files : [ "content-script.mjs" ]
    } 
}).then(() => {
    const output = document.querySelector('#mw-content-text > div.mw-parser-output')
    const tableOfContents = document.querySelector('#mw-panel-toc-list')
    const elements = ['style','meta','div']
    
    stripElements(elements)
    article.appendChild(tableOfContents)
    article.appendChild(output)
});



export { article as default }
