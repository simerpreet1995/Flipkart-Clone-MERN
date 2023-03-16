
import {Box, styled, Typography} from '@mui/material'

import { navData } from '../../constants/data'

const Component = styled(Box)`
    display: flex;
    justify-content: space-around;
    gap: 10px;
    line-height: 0;
    margin: 70px 90px 0 90px; //to align card top and l/r
    text-align: center;

`

const Text = styled(Typography)`
    font-size: 11x;

`

const Navbar = () =>{
    return (
        <Component>
            {
                navData.map((data,idx) => 
                    <Box key={idx}>
                        <img src={data.url} alt="navagition card" style={{width: 64}} />
                        <Text >{data.text}</Text>
                    </Box>
                    )
            }
        </Component>
        )
}

export default Navbar