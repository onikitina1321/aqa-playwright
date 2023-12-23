
export default class WelcomePage {
    constructor(page) {
        this._page = page
        this.url = '/'
        this.signInButton = page.locator('.header_signin')
    }

    async visit(){
       await this._page.goto(this.url)
    }
}