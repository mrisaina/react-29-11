import ProductList from 'components/Products/ProductList'

type Props = {
    addProductToCart(total: number, price: number): void
}
const Home = ({ addProductToCart }: Props) => {
    return (
        <div>
            <ProductList addProductToCart={addProductToCart} />
        </div>
    )
}
export default Home
