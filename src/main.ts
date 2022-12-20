import './styles/global.scss'
import './styles/main.scss'

const accordionItems = document.querySelectorAll<HTMLDivElement>('[data-element="accordion-item"]')

accordionItems.forEach((item, index) => {
    const toggleButton = item.querySelector<HTMLButtonElement>('header button')

    toggleButton?.addEventListener('click', () => {
        item.classList.toggle('open')

        closeAccordionItems(index)

        if (item.classList.contains('open')) {
            toggleButton.querySelector('i')
                ?.setAttribute('class', 'ph-caret-down')
        } else {
            toggleButton.querySelector('i')
                ?.setAttribute('class', 'ph-caret-right')
        }
    })
})

function closeAccordionItems(position: number) {
    accordionItems.forEach((item, index) => {
        if (position !== index) {
            item.classList.remove('open')
        }
    })
} 