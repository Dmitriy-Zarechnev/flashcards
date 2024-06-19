import { useState } from 'react'

export type TabsData = {
  title: string
  value: string
}

const tabsList: TabsData[] = [
  { title: 'My Cards', value: 'my' },
  { title: 'All Cards', value: 'all' },
]

export const useSuperTabs = () => {
  const [tabValue, setTabValue] = useState(tabsList[1].value)
  const tabValueChangeHandler = (value: string) => setTabValue(value)

  return { setTabValue, tabValue, tabValueChangeHandler, tabsList }
}
