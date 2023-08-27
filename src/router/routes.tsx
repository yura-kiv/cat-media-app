import BreedsPage from "../pages/BreedsPage";
import GalleryPage from "../pages/GalleryPage";
import MainPage from "../pages/MainPage";
import VotingPage from "../pages/VotingPage";

export const mainPageRoute = { index: true, element: <MainPage /> };

export const routes = [
  { path: "/voting", element: <VotingPage />, exact: true },
  { path: "/breeds", element: <BreedsPage />, exact: true },
  { path: "/gallery", element: <GalleryPage />, exact: true },
];
