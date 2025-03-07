// using jest utilities
import thumbWar from '../thumb-war'
import * as utils from '../utils'

test('returns winner', () => {
  // replace these lines with a call to jest.spyOn and
  // call to mockImplementation on the mocked function (See hint #1)
  jest.spyOn(utils, 'getWinner') // utilsteki getWinner ı sarmaladık
  utils.getWinner.mockImplementation((p1, p2) => p2) // sarmalayınca mockun propertylerinden mockImplementation ı kullanabildik (https://jestjs.io/docs/mock-function-api)

  const winner = thumbWar('Ken Wheeler', 'Kent C. Dodds')
  expect(winner).toBe('Kent C. Dodds')
  expect(utils.getWinner.mock.calls).toEqual([
    ['Ken Wheeler', 'Kent C. Dodds'],
    ['Ken Wheeler', 'Kent C. Dodds'],
  ])
  
  // replace the next two lines with a restoration of the original function
  // (See hint #2)
  utils.getWinner.mockRestore() // yine sarmalayınca mockun propertylerinden mockRestore kullanabildik
})

/*
Hints below









































































Hint #1:

Here's an example of those APIs:

const myObject = {foo: () => 'bar'}
jest.spyOn(myObject, 'foo')
myObject.foo.mockImplementation(() => 'not-bar')
myObject.foo() === 'not-bar' // true


See the solution file for the solution









Hint #2:

If we wanted to restore the mocked `myObject.foo` function
to its original implementation, we could do:
myObject.foo.mockRestore()

And then the original implementation will be called.
myObject.foo() === 'bar' // true


 */
