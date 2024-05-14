import { Dropdown } from '@/components/ui/dropdown'
import { Icon } from '@/components/ui/icon'
import { Typography } from '@/components/ui/typography'

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
      <Dropdown.Root trigger={<Icon iconId={'eyeOutline'} />}>
        <Dropdown.Item>
          <Icon iconId={'eyeOutline'} />
          <Typography.Caption>123</Typography.Caption>
        </Dropdown.Item>
        <Dropdown.Separator />
        <Dropdown.Item>
          <Icon iconId={'eyeOutline'} />
          <Typography.Caption>123</Typography.Caption>
        </Dropdown.Item>
        <Dropdown.Separator />
        <Dropdown.Item>
          <Icon iconId={'eyeOutline'} />
          <Typography.Caption>123</Typography.Caption>
        </Dropdown.Item>
      </Dropdown.Root>
    </div>
  )
}
