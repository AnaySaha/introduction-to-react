import { Outlet, useLocation, useNavgation} from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from '../../assets/Header/Header';

const Home = () => {
    const navigation = useNavigation();
    const location = useLocation();
    console.log(location);
    return (
        <div>

            <Header></Header>

            {
                navigation.state === "loading" ?
                <p>Loading...</p>:
                    <h2>This is the home componets</h2>
            <Outlet></Outlet>
            }
            <Footer></Footer>
        </div>
    );
 };

export default Home;