import firebase from 'firebase';

class Auth {
  async getAccessToken() {
    return firebase.auth().currentUser.getIdToken();
  }
  async signOut() {
    await firebase.auth().signOut();
  }

  authGuard(_to, _from, next) {
    if (firebase.auth().currentUser) return next();
    firebase.auth().onAuthStateChanged((user) => {
      if (user) return next();
      else return next({name: 'Home'})
    })
  }
}

const auth = new Auth()

export default auth;