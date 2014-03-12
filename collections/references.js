// Local (client-only) collection
References = new Meteor.Collection(null);

clearReferences = function() {
  References.remove({});
}

Meteor.methods({
  reference: function(referenceAttributes) {
    var user = Meteor.user();

    // ensure the user is logged in
    if (!user){
      throw new Meteor.Error(401, 'Vous devez vous connecter pour insérer un numéro de référence');
    }
    
    if (!referenceAttributes.number){
      throw new Meteor.Error(403, 'Veuillez renseigner un numéro de ticket');
    }

    var reference = _.extend(_.pick(referenceAttributes, 'number'), {
      number: referenceAttributes.number
    });

    var referenceId = References.insert({
      number: reference.number
    });
    return referenceId;
    
  }
});