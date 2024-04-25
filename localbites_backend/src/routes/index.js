import { createNewMenuRoute } from "./createNewMenu";
import { getAllRestaurantsRoute } from "./getAllRestaurants";
import { getRestaurantsMenuRoute } from "./getMenu";
import { getRestaurantsProfileRoute } from "./getRestautrantProfile";
import { getAllOffersRoute } from "./offersPage";

export default [
    getAllRestaurantsRoute,
    getRestaurantsProfileRoute,
    getRestaurantsMenuRoute, 
    createNewMenuRoute, 
    getAllOffersRoute
];