import BasePage from "./BasePage.js";

export default class WelcomePage extends BasePage {
    constructor(page) {
        super(page, '/')
        this.signInButton = page.locator('.header_signin')
    }
}