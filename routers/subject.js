const express = require('express')
const routers = express.Router()

const models = require('../models')

routers.get('/', (req, res) => {
  models.Subject.findAll()
  .then(subjects => {
    res.render('subject', {data: subjects, title: 'Subject Page'})
  })
  .catch(err => {
    res.send(err)
  })
})

module.exports = routers
