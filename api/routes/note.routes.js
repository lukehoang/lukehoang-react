module.exports = (app) => {
    const notes = require('../controllers/note.controller.js');

    //create a new Note
    app.post('/notes', notes.create);

    //retrieve all notes
    app.get('/notes', notes.findAll);

    //retrieve a note by noteId
    app.get('/notes/:noteId', notes.findOne);

    //update a note by noteId
    app.put('/notes/:noteId', notes.update);

    //delete a note by noteId
    app.delete('notes/:noteId', notes.delete);
}