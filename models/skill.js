const skills = [
    {id: 12345, name: 'Node.js', learned: true},
    {id: 42563, name: 'CSS', learned: true},
    {id: 83493, name: 'HTML', learned: true},
    {id: 34897, name: 'SQL', learned: false},
    {id: 97263, name: 'Python', learned: false},
    {id: 23792, name: 'JavaScript', learned: true},
];

module.exports = {
    getAll,
    getOne
};

function getAll() {
    return skills;
}

function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
}