// 필터링은 react의 state로 관리하지 않는다.
// 필터링을 state로 관리하였을 때의 단점은 새로고침 혹은 페이지 이동하고 다시 돌아왔을 경우에
// 필터링에 대한 정보가 초기화된다는 점이다.
// 모든 종류의 필터링은 queryString으로 관리한다.

/*

[PATH]
- 내가 얻고자 하는 리소스의 정체성
- "wandted.co.kr/145979"  => 145979에 대한 정보 
- "wandted.co.kr/1" => 1에 대한 정보 
- path가 변경될 때는 리소스에 대한 정체성 또한 변경된다.

[QUERY]
- 내가 얻고자 하는 리소스에서 좀 더 부가적인 옵션들을 넣을 때
- "wandted.co.kr/145979?country=kr" => 145979의 country가 kr인 정보

*/

// [query 접근법] react-router-dom hook
const searchParams = useSearchParams();
