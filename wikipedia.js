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
    '.page-actions-menu',
    '.header-container'
]
const elements = []

selectorAlls.forEach(element => {
    const classElements = document.querySelectorAll(element)

    classElements.forEach(classElement => {
        elements.push(classElement)
    })
})

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




