import GaragePage from "../pageObject/GaragePage.js";

export default class SignInPopup {
    constructor(page) {
        this._page = page
        this.container = page.locator('app-signin-modal')
        this.registrationButton = this.container.locator('button', {
            hasText: 'Registration'
        })
        this.emailInput = this.container.locator('[name="email"]')
        this.passwordInput = this.container.locator('[name="password"]')
        this.submitButton = this.container.locator('.btn-primary')
    }

    async fill(email, password){
        await this.emailInput.fill(email)
        await this.passwordInput.fill(password)
    }
    async loginWithCredentials(email, password){
        await this.fill(email, password)
        await this.submitButton.click()
        return new GaragePage(this._page)
    }
}