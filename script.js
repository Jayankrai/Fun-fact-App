const facts = [
    "I love teaching technologies and have taught at an Engineering College.",
    "I am an avid reader and read around 20 books per year.",
    "I once started a coaching business for teaching students.",
    "I speak three languages fluently.",
    "I’m learning to code in my free time."
];

document.getElementById('generateFact').addEventListener('click', function() {
    const randomIndex = Math.floor(Math.random() * facts.length);
    document.getElementById('fact').textContent = facts[randomIndex];
});
