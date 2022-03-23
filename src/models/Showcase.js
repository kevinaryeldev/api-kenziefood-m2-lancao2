import { createCard } from "../utils/functions.js"

export class ShowCase {
    static container = document.querySelector('.products-container')
    static products = []

    static clearShowcase () {
      ShowCase.container.innerHTML = ''
    }

    static async showProducts (products) {
      ShowCase.clearShowcase()
      ShowCase.products = products
      
      products.forEach(product => {
        ShowCase.container.innerHTML += createCard(product)
      })
    }
}