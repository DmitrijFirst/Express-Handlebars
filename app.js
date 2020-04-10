const express = require('express');
const path = require('path')
const exphds = require('express-handlebars')
const app = express();
const homeRoutes = require('./routes/home')
const addRoutes = require('./routes/add')
const coursesRoutes = require('./routes/courses')
//движок рендеринга html handlebars
const hbs = exphds.create({
    defaultLayout: 'main',
    extname: 'hbs'
})

app.engine('hbs', hbs.engine) //регистрируем в экспресс, что есть такой движок
app.set('view engine', 'hbs') // начинаем использование 
app.set('views' , 'views')// конфигурируем переменную view , указываем папку с html

//Подключаем публичную папку с стилями, скриптами, img
app.use(express.static('public'));
app.use(express.urlencoded({extended: true})) //получаем дату формы 
//регистрируем роуты, подключеные в папке routes
app.use('/', homeRoutes);
app.use('/add', addRoutes);
app.use('/courses', coursesRoutes);

















const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log('Server is running on Port ')
})