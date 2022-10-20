const skills = [
    {id: 12345, name: 'Node.js', learned: true, description: "Node.js is an open-source, cross-platform JavaScript runtime environment and library for running web applications outside the client's browser."},
    {id: 42563, name: 'CSS', learned: true, description: "CSS is the language we use to style an HTML document."},
    {id: 83493, name: 'HTML', learned: true, description: "HTML is the standard markup language for Web pages."},
    {id: 34897, name: 'SQL', learned: false, description: "SQL is a standard language for storing, manipulating and retrieving data in databases."},
    {id: 97263, name: 'Python', learned: false, description: "Python is a high-level, general-purpose programming language. It is commonly used for developing websites and software, task automation, data analysis, and data visualization."},
    {id: 23792, name: 'JavaScript', learned: true, description: "JavaScript is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions."},
];

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
    update
};

function update(id, updateSkill) {
    console.log(updateSkill);
    id = parseInt(id);
    const skill = skills.find(skill => skill.id === id);
    Object.assign(skill, updateSkill);
    Object.assign(skill.description, updateSkill.description);
}

function deleteOne(id) {
    id = parseInt(id);
    const idx = skills.findIndex(skill => skill.id === id);
    skills.splice(idx, 1);
}

function create(skill) {
    skill.name = skill.skill;
    skill.id = Date.now() % 100000;
    skill.done = false;
    skill.description = skill.description;
    skills.push(skill);
}

function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
}

function getAll() {
    return skills;
}