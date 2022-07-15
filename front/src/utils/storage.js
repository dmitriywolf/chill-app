class Storage {
  // eslint-disable-next-line class-methods-use-this
  get(key) {
    const value = localStorage.getItem(key);
    return value;
  }

  // eslint-disable-next-line class-methods-use-this
  set(key, value) {
    localStorage.setItem(key, value);
  }

  // eslint-disable-next-line class-methods-use-this
  remove(key) {
    localStorage.removeItem(key);
  }
}

export const storage = new Storage();
