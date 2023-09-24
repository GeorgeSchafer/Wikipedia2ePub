'use strict';



const headers = document.querySelectorAll('.vector-header-container')
const toolbars = document.querySelectorAll('.vector-page-toolbar')
const footers = document.querySelectorAll('.mw-footer-container')
const scripts = document.querySelectorAll('script')
const meta = document.querySelectorAll('meta')
const styles = document.querySelectorAll('style')

const elements = []
elements.push(document.querySelector('#p-lang-btn'))
elements.push(document.querySelector('#mw-navigation'))
elements.push(document.querySelector('#vector-page-tools-pinned-container'))

const removeElements = (array) => {
    array.forEach(element => {
        element.remove()
    });
}

removeElements(headers)
removeElements(toolbars)
removeElements(scripts)
removeElements(footers)

removeElements(elements)





