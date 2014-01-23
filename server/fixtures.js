// Fixture data 
if (Tickets.find().count() === 0) {
  var now = new Date().getTime();
    
  // Fixtures Groups
  var groupWisp = Groups.insert({ tag: 'WISP', name: 'Experts WISP', emails: [ 'stasd_adm_wisp@orange.com' ] });
  var groupApe = Groups.insert({ tag: 'APE', name: 'Experts APE', emails: [ 'stasd_adm_ape@orange.com' ] });
  var groupRj = Groups.insert({ tag: 'RJ', name: 'Experts RJDM', emails: [ 'dgrauet.ext@orange.com', 'maxime.carron@orange.com' ] });
  var groupCsg = Groups.insert({ tag: 'CSG', name: 'Experts CSG', emails: [ 'stasd_adm_csg@orange.com' ] });
  var groupGaa = Groups.insert({ tag: 'GAA', name: 'Administrateurs Applicatifs', emails: [ 'c3m_adm_gaa@list.orange.com' ] });
  var groupPilote = Groups.insert({ tag: 'PIL', name: 'Pilotes de domaines', emails: [ 'lddes.pilotesdomaineaccesdatamobile@orange.com' ] });
    
  // Fixtures Categories
  Categories.insert({ name: 'Sox', color: '#F5F4EA' });
  Categories.insert({ name: 'Opération', color: '#E5F7E5' });
  Categories.insert({ name: 'Incident', emails: '#F7E6C8' });
  Categories.insert({ name: 'Check du matin', emails: '#EAF6F9' });
  Categories.insert({ name: 'Check du soir', emails: '#E5F0F7' });
  Categories.insert({ name: 'Astreinte', emails: '#F5E6F5' });
  
  // Fixtures Fields
  var fieldGp = Fields.insert({ name: 'Grand Public' });
  var fieldApe = Fields.insert({ name: 'Entreprise' });
  var fieldRj = Fields.insert({ name: 'Réquisition Légale' });
  var fieldCsg = Fields.insert({ name: 'Facturation' });
    
  // Fixtures Platforms
  var wispBagn = Platforms.insert({ tag: 'WISP2', name: 'Wireless Internet Service Provider - Bagnolet', fieldsId: fieldGp, groupsId: [ groupWisp, groupRj, groupGaa ] });
  var wispMass = Platforms.insert({ tag: 'WISP3', name: 'Wireless Internet Service Provider - Masséna', fieldsId: fieldGp, groupsId: [ groupWisp, groupRj, groupGaa ] });
  var apeAuber = Platforms.insert({ tag: 'APE', name: 'Access Platform Entreprise Legacy - Aubervilliers', fieldsId: fieldApe, groupsId: [ groupApe, groupRj, groupGaa ] });
  Platforms.insert({ tag: 'APE2', name: 'Access Platform Entreprise - Archives', fieldsId: fieldApe, groupsId: [ groupApe, groupRj, groupGaa ] });
  Platforms.insert({ tag: 'APE4', name: 'Access Platform Entreprise - Aubervilliers', fieldsId: fieldApe, groupsId: [ groupApe, groupRj, groupGaa ] });
  var epcfBome = Platforms.insert({ tag: 'EPCFBOME', name: 'Pop de Bordeaux Meriadec', fieldsId: [ fieldGp, FieldApe, FieldRj, FieldCsg ], groupsId: [ groupWisp, groupRj, groupApe, groupCsg, groupGaa ] });
  var epcfBome = Platforms.insert({ tag: 'EPCFMASM', name: 'Pop de Marseille Saint-Mauront', fieldsId: [ fieldGp, FieldApe, FieldRj, FieldCsg ], groupsId: [ groupWisp, groupRj, groupApe, groupCsg, groupGaa ] });
  var epcfBome = Platforms.insert({ tag: 'EPCFSTWO', name: 'Pop de Strasbourg Woodly', fieldsId: [ fieldGp, FieldApe, FieldRj, FieldCsg ], groupsId: [ groupWisp, groupRj, groupApe, groupCsg, groupGaa ] });
  var epcfBome = Platforms.insert({ tag: 'EPCFPMAS', name: 'Pop de Paris Masséna', fieldsId: [ fieldGp, FieldApe, FieldRj, FieldCsg ], groupsId: [ groupWisp, groupRj, groupApe, groupCsg, groupGaa ] });
  var epcfBome = Platforms.insert({ tag: 'EPCFAUBE', name: 'Pop d\'Aubervilliers', fieldsId: [ fieldGp, FieldApe, FieldRj, FieldCsg ], groupsId: [ groupWisp, groupRj, groupApe, groupCsg, groupGaa ] });
  var epcfBome = Platforms.insert({ tag: 'EPCFLACA', name: 'Pop de Lacassagne', fieldsId: [ fieldGp, FieldApe, FieldRj, FieldCsg ], groupsId: [ groupWisp, groupRj, groupApe, groupCsg, groupGaa ] });
  var epcfBome = Platforms.insert({ tag: 'EPCFBLAN', name: 'Pop de Blanc-Mesnil', fieldsId: [ fieldGp, FieldApe, FieldRj, FieldCsg ], groupsId: [ groupWisp, groupRj, groupApe, groupCsg, groupGaa ] });
    
  // Fixtures Users
  var moussaId = Meteor.users.insert({
    emails: [
      { email: 'mmariko.ext@orange.com' }
    ],
    profile: { 
      name: 'Moussa Mariko',
      groupsId: [
        { groupId: groupGaa }
      ]
    }
  });
  var moussa = Meteor.users.findOne(moussaId);
  var maximeId = Meteor.users.insert({
    emails: [
      { email: 'maxime.carron@orange.com' }
    ],
    profile: { 
      name: 'Maxime Carron',
      groupsId: [
        { groupId: groupWisp },
        { groupId: groupRj }
      ] 
    }
  });
  var maxime = Meteor.users.findOne(maximeId);
  
  // Fixtures Equipments
  var rad = Equipments.insert({ tag: 'RAD', name: 'Radius', platformsId: [ wispBagn, wispMass, fieldRj, apeAuber ] });
  var sgn = Equipments.insert({ tag: 'SGN', name: 'Session Engine', platformsId: [ wispBagn, wispMass ] });
  Equipments.insert({ tag: 'PMR', name: 'Platform Manager', platformsId: [ wispBagn, wispMass ] });
  Equipments.insert({ tag: 'CL', name: 'Collecteur local', platformsId: [ rjPop ] });
  Equipments.insert({ tag: 'CC', name: 'Collecteur central', platformsId: fieldRj });
  Equipments.insert({ tag: 'SCM', name: 'Session Cache Manager', platformsId: fieldApe });
  var pgw = Equipments.insert({ tag: 'PGW', name: 'Platform Gateway', platformsId: [ fieldGp, fieldApe, fieldCsg ] });    
    
  // Création d'un ticket avec 2 commentaires    
    
  var telescopeId = Tickets.insert({
    title: 'Introducing Telescope',
    userId: maxime._id,
    author: maxime.profile.name,
    url: 'http://sachagreif.com/introducing-telescope/',
    submitted: now - 7 * 3600 * 1000,
    commentsCount: 2
  });    

  Comments.insert({
    ticketId: telescopeId,
    userId: moussa._id,
    author: moussa.profile.name,
    submitted: now - 5 * 3600 * 1000,
    body: 'Interesting project Sacha, can I get involved?'
  });

  Comments.insert({
    ticketId: telescopeId,
    userId: maxime._id,
    author: maxime.profile.name,
    submitted: now - 3 * 3600 * 1000,
    body: 'You sure can Tom!'
  });
    
  // Fixtures Tickets

  Tickets.insert({
    title: 'Meteor',
    userId: moussa._id,
    author: moussa.profile.name,
    url: 'http://meteor.com',
    submitted: now - 10 * 3600 * 1000,
    commentsCount: 0
  });

  Tickets.insert({
    title: 'The Meteor Book',
    userId: moussa._id,
    author: moussa.profile.name,
    url: 'http://themeteorbook.com',
    submitted: now - 12 * 3600 * 1000,
    commentsCount: 0
  });
    
  for (var i = 0; i < 5; i++) {
    Tickets.insert({
      title: 'Test ticket #' + i,
      author: maxime.profile.name,
      userId: maxime._id,
      url: 'http://google.com/?q=test-' + i,
      submitted: now - i * 3600 * 1000,
      commentsCount: 0
    });
  }
}

