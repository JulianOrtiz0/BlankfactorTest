Feature: BlankFactor test
    Scenario: Navigate to Retirement and Wealth section through navbar link and verify contact page
        Given User navigates to Blankfactor main page
        When hover over the Industries link and clicks on Retirement and Wealth section
        And captures the text on the third element of the "Powering innovation" section


    Scenario: test contact page
        Given User navigates to Blankfactor main page
        When hover over the Industries link and clicks on Retirement and Wealth section
        And clicks on the Let's get stated button
        Then verifies that the URL contains "/contact/"
        And the page title is "Contact | Blankfactor"