import React from "react";

import "./App.scss";

function App() {
  return (
    <div className="d-flex flex-column vh-100">
      <header className="w-100 text-center">
        <ul className="h-100 w-100 d-flex m-auto align-items-center justify-content-center">
          <li className="ml-5">unknown</li>
          <li className="ml-auto">unknown</li>
          <li className="mr-auto">unknown</li>
          <li className="mr-5">unknown</li>
        </ul>
      </header>

      <main className="mx-0 px-0 h-100">
        <div className="h-50 d-flex">
          <img
            className="col-6"
            src="/bootstrap-5-ex/static/imgs/pexels-burst.jpg"
            alt=""
            title=""
          />
          <img
            className="col-6"
            src="/bootstrap-5-ex/static/imgs/pexels-daria-shevtsova.jpg"
            alt=""
            title=""
          />
        </div>

        <div className="h-50 d-flex">
          <img
            className="col"
            src="/bootstrap-5-ex/static/imgs/pexels-shvets-anna.jpg"
            alt=""
            title=""
          />
        </div>
      </main>

      <footer className="w-100 text-center">
        <div className="d-flex align-items-center">
          <ul className="mx-5 w-100 d-flex justify-content-center">
            <li className="">unknown</li>
            <li className="mr-auto">unknown</li>
            <li className="">unknown</li>
            <li className="">unknown</li>
          </ul>
        </div>
        <div className="d-flex align-items-center">
          <ul className="mx-5 w-100 d-flex justify-content-center">
            <li className="">unknown</li>
            <li className="ml-auto">unknown</li>
            <li className="mr-auto">unknown</li>
            <li className="">unknown</li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default App;
