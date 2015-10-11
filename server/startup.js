var slug = '';
// On server startup, if the database is empty, create some initial data.
if (Meteor.isServer) {
  Meteor.startup(function () {

    if (Trading.find().count() < 20) {

      for (var i = 0; i < 20; i++) {

        // var randomCat = function() {
        var ranCat = '', ranTag = [];

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

        var name = Fake.word();
        slug = strToURL(name);
        Trading.insert({
          userID: Meteor.users.findOne()._id,
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
