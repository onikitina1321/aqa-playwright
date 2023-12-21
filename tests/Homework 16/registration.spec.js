import {expect, test} from "@playwright/test";

test.describe.only('Registration', async () => {
    let page

    test.beforeAll(async ({browser}) => {
        const ctx = await browser.newContext()
        page = await ctx.newPage()
        await page.goto('/')
    })

    test.beforeEach(async () => {
        await page.goto('/')
    })


    test('Registration with correct data', async () => {
        const loginBtn = page.locator('button', {
            hasText: 'Sign in'
        })
        const registrationBtn = page.locator('button', {
            hasText: 'Registration'
        })

        const generateRandomEmail = () => {
            const timestamp = Date.now();
            const uniquePart = Math.random().toString(36).substring(2, 7); // Random string of 5 characters
            return `aqa-${uniquePart}-${timestamp}@test.com`;
        };

        await expect(loginBtn).toBeVisible();

        await loginBtn.click();
        await registrationBtn.click();

        const inputName = page.locator('#signupName')
        await inputName.fill('Olena')

        const inputLastName = page.locator('#signupLastName')
        await inputLastName.fill('Nikitina')

        const email = page.locator('#signupEmail')
        const generatedEmail = generateRandomEmail();
        await email.fill(generatedEmail)

        const password = page.locator('#signupPassword')
        await password.fill('1321@Helena')

        const passwordConfirmation = page.locator('#signupRepeatPassword')
        await passwordConfirmation.fill('1321@Helena')

        const registerBtn = page.locator('button', {
            hasText: 'Register'
        })
        await registerBtn.click()


});
    test('Name validation', async () => {

        const loginBtn = page.locator('button', {
            hasText: 'Sign in'
        })
        const registrationBtn = page.locator('button', {
            hasText: 'Registration'
        })

        await loginBtn.click();
        await registrationBtn.click();

        const inputName = page.locator('#signupName')
        const error = page.locator('div.invalid-feedback')

        await inputName.fill('O')
        await inputName.blur()
        await expect(error).toHaveText('Name has to be from 2 to 20 characters long')
        await inputName.clear()

        await inputName.fill('')
        await inputName.blur()
        await expect(error).toHaveText('Name required')
        await inputName.clear()

        await inputName.fill('111')
        await inputName.blur()
        await expect(error).toHaveText('Name is invalid')
        await inputName.clear()

        await inputName.fill('111')
        await inputName.blur()
        await page.waitForTimeout(100);
        const borderColor = await inputName.evaluate((element) => {
            return window.getComputedStyle(element).borderColor;
        })
        await expect(borderColor).toBe('rgb(220, 53, 69)')
        await inputName.clear()


    });

    test('Last Name validation', async () => {

        const loginBtn = page.locator('button', {
            hasText: 'Sign in'
        })
        const registrationBtn = page.locator('button', {
            hasText: 'Registration'
        })

        await loginBtn.click();
        await registrationBtn.click();

        const inputLastName = page.locator('#signupLastName')
        const error = page.locator('div.invalid-feedback')

        await inputLastName.fill('O')
        await inputLastName.blur()
        await expect(error).toHaveText('Last name has to be from 2 to 20 characters long')
        await inputLastName.clear()

        await inputLastName.fill('')
        await inputLastName.blur()
        await expect(error).toHaveText('Last name required')
        await inputLastName.clear()

        await inputLastName.fill('111')
        await inputLastName.blur()
        await expect(error).toHaveText('Last name is invalid')
        await inputLastName.clear()

        await inputLastName.fill('111')
        await inputLastName.blur()
        await page.waitForTimeout(100);
        const borderColor = await inputLastName.evaluate((element) => {
            return window.getComputedStyle(element).borderColor;
        })
        await expect(borderColor).toBe('rgb(220, 53, 69)')
        await inputLastName.clear()


    });

    test('Email validation', async () => {

        const loginBtn = page.locator('button', {
            hasText: 'Sign in'
        })
        const registrationBtn = page.locator('button', {
            hasText: 'Registration'
        })

        await loginBtn.click();
        await registrationBtn.click();

        const email = page.locator('#signupEmail')
        const error = page.locator('div.invalid-feedback')

        await email.fill('')
        await email.blur()
        await expect(error).toHaveText('Email required')
        await email.clear()

        await email.fill('111')
        await email.blur()
        await expect(error).toHaveText('Email is incorrect')
        await email.clear()

        await email.fill('111')
        await email.blur()
        await page.waitForTimeout(100);
        const borderColor = await email.evaluate((element) => {
            return window.getComputedStyle(element).borderColor;
        })
        await expect(borderColor).toBe('rgb(220, 53, 69)')
        await email.clear()


    });
    test('Password validation', async () => {

        const loginBtn = page.locator('button', {
            hasText: 'Sign in'
        })
        const registrationBtn = page.locator('button', {
            hasText: 'Registration'
        })

        await loginBtn.click();
        await registrationBtn.click();

        const password = page.locator('#signupPassword')
        const error = page.locator('div.invalid-feedback')

        await password.fill('')
        await password.blur()
        await expect(error).toHaveText('Password required')
        await password.clear()


        await password.fill('111')
        await password.blur()
        await expect(error).toHaveText('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter')
        await password.clear()


        await password.fill('111')
        await password.blur()
        await page.waitForTimeout(100);
        const borderColor1 = await password.evaluate((element) => {
            return window.getComputedStyle(element).borderColor;
        })
        await expect(borderColor1).toBe('rgb(220, 53, 69)')
        await password.clear()



    });
    test('Password confirmation validation', async () => {

        const loginBtn = page.locator('button', {
            hasText: 'Sign in'
        })
        const registrationBtn = page.locator('button', {
            hasText: 'Registration'
        })

        await loginBtn.click();
        await registrationBtn.click();

        const password = page.locator('#signupPassword')
        const passwordConfirmation = page.locator('#signupRepeatPassword')
        const error = page.locator('div.invalid-feedback')


        await passwordConfirmation.fill('')
        await passwordConfirmation.blur()
        await expect(error).toHaveText('Re-enter password required')
        await passwordConfirmation.clear()


        await passwordConfirmation.fill('111')
        await passwordConfirmation.blur()
        await expect(error).toHaveText('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter')
        await passwordConfirmation.clear()


        await password.fill('1321@Helena13')
        await passwordConfirmation.fill('1321@Helena')
        await passwordConfirmation.blur()
        await expect(error).toHaveText('Passwords do not match')
        await passwordConfirmation.clear()
        await password.clear()


        await passwordConfirmation.fill('111')
        await passwordConfirmation.blur()
        await page.waitForTimeout(100);
        const borderColor2 = await passwordConfirmation.evaluate((element) => {
            return window.getComputedStyle(element).borderColor;
        })
        await expect(borderColor2).toBe('rgb(220, 53, 69)')
        await passwordConfirmation.clear()


    });

    test('Register button validation', async () => {
        const loginBtn = page.locator('button', {
            hasText: 'Sign in'
        })
        const registrationBtn = page.locator('button', {
            hasText: 'Registration'
        })
        const registerBtn = page.locator('button', {
            hasText: 'Register'
        })

        await expect(loginBtn).toBeVisible();

        await loginBtn.click();
        await registrationBtn.click();

        await expect(registerBtn).toBeDisabled()

    });
})