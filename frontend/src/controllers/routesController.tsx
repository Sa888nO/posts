import { Route, BrowserRouter, Navigate, Routes } from 'react-router-dom';
import CommonLayout from '../layouts/commonLayout/commonLayout';
import Posts from '../pages/posts/posts';
import CreatePosts from '../pages/createPosts/createPosts';
import routes from '../routes/routes';

const RoutesController = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigate to={routes.posts} />} />
                <Route element={<CommonLayout />}>
                    <Route path={routes.posts} element={<Posts />} />
                    <Route
                        path={routes.createPosts}
                        element={<CreatePosts />}
                    />
                </Route>
                <Route path="*" element={404} />
            </Routes>
        </BrowserRouter>
    );
};

export default RoutesController;
