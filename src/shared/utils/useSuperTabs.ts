import { useState } from 'react'

export type TabsData = {
  title: string
  value: string
}

const tabsData: TabsData[] = [
  { title: 'My Cards', value: 'My Cards' },
  { title: 'All Cards', value: 'All Cards' },
]

export const useSuperTabs = () => {
  const [tabValue, setTabValue] = useState(tabsData[1].value)
  const tabValueChangeHandler = (value: string) => {
    setTabValue(value)
  }

  return { setTabValue, tabValue, tabValueChangeHandler, tabsData }
}
