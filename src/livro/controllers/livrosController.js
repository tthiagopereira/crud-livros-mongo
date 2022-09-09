import livros from "../../models/Livro.js";

class LivroController {
    
    index = (req, res) => {
        livros.find((err, livros) => {
            res.status(200).json(livros);
        })
    }

    create = async (req, res) => {
        const livro = new livros(req.body);
        
        await livro.save()

        res.status(201).send(livro.toJSON());
    }

    findById = (req, res) => {
        const id = req.params.id;
        livros.findById(id, (err, livro) => {
            if(err) {
                res.status(400).send({message: err.message});
            }else{
                res.status(200).send(livro.toJSON())
            }
        })
    }
 
    remove = async (req, res) => {
        const id = req.params.id;
        livros.findByIdAndDelete(id, (err) => {
            if(!err) {
                res.status(204).send('Excluido com sucesso')
            }else{
                res.status(400).send({message: 'Erro na exclusão'})
            }
        })
        res.status(204).send('Removida com sucesso');
    }

    update = async (req, res) => {
        const id = req.params.id;
        console.log(id);
        livros.findOneAndUpdate({where: {id}}, {$set: req.body}, (err) => {
            if(!err) {
                res.status(200).send({message: 'Atualizado com sucesso'});
            }else{
                res.status(500).send({message: err.message})
            }
        })
    }

} 

const livroController = new LivroController();

export default livroController;