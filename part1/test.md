## React interview questions

1. What is state and props in reactjs?
    State is used to store data of the react component to be rendered which can be altered over time 

    Props are data that are passed to components, usually immutable and cannot be updated from the passed component. 
2. What is high order component? How do you use it?
    HOC allows you to add functionality to a component without modifying the component itself. By taking component as an argument and returning a new component that wraps the original component.

    This allows you to reuse component that need to have extra logic before getting rendered such as a UI library

```js
    const withLogger = (WrappedComponent) => {
        const WithLogger = (props) => {
            useEffect(() => {
            // Log data on component mount
            console.log(`Component ${WrappedComponent.name} mounted.`);
            return () => {
                // Log data on component unmount
                console.log(`Component ${WrappedComponent.name} unmounted.`);
            };
            }, []);

            useEffect(() => {
            // Log data on component update
            console.log(`Component ${WrappedComponent.name} updated.`);
            });

            return <WrappedComponent {...props} />;
        };

        WithLogger.displayName = `withLogger(${WrappedComponent.displayName || WrappedComponent.name})`;
        return WithLogger;
    };

```
3. What is context API? What are the benefits of it?

    Context is one way to prevent prop drilling which is passing the prop over and over again matching the closes `Provider` above the tree. 
    Real word cases are theming, user-authentication and internationalization


4. How to assign and change the value of state in a component?

    `const [text, setText] = useState('initialize')`

    useState is a react hook that accepts a parameter that is used to initialized the state. This returns an array containing the current state value and a callback to modify the state

5. Could you explain the life-cycle of a react component?

    Mounting is the phase when the component is mounted on the DOM and then rendered on the webpage. We call these methods in the following order when an element is being created and inserted into the DOM:
    ```
    componentWillMount() - This function is called right before we mount the component on the DOM.
    render() - This function mounts the component on the browser. 
    componentDidMount() - Called after the component is mounted on the browser
    ```
    Updating We call the methods in this phase whenever State or Props in a component get updated. This allows the React application to “react” to user inputs, such as clicks and pressing keys on the keyboard, and ultimately create a responsive web user interface. These methods are called in the following order to carry on the update of the component:
    ```
    componentWillReceiveProps() - function before a component gets its props reassigned. 
    setState() - This function can be called explicitly at any moment. This function is used to update the state of a component.
    shouldComponentUpdate() - This function is called before rendering a component and tells React whether it should update the component on receiving new props or state
    componentWillUpdate() - Called before a component's update cycle starts
    render() - This function mounts the component on the browser. 
    componentDidUpdate() - after a component has been updated and re-rendered
    ```
    Unmounting - This is the last phase of the life-cycle of the component where the component is unmounted from the DOM

    ```
    componentWillUnmount() - once before we remove the component from the page and this marks the end of the life-cycle.
    ```
6. What is fragment in react?
    Used when there are multiple nodes that needs to be rendered on the DOM and the wrapping tag is unnecessary.
    ```js
    <></>
    ```
7. What is ref in react?
    Refs provide a way to access dom nodes, they are commonly assigned to an instance property when a component is created.

8. What is container component? What is presentational component?
    Container components are concerned with how things work and contain behavioral data. 

    They are often serve as data sources of truth.

    Presentational components are concerned with how things look and receive data from props as well as callbacks. 

    Usually dont contain state but only if its concerned with the UI

9. How to pass a function to a component?
    Pass event handlers and other functions as props to child components
10. What is portal?
    Portals provide a first-class way to render children into a DOM node that exists outside the DOM hierarchy of the parent component.
    I have not used portals personally but they may have use cases on modals
11. How to share state between parent component and child component? How to share state between sibling components?
    Parent to children are passed by using props on the child components, child components passed data by using callbacks that are also on props.
    Sibling components state are usually by context or by using a state management library.

