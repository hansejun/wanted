/** Redux는 3가지 기본 원칙으로 이루어져있다. */

// 1. Single source of truth
/*
Redux 내의 모든 전역 상태는 하나의 객체 안에 트리구조로 저장되고, 이 객체를 Store라 부른다.
모든 상태(state)가 하나의 객체에 저장되기에 애플리케이션이 단순해지고, 예측하기 쉬워진다. 또한 하나의 객체의 변화만 추적하면 되기에 Undo, Redo 등의 기능을 구현하기도 쉬워진다.
 */

{
  visibilityFilter: 'SHOW_ALL', // state 1
  todos: [                      // state 2
    {
      text: 'Consider using Redux',
      completed: true,
    },
    {
      text: 'Keep all state in a single tree',
      completed: false
    }
  ]
}

// 2. State is read-only
/* Redux의 State를 변화시키는 유일한 방법은 “Action 객체를 Dispatch를 통해서 전달하는 것이다.” 그 외에 Store에 직접 접근해서 상태를 수정하는 등의 행위는 허용되지 않는다. */

const action = {
	type: 'COMPLETE_TODO',
  index: 1
}

store.dispatch(action)

// ------------------------

store.dispatch({
  type: 'SET_VISIBILITY_FILTER',
  filter: 'SHOW_COMPLETED'
})

// 3. Changes are made with pure function
/* Action이 Store에 전달된 후 실질적으로 Action을 통해서 Store를 변경시키는 동작은 Reducer라 불리는 순수함수를 통해서 수행된다. */
/* 
순수함수란 동일한 Input을 받았을 경우 항상 동일한 Output을 내는것이 보장되어 있는 함수를 의미한다. 
순수함수가 되기 위해서는 함수 내에 사이드이펙트가 없어야 한다.
만약 사이드 이펙트가 있는 경우 그 함수는 해당 사이드 이펙트에 의해서 같은 Input이라도 다른 Output을 리턴할 수가 있다
 */

// pure function
function sum(x,y) {
	return x + y;
}

sum(1,2) // 3
sum(1,2) // 3
sum(1,2) // 3
sum(1,2) // 3
sum(1,2) // 3

// non-pure function
function sum2(x) {
	return x + Math.random();
}

sum(1) // ?
sum(1) // ?
sum(1) // ?
sum(1) // ?
sum(1) // ?