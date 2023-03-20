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
                // let test = getProductsObject(productsArray)
                // console.log(test)
                // let product = productsArray.find((el) => Number(id) === el.id)
                return (
                    <div key={id}>
                        {productsObject[Number(id)].title} :{' '}
                        {cartData[Number(id)]}
                    </div>
                )
            })}
        </div>
    )
}
export default CartHeader
