const {Router} = require('express');
const Course = require('../models/course')
const router = Router();

router.get('/', async (req,res) => {
    const course = await Course.getAll();
    res.render('courses', {
        title: 'Доступные курсы',
        isCourses: true,
        course
    })
})

router.get('/:id', async (req,res) => {
    const course = await Course.getById(req.params.id)
    res.render('course', {
        layout: 'empty',
        title: `Курс ${course.title}`,
        course
    })
})

module.exports = router;