const {Router} = require('express');
const Course = require('../models/course')
const router = Router();

router.get('/', (req,res) => {
    res.render('add', {
        title: 'Добавить курсы', 
        isAdd: true
    })
})

//Обрабатываем post формы с страницы
router.post('/', async (req,res) => {
    const course = new Course(req.body.title, req.body.price, req.body.img );

    course.save()

    res.redirect('/courses');
})

module.exports = router;