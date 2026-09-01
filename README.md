# El Primero

Página de pedidos para Restaurante El Primero. Es una implementación frontend autocontenida, sin dependencias, que usa el menú oficial importado en `menu.json`.

## Ejecutar localmente

```bash
python3 -m http.server 4173
```

Luego abre `http://localhost:4173`.

Los pedidos de prueba se guardan en `localStorage` del navegador como `el-primero-orders-v1`. El botón de WhatsApp genera un mensaje con el pedido registrado usando el número público configurado por el restaurante.
