import { Tabswitcher } from '@/components/ui/tabswitcher'

export function App() {
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
      <Tabswitcher />
    </div>
  )
}
