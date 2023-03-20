import Footer from 'container/Footer/Footer'
import Header from 'container/Header/Header'
import Main from 'container/Main/Main'
import CssBaseline from '@mui/material/CssBaseline'
import { StyledEngineProvider } from '@mui/material/styles'
import { useState } from 'react'
import productsArray from 'utils/productsArray'

// type Props = {}

type ProductsInCartType = {
    [id: number]: number
}

const App = (props: ProductsInCartType) => {
    let defaultCount = 0
    let productCountArray = productsArray.map(({ id }) =>
        Object.assign({}, { [id]: defaultCount })
    )
    let newProductCountArray = Object.assign({}, ...[...productCountArray])
    const [productsInCart, setProductsInCart] =
        useState<ProductsInCartType>(newProductCountArray)

    const addProductToCart = (item: number, amount: number) => {
        setProductsInCart((prevState) => ({
            ...prevState,
            [item]: prevState[item] || 0 + amount,
        }))
    }

    return (
        <StyledEngineProvider injectFirst>
            <CssBaseline />
            <Header cartData={productsInCart} />
            <Main addProductToCart={addProductToCart} />
            <Footer />
        </StyledEngineProvider>
    )
}
export default App
