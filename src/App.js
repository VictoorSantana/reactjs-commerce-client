import React from 'react';

import { BrowserRouter, Route, Switch } from "react-router-dom";

import DashboardRoute from './routes/dashboard/DashboardRoute';
import ProductFormRoute from './routes/products/product.form.route.jsx';
import ProductListRoute from './routes/products/product.list.route.jsx';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={(props) => <DashboardRoute  {...props}></DashboardRoute>}></Route>

      <Route exact path="/produtos" component={(props) => <ProductListRoute {...props}></ProductListRoute>}></Route>      
      <Route exact path="/produtos/:id/form/1" component={(props) => <ProductFormRoute {...props}></ProductFormRoute>}></Route>
      
    </Switch>
  </BrowserRouter>
);

export default Routes;