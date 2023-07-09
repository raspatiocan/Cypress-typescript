import {LoginPage} from "./pages/login_pages"
import {DashboardPage} from "./pages/dashboard_pages"
import {AddToCart} from "./pages/addToCart_pages"
import { CartPage } from './pages/cart_pages';
import { CheckoutInformation } from './pages/checkout_step_one_pages';
import { CheckoutDetail } from "./pages/checkout_step_two_pages";

let loginPage = new LoginPage()
let addToCart = new AddToCart()
let cartPage = new CartPage()
let checkoutData = new CheckoutInformation()
let checkoutDetail = new CheckoutDetail()
const URL = 'https://www.saucedemo.com/'

it('Scenario Success add Detail',  () => {
    loginPage.login(URL,'standard_user','secret_sauce')
    loginPage.assertLogin()
    addToCart.addAllProduct()
    addToCart.assertAddToCart()

    cartPage.removeCart()
    cartPage.cartCheckout()

    checkoutData.assertCheckoutSuccess()
    checkoutData.validationInput('firstname','asd','124')
    checkoutDetail.assertDetail()

})