import "./App.css";

const Header = () => {
  return <h2>Hello world!</h2>;
};

const Field = () => {
  return <input placeholder="Type here" type="text"/>
};

const Btn = () => {
  // const text = "Log in";
  const res = () => {
    return "Log in";
  };
  return <button>{res()}</button>;
};

const App = () => {
  return (
    <div className="App">
      <Header />
      <Field />
      <Btn />
    </div>
  );
};

export default App;