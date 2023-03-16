import { styled } from "@mui/material"
import { Box } from "@mui/system"

// Components
import Banner from "./Banner"
import NavBar from "./NavBar"

const Component = styled(Box)`
    padding: 18px 10px;
    background-color: #f2f2f2;
    margin-top: 15px;
`

const Home = () => {
    return (
        <>
        <NavBar/>
        <Component>
        <Banner/>
        </Component>
        </>
        )
}

export default Home