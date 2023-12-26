export const goToFeed = (navigator) => {
    navigator('/');
};

export const goToLogin = (navigator) => {
    navigator('/login');
};

export const goToAddRecipe = (navigator) => {
    navigator('/addRecipe');
};

export const goToRecipeDetail = (navigator, id) => {
    navigator(`/recipe/${id}`);
};

export const goToSignUp = (navigator) => {
    navigator('/signup');
};
