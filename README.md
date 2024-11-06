# Gadget Heaven Shop
Discover the latest tech wonders that elevate your lifestyle. From sleek laptops to must-have accessories, we bring you the best of tech, crafted for your needs and passions. Find something extraordinary today and let your journey with cutting-edge gadgets begin!

## GitHub Link
### https://github.com/programming-hero-web-course-4/b10a8-gadget-heaven-noushinsaad

## Live Link 
### https://gadget-heaven-shop0205.surge.sh/



### add dynamic title, change banner and navbar for home and other pages , add a extra route called faq, add limitation in cart list
 

## React Fundamentals Used in This Project

1. **Components** - Reusable UI components were created to ensure a modular structure.
2. **Props** - Data is passed between components as props to customize the UI and manage functionality.
3. **State Management** - State hooks (`useState`) are used to handle dynamic data and UI changes.
4. **Effect Hook** - `useEffect` is used to fetch data from JSON files and run side effects when components are loaded.
5. **React Router** - Routing (`react-router-dom`) is implemented for navigating between pages, enabling multi-page functionality.
6. **Custom Hooks** - Custom hooks were used to manage repeated logic in components.
7. **Helmet** - For dynamic title management on each page.


## Context API

The **Context API** is used in this project for efficient data handling and state management across different components without prop-drilling. Here’s how it is utilized:

- **Global State Management**: A context provider wraps the root component, giving all nested components access to shared data, such as the navbar, cart, and wishlist, without needing to pass props through every level.
- **Cart and Wishlist Management**: By using the Context API, the cart and wishlist are managed globally, enabling users to add items from anywhere in the app and see updates in real-time. Components such as product details and the cart display all use the context for reading and updating the cart/wishlist data.
- **Dynamic Updates**: With the Context API, any changes made to the cart or wishlist (like adding or removing items) are immediately reflected in all relevant components, enhancing responsiveness and interactivity.


## Key Features

1. **Dynamic Product Display**: Displays products dynamically from a JSON data file, making it easy to update or modify product information.
2. **Add to Cart**: Users can add products to their cart, and the cart icon reflects the total count of added items.
3. **Wishlist Feature**: Users can add products to a wishlist, allowing them to save items for future consideration.
4. **Purchase Modal**: A purchase button triggers a modal with a congratulatory message, and the cart is cleared upon confirmation.
5. **Responsive Charts**: Statistics page includes a responsive chart that visualizes product price and rating information, adapting to screen sizes.
