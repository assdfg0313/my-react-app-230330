import SpadeLogo from "./images/s.png";

const data = [
  {
    img: "프로젝트 이미지",
    title: "프로젝트 제목",
    subscription: "프로젝트 간략 설명",
  },
  {
    img: "프로젝트 이미지",
    title: "프로젝트 제목",
    subscription: "프로젝트 간략 설명",
  },
  {
    img: "프로젝트 이미지",
    title: "프로젝트 제목",
    subscription: "프로젝트 간략 설명",
  },
  {
    img: "프로젝트 이미지",
    title: "프로젝트 제목",
    subscription: "프로젝트 간략 설명",
  },
  {
    img: "프로젝트 이미지",
    title: "프로젝트 제목",
    subscription: "프로젝트 간략 설명",
  },
  {
    img: "프로젝트 이미지",
    title: "프로젝트 제목",
    subscription: "프로젝트 간략 설명",
  },
];

function App() {
  return (
    <div className="bg-red-100 min-h-screen">
      <header className="bg-blue-100 h-12 md:h-20">
        <div className="max-w-screen-xl mx-auto h-full flex justify-between items-center">
          <div className="flex items-center">
            <img className="w-7 ml-3 mr-2" src={SpadeLogo} alt="" />
            <div className="text-xs font-extrabold">Changer's Portfolio</div>
          </div>
          <ul className="flex mr-3 gap-2 md:gap-8 text-xs md:text-base">
            <li className="bg-green-300 btn-style">Introduce</li>
            <li className="bg-purple-300 btn-style">Portfolio</li>
            <li className="bg-orange-300 btn-style">Contact Me</li>
          </ul>
        </div>
      </header>
      <main>
        <div className="bg-green-100 max-w-screen-xl mx-auto h-96 flex justify-center items-center">
          안녕안녕 나는 첸져야~
        </div>
        <ul className="bg-indigo-100 max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center gap-8 py-8">
          {data.map((value, index) => {
            return (
              <li className="bg-purple-300 w-60 h-72 rounded-xl">
                <div className="bg-yellow-100 w-full h-1/2 rounded-t-xl">
                  {value.img}
                </div>
                <div className="text-xl font-bold mt-2 mx-2">{value.title}</div>
                <div>{value.subscription}</div>
              </li>
            );
          })}
        </ul>
        <div className="bg-gray-100 max-w-screen-xl mx-auto h-96 flex justify-center items-center">
          내 연락처
        </div>

        <div className="max-w-screen-xl mx-auto flex justify-end py-1 md:py-2 text-sm font-extrabold mr-4">
          made by. Changer
        </div>
      </main>
    </div>
  );
}

export default App;
