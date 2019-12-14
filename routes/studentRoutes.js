const mongoose = require('mongoose');
const Student = mongoose.model('students');

module.exports = (app) => {

  app.get(`/api/student/:id?`, async (req, res) => {
      try {
        const {id} = req.params;
        
        let students = (id) ? await Student.findById(id) : await Student.find();
        
        return res.status(200).send(students);
      } catch(e) {
        return res.status(500).send({
          error: true,
          message: e.message
        })
      }
  });

  app.post(`/api/student`, async (req, res) => {
    try{
      let student = await Student.create(req.body);
    
      return res.status(201).send({
        error: false,
        student
      })
    } catch(e) {
      return res.status(500).send({
        error: true,
        message: e.message
      })
    }
  })

  app.put(`/api/student/:id`, async (req, res) => {
    try {
      const {id} = req.params;

      let student = await Student.findByIdAndUpdate(id, req.body);

      return res.status(202).send({
        error: false,
        student
      })
    } catch(e) {
      return res.status(500).send({
        error: true,
        message: e.message
      })
    }
  });

  app.delete(`/api/student/:id`, async (req, res) => {
    try{
      const {id} = req.params;

      let student = await Student.findByIdAndDelete(id);

      return res.status(202).send({
        error: false,
        student
      })
    } catch(e) {
      return res.status(500).send({
        error: true,
        message: e.message
      })
    }
  })
}