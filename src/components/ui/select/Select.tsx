import { ChevronDownIcon } from '@radix-ui/react-icons'
import * as Select from '@radix-ui/react-select'

import s from './Select.module.scss'

// export const SelectComp = () => {
//   return (
//     <Select.Root>
//       <Select.Trigger className={s.SelectTrigger}>
//         <Select.Value placeholder={'select-box'} />
//         <Select.Icon>
//           <ChevronDownIcon />
//         </Select.Icon>
//       </Select.Trigger>
//
//       <Select.Portal>
//         <Select.Content>
//           <Select.ScrollUpButton />
//           <Select.Viewport>
//             <Select.Group>
//               <Select.Item value={'Banana'}>
//                 <Select.ItemText>Banana</Select.ItemText>
//               </Select.Item>
//
//               <Select.Item value={'Orange'}>
//                 <Select.ItemText>Orange</Select.ItemText>
//               </Select.Item>
//
//               <Select.Item value={'Apple'}>
//                 <Select.ItemText>Apple</Select.ItemText>
//               </Select.Item>
//             </Select.Group>
//           </Select.Viewport>
//           <Select.ScrollDownButton />
//           <Select.Arrow />
//         </Select.Content>
//       </Select.Portal>
//     </Select.Root>
//   )
// }

export const SelectComp = () => {
  return (
    <Select.Root>
      <Select.Trigger className={s.SelectTrigger}>
        <Select.Value placeholder={'select-box'} />
        <Select.Icon className={s.SelectIcon}>
          <ChevronDownIcon />
        </Select.Icon>
      </Select.Trigger>

      <Select.Portal>
        <Select.Content className={s.SelectContent}>
          <Select.ScrollUpButton className={s.SelectScrollUpButton} />
          <Select.Viewport className={s.SelectViewport}>
            <Select.Group className={s.SelectGroup}>
              <Select.Item className={s.SelectItem} value={'Banana'}>
                <Select.ItemText className={s.SelectItemText}>Banana</Select.ItemText>
              </Select.Item>

              <Select.Item className={s.SelectItem} value={'Orange'}>
                <Select.ItemText className={s.SelectItemText}>Orange</Select.ItemText>
              </Select.Item>

              <Select.Item className={s.SelectItem} value={'Apple'}>
                <Select.ItemText className={s.SelectItemText}>Apple</Select.ItemText>
              </Select.Item>
            </Select.Group>
          </Select.Viewport>
          <Select.ScrollDownButton className={s.SelectScrollDownButton} />
          <Select.Arrow className={s.SelectArrow} />
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  )
}
