import fetch from 'node-fetch';
import { api }  from '../framework/services/index.js';

const key = '0c9843f896d3b390555fdcb623df994f';
const myemail = 'milecks@mail.ru';

describe('Testing with mailboxlayer.com', () => {

test('Check that email is not disposable', async () => {
    const response = await api().Emails().isDisposable(key, myemail);
    expect(response).toEqual(false);
});

test('Check that format is correct', async () => {
  const response = await api().Emails().isFormatValid(key, myemail);
  expect(response).toEqual(true);
});

test('Is a role email?', async () => {
  const response = await api().Emails().isRole(key, myemail);
  expect(response).toEqual(false);
});

test('Check if api key is missed', async () => {
    const response = await api().Emails().missedKey("", myemail);
    const dataObj = await response.json();
    expect(response.status).toEqual(200);
    console.log(dataObj);
    expect(dataObj.error.type).toEqual('missing_access_key');
});

});
