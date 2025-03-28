import { readJSON } from "../utils.js";
import { Router } from "express";


const productosRouter = Router();
const productos = readJSON('./productos.json')

productosRouter.get('/catalogo?', (req, res) => {
    // llamada general y paginacion
    console.log(req.query)
    const {pag,limit } = req.query
    console.log(pag, limit)
    const parsePag = parseInt(pag)
    const parseLimit = parseInt(limit)
    console.log(pag, limit)
    if(limit){
        const productoslimit = productos.slice(parsePag *parseLimit,parsePag * parseLimit + parseLimit )
        res.json(productoslimit)
    }else{
        const productoslimit = productos.slice(pag * 10, pag * 10 + 10)
        res.json(productoslimit)
    }
    
})
productosRouter.get('/producto?', (req, res) => {
    console.log(req.query)

    const {categoria} = req.query
    if(categoria){

       const filtro =  productos.filter(producto => producto.categoria.includes(categoria))
        
       return res.json(filtro)
    }
    return res.json({error: 'No se encontro la categoria'})

})

productosRouter.get('/porducto/:id', (req, res) => {
    console.log(req.params.id)
    conosole.log(x)
    const params = req.params.id
    const productoById = productos.find(product => product.id === params)
    
    return res.json(productoById)
})

productosRouter.post('/producto', (req, res) => {
    const data = req.body
    console.log(data)
    productos.push(data)
    res.json({messaje:"correct"})
})

productosRouter.put('/porducto/:id', (req, res) => {
    const params = req.params.id
    const productoById = productos.findIndex(product => product.id === params)

    productos.slice(productoById,1)
    return res.json(productoById)
})

// Es importante mencionar que el req.query no es la única manera de enviar información al servidor. Express.js también ofrece otros dos objetos fundamentales: req.params y req.body. Los route parameters (parámetros de ruta) son parte de la propia ruta y se utilizan para capturar valores específicos. Por ejemplo, si tienes una ruta /producto/:id, puedes acceder al valor de id a través de req.params.id.
// productosRouter.get('/', (req, res) => {
//     res.json(productos)
// })


export default productosRouter