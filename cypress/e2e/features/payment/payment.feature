Feature: Payment page

  Scenario: User visits the payment page
    When User visits the payment page
    Then User should see the payment form

  Scenario: User provides valid payment details
    Given payment details are valid
      | name | John Doe |
      | cardNumbers | 0000000000000000 |
      | expiryDate | 03/30 |
      | cvv | 737 |
    When User fills in the payment form
    Then User should see the payment confirmation
