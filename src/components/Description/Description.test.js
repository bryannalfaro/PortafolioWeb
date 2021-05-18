import React from 'react'
import { render } from '@testing-library/react/'
import Description from './DescriptionCard'

describe('Testing rendering', () => {
  test('Description view renders', () => {
    render(<Description />)
  })
})
