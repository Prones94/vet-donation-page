import decode from "jwt-decode";

class tokenAuth {
  login(token) {
    localStorage.setItem("token", token);

    window.location.assign("/");
  }

  loggedIn() {
    const token = localStorage.getItem("token");
    return !!token && !this.isTokenExpired(token);
  }

  logout(){
    localStorage.removeItem("token");
    window.location.assign('/');
  }

  isTokenExpired(token) {
    try {
      const decoded = decode(token);
      if (decoded.exp < Date.now() / 1000) {
        return true;
      } else return false;
    } catch (err) {
      return false;
    }
  }
}
export default new tokenAuth();
