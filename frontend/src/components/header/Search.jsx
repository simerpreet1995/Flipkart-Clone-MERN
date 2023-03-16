import { InputBase, Box, styled } from "@mui/material"
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const SearchContainer = styled(Box)`
    background: #fff;
    width: 38%;
    border-radius: 2px;
    margin-left: 10px;
    display: flex;
`
const InputSearchBase = styled(InputBase)`
    padding-left: 5px;
    width: 100%;
    font-size: 14px;
    font-weight: 600;
    color: #0e0e0e;
`

const SearchIconWrapper = styled(Box)`
    color: blue;
    padding: 5px;
    display: flex;
`

const Search = () => {
    return (
        <SearchContainer>
            <InputSearchBase placeholder="Search for products, brands and more"/>
            
            <SearchIconWrapper>
            <SearchOutlinedIcon/>
            </SearchIconWrapper>
        </SearchContainer>
    )
}

export default Search