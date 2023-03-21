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
const CartProductList = ({
    cartData,
    productsObject = getProductsObject(productsArray),
}: Props) => {
    return (
        <div>
            {Object.keys(cartData).map((id) => {
                return (
                    <div key={id}>
                        {productsObject[Number(id)].title} :{' '}
                        {cartData[Number(id)]}:{' '}
                        {productsObject[Number(id)].price}
                    </div>
                )
            })}
        </div>
    )
}
export default CartProductList
