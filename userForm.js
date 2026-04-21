function userForm(req, res){
    res.write(`
        <form action="/submit" method="post">
        <input type="text" placeholder="Enter Name" />
        <input type="email" placeholder="Enter Email id" />
        <button>Submit</button>
        </form>
        `)
}
module.exports = userForm;