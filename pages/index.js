import Header from "../components/Header"
import { Container, Heading, Box, Text, Link } from '@chakra-ui/react'
import ParentSize from '@visx/responsive/lib/components/ParentSize';
import LineChart from '../components/LineChart';
import { data } from '../data/stats_for_Denmark';

export default function Home() {
  return (
    <>
      <Header />
      <Box height='100vh' bg="#242730">
        <Container maxW='4xl' height='85vh' mt="4rem" >
          <Heading ml='40px' as='i' size='md' color={'gray.100'}>Denmark R&D Spend on Renewable Energy vs Total</Heading>
          <ParentSize>{({ width, height }) => <LineChart data={data} width={width} height={height} />}</ParentSize>
          <Link ml='40px' fontSize='sm' color={'gray.100'} href='https://www.iea.org/data-and-statistics/data-product/energy-technology-rd-and-d-budget-database-2' isExternal>
            Data by IEA, 2021
          </Link></Container>
      </Box>
    </>
  )
}
