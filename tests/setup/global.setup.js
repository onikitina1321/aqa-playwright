import {test as setup, expect} from '@playwright/test';
import WelcomePage from "../pageObject/WelcomePage.js";
import {USERS} from "../../data/users.js";
import {STORAGE_STATE_USER_PATH} from "../../data/constants/storageState.js";


    setup('login as user and save storage state', async ({page}) => {
        const welcomePage = new WelcomePage(page)
        await welcomePage.visit()
        const signInPopup = await welcomePage.clickSignInButtonAndOpenPopup()
        const garagePage = await signInPopup.loginWithCredentials(USERS.JOE_DOU.email, USERS.JOE_DOU.password)
        await expect(garagePage.addCarButton).toBeVisible()

        await page.context().storageState({
            path: STORAGE_STATE_USER_PATH
        })
    });

