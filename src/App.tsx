import { Dropdown } from '@/components/ui/dropdown'
import { Icon } from '@/components/ui/icon'
import { DropdownMenu } from '@/test-component/DropdownMenu'

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
      <Dropdown trigger={<Icon height={'16px'} iconId={'logOut'} width={'16px'} />} />
      <DropdownMenu />
    </div>
  )
}
