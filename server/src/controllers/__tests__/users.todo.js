import * as usersController from '../users'
import {initDb} from 'til-server-test-utils'

test('getUsers returns all users in the database', async()=>{
  await initDb()
  const req = {}
  const res = {
    json: jest.fn()
  }   
  await usersController.getUsers(req,res)
  expect(res.json).toHaveBeenCalledTimes(1)
  // expect(res.json).toHaveBeenCalled() sayı önemsiz ve sadece çağrılıp çağrılmadığı için
  console.log(res.json.mock.calls[0]);
})