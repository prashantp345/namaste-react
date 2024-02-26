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
- create a Slice (cartSlice)
- Dispatch(action)
- Selector(subscribe to the store)


## Types of testing (Developer)
- Unit Testing (Test your reatc apl in isolation)
- Integration (Test a flow where multiple component envolve and talk to each other )
- End to End testing - e2e testing
 (Full flow of user ..as soon as user start using app till leave app)

## Setting up tesing in our APP
- Install React testing Library
- Installed jest
- Installed Babel dependencies
- Configurare Babel
- Configure Parcel Config file to disable babel transpilation
- Jest configuration 
   --- Jest --- npx jest --init
   - Install jsdom library
- Install @babel/preset-react - to make JSX work in test cases
- Include @babel/preset-react inside my babel-config
- npm i -D @testing-library/jest-dom

## dundar  __test__ extention resurve 

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

