// 렌더링 중 사이드 이펙트 금지
/*
  리액트의 기본 원칙
  - 컴포넌트는 항상 순수해야한다. pure fn
*/

// pure fn (사이드 이펙트가 없는 함수)
// 함수가 동작할 때 함수 외부의 값에 접근하지 않는다.
// 같은 인풋을 넣으면 같은 아웃풋을 반환한다. 즉 결과를 예측할 수 있다.

// 리액트에서 컴포넌트는 항상 순수함수여야한다. 즉 컴포넌트 내부의 값만을 사용해야한다.
// 인자로 받는 값도 함수 내부의 값이다. (props)
// 그외 나머지 값들은 렌더링 과정에서 접근하면 안된다.
// 접근하고 싶은 경우에는 useEffect를 사용해야한다. 혹은 이벤트 핸들러
// 그렇기에 서버에 데이터 요청을 useEffect 혹은 onClick과 같은 이벤트 핸들러 안에서 처리하는 것이다.


// before [x]
const dataPriceRange = [0, 0];

const Main = () => {
  const data = useLoaderData();
  const spaceCategoryData = Array.from(
    data.reduce((arr, currData) => arr.add(currData.spaceCategory), new Set<string>()),
  );
  const { isOpen, onToggle } = useDisclosure();

  const [filterItems, setFilterItems] = useState<FilterItems>({
    price: [0, 100],
    spaceCategory: [],
  });

  let min = data[0].price;
  let max = data[0].price;
  data.forEach(e => {
    if (e.price < min) min = e.price;
    else if (e.price > max) max = e.price;
  });
  dataPriceRange[0] = min;
  dataPriceRange[1] = max;

	return <SomeThing dataPriceRange={dataPriceRange}/>
}

// after 
// dataPriceRange를 함수 안에서 선언함으로써 렌더링 중 사이드 이펙트를 방지한다.
const Main2 = () => {
  const data = useLoaderData();
  const spaceCategoryData = Array.from(
    data.reduce((arr, currData) => arr.add(currData.spaceCategory), new Set<string>()),
  );
  const { isOpen, onToggle } = useDisclosure();

  const [filterItems, setFilterItems] = useState<FilterItems>({
    price: [0, 100],
    spaceCategory: [],
  });

	const dataPriceRange = [0, 0];

  // DETERMINED MIN MAX PRICE OF THE DATA
  let min = data[0].price;
  let max = data[0].price;
  data.forEach(e => {
    if (e.price < min) min = e.price;
    else if (e.price > max) max = e.price;
  });
  dataPriceRange[0] = min;
  dataPriceRange[1] = max;

	return <SomeThing dataPriceRange={dataPriceRange}/>
}

// after2 - 위에 코드는 price의 min max 값을 구하기 위한 코드이지만 명시적이지 않다.
// 아래는 조금 더 명시적으로 수정한 코드이다.

const Main3 = () => {
  const data = useLoaderData();
  const spaceCategoryData = Array.from(
    data.reduce((arr, currData) => arr.add(currData.spaceCategory), new Set<string>()),
  );
  const { isOpen, onToggle } = useDisclosure();

  const [filterItems, setFilterItems] = useState<FilterItems>({
    price: [0, 100],
    spaceCategory: [],
  });

  // data에서 price만을 추출한 배열 prices를 생성한다.
	const prices = data.map(({price}) => price);
  // [prices의 최소값, prices의 최대값]을 dataPriceRange에 할당한다.
	const dataPriceRange = [Math.min(...prices), Math.max(...prices)];

	return <SomeThing dataPriceRange={dataPriceRange}/>
}