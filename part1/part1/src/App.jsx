// const App = () => {
//   // console.log('Hello from component');
//   const now = new Date();
//   const a = 10;
//   const b = 20;
//   console.log(now, a+b);
//   return (
//     <div>
//       <p>Hello World, it is {now.toString()}</p>
//       <p>
//         {a} plus {b} is {a+b}
//       </p>
//     </div>
//   )
// };

// export default App;

const Hello = (props) => {
  return (
    <p>Hello {props.name}, you are {props.age} years old</p>
  )
};

const App = () => {
  const name = 'Peter';
  const age = 10;
  return (
    <div>
      <h1>Greetings</h1>
      <Hello name ='Many' age={26 + 10} />
      <Hello name={name} age={age} />
    </div>
  )
};

export default App;