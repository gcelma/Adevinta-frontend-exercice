import logic from './index.js'
import 'isomorphic-fetch'

describe('logic', () => {
    test('should succeed ajax call', () => {
      return logic.retrieveData()
        .then(result => {
          expect(result).toBeDefined()
          expect(result instanceof Array).toBeTruthy()
          expect(result.length).toBeGreaterThan(0)
          expect(result[0].userId).toBe(1)
          expect(result[0].id).toBe(1)
          expect(result[0].title).toBe('sunt aut facere repellat provident occaecati excepturi optio reprehenderit')
          expect(result[0].body).toBe('quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto')
        })
    })
})
  