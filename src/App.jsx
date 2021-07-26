import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { uuid } from "uuidv4";

import api from "./services/api";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Cart from "./view/Cart";
import ProductDetail from "./view/Detail";
import EditProduct from "./view/Edit";
import Home from "./view/Home";

import './app.scss'

const App = () => {
  const LOCAL_STORAGE_KEY = "produtos";
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  const retrieveProducts = async () => {
    const response = await api.get('/produtos')
    return response.data
  }

  const retrieveCart = async () => {
    const response = await api.get('/carrinho')
    return response.data
  }

  const addCart = async (product) => {
    const request = {
        id: uuid(),
        ...product
    }

    const response = await api.post('/carrinho', request)
    setCart([...cart, response.data])
  }

  const updateProduct = async (product) => {
    const response = await api.put(`/produtos/${product.id}`, product);
    const { id, picture, name, description, price } = response.data;
    setProducts(
      products.map((product) => {
        return product.id === id ? { ...response.data } : product;
      })
    );
  };

  const removeProduct = async (id) => {
    await api.delete(`/carrinho/${id}`)
    const newProductList = cart.filter((product) => {
        return product.id !== id
    })

    setCart(newProductList)
  }

  useEffect(() => {
    const getAllProducts = async () => {
        const allProducts = await retrieveProducts()
        if (allProducts) setProducts(allProducts)
    }

    getAllProducts()
  }, [])

  useEffect(() => {
    const getCart = async () => {
        const allProducts = await retrieveCart()
        if (allProducts) setCart(allProducts)
    }

    getCart()
  }, [])

  useEffect(() => {

  }, [products])


  return (
    <div className="page-container">
      <Router>
        <Header />
        <Switch>
          <Route
            path="/"
            exact
            render={(props) => (
              <Home
                {...props}
                products={products}
                getProductId={addCart}
              />
            )}
          />

          <Route
            path="/editar"
            render={(props) => (
              <EditProduct
                {...props}
                updateProduct={updateProduct}
              />
            )}
          />

          <Route
            path="/carrinho"
            render={(props) => (
              <Cart
                {...props}
                products={cart}
                getProductId={removeProduct}
              />
            )}
          />

          <Route path="/produto/:id" component={ProductDetail} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;