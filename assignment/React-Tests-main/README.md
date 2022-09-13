# React-Tests
WEEK 1
1) What is React?
 React is an open-source frontend JavaScript library which is used for building user interfaces especially for single page applications. It is used for handling
 view layer for web and mobile apps. React was created by Jordan Walke, a software engineer working for Facebook. React was first deployed on Facebook's News Feed
 in 2011 and on Instagram in 2012.
 
 2) What is JSX?
  It allows us to write HTML inside JavaScript and place them in the DOM without using functions like appendChild( ) or createElement( ).
  As stated in the official docs of React, JSX provides syntactic sugar for React.createElement( ) function.
  **Note- We can create react applications without using JSX as well.
  Let’s understand how JSX works:

Without using JSX, we would have to create an element by the following process:
  ```
  const text = React.createElement('p', {}, 'This is a text');
  const container = React.createElement('div','{}',text );
  ReactDOM.render(container,rootElement);
  ```
  Using JSX, the above code can be simplified:
  ```
  const container = (
  <div>
   <p>This is a text</p>
  </div>
  );
ReactDOM.render(container,rootElement);
  ```
  3) What is state in React?
  State of a component is an object that holds some information that may change over the lifetime of the component. We should always try to make our state as
  simple as possible and minimize the number of stateful components.

Let's create an user component with message state,
```
class User extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      message: 'Welcome to React world'
    }
  }

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
      </div>
    )
  }
}
```
![alt text](https://raw.githubusercontent.com/sudheerj/reactjs-interview-questions/master/images/state.jpg)

State is similar to props, but it is private and fully controlled by the component. i.e, It is not accessible to any component other than the one that owns and sets it.

4) What are props in React?
Props are inputs to components. They are single values or objects containing a set of values that are passed to components on creation using a naming convention 
similar to HTML-tag attributes. They are data passed down from a parent component to a child component.

The primary purpose of props in React is to provide following component functionality:
Pass custom data to your component.
Trigger state changes.
Use via this.props.reactProp inside component's render() method.
For example, let us create an element with reactProp property:
```
<Element reactProp={'1'} />
```
This reactProp (or whatever you came up with) name then becomes a property attached to React's native props object which originally already exists on all
components created using React library.
```
props.reactProp
```
5) What is the difference between state and props?
Both props and state are plain JavaScript objects. While both of them hold information that influences the output of render, they are different in their 
functionality with respect to component. Props get passed to the component similar to function parameters whereas state is managed within the component similar 
to variables declared within a function.

6) Why should we not update the state directly?
If you try to update state directly then it won't re-render the component.
```
//Wrong
this.state.message = 'Hello world'
Instead use setState() method. It schedules an update to a component's state object. When state changes, the component responds by re-rendering.
```
```
//Correct
this.setState({ message: 'Hello World' })
```
Note: You can directly assign to the state object either in constructor or using latest javascript's class field declaration syntax.

7) What is the purpose of callback function as an argument of setState()?
The callback function is invoked when setState finished and the component gets rendered. Since setState() is asynchronous the callback function is used for any post action.

Note: It is recommended to use lifecycle method rather than this callback function.
```
setState({ name: 'John' }, () => console.log('The name has updated and component re-rendered'))
```
8) What is the difference between HTML and React event handling?
Below are some of the main differences between HTML and React event handling,

In HTML, the event name should be in lowercase:
```
<button onclick='activateLasers()'>

```
Whereas in React it follows camelCase convention:

```
<button onClick={activateLasers}>
```
In HTML, you can return false to prevent default behavior:

```
<a href='#' onclick='console.log("The link was clicked."); return false;' />

```
Whereas in React you must call preventDefault() explicitly:

```
function handleClick(event) {
  event.preventDefault()
  console.log('The link was clicked.')
}

```
In HTML, you need to invoke the function by appending () Whereas in react you should not append () with the function name. 

9) How to bind methods or event handlers in JSX callbacks?
There are 3 possible ways to achieve this:

Binding in Constructor: In JavaScript classes, the methods are not bound by default. The same thing applies for React event handlers defined as class methods. 
Normally we bind them in constructor.
```
class Component extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    // ...
  }
}
```
Public class fields syntax: If you don't like to use bind approach then public class fields syntax can be used to correctly bind callbacks.
```
handleClick = () => {
  console.log('this is:', this)
}
<button onClick={this.handleClick}>
  {'Click me'}
</button>
```
Arrow functions in callbacks: You can use arrow functions directly in the callbacks.
```
<button onClick={(event) => this.handleClick(event)}>
  {'Click me'}
</button>
```
Note: If the callback is passed as prop to child components, those components might do an extra re-rendering. In those cases, it is preferred to go with .bind() or public
class fields syntax approach considering performance.

10)  How to pass a parameter to an event handler or callback?
You can use an arrow function to wrap around an event handler and pass parameters:
```
<button onClick={() => this.handleClick(id)} />
```
This is an equivalent to calling .bind:
```
<button onClick={this.handleClick.bind(this, id)} />
```
Apart from these two approaches, you can also pass arguments to a function which is defined as arrow function
```
<button onClick={this.handleClick(id)} />
handleClick = (id) => () => {
    console.log("Hello, your ticket number is", id)
};
```


  WEEK 2
  1) Why do class methods need to be bound to a class instance, and how can you avoid the need for binding?
  In JavaScript, the value of this changes depending on the current context. Within React class component methods, developers normally expect this to refer to the
  current instance of a component, so it is necessary to bind these methods to the instance. Normally this is done in the constructor—for example:
```
class SubmitButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFormSubmitted: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    this.setState({
      isFormSubmitted: true
    });
  }

  render() {
    return (
      <button onClick={this.handleSubmit}>Submit</button>
    )
  }
}
```
There are several common approaches used to avoid this binding:

1. Define Your Event Handler as an Inline Arrow Function
For example:
```
class SubmitButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFormSubmitted: false
    };
  }

  render() {
    return (
      <button onClick={() => {
        this.setState({ isFormSubmitted: true });
      }}>Submit</button>
    )
  }
}
```
Using an arrow function like this works because arrow functions do not have their own this context. Instead, this will refer to the context in which the arrow
function was defined—in this case, the current instance of SubmitButton.

2. Define Your Event Handler as an Arrow Function Assigned to a Class Field
```
class SubmitButton extends React.Component {
  state = {
    isFormSubmitted: false
  }

  handleSubmit = () => {
    this.setState({
      isFormSubmitted: true
    });
  }

  render() {
    return (
      <button onClick={this.handleSubmit}>Submit</button>
    )
  }
}
```
Note: As of September 2019, class fields are a Stage 3 ECMAScript proposal and are not yet part of the published ECMAScript specification. However, they are available
for use in both Google Chrome and Mozilla Firefox and are commonly used in React projects.


2)  What are the differences between controlled and uncontrolled components?
Controlled and uncontrolled components are just different approaches to handling input form elements in react.
![alt text](https://firebasestorage.googleapis.com/v0/b/resume-builder-19639.appspot.com/o/Screenshot%202021-03-27%20180422.png?alt=media&token=53c350cd-d6c7-4347-98a5-9b18a143fb29)

Controlled component In a controlled component, the value of the input element is controlled by React.
We store the state of the input element inside the code, and by using event-based callbacks, any changes made to the input element will be reflected in the code as well.
When a user enters data inside the input element of a controlled component, onChange function gets triggered and inside the code we check whether the value entered is valid
or invalid. If the value is valid, we change the state and re-render the input element with new value.
Example of a controlled component:
```
import React, { useState } from 'react'

export const ControlledComponentWithHooks = () => {
  const [input, setInput] = useState({})

  const handleInputChange = (e) => setInput({
    ...input,
    [e.currentTarget.name]: e.currentTarget.value
  })

  return (
    <form>
      <div>
        <label>Username:</label>
        <input type="text" name="username" onChange={handleInputChange} />
      </div>
      <div>
        <label>Password:</label>
        <input type="text" name="password" onChange={handleInputChange} />
      </div>
      <input type="submit" />
    </form>
  )

```
As one can see in the code above, the value of the input element is determined by the state of the inputValue variable. Any changes made to the input element is handled
by the updateInput function.

Uncontrolled component In an uncontrolled component, the value of the input element is handled by the DOM itself.
Input elements inside uncontrolled components work just like normal HTML input form elements.
The state of the input element is handled by the DOM. Whenever the value of the input element is changed,event-based callbacks are not called. Basically, 
react does not perform any action when there are changes made to the input element.
Whenever use enters data inside the input field, the updated data is shown directly. To access the value of the input element, we can use ref.
Example of an uncontrolled component:
```
class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.input = React.createRef();
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.input.current.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" ref={this.input} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
```
3) What is "key" prop and what is the benefit of using it in arrays of elements?
 A key is a special string attribute you should include when creating arrays of elements. Key prop helps React identify which items have changed, are added, or are removed.

Most often we use ID from our data as key:
```
const todoItems = todos.map((todo) =>
  <li key={todo.id}>
    {todo.text}
  </li>
)
```
When you don't have stable IDs for rendered items, you may use the item index as a key as a last resort:
```
const todoItems = todos.map((todo, index) =>
  <li key={index}>
    {todo.text}
  </li>
)
```
Note:

Using indexes for keys is not recommended if the order of items may change. This can negatively impact performance and may cause issues with component state.
If you extract list item as separate component then apply keys on list component instead of li tag.
There will be a warning message in the console if the key prop is not present on list items.

4) What is Lifting State Up in React?
When several components need to share the same changing data then it is recommended to lift the shared state up to their closest common ancestor. 
That means if two child components share the same data from its parent, then move the state to parent instead of maintaining local state in both of the child components.

5) What is the purpose of using super constructor with props argument?
A child class constructor cannot make use of this reference until super() method has been called. The same applies for ES6 sub-classes as well. The main reason of passing 
props parameter to super() call is to access this.props in your child constructors.

Passing props:
```
class MyComponent extends React.Component {
  constructor(props) {
    super(props)

    console.log(this.props) // prints { name: 'John', age: 42 }
  }
}
```
Not passing props:
```
class MyComponent extends React.Component {
  constructor(props) {
    super()

    console.log(this.props) // prints undefined

    // but props parameter is still available
    console.log(props) // prints { name: 'John', age: 42 }
  }

  render() {
    // no difference outside constructor
    console.log(this.props) // prints { name: 'John', age: 42 }
  }
}
```
The above code snippets reveals that this.props is different only within the constructor. It would be the same outside the constructor.
5) Why React uses className over class attribute? 
class is a keyword in JavaScript, and JSX is an extension of JavaScript. That's the principal reason why React uses className instead of class. Pass a string as the 
className prop.
```
render() {
  return <span className={'menu navigation-menu'}>{'Menu'}</span>
}
```
6) What are fragments?
It's common pattern in React which is used for a component to return multiple elements. Fragments let you group a list of children without adding extra nodes to the DOM.
```
render() {
  return (
    <React.Fragment>
      <ChildA />
      <ChildB />
      <ChildC />
    </React.Fragment>
  )
}
```
There is also a shorter syntax, but it's not supported in many tools:
```
render() {
  return (
    <>
      <ChildA />
      <ChildB />
      <ChildC />
    </>
  )
}
```
7) What does setState() do and how does it work?

setState() schedules an update to a component’s state object. When state changes, the component responds by re-rendering.
Calls to setState() are asynchronous and may be batched¹ ²
Updates to this.state do not reflect the new value immediately after calling setState()
Because of its asynchronous nature, Calling setState() by passing an object containing the current state value can result in unexpected behaviour
Passing setState() a function rather than an object allows you to access the current state value, avoiding potential unexpected behaviour caused asynchronicity

8) What is the strict Mode component and why would you use it?

StrictMode is a component included with React to provide additional visibility of potential issues in components. If the application is running in development mode, 
any issues are logged to the development console, but these warnings are not shown if the application is running in production mode.
Developers use StrictMode to find problems such as deprecated lifecycle methods and legacy patterns, to ensure that all React components follow current best practices.
StrictMode can be applied at any level of an application component hierarchy, which allows it to be adopted incrementally within a codebase.

9) What are the advantages of React?

Below are the list of main advantages of React,
Increases the application's performance with Virtual DOM.
JSX makes code easy to read and write.
It renders both on client and server side (SSR).
Easy to integrate with frameworks (Angular, Backbone) since it is only a view library.
Easy to write unit and integration tests with tools such as Jest.


10) What are the limitations of React?

Apart from the advantages, there are few limitations of React too,
React is just a view library, not a full framework.
There is a learning curve for beginners who are new to web development.
Integrating React into a traditional MVC framework requires some additional configuration.
The code complexity increases with inline templating and JSX.
Too many smaller components leading to over engineering or boilerplate.

11) What will happen if you use setState() in constructor?

When you use setState(), then apart from assigning to the object state React also re-renders the component and all its children. 
You would get error like this: Can only update a mounted or mounting component. So we need to use this.state to initialize variables inside constructor.

12) What will happen if you use props in initial state?

If the props on the component are changed without the component being refreshed, the new prop value will never be displayed because the constructor function will never
update the current state of the component. The initialization of state from props only runs when the component is first created.

The below component won't display the updated input value:
```
class MyComponent extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      records: [],
      inputValue: this.props.inputValue
    };
  }

  render() {
    return <div>{this.state.inputValue}</div>
  }
}
```

Using props inside render method will update the value:

```
class MyComponent extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      record: []
    }
  }

  render() {
    return <div>{this.props.inputValue}</div>
  }
}
```

13) Can you force a component to re-render without calling setState?

By default, when your component's state or props change, your component will re-render. If your render() method depends on some other data, you can tell React that the 
component needs re-rendering by calling forceUpdate().
```
component.forceUpdate(callback)
```
It is recommended to avoid all uses of forceUpdate() and only read from this.props and this.state in render().

14) What is the difference between super() and super(props) in React using ES6 classes?

When you want to access this.props in constructor() then you should pass props to super() method.
Using super(props):

```
class MyComponent extends React.Component {
  constructor(props) {
    super(props)
    console.log(this.props) // { name: 'John', ... }
  }
}
```

Using super():

```
class MyComponent extends React.Component {
  constructor(props) {
    super()
    console.log(this.props) // undefined
  }
}
```
Outside constructor() both will display same value for this.props.

WEEK 3
1) What are inline conditional expressions?

You can use either if statements or ternary expressions which are available from JS to conditionally render expressions. Apart from these approaches, you can also embed any 
expressions in JSX by wrapping them in curly braces and then followed by JS logical operator &&.
```
<h1>Hello!</h1>
{
    messages.length > 0 && !isLogin?
      <h2>
          You have {messages.length} unread messages.
      </h2>
      :
      <h2>
          You don't have unread messages.
      </h2>
}
```

2) What is context?

Like Redux, Context API is a solution for state management
Context is an official feature as part of React 16.3
Context has 3 main parts:
A Context object is created using React.createContext(defaultValue)
A Provider is a component that triggers all descendant consumers of itself to rerender when there is a change to its value
A Consumer is a component that subscribes to context changes
```
const {Provider, Consumer} = React.createContext(defaultValue)
```

3) Why should I use hooks?

Hooks allow for simply reuse of stateful logic without layering abstractions like HoCs and Render Props (See the question about code reuse)
Fully opt-in and backward compatible
Hooks make complicated components easier to understand by grouping related code together into functions
Hooks allow you to avoid Class components which introduce unnecessary complications.

4) What is the useState hook?

useState is a Hook that lets you add React state to function components
useState like all Hooks is a function
Argument: the initial state
Returns: Pair containing the current state and a function to update it.

5) What is the useEffect hook?

useEffect lets you perform side effects in function components
useEffect is triggered after a render
useEffect is like the combination of componentDidMount, componentDidUpdateand componentWillUnmount
Arguments: function to be called, and an array for React to check for changes in order to render

6) Here we have a class component with a state value. Each time the button in component is clicked, the count is incremented.
```
class Counter extends Component {
  state = {
    count: 0,
  };

  incrementCount = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.incrementCount}>Count: {this.state.count}</button>
      </div>
    );
  }
}
```
Rewrite this component using React hooks.
```
import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Count: {count}
      </button>
    </div>
  );
}
```

7) Understand the code below:

```
function Banner() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    console.log("Count is updated");
  });

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>State: {count}</button>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
}
```
It logs "Count is updated" message even when updating the value in textbox. How can we show the log message only when the count state is updated?
useEffect function accepts a second parameter which should be an array. Within this array, we need to pass the props or state we need to watch for. 
Only if those props or state mentioned in the array change, the effect is executed. So in our code, we add the second argument and specify only count value in the array.

Here is the udpated useEffect code:
```
useEffect(() => {
  console.log("Count is updated");
}, [count]);
```

8) What are custom hooks?

A custom hook allows you to extract some components logic into a reusable function.
A custom hook is a Javascript function that starts with use and that call can other hooks. Remember that components and hooks are functions, so we are really not creating 
any new concepts here. We are just refactoring our code into another function to make it reusable.

9) What will be the output of the following code?. Explain the reason behind your answer.

```
import React, { createContext, useContext } from 'react';

const MyContext = createContext(1);

const MyComponent = () => (
    <>
        <p>{useContext(MyContext)}</p>
        <MyContext.Provider value={2}>
            <p>{useContext(MyContext)}</p>
        </MyContext.Provider>
    </>
);

export default MyComponent;
```
<p>1</p>
<p>1</p>
UseContext accepts a context object (the value returned from React.createContext) and returns the current context value for that context. The current context value is 
determined by the value prop of the nearest <MyContext.Provider> above the calling component in the tree.
Emphasis added. The important point is that it doesn't matter where you call useContext inside the component - what matters is where that component is called 
and where it is located in the tree.

10) What is Firebase ?

Firebase is a Backend-as-a-Service — BaaS — that started as a YC11 startup and grew up into a next-generation app-development platform on Google Cloud Platform.
Firebase frees developers to focus crafting fantastic user experiences. You don’t need to manage servers. You don’t need to write APIs. Firebase is your server,
your API and your datastore, all written so generically that you can modify it to suit most needs. Yeah, you’ll occasionally need to use other bits of the Google 
Cloud for your advanced applications. Firebase can’t be everything to everybody. But it gets pretty close.


WEEK 4

1) Which component will be rendered by the following code when navigating to '/login' route ? Give explanation for your answer.

```
ReactDOM.render((
<Router>
<div>
<Route path="/" render={Home} />
<Route path="/login" render={Login} />
</div>
</Router>),
document.getElementById('root')
);
```

Both Home and Login component will be rendered. This is due to the behaviour of Router. A <Route path> matches the beginning of the URL, not the whole thing. So a <Route path="/"> will always match the URL. Router renders all the props that match with the current path.
 
 2) Study the following piece of code and suggest changes such that only the Profile component is Rendered when the path is '/dashboard/profile'.

```
import React from 'react;
import { BrowserRouter, Route } from 'react-router-dom';
const App = () => {
  return (<div>App</div>)
}
const Dashboard = () => {
  return (<div>Dashboard</div>)
}
const Profile = () => {
  return (<div>Profile</div>)
}
const Router = () => {
  return (<BrowserRouter>
      <Route path='/' component={App}></Route>
      <Route path='/dashboard/profile' component={Profile}></Route> 
      <Route path='/dashboard' component={Dashboard}></Route>
    </BrowserRouter>
  )
}
```

Add exact keyword to the route of App and Dashboard.
```
<Route path='/' exact component={App}></Route>
<Route path='/dashboard' exact component={Dashboard}></Route>
```

3) What is <Switch/> in react router.

 When a <Switch> is rendered, it searches through its children <Route> elements to find one whose path matches the current URL. When it finds one, it renders that <Route> and     ignores all others. This means that you should put <Route>s with more specific (typically longer) paths before less-specific ones.
 Switch is generally used in case of nested routing.
 

 4) Write the code for a custom hook that is used to calculate the height and width of a window. Also show its usage.

```
import { useState, useEffect } from 'react';
const useWindowSize = () => {
  const getSize = () => ({
    width: window.innerWidth,
    height: window.innerHeight
  });
  const [size, setSize] = useState(getSize);
  useEffect(() => {
    const handleResize = () => setSize(getSize());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return size;
}
```

Usage
```
const App = () => {
  const size = useWindowSize();
  return (
    <div>
      {size.width}px / {size.height}px
    </div>
  );
}
```

5) Explain the variations of useEffect 

There are 4 possible ways to call the useEffect method.

a) once, when component mounts

Usually, you would like to use it for fetching data or adding event listeners.
To run the function once, add an empty dependency list. If there are no dependencies in it, that means it will stay the same all the time, and will not call the function again.

```
function MyComponent() {
    // ...
    React.useEffect(() => {
        callMeOnlyOnce()
    }, [])
    // ...
}
```

b) On Every Component Render

To call the function on each component render, skip adding the dependency list. No list, nothing to compare against, that means run the effect every time.

```
function MyComponent() {
    // ...
    React.useEffect(() => {
        runThisFunctionOnEveryRender();
    })
    // ...
}
```

c) On Every Component Render with a Condition.

To call a function conditionally, specify the list of dependencies.
And the rule of thumb is to always add those dependencies that you are using inside the useEffect().

```
function MyComponent() {
    // ...
    React.useEffect(() => {
        runIfOneOfTheDepsWillChange(dep1, dep2);
    }, [dep1, dep2])
    // ...
}
```

d) When Component Unmounts

To clean up (remove event listeners or stop data fetching with a side effect) after the component unmounts, a return statement with a function should be added inside the useEffect() hook.

 
