const Engineer = require('../lib/Engineer');

test('Creates new Engineer.', () => {
    const engineer = new Engineer('Chester Wilkingshire IV', 42, 'veryreal@email.com', 'chesterchester42');
    
    expect(engineer.github) .toEqual(expect.any(String));
});

test('Checks for engineers github.', () => {
    const engineer = new Engineer('Chester Wilkingshire IV', 42, 'veryreal@email.com', 'chesterchester42');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

test('Checks role of employee.', () => {
    const engineer = new Engineer('Chester Wilkingshire IV', 42, 'veryreal@email.com', 'chesterchester42');

    expect(engineer.getRole()).toEqual("Engineer");
});