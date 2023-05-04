import { CACHE_EXPIRATION_TIME } from '../store/cache';
const getCacheData = (cache, keyword) => {
  // 역할: 저장된 캐쉬를 반환한다
  /** 단계
   * 1. 해당 키워드를 사용해서 데이터가 캐싱되어있는지 확인한다.
   * 2. 있는 경우,
   *  2-1 expire time이 유효한지 확인한다. -> 어떻게 확일할 수 있을까?
   *  2-2 유효하면 해당 데이터 반환한다.
   *  2-3 유효하지 않으면 해당 데이터를 초기화 한다.
   * 3. 없는 경우 null을 반환한다.
   */
  if (cache[keyword]) {
    // 저장되어 있다.
    const { timeStamp, data } = cache[keyword];
    const expirationTime = timeStamp + CACHE_EXPIRATION_TIME;

    if (expirationTime < Date.now()) {
      console.log('시간지남');
      //시간이 지났다 -> 해당 데이터 파기(초기화)
      cache[keyword] = {};
    } else {
      //시간이 유효하다 -> 해당 데이터 사용
      return data;
    }
  } else {
    // 저장안되어 있다.
    return null;
  }
};

export default getCacheData;
