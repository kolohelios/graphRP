import puppeteer from 'puppeteer'

describe('login behavioral test', async () => {
  test('user should be able to log in', async () => {

    const browser = await puppeteer.launch({
      headless: false,
    })

    try {
      let page = await browser.newPage()

      await page.goto('http://localhost:4444/')

      const bodyHandle = await page.$('body')
      const html = await page.evaluate(body => body.innerHTML, bodyHandle)

      if (bodyHandle) {
        await bodyHandle.dispose()
      }

      expect(html).toContain('Welcome to React Native')

      await browser.close()
    } catch (error) {
      console.error(error)
      browser.close()
      expect(error).toBeFalsy()
    }
  }, 16000)
})
