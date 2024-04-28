import { test, expect } from "@playwright/test";

export default class RegistrationPage {
    constructor(page) {
      this.page = page;
      this.signupNameInput = '#signupName';
      this.signupLastNameInput = '#signupLastName';
      this.signupEmailInput = '#signupEmail';
      this.signupPasswordInput = '#signupPassword';
      this.signupRepeatPasswordInput = '#signupRepeatPassword';
      this.registerButton = 'text=Register';
    }
  
    async fillRegistrationForm(name, lastName, email, password) {
      await this.page.fill(this.signupNameInput, name);
      await this.page.fill(this.signupLastNameInput, lastName);
      await this.page.fill(this.signupEmailInput, email);
      await this.page.fill(this.signupPasswordInput, password);
      await this.page.fill(this.signupRepeatPasswordInput, password);
    }

    async triggerWarningMessagesForFields() {
      await this.page.click(this.signupNameInput);
      await this.page.click(this.signupLastNameInput);
      await this.page.click(this.signupEmailInput);
      await this.page.click(this.signupPasswordInput);
      await this.page.click(this.signupRepeatPasswordInput);
      await this.page.click(this.signupNameInput);
    }
  
    async clickRegisterButton() {
      await this.page.click(this.registerButton);
    }


    async validateRedBorder() {
      await expect(this.page.locator(this.signupNameInput)).toHaveCSS('border-color', 'rgb(220, 53, 69)');
      await expect(this.page.locator(this.signupLastNameInput)).toHaveCSS('border-color', 'rgb(220, 53, 69)');
      await expect(this.page.locator(this.signupEmailInput)).toHaveCSS('border-color', 'rgb(220, 53, 69)');
      await expect(this.page.locator(this.signupPasswordInput)).toHaveCSS('border-color', 'rgb(220, 53, 69)');
      await expect(this.page.locator(this.signupRepeatPasswordInput)).toHaveCSS('border-color', 'rgb(220, 53, 69)');
    }
  
    async validateEmptyFieldsFeedback() {
      await expect(this.page.locator(this.signupNameInput + ' + .invalid-feedback')).toBeVisible();
      await expect(this.page.locator(this.signupLastNameInput + ' + .invalid-feedback')).toBeVisible();
      await expect(this.page.locator(this.signupEmailInput + ' + .invalid-feedback')).toBeVisible();
      await expect(this.page.locator(this.signupPasswordInput + ' + .invalid-feedback')).toBeVisible();
      await expect(this.page.locator(this.signupRepeatPasswordInput + ' + .invalid-feedback')).toBeVisible();
    }
  }
  
  // module.exports = RegistrationPage;
  