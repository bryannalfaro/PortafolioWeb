import React from 'react'
import { render } from '@testing-library/react/'
import Skills from './Skills'

describe('Testing rendering', () => {
  test('Skills view renders', () => {
    render(<Skills />)
  })
})
