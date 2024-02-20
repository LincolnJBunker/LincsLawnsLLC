const { User } = await import('./model.js');

// const user = await User.findByPk(1)

user = await User.create({
    username: "bob",
    email: "bob@bob.com"
})

console.log(user);