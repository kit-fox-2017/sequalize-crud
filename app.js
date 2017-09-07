const express = require('express')
const bodyParser = require('body-parser')
const models = require('./models')
const app = express()

app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.render('index')
})

// ========== TEACHER PAGE ==========

const teachers = require('./routers/teacher')

app.use('/teachers', teachers)

// ========== SUBJECT PAGE ==========

const subject = require('./routers/subject')

app.use('/subject', subject)

// ========== STUDENTS PAGE ==========

const student = require('./routers/student')

app.use('/student', student)
// app.get('/student', (req, res) => {
//   models.Student.findAll()
//   .then(students => {
//     res.render('student', {data: students, title: 'Student Page'})
//   })
//   .catch(err => {
//     res.send(err)
//   })
// })
//
// app.post('/student', (req, res) => {
//   models.Student.build({
//     first_name: `${req.body.fn}`,
//     last_name: `${req.body.ln}`,
//     email: `${req.body.email}`,
//     createdAt: new Date()
//   })
//   .save().then(students => {
//     res.redirect('/student')
//   })
// })
//
// app.get('/student/edit/:id', (req, res) => {
//   models.Student.findAll({
//     where: {
//       id: req.params.id
//     }
//   })
//   .then(students => {
//     res.render('studentEdit', {data: students[0], title: 'Edit Student Page'})
//   })
// })
//
// app.post('/student/edit/:id', (req, res) => {
//   models.Student.update({
//     first_name: `${req.body.fn}`,
//     last_name: `${req.body.ln}`,
//     email: `${req.body.email}`,
//     updatedAt: new Date()
//   },
//   {
//     where: {
//       id: req.params.id
//     }
//   })
//   .then(students => {
//     res.redirect('/student')
//   })
// })
//
// app.get('/student/delete/:id', (req, res) => {
//   models.Student.destroy({
//     where: {
//       id: req.params.id
//       }
//     })
//     .then(students => {
//       res.redirect('/student')
//     })
//     .catch(err => {
//       res.send(err)
//     })
//   })
//
app.listen(3000,() => {
  console.log('AYO JALAN!');
})
