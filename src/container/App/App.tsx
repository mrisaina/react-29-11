import Footer from 'container/Footer/Footer'
import Header from 'container/Header/Header'
import CssBaseline from '@mui/material/CssBaseline'
import { StyledEngineProvider } from '@mui/material/styles'
import { useState } from 'react'
import productsArray from 'utils/productsArray'
import { Container } from '@mui/material'
import Home from 'pages/Home/Home'
import { Routes, Route } from 'react-router-dom'
import CartPage from 'pages/Cart/CartPage'

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
            <Container
                sx={{
                    padding: '40px 0',
                }}
            >
                <Routes>
                    <Route
                        path="/"
                        element={<Home addProductToCart={addProductToCart} />}
                    />
                    <Route
                        path="/cart"
                        element={<CartPage cartData={productsInCart} />}
                    />
                </Routes>
            </Container>
            <Footer />
        </StyledEngineProvider>
    )
}
export default App
