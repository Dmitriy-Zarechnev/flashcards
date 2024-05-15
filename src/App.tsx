import { Tabs } from '@/components/ui/tabs'

const tabsData = [
  { title: 'Switcher', value: 'tab1' },
  { title: 'Tab 2', value: 'tab2' },
  { disabled: true, title: 'Tab 3', value: 'tab3' },
]

export function App() {
  return (
    <div
    // style={{
    //   alignItems: 'center',
    //   columnGap: '500px',
    //   display: 'flex',
    //   flexDirection: 'row',
    //   height: '100vh',
    //   justifyContent: 'center',
    //   width: '100vw',
    // }}
    >
      <Tabs.Root notFullWidth tabs={tabsData} />
    </div>
  )
}
