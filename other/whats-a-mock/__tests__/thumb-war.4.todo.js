// avoid monkey-patching with jest.mock
import thumbWar from '../thumb-war'
import * as utils from '../utils'

// add an inline mock with the jest.mock API
//
jest.mock(
  '../utils',
  () => {
    const actualUtils = require.requireActual('../utils')
    return {
      ...actualUtils,
      getWinner: jest.fn((p1, p2) => p2) //sadece override edilen mocklansın kalanı aynı
    }
  }
)
//
// (Hint #1)

beforeEach(()=>{ //her bir suitten önce
  utils.getWinner.mockClear()
  //bunun yerine her bir test suitinin içinde ilk iş olarak bu metodu çağırmak da olabilirdi ya da suitlerden bir tanesine test.skip( olarak başlamak.
})

test('returns winner', () => {
  const winner = thumbWar('Ken Wheeler', 'Kent C. Dodds')
  expect(winner).toBe('Kent C. Dodds')
  expect(utils.getWinner).toHaveBeenCalledTimes(2)
  utils.getWinner.mock.calls.forEach(args => {
    expect(args).toEqual(['Ken Wheeler', 'Kent C. Dodds'])
  })

})

test('returns winner', () => {
  const winner = thumbWar('Ken Wheeler', 'Kent C. Dodds')
  expect(winner).toBe('Kent C. Dodds')
  expect(utils.getWinner).toHaveBeenCalledTimes(2)
  utils.getWinner.mock.calls.forEach(args => {
    expect(args).toEqual(['Ken Wheeler', 'Kent C. Dodds'])
  })

})

/*
Hint below:














































jest.mock('../utils', () => {
  return {
    // ...
    // see answer in the solution file
  }
})

 */
