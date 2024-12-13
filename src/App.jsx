import "./App.css";
import Form from "./component/Form";
import Calcul from "./component/Calcul";
import Display from "./component/Display";

function App() {
  return (
    <>
    <div className={"flex column gap5"}>
      <Form />
      <div className={"flex flex-start gap10"}>
        <Display />
        <div className={"vl"}></div>
        <Calcul />
      </div>
    </div>
    </>
  );
}

export default App;
