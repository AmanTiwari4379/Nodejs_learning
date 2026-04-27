function userForm(req, res){
    res.write(`
        <form action="/submit" method="post">
        <input type="text" name="name" placeholder="Enter Name" />
        <input type="email" name="email" placeholder="Enter Email id" />
        <button>Submit</button>
        </form>
        `)
}
module.exports = userForm;