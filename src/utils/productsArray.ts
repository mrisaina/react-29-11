type productListItem = {
    id: number
    title: string
    desc: string
    type: string
    capacity: number
    price: number
}

const productsArray: productListItem[] = [
    {
        id: 1,
        title: 'iPhone 14 Pro',
        desc: 'This is desc 14 pro',
        type: 'super phone',
        capacity: 256,
        price: 1200,
    },
    {
        id: 2,
        title: 'iPhone 12',
        desc: 'Desc 12',
        type: 'phone',
        capacity: 128,
        price: 1000,
    },
    {
        id: 3,
        title: 'iPhone 11 Pro',
        desc: 'This is desc 11 pro',
        type: 'phone((',
        capacity: 64,
        price: 900,
    },
    {
        id: 4,
        title: 'iPhone 11 Pro Max',
        desc: 'This is desc 11 pro max',
        type: 'phone++',
        capacity: 128,
        price: 1100,
    },
    {
        id: 5,
        title: 'iPhone 14 Pro Max',
        desc: 'This is desc 14 pro Max',
        type: 'phone-super',
        capacity: 258,
        price: 1500,
    },
    {
        id: 6,
        title: 'iPhone 13 Pro Max',
        desc: 'This is desc 13 pro',
        type: 'phone-super',
        capacity: 258,
        price: 1400,
    },
]

export default productsArray
