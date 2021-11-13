import React, { useEffect, useState } from 'react';
import { Route, Switch, useRouteMatch } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import AddProduct from '../Admin/AddProduct/AddProduct';
import MakeAdmin from '../Admin/MakeAdmin/MakeAdmin';
import ManageAllOrders from '../Admin/ManageAllOrders/ManageAllOrders';
import ManageProducts from '../Admin/ManageProducts/ManageProducts';
import MyOrders from '../User/MyOrders/MyOrders';
import Pay from '../User/Pay/Pay';
import Review from '../User/Review/Review';
import './DashBoard.css'

const DashBoard = () => {
    let { path, url } = useRouteMatch();
    const { user, logOut } = useAuth();
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        fetch(`https://thawing-forest-04721.herokuapp.com/makeAdmin/${user?.email}`)
            .then((res) => res.json())
            .then((data) => {
                if (data[0]?.role === "admin") {
                    setIsAdmin(true);
                } else {
                    setIsAdmin(false);
                }
            });
    }, [user?.email]);
    return (
        <div>





            {/* <div className="row">
                <div className="col-md-2 col-12">
                    <div className="d-flex flex-column">
                    <Link to={`${url}`}>
                                <li className="nav-item text-dark mt-5"></li>
                            </Link>

                            <Link to={`${url}/myorders`}>
                                <li className="nav-item text-dark mt-5">My Orders</li>
                            </Link>

                            <Link to={`${url}/review`}>
                                <li className="mt-5">Review</li>
                            </Link>
                            <Link to={`${url}/pay`}>
                                <li className=" mt-5">Pay</li>
                            </Link>

                            <li className="nav-item text-white">
                                <Link className="nav-link fs-5 text-dark" to="/register">
                                    Register
                                </Link>
                            </li>
                    </div>
                </div>
                <div className="col-md-10 col-12">

                </div>
            </div> */}



































<div className="container-fluid">

            
                <div className="row">
                    <div className="col-lg-2 col-md-3 col-12 bg-dark text-center p-0">
                        {/* <div className="dashboard"> */}
                            <h5>Dashboard</h5>
                            {/* <Link to={`${url}`}>
                                <li className="dashboard-menu mt-5"></li>
                            </Link> */}

                            <li className="nav-item">
                                <Link className="nav-link fs-5 text-white" to={`${url}`}>
                                    
                                </Link>
                            </li>

                            {/* <Link to={`${url}/myorders`}>
                                <li className="dashboard-menu mt-5">My Orders</li>
                            </Link> */}

                            <li className="nav-item">
                                <Link className="nav-link fs-5 text-white" to={`${url}/myorders`}>
                                    My Orders
                                </Link>
                            </li>

                            {/* <Link to={`${url}/review`}>
                                <li className="dashboard-menu mt-5">Review</li>
                            </Link> */}


                            <li className="nav-item">
                                <Link className="nav-link fs-5 text-white" to={`${url}/review`}>
                                    Review
                                </Link>
                            </li>



                            {/* <Link to={`${url}/pay`}>
                                <li className="dashboard-menu mt-5">Pay</li>
                            </Link> */}


                            <li className="nav-item">
                                <Link className="nav-link fs-5 text-white" to={`${url}/pay`}>
                                    Pay
                                </Link>
                            </li>


                            <li className="nav-item">
                                
                                <button className="text-white btn btn-outline-secondary btn-md mt-2" onClick={logOut}>Log Out</button>
                            </li>



                            <div className="admin-dashboard">
                                {/* <li className="dashboard-menu mt-5">Admin</li> */}

                                {isAdmin && (
                                    <div>
                                    {/* <Link to={`${url}/addproduct`}>
                                        <li className="dashboard-menu">Add Product</li>
                                    </Link> */}

                                    <li className="nav-item">
                                <Link className="nav-link fs-5 text-white" to={`${url}/addproduct`}>
                                    Add Product
                                </Link>
                                </li>


                                    {/* <Link to={`${url}/makeadmin`}>
                                    <li className="dashboard-menu">Make Admin</li>
                                </Link> */}


                                <li className="nav-item">
                                <Link className="nav-link fs-5 text-white" to={`${url}/makeadmin`}>
                                    Make Admin
                                </Link>
                            </li>



                                {/* <Link to={`${url}/manageproducts`}>
                                    <li className="dashboard-menu">Manage Products</li>
                                </Link> */}


                                <li className="nav-item">
                                <Link className="nav-link fs-5 text-white" to={`${url}/manageproducts`}>
                                    Manage Products
                                </Link>
                            </li>


                                {/* <Link to={`${url}/manageallorders`}>
                                    <li className="dashboard-menu">Manage All Orders</li>
                                </Link> */}




                                <li className="nav-item">
                                <Link className="nav-link fs-5 text-white mb-4" to={`${url}/manageallorders`}>
                                    Manage All Orders
                                </Link>
                            </li>
                                    </div>
                                    
                                    
                                )}
                                
                            </div>
                        {/* </div> */}
                    </div>




                    




                    <div className="col-lg-9 col-md-8 col-12 p-0 container-fluid">
                        <Switch>
                            <Route exact path={path}>
                                <MyOrders></MyOrders>
                            </Route>
                            <Route exact path={`${path}/myorders`}>
                                    <MyOrders></MyOrders>
                            </Route>
                            <Route exact path={`${path}/review`}>
                                    <Review></Review>
                            </Route>
                            <Route exact path={`${path}/pay`}>
                                    <Pay></Pay>
                            </Route>
                            <Route exact path={`${path}/addproduct`}>
                                    <AddProduct></AddProduct>
                            </Route>
                            <Route exact path={`${path}/makeadmin`}>
                                    <MakeAdmin></MakeAdmin>
                            </Route>
                            <Route exact path={`${path}/manageproducts`}>
                                    <ManageProducts></ManageProducts>
                            </Route>
                            <Route exact path={`${path}/manageallorders`}>
                                    <ManageAllOrders></ManageAllOrders>
                            </Route>
                        </Switch>
                    </div>
                </div>
            </div>
            </div>
        
    );
};

export default DashBoard;