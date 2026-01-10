Feature: BlankFactor test
    Scenario: Navigate and capture test
        Given User navigates to Blankfactor main page
        When hover over the Industries link and clicks on Retirement and Wealth section
        And captures the text on the third element of the "Powering innovation" section
        Then clicks on the Let's get stated button
        And verifies that the URL contains "/contact/" 
        And the page title is "Contact | Blankfactor"