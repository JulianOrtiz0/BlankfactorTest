Feature: BlankFactor test
    Scenario: Navigate to Retirement and Wealth through Industries page and verify contact page
        Given I navigate to Blankfactor main page
        When click the Industries nav link
        And click on Learn More button in Retirement and Wealth section
        And capture the text on the third element of the "Powering innovation" section
        Then click on the Lets get stated button
        And verify that the URL contains "/contact/"
        And the page title should be "Contact | Blankfactor"