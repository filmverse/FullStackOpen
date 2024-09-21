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

const Hello = () => {
  return (
    <p>Hello world</p>
  )
};

const App = () => {
  return (
    <div>
      <h1>Greetings</h1>
      <Hello />
      <Hello />
      <Hello />
    </div>
  )
};

export default App;