import SpadeLogo from "./images/s.png";

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
      </main>
    </div>
  );
}

export default App;
