import zod, {z} from "zod"

const ropaSquema = zod.object({
    nombre: z.string(),
    precio: z.num(),
    imagen: z.string(),
    categoria: z.string(),
    caracteriscas: z.object({
        color: z.string(),
        talle: z.string(),
        marca: z.string()

    }),
    descripcion: z.string()

})

const ropaSquemaFast = Zod.object({
    nombre: z.string(),
    precio: z.num(),
    imagen: z.string(),
    categoria: z.string(),
    descripcion: z.string(),
    cantidad: z.num().min(0)

})

function validateRopa(obj) {
    return ropaSquemaFast.safeParse(obj)
    
}