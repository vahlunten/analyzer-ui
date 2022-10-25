import { writable } from 'svelte/store'

const cart = writable<any>([
  {
    id: 1,
    name: 'Item 1',
    price: 1.99
  },
  {
    id: 2,
    name: 'Item 2',
    price: 2.99
  }
])

export default cart