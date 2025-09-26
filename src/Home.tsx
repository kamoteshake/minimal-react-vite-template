import { useState } from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

import reactLogo from 'assets/react.svg'
import viteLogo from '/vite.svg'

const Home: React.FC = () => {
  const [count, setCount] = useState(0)

  return (
    <Box
      width="100%"
      height="100vh"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <Box display="flex">
        <Box mx={4}>
          <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} alt="Vite logo" style={{ width: 150 }} />
          </a>
        </Box>
        <Box mx={4}>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} alt="React logo" style={{ width: 150 }} />
          </a>
        </Box>
      </Box>
      <Typography variant="h1">Vite + React</Typography>
      <Box my={1}>
        <Button variant="contained" onClick={() => setCount(count => count + 1)}>
          count is {count}
        </Button>
      </Box>
      <Box my={1}>
        <Typography variant="body1">
          Edit <code>src/Home.tsx</code> and save to test HMR
        </Typography>
      </Box>
      <Box my={1}>
        <Typography variant="caption">Click on the Vite and React logos to learn more</Typography>
      </Box>
    </Box>
  )
}

export default Home
