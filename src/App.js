import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './pages/Home/Home/Home';
import Header from './pages/Shared/Header/Header';
import Dashboard from './pages/Dashboard/Dashboard/Dashboard';
import AuthProvider from './AuthProvider/AuthProvider';
import Login from './pages/Shared/Login/Login/Login';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import AddCart from './pages/Order/AddCart/AddCart';
import OrderConfirm from './pages/Order/OrderConfirm/OrderConfirm';
import MyOrder from './pages/Dashboard/MyOrder/MyOrder';
import Payment from './pages/Dashboard/Pay/Payment';
import Review from './pages/Home/Review/Review';
import myReview from './pages/Dashboard/Review/myReview';
import Registration from './pages/Shared/Login/Registration/Registration';
import ExploreProduct from './pages/Shared/ExploreProduct/ExploreProduct';
import AdminDashboard from './pages/Admin/Dashboard/AdminDashboard/AdminDashboard';
import Footer from './pages/Shared/Footer/Footer';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
        <Header/>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path="/register">
              <Registration></Registration>
            </Route>
            <Route path="/explore">
              <ExploreProduct></ExploreProduct>
            </Route>
          <Route path='/dashboard'>
            <Dashboard></Dashboard>
            </Route>
            <PrivateRoute path='/addCart/:_id'>
              <AddCart></AddCart>
            </PrivateRoute>
            <Route path="/orderConfirm/:_id">
              <OrderConfirm></OrderConfirm>
            </Route>
            <Route path="/myOrder">
              <MyOrder></MyOrder>
            </Route>
            <Route path="/payment">
              <Payment></Payment>
            </Route>
            <Route path='/myReview'>
              <myReview></myReview>
            </Route>
            <Route path='/admin'>
                <AdminDashboard></AdminDashboard>
            </Route>
          </Switch>
          <Footer></Footer>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
