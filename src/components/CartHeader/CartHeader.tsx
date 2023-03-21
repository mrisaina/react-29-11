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
const CartHeader = ({
    cartData,
    productsObject = getProductsObject(productsArray),
}: Props) => {
    return (
        <div>
            {Object.keys(cartData).map((id) => {
                return (
                    <div key={id}>
                        {productsObject[Number(id)].title} :{' '}
                        {cartData[Number(id)]}
                    </div>
                )
            })}
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
        </div>
    )
}
export default CartHeader
