import Header from "../components/Header"
import { Container, Heading, Box } from '@chakra-ui/react'
import ParentSize from '@visx/responsive/lib/components/ParentSize';
import Chart from '../components/Chart';

const data = [
  { "country": "DENMARK", "currency": "RDDUSD", "type": "RENEWABLE", "year": 1975, "amount": 0.804 },
  { "country": "DENMARK", "currency": "RDDUSD", "type": "RENEWABLE", "year": 1976, "amount": 1.350 },
  { "country": "DENMARK", "currency": "RDDUSD", "type": "RENEWABLE", "year": 1977, "amount": 7.928 },
  { "country": "DENMARK", "currency": "RDDUSD", "type": "RENEWABLE", "year": 1978, "amount": 15.357 },
  { "country": "DENMARK", "currency": "RDDUSD", "type": "RENEWABLE", "year": 1979, "amount": 28.926 },
  { "country": "DENMARK", "currency": "RDDUSD", "type": "RENEWABLE", "year": 1980, "amount": 13.600 },
  { "country": "DENMARK", "currency": "RDDUSD", "type": "RENEWABLE", "year": 1981, "amount": 8.622 },
  { "country": "DENMARK", "currency": "RDDUSD", "type": "RENEWABLE", "year": 1982, "amount": 6.840 },
  { "country": "DENMARK", "currency": "RDDUSD", "type": "RENEWABLE", "year": 1983, "amount": 5.924 },
  { "country": "DENMARK", "currency": "RDDUSD", "type": "RENEWABLE", "year": 1984, "amount": 6.394 },
  { "country": "DENMARK", "currency": "RDDUSD", "type": "RENEWABLE", "year": 1985, "amount": 6.371 },
  { "country": "DENMARK", "currency": "RDDUSD", "type": "RENEWABLE", "year": 1986, "amount": 8.744 },
  { "country": "DENMARK", "currency": "RDDUSD", "type": "RENEWABLE", "year": 1987, "amount": 7.754 },
  { "country": "DENMARK", "currency": "RDDUSD", "type": "RENEWABLE", "year": 1989, "amount": 16.866 },
  { "country": "DENMARK", "currency": "RDDUSD", "type": "RENEWABLE", "year": 1990, "amount": 13.550 },
  { "country": "DENMARK", "currency": "RDDUSD", "type": "RENEWABLE", "year": 1991, "amount": 27.382 },
  { "country": "DENMARK", "currency": "RDDUSD", "type": "RENEWABLE", "year": 1992, "amount": 29.371 },
  { "country": "DENMARK", "currency": "RDDUSD", "type": "RENEWABLE", "year": 1993, "amount": 31.626 },
  { "country": "DENMARK", "currency": "RDDUSD", "type": "RENEWABLE", "year": 1994, "amount": 27.560 },
  { "country": "DENMARK", "currency": "RDDUSD", "type": "RENEWABLE", "year": 1995, "amount": 25.847 },
  { "country": "DENMARK", "currency": "RDDUSD", "type": "RENEWABLE", "year": 1996, "amount": 20.954 },
  { "country": "DENMARK", "currency": "RDDUSD", "type": "RENEWABLE", "year": 1997, "amount": 27.044 },
  { "country": "DENMARK", "currency": "RDDUSD", "type": "RENEWABLE", "year": 1998, "amount": 29.668 },
  { "country": "DENMARK", "currency": "RDDUSD", "type": "RENEWABLE", "year": 1999, "amount": 25.689 },
  { "country": "DENMARK", "currency": "RDDUSD", "type": "RENEWABLE", "year": 2000, "amount": 25.901 },
  { "country": "DENMARK", "currency": "RDDUSD", "type": "RENEWABLE", "year": 2001, "amount": 28.983 },
  { "country": "DENMARK", "currency": "RDDUSD", "type": "RENEWABLE", "year": 2002, "amount": 14.741 },
  { "country": "DENMARK", "currency": "RDDUSD", "type": "RENEWABLE", "year": 2003, "amount": 14.632 },
  { "country": "DENMARK", "currency": "RDDUSD", "type": "RENEWABLE", "year": 2004, "amount": 34.030 },
  { "country": "DENMARK", "currency": "RDDUSD", "type": "RENEWABLE", "year": 2005, "amount": 39.081 },
  { "country": "DENMARK", "currency": "RDDUSD", "type": "RENEWABLE", "year": 2006, "amount": 41.657 },
  { "country": "DENMARK", "currency": "RDDUSD", "type": "RENEWABLE", "year": 2007, "amount": 53.362 },
  { "country": "DENMARK", "currency": "RDDUSD", "type": "RENEWABLE", "year": 2008, "amount": 59.241 },
  { "country": "DENMARK", "currency": "RDDUSD", "type": "RENEWABLE", "year": 2009, "amount": 70.506 },
  { "country": "DENMARK", "currency": "RDDUSD", "type": "RENEWABLE", "year": 2010, "amount": 103.283 },
  { "country": "DENMARK", "currency": "RDDUSD", "type": "RENEWABLE", "year": 2011, "amount": 96.155 },
  { "country": "DENMARK", "currency": "RDDUSD", "type": "RENEWABLE", "year": 2012, "amount": 78.812 },
  { "country": "DENMARK", "currency": "RDDUSD", "type": "RENEWABLE", "year": 2013, "amount": 100.764 },
  { "country": "DENMARK", "currency": "RDDUSD", "type": "RENEWABLE", "year": 2014, "amount": 67.610 },
  { "country": "DENMARK", "currency": "RDDUSD", "type": "RENEWABLE", "year": 2015, "amount": 84.287 },
  { "country": "DENMARK", "currency": "RDDUSD", "type": "RENEWABLE", "year": 2016, "amount": 55.336 },
  { "country": "DENMARK", "currency": "RDDUSD", "type": "RENEWABLE", "year": 2017, "amount": 33.808 },
  { "country": "DENMARK", "currency": "RDDUSD", "type": "RENEWABLE", "year": 2018, "amount": 48.957 },
  { "country": "DENMARK", "currency": "RDDUSD", "type": "RENEWABLE", "year": 2019, "amount": 43.797 },
  { "country": "DENMARK", "currency": "RDDUSD", "type": "RENEWABLE", "year": 2020, "amount": 49.996 }
]
export default function Home() {
  return (
    <>
      <Header />
      <Box height='100vh' bg="#242730">
        <Container maxW='4xl' height='85vh' mt="4rem" >
          <Heading ml='40px' as='i' size='md' color={'gray.100'}>Denmark R&D Spend on Renewable Energy</Heading>
          <ParentSize>{({ width, height }) => <Chart data={data} width={width} height={height} />}</ParentSize>
        </Container>
      </Box>
    </>
  )
}
