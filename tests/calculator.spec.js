const { test, expect } = require('@playwright/test');

test.describe('Calculator UI Tests', () => {

  test('Addition works correctly', async ({ page }) => {
    await page.goto('/');

    await page.getByRole('button', { name: '2' }).click();
    await page.getByRole('button', { name: '+' }).click();
    await page.getByRole('button', { name: '3' }).click();
    await page.getByRole('button', { name: '=' }).click();

    await expect(page.locator('input')).toHaveValue('5');
  });

  test('Delete removes last character', async ({ page }) => {
    await page.goto('/');

    await page.getByRole('button', { name: '1' }).click();
    await page.getByRole('button', { name: '2' }).click();
    await page.getByRole('button', { name: '3' }).click();

    await page.getByRole('button', { name: 'Del' }).click();

    await expect(page.locator('input')).toHaveValue('12');
  });

  test('AC clears display', async ({ page }) => {
    await page.goto('/');

    await page.getByRole('button', { name: '9' }).click();
    await page.getByRole('button', { name: '8' }).click();

    await page.getByRole('button', { name: 'AC' }).click();

    await expect(page.locator('input')).toHaveValue('');
  });

});
