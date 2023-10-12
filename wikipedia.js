'use strict';



const selectorAlls = [
    'head',
    'meta',
    'style',
    'link',
    'label',
    'input',
    'button',
    'script',
    '.vector-header-container',
    '.vector-page-toolbar',
    '.mw-footer-container',
    '.mw-jump-link',
    '.mw-editsection',
    '.nv-talk',
    '.nv-edit',
    '.sistersitebox',
    '.navbox-styles',
    '.printfooter',
    '.minerva__tab-container',
    '.mw-footer',
    '.header-container',
    '.page-actions-menu',
    '.toc',
    '.mf-icon',
    '.page-actions-menu'
]
const elements = []

selectorAlls.forEach(element => {
    
})


// document.querySelectorAll('head').forEach(element => elements.push(element))
// document.querySelectorAll('meta').forEach(element => elements.push(element))
// document.querySelectorAll('style').forEach(element => elements.push(element))
// document.querySelectorAll('link').forEach(element => elements.push(element))
// document.querySelectorAll('label').forEach(element => elements.push(element))
// document.querySelectorAll('input').forEach(element => elements.push(element))
// document.querySelectorAll('button').forEach(element => elements.push(element))
// document.querySelectorAll('script').forEach(element => elements.push(element))

// document.querySelectorAll('.vector-header-container').forEach(element => elements.push(element))
// document.querySelectorAll('.vector-page-toolbar').forEach(element => elements.push(element))
// document.querySelectorAll('.mw-footer-container').forEach(element => elements.push(element))
// document.querySelectorAll('.mw-jump-link').forEach(element => elements.push(element))
// document.querySelectorAll('.mw-editsection').forEach(element => elements.push(element))
// document.querySelectorAll('.nv-talk').forEach(element => elements.push(element))
// document.querySelectorAll('.nv-edit').forEach(element => elements.push(element))
// document.querySelectorAll('.sistersitebox').forEach(element => elements.push(element))
// document.querySelectorAll('.navbox-styles').forEach(element => elements.push(element))
// document.querySelectorAll('.printfooter').forEach(element => elements.push(element))
// document.querySelectorAll('.minerva__tab-container').forEach(element => elements.push(element))
// document.querySelectorAll('.mw-footer').forEach(element => elements.push(element))
// document.querySelectorAll('.header-container').forEach(element => elements.push(element))
// document.querySelectorAll('.page-actions-menu').forEach(element => elements.push(element))
// document.querySelectorAll('.toc').forEach(element => elements.push(element))
// document.querySelectorAll('.mf-icon').forEach(element => elements.push(element))

// elements.push(document.querySelector('#p-lang-btn'))
// elements.push(document.querySelector('#mw-navigation'))
// elements.push(document.querySelector('#vector-page-tools-pinned-container'))
// elements.push(document.querySelector('#mw-panel-toc'))

const thumbs = []
document.querySelectorAll('.gallery').forEach(element => thumbs.push(element))
document.querySelectorAll('.gallerybox').forEach(element => thumbs.push(element))
document.querySelectorAll('.thumb').forEach(element => thumbs.push(element))

const classes = []
document.querySelectorAll('.nv-view').forEach(element => classes.push(element))

const removeElements = (array) => {
    array.forEach(element => {
        element.remove()
    })
}

const stripStyles = (array) => {
    array.forEach(element => {
        element.removeAttribute('style')
    })
}

const stripClasses = (array) => {
    array.forEach(element => {
        element.className = ''
    })
}




removeElements(elements)
stripStyles(thumbs)
// stripClasses(classes)




