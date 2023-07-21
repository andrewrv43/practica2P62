const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());
var usuarios='{';
app.get('/misitio', (req, res) => {
  res.send('Bienvenido a mi sitio web');
});

app.listen(port, () => {
  console.log('Servidor escuchando en el puerto ' + port);
});

app.get('/misitio/about', (req,res)=>{
  res.send('<h1>Acerca de nosotros</h1>');
 });

 app.get('/misitio/gastos', (req,res)=>{
  res.json(
  {
  gasto:'Salud',
  monto:14575.60,
  informacion:'Corresponde a consultas médicas, pagos de seguros, medicinas'
  }
  );
 });

 app.post('/misitio/calculo', (req,res)=>{
  console.log(req.body);
  res.send('Cálculo impuesto a la renta');
 });

 app.post('/misitio/usuarios/:id',(req, res)=>{
  console.log(req.body);
  console.log(req.params);
  usuarios+=JSON.stringify(req.body)+',';
  res.send('Usuario nuevo registrado');
  })
 
  app.delete('/misitio/usuario/:id', (req,res)=>{
    res.send('Usuario '+ (req.params.id) +' borrado');
   });

   app.put('/misitio/usuarios/:id',(req, res)=>{
    console.log(req.body);
    console.log(req.params);
    res.send('Usuario ACTUALIZADO');
    })

    app.get('/misitio/usuarios',(req,res)=>{
      const imprimir=usuarios+'}';
      
      res.json(imprimir);
    });

    app.put('/misitio/gastos', (req, res) => {
      const gastoVivienda = {
      gasto: 'VIVIENDA',
      monto: req.body.monto,
      informacion: 'Corresponde a gastos relacionados con vivienda'
      };
      console.log(gastoVivienda);
      res.send('Monto del gasto de VIVIENDA actualizado');
      });

      app.delete('/misitio/gastos/:id', (req, res) => {
        const gastoId = req.params.id;
        
        if (gastoId == 435)
        res.send('Gastos con ID ' + gastoId + ' borrados');
        else
        res.send('Gastos con ID ' + gastoId + ' no pueden ser borrados');
        });