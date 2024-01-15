/// <reference types="cypress" />

import { clickElement, assertElement, isElementDisplayed, typeText, clickElementByXpath } from "../pages/methods.js"
//import genericMethods from "../pages/methods.js"
import settingslocators from "../locators/settingsPageLocators.js"

describe('User adds products to cart', () => {  

  beforeEach(() => 
  {
    cy.login()

        // Open the eyes with the correct configuration
        cy.eyesOpen({ appName: 'TAU TodoMVC', batchName: 'TAU TodoMVC Hey!' })
        browser: [
          {name: 'chrome', width: 1024, height: 768},
          {name: 'chrome', width: 800, height: 600},
          {name: 'firefox', width: 1024, height: 768},
          {deviceName: 'iPhone X'},
        ]
  })

    it('Go to Settings', () => 
    {
      clickElement(settingslocators.settingIcon)
      clickElement(settingslocators.productUtilizeBtn)
      cy.eyesCheckWindow('settings')
    })

    afterEach(() => {
      // Close the eyes using the correct command cy.eyesClose()
      cy.eyesClose()
    })
    
  })
  
