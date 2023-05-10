import Home from "../pages/Main/Home";
import AdminEmployees from "../pages/Admin/AdminEmployees";
import Mainroot from "../pages/Main/Mainroot";
import Error from "../pages/Main/Error"
import Adminroot from "../pages/Admin/Adminroot";
import AddEmployee from "../pages/Admin/AddEmployee"
import Employees from "../pages/Main/Employees";

export const ROUTES = [
    {
        //MAIN ROOT-user side
        path: '/',
        element: <Mainroot />,
        children: [
            {
                path: 'home',
                element: <Home />
            },
            {
                path: '',
                element: <Home />
            },

            {
                path: 'employees',
                element: <Employees />
            },
            {
                path: '*',
                element: <Error />
            }
        ]
    },
    // ADMIN ROOT-admin side
{
    path:'/admin',
    element:<Adminroot/>,
    children:[
      
        {
            path:'',
            element:<AdminEmployees/>
        },
        {
            path:'addemployees',
            element:<AddEmployee/>
        }
    ]

}

]