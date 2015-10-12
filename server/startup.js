// On server startup, if the database is empty, create some initial data.
if (Meteor.isServer) {
  Meteor.startup(function () {

    // Create in 25 fake users.

    // If the user count ever falls below 25 this code will
    // make sure that you ALWAYS have 25 fresh users to
    // do with what you will. Be sure to place this
    // in your Meteor.startup or a Tracker.deps block
    if(Meteor.users.find().count() < 25) {
      _.each(_.range(25), function(){

        var randomEmail = faker.internet.email();
        var randomName = faker.name.findName();
        var userName = faker.internet.userName();

        Accounts.createUser({
          username: userName,
          profile: {
            name: randomName,
          },
          email: randomEmail,
          password: 'hoyun80'
        });
      });
    }

    var userFetch = Meteor.users.find().fetch();

    if (Trading.find().count() < 30) {

      for (var i = 0; i < 20; i++) {

        // var randomCat = function() {

        var ranCat = '', ranTag = [], slug = '', name = '', userId = null;

        ranCat = Random.choice(['product', 'service']);

        // select tag from tempTag
        switch (ranCat) {
          case "product":
            ranTag.push(Random.choice(["product1", "product2", "product3", "product4", "product5", "product6", "product7", "product8", "product9", "product10"]));
            break;
          case "service":
            ranTag.push(Random.choice(["service1", "service2", "service3", "service4", "service5", "service6", "service7", "service8", "service9", "service10"]));
            break;

          default:
            console.error("no category selected");
            break;
        }

        name = Fake.word();

        slug = strToURL(name);

        userId = _.sample(userFetch, 1);

        Trading.insert({
          userID: userId[0]._id,
          profileImg: Meteor.absoluteUrl("img/user-50x50.png"),
          itemName: name,
          itemDescription: Fake.sentence([5]),
          category: ranCat,
          tags: ranTag,
          slug: slug,
          bidderCount: 0,
          progress: "unchecked",
          createdAt: new Date(),
          bidders: []
        });
      }
    }
  });
}
