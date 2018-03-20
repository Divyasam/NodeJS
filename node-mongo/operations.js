const assert = require('assert');

exports.insertDocument = (client, document, collection, callback) => {
    const coll = client.db('conFusion').collection(collection);
    return coll.insert(document);
};

exports.findDocuments = (client, collection, callback) => {
    const coll = client.db('conFusion').collection(collection);
    return coll.find({}).toArray();
};

exports.removeDocument = (client, document, collection, callback) => {
    const coll = client.db('conFusion').collection(collection);
    return coll.deleteOne(document);
};

exports.updateDocument = (client, document, update, collection, callback) => {
    const coll = client.db('conFusion').collection(collection);
    return coll.updateOne(document, { $set: update }, null);
};