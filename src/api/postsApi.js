export default class PostsApi {
  constructor() {
    this.prefixUrl = 'http://localhost:8080/v1';
  }

  _getAPIData(path) {
    const init = {
      method: 'GET',
      headers: {
        'Content-Type' : 'application/json'
      },
      mode: 'no-cors',
      credentials: 'include'
    };

    let myRequest = new Request(this.prefixUrl + path, init)
    return fetch(myRequest)
      .then((r) => {
        console.log('got posts', r);
        return r;
      })
      .catch((e) => {
        console.log('error getting posts', e);
      })
  }

  getPosts() {
    return this._getAPIData(`/posts`);
  }

}
