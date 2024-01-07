
import {test as base} from '@playwright/test'
import {USERS} from "../data/users.js";
import {STORAGE_STATE_USER_PATH} from "../data/constants/storageState.js";
import GaragePage from "../tests/pageObject/GaragePage.js";
import WelcomePage from "../tests/pageObject/WelcomePage.js";

export const test = base.extend({
    userGaragePageWithStorage: async({browser}, use) =>{
        const ctx = await browser.newContext({
            storageState: STORAGE_STATE_USER_PATH
        })
        const page = await ctx.newPage()
        const garagePage = new GaragePage(page)
        await garagePage.visit()

        // Usage
        await   use(garagePage)

        // Clean up
        await ctx.close()
    },
})