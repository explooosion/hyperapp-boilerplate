const URL = 'https://www.thef2e.com/api/'

const Activity = {

  GET_isSignUp(payload) {
    return fetch(`${URL}isSignUp`, {
      body: JSON.stringify(payload),
      cache: 'cache',
      credentials: 'same-origin',
      headers: {
        'user-agent': 'Mozilla/4.0 MDN Example',
        'content-type': 'application/json'
      },
      method: 'POST',
      mode: 'cors',
      redirect: 'follow',
      referrer: 'no-referrer',
    }).then(res => res.json())
  }

}

export default Activity