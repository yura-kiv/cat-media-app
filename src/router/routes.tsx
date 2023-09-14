import BreedPage from "../pages/BreedPage";
import BreedsPage from "../pages/BreedsPage";
import DislikesPage from "../pages/DislikesPage";
import FavouritesPage from "../pages/FavouritesPage";
import GalleryPage from "../pages/GalleryPage";
import LikesPage from "../pages/LikesPage";
import MainPage from "../pages/MainPage";
import SearchPage from "../pages/SearchPage";
import VotingPage from "../pages/VotingPage";

export const mainPageRoute = { index: true, element: <MainPage /> };

export const routes = [
  { path: "/voting", element: <VotingPage />, exact: true },
  { path: "/breeds", element: <BreedsPage />, exact: true },
  { path: "/breeds/:id", element: <BreedPage />, exact: true },
  { path: "/gallery", element: <GalleryPage />, exact: true },
  { path: "/search/:name", element: <SearchPage />, exact: true },
  { path: "/likes", element: <LikesPage />, exact: true },
  { path: "/dislikes", element: <DislikesPage />, exact: true },
  { path: "/favourites", element: <FavouritesPage />, exact: true },
];
