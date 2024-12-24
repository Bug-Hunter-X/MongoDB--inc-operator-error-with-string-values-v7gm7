```javascript
// Incorrect use of $inc operator in MongoDB update query
db.collection.updateOne({ _id: 1 }, { $inc: { field: '1' } });
```