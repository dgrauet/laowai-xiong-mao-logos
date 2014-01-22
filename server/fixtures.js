// Fixture data 
if (Tickets.find().count() === 0) {
  var now = new Date().getTime();
    
  // Fixtures Fields
  Fields.insert({ name: 'Grand Public' });
  Fields.insert({ name: 'Entreprise' });
  Fields.insert({ name: 'Réquisition Légale' });
  Fields.insert({ name: 'Facturation' });
    
  // Fixtures Groups
  var groupWisp = Groups.insert({ tag: 'WISP', name: 'Experts WISP', emails: [ { email: 'stasd_adm_wisp@orange.com' } ] });
  var groupApe = Groups.insert({ tag: 'APE', name: 'Experts APE', emails: [ { email: 'stasd_adm_ape@orange.com' } ] });
  var groupRj = Groups.insert({ tag: 'RJ', name: 'Experts RJDM', emails: [ { email: 'stasd_adm_wisp@orange.com' } ] });
  var groupCsg = Groups.insert({ tag: 'CSG', name: 'Experts CSG', emails: [ { email: 'stasd_adm_csg@orange.com' } ] });
  var groupGaa = Groups.insert({ tag: 'GAA', name: 'Administrateurs Applicatifs', emails: [ { email: 'c3m_adm_gaa@list.orange.com' } ] });
  
  // Fixtures Categories
  Categories.insert({ name: 'Sox', color: '#F5F4EA' });
  Categories.insert({ name: 'Opération', color: '#E5F7E5' });
  Categories.insert({ name: 'Incident', emails: '#F7E6C8' });
  Categories.insert({ name: 'Check du matin', emails: '#EAF6F9' });
  Categories.insert({ name: 'Check du soir', emails: '#E5F0F7' });
  Categories.insert({ name: 'Astreinte', emails: '#F5E6F5' });
  
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

