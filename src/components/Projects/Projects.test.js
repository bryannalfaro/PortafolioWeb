import React from 'react'
import { render } from '@testing-library/react/'
import Projects from './Projects'

describe('Testing rendering', () => {
  test('Projects view renders', () => {
    render(<Projects />)
  })
})
