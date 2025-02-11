import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const UserProtectWrapper = ({ children }) => {
    const token = localStorage.getItem("token");
    const navigate = useNavigate();

    useEffect(() => {
        if (!token || token === "undefined") {
            navigate("/login");
        }
    }, [token]); // Runs when token changes

    return <>{children}</>;
};

export default UserProtectWrapper;
