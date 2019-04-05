import Accordion from './components/Accordion/'
import "./main.scss"

window.addEventListener('DOMContentLoaded', () => {
    const elem = document.querySelector('.Accordion')
    new Accordion(elem).init()
})