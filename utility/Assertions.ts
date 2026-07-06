import { Locator,expect } from "@playwright/test";

export class Assertions{

async assertThatElementIsNotChecked(elementLocator:Locator){
await expect(elementLocator).not.toBeChecked()
}
async assertThatElementIsChecked(elementLocator:Locator){
await expect(elementLocator).toBeChecked()
}
async assertErorMsg(elementLocator:Locator,erorMsg:string){
    await expect (elementLocator).toContainText(erorMsg)
}
//await  expect (errorMsgLocator).toContainText(invalidCredErrorMessage)
}
