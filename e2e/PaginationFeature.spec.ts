import { test, expect } from "@playwright/test";
import { url } from './utils/url';

test("should test pagination feature", async ({ page }) => {
    await page.goto(url);
    await page.waitForSelector('[data-testid="pokemon-card"]');
    const nextButton = await page.waitForSelector('button:has-text("Next")');
    await nextButton.click();
    await page.waitForSelector('[data-testid="pokemon-card"]', { state: 'hidden' });
    const nextElement = await page.$('text="Bulbasaur"');
    expect(nextElement).toBeNull();
    const previousButton = await page.waitForSelector('button:has-text("Previous")');
    await previousButton.click();
    const originalElement = await page.waitForSelector('text="Bulbasaur"');
    expect(originalElement).not.toBeNull();
});