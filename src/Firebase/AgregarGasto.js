import {db} from './FirebaseConfig';

const agregarGasto = ({categoria, descripcion, cantidad, fecha, uidUsuario}) => {
      return db.collection('gastos').add({
            categoria: categoria,
            descripcion: descripcion,
            cantidad: Number(cantidad), 
            fecha: fecha,
            uidUsuario: uidUsuario
      })
}

export default agregarGasto;