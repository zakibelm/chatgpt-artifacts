import clx from '../clx'

describe('clx', () => {
  test('joins class names with spaces', () => {
    expect(clx('a', 'b', 'c')).toBe('a b c')
  })
})
