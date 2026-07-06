import test, { Expect, Locator, Page } from "@playwright/test";

export class Actions{
async checkElement(elementLocator:Locator){
await elementLocator.check()
}

async unCheckElement(elementLocator:Locator){
await elementLocator.uncheck()
}
async clickOnElement(elementLocator:Locator){
await elementLocator.click()
}
async enterElementToText(elementLocator:Locator ,test:string){
await  elementLocator.fill(test)
}
async enterElementToTextSequatially(elementLocator:Locator,text :string,delay:number){
await elementLocator.pressSequentially(text,{delay:delay})

}
async selectSingleOption(elementLocator:Locator,value:string){
await elementLocator.selectOption(value)
}
async selectSingleOptionLabel(elementLocator:Locator,label:string){
await elementLocator.selectOption(label)
}
async selectSingleOptionIndex(elementLocator:Locator,index:number){
await elementLocator.selectOption({index:index})}


async multiSelctOption(elementLocator:Locator,value?:string,label?:string,index?:number){
await elementLocator.selectOption([{value},{label},{index}])

}

async dragAndDrop(page:Page,currentLocator:Locator,targetLocator:Locator){
await currentLocator.hover()
await page.mouse.down()
await targetLocator.hover()
await page.mouse.up()
}




async fileUpload(page:Page,buttonLocator:Locator,filePath:string ){
    const fileUpload=await Promise.all([
     page.waitForEvent("filechooser"),
     buttonLocator.click(),

    ]);
    await fileUpload[0].setFiles(filePath);

}



async simpleAlert(elementLocator:Locator,page:Page,expect:Expect){
page.on('dialog',async(alert)=>{
const alertMessage=alert.message();
    expect(alertMessage).toEqual('Simple alert')
   await alert.accept();
})
await elementLocator.click()
}


async confirmationAlert(elementLocator:Locator,page:Page,expect:Expect){
page.on('dialog',async(alert)=>{
const alertMessage=alert.message();
   expect(alertMessage).toEqual('Are you sure?')
    
   await alert.accept();
})
await elementLocator.click()

}



async promptAlert(elementLocator:Locator,page:Page,expect:Expect){
const promptMsg="Hey this is mohamed"
page.on('dialog',async(alert)=>{
const alertMessage=alert.message();
   expect(alertMessage).toEqual('Type anything:')
   await alert.accept(promptMsg);
})

await elementLocator.click()
await expect(page.locator('[id="prompt-out"]')).toContainText(promptMsg)
}












//page.on('dialog',async(alert)=>{
//const alertMessage=alert.message();
  // expect(alertMessage).toEqual('Are you sure?')
    
  // await alert.accept();
//})
//await confirmationAlert.click()



//page.on('dialog',async(alert)=>{
//const alertMessage=alert.message();
  //  expect(alertMessage).toEqual('Simple alert')
   //await alert.accept();
//})
//await simpleAlert.click()


}


// await itemA.hover()
// await page.mouse.down()
// await rightBox.hover()
// await page.mouse.up()