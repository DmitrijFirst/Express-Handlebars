const uuid = require('uuid/v4');
//Библиотека uuid , генерирует уникальные id
const fs = require('fs');
const path = require('path');



class Course {
    constructor(title, price,img){
        this.title = title
        this.price = price
        this.img = img
        this.id = uuid()
    }

    toJSON(){
        return {
            title: this.title,
            price: this.price,
            img: this.img,
            id: this.id
        }
    }

    //Модель записывает данные в файл
    async save(){
        const course = await Course.getAll();
        course.push(this.toJSON())

        return new Promise((resolve, reject) => {
            fs.writeFile(
                path.join(__dirname, '..', 'data', 'course.json'),
                JSON.stringify(course),
                (err) => {
                    if(err) {
                        reject(err)
                    }else {
                        resolve()
                    }
                }
            )
        })

   
    }
// Получаем список всех элементов
    static getAll(){
        return new Promise((resolve, reject) => {
            fs.readFile(
                path.join(__dirname, '..', 'data', 'course.json'),
                'utf-8',
                (err, content) => {
                    if(err) {
                        reject(err);
                    }else {
                        resolve(JSON.parse(content))
                    }
                }
            )
        })

    }

    static async getById(id) {
      const course = await  Course.getAll();
      return course.find(c => c.id === id)
    }
}

module.exports = Course;