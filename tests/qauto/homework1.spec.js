import { test, expect } from "@playwright/test";


test.describe('Registration form test', () => {

    test.beforeEach(async ({page})=>{
        await page.goto("https://qauto.forstudy.space/");
        await page.locator(".btn-primary").click();
        await expect(page.locator(".modal-content")).toBeVisible();
    })

  test('Positive', async ({ page }) => {
    await page.locator("#signupName").fill("Justin");
    await page.locator("#signupLastName").fill("Potter");
    await page.locator("#signupEmail").fill("dns-jp@test.com");
    await page.locator("#signupPassword").fill("qwertY@123");
    await page.locator("#signupRepeatPassword").fill("qwertY@123");

    const name = await page.locator("#signupName").evaluate(element => element.value);
    const expectedName = "Justin";
    expect(name).toBe(expectedName);

    const lastName = await page.locator("#signupLastName").evaluate(element => element.value);
    const expectedLastName = "Potter";
    expect(lastName).toBe(expectedLastName);

    const email = await page.locator("#signupEmail").evaluate(element => element.value);
    const expectedEmail = "dns-jp@test.com";
    expect(email).toBe(expectedEmail);

    const passwordValue = await page.locator("#signupPassword").evaluate(element => element.value);
    const expectedValue = "qwertY@123";
    expect(passwordValue).toBe(expectedValue);

    const passworRepeatdValue = await page.locator("#signupPassword").evaluate(element => element.value);
    const expectedRepeatValue = "qwertY@123";
    expect(passworRepeatdValue).toBe(expectedRepeatValue);

    await page.getByText("Register").click();
    await expect(page).toHaveURL('https://qauto.forstudy.space/panel/garage')
  });

  test('Empty fields', async ({page})=>{
    await page.locator("#signupName").click();
    await page.locator("#signupLastName").click();
    await expect(page.getByText("Name required")).toBeVisible();
    await page.locator("#signupEmail").click();
    await expect(page.getByText("Last name required")).toBeVisible();
    await page.locator("#signupPassword").click();
    await expect(page.getByText("Email required")).toBeVisible();
    await page.locator("#signupRepeatPassword").click();
    await expect(page.getByText("Password required")).toBeVisible();
    await page.getByText("Registration").click();
    await expect(page.getByText("Re-enter password required")).toBeVisible();
  })

  //Цей не стабільно працює, треба якесь одне значення для ргб, можливо навіть переробити на expect().not.ToBe
  test.only('Check red border', async ({page})=>{
    await page.locator("#signupName").click();
    const elementHandle = await page.locator('#signupName');
    const computedStyle = await elementHandle.evaluate(element => {
        const style = window.getComputedStyle(element);
        return style.borderColor;
      });

      expect(computedStyle).toBe('rgb(220, 53, 69)');
  })


});
