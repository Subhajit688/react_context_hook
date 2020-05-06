import React, { useContext } from 'react';
import { ThemeContext } from './context/ThemeContext';

// classBased Component using Context

// class Navbar extends Component {
//   static contextType = ThemeContext;
//   render() {
//     const { isLightTheme, light, dark } = this.context;
//     const theme = isLightTheme ? light : dark;
//     return (
//       <nav style={{ background: theme.bg, color: theme.syntax }}>
//         <h1>Context app</h1>
//         <ul>
//           <li>Home</li>
//           <li>About</li>
//           <li>Contact</li>
//         </ul>
//       </nav>
//     );
//   }
// }

//FunctionBased Components using useContext hook

const Navbar = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  return (
    <nav style={{ background: theme.bg, color: theme.syntax }}>
      <h1>Context app</h1>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
