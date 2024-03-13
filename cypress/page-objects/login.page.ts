import { Page } from "./page";

const emailField = "#login_email";
const passwordField = "#login_password";
const submitBtn = 'button[type="submit"]';

export default class LoginPage extends Page {
  open() {
    this.openUrl("/login");
  }

  fillLoginForm(email: string, password: string) {
    this.fill(emailField, email);
    this.fill(passwordField, password);
    this.click(submitBtn);
  }

  clickSubmitBtn() {
    this.click(submitBtn);
  }
}
