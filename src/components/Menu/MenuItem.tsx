import { Button } from '@mui/material'
import { NavLink } from 'react-router-dom'
import './MenuItem.scss'

type Props = {
    to: string
    children: React.ReactNode
}
const MenuItem = ({ to, children }: Props) => {
    return (
        <Button color="inherit">
            <NavLink
                className={({ isActive }) =>
                    isActive ? 'menu-item-active' : 'menu-item'
                }
                to={to}
            >
                {children}
            </NavLink>
        </Button>
    )
}
export default MenuItem
