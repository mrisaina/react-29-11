import productsArray, {
    getProductsObject,
    productListItem,
} from 'utils/productsArray'

type Props = {
    cartData: {
        [id: number]: number
    }

    productsObject?: {
        [id: number]: productListItem
    }
}
const CartTotal = ({
    cartData,
    productsObject = getProductsObject(productsArray),
}: Props) => {
    return (
        <div>
            Total: ${' '}
            {Object.keys(cartData).reduce((sum, itemId) => {
                sum =
                    sum +
                    cartData[Number(itemId)] *
                        productsObject[Number(itemId)].price
                return sum
            }, 0)}
        </div>
    )
}
export default CartTotal
