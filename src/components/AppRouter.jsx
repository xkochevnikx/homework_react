import React from 'react';
import { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import { privateRoutes, publicRoutes } from '../components/routers/Routers';
import { authContext } from '../context/AuthContextProvider';

const AppRouter = () => {
    const { isAuth } = useContext(authContext);

    //? тут происходит следующее - я создал отдельный компонент routers в котором создал файл в виде возвращаемого  массива с объектами в которых данные на каждый route. дальше я импортировал сюда этот массив (оказываетс можно и так) и перебором динамичски насоздавал путей. это нужно для того что бы не захламлять эту главную. логика по доступу будет тоже в том массиве.
    return (
        <>
            {isAuth ? (
                <Routes>
                    {privateRoutes.map((route) => (
                        <Route
                            key={route.path}
                            element={route.component}
                            path={route.path}
                            exact={route.exact}
                        />
                    ))}
                </Routes>
            ) : (
                <Routes>
                    {publicRoutes.map((route) => (
                        <Route
                            key={route.path}
                            element={route.component}
                            path={route.path}
                            exact={route.exact}
                        />
                    ))}
                </Routes>
            )}
        </>
    );
};

export default AppRouter;
