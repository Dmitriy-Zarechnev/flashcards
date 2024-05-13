import { useState } from 'react'

import * as D from '@radix-ui/react-dropdown-menu'

import s from './DropdownMenu.module.css'

export const DropdownMenu = () => {
  // bookmarksChecked ставит галочку при клике
  const [bookmarksChecked, setBookmarksChecked] = useState(true)
  // urlsChecked ставит галочку при клике
  const [urlsChecked, setUrlsChecked] = useState(false)
  // person устанавливает значение имени при клике
  const [person, setPerson] = useState('pedro')

  return (
    <D.Root>
      {/* =================================================================================================================== */}
      {/* кнопка открытия меню */}

      <D.Trigger asChild>
        <button className={s.IconButton}>🟢</button>
      </D.Trigger>

      {/* =================================================================================================================== */}

      <D.Portal>
        <D.Content className={s.DropdownMenuContent} sideOffset={5}>
          {/* =================================================================================================================== */}
          {/* обычные элементы меню */}

          <D.Item className={s.DropdownMenuItem}>
            New Tab <div className={s.RightSlot}>⌘+T</div>
          </D.Item>
          <D.Item className={s.DropdownMenuItem}>
            New Window <div className={s.RightSlot}>⌘+N</div>
          </D.Item>
          <D.Item className={s.DropdownMenuItem}>
            New Private Window <div className={s.RightSlot}>⇧+⌘+N</div>
          </D.Item>

          {/* =================================================================================================================== */}
          {/* внутренее меню */}

          <D.Sub>
            <D.SubTrigger className={s.DropdownMenuSubTrigger}>
              More Tools
              <div className={s.RightSlot}>🔴</div>
            </D.SubTrigger>
            <D.Portal>
              <D.SubContent alignOffset={-5} className={'DropdownMenuSubContent'} sideOffset={2}>
                <D.Item className={s.DropdownMenuItem}>
                  Save Page As… <div className={s.RightSlot}>⌘+S</div>
                </D.Item>
                <D.Item className={s.DropdownMenuItem}>Create Shortcut…</D.Item>
                <D.Item className={s.DropdownMenuItem}>Name Window…</D.Item>
                <D.Separator className={s.DropdownMenuSeparator} />
                <D.Item className={s.DropdownMenuItem}>Developer Tools</D.Item>
              </D.SubContent>
            </D.Portal>
          </D.Sub>

          {/* =================================================================================================================== */}

          <D.Separator className={s.DropdownMenuSeparator} />

          {/* =================================================================================================================== */}
          {/* Галочка при клике */}

          <D.CheckboxItem
            checked={bookmarksChecked}
            className={s.DropdownMenuCheckboxItem}
            onCheckedChange={setBookmarksChecked}
          >
            <D.ItemIndicator className={s.DropdownMenuItemIndicator}>🟡</D.ItemIndicator>
            Show Bookmarks <div className={s.RightSlot}>⌘+B</div>
          </D.CheckboxItem>
          <D.CheckboxItem
            checked={urlsChecked}
            className={s.DropdownMenuCheckboxItem}
            onCheckedChange={setUrlsChecked}
          >
            <D.ItemIndicator className={s.DropdownMenuItemIndicator}>🟡</D.ItemIndicator>
            Show Full URLs
          </D.CheckboxItem>

          {/* =================================================================================================================== */}

          <D.Separator className={s.DropdownMenuSeparator} />

          {/* =================================================================================================================== */}
          {/* Галочка при клике */}

          <D.Label className={s.DropdownMenuLabel}>People</D.Label>
          <D.RadioGroup onValueChange={setPerson} value={person}>
            <D.RadioItem className={s.DropdownMenuRadioItem} value={'pedro'}>
              <D.ItemIndicator className={s.DropdownMenuItemIndicator}>🟣</D.ItemIndicator>
              Pedro Duarte
            </D.RadioItem>
            <D.RadioItem className={s.DropdownMenuRadioItem} value={'colm'}>
              <D.ItemIndicator className={s.DropdownMenuItemIndicator}>🟣</D.ItemIndicator>
              Colm Tuite
            </D.RadioItem>
          </D.RadioGroup>

          {/* =================================================================================================================== */}
          {/* стрелочка сверху на меню */}

          <D.Arrow className={s.DropdownMenuArrow} />

          {/* =================================================================================================================== */}
        </D.Content>
      </D.Portal>
    </D.Root>
  )
}
