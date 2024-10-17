import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/home-page";
import RegisterPage from "./pages/register-page";
import LoginPage from "./pages/login-page";
import CreateListing from "./pages/create-listing";
import ListingDetails from "./pages/listing-details";
import TripList from "./pages/trip-list";
import WishList from "./pages/wish-list";
import PropertyList from "./pages/property-list";
import ReservationList from "./pages/reservation-list";
import CategoryPage from "./pages/category-page";
import SearchPage from "./pages/search-page";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/create-listing" element={<CreateListing />} />
          <Route path="/properties/:listingId" element={<ListingDetails />} />
          <Route path="/properties/category/:category" element={<CategoryPage />} />
          <Route path="/properties/search/:search" element={<SearchPage />} />
          <Route path="/:userId/trips" element={<TripList />} />
          <Route path="/:userId/wishList" element={<WishList />} />
          <Route path="/:userId/properties" element={<PropertyList />} />
          <Route path="/:userId/reservations" element={<ReservationList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;