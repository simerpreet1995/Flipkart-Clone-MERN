import { AppBar, Toolbar, styled, Box, Typography } from '@mui/material'
import CustomButton from './CustomButon';

// components
import Search from './Search';


const StyledHeader = styled(AppBar)`
    background-color: #2874f0;
    height: 55px;
`;

const Component = styled(Box)`
    margin-left: 10%;
    line-height: 0;
`

const SubHeading = styled(Typography)`
    font-size: 12px;
    font-style: italic;
`

const CustomButtonWrapper = styled(Box)`
    margin: 0 5% 0 3%;
`

const Header = () =>{
    const logoUrl = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    const subUrl = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';

    return (
        <StyledHeader>
        <Toolbar style={{minHeight: "55px"}}>
            <Component>
                <img src={logoUrl} alt="logo" style={{width: 75}} />
                <Box style={{display: "flex"}} >
                    <SubHeading>Explore&nbsp;
                        <Box component="span" style={{color: "yellow"}}>Plus</Box>
                    </SubHeading>
                    <Box>
                    <img src={subUrl} style={{width: 10}} alt="" />
                    </Box>

                </Box>
            </Component>

            <Search></Search>

            <CustomButtonWrapper>
            <CustomButton></CustomButton>
            </CustomButtonWrapper> 
    {/*this is tag is used to align in right wards  */}
        </Toolbar>
        </StyledHeader>
    )
}

export default Header