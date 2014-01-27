// Local (client-only) collection
References = new Meteor.Collection(null);

clearReferences = function() {
  References.remove({
      submitted: true
  });
}

Meteor.methods({
  reference: function(referenceAttributes) {
    var user = Meteor.user();
    var referenceExists = References.findOne({number: referenceAttributes.number});

    // ensure the user is logged in
    if (!user){
      throw new Meteor.Error(401, 'Vous devez vous connecter pour insérer un numéro de référence');
    }
    // ensure the input is not empty
    if (!referenceAttributes.number){
      throw new Meteor.Error(403, 'Veuillez renseigner un numéro de ticket');
    }
    // check that there are no previous tickets with the same link
    if (referenceAttributes.number && referenceExists) {
      throw new Meteor.Error(302, 'Ce numéro de réference existe déjà', referenceExists._id);
    }

    // pick out the whitelisted keys
    var reference = _.extend(_.pick(referenceAttributes, 'number'), {
      number: referenceAttributes.number
    });

    var referenceId = References.insert({
      number: reference.number,
    });
    return referenceId;
  }
});