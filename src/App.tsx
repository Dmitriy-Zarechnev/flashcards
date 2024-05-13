import { Dropdown, Item } from '@/components/ui/dropdown'
import { Icon } from '@/components/ui/icon'
import { DropdownMenu } from '@/test-component/dropDownMenu/DropdownMenu'

const itemsArray: Item[] = [
  { id: '1', svgCfg: { iconId: 'logOut' }, title: 'Item 1' },
  { id: '2', svgCfg: { iconId: 'logOut' }, title: 'Item 2' },
  { id: '3', svgCfg: { iconId: 'logOut' }, title: 'Item 3' },
]

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
      <Dropdown
        itemsArray={itemsArray}
        triggerComponent={<Icon height={'16px'} iconId={'logOut'} width={'16px'} />}
      />
      <DropdownMenu />
    </div>
  )
}
