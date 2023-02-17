function loadUsers(userIds, load, done) {
    var users = []
    const promises = userIds.map((id) => {
      return new Promise((resolve, reject) => {
        load(id, (user) => {
          resolve(user);
        });
      });
    });
  
    Promise.all(promises).then((users) => {
      done(users);
    });
  }
  
  module.exports = loadUsers