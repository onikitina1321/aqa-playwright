import WelcomePage from "../pageObject/WelcomePage.js";
import SignInPopup from "../components/SignInPopup.js";
import RegistrationPopup from "../components/RegistrationPopup.js";
import {expect, test} from "@playwright/test";

test.describe('Registration', async () => {
    let page
    let welcomePage

    test.beforeEach(async ({browser}) => {
        page = await browser.newPage()
        welcomePage = new WelcomePage(page)
        await welcomePage.visit()

        await welcomePage.signInButton.click()
        const signInPopup = new SignInPopup(page)
        await signInPopup.registrationButton.click()

    })

    test('Registration with correct data', async () => {
        const registrationPopup = new RegistrationPopup(page)
        await registrationPopup.inputName.fill('Olena')
        await registrationPopup.inputLastName.fill('Nikitina')
        await registrationPopup.inputEmail.fill(registrationPopup.generateRandomEmail())
        await registrationPopup.inputPassword.fill('1321@Helena')
        await registrationPopup.inputPasswordConfirmation.fill('1321@Helena')
        await registrationPopup.registerButton.click()
        await page.waitForNavigation()
        await expect(page.url()).toBe('https://qauto.forstudy.space/panel/garage')
    })

    test('Name validation - number of symbols', async () => {

        const registrationPopup = new RegistrationPopup(page)
        await registrationPopup.inputName.fill('a')
        await registrationPopup.inputName.blur()
        await expect(registrationPopup.errorMessage).toHaveText('Name has to be from 2 to 20 characters long')
        await registrationPopup.inputName.clear()

    })


    test('Name validation - required field', async () => {


        const registrationPopup = new RegistrationPopup(page)
        await registrationPopup.inputName.fill('')
        await registrationPopup.inputName.blur()
        await expect(registrationPopup.errorMessage).toHaveText('Name required')
        await registrationPopup.inputName.clear()

    });

    test('Name validation - invalid data', async () => {

        const registrationPopup = new RegistrationPopup(page)
        await registrationPopup.inputName.fill('111')
        await registrationPopup.inputName.blur()
        await expect(registrationPopup.errorMessage).toHaveText('Name is invalid')
        await registrationPopup.inputName.clear()

    });

    test('Name validation - border colour', async () => {

        const registrationPopup = new RegistrationPopup(page)
        await registrationPopup.inputName.fill('11')
        await registrationPopup.inputName.blur()
        await expect(registrationPopup.errorMessage).toHaveCSS('border-color', 'rgb(220, 53, 69)')
        await registrationPopup.inputName.clear()

    });

    test('Last Name validation - number of symbols', async () => {

        const registrationPopup = new RegistrationPopup(page)
        await registrationPopup.inputLastName.fill('a')
        await registrationPopup.inputLastName.blur()
        await expect(registrationPopup.errorMessage).toHaveText('Last name has to be from 2 to 20 characters long')
        await registrationPopup.inputLastName.clear()

    });

    test('Last Name validation - required field', async () => {

        const registrationPopup = new RegistrationPopup(page)
        await registrationPopup.inputLastName.fill('')
        await registrationPopup.inputLastName.blur()
        await expect(registrationPopup.errorMessage).toHaveText('Last name required' )
        await registrationPopup.inputLastName.clear()
    });

    test('Last Name validation - invalid data', async () => {

        const registrationPopup = new RegistrationPopup(page)
        await registrationPopup.inputLastName.fill('111')
        await registrationPopup.inputLastName.blur()
        await expect(registrationPopup.errorMessage).toHaveText('Last name is invalid' )
        await registrationPopup.inputLastName.clear()
    });

    test('Last Name validation - border colour', async () => {

        const registrationPopup = new RegistrationPopup(page)
        await registrationPopup.inputLastName.fill('11')
        await registrationPopup.inputLastName.blur()
        await expect(registrationPopup.errorMessage).toHaveCSS('border-color', 'rgb(220, 53, 69)')
        await registrationPopup.inputLastName.clear()
    });

    test('Email validation - required field', async () => {

        const registrationPopup = new RegistrationPopup(page)
        await registrationPopup.inputEmail.fill('')
        await registrationPopup.inputEmail.blur()
        await expect(registrationPopup.errorMessage).toHaveText('Email required' )
        await registrationPopup.inputEmail.clear()
    });

    test('Email validation - invalid data', async () => {

        const registrationPopup = new RegistrationPopup(page)
        await registrationPopup.inputEmail.fill('11')
        await registrationPopup.inputEmail.blur()
        await expect(registrationPopup.errorMessage).toHaveText('Email is incorrect' )
        await registrationPopup.inputEmail.clear()


    });

    test('Email validation - border colour', async () => {

        const registrationPopup = new RegistrationPopup(page)
        await registrationPopup.inputEmail.fill('11')
        await registrationPopup.inputEmail.blur()
        await expect(registrationPopup.errorMessage).toHaveCSS('border-color', 'rgb(220, 53, 69)')
        await registrationPopup.inputEmail.clear()

    });

    test('Password validation - required field', async () => {

        const registrationPopup = new RegistrationPopup(page)
        await registrationPopup.inputPassword.fill('')
        await registrationPopup.inputPassword.blur()
        await expect(registrationPopup.errorMessage).toHaveText('Password required' )
        await registrationPopup.inputPassword.clear()

    });

    test('Password validation - data validation', async () => {

        const registrationPopup = new RegistrationPopup(page)
        await registrationPopup.inputPassword.fill('11')
        await registrationPopup.inputPassword.blur()
        await expect(registrationPopup.errorMessage).toHaveText('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter' )
        await registrationPopup.inputPassword.clear()

    });

    test('Password validation - border colour', async () => {

        const registrationPopup = new RegistrationPopup(page)
        await registrationPopup.inputPassword.fill('11')
        await registrationPopup.inputPassword.blur()
        await expect(registrationPopup.errorMessage).toHaveCSS('border-color', 'rgb(220, 53, 69)')
        await registrationPopup.inputPassword.clear()

    });
    test('Password confirmation validation - required field', async () => {

        const registrationPopup = new RegistrationPopup(page)
        await registrationPopup.inputPasswordConfirmation.fill('')
        await registrationPopup.inputPasswordConfirmation.blur()
        await expect(registrationPopup.errorMessage).toHaveText('Re-enter password required' )
        await registrationPopup.inputPasswordConfirmation.clear()

    });

    test('Password confirmation validation - invalid data', async () => {

        const registrationPopup = new RegistrationPopup(page)
        await registrationPopup.inputPasswordConfirmation.fill('11')
        await registrationPopup.inputPasswordConfirmation.blur()
        await expect(registrationPopup.errorMessage).toHaveText('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter' )
        await registrationPopup.inputPasswordConfirmation.clear()

    });
    test('Password confirmation validation - different passwords ', async () => {

        const registrationPopup = new RegistrationPopup(page)
        await registrationPopup.inputPassword.fill('1321@Helena')
        await registrationPopup.inputPasswordConfirmation.fill('1321@Helena13')
        await registrationPopup.inputPasswordConfirmation.blur()
        await expect(registrationPopup.errorMessage).toHaveText('Passwords do not match' )
        await registrationPopup.inputPasswordConfirmation.clear()
        await registrationPopup.inputPassword.clear()

    });

    test('Password confirmation validation - border colour', async () => {

        const registrationPopup = new RegistrationPopup(page)
        await registrationPopup.inputPasswordConfirmation.fill('11')
        await registrationPopup.inputPasswordConfirmation.blur()
        await expect(registrationPopup.errorMessage).toHaveCSS('border-color', 'rgb(220, 53, 69)')
        await registrationPopup.inputPasswordConfirmation.clear()

    });

    test('Register button validation', async () => {

        await expect(welcomePage.signInButton).toBeVisible();
        const registrationPopup = new RegistrationPopup(page)
        await expect(registrationPopup.registerButton).toBeDisabled()

    });
})