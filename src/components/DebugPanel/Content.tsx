import { useAtomValue } from 'jotai'
import React from 'react'
import { debugStore } from '@/store/DebugStore'
import DebugInputComponent from './inputs/DebugInputComponent'

type Props = {}

const Content = (props: Props) => {
    const {items} = useAtomValue(debugStore);
    const renderItems = items.map(item => <DebugInputComponent key={item.id} {...item} />) 
  return (
    <div>{renderItems}</div>
  )
}

export default Content