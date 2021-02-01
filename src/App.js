import React from 'react';
import Header from "./components/Header";
import Products from "./components/pages/Products";
import newProducts from "./components/pages/newProducts";
import editProducts from "./components/pages/editProduct";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import {Provider} from 'react-redux';
import store from  './store';


function App() {
    return (
        <Router>
            <Provider store={store}>
            <Header/>
            <div className="container mt-5">
                <Switch>
                    <Route exact path="/" component={Products}/>
                    <Route exact path="/products/new" component={newProducts}/>
                    <Route exact path="/products/edit/:id" component={editProducts}/>
                </Switch>
            </div>
            </Provider>
        </Router>
    );
}

export default App;
