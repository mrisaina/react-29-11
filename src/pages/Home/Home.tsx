import ProductList from 'components/Products/ProductList'
import ReviewsPage from 'pages/Reviews/ReviewsPage'

type Props = {
    addProductToCart(total: number, price: number): void
}
const Home = ({ addProductToCart }: Props) => {
    return (
        <div>
            <ProductList addProductToCart={addProductToCart} />
            <ReviewsPage />
        </div>
    )
}
export default Home
