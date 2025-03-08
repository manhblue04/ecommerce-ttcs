import { Route, Routes } from "react-router-dom";
import { ROUTERS } from "./utils/router";

import MasterLayout from "./pages/theme/masterLayout";
import HomePage from "./pages/users/homePage";
import ProfilePage from "./pages/users/profilePage";

const renderUserRouter = () => {
    const userRouters = [
        {
            path: ROUTERS.USER.HOME,
            component: <HomePage />
        },
        {
            path: ROUTERS.USER.PROFILE,
            component: <ProfilePage />
        },
    ]

    return (
        <MasterLayout>
            <Routes>
                {
                    userRouters.map((item, key) => (<Route key={key} path={item.path} element={item.component} />))
                }
            </Routes>
        </MasterLayout>
    )
}

function RouterCustom() {
    return renderUserRouter();
}

export default RouterCustom;