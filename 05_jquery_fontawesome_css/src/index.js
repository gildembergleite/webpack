// Import style
import './style.css'

// Import Font Awesome
import { library, dom } from '@fortawesome/fontawesome-svg-core'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

library.add(faGithub)
dom.watch()


// Import jquery
import $ from 'jquery'

const body =$('body')
const h1 = $('<h1></h1>').text('Hello world!')

body.append(h1)