import { render, fireEvent } from '@testing-library/react'
import AutoGrowingInput from '../AutoGrowingInput'

describe('AutoGrowingInput', () => {
  test('calls onSubmit when Enter is pressed without Shift', () => {
    const onSubmit = jest.fn()
    const { getByPlaceholderText } = render(
      <AutoGrowingInput value="" onChange={() => {}} onSubmit={onSubmit} placeholder="Type..." />
    )
    const textarea = getByPlaceholderText('Type...')
    fireEvent.keyDown(textarea, { key: 'Enter', shiftKey: false, preventDefault: () => {} })
    expect(onSubmit).toHaveBeenCalled()
  })

  test('does not call onSubmit when Enter is pressed with Shift', () => {
    const onSubmit = jest.fn()
    const { getByPlaceholderText } = render(
      <AutoGrowingInput value="" onChange={() => {}} onSubmit={onSubmit} placeholder="Type..." />
    )
    const textarea = getByPlaceholderText('Type...')
    fireEvent.keyDown(textarea, { key: 'Enter', shiftKey: true, preventDefault: () => {} })
    expect(onSubmit).not.toHaveBeenCalled()
  })
})
