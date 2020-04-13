'use strict'
const Artist = use("App/Models/Artist")

class UserController {
    async test1({ view, request }) {
        const data = await Artist.query().where("id", "=", "1").fetch()
        return view.render("Test.hello-world", { data: data.toJSON()[0] })
        // toJSON ()[0] ie returns one result
    }

}

module.exports = UserController
