import { expect, Locator, Page } from "@playwright/test";
import { BasePage } from './BasePage';

export class HomePage extends BasePage{

private readonly usernameInputField:Locator = this.page.getByRole('textbox', {name :"Username"})
    private readonly passwordInputField:Locator = this.page.locator('[id="password-input"]')
    private readonly loginBtn :Locator= this.page.locator('//*[@id="btn-login"]')
    private readonly javaCheckBox :Locator= this.page.locator('[id="chk-java"]')
    private readonly seleniumCheckBox:Locator= this.page.locator('[id="chk-selenium"]')
    private readonly apiCheckBox :Locator= this.page.locator('[id="chk-api"]')
    private readonly midLevelRadio :Locator= this.page.locator('[id="rdo-mid"]')

   private readonly dropDownSection :Locator=this.page.locator('[id="link-9"]')
    private readonly singleSelect:Locator=this.page.locator('[id="single-select"]')
    private readonly multiSelect:Locator=this.page.locator('[id="multi-select"]')
    private readonly countrySelect:Locator=this.page.locator('[id="country"]')
    private readonly cityySelect:Locator=this.page.locator('[id="city"]')


     private readonly dragDropSection:Locator=this.page.locator('[id="link-5"]')
     private readonly leftBox:Locator=this.page.locator('[id="drop-left"]')
     private readonly rightBox:Locator=this.page.locator('[id="drop-right"]')
     private readonly itemA:Locator=this.page.locator('[id="draggable-Item-A"]')
     private readonly itemB:Locator=this.page.locator('[id="draggable-Item-B"]')
     private readonly itemC:Locator=this.page.locator('[id="draggable-Item-C"]')



     private readonly uploadFileSection :Locator=this.page.locator('[id="link-7"]')
    private readonly fileUploadBtn :Locator=this.page.locator('[id="file-input"]')
    private readonly filePath='C:/Users/Mohamed/Desktop/playwrightR3/New Microsoft Word Document.docx'


       private readonly alertSection:Locator=this.page.locator('[id="link-12"]')
    private readonly simpleAlert :Locator=this.page.locator('[id="btn-alert"]')
    private readonly confirmationAlert :Locator=this.page.locator('[id="btn-confirm"]')
    private readonly promptAlert:Locator=this.page.locator('[id="btn-prompt"]')





 async checkJavaCheckbox(){
   await this.actions.checkElement(this.javaCheckBox)}
     async checkSeleniumCheckbox(){
   await this.actions.checkElement(this.seleniumCheckBox)
 }
  async checkApiCheckbox(){
   await this.actions.checkElement(this.apiCheckBox)}

async unCheckJavaBox(){
  await this.actions.unCheckElement(this.javaCheckBox)
}
async checkMidlevelCheckBox(){
  await this.actions.checkElement(this.midLevelRadio)
}


async javaBoxIsNotChecked(){
  await this.assertions.assertThatElementIsNotChecked(this.javaCheckBox)
}
async midlevelIsChecked(){
  await this.assertions.assertThatElementIsChecked(this.midLevelRadio)
}
async clickOnDropSection(){
   await this.actions.clickOnElement(this.dropDownSection)
}
async selectSingleSelctionOption(value:string){
   await this.actions.selectSingleOption(this.singleSelect,value)

}
async selectSingleSelctionOptionLabel(label:string){
   await this.actions.selectSingleOptionLabel(this.singleSelect,label)
}
async selectSingleSelctionOptionIndex(index:number){
   await this.actions.selectSingleOptionIndex(this.singleSelect,index)
}
async multiSelectionOption(value?:string,label?:string,index?:number){
   await this.actions.multiSelctOption(this.multiSelect,value,label,index)
}
async selectCountry(index:number){
   await this.actions.selectSingleOptionIndex(this.countrySelect,index)
}
async selectcity(index:number){
   await this.actions.selectSingleOptionIndex(this.cityySelect,index)
}


async clickOnDragDropSection(){
   await this.actions.clickOnElement(this.dragDropSection)
}
async dragItemAndDrop(){
   await this.actions.dragAndDrop(this.page,this.itemA,this.rightBox)
}

async clickOnUploadSection(){

   await this.actions.clickOnElement(this.uploadFileSection)

}
async setFileUpload(){
await  this.actions.fileUpload(this.page,this.fileUploadBtn,this.filePath)
}


async clickOnAlertSection(){
   await this.actions.clickOnElement(this.alertSection)
}
async performeSimpleAlert(){
   await this.actions.simpleAlert(this.simpleAlert,this.page,expect)
}
async performConfirmationAlert(){
   await this.actions.confirmationAlert(this.confirmationAlert,this.page,expect)
}
async performPromptAlert(){
   await this.actions.promptAlert(this.promptAlert,this.page,expect)
}
}