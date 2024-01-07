import BasePage from "./BasePage.js";
import SignInPopup from "../components/SignInPopup.js";

export default class WelcomePage extends BasePage {
    constructor(page) {
        super(page, '/')
        this.signInButton = page.locator('.header_signin')
    }

async clickSignInButtonAndOpenPopup(){
    await this.signInButton.click()
    return new SignInPopup(this._page)
}
}