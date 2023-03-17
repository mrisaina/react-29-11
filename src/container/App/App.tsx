import Footer from 'container/Footer/Footer'
import Header from 'container/Header/Header'
import Main from 'container/Main/Main'
import CssBaseline from '@mui/material/CssBaseline'
import { StyledEngineProvider } from '@mui/material/styles'
import { useState } from 'react'

type Props = {}

type ProductsInCartType = {
    [id: number]: number
}

const App = (props: ProductsInCartType) => {
    const [productsInCart, setProductsInCart] = useState<ProductsInCartType>({
        1: 5,
        2: 5,
    })

    const addSecondProduct = (item: number, amount: number) => {
        setProductsInCart((prevState) =>
            Object.assign({}, prevState, {
                [item]: prevState[item] + amount,
            })
        )
    }

    return (
        <StyledEngineProvider injectFirst>
            <CssBaseline />
            <Header cartData={productsInCart} />
            <button onClick={() => addSecondProduct(2, 4)}>
                Add o Cart(2, 5)
            </button>
            <Main />
            <Footer />
        </StyledEngineProvider>
    )
}
export default App
