import React from "react";
import Home from "./pages/Home";
import Auth from "./pages/Profile/Auth";
import Registration from "./pages/Profile/Registration";
import Categories from "./pages/Categories";
import Layout from "./pages/layout/Layout";
import NewCategory from "./pages/NewCategory";
import NewTodo from "./pages/NewTodo";
import Profile from "./pages/Profile/Profile";

import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="categories" element={<Categories />} />
          <Route path="categories/create" element={<NewCategory />} />
          <Route path="todos/create" element={<NewTodo />} />
          <Route path="profile" element={<Profile />} />
        </Route>
        <Route path="/login" element={<Auth />} />
        <Route path="/signup" element={<Registration />} />
      </Routes>
    </>
  );
};

export default App;
