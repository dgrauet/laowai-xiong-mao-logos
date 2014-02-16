// Fixture data 
if (Tickets.find().count() === 0) {
  var now = new Date().getTime();
    
  // Fixtures Groups
  Groups.insert({ tag: 'WISP', name: 'Experts WISP', emails: [ 'stasd_adm_wisp@orange.com' ] });
  Groups.insert({ tag: 'APE', name: 'Experts APE', emails: [ 'stasd_adm_ape@orange.com' ] });
  Groups.insert({ tag: 'RJ', name: 'Experts RJDM', emails: [ 'dgrauet.ext@orange.com', 'maxime.carron@orange.com' ] });
  Groups.insert({ tag: 'CSG', name: 'Experts CSG', emails: [ 'stasd_adm_csg@orange.com' ] });
  Groups.insert({ tag: 'GAA', name: 'Administrateurs Applicatifs', emails: [ 'c3m_adm_gaa@list.orange.com' ] });
  Groups.insert({ tag: 'PIL', name: 'Pilotes de domaines', emails: [ 'lddes.pilotesdomaineaccesdatamobile@orange.com' ] });
    
  // Fixtures Categories
  Categories.insert({ name: 'Sox', color: 'yellow' });
  Categories.insert({ name: 'Opération', color: 'green' });
  Categories.insert({ name: 'Incident', color: 'orange' });
  Categories.insert({ name: 'Check du matin', color: 'blue' });
  Categories.insert({ name: 'Check du soir', color: 'blue' });
  Categories.insert({ name: 'Astreinte', color: 'pink' });
  
  // Fixtures Fields
  Fields.insert({ name: 'Grand Public', icon: 'globe', tag : 'GP' });
  Fields.insert({ name: 'Entreprise', icon: 'briefcase', tag: 'Ent' });
  Fields.insert({ name: 'Réquisition Légale', icon: 'hdd', tag: 'RJ' });
  Fields.insert({ name: 'Facturation', icon: 'euro', tag: 'Factu' });
    
  // Fixtures Platforms
  Platforms.insert({ 
    tag: 'WISP2', name: 'Wireless Internet Service Provider', location: 'Bagnolet', fields: [ 'Grand Public' ], groups: [ 'WISP', 'RJ', 'GAA' ]
  });
  Platforms.insert({ 
    tag: 'WISP3', name: 'Wireless Internet Service Provider', location: 'Masséna', fields: [ 'Grand Public' ], groups: [ 'WISP', 'RJ', 'GAA' ]
  });
  Platforms.insert({ 
    tag: 'APE', name: 'Access Platform Entreprise Legacy', location: 'Aubervilliers', fields: [ 'Entreprise' ], groups: [ 'APE', 'RJ', 'GAA' ]
  });
  Platforms.insert({ 
    tag: 'APE2', name: 'Access Platform Entreprise', location: 'Archives', fields: [ 'Entreprise' ], groups: [ 'APE', 'RJ', 'GAA' ]
  });
  Platforms.insert({ 
    tag: 'APE4', name: 'Access Platform Entreprise', location: 'Aubervilliers', fields: [ 'Entreprise' ], groups: [ 'APE', 'RJ', 'GAA' ] 
  });
  Platforms.insert({ 
    tag: 'GIBAGN', name: 'Pop GI', location: 'Bagnolet', fields: [ 'Grand Public', 'Entreprise', 'Réquisition Légale', 'Facturation' ], groups: [ 'WISP', 'RJ', 'APE', 'CSG', 'GAA' ]
  });
  Platforms.insert({ 
    tag: 'GIMASS', name: 'Pop GI', location: 'Masséna', fields: [ 'Grand Public', 'Entreprise', 'Réquisition Légale', 'Facturation' ], groups: [ 'WISP', 'RJ', 'APE', 'CSG', 'GAA' ]
  });  Platforms.insert({ 
    tag: 'GIBEON', name: 'Pop GI', location: 'Beaujon', fields: [ 'Grand Public', 'Entreprise', 'Réquisition Légale', 'Facturation' ], groups: [ 'WISP', 'RJ', 'APE', 'CSG', 'GAA' ]
  });  Platforms.insert({ 
    tag: 'GILACA', name: 'Pop GI', location: 'Lacassagne', fields: [ 'Grand Public', 'Entreprise', 'Réquisition Légale', 'Facturation' ], groups: [ 'WISP', 'RJ', 'APE', 'CSG', 'GAA' ]
  });  Platforms.insert({ 
    tag: 'GIBLAN', name: 'Pop GI', location: 'Blanc-Mesnil', fields: [ 'Grand Public', 'Entreprise', 'Réquisition Légale', 'Facturation' ], groups: [ 'WISP', 'RJ', 'APE', 'CSG', 'GAA' ]
  });
  Platforms.insert({
    tag: 'EPCFBOME', name: 'Pop SGI', location: 'Bordeaux Mériadec', fields: [ 'Grand Public', 'Entreprise', 'Réquisition Légale', 'Facturation' ], groups: [ 'WISP', 'RJ', 'APE', 'CSG', 'GAA' ]
  });
  Platforms.insert({
    tag: 'EPCFMASM', name: 'Pop SGI', location: 'Marseille Saint-Mauront', fields: [ 'Grand Public', 'Entreprise', 'Réquisition Légale', 'Facturation' ], groups: [ 'WISP', 'RJ', 'APE', 'CSG', 'GAA' ]
  });
  Platforms.insert({
    tag: 'EPCFSTWO', name: 'Pop SGI', location: 'Strasbours Woodly', fields: [ 'Grand Public', 'Entreprise', 'Réquisition Légale', 'Facturation' ], groups: [ 'WISP', 'RJ', 'APE', 'CSG', 'GAA' ]
  });
  Platforms.insert({
    tag: 'EPCFPMAS', name: 'Pop SGI', location: 'Paris Masséna', fields: [ 'Grand Public', 'Entreprise', 'Réquisition Légale', 'Facturation' ], groups: [ 'WISP', 'RJ', 'APE', 'CSG', 'GAA' ]
  });
  Platforms.insert({
    tag: 'EPCFAUBE', name: 'Pop SGI', location: 'Aubervilliers', fields: [ 'Grand Public', 'Entreprise', 'Réquisition Légale', 'Facturation' ], groups: [ 'WISP', 'RJ', 'APE', 'CSG', 'GAA' ]
  });
  Platforms.insert({
    tag: 'EPCFLACA', name: 'Pop SGI', location: 'Lacassagne', fields: [ 'Grand Public', 'Entreprise', 'Réquisition Légale', 'Facturation' ], groups: [ 'WISP', 'RJ', 'APE', 'CSG', 'GAA' ]
  });
  Platforms.insert({
    tag: 'EPCFBLAN', name: 'Pop SGI', location: 'Blanc-Mesnil', fields: [ 'Grand Public', 'Entreprise', 'Réquisition Légale', 'Facturation' ], groups: [ 'WISP', 'RJ', 'APE', 'CSG', 'GAA' ]
  });
  Platforms.insert({
    tag: 'ATS', name: 'Robots', location: 'Porte de la Vilette', fields: [ 'Grand Public', 'Entreprise', 'Réquisition Légale', 'Facturation' ], groups: [ 'WISP', 'RJ', 'APE', 'CSG', 'GAA' ]
  });
    
  // Fixtures Users
  var moussaId = Meteor.users.insert({
    emails: [ 'mmariko.ext@orange.com' ],
    profile: { 
      name: 'Moussa Mariko',
      groups: [ 'GAA' ]
    }
  });
  var moussa = Meteor.users.findOne(moussaId);

  var hocineId = Meteor.users.insert({
    emails: [ 'hmansouri.ext@orange.com' ],
    profile: { 
      name: 'Hocine Mansouri',
      groups: [ 'GAA' ]
    }
  });
  var hocine = Meteor.users.findOne(hocineId);

  var damienId = Meteor.users.insert({
    username: 'thcv6151',
    emails: [ 'dgrauet.ext@orange.com' ],
    profile: { 
      name: 'Damien Grauet',
      groups: [ 'WISP', 'RJ' ] 
    }
  });
  Accounts.setPassword(damienId, 'thcv6151');
  var damien = Meteor.users.findOne(damienId);
  
  // Fixtures Equipments
  Equipments.insert({ tag: 'RAD', name: 'Radius', platforms: [ 'WISP2', 'WISP3', 'APE', 'APE2', 'APE4' ] });
  Equipments.insert({ tag: 'SGN', name: 'Session Engine', platforms: [ 'WISP2', 'WISP3' ] });
  Equipments.insert({ tag: 'PMR', name: 'Platform Manager', platforms: [ 'WISP2', 'WISP3' ] });
  Equipments.insert({ tag: 'CL', name: 'Collecteur local', platforms: [ 'EPCFBOME','EPCFMASM','EPCFSTWO','EPCFPMAS','EPCFAUBE','EPCFLACA','EPCFBLAN' ] });
  Equipments.insert({ tag: 'CC', name: 'Collecteur central', platforms: [ 'ISOAUBE', 'ISOARCH' ] });
  Equipments.insert({ tag: 'SCM', name: 'Session Cache Manager', platforms: [ 'APE', 'APE2', 'APE4' ] });
  Equipments.insert({ tag: 'PGW', name: 'Platform Gateway', platforms: [ 'EPCFBOME','EPCFMASM','EPCFSTWO','EPCFPMAS','EPCFAUBE','EPCFLACA','EPCFBLAN' ] });    
    
  // Création d'un ticket avec 2 commentaires    
  var checkMatinId = Tickets.insert({
    title: 'Check du matin',
    userId: moussa._id,
    author: moussa.profile.name,
    horoId: '14-023-002',
    references: [ '1401844062', '1401844063', '1401844064', '1401844066' ],
    submitted: now - 7 * 3600 * 1000,
    updated: now - 7 * 3600 * 1000,
    category: 'Check du matin',
    color: 'blue',
    participants: [ 'Moussa Mariko', 'Hocine Mansouri' ],
    commentsCount: 3,
    participantsCount: 2
  });    

  Comments.insert({
    ticketId: checkMatinId,
    userId: moussa._id,
    author: moussa.profile.name,
    submitted: now - 5 * 3600 * 1000,
    body: 'WISP2'
  });

  Comments.insert({
    ticketId: checkMatinId,
    userId: moussa._id,
    author: moussa.profile.name,
    submitted: now - 5 * 3600 * 1000,
    body: 'WISP3'
  });
  
  Comments.insert({
    ticketId: checkMatinId,
    userId: hocine._id,
    author: hocine.profile.name,
    submitted: now - 5 * 3600 * 1000,
    body: 'WISP2'
  });
    
  // Fixtures Tickets
  var astreinteId = Tickets.insert({
    title: 'Turbela praeteritis domesticus advenit imbres.',
    detail: 'Syriae expeditioni vel est diffusa consularem invito adfore metuenti aerumnis victu obsecranti victu principibus metuenti quicquam sed Syriae id statuit.', 
    userId: hocine._id,
    author: hocine.profile.name,
    horoId: '14-022-006',
    references: [ '1401844060', '1401844061' ],
    submitted: now - 10 * 3600 * 1000,
    updated: now - 10 * 3600 * 1000,
    category: 'Astreinte',
    color: 'pink',
    participants: [ 'Hocine Mansouri' ],
    fields: [ 'Réquisition Légale' ],
    platforms: [ 'AUBE' ],
    equipments: [ 'CL' ],
    attachmentsId: [ '1', '2' ],
    commentsCount: 3,
    participantsCount: 1,
    attachmentsCount: 2
  });

  Comments.insert({
    ticketId: astreinteId,
    userId: hocine._id,
    author: hocine.profile.name,
    submitted: now - 5 * 3600 * 1000,
    body: 'On a un espace suffisant. On voit en HO avec expert RJDM la cause de ce dysfonctionnement',
    attachmentsId: '1'
  });
  
  Comments.insert({
    ticketId: astreinteId,
    userId: hocine._id,
    author: hocine.profile.name,
    submitted: now - 5 * 3600 * 1000,
    body: 'Il reste des fichiers depuis 11H.',
    attachmentsId: '2'
  });

  Comments.insert({
    ticketId: astreinteId,
    userId: hocine._id,
    author: hocine.profile.name,
    submitted: now - 5 * 3600 * 1000,
    body: 'Le CFT est bien ok'
  });
  
  for (var i = 0; i < 5; i++) {
    Tickets.insert({
      title: 'Plus voluntatibus et ac restricte.' + i,
      detail: 'Instituto coquinae tessera et ministerium in dexteris catervas ut otiosis vicinitate familiae densas inter aptatae rectores iniectans vias multitudo otiosis.', 
      userId: moussa._id,
      author: moussa.profile.name,
      horoId: '14-022-006',
      submitted: now - i * 3600 * 1000,
      participants: [ 'Moussa Mariko' ],
      fields: [ 'Grand Public' ],
      platforms: [ 'PMAS' ],
      equipments: [ 'SPGW', 'PGW' ],
      commentsCount: 0,
      category: 'Opération',
      color: 'green',
      participantsCount: 1
    });
  }
}