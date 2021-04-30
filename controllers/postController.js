let modelPost = require("../models/post_model");

module.exports = {
    show: function(req, res) {
        modelPost.find({}, function(err, items) {
            if(!err) {
                let posts = items.map(function(x) {
                    let {titulo,descripcion,categoria,fecha} = x;
                    return {titulo,descripcion,categoria,fecha};
                });
                
                res.json(posts);
            }else {
                res.sendStatus(500);
                console.log(err);
            }
        });
    },
    create: function(req,res,next) {
        let titulo = req.body.titulo;
        let descripcion = req.body.descripcion;
        let categoria = req.body.categoria;
        let fecha = req.body.fecha;

        let post = new modelPost({
            titulo,
            descripcion,
            categoria,
            fecha,
        });
        post.save().then((data) => {
            res.send(data);
        });
    },
    update: function(req, res, next) {
        modelPost.findByIdAndUpdate(req.params.id, req.body, (err, post) => {
            if (err) {
                return res.status(500).send({error: 'Ocurrió un problema'})
            };
            res.send({success: 'Se actualizó correctamente'});
        })
    },
    delete: function(req, res, next) {
        modelPost.findByIdAndDelete(req.params.id, (err, post) => {
            if(err){
                return res.status(500).send({error: 'Ocurrió un problema'})
              }
              res.send({success: 'Se eliminó correctamente'})
        })
    }
};
