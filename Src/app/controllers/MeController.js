const Course = require('../models/Course');
const { mutipleMongooseToObject } = require('../../util/mongoose');

class MeController {
    // GET /me/stored/courses

    storedCourses(req, res, next) {
        Promise.all([Course.countDocumentsDeleted(), Course.find({})])
            .then(([deleteCount, courses]) =>
                res.render('me/stored-courses', {
                    deleteCount: deleteCount,
                    courses: mutipleMongooseToObject(courses),
                }),
            )
            .catch(next);
    }

    trashCourses(req, res, next) {
        Course.findDeleted({})
            .then((courses) =>
                res.render('me/trash-courses', {
                    courses: mutipleMongooseToObject(courses),
                }),
            )
            .catch(next);
    }
}

module.exports = new MeController();
