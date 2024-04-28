import { test, expect } from "@playwright/test";
import { faker } from '@faker-js/faker';
import RegistrationPage from "../../pageObjects/RegistrationPage";


test.describe('Registration form test', () => {
  let registrationPage;

  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.locator('.btn-primary').click();
    await expect(page.locator('.modal-content')).toBeVisible();
    registrationPage = new RegistrationPage(page);
  });

  test('Positive', async ({ page }) => {
    const signupName = faker.person.firstName();
    const signupLastName = faker.person.lastName();
    const signupEmail = faker.internet.email();
    const signupPassword = faker.internet.password();

    await registrationPage.fillRegistrationForm(signupName, signupLastName, signupEmail, signupPassword);

    const name = await page.locator('#signupName').evaluate(element => element.value);
    expect(name).toBe(signupName);

    const lastName = await page.locator('#signupLastName').evaluate(element => element.value);
    expect(lastName).toBe(signupLastName);

    const email = await page.locator('#signupEmail').evaluate(element => element.value);
    expect(email).toBe(signupEmail);

    const passwordValue = await page.locator('#signupPassword').evaluate(element => element.value);
    expect(passwordValue).toBe(signupPassword);

    await registrationPage.clickRegisterButton();
    await expect(page).toHaveURL('/panel/garage');
  });

  test('Empty fields', async ({ page }) => {
    // await registrationPage.clickRegisterButton();
    await registrationPage.triggerWarningMessagesForFields();
    await registrationPage.validateEmptyFieldsFeedback();
  });

  test('Check red border', async ({ page }) => {
    await registrationPage.triggerWarningMessagesForFields();
    await registrationPage.validateRedBorder();
    // await registrationPage.clickRegisterButton();
    // await registrationPage.validateRedBorder();
  });
});

export {};


// import { test, expect } from "@playwright/test";
// import { faker } from '@faker-js/faker';
// import RegistrationPage from "../../pageObjects/RegistrationPage"; // Adjust import path

// test.describe('Registration form test', () => {
//   let registrationPage;

//   test.beforeEach(async ({ page }) => { // Use 'page' provided as a parameter
//     await page.goto('/');
//     await page.locator('.btn-primary').click();
//     await expect(page.locator('.modal-content')).toBeVisible();
//     registrationPage = new RegistrationPage(page);
//   });

//   test('Positive', async ({ page }) => { // Use 'page' provided as a parameter
//     const signupName = faker.person.firstName();
//     const signupLastName = faker.person.lastName();
//     const signupEmail = faker.internet.email();
//     const signupPassword = faker.internet.password();

//     await registrationPage.fillRegistrationForm(signupName, signupLastName, signupEmail, signupPassword);

//     const name = await page.locator('#signupName').evaluate(element => element.value);
//     expect(name).toBe(signupName);

//     const lastName = await page.locator('#signupLastName').evaluate(element => element.value);
//     expect(lastName).toBe(signupLastName);

//     const email = await page.locator('#signupEmail').evaluate(element => element.value);
//     expect(email).toBe(signupEmail);

//     const passwordValue = await page.locator('#signupPassword').evaluate(element => element.value);
//     expect(passwordValue).toBe(signupPassword);

//     await registrationPage.clickRegisterButton();
//     await expect(page).toHaveURL('/panel/garage');
//   });
// });

// import { test, expect } from "@playwright/test";
// import { faker } from '@faker-js/faker';
// import RegistrationPage from "../../pageObjects/RegistrationPage";


// test.describe('Registration form test', () => {
//   let page;
//   let registrationPage;

//   test.beforeEach(async ({ page }) => {
//     await page.goto('/');
//     await page.locator('.btn-primary').click();
//     await expect(page.locator('.modal-content')).toBeVisible();
//     registrationPage = new RegistrationPage(page);
//   });

//   test('Positive', async () => {
//     const signupName = faker.person.firstName();
//     const signupLastName = faker.person.lastName();
//     const signupEmail = faker.internet.email();
//     const signupPassword = faker.internet.password();

//     await registrationPage.fillRegistrationForm(signupName, signupLastName, signupEmail, signupPassword);

//     const name = await page.locator('#signupName').evaluate(element => element.value);
//     expect(name).toBe(signupName);

//     const lastName = await page.locator('#signupLastName').evaluate(element => element.value);
//     expect(lastName).toBe(signupLastName);

//     const email = await page.locator('#signupEmail').evaluate(element => element.value);
//     expect(email).toBe(signupEmail);

//     const passwordValue = await page.locator('#signupPassword').evaluate(element => element.value);
//     expect(passwordValue).toBe(signupPassword);

//     await registrationPage.clickRegisterButton();
//     await expect(page).toHaveURL('/panel/garage');
//   });

//   test('Empty fields', async () => {
//     await registrationPage.clickRegisterButton();
//     await registrationPage.validateEmptyFieldsFeedback();
//   });

//   test('Check red border', async () => {
//     await registrationPage.validateRedBorder();
//     await registrationPage.clickRegisterButton();
//     await registrationPage.validateRedBorder();
//   });
// });


// const signupName = faker.person.firstName();
// const signupLastName = faker.person.lastName();
// const signupEmail = faker.internet.email();
// const signupPassword = faker.internet.password();


// test.describe('Registration form test', () => {

//     test.beforeEach(async ({page})=>{
//         await page.goto("/");
//         await page.locator(".btn-primary").click();
//         await expect(page.locator(".modal-content")).toBeVisible();
//     })

//   test('Positive', async ({ page }) => {
//     await page.locator("#signupName").fill(signupName);
//     await page.locator("#signupLastName").fill(signupLastName);
//     await page.locator("#signupEmail").fill(signupEmail);
//     await page.locator("#signupPassword").fill(signupPassword);
//     await page.locator("#signupRepeatPassword").fill(signupPassword);


//     const name = await page.locator("#signupName").evaluate(element => element.value);
//     expect(name).toBe(signupName);

//     const lastName = await page.locator("#signupLastName").evaluate(element => element.value);
//     expect(lastName).toBe(signupLastName);

//     const email = await page.locator("#signupEmail").evaluate(element => element.value);
//     expect(email).toBe(signupEmail);

//     const passwordValue = await page.locator("#signupPassword").evaluate(element => element.value);
//     expect(passwordValue).toBe(signupPassword);

//     const passworRepeatdValue = await page.locator("#signupPassword").evaluate(element => element.value);
//     expect(passworRepeatdValue).toBe(signupPassword);

//     await page.getByText("Register").click();
//     await expect(page).toHaveURL('/' + 'panel/garage')
//   });

//   test('Empty fields', async ({page})=>{
//     await page.locator("#signupName").click();
//     await page.locator("#signupLastName").click();
//     await expect(page.locator("#signupName + .invalid-feedback")).toBeVisible();
//     await page.locator("#signupEmail").click();
//     await expect(page.locator("#signupLastName + .invalid-feedback")).toBeVisible();
//     await page.locator("#signupPassword").click();
//     await expect(page.locator("#signupEmail + .invalid-feedback")).toBeVisible();
//     await page.locator("#signupRepeatPassword").click();
//     await expect(page.locator("#signupPassword + .invalid-feedback")).toBeVisible();
//     await page.getByText("Registration").click();
//     await expect(page.locator("#signupRepeatPassword + .invalid-feedback")).toBeVisible();
//   })
  
//   test('Check red border', async ({ page }) => {
//     await page.locator("#signupName").click();
//     await page.locator("#signupLastName").click();
//     await expect(page.locator("#signupName")).toHaveCSS('border-color', 'rgb(220, 53, 69)');
//     await page.locator("#signupEmail").click();
//     await expect(page.locator("#signupLastName")).toHaveCSS('border-color', 'rgb(220, 53, 69)');
//     await page.locator("#signupPassword").click();
//     await expect(page.locator("#signupEmail")).toHaveCSS('border-color', 'rgb(220, 53, 69)');
//     await page.locator("#signupRepeatPassword").click();
//     await expect(page.locator("#signupPassword")).toHaveCSS('border-color', 'rgb(220, 53, 69)');
//     await page.getByText("Registration").click();
//     await expect(page.locator("#signupRepeatPassword")).toHaveCSS('border-color', 'rgb(220, 53, 69)');
// });

// });

