// use the jest __mocks__ directory
import thumbWar from '../thumb-war'
import * as utilsMock from '../utils'

jest.mock('../utils') // jest bunu görünce otomatik olarak __mocks__ klasörüne gidip arar

test('returns winner', () => {
  const winner = thumbWar('Ken Wheeler', 'Kent C. Dodds')
  expect(winner).toBe('Kent C. Dodds')
  expect(utilsMock.getWinner).toHaveBeenCalledTimes(2)
  utilsMock.getWinner.mock.calls.forEach(args => {
    expect(args).toEqual(['Ken Wheeler', 'Kent C. Dodds'])
  })
})

/*
Hint below





















































Hint #1:

jest.mock(relativePathToModuleToMock)




 */
