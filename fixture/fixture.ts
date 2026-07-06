import{test as baseTest} from '@playwright/test'
import { HomePage } from "../pages/HomePage";
import { LoginPage } from "../pages/loginPage"


type pages ={

    loginPage:LoginPage;
    homePage:HomePage;
    
}
const testPages= baseTest.extend<pages>({

loginPage:async({page},use)=>{
    await use(new LoginPage(page))
},
homePage:async({page},use)=>{
    await use(new HomePage(page))
},

})

export const test=testPages;
 export const expect=testPages.expect;
