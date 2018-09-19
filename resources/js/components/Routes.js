import React from 'react';
import Loadable from 'react-loadable';
import Users from './content/Users';
import Settings from './content/Settings';
import Products from './content/Products';
import Home from './content/Home';


const routes = [
    { path: '/home', exact:true, name:"Home",icon:"icon-home4", component:Home },
    { path: '/users',exact:true, name:"Users",icon:"icon-home4", component:Users },
    { path: '/settings',exact:true, name:"Settings",icon:"icon-home4", component:Settings },
    { path: '/products',exact:true, name:"Products",icon:"icon-home4", component:Products }
];

export default routes;
