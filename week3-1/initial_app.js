// 앱 초기화

// before
const Main = () => {
  const [isLogin, setIsLogin] = useState(true);
  useEffect(() => {
    setIsLogin(!!localStorage.getItem("refreshToken"));
  }, []);

  return <p>{isLogin ? "로그인 완료" : "로그인해주세용"}</p>;
};

// after
const isLogin = !!localStorage.getItem("refreshToken");
const Main2 = () => {
  return <p>{isLogin ? "로그인 완료" : "로그인해주세용"}</p>;
};

/**
  앱을 초기화할 때 파일을 import할 때 초기화를 실행할지 혹은 컴포넌트가 마운트 될 때마다 초기화할지에 따라
  useEffect를 사용할지 컴포넌트 밖에서 값을 선언할지 결정한다.
 */
