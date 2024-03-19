// import { Tarjeta } from './tarea/Tarea1.js';

// ReactDOM.render(
//   <Tarjeta
//     nombre="Tzipora Bobek"
//     titulo="Programing student"
//     imagen="https://raw.githubusercontent.com/Wolfam12/NuevasTecnologiasActividadGithub/945cc13609c5b320c86aed3cb4219b9ce247d41f/assets/img/portfolio/1989.png"
//   />,
//   document.getElementById('react-app')
// );

// import { BlogPost } from './tarea/Tarea1.js';

// ReactDOM.render(
//   <BlogPost
//     titulo="Haciendo esta tarea"
//     parrafos={`Estoy intentando hacer esta tarea.
//     Por ahora esta llendo muy bien.
//     Funciono!!`}
//     autor={{
//       nombre: "Tzipora Bobek",
//       titulo:"Programing student",
//       imagen: "https://raw.githubusercontent.com/Wolfam12/NuevasTecnologiasActividadGithub/945cc13609c5b320c86aed3cb4219b9ce247d41f/assets/img/portfolio/1989.png"
//     }}
//   />,
//   document.getElementById('react-app')
// );

// import { MatchNombre} from './tarea/Tarea2.js';

// ReactDOM.render(
//   <MatchNombre
//     nombre="Tzipi"
//  />,
//   document.getElementById('react-app')
// );

// import { PasswordInput} from './tarea/Tarea2.js';

// ReactDOM.render(
//   <PasswordInput
//     minLength={8}
//  />,
//   document.getElementById('react-app')
// );

// import { ValidationInput} from './tarea/Tarea2.js';

// ReactDOM.render(
//   <ValidationInput
//     validation={(value) => value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)}
//     isPassword={false}
//  />,
//   document.getElementById('react-app')
// );

// import { UncontrolledCheckbox} from './tarea/Tarea3.js';

// ReactDOM.render(
//   <UncontrolledCheckbox
//     name="Mi Imput"
//     initialValue={false}
//  />,
//   document.getElementById('react-app')
// );

// import { CheckboxList} from './tarea/Tarea3.js';

// ReactDOM.render(
//   <CheckboxList
//   items={{
//     uno: false,
//     dos: true,
//     tres: false,
//   }}
//  />,
//   document.getElementById('react-app')
// );

// import { ControlledCheckbox} from './tarea/Tarea4.js';

// function App(props) {
//   const [isChecked, setIsChecked] = React.useState(props.value);

//   return (
//       <ControlledCheckbox
//         name={props.name}
//         value={isChecked}
//         onChange={() => setIsChecked(!isChecked)}
//       />
//   );
// }

// ReactDOM.render(
// <App 
//   name="My Checkbox"
//   value={true}
// />, 
//   document.getElementById('react-app')
// );

import { ControlledCheckboxList} from './tarea/Tarea4.js';

ReactDOM.render(
  <ControlledCheckboxList
  items={{
    uno: false,
    dos: true,
    tres: false,
  }}
 />,
  document.getElementById('react-app')
);
