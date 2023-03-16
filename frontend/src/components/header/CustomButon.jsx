import { Box, Button, Typography, styled } from "@mui/material"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Wrapper = styled(Box)`
    display: flex;
    align-items: center;
    gap: 10x;
   
`

const LoginButton = styled(Button)`
    color: #2874f0;
    background-color: #fff;
    margin-left: 10px;
    margin-right: 5px;
    padding:  4px 30px;
    border-radius: 2px;
    box-shadow: none;
    font-weight: 600;
    height: 32px;
    &:hover {
        background-color: #fff;
    }
`


const CartWrapper = styled(Box) `
    display: flex;
    margin-left: 15px;
    padding: 0 15px;
`

const CustomButton = () => {
    return (
        <Wrapper>
        <LoginButton variant="contained">Login</LoginButton>
        <Typography style={{width: 135, padding: "0 15px"}}>Become a Seller</Typography>
        <Typography>More</Typography>

        <CartWrapper>
            <ShoppingCartIcon/>
            <Typography>Cart</Typography>
        </CartWrapper>


        </Wrapper>
    )
}

export default CustomButton