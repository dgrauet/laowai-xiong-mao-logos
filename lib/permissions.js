// check that the userId specified owns the documents
ownsDocument = function(userId, doc) {
  return doc && doc.userId === userId;
}

validUserAndDoc = function(userId, doc){
  return userId && doc;
}
