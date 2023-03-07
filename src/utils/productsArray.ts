type productListItem = {
    title: string
    desc: string
    feature1: string
    feature2: string
    price: number
}

const productsArray: productListItem[] = [
    {
        title: 'iPhone 14 Pro',
        desc: 'This is desc 14 pro',
        feature1: 'super phone',
        feature2: '256GB',
        price: 1200,
    },
    {
        title: 'iPhone 12',
        desc: 'Desc 12',
        feature1: 'phone',
        feature2: '128GB',
        price: 1000,
    },
    {
        title: 'iPhone 11 Pro',
        desc: 'This is desc 11 pro',
        feature1: 'phone((',
        feature2: '64GB',
        price: 900,
    },
    {
        title: 'iPhone 11 Pro Max',
        desc: 'This is desc 11 pro max',
        feature1: 'phone++',
        feature2: '128GB',
        price: 1100,
    },
    {
        title: 'iPhone 14 Pro Max',
        desc: 'This is desc 14 pro Max',
        feature1: 'phone-super',
        feature2: '258GB',
        price: 1500,
    },
    {
        title: 'iPhone 13 Pro Max',
        desc: 'This is desc 13 pro',
        feature1: 'phone-super',
        feature2: '258GB',
        price: 1400,
    },
]

export default productsArray
