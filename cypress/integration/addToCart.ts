import {LoginPage} from "./pages/login_pages"
import {DashboardPage} from "./pages/dashboard_pages"
import {AddToCart} from "./pages/addToCart_pages"


let loginPage = new LoginPage()
let dashboardPage = new DashboardPage()
let addToCart = new AddToCart()

const URL = 'https://www.saucedemo.com/'

it('Scenario Success Add All Product', () => {
    loginPage.login(URL,'standard_user','secret_sauce')
    loginPage.assertLogin()

    addToCart.addAllProduct()
    addToCart.assertAddToCart()
})




