export const formulario = (req, res) => {
    res.send(`<h1>Formulario de productos</h1>
        <label for="">Nombre Producto</label>
            <input type="text">
            <label for="">Categoria</label>
            <input type="text">
          <label for="">precio</label>
            <input type="number">`)
}