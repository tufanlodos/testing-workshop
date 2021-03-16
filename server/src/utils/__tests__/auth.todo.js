import {isPasswordAllowed, userToJSON} from '../auth'

test('isPasswordAllowed only allows some passwords', () => {
  expect(isPasswordAllowed('')).toBe(false)
  expect(isPasswordAllowed('ffffffff')).toBe(false)
  expect(isPasswordAllowed('88888888')).toBe(false)
  expect(isPasswordAllowed('sfkl.e904f.s')).toBe(true)
})

test('userToJSON excludes secure properties', () => {
  const safeUser = {
    id: 'some-id',
    username: 'sarah',
  }
  const user = {
    ...safeUser,
    exp: new Date(),
    iat: new Date(),
    hash: 'some really long string',
    salt: 'some shorter string',
  }

  const jsonUser = userToJSON(user)
  expect(jsonUser).toEqual(safeUser)
  console.log(jsonUser)
})

//////// Elaboration & Feedback /////////
// When you've finished with the exercises:
// 1. Copy the URL below into your browser and fill out the form
// 2. remove the `.skip` from the test below
// 3. Change submitted from `false` to `true`
// 4. And you're all done!
/*
http://ws.kcd.im/?ws=Testing&e=auth%20util&em=m720694@outlook.com
*/
test.skip('I submitted my elaboration and feedback', () => {
  const submitted = false // change this when you've submitted!
  expect(submitted).toBe(true)
})
////////////////////////////////
