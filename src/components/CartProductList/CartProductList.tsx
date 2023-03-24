import productsArray, {
    getProductsObject,
    productListItem,
} from 'utils/productsArray'
import CartProductListItem from './CartProductListItem'

type Props = {
    cartData: {
        [id: number]: number
    }

    productsObject?: {
        [id: number]: productListItem
    }
    CartItem?: any
    removeProductFromCart?: (id: number) => void
    changeProductQuantity?: (id: number, count: number) => void
}
const CartProductList = ({
    cartData,
    productsObject = getProductsObject(productsArray),
    CartItem = CartProductListItem,
    removeProductFromCart,
    changeProductQuantity,
}: Props) => {
    return (
        <>
            {Object.keys(cartData).map((id) => {
                return (
                    <CartItem
                        key={id}
                        product={productsObject[Number(id)]}
                        productCount={cartData[Number(id)]}
                        removeProductFromCart={removeProductFromCart}
                        changeProductQuantity={changeProductQuantity}
                    />
                )
            })}
        </>
    )
}
export default CartProductList
