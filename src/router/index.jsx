import { createBrowserRouter } from 'react-router-dom';
import Layout1 from '../layout/layout1';
import Front from '../pages/FrontPage';
import Welcome from '../components/fontPage/Welcome';
import Login from '../components/login/Login';
import SignUp from '../components/login/SignUp';
import Pages1 from '../pages/Pages1';
import Account from '../pages/Account';
import Post  from '../pages/Post'
import EditSignUp from '../components/editPage/EditSignUp';
import ViewPost from '../components/socialNetworks/ViewPost'
import AccountStart from '../components/editPage/AccountStart';



 

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout1/>,
        children: [
            {
                index: true,
                element: <Front/>,
            },
            {
                path: 'welcome',
                element: <Welcome></Welcome>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'SignUp',
                element: <SignUp />
            },
            {
                path: 'AccountStart',
                element: <AccountStart/>
            },
            {
                path: 'Account',
                element:<Account/>
            },
           
            {
                path: 'EditSignUp',
                element:<EditSignUp/>
            },
            {
                path: 'ViewPost/',
                element:<ViewPost/>
               },
            
            {
                path: 'Pages1',
                element: <Pages1 />
            },
          
           
           {
            path: 'Post',
            element:<Post />
           },
            
           {
            path: 'ViewPost/',
            element:<ViewPost/>
           }
            
           
        ],
    },
]);

export default router;