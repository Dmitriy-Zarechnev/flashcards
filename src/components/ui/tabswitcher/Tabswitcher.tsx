import * as T from '@radix-ui/react-tabs'

// import s from './Tabswitcher.module.scss'

export const Tabswitcher = () => {
  return (
    <T.Root defaultValue={'tab1'} orientation={'vertical'}>
      <T.List aria-label={'tabs example'}>
        <T.Trigger value={'tab1'}>One</T.Trigger>
        <T.Trigger value={'tab2'}>Two</T.Trigger>
        <T.Trigger value={'tab3'}>Three</T.Trigger>
      </T.List>
      <T.Content value={'tab1'}>Tab one content</T.Content>
      <T.Content value={'tab2'}>Tab two content</T.Content>
      <T.Content value={'tab3'}>Tab three content</T.Content>
    </T.Root>
  )
}
