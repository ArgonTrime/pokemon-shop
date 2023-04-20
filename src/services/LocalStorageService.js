class LocalStorageService {
  static service = new LocalStorageService();

  keys = {
    TOKEN: "token",
  };
  saveToken(accessToken) {
    localStorage.setItem(this.keys.TOKEN, accessToken);
  }
  getToken() {
    localStorage.getItem(this.keys.TOKEN);
  }
}
export default LocalStorageService.service;
