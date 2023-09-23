'use strict'
import { default as article } from './content-script.mjs'



const body = document.querySelector('body')



body.appendChild(article)




