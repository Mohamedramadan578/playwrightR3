import { Page } from "@playwright/test";
import { Actions } from "../utility/Actions";
import { Assertions } from "../utility/Assertions";

export class BasePage{
    actions=new Actions
    assertions=new Assertions
page:Page;
constructor(page:Page){
    this.page=page
}



}
