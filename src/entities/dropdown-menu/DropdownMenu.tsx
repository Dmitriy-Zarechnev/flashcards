import { Dropdown, Icon, Typography } from '@/shared'

export const DropdownMenu = () => {
  return (
    <Dropdown.Root trigger={<Icon iconId={'group1399'} />}>
      <Dropdown.Item>
        <Icon iconId={'playCircleOutline'} />
        <Typography.Caption>Learn</Typography.Caption>
      </Dropdown.Item>
      <Dropdown.Separator />
      <Dropdown.Item>
        <Icon iconId={'editOutline'} />
        <Typography.Caption>Edit</Typography.Caption>
      </Dropdown.Item>
      <Dropdown.Separator />
      <Dropdown.Item>
        <Icon iconId={'trashOutline'} />
        <Typography.Caption>Delete</Typography.Caption>
      </Dropdown.Item>
    </Dropdown.Root>
  )
}
