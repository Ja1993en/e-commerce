const { Tag } = require('../models');

const dataTag = [
    {
        tag_name: 'rock music',
    },
    {
        tag_name: 'pop music',
    },
    {
        tag_name: 'blue',
    },
    {
        tag_name: 'red',
    },
    {
        tag_name: 'green',
    },
    {
        tag_name: 'white',
    },
    {
        tag_name: 'gold',
    },
    {
        tag_name: 'pop culture',
    },
];

const seedTags = () => Tag.bulkCreate(dataTag);

module.exports = seedTags;