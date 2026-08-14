import {expect, Locator, Page, selectors, test} from '@playwright/test';
import { BasePage } from './BasePage';

export class LoginPage extends BasePage {
 
    private readonly usernameInputField:Locator=this.page.getByRole('textbox', {name :"Username"})
    private readonly passwordInputField:Locator=this.page.locator('[id="password-input"]')
    private readonly loginBtn :Locator=this.page.locator('//*[@id="btn-login"]')
    private readonly invalidCredErrorMessage:string="Invalid credentials"
    private readonly errorMsgLocator:Locator=this.page.locator('[id="login-error"]')

   
    async enterUserName (username:string){
        await this.actions.enterElementToText(this.usernameInputField,username)
    }
    async enterPassword(password:any, delayInMilies:number){
        await this.actions.enterElementToTextSequatially(this.passwordInputField,password,delayInMilies)
    }
    async clickOnLoginBttn(){
         await this.actions.clickOnElement(this.loginBtn)
    } 

    async assertErorrMesage(){
        await this.assertions.assertErorMsg(this.errorMsgLocator,this.invalidCredErrorMessage)
    }



   // const errorMsgLocator :Locator=page.locator('[id="login-error"]')
    
   
    





}

