const Hello = (props) => {
  return (
    <p>Hello {props.name}, you are {props.age} years old</p>
  )
};

const App = () => {
  const name = 'Peter';
  const age = 10;
  const friends = [ 'Peter', ' & ', 'Maya'];
  return (
    <div>
      <h1>Greetings friends {friends}</h1>
      <Hello name ='Many' age={26 + 10} />
      <Hello name={name} age={age} />
    </div>
  )
};

export default App;