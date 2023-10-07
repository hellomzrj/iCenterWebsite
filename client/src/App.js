import { BrowserRouter, Routes, Route} from "react-router-dom";


import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Category from "./components/Category/Category";
// import SingleProduct from "./components/SingleProduct/SingleProduct";
import SingleProduct2 from "./components/SingleProduct/SingleProduct2";
import Newsletter from "./components/Footer/Newsletter/Newsletter";
import IService from "./components/iService/iService";
import Store from "./components/Store/Store";
import Stores from "./components/Stores/Stores";
import AppContext from "./utils/context";

function App() {
    return (
        <BrowserRouter>
        <AppContext>
            <Header />
                <Routes>
                    <Route path="/"element={<Home />} />
                    <Route path="/category/:id"element={<Category />} />
                    {/* <Route path="/product/:id"element={<SingleProduct />} /> */}
                    <Route path="/product/:id"element={<SingleProduct2 />} />
                    <Route path="/iservice/" element={<IService />} />
                    <Route path="/store/" element={<Store />} />
                    <Route path="/stores/" element={<Stores />} />
                </Routes>
            <Newsletter />
            <Footer />
        </AppContext>
        </BrowserRouter>
    );
}

export default App;
