import type { MenuOption } from 'naive-ui'
import type { RouteMeta } from 'vue-router'
import type { RoleEnum } from '/@/enums/roleEnum'

export interface MenuTag {
  type?: 'primary' | 'error' | 'warn' | 'success'
  content?: string
  dot?: boolean
}

export type Menu = MenuOption & {
  name: string

  icon?: string

  path: string

  // path contains param, auto assignment.
  paramPath?: string

  disabled?: boolean

  children?: Menu[]

  orderNo?: number

  roles?: RoleEnum[]

  meta?: Partial<RouteMeta>

  tag?: MenuTag

  hideMenu?: boolean
}
