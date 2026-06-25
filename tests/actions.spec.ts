import {expect, Locator, Page, selectors, test} from '@playwright/test';


async function clickOnElement(locator:Locator,page:Page) {
    await locator.click()
    await page.waitForTimeout(1*1000)
}
test('Scenario 01:login flow' ,async({page})=>{

    const usernameInputField:Locator =page.getByRole('textbox', {name :"Username"})
    const passwordInputField:Locator =page.locator('[id="password-input"]')
    const loginBtn :Locator=page.locator('//*[@id="btn-login"]')


    const username:string="trainer"
    const password:string="selenium123"
//await page.waitForTimeout(3*1000)
await page .goto("https://nebula-test-lab-lv1.vercel.app/")
await usernameInputField.fill(username)
await passwordInputField.pressSequentially(password,{delay:300})
await loginBtn.click()
await page.waitForTimeout(5*1000)


});
test('Scenario 02:login flow' ,async({page})=>{

    const usernameInputField:Locator =page.getByRole('textbox', {name :"Username"})
    const passwordInputField:Locator =page.locator('[id="password-input"]')
    const loginBtn :Locator=page.locator('//*[@id="btn-login"]')
    const errorMsgLocator :Locator=page.locator('[id="login-error"]')


    const username:string="trainer"
    const password:string="selenium"
    const invalidCredErrorMessage:string="Invalid credentials"
//await page.waitForTimeout(3*1000)
await page .goto("https://nebula-test-lab-lv1.vercel.app/")
await usernameInputField.fill(username)
await passwordInputField.pressSequentially(password,{delay:300})
await loginBtn.click()
//await clickOnElement(page.locator('//*[@id="btn-login"]')page)
await  expect (errorMsgLocator).toContainText(invalidCredErrorMessage)
await page.waitForTimeout(5*1000)
})
test('Scenario 03:radio,checkbox ,doubleclick' ,async({page})=>{

    const usernameInputField:Locator =page.getByRole('textbox', {name :"Username"})
    const passwordInputField:Locator =page.locator('[id="password-input"]')
    const loginBtn :Locator=page.locator('//*[@id="btn-login"]')
    const javaCheckBox :Locator=page.locator('[id="chk-java"]')
    const seleniumCheckBox:Locator=page.locator('[id="chk-selenium"]')
    const apiCheckBox :Locator=page.locator('[id="chk-api"]')
    const midLevelRadio :Locator=page.locator('[id="rdo-mid"]')


    const username:string="trainer"
    const password:string="selenium123"
//await page.waitForTimeout(3*1000)
await page .goto("https://nebula-test-lab-lv1.vercel.app/")
await usernameInputField.fill(username)
await passwordInputField.pressSequentially(password,{delay:300})
await loginBtn.click()
await clickOnElement(page.locator('[id="link-2"]'),page)
await javaCheckBox.check()
await seleniumCheckBox.check()
await apiCheckBox.check()
await javaCheckBox.uncheck()
await expect(javaCheckBox).not.toBeChecked()
await midLevelRadio.check()
await expect(midLevelRadio).toBeChecked()


await page.waitForTimeout(5*1000)


});
test('Scenario 04:dropdown' ,async({page})=>{

    const usernameInputField:Locator =page.getByRole('textbox', {name :"Username"})
    const passwordInputField:Locator =page.locator('[id="password-input"]')
    const loginBtn :Locator=page.locator('//*[@id="btn-login"]')
    const dropDownSection :Locator=page.locator('[id="link-9"]')
    const singleSelect:Locator=page.locator('[id="single-select"]')
    const multiSelect:Locator=page.locator('[id="multi-select"]')
    const countrySelect:Locator=page.locator('[id="country"]')
    const cityySelect:Locator=page.locator('[id="city"]')



    const username:string="trainer"
    const password:string="selenium123"
//await page.waitForTimeout(3*1000)
await page .goto("https://nebula-test-lab-lv1.vercel.app/")
await usernameInputField.fill(username)
await passwordInputField.pressSequentially(password,{delay:300})
await loginBtn.click()
await clickOnElement((dropDownSection),page)

await singleSelect.selectOption({value:"edge"})
await singleSelect.selectOption({label:"Firefox"})
await singleSelect.selectOption({index:0})
await multiSelect.selectOption([
{value:"api"},
{label:"UI"},
{index:3},
])
await countrySelect.selectOption({index:2})
await cityySelect.selectOption({index:2})

await page.waitForTimeout(5*1000)

});
test('Scenario 05:Drag&Drop' ,async({page})=>{

    const usernameInputField:Locator =page.getByRole('textbox', {name :"Username"})
    const passwordInputField:Locator =page.locator('[id="password-input"]')
    const loginBtn :Locator=page.locator('//*[@id="btn-login"]')
    const dragDropSection:Locator=page.locator('[id="link-5"]')

    const leftBox:Locator=page.locator('[id="drop-left"]')
    const rightBox:Locator=page.locator('[id="drop-right"]')
    const itemA:Locator=page.locator('[id="draggable-Item-A"]')
    const itemB:Locator=page.locator('[id="draggable-Item-B"]')
    const itemC:Locator=page.locator('[id="draggable-Item-C"]')





    const username:string="trainer"
    const password:string="selenium123"
//await page.waitForTimeout(3*1000)
await page .goto("https://nebula-test-lab-lv1.vercel.app/")
await usernameInputField.fill(username)
await passwordInputField.pressSequentially(password,{delay:300})
await loginBtn.click()
await clickOnElement((dragDropSection),page)

await itemA.hover()
await page.mouse.down()
await rightBox.hover()
await page.mouse.up()




await page.waitForTimeout(5*1000)


});
test('Scenario 06:upload' ,async({page})=>{

    const usernameInputField:Locator =page.getByRole('textbox', {name :"Username"})
    const passwordInputField:Locator =page.locator('[id="password-input"]')
    const loginBtn :Locator=page.locator('//*[@id="btn-login"]')
    const uploadFileSection :Locator=page.locator('[id="link-7"]')
    const fileUploadBtn :Locator=page.locator('[id="file-input"]')

    const username:string="trainer"
    const password:string="selenium123"
//await page.waitForTimeout(3*1000)
await page .goto("https://nebula-test-lab-lv1.vercel.app/")
await usernameInputField.fill(username)
await passwordInputField.pressSequentially(password,{delay:300})
await loginBtn.click()
await clickOnElement((uploadFileSection),page)

const fileUpload =await Promise.all([
page.waitForEvent('filechooser'),
fileUploadBtn.click()
]
)
await fileUpload[0].setFiles('C:/Users/Mohamed/Desktop/playwrightR3/New Microsoft Word Document.docx')
await page.waitForTimeout(5*1000)
});

test('scenario 07:alert' ,async({page})=>{
    const usernameInputField:Locator =page.getByRole('textbox', {name :"Username"})
    const passwordInputField:Locator =page.locator('[id="password-input"]')
    const loginBtn :Locator=page.locator('//*[@id="btn-login"]')
    const alertSection:Locator=page.locator('[id="link-12"]')
    const simpleAlert :Locator=page.locator('[id="btn-alert"]')
    const confirmationAlert :Locator=page.locator('[id="btn-confirm"]')
    const promptAlert:Locator=page.locator('[id="btn-prompt"]')

    const username:string="trainer"
    const password:string="selenium123"
//await page.waitForTimeout(3*1000)
await page .goto("https://nebula-test-lab-lv1.vercel.app/")
await usernameInputField.fill(username)
await passwordInputField.pressSequentially(password,{delay:300})
await loginBtn.click()
await clickOnElement((alertSection),page)
//page.on('dialog',async(alert)=>{
//const alertMessage=alert.message();
  //  expect(alertMessage).toEqual('Simple alert')
   //await alert.accept();
//})
//await simpleAlert.click()

//page.on('dialog',async(alert)=>{
//const alertMessage=alert.message();
  // expect(alertMessage).toEqual('Are you sure?')
    
  // await alert.accept();
//})
//await confirmationAlert.click()
const promptMsg="Hey this is mohamed"
page.on('dialog',async(alert)=>{
const alertMessage=alert.message();
   expect(alertMessage).toEqual('Type anything:')
   await alert.accept(promptMsg);
})

await promptAlert.click()
await expect(page.locator('[id="prompt-out"]')).toContainText(promptMsg)
await page.waitForTimeout(5*1000)

});