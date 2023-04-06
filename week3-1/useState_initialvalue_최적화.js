// useState initialValue 최적화
// 보통 useState에 초기값으로 값을 넣는 경우가 많다.

// Before
export default function Main() {
  const getFilter = getLocalStroage("productFilter", { check: [], rang: [] });
  const [filter, setFilter] = useState(getFilter);
}

/* 
  ^- 위 코드는 getLocalStroage()의 반환값을 useState()에 초기값으로 넣는 코드이다.
  하지만 Main 컴포넌트에 리렌더링이 발생할 때마다 getLocalStroage는 실행될것이다.
  만약 getLocalStroage()라는 함수가 비용이 큰 함수일 경우에 이는 꽤나 낭비로 이어진다. 

  이를 좀더 최적화 하기 위해 아래와 같이 수정해보자
 */


// After
export default function Main2() {
  const getFilter = () => getLocalStroage("productFilter", { check: [], rang: [] });
  const [filter, setFilter] = useState(getFilter);
}

/*
  수정 후 코드는 getFilter를 함수로 만들어 사용하였다. 이전과 무슨 차이가 있을까?
  이제는 useState를 초기화 할 때 처음 getLocalStroage를 실행하고 이후 렌더링부터는 기존에 값이 존재하기 때문에
  getLocalStorage() 함수를 실행하지 않아 비용적인 부분에서 절약할 수 있다.

  뭐 바깥에 선언한 후에 초기값으로 할당해도 괜찮다. 
 */