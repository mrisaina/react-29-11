import { productListItem } from 'utils/productsArray'

type Props = {
    product: productListItem
    productCount: number
}
const CartProductListItem = ({ product, productCount }: Props) => {
    return (
        <div>
            {product.title} : {productCount}
        </div>
    )
}
export default CartProductListItem
