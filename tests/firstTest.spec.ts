import { test, expect } from '@playwright/test';

test('firt test heroku', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/');
  await page.getByRole('link', { name: 'Form Authentication' }).click();
  await expect(page.getByRole('textbox', { name: 'Username' })).toBeVisible();
  await expect(page.locator('#login')).toContainText('Username');
  await expect(page.getByRole('button')).toMatchAriaSnapshot(`- button " Login"`);
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('tomsmith');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('SuperSecretPassword!');
  await page.getByRole('button', { name: ' Login' }).click();
  await expect(page.getByText('You logged into a secure area')).toBeVisible();
  await expect(page.locator('#flash')).toContainText('You logged into a secure area! ×');
});

test('second test heroku', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/');
  await page.getByRole('link', { name: 'Dropdown' }).click();
  await expect(page.locator('#dropdown')).toBeVisible();
  await expect(page.locator('#dropdown')).toContainText('Please select an option Option 1 Option 2');
  await page.locator('#dropdown').selectOption('1');
  await page.locator('#dropdown').selectOption('2');
  await page.locator('html').click();
});