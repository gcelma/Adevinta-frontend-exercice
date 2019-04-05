import logic from '../../logic'
import template from '../AjaxSectionTemplate'

export default class Accordion {
  constructor (base) {
      this.base = base
    }

    getData = () => {
      try {
        logic.retrieveData()
          .then(data => this.addNewSection(data[1].title, data[1].body))
          .catch(({message}) => console.error(message))
      } catch ({message}) {
        console.error(message)
      }
    }

    addNewSection = (title, content) => {
      this.base.innerHTML = this.base.innerHTML + template(title, content)
      this.addClasses()
    }

    addClasses() {
      let titles = this.base.querySelectorAll('dt')
      titles.forEach(title => {
        let section = document.createElement('div')
        section.classList.add('Accordion-section')
        title.classList.add('Accordion-section-title')
        title.nextElementSibling.classList.add('Accordion-section-body')
        let content = [title, title.nextElementSibling]
        content[0].parentElement.insertBefore(section, content[0])
        content.forEach(item => {
          section.appendChild(item)
        })
      })
      this.addEventListener()
    }

    addEventListener() {
      this.base.addEventListener('click', this.toggleAccordion)
    }

    toggleAccordion = (e) => {
      const itemHeader = e.target.closest('.Accordion-section-title')
      if (itemHeader) {
          itemHeader.parentNode.classList.toggle('item--open')
          this.toggleOtherItems(itemHeader)
      }
    }
    
    toggleOtherItems = (accordionHeader) => {
      let accordionHeaders = this.base.querySelectorAll('.Accordion-section-title')
      accordionHeaders.forEach(header => {
          if (header != accordionHeader) {
              header.parentNode.classList.remove('item--open')
          }
      })
    }

    init () {
      this.getData()
    }
}


