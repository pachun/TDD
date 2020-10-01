const { reloadApp } = require('detox-expo-helpers');

describe('Example', () => {
  it('should load the app', async () => {
    await reloadApp()

    await expect(element(by.label('HELLO!'))).toBeVisible();
  });
});










    // const app = element(by.label('exp://192.168.0.134:19000'))
    // await expect(app).toBeVisible();
    // await app.tap()
    // const intro = element(by.traits(["staticText"]).atIndex(0))
    // await intro.swipe('down')
    // await element(by.label('Got it')).tap()
    // await element(by.label('TDD')).tap()
    // await expect(element(by.label('HELLO!'))).toBeVisible();
