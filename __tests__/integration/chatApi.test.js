import handler from '../../pages/api/chat.js'

jest.mock('openai', () => {
  return {
    default: jest.fn().mockImplementation(() => ({
      chat: {
        completions: {
          create: jest.fn().mockResolvedValue((async function * () {
            yield { choices: [{ delta: { content: 'hi' } }] }
          })())
        }
      }
    }))
  }
})

describe('chat API', () => {
  test('streams response from OpenAI', async () => {
    const req = new Request('http://localhost/api/chat', {
      method: 'POST',
      body: JSON.stringify({ prompt: 'Hello', conversationId: '123' })
    })
    const res = await handler(req)
    const text = await res.text()
    expect(text).toBe('hi')
  })
})
