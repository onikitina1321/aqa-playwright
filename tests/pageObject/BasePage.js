export default class BasePage {
    constructor(page, url) {
        this._page = page
        this._url = url
    }

    async visit(){
        await this._page.goto(this._url)
    }

    get page() {
        return this._page
    }
}



