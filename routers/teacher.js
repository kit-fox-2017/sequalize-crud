const express = require('express')
const router = express.Router()

const models = require('../models')

router.get('/', (req, res) => {
  models.Teacher.findAll()
  .then(teachers => {
    res.render('teacher', {data: teachers, title: 'Teacher Page'})
  })
  .catch(err => {
    res.send(err)
  })
})

router.post('/', (req, res) => {
  models.Teacher.build({
    first_name: `${req.body.fn}`,
    last_name: `${req.body.ln}`,
    createdAt: new Date(),
    email: `${req.body.email}`
  })
  .save().then(teachers => {
    res.redirect('/teachers')
  })
  .catch(err => {
    res.send(err)
  })
})

router.get('/edit/:id', (req, res) => {
  models.Teacher.findAll({
    where: {
      id: req.params.id
    }
  })
  .then(teachers => {
    res.render('teacherEdit', {data: teachers[0], title: 'Edit Teacher Page'})
  })
  .catch(err => {
    res.send(err)
  })
})

router.post('/edit/:id', (req, res) => {
  models.Teacher.update({
    first_name: `${req.body.fn}`,
    last_name: `${req.body.ln}`,
    updatedAt: new Date(),
    email: `${req.body.email}`
  },
  {
    where: {
      id: req.params.id
    }
  })
  .then(teachers => {
    res.redirect('/teachers')
  })
  .catch(err => {
    res.send(err)
  })
})

router.get('/delete/:id', (req, res) => {
  models.Teacher.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(teachers => {
    res.redirect('/teachers')
  })
  .catch(err => {
    res.send(err)
  })
})

module.exports = router
