function App() {
  return (
    <>
      <div className="App">
        <div className="mt-10 ml-10 absolute">
          <img src="/images/logo.svg" />
        </div>
        <div className="absolute right-10 mt-10 scale-150 text-slate-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-5 h-5 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </div>
        <div className="overflow-hidden">
          <img
            src="/images/illustration-working.svg"
            className="absolute top-32 left-24 scale-125"
          />
        </div>
        <div className="absolute top-96 translate-y-28">
          <h1 className="text-5xl ">More than just shorter links</h1>
          <p className="text-slate-500">
            Build your brand's recognition and get detailed insights on how your
            links are performing
          </p>
        </div>
      </div>
    </>
  );
}
export default App;
