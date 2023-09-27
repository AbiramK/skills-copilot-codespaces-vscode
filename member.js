function skillsMember() {
    var skills = document.getElementsByName('skills[]');
    var skillsValues = [];
    for (var i = 0; i < skills.length; i++) {
        if (skills[i].checked) {
            skillsValues.push(skills[i].value);
        }
    }
    document.getElementById('skills').value = skillsValues.join(', ');
}