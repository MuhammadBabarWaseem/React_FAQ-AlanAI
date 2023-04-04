import React from 'react'
import { Box, Flex, Heading, Spacer } from '@chakra-ui/react'
import { ColorModeSwitcher } from './ColorModeSwitcher'

export const Navbar = ({toggleColorFlag}) => {
  return (
    <Flex align="center" boxShadow="base" p ="2" mb="2">
        <Box p="2">
            <Heading size="lg"> E-Commerce Support Example</Heading>
        </Box>
<Spacer/>
        <Box>
            <ColorModeSwitcher toggleColorFlag={toggleColorFlag} />
        </Box>

    </Flex>
  )
}
