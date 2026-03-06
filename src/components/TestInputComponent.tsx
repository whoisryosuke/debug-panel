import React from 'react'
import { useDebug } from '../hooks/useDebug'

type Props = {}

const TestInputComponent = (props: Props) => {
  const {test} = useDebug({
    test: { type: "input", value: 4 }
  })
  return (
    <div>{test.value}</div>
  )
}

export default TestInputComponent