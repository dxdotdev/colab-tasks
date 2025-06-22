import { useState } from 'react'

import { Button } from '@/components/ui/button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="grid min-h-screen place-items-center">
      <Button variant="outline" onClick={() => setCount(count + 1)}>
        Count: {count}
      </Button>
    </div>
  )
}

export default App
