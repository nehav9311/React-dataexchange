# Data exchange between React components in event handling
This code sample demonstrates how 2 React components communicate between each other and exchange data.

Problem: Given 2 components "Statelessb" and "Content". Demonstrate how the 2 components communicate with each other indirectly.

Solution: We have 3 components in total, "Statelessb", "Counter" and "Content". "Statelessb" and "Counter" talk to each other via "Content". Statelessb is a stateless component. Content is the parent component. The parent component provides 2 properties, they are event handler and counter. We have to put the event handling logic in the parent component if we need interaction between child components. 
