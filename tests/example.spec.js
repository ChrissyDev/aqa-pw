// @ts-check
import { test, expect } from "@playwright/test";

// test.describe("Suite name", () => {
//   test.describe("Login", () => {
//     test.beforeAll(async () => {
//       console.log("BEFORE ALL");
//     });

//     test.beforeEach(async () => {
//       console.log("BEFORE EACH");
//     });

//     test.afterEach(async () => {
//       console.log("AFTER EACH");
//     });

//     test.afterAll(async () => {
//       console.log("AFTER ALL");
//     });

//     test("test1", async ({ page }) => {
//       console.log("test1");
//     });

//     test("test2", async ({ page }) => {
//       console.log("test2");
//     });
//   });
// });

test.describe("TODO MVC", () => {
  test.describe("TODO Create", () => {
    test.beforeEach(async ({ page }) => {
      await page.goto("https://demo.playwright.dev/todomvc");
    });

    test("should allow me to add todo items", async ({ page }) => {
      const todoText = "Learn Playwright";

      await test.step("enter todo text and submit", async () => {
        const newTodo = page.getByPlaceholder("What needs to be done?");
        await newTodo.fill(todoText);
        await newTodo.press("Enter");
      });

      await test.step("Check todo is created", async () => {
        await expect(page.getByTestId("todo-title")).toHaveText([todoText]);
      });
    });
  });
});
