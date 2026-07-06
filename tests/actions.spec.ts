import { Locator, Page, selectors} from '@playwright/test';
import {  LoginPage } from '../pages/loginPage';
import * as testData from '../test-data/login-test-data.json';
import{test,expect} from '../fixture/fixture.ts' ;

test('Scenario 01:login flow' ,async({page,loginPage})=>{

//await page.waitForTimeout(3*1000)
await page .goto("https://nebula-test-lab-lv1.vercel.app/")
 await loginPage.enterUserName(testData.validData.username)
 await loginPage.enterPassword(testData.validData.password,300)
 await loginPage.clickOnLoginBttn()
await page.waitForTimeout(5*1000)
});

test('Scenario 02:login flow' ,async({page,loginPage})=>{
//await page.waitForTimeout(3*1000)
await page .goto("https://nebula-test-lab-lv1.vercel.app/")
await loginPage.enterUserName(testData.inValidData.username)
await loginPage.enterPassword(testData.inValidData.password,300)
await loginPage.clickOnLoginBttn()
await loginPage.assertErorrMesage()
//await  expect (errorMsgLocator).toContainText(invalidCredErrorMessage)
await page.waitForTimeout(5*1000)
})
test('Scenario 03:radio,checkbox ,doubleclick' ,async({page,loginPage,homePage})=>{
await page .goto("https://nebula-test-lab-lv1.vercel.app/")
await loginPage.enterUserName(testData.validData.username)
await loginPage.enterPassword(testData.validData.password,300)
await loginPage.clickOnLoginBttn()
await page.waitForTimeout(3*1000)
await homePage.checkJavaCheckbox()
await homePage.checkSeleniumCheckbox()
await homePage.checkApiCheckbox()
await homePage.unCheckJavaBox()
await homePage.javaBoxIsNotChecked()
await homePage.checkMidlevelCheckBox()
await homePage.midlevelIsChecked()
await page.waitForTimeout(2*1000)
});
test('Scenario 04:dropdown' ,async({page,loginPage,homePage})=>{    
await page .goto("https://nebula-test-lab-lv1.vercel.app/")
await loginPage.enterUserName(testData.validData.username)
await loginPage.enterPassword(testData.validData.password,300)
await loginPage.clickOnLoginBttn()
await homePage.clickOnDropSection()
await homePage.selectSingleSelctionOption("edge")
await homePage.selectSingleSelctionOptionLabel("firefox")
await page.waitForTimeout(1*1000)
await homePage.selectSingleSelctionOptionIndex(0)
await homePage.multiSelectionOption("api","UI",3)
await page.waitForTimeout(1*1000)
await homePage.selectCountry(2)
await page.waitForTimeout(1*1000)
await homePage.selectcity(2)
await page.waitForTimeout(3*1000)

});
test('Scenario 05:Drag&Drop' ,async({page,loginPage,homePage})=>{
//await page.waitForTimeout(3*1000)
await page .goto("https://nebula-test-lab-lv1.vercel.app/")

await loginPage.enterUserName(testData.validData.username)
await loginPage.enterPassword(testData.validData.password,300)
await loginPage.clickOnLoginBttn()
await homePage.clickOnDragDropSection()
await page.waitForTimeout(2*1000)
await homePage.dragItemAndDrop()
await page.waitForTimeout(5*1000)
});
test('Scenario 06:upload' ,async({page,loginPage,homePage})=>{ 
//await page.waitForTimeout(3*1000)
await page .goto("https://nebula-test-lab-lv1.vercel.app/")
await loginPage.enterUserName(testData.validData.username)
await loginPage.enterPassword(testData.validData.password,300)
await loginPage.clickOnLoginBttn()
await homePage.clickOnUploadSection()
await homePage.setFileUpload()
await page.waitForTimeout(5*1000)
});

test('scenario 07:alert' ,async({page,loginPage,homePage})=>{
//await page.waitForTimeout(3*1000)
await page .goto("https://nebula-test-lab-lv1.vercel.app/")
await loginPage.enterUserName(testData.validData.username)
await loginPage.enterPassword(testData.validData.password,300)
await loginPage.clickOnLoginBttn()
await homePage.clickOnAlertSection()
await homePage.performeSimpleAlert()
await homePage.performConfirmationAlert()
await homePage.performPromptAlert()
await page.waitForTimeout(5*1000)

});