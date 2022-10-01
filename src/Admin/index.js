import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import NotFound from "../components/NotFound/404";
import Home from "./Routes/Home";
import HostelOwners from "./Routes/ViewOwners";
import  RegisterHostelOwners from "./Routes/RegisterOwners";
import Hostels from "./Routes/Hostels"
import SideBar from "./Components/SideBar/SideBar";
import Login from "../components/Login/Login";
import Bookings from "./Routes/Bookings";
import PendingHostel from "./Routes/PendingHostel";
import AddHostel from "./Routes/AddHostel";

export const Index = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/sidebar" element={<SideBar />} />
        <Route path="/" element={<Home />} />
        {/* <Route path="/table" element={<StateTable />} /> */}
        <Route path="/addhostel" element={<AddHostel />} />
        <Route path="/hostels" element={<Hostels />} />
        <Route path="/hostelowners" element={<HostelOwners />} />
        <Route path="/bookings" element={<Bookings />} />
        <Route path="/pendinghostels" element={<PendingHostel />} />
        <Route
          path="/reghostelowners"
          element={<RegisterHostelOwners />} ></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

