import { Given, When, Then, DataTable } from '@badeball/cypress-cucumber-preprocessor';

When(`User visits the payment page`, () => {
    // [When] Describes the action or event that triggers the scenario.
    cy.visit('https://fr.wikipedia.org/wiki/Wikip%C3%A9dia:Accueil_principal');
});

Then(`User should see the payment form`, () => {
    // [Then] Describes the expected outcome or result of the scenario.
    cy.get("h1").should(
        "have.attr",
        "id",
        "firstHeading"
      );
});

Given(`payment details are valid`, function (paymentDetails: DataTable) {
    // [Given] Sets up the initial state of the system.
    // <DataTable> argument is detected:
    // - With column headers: use DataTable.rowsHash(), which outputs an object containing key-value pairs for each row (e.g. { key1: value, key2: value }).
    // - With row headers: use DataTable.hashes(), which outputs an array of objects (e.g. [{ key1: value, key2: value }]).
    const expected = {
        name: 'John Doe',
        cardNumbers: '0000000000000000',
        expiryDate: '03/30',
        cvv: '737'
    };
    assert.deepEqual(paymentDetails.rowsHash(), expected);

    this.paymentDetails = paymentDetails;
    this.expected = expected;
});

When(`User fills in the payment form`, function () {
    // [When] Describes the action or event that triggers the scenario.
    assert.deepEqual(this.paymentDetails.rowsHash(), this.expected);
});

Then(`User should see the payment confirmation`, () => {
    // [Then] Describes the expected outcome or result of the scenario.
});