// improved assertions for mocks
import thumbWar from '../thumb-war'
import * as utils from '../utils'

test('returns winner', () => {
  const originalGetWinner = utils.getWinner
  // change the getWinner implementation to a function
  // that keeps track of how often it's called and
  // the arguments it's called with (Hint #1)

  utils.getWinner = (...args) => {
    utils.getWinner.mock.calls.push(args) //her bir çağrıda parametreleri (p1 ve p2) ekliyoruz
    return args[1] // 1. indexte olan yani 2. parametreyi, p2 yi dönüyoruz
  }

  utils.getWinner.mock = {calls:[]} //yukarıda getWinner ı tanımladık ve assertionlar başlamadan önce boş array ile init ettik. malum jsde function lar first class object olduğundan propertye de sahip olabiliyor

  const winner = thumbWar('Ken Wheeler', 'Kent C. Dodds')
  expect(winner).toBe('Kent C. Dodds')
  // console.log(utils.getWinner.mock.calls); // 2 defa çağrılır çünkü thumbWar içinde bir kullanıcının 2 olması oyunu kazandırıyor [ [ 'Ken Wheeler', 'Kent C. Dodds' ], [ 'Ken Wheeler', 'Kent C. Dodds' ] ]
  expect(utils.getWinner.mock.calls).toHaveLength(2) // 2 defa çağrılır çünkü thumbWar içinde bir kullanıcının 2 olması oyunu  kazandırıyor. Bunun yerine direk toEqual ile üstte konsoldan gelen çıktıyı direk da yazabilirdik
  utils.getWinner.mock.calls.forEach(args => {
    expect(args).toEqual(['Ken Wheeler', 'Kent C. Dodds'])
  }) // her seferinde 2 elemanlı arrayimiz ile mi çağrılmış kontrolü

  // add an assertion for how many times the getWinner function
  // was supposed to be called (2 times) (Hint #2)
  //
  // add another assertion that every time it was called
  // it was called with the right arguments: 'Ken Wheeler', 'Kent C. Dodds'
  // (Hint #3)

  utils.getWinner = originalGetWinner
})

/*
Hints below:









































































Hint #1:

There's nothing too magical going on here, you just need some place to store the state for every time the function is
called. Something like this should do just fine (Sorry, this is the solution I have. I couldn't think of a way to hint
at it without totally giving it away or leading you astray):

utils.getWinner = (...args) => {
  utils.getWinner.mock.calls.push(args)
  return args[1]
}
utils.getWinner.mock = {calls: []}







Hint #2:
Depending on how you store the state of how many times it's been called, you might either do this:

expect(timesCalled).toBe(2)

Or you might do this:

expect(utils.getWinner.mock.calls).toHaveLength(2)

Either way is fine.






Hint #3:

You can have assertions within a forEach and that's not entirely uncommon. Depending on how you're storing the state
of the arguments its called with you might do this (#spoileralert this is the solution... sorry):

utils.getWinner.mock.calls.forEach(args => {
  expect(args).toEqual(['Ken Wheeler', 'Kent C. Dodds'])
})




 */
