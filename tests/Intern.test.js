const Intern = require('../lib/Intern');

test('Creates new Intern.', () => {
    const intern = new Intern('Chester Wilkingshire IV', 42, 'veryreal@email.com', 'Oxford');
    
    expect(intern.school) .toEqual(expect.any(String));
});

test('Checks  for employee school.', () => {
    const intern = new Intern('Chester Wilkingshire IV', 42, 'veryreal@email.com', 'Oxford');
    
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

test('Checks role of employee.', () => {
    const intern = new Intern('Chester Wilkingshire IV', 42, 'veryreal@email.com', 'Oxford');

    expect(intern.getRole()).toEqual("Intern");
}); 