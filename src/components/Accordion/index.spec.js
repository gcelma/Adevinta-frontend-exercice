import Accordion from '.'

describe('Accordion instance', () => {
    const elem = document.createElement('dl')
    let accordion

    beforeEach(() => {
        accordion = new Accordion(elem)
      })
      
    afterEach(() => {
        accordion = null
    })

    test('accordion should exist', () => {
        expect(accordion).toBeDefined()
    })

    test('accordion must be an instance of Accordion', () => {
        expect(accordion instanceof Accordion).toBeTruthy()
    })

    test('accordion must have a base property', () => {
        expect(accordion.base).toBeDefined()
    })

    test('accordion shoud have a getData method', () => {
        expect(accordion.getData).toBeDefined()
        expect(accordion.getData instanceof Function).toBeTruthy()
    })

    test('accordion shoud have a addNewSection method', () => {
        expect(accordion.addNewSection).toBeDefined()
        expect(accordion.addNewSection instanceof Function).toBeTruthy()
    })

    test('accordion shoud have a addClasses method', () => {
        expect(accordion.addClasses).toBeDefined()
        expect(accordion.addClasses instanceof Function).toBeTruthy()
    })

    test('accordion shoud have a addEventListener method', () => {
        expect(accordion.addEventListener).toBeDefined()
        expect(accordion.addEventListener instanceof Function).toBeTruthy()
    })

    test('accordion shoud have a toggleAccordion method', () => {
        expect(accordion.toggleAccordion).toBeDefined()
        expect(accordion.toggleAccordion instanceof Function).toBeTruthy()
    })

    test('accordion shoud have a toggleOtherItems method', () => {
        expect(accordion.toggleOtherItems).toBeDefined()
        expect(accordion.toggleOtherItems instanceof Function).toBeTruthy()
    })
})