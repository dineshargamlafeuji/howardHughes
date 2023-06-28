require("dotenv").config();
const { executeStep } = require("../utilities/actions");


exports.Login = class Login {
  constructor(page, test) {
    this.page = page;
    this.test = test;
    this.email=page.locator("//input[@name='emailid']")
    this.rememberMeCheckbox=page.locator("//label[@class='rememberme']")
    this.IagreeTermsCheckBox=page.locator("//label[@class='rememberme privacy_policy']")
    this.confirmButton=page.locator("//button[@class='signinbtn']")
    this.password=page.locator("//input[@name='password']")
    this.signInButton=page.locator("//button[@class='signinbtn']")
  }
  launchApplication = async () => {
    await executeStep(this.test, await this.page, "navigate",
      `Navigating to ${process.env.BASE_URL}`,
      [process.env.BASE_URL]);
  };
  
  loginToApplication = async () => {
    await executeStep(this.test, this.email, "fill", 
    `Entering email: ${process.env.USER_NAME}`, [process.env.USER_NAME]);
    await executeStep(this.test, this.rememberMeCheckbox, "check",
      `Checking on remeber me checkbox`);
      await executeStep(this.test, this.IagreeTermsCheckBox, "check",
      `Checking on remeber me checkbox`);
      await executeStep(this.test, this.confirmButton, "click",
      `clicking on confirm button`);
  };
  signInwithPassword= async () =>{
    await executeStep(this.test, this.password, "fill", 
    `Entering email: ${process.env.PASSWORD}`, [process.env.PASSWORD]);
    await executeStep(this.test, this.signInButton, "click",
    `clicking on signin button`);
  }
};
