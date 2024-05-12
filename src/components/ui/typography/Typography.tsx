import { ElementType, HTMLAttributes, ReactNode } from 'react'

import { clsx } from 'clsx'

import s from './Typography.module.scss'

//========================================================================================

type TagsOptions =
  | 'Body1'
  | 'Body2'
  | 'Caption'
  | 'H1'
  | 'H2'
  | 'H3'
  | 'H4'
  | 'Link1'
  | 'Link2'
  | 'Overline'
  | 'Subtitle1'
  | 'Subtitle2'

export const TAGS: Record<TagsOptions, ElementType> = {
  Body1: 'p',
  Body2: 'p',
  Caption: 'span',
  H1: 'h1',
  H2: 'h2',
  H3: 'h3',
  H4: 'h4',
  Link1: 'a',
  Link2: 'a',
  Overline: 'p',
  Subtitle1: 'p',
  Subtitle2: 'p',
} as const

//========================================================================================

type TypographyProps = {
  as?: ElementType
  children: ReactNode
  className?: string
} & HTMLAttributes<HTMLElement>

//========================================================================================

const TypographyFrame = (defaultTag: ElementType, style: string) => {
  return (props: TypographyProps) => {
    const { as, className, ...rest } = props
    const Tag = as || defaultTag

    return <Tag className={clsx(className, s.typography, style)} {...rest} />
  }
}

//========================================================================================

export const Typography = {
  Body1: TypographyFrame(TAGS.Body1, s.typographyBody1),
  Body2: TypographyFrame(TAGS.Body2, s.typographyBody2),
  Caption: TypographyFrame(TAGS.Caption, s.typographyCaption),
  H1: TypographyFrame(TAGS.H1, s.typographyH1),
  H2: TypographyFrame(TAGS.H2, s.typographyH2),
  H3: TypographyFrame(TAGS.H3, s.typographyH3),
  H4: TypographyFrame(TAGS.H4, s.typographyH4),
  Link1: TypographyFrame(TAGS.Link1, s.typographyLink1),
  Link2: TypographyFrame(TAGS.Link2, s.typographyLink2),
  Overline: TypographyFrame(TAGS.Overline, s.typographyOverline),
  Subtitle1: TypographyFrame(TAGS.Subtitle1, s.typographySubtitle1),
  Subtitle2: TypographyFrame(TAGS.Subtitle2, s.typographySubtitle2),
}
