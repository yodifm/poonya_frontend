import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Route, Switch } from "react-router-dom";

export const ProtectedRoute = ({ component: Component, ...rest }) => {
    const [loading, setLoading] = useState(true);

    const profileResponse =null
    // const profileResponse = useSelector(
    //     (state) => state.userDetails.userProfile
    // );

    return (
        <Route
            {...rest}
            render={(props) => {
                // return JSON.stringify(profileResponse)
                // return <p>HALO</p>
                if(localStorage.getItem("access_token")){
                    return <Component {...props} {...rest} />;
                    if (profileResponse && profileResponse.success) {
                        // return "TEST"
                    } else if (profileResponse == "loading...") {
                        return <p>{profileResponse}</p>;
                    }else{
                        <Switch>
                            <Redirect to={"/LoginPage"}/>
                        </Switch>
                    }
                }

                return (
                    <Switch>
                        <Redirect to={"/LoginPage"}/>
                    </Switch>
                );
            }}
        />
    );
};