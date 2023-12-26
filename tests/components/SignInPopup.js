
export default class SignInPopup {
    constructor(page) {
        this.container = page.locator('app-signin-modal')
        this.registrationButton = this.container.locator('button', {
            hasText: 'Registration'
        })
    }
}