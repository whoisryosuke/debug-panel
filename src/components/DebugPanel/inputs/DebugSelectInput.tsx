import { DebugSelect, debugStore } from '@/store/DebugStore'
import { useSetAtom } from 'jotai/react'
import React, { ChangeEventHandler } from 'react'

type Props = DebugSelect

const DebugSelectInput = ({ id, type, data}: Props) => {
  const updateStore = useSetAtom(debugStore);
  
  const handleChange: ChangeEventHandler<HTMLSelectElement> = (e) => {
    updateStore((prev) => ({
      ...prev,
      // Update the specific input inside store by ID
      // Immutable state + arrays + nested objects, it's a doozy every time
      items: prev.items.map(item => item.id == id && item.type == type ? ({
        ...item,
        data:{
          ...item.data,
          value: e.currentTarget.value,
        }
      }) : item)
    }))
  }

  return (
    <select value={data.value} onChange={handleChange}>
      {data.items.map(item => 
        <option value={item.value}>{item.title}</option>
      )}
    </select>
  )
}

export default DebugSelectInput