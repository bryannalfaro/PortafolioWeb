import React from 'react'
import { render } from '@testing-library/react/'
import App from './App'

describe('Testing rendering', () => {
  test('App renders', () => {
    render(<App />)
  })
})
