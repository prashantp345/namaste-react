#NAMASTE React

# Parcel
- Dev Build 
- Local Server
- HMR = Hot Module Replacement
- FWA = File Watching Algorithm - Written in C++
- Caching = Faster Builds   (.parcel-cache)
- Image Optimization
- Minification
- Bundling 
- Compress
- Consistance Hashing
- Code splitting
- Differential bundling - to support older browsers
- Diagnosis
- Error handling
- HTTPs
- Tree Shaking - Remove unused code
- Different Dev and prod bundles


## Food Delivering app
 Header 
 *  - logo
 * - nav Items
 * Body
 *  - Search
 * - Resturant container
 *  ----- Image
 * ------- Name of Resto, Star Rating, cuisine, etc
 * Footer
 * - Copyright
 * - Links
 * - Address
 * - Contact

### Two Type of Import/Export
- Default Export/Import
Ex. export deafult Component;
    import Compoent from  'path/to/Component';

- Named Export/import
Ex  export const varible_name;
import { var_name } from 'path/to/file';

## State Variable => super poerful variable
- Whenver a state varible updates, react re-render component 

## React Hooks
(Normal JS utility finction)
-useState() => superpowerful State Varibale (named import from react - const ) 
-useEffect()

## Redux Toolkit
- Install @reduxjs/toolkit and react-redux
- Build our store 
- Connect our store to our app


 /** 
<div id="parent">
    <div id="child">
        <h1>I m a H1 tag 1</h1>
        <h1>I m a H1 tag 2</h1>
    </div>
</div> 
*/


// JSX object => (Babel) convert to React.createElement => React JS Object => HTML Code
const JSXHeading = <h1 id="heading">Nameste React using JSX</h1>;

// const parent = React.createElement(
//     "div",
//     { id: "parent" },
//     [
//         React.createElement("div", { id: "child", key:15 }, [
//             React.createElement("h1", { key:1}, "I m a H1 tag new"),
//             React.createElement("h1", { key:2}, "I m a H1 tag"),
//         ]),
//         React.createElement("div", { id: "child1",   }, [
//             React.createElement("h1", { key:3}, "I m a H1 tag"),
//             React.createElement("h1", { key:4}, "I m a H1 tag"),
//         ])
//     ]
// );

// const heading = React.createElement("h1", { id: "heading", xyz: 10}, "Hello React");


const HeadingComponent = () => {
    return (
        <div id="container">
            {JSXHeading}
            <h2 id="subHeading">Main page sub heading</h2>
        </div>
    );
}

