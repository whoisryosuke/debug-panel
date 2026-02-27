import React from 'react'
import Content from './Content'
import { debugStore } from '../../store/DebugStore'
import { useAtomValue } from 'jotai/react'

type Props = {}

const DebugPanel = (props: Props) => {
  const {visible} = useAtomValue(debugStore);
  return (
    <div data-visible={visible}>
        <Content />
    </div>
  )
}

export default DebugPanel