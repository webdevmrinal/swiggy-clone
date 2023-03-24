import Header from "./Header";
import Body from "./Body";
import BodyCarousel from "./BodyCarousel";
import { RESTAURANT_LIST_URL } from "./utils/constants";
import { useEffect } from "react";
import { useDispatch} from "react-redux";
import { updateRestaurantList } from "./utils/restaurantListSlice";

function App() {

    const dispatch = useDispatch();

    async function fetchRestaurants() {
        const data = await fetch(RESTAURANT_LIST_URL);
        const json = await data.json();
        dispatch(updateRestaurantList(json.data));
    }

    useEffect(() => {
      fetchRestaurants();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="w-screen">
            {/* Header Content Goes Here */}
            <div className="w-full shadow-md bg-white">
                <Header />
            </div>
            {/* Carousel Content Goes Here */}
            <div className="w-full bg-slate-900">
                <BodyCarousel />
            </div>
            {/* Body Content Goes Here */}
            <div className="w-full bg-gray-100">
                <Body />
            </div>
        </div>
    );
}

export default App;
