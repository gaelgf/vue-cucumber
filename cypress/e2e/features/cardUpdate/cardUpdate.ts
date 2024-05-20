import { Given, When, Then, DataTable } from '@badeball/cypress-cucumber-preprocessor';

When(`User visits the payment page`, () => {
    // [When] Describes the action or event that triggers the scenario.
});

Then(`User should see the payment form`, () => {
    // [Then] Describes the expected outcome or result of the scenario.
});

Given(`payment details are valid`, (arg0: DataTable) => {
    // [Given] Sets up the initial state of the system.
    // <DataTable> argument is detected:
    // - With column headers: use DataTable.rowsHash(), which outputs an object containing key-value pairs for each row (e.g. { key1: value, key2: value }).
    // - With row headers: use DataTable.hashes(), which outputs an array of objects (e.g. [{ key1: value, key2: value }]).
});

When(`User fills in the payment form`, () => {
    // [When] Describes the action or event that triggers the scenario.
});

Then(`User should see the payment confirmation`, () => {
    // [Then] Describes the expected outcome or result of the scenario.
});