window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
window.IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || window.msIDBTransaction || {READ_WRITE: "readwrite"}; // This line should only be needed if it is needed to support the object's constants for older browsers
window.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange || window.msIDBKeyRange;

if (!window.indexedDB) {
    window.alert("Your browser doesn't support a stable version of IndexedDB. Such and such feature will not be available.");
}

// Let us open our database
var request = window.indexedDB.open("MyTestDatabase", 3); // 3 is database version
var db;
request.onerror = function(event) {
  alert("Why didn't you allow my web app to use IndexedDB?!");
};
request.onsuccess = function(event) {
  db = event.target.result;
};

//Adding data in indexDB
var transaction = db.transaction(["customers"], "readwrite");
var objectStore = transaction.objectStore("customers");
customerData.forEach(function(customer) {
  var request = objectStore.add(customer);
  request.onsuccess = function(event) {
    // event.target.result === customer.ssn;
  };
});

//Removing data from indexDB

var request = db.transaction(["customers"], "readwrite")
                .objectStore("customers")
                .delete("444-44-4444");
request.onsuccess = function(event) {
  // It's gone!
};

//Updating from indexDB
var objectStore = db.transaction(["customers"], "readwrite").objectStore("customers");
var request = objectStore.get("444-44-4444");
request.onerror = function(event) {};

request.onsuccess = function(event) {
  var data = event.target.result;
  data.age = 42;

  var requestUpdate = objectStore.put(data);
  requestUpdate.onerror = function(event) {};
  requestUpdate.onsuccess = function(event) {};
};