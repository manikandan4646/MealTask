import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import MealCheckout from './components/MealCheckout';
import MealDetails from './components/MealDetails';
import MealsList from './components/MealsList';
import OrderDetails from './components/OrderDetails';

const App = () => {

    const PageNotFound = () => {
        return (
            <div>Page not Found</div>
        )
    }

    const router = createBrowserRouter([
        {
            path: "/",
            element: <MealsList />
        },
        {
            path: "/meal-details",
            element: <MealDetails />
        },
        {
            path: "/checkout",
            element: <MealCheckout />
        },
        {
            path: "/order-details",
            element: <OrderDetails/>
        },
        {
            path: '*',
            element: <PageNotFound />,
        },
    ]);
   
    return (
        <RouterProvider router={router} />
    );
}

export default App;
