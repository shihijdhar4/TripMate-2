import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';


// TripMate Imports
import TripMateLayout from './tripmate/layout/TripMateLayout';
import TripMateHome from './tripmate/pages/TripMateHome';
import TripMateListings from './tripmate/pages/TripMateListings';
import TripMateDetails from './tripmate/pages/TripMateDetails';
import TripMateMyTrips from './tripmate/pages/TripMateMyTrips';
import TripMateAddTrip from './tripmate/pages/TripMateAddTrip';

function App() {
  return (
    <BrowserRouter>
      {/* Global Toast Notifications */}
      <Toaster position="top-right" />

      <Routes>
        {/* TripMate Application Routes */}
        <Route path="/tripmate" element={<TripMateLayout />}>
          <Route index element={<TripMateHome />} />
          <Route path="listings" element={<TripMateListings />} />
          <Route path="trip/:id" element={<TripMateDetails />} />
          <Route path="my-trips" element={<TripMateMyTrips />} />
          <Route path="add-trip" element={<TripMateAddTrip />} />
        </Route>

        {/* Redirect to TripMate by default */}
        <Route path="*" element={<Navigate to="/tripmate" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;