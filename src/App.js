import "./App.css";
import stratagems from "./stratagems.json";
import { useEffect } from "react";

function App() {
  const stratId = 2462004;

  const found = stratagems.find((element) => element.id === stratId);

  useEffect(() => {
    // const [searchParams] = useSearchParams();
    // const game = searchParams.get("g");
    // console.log(stratagems[0]);
  }, []);

  return (
    <div className='App'>
      <h1>Stratagem Viewer</h1>
      <p>name: {found.name}</p>
      <p>type: {found.type}</p>
      <p>legend: {found.legend}</p>
      <p>CP: {found.cp_cost}</p>
      <div
        dangerouslySetInnerHTML={{
          __html: found.description,
        }}
      ></div>

      {/* <h1>Stratagem Viewer2</h1>
      <p>name: {found.name}</p>
      <p>type: {stratagems[0].type}</p>
      <p>legend: {stratagems[0].legend}</p>
      <p>CP: {stratagems[0].cp_cost}</p>
      <div
        dangerouslySetInnerHTML={{
          __html: stratagems[0].description,
        }}
      ></div> */}
    </div>
  );
}

export default App;
