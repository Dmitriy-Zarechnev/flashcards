import { useState } from 'react'

import { Checkbox } from '@/components/ui/checkbox'
import { Typography } from '@/components/ui/typography'

export function App() {
  const [value, setValue] = useState(false)

  function foo() {
    setValue(!value)
  }

  return (
    <div
      style={{
        alignItems: 'center',
        columnGap: '500px',
        display: 'flex',
        flexDirection: 'row',
        height: '100vh',
        justifyContent: 'center',
        width: '100vw',
      }}
    >
      <Checkbox checked={value} id={'checkbox'} onChange={foo}>
        <Typography.Body2>Some label</Typography.Body2>
      </Checkbox>
    </div>
  )
}
