const express = require('express')
const routers = express.Router()

const models = require('../models')

routers.get('/', (req, res) => {
  models.Student.findAll()
  .then(students => {
    res.render('student', {data: students, title: 'Student Page'})
  })
  .catch(err => {
    res.send(err)
  })
})

routers.post('/', (req, res) => {
  models.Student.build({
    first_name: `${req.body.fn}`,
    last_name: `${req.body.ln}`,
    email: `${req.body.email}`,
    createdAt: new Date()
  })
  .save().then(students => {
    res.redirect('/student')
  })
})

routers.get('/edit/:id', (req, res) => {
  models.Student.findAll({
    where: {
      id: req.params.id
    }
  })
  .then(students => {
    res.render('studentEdit', {data: students[0], title: 'Edit Student Page'})
  })
  .catch(err => {
    res.send(err)
  })
})

routers.post('/edit/:id', (req, res) => {
  models.Student.update({
    first_name: `${req.body.fn}`,
    last_name: `${req.body.ln}`,
    email: `${req.body.email}`,
    updatedAt: new Date(),
  },
  {
    where: {
      id: req.params.id
    }
  })
  .then(students => {
    res.redirect('/student')
  })
})

routers.get('/delete/:id', (req, res) => {
  models.Student.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(students => {
    res.redirect('/student')
  })
  .catch(err => {
    res.send(err)
  })
})

module.exports = routers
