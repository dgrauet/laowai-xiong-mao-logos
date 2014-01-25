// Local (client-only) collection
References = new Meteor.Collection(null);

addReferences = function(reference) {
  References.insert({reference: reference, submitted:false});
}

clearReferences = function() {
  References.remove({seen: true});
}

Meteor.methods({
  reference: function(referenceAttributes) {
    var user = Meteor.user(),
      referenceExists = References.findOne({reference: referenceAttributes.reference});

    // ensure the user is logged in
    if (!user)
      throw new Meteor.Error(401, "Vous devez vous connecter pour insérer un numéro de référence");

    // check that there are no previous tickets with the same link
    if (referenceAttributes.references && referenceExists) {
      throw new Meteor.Error(302, 
        'Ce numéro de réference existe déjà', 
        referenceExists._id);
    }

    // pick out the whitelisted keys
    var reference = _.extend(_.pick(referenceAttributes, 'reference'), {
      reference: referenceAttributes.reference
    });

    var referenceId = addReferences(reference);
    return referenceId;
  }
});