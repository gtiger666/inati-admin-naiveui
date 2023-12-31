import type { BasicColumn } from '/@/components/Table/src/types/table'
import { NAvatar } from 'naive-ui'

export const columns = [
  {
    title: 'id',
    key: 'id',
    width: 100,
  },
  {
    title: '名称',
    key: 'name',
    width: 100,
  },
  {
    title: '头像',
    key: 'avatar',
    width: 100,
    render(row) {
      // @ts-expect-error
      return h(NAvatar, {
        size: 48,
        src: row.avatar,
      })
    },
  },
  {
    title: '地址',
    key: 'address',
    auth: ['super'], // 同时根据权限控制是否显示
    ifShow: () => {
      return true // 根据业务控制是否显示
    },
    width: 150,
  },
  {
    title: '开始日期',
    key: 'beginTime',
    width: 160,
  },
  {
    title: '结束日期',
    key: 'endTime',
    width: 160,
  },
  {
    title: '创建时间',
    key: 'date',
    width: 100,
  },
] as BasicColumn[]
