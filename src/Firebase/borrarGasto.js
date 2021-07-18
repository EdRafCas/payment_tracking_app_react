import { db } from "./FirebaseConfig"

const borrarGasto = (id) => {
      db.collection('gastos').doc(id).delete();
}

export default borrarGasto;