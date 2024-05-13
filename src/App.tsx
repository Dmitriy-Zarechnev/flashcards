import { Dropdown } from '@/components/ui/dropdown'

export function App() {
  return (
    <div
      style={{
        alignItems: 'center',
        display: 'flex',
        height: '100vh',
        justifyContent: 'center',
        width: '100vw',
      }}
    >
      <Dropdown trigger={<a>button</a>} />
    </div>
  )
}
