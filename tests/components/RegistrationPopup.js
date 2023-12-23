export default class RegistrationPopup {
    constructor(page) {
        this.container = page.locator('app-signup-modal')
        this.inputName = this.container.locator('#signupName')
        this.inputLastName = this.container.locator('#signupLastName')
        this.inputEmail = this.container.locator('#signupEmail')
        this.inputPassword = this.container.locator('#signupPassword')
        this.inputPasswordConfirmation = this.container.locator('#signupRepeatPassword')
        this.errorMessage = this.container.locator('div.invalid-feedback')
        this.registerButton = this.container.locator('div.modal-footer button')

        this.generateRandomEmail = () => {
            const timestamp = Date.now();
            const uniquePart = Math.random().toString(36).substring(2, 7); // Random string of 5 characters
            return `aqa-${uniquePart}-${timestamp}@test.com`;
        };
    }
}