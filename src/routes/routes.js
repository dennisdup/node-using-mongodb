import { addNewProduct } from "../controllers/controllers"

const routes = (app) => {
    app.route('/products')
        .post(addNewProduct);
}

export default routes;