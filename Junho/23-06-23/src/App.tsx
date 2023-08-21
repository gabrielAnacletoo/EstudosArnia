import { useState } from 'react'
import Button from '@mui/material/Button';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
 <div>
      <Button variant="outlined">Hello World</Button>
      <Button variant="contained">Hello World</Button>
      <Button variant="contained" color="secondary"  size="small">Hello World</Button>
      <Button variant="outlined" color="error">Error</Button>
      <Button variant="contained" color="error"  size="large">Error</Button><br/>
      <Button variant="contained" color="success"  size="small">Success</Button>
    </div>
    </>
  )
}

export default App
