function skillsMember() {
    var member = this;
    return {
        getSkills: function() {
            return member.skills;
        }
    }
}