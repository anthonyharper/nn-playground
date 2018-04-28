var sql = require ('sqlite3').verbose();
let db = new sql.Database('./db/fighters.db', (err) => {
    if (err) {
        return console.error(err.message);
    }
    console.log('Connected to the fighters SQlite database.');
});

var synaptic = require('synaptic');

// create the network
const { Layer, Network } = synaptic;

// need to populate the fighter database with relevant stats about the most recently resolved event, which will need full fight history of each fighter, including each of their past opponents, which rapidly spirals into a full database of every MMA event / fighter... Sherdog already has this so it's probably time to write that scraper

// NOTE TO SELF: Input values should be between 0 and 1, normalize your inputs
// then train the network to accurately predict the outcomes of the last event, making sure that the outcomes of that event are scrubbed from the training data set.

// then persist the net like so:
/*
    // Export the network to a JSON which you can save as plain text
    var exported = myNetwork.toJSON();

    // Convert the network back to useable network
    var imported = Network.fromJSON(exported);
*/

// then set it loose on the next event

db.close((err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Closed the database connection.');
});