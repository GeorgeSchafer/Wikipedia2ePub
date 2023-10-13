'use strict';
// import EPub from '@lesjoursfr/html-to-epub';








(async () => {
    /**
     * @note 
     *      Dynamic Module Import 
     *      https://stackoverflow.com/questions/48104433/how-to-import-es6-modules-in-content-script-for-chrome-extension
     */
    const src = chrome.runtime.getURL("@lesjoursfr/html-to-epub");
    const contentMain = await import(src);
    contentMain.main();
})();
const options = {
    title: document.querySelector('.mw-page-title-main'), // Title of the book
    author: 'Wikepedia.org', // Name of the author for the book, string or array, eg. 'Alice' or ['Alice', 'Bob']
    publisher: 'Wikipedia.org', // Publisher name (optional)
    cover: null, // Book cover image (optional), File path (absolute path) or web url, eg. 'http://abc.com/book-cover.jpg' or '/User/Alice/images/book-cover.jpg'
    output: '~/Downloads', // Output path (absolute path), you can also path output as the second argument when use new , eg: new Epub(options, output)
    version: 2, // You can specify the version of the generated EPUB, 3 the latest version (http://idpf.org/epub/30) or 2 the previous version (http://idpf.org/epub/201, for better compatibility with older readers). If not specified, will fallback to 3.
    css: 'body{background: #FFF}' // If you really hate our css, you can pass css string to replace our default style. eg: 'body{background: #000}'
}
const epub = new EPub(options, output);

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
const thumbs = []
const classes = []

document.querySelectorAll('.gallery').forEach(element => thumbs.push(element))
document.querySelectorAll('.gallerybox').forEach(element => thumbs.push(element))
document.querySelectorAll('.thumb').forEach(element => thumbs.push(element))

document.querySelectorAll('.nv-view').forEach(element => classes.push(element))



const addClassElements = (array) => {
    selectorAlls.forEach(selector => {
        const classElements = document.querySelectorAll(selector)
        classElements.forEach(classElement => {
            elements.push(classElement)
        })
    })
}
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
const start = () => {
    addClassElements(selectorAlls)
    removeElements(elements)
    stripStyles(thumbs)
    
    epub.render()
        .then(() => {
            console.log('Ebook Generated Successfully!');
        })
        .catch((err) => {
            console.error('Failed to generate Ebook because of ', err);
        });
}




start()
