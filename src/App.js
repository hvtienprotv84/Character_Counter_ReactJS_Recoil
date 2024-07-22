import {atom, RecoilRoot, selector, useRecoilState, useRecoilValue} from "recoil";
import './App.css';
// Atom
const textState = atom({
  key: 'textState', // unique ID
  default: '', // default value
});

// Selector
const charCountState = selector({
  key: 'charCountState', // unique ID
  get: ({get}) => {
    const text = get(textState);

    return text.length;
  },
});

function App() {
  return (
    // Wrap
    <RecoilRoot>
      <CharacterCounter />
    </RecoilRoot>
  );
}

function CharacterCounter() {
  return (
    <div>
      <TextInput />
      <CharacterCount />
    </div>
  );
}

function TextInput() {
  // Subscribe
  const [text, setText] = useRecoilState(textState);

  const onChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      {/* <input type="text" value={text} onChange={onChange} /> */}

      <div class="input__container">
        <div class="shadow__input"></div>
        <button class="input__button__shadow">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="#000000"
            width="20px"
            height="20px"
          >
            <path d="M0 0h24v24H0z" fill="none"></path>
            <path
              d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
            ></path>
          </svg>
        </button>
        <input
          type="text"
          name="username"
          class="input__search"
          placeholder="Mời Bạn Nhập Ký Tự!"
          onChange={onChange}
        />
      </div>

      <br />
    <div className="ghichep_text">
      Ghi Chép Lại Ký Tự Đã Nhập: {text}
    </div>

    </div>
  );
}

function CharacterCount() {
  const count = useRecoilValue(charCountState);

  return <>
  <div className="dem_kytu">
  Đếm Số Lượng Ký Tự: {count}
  </div>

  <div className='container_logo'>
        <img id='img1' src='https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png' alt=""/> 
        <img id='img2' src='https://www.recoiljs.cn/img/wordmark.png' alt=""/>
  </div>
  </>;
}

export default App;
