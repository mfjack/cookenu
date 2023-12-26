import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from '../components/Header';
import AddRecipe from '../pages/AddRecipe';
import Feed from '../pages/Feed';
import Login from '../pages/Login';
import RecipeDetail from '../pages/RecipeDetail';
import SignUp from '../pages/SignUp';

export const Router = () => {
    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path='/' element={<Feed />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/addRecipe' element={<AddRecipe />} />
                    <Route path='/recipe/:id' element={<RecipeDetail />} />
                    <Route path='/signUp' element={<SignUp />} />
                </Routes>
            </BrowserRouter>
        </>
    );
};
