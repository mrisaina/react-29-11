type productListItem = {
    id: number
    title: string
    desc: string
    type: string
    capacity: number
    price: number
    image: string
}

const productsArray: productListItem[] = [
    {
        id: 1,
        title: 'iPhone 14 Pro',
        desc: 'This is desc 14 pro',
        type: 'super phone',
        capacity: 256,
        price: 1200,
        image: '/images/iphone-blue.jpeg',
    },
    {
        id: 2,
        title: 'iPhone 12',
        desc: 'Desc 12',
        type: 'phone',
        capacity: 128,
        price: 1000,
        image: '/images/iphone-gold.jpeg',
    },
    {
        id: 3,
        title: 'iPhone 11 Pro',
        desc: 'This is desc 11 pro',
        type: 'phone((',
        capacity: 64,
        price: 900,
        image: '/images/iphone-gray.jpeg',
    },
    {
        id: 4,
        title: 'iPhone 11 Pro Max',
        desc: 'This is desc 11 pro max',
        type: 'phone++',
        capacity: 128,
        price: 1100,
        image: '/images/iphone-purple.jpeg',
    },
    {
        id: 5,
        title: 'iPhone 14 Pro Max',
        desc: 'This is desc 14 pro Max',
        type: 'phone-super',
        capacity: 258,
        price: 1500,
        image: '/images/iphone-red.jpeg',
    },
    {
        id: 6,
        title: 'iPhone 13 Pro Max',
        desc: 'This is desc 13 pro',
        type: 'phone-super',
        capacity: 258,
        price: 1400,
        image: '/images/iphone-white.jpeg',
    },
]

export default productsArray
