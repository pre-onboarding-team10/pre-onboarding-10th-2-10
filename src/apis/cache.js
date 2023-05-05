export class Cache {
  #dataMap = {};
  #expireTimeInSec;

  constructor(expireTimeInSec) {
    this.#expireTimeInSec = expireTimeInSec || 0;
  }

  get(key) {
    return this.#dataMap[key];
  }

  set(key, data, expireTimeInSec) {
    const cacheData = new Data(data, expireTimeInSec || this.#expireTimeInSec);
    this.#dataMap[key] = cacheData;
  }
}

class Data {
  #data;
  #expireTimeInSec;
  #createdAt;

  constructor(data, expireTimeInSec) {
    this.#data = data;
    this.#expireTimeInSec = expireTimeInSec;
    this.#createdAt = new Date();
  }

  get data() {
    return this.#data;
  }

  get isExpired() {
    const now = new Date();
    const differenceSec = (now.getTime() - this.#createdAt.getTime()) / 1000;
    return differenceSec >= this.#expireTimeInSec;
  }
}
