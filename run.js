var fs = require('fs');
var Faker = require('Faker');
Faker = require('faker-ext/index.js')(Faker);
var _ = require('underscore');
var youtube = require('youtube-feeds');

var topics = ['Javascript', 'AngularJs', 'E2E', 'Java', 'PHP', 'Zend Framework', 'Agile', 'Scrum'];

youtube.feeds.videos({q: 'AngularJs','max-results':  50,orderby:'published'},
    function(data,videos){
        var youtubeVideos = _.map(videos.items,function(item){
            return item.id;
        });

console.log(youtubeVideos);

// List of Speakers
var speakers = _.unique(_.times(10, function(index) {
    return {
        id: index + 1,
        name: Faker.Name.findName(),
        avatar: Faker.Image.avatar(),
        intro: Faker.Lorem.sentence(3),
        email: Faker.Internet.email(),
        website: Faker.Internet.domainName(),
        detail: Faker.Lorem.paragraphs(4),
        expertises: _.unique(_.times(_.random(3, 7), function() {
            return Faker.random.array_element(topics);
        }))
    }
}));

// List of Sessions

var sessions = _.times(100, function(index) {

    // Fetch 1-4 random speakers

    var sessionSpeakers = _.times(_.random(1, 4), function() {
        return Faker.random.array_element(speakers);
    });

    return {
        id: index + 1,
        title: Faker.Lorem.sentence(3),
        thumbnail:Faker.random.array_element(youtubeVideos),
        summery: Faker.Lorem.sentence(10),
        detail: Faker.Lorem.paragraphs(4),
        topics: _.unique(_.times(_.random(7, 17), function() {
            return Faker.random.array_element(topics);
        })),
        date: Faker.Date.recent(300),
        attendees: {
            confirmed: Faker.random.number(80),
            tentative: Faker.random.number(80)
        },
        speakers: _.map(sessionSpeakers, function(speaker) {
            return {
                id: speaker.id,
                name: speaker.name,
                avatar: speaker.avatar
            }
        }),

        comments: _.times(_.random(1, 5), function() {
            var commenter = Faker.random.array_element(speakers);
            return {
                id: commenter.id,
                name: commenter.name,
                avatar: commenter.avatar,
                comment: Faker.Lorem.sentence(20)
            }
        })


    }
});


fs.writeFile('./src/app/assets/data/speakers.json', JSON.stringify(speakers));
fs.writeFile('./src/app/assets/data/sessions.json', JSON.stringify(sessions));
    }
);
