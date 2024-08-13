import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import MovieDetailsPage from '../pages/MovieDetailsPage';
import ActorDetailsPage from '../pages/ActorDetailsPage';

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/movie/:id" element={<MovieDetailsPage />} />
                <Route path="/actor/:id" element={<ActorDetailsPage /> } />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;
