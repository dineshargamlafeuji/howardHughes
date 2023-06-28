// @ts-nocheck
const { test, expect } = require("@playwright/test");
const Sections = require("../pages/pageIndex");
const { executeStep } = require("../utilities/actions");
require("dotenv").config();


test("Login ", async ({page}) => {
  const loginPage = new Sections.Login(page, test);
  await loginPage.launchApplication();
  await loginPage.loginToApplication()
   await loginPage.signInwithPassword();
}
  )

