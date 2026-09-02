const STORAGE_CART = 'el-primero-cart-v1';
const STORAGE_ORDER_COMMENT = 'el-primero-order-comment-v1';
const STORAGE_ORDERS = 'el-primero-orders-v1';
const STORAGE_LANGUAGE = 'el-primero-language';
const WHATSAPP_NUMBER = '50625601234';
const DISCOUNT_PERCENT = 10;
const DELIVERY_FEE = 0;
const FEATURED_PRODUCTS = [
  { id: 1, image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=900&h=650&q=82', alt: 'Arroz cantonés con camarones, carnes y vegetales recién servido.' },
  { id: 26, image: 'https://images.unsplash.com/photo-1758979690131-11e2aa0b142b?auto=format&fit=crop&w=900&h=650&q=82', alt: 'Chop suey tradicional con pollo, fideos y vegetales.' },
  { id: 45, image: 'https://images.unsplash.com/photo-1578419997901-b409e7e400b8?auto=format&fit=crop&w=900&h=650&q=82', alt: 'Chau min tradicional con carne y vegetales.' },
  { id: 68, image: 'https://images.unsplash.com/photo-1767429012942-b707f5a8b704?auto=format&fit=crop&w=900&h=650&q=82', alt: 'Bistec salteado con cebolla y chile dulce.' },
];


const EXTRAS = [
  { id: 'camarones', name: 'Camarones extra', price: 2400 },
  { id: 'carne', name: 'Carne extra', price: 2400 },
  { id: 'chorizo', name: 'Chorizo extra', price: 1800 },
  { id: 'verdura', name: 'Verdura extra', price: 1000 },
  { id: 'huevo', name: 'Huevo extra', price: 500 },
];
const EXTRA_IDS_BY_CATEGORY = {
  'Arroz Frito': ['camarones', 'carne', 'chorizo', 'verdura', 'huevo'],
  'Arroz En Salsa': ['camarones', 'carne', 'verdura'],
  'Arroz En Salsa Tomate': ['camarones', 'carne', 'verdura'],
  'Arroz En Salsa Curry': ['camarones', 'carne', 'verdura'],
  'Chop Suey En Salsa': ['camarones', 'carne', 'chorizo', 'verdura'],
  'Chop Suey En Seco': ['camarones', 'carne', 'chorizo', 'verdura'],
  'Chau Min': ['camarones', 'carne', 'verdura'],
  Espagueti: ['camarones', 'carne', 'verdura'],
  Sopa: ['camarones', 'carne', 'verdura', 'huevo'],
};

const CATEGORY_ORDER = [
  'Todos', 'Bebidas', 'Casados Combinado', 'Casados Chino', 'Arroz Frito',
  'Arroz En Salsa', 'Arroz En Salsa Tomate', 'Arroz En Salsa Curry',
  'Chop Suey En Salsa', 'Chop Suey En Seco', 'Chau Min', 'Espagueti', 'Sopa',
  'Aperitivos', 'Carne De Res', 'Carne De Cerdo', 'Pescado', 'Camarones',
  'Carne Blanca', 'Ensaladas Frias', 'Platillos De China', 'Combos',
  'combos familiar',
];

const CATEGORY_META = {
  Todos: { label: 'Todo el menú', glyph: '✦' },
  Bebidas: { label: 'Bebidas', glyph: '◌' },
  'Casados Combinado': { label: 'Casados combinado', glyph: '◆' },
  'Casados Chino': { label: 'Casados chino', glyph: '◇' },
  'Arroz Frito': { label: 'Arroz frito', glyph: '◒' },
  'Arroz En Salsa': { label: 'Arroz en salsa', glyph: '◓' },
  'Arroz En Salsa Tomate': { label: 'Arroz con tomate', glyph: '●' },
  'Arroz En Salsa Curry': { label: 'Arroz al curry', glyph: '◉' },
  'Chop Suey En Salsa': { label: 'Chop suey en salsa', glyph: '≋' },
  'Chop Suey En Seco': { label: 'Chop suey seco', glyph: '≈' },
  'Chau Min': { label: 'Chau min', glyph: '∿' },
  Espagueti: { label: 'Espagueti', glyph: '⌁' },
  Sopa: { label: 'Sopas', glyph: '◍' },
  Aperitivos: { label: 'Aperitivos', glyph: '✧' },
  'Carne De Res': { label: 'Carne de res', glyph: '◆' },
  'Carne De Cerdo': { label: 'Carne de cerdo', glyph: '◇' },
  Pescado: { label: 'Pescado', glyph: '♢' },
  Camarones: { label: 'Camarones', glyph: '✦' },
  'Carne Blanca': { label: 'Carne blanca', glyph: '◉' },
  'Ensaladas Frias': { label: 'Ensaladas frías', glyph: '✿' },
  'Platillos De China': { label: 'Platillos de China', glyph: '◎' },
  Combos: { label: 'Combos', glyph: '♧' },
  'combos familiar': { label: 'Combos familiares', glyph: '♧' },
};

const EN = {
  'El Primero | Cocina asiática': 'El Primero | Asian cuisine',
  'Pide comida asiática de El Primero para recoger o recibir en casa.': 'Order Asian food from El Primero for pickup or delivery.',
  'cocina asiática': 'Asian cuisine',
  'Saltar al menú': 'Skip to menu',
  'Navegación principal': 'Primary navigation',
  'Menú': 'Menu',
  'Cómo pedir': 'How to order',
  'El Primero, inicio': 'El Primero, home',
  'Logo de El Primero': 'El Primero logo',
  'Cambiar idioma a inglés': 'Switch language to English',
  'Arroz cantonés tradicional con huevo, vegetales y salsa de soya.': 'Traditional Cantonese fried rice with egg, vegetables, and soy sauce.',
  'Chop suey tradicional con pollo, fideos y vegetales.': 'Traditional chop suey with chicken, noodles, and vegetables.',
  'Chau min tradicional con carne y vegetales.': 'Traditional chow mein with beef and vegetables.',
  'Bistec salteado con cebolla y chile dulce.': 'Stir-fried beef with onion and sweet pepper.',
  'Información': 'Information',
  'Preferencias': 'Preferences',
  'Mi pedido': 'My order',
  'Hecho al momento': 'Made to order',
  'Lo bueno': 'Good food',
  'se comparte.': 'is meant to be shared.',
  'Arroz frito, chop suey y favoritos de la casa. Elige tus platos, arma tu pedido y nosotros hacemos el resto.': 'Fried rice, chop suey, and house favorites. Choose your dishes, build your order, and we will handle the rest.',
  'Explorar menú': 'Explore menu',
  'Ver mi pedido': 'View my order',
  'Beneficios de pedir en El Primero': 'Benefits of ordering from El Primero',
  'de descuento': 'discount',
  'envío': 'delivery',
  'formas de pago': 'payment methods',
  'Promoción válida de agosto a octubre de 2026: 10% de descuento y delivery gratis dentro de un radio de 5 km.': 'Offer valid from August through October 2026: 10% off and free delivery within 5 km.',
  '¿Cómo quieres recibirlo?': 'How would you like it?',
  'Envío gratis': 'Free delivery',
  'Recoger': 'Pickup',
  'En el restaurante': 'At the restaurant',
  'El menú': 'The menu',
  'Tu próximo antojo': 'Your next craving',
  'empieza aquí.': 'starts here.',
  'Los clásicos que ya conoces, más ese plato que todavía no has probado. Selecciona cualquier opción para elegir tamaño, extras y cantidad.': 'The classics you know, plus the dish you have not tried yet. Select any option to choose a size, extras, and quantity.',
  'Recomendados': 'Recommended',
  'Favoritos de la casa': 'House favorites',
  'Imágenes ilustrativas': 'Images for reference',
  'Categorías del menú': 'Menu categories',
  'Explorar por': 'Browse by',
  'Buscar en el menú': 'Search the menu',
  'Busca por nombre o ingrediente': 'Search by name or ingredient',
  'Cargando menú...': 'Loading menu...',
  'Explora por categoría o busca directamente un plato.': 'Browse by category or search for a dish.',
  'Así de fácil': 'It is that easy',
  'Un pedido sin': 'An order without',
  'complicaciones.': 'complications.',
  'Menos pasos entre tu antojo y la mesa.': 'Fewer steps between your craving and the table.',
  'Arma tu plato': 'Build your dish',
  'Elige tamaño y agrega los extras disponibles para cada plato.': 'Choose a size and add the extras available for each dish.',
  'Revisa tu pedido': 'Review your order',
  'Controla cantidades, deja un solo comentario para el pedido y revisa el total.': 'Adjust quantities, leave one note for the order, and review the total.',
  'Recibe y disfruta': 'Receive and enjoy',
  'Pago en efectivo, tarjeta contra entrega o SINPE Móvil.': 'Pay with cash, card on delivery, or SINPE Móvil.',
  'Información del restaurante': 'Restaurant information',
  'Aquí te esperamos.': 'We are ready for you.',
  'Todo lo que necesitas para visitarnos o pedir desde casa.': 'Everything you need to visit us or order from home.',
  'Horario': 'Hours',
  'Martes a domingo': 'Tuesday to Sunday',
  'Ubicación': 'Location',
  '150 m este de AMPM, frente a la fábrica Smurfit Westrock, junto a Ferretería Jizar, Lagunilla de Heredia.': '150 m east of AMPM, across from the Smurfit Westrock factory, next to Ferretería Jizar, Lagunilla, Heredia.',
  'Cobertura': 'Delivery area',
  'Delivery gratis dentro de un radio de 5 km.': 'Free delivery within 5 km.',
  'Contacto': 'Contact',
  'Teléfono: 2560-1234': 'Phone: 2560-1234',
  '¿Tienes una pregunta?': 'Have a question?',
  'Escríbenos y te ayudamos con tu pedido.': 'Message us and we will help with your order.',
  'Un sabor que siempre vuelve.': 'A flavor worth coming back to.',
  'Todo el menú': 'Full menu',
  'Bebidas': 'Drinks',
  'Casados combinado': 'Combination plates',
  'Casados chino': 'Chinese plates',
  'Arroz frito': 'Fried rice',
  'Arroz en salsa': 'Rice in sauce',
  'Arroz con tomate': 'Tomato rice',
  'Arroz al curry': 'Curry rice',
  'Chop suey en salsa': 'Chop suey in sauce',
  'Chop suey seco': 'Dry chop suey',
  'Chau min': 'Chow mein',
  'Espagueti': 'Spaghetti',
  'Sopas': 'Soups',
  'Aperitivos': 'Appetizers',
  'Carne de res': 'Beef',
  'Carne de cerdo': 'Pork',
  'Pescado': 'Fish',
  'Camarones': 'Shrimp',
  'Carne blanca': 'Poultry',
  'Ensaladas frías': 'Cold salads',
  'Platillos de China': 'Chinese dishes',
  'Combos familiares': 'Family combos',
  'Camarones extra': 'Extra shrimp',
  'Carne extra': 'Extra beef',
  'Chorizo extra': 'Extra chorizo',
  'Verdura extra': 'Extra vegetables',
  'Huevo extra': 'Extra egg',
  'medio': 'half',
  'entero': 'full',
  'unidad': 'each',
  'orden': 'order',
  'opción': 'option',
  'opciones': 'options',
  'para': 'for',
  'en': 'in',
  'pequeño': 'small',
  'vaso': 'cup',
  'vidrio': 'glass bottle',
  'Resultados para': 'Results for',
  'Selecciona un plato para elegir tamaño, extras y cantidad.': 'Select a dish to choose a size, extras, and quantity.',
  'No encontramos ese antojo.': 'We could not find that craving.',
  'Prueba con otro nombre o vuelve a ver todo el menú.': 'Try another name or return to the full menu.',
  'Desde': 'From',
  'Precio': 'Price',
  'Personalizar': 'Customize',
  'en tu pedido': 'in your order',
  'Disminuir cantidad de': 'Decrease quantity of',
  'Aumentar cantidad de': 'Increase quantity of',
  'Quitar': 'Remove',
  'Cantidad': 'Quantity',
  'Comentario para el pedido (opcional)': 'Order note (optional)',
  'Ej: sin cubiertos o indicaciones de entrega': 'E.g. no utensils or delivery instructions',
  'Subtotal': 'Subtotal',
  'Envío': 'Delivery',
  'Gratis': 'Free',
  'Descuento': 'Discount',
  'Total': 'Total',
  'Tu pedido': 'Your order',
  'Tu pedido está esperando algo rico. Explora el menú y agrega tus favoritos.': 'Your order is waiting for something delicious. Browse the menu and add your favorites.',
  'artículo': 'item',
  'artículos': 'items',
  'Continuar al checkout': 'Continue to checkout',
  'Personaliza tu pedido': 'Customize your order',
  'Cerrar': 'Close',
  'Elige el tamaño': 'Choose a size',
  'Tamaño de': 'Size for',
  'Extras (opcional)': 'Extras (optional)',
  'Disminuir cantidad': 'Decrease quantity',
  'Aumentar cantidad': 'Increase quantity',
  'Agregar al pedido': 'Add to order',
  'Agregado al pedido': 'Added to order',
  'Antes de confirmar': 'Before confirming',
  'Agrega algo al pedido para continuar': 'Add something to your order to continue',
  'Último paso': 'Last step',
  'Confirmar pedido': 'Confirm order',
  'Cerrar checkout': 'Close checkout',
  'Delivery seleccionado · envío gratis': 'Delivery selected · free delivery',
  'Recoger seleccionado · te esperamos en el restaurante': 'Pickup selected · we will see you at the restaurant',
  'Nombre': 'Name',
  'Tu nombre': 'Your name',
  'Teléfono': 'Phone',
  'Dirección de entrega': 'Delivery address',
  'Provincia, cantón, señas exactas...': 'Province, canton, exact directions...',
  'Forma de pago': 'Payment method',
  'Efectivo': 'Cash',
  'Si necesitas cambio, indícalo abajo.': 'If you need change, tell us below.',
  'Tarjeta': 'Card',
  'Pago contra entrega.': 'Pay on delivery.',
  'El restaurante te indica los datos al confirmar.': 'The restaurant will provide the details when confirming.',
  '¿Con cuánto pagarás? (opcional)': 'Cash amount (optional)',
  'Ej: 10000': 'E.g. 10000',
  'Te ayudaremos a calcular el cambio.': 'We will help calculate your change.',
  'Preparar pedido': 'Prepare order',
  'Al continuar guardaremos tu pedido en este dispositivo y podrás enviarlo al restaurante por WhatsApp.': 'We will save your order on this device so you can send it to the restaurant on WhatsApp.',
  'Resumen del pedido': 'Order summary',
  'Resumen': 'Summary',
  'Tarjeta contra entrega': 'Card on delivery',
  'Escribe un teléfono válido de al menos 8 dígitos.': 'Enter a valid phone number with at least 8 digits.',
  'Pendiente de envío': 'Pending delivery',
  'Pedido listo para enviar': 'Order ready to send',
  'Guardamos tu pedido en este dispositivo. El restaurante lo recibirá únicamente cuando toques la opción de enviarlo por WhatsApp.': 'Your order is saved on this device. The restaurant will receive it only when you send it through WhatsApp.',
  'Cliente': 'Customer',
  'Pago': 'Payment',
  'Enviar pedido por WhatsApp': 'Send order on WhatsApp',
  'Volver al menú': 'Back to menu',
  'Cerrar menú': 'Close menu',
  'Abrir menú': 'Open menu',
  'Delivery seleccionado': 'Delivery selected',
  'Recoger seleccionado': 'Pickup selected',
  'Tu pedido está vacío': 'Your order is empty',
  'Mostrando una selección mientras se carga el menú completo. Si estás abriendo el archivo directamente, inicia un servidor local para consultar las 143 opciones.': 'Showing a selection while the full menu loads. If you opened this file directly, start a local server to browse all 143 options.',
};

const originalText = new WeakMap();
const originalAttributes = new WeakMap();

function readPreference(key, fallback) {
  try { return localStorage.getItem(key) || fallback; } catch { return fallback; }
}

const state = {
  products: [],
  activeCategory: 'Todos',
  query: '',
  cart: [],
  orderComment: '',
  mode: 'delivery',
  language: readPreference(STORAGE_LANGUAGE, 'es') === 'en' ? 'en' : 'es',
  payment: 'cash',
  editingProduct: null,
  editingDraft: null,
  mobileNavOpen: false,
  modal: { type: null, trigger: null, scrollY: 0, bodyStyles: null, closeOnBackdrop: true, closeOnEscape: true },
  toastTimer: null,
};

const fallbackProducts = [
  { id: 1, name: '#1 Arroz el primero', category_name: 'Arroz Frito', Price: 3300, units: [{ id: 1, name: 'medio', Price: 3300 }, { id: 184, name: 'entero', Price: 4300 }] },
  { id: 2, name: '#2 Arroz con pollo', category_name: 'Arroz Frito', Price: 3300, units: [{ id: 2, name: 'medio', Price: 3300 }, { id: 185, name: 'entero', Price: 4300 }] },
  { id: 26, name: '#26 Chop suey de la casa', category_name: 'Chop Suey En Salsa', Price: 3300, units: [{ id: 26, name: 'medio', Price: 3300 }, { id: 272, name: 'entero', Price: 4300 }] },
  { id: 45, name: '#36 Chau min de la casa', category_name: 'Chau Min', Price: 4300, units: [{ id: 45, name: 'medio', Price: 4300 }, { id: 239, name: 'entero', Price: 5300 }] },
  { id: 69, name: '#53 Bistec el primero', category_name: 'Carne De Res', Price: 6900, units: [{ id: 69, name: 'orden', Price: 6900 }] },
  { id: 120, name: 'Coca Cola', category_name: 'Bebidas', Price: 1200, units: [{ id: 120, name: 'unidad', Price: 1200 }] },
];

const money = (amount) => `₡${Math.round(Number(amount) || 0).toLocaleString('es-CR')}`;
const cleanText = (value) => String(value ?? '').replace(/[\u200B-\u200D\uFEFF]/g, '').replace(/\s+/g, ' ').trim();
function productDisplayName(value) {
  const source = cleanText(value).replace(/^#[^\s]+\s*/, '').toLocaleLowerCase('es-CR');
  if (!source) return '';
  const normalized = source
    .replace(/\s*,\s*/g, ', ')
    .replace(/\bcamarones frito\b/g, 'camarones fritos')
    .replace(/\bel primero\b/g, 'El Primero')
    .replace(/\bsaho fan\b/g, 'Saho Fan')
    .replace(/\bcoca cola zero\b/g, 'Coca Cola Zero')
    .replace(/\bcoca cola\b/g, 'Coca Cola')
    .replace(/\bfanta kolita\b/g, 'Fanta Kolita')
    .replace(/\bfanta naranja\b/g, 'Fanta Naranja')
    .replace(/\bfanta uva\b/g, 'Fanta Uva')
    .replace(/\btropical de frutas\b/g, 'Tropical de Frutas')
    .replace(/\bpepsi\b/g, 'Pepsi')
    .replace(/\b7up\b/g, '7UP')
    .replace(/\b79s\b/g, '79S')
    .replace(/\bchina\b/g, 'China')
    .replace(/\b(\d+(?:\.\d+)?)\s*l\b/g, '$1 L')
    .replace(/^sopa de wan tan de c$/, 'Sopa de wan tan de C');
  return `${normalized.charAt(0).toLocaleUpperCase('es-CR')}${normalized.slice(1)}`;
}
const escapeHtml = (value) => String(value ?? '').replace(/[&<>'"]/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[char]));
const slug = (value) => cleanText(value).toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
const reducedMotion = () => window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
const t = (text) => state.language === 'en' ? (EN[text] || text) : text;
const categoryLabel = (category) => t(CATEGORY_META[category]?.label || cleanText(category));
const unitLabel = (unit) => t(cleanText(unit));
const extraLabel = (extra) => t(cleanText(extra.name));

function savePreference(key, value) {
  try { localStorage.setItem(key, value); } catch { /* The current session still keeps the preference. */ }
}

function translateStaticContent() {
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  let node;
  while ((node = walker.nextNode())) {
    if (!originalText.has(node)) originalText.set(node, node.nodeValue);
    const source = originalText.get(node);
    const value = cleanText(source);
    if (!value) continue;
    const leading = source.match(/^\s*/)?.[0] || '';
    const trailing = source.match(/\s*$/)?.[0] || '';
    node.nodeValue = `${leading}${t(value)}${trailing}`;
  }
  document.querySelectorAll('[aria-label], [placeholder]').forEach((element) => {
    if (element.matches('#headerCartButton, #mobileCartButton, #mobileNavToggle, #languageToggle')) return;
    if (!originalAttributes.has(element)) originalAttributes.set(element, {});
    const stored = originalAttributes.get(element);
    ['aria-label', 'placeholder'].forEach((attribute) => {
      if (!element.hasAttribute(attribute)) return;
      if (!(attribute in stored)) stored[attribute] = element.getAttribute(attribute);
      element.setAttribute(attribute, t(stored[attribute]));
    });
  });
  document.documentElement.lang = state.language;
  document.title = t('El Primero | Cocina asiática');
  document.querySelector('meta[name="description"]')?.setAttribute('content', t('Pide comida asiática de El Primero para recoger o recibir en casa.'));
  const languageToggle = document.getElementById('languageToggle');
  languageToggle.textContent = state.language === 'es' ? 'EN' : 'ES';
  languageToggle.setAttribute('aria-label', state.language === 'es' ? 'Cambiar idioma a inglés' : 'Switch language to Spanish');
}


function extrasForCategory(category, selectedIds = null) {
  const allowedIds = EXTRA_IDS_BY_CATEGORY[cleanText(category)] || [];
  const selected = selectedIds === null ? null : new Set(selectedIds);
  return EXTRAS.filter((extra) => allowedIds.includes(extra.id) && (!selected || selected.has(extra.id)));
}

function normalizeOrderComment(value) {
  return String(value ?? '').replace(/[\u200B-\u200D\uFEFF]/g, '').replace(/[\r\n\u2028\u2029]+/g, ' ').slice(0, 180);
}

function normalizeCartLine(line) {
  const productId = Number(line?.productId);
  const quantityValue = Number(line?.quantity);
  if (!Number.isFinite(productId) || productId <= 0 || !Number.isFinite(quantityValue) || quantityValue <= 0) return null;
  const quantity = Math.min(20, Math.max(1, quantityValue));
  const category = cleanText(line.category);
  const unitId = line.unitId ?? productId;
  const extras = extrasForCategory(category, Array.isArray(line.extras) ? line.extras.map((extra) => extra?.id) : []).map((extra) => ({ ...extra }));
  return {
    key: JSON.stringify([productId, unitId, extras.map((extra) => extra.id).sort()]),
    productId,
    productName: productDisplayName(line.productName) || 'Producto',
    category,
    unitId,
    unitName: cleanText(line.unitName) || 'unidad',
    price: Number(line.price) || 0,
    quantity,
    extras,
  };
}

function readCart() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_CART) || '[]');
    if (!Array.isArray(saved)) return [];
    return saved.map(normalizeCartLine).filter(Boolean).reduce((cart, line) => {
      const existing = cart.find((item) => item.key === line.key);
      if (existing) existing.quantity = Math.min(20, existing.quantity + line.quantity);
      else cart.push(line);
      return cart;
    }, []);
  } catch {
    return [];
  }
}

function readOrderComment() {
  if (!state.cart.length) return '';
  try {
    return cleanText(localStorage.getItem(STORAGE_ORDER_COMMENT) || '').slice(0, 180);
  } catch {
    return '';
  }
}

function saveOrderComment() {
  try {
    const comment = cleanText(state.orderComment).slice(0, 180);
    if (comment) localStorage.setItem(STORAGE_ORDER_COMMENT, comment);
    else localStorage.removeItem(STORAGE_ORDER_COMMENT);
  } catch {
    // The in-memory comment remains usable when browser storage is unavailable.
  }
}

function clearOrderComment() {
  state.orderComment = '';
  try {
    localStorage.removeItem(STORAGE_ORDER_COMMENT);
  } catch {
    // The in-memory cart remains usable when browser storage is unavailable.
  }
}

function saveCart() {
  if (!state.cart.length) clearOrderComment();
  try {
    localStorage.setItem(STORAGE_CART, JSON.stringify(state.cart));
  } catch {
    // The in-memory cart remains usable when browser storage is unavailable.
  }
}

function productUnits(product) {
  const units = Array.isArray(product.units) && product.units.length ? product.units : [{ id: product.id, name: 'unidad', Price: product.Price }];
  return units.map((unit, index) => ({ ...unit, id: unit.id ?? `${product.id}-${index}`, name: cleanText(unit.name) || 'unidad', Price: Number(unit.Price ?? product.Price) }));
}

function productSearchText(product) {
  const tastes = Array.isArray(product.Tastes) ? product.Tastes.join(' ') : product.Tastes || '';
  return slug(`${product.name} ${product.category_name} ${product.Notes || ''} ${tastes}`);
}

function categoryNames() {
  const existing = [...new Set(state.products.map((product) => cleanText(product.category_name)).filter(Boolean))];
  const ordered = CATEGORY_ORDER.filter((category) => category === 'Todos' || existing.includes(category));
  return [...ordered, ...existing.filter((category) => !ordered.includes(category))];
}

function getVisibleProducts() {
  const query = slug(state.query);
  return state.products.filter((product) => {
    const categoryMatch = state.activeCategory === 'Todos' || cleanText(product.category_name) === state.activeCategory;
    return categoryMatch && (!query || productSearchText(product).includes(query));
  });
}

function cartQuantityFor(productId) {
  return state.cart.filter((line) => line.productId === productId).reduce((sum, line) => sum + Number(line.quantity || 0), 0);
}

function lineUnitTotal(line) {
  const extras = extrasForCategory(line.category, (line.extras || []).map((extra) => extra?.id));
  return (Number(line.price) + extras.reduce((sum, extra) => sum + extra.price, 0)) * Number(line.quantity || 0);
}

function cartSubtotal() {
  return state.cart.reduce((sum, line) => sum + lineUnitTotal(line), 0);
}

function orderTotals() {
  const subtotal = cartSubtotal();
  const discount = Math.round(subtotal * (DISCOUNT_PERCENT / 100));
  const deliveryFee = state.mode === 'delivery' ? DELIVERY_FEE : 0;
  return { subtotal, discount, deliveryFee, total: subtotal - discount + deliveryFee };
}

function renderCategoryButtons() {
  const categories = categoryNames();
  document.getElementById('categoryNav').innerHTML = categories.map((category) => {
    const meta = CATEGORY_META[category] || { glyph: '•' };
    const active = state.activeCategory === category;
    return `<button class="category-button ${active ? 'is-active' : ''}" data-category="${escapeHtml(category)}" aria-pressed="${active}" type="button"><span class="category-glyph" aria-hidden="true">${meta.glyph}</span><span>${escapeHtml(categoryLabel(category))}</span></button>`;
  }).join('');
  document.getElementById('mobileCategorySelect').innerHTML = categories.map((category) => `<option value="${escapeHtml(category)}" ${state.activeCategory === category ? 'selected' : ''}>${escapeHtml(categoryLabel(category))}</option>`).join('');
}

function setMenuAnnouncement(message) {
  document.getElementById('resultCount').textContent = message;
}

function renderCategoryIndex() {
  const categories = categoryNames().filter((category) => category !== 'Todos');
  const counts = state.products.reduce((result, product) => {
    const category = cleanText(product.category_name);
    result[category] = (result[category] || 0) + 1;
    return result;
  }, {});
  const grid = document.getElementById('productGrid');
  grid.className = 'category-index';
  setMenuAnnouncement('');
  document.getElementById('menuViewHint').textContent = t('Explora por categoría o busca directamente un plato.');
  grid.innerHTML = categories.map((category) => {
    const meta = CATEGORY_META[category] || { glyph: '•' };
    const count = counts[category] || 0;
    return `<button class="category-index-card" data-category="${escapeHtml(category)}" type="button">
      <span class="category-index-icon" aria-hidden="true">${meta.glyph}</span>
      <span class="category-index-copy"><strong>${escapeHtml(categoryLabel(category))}</strong><small>${count} ${t(count === 1 ? 'opción' : 'opciones')}</small></span>
      <span class="category-index-arrow" aria-hidden="true">↗</span>
    </button>`;
  }).join('');
}

function renderProducts() {
  const products = getVisibleProducts();
  const activeCategoryLabel = categoryLabel(state.activeCategory);
  const queryLabel = cleanText(state.query);
  setMenuAnnouncement(`${products.length} ${t(products.length === 1 ? 'opción' : 'opciones')}${queryLabel ? ` ${t('para')} ${queryLabel}` : ` ${t('en')} ${activeCategoryLabel}`}`);
  const grid = document.getElementById('productGrid');
  grid.className = 'product-grid';
  document.getElementById('menuViewHint').textContent = queryLabel ? `${t('Resultados para')} “${queryLabel}”.` : t('Selecciona un plato para elegir tamaño, extras y cantidad.');
  if (!products.length) {
    grid.innerHTML = `<div class="empty-results"><strong>${t('No encontramos ese antojo.')}</strong><span>${t('Prueba con otro nombre o vuelve a ver todo el menú.')}</span></div>`;
    return;
  }
  grid.innerHTML = products.map((product) => {
    const units = productUnits(product);
    const price = Math.min(...units.map((unit) => unit.Price));
    const quantity = cartQuantityFor(product.id);
    const productName = cleanText(product.name);
    const productLabel = `${t('Personalizar')} ${productName}${quantity ? `, ${quantity} ${t('en tu pedido')}` : ''}`;
    return `<button class="product-card" data-product-id="${product.id}" type="button" aria-label="${escapeHtml(productLabel)}">
      <span class="product-body">
        <span class="product-category">${escapeHtml(categoryLabel(cleanText(product.category_name)))}</span>
        <span class="product-card-title">${escapeHtml(productName)}</span>
        <span class="product-footer">
          <span class="product-price"><span>${t(units.length > 1 ? 'Desde' : 'Precio')}</span><strong>${money(price)}</strong></span>
          <span class="product-footer-actions">
            ${quantity ? `<span class="product-quantity" aria-hidden="true">${quantity}</span>` : ''}
            <span class="add-product" aria-hidden="true">+</span>
          </span>
        </span>
      </span>
    </button>`;
  }).join('');
}
function renderFeaturedProducts() {
  const grid = document.getElementById('featuredGrid');
  grid.innerHTML = FEATURED_PRODUCTS.map((featured) => {
    const product = state.products.find((item) => item.id === featured.id);
    if (!product) return '';
    const units = productUnits(product);
    const price = Math.min(...units.map((unit) => unit.Price));
    const productName = cleanText(product.name);
    return `<button class="featured-card" data-product-id="${product.id}" type="button" aria-label="${t('Personalizar')} ${escapeHtml(productName)}">
      <span class="featured-image"><img src="${featured.image}" alt="${t(featured.alt)}" loading="lazy" width="900" height="650"></span>
      <span class="featured-card-body">
        <span class="featured-card-kicker">${escapeHtml(categoryLabel(cleanText(product.category_name)))}</span>
        <span class="featured-card-title">${escapeHtml(productName)}</span>
        <span class="featured-card-footer"><span>${t(units.length > 1 ? 'Desde' : 'Precio')} <strong>${money(price)}</strong></span><span aria-hidden="true">+</span></span>
      </span>
    </button>`;
  }).join('');
}


function renderMenuView() {
  if (state.activeCategory === 'Todos' && !cleanText(state.query)) renderCategoryIndex();
  else renderProducts();
}

function orderLineMarkup(line, index, context = 'panel') {
  const selectedExtras = extrasForCategory(line.category, (line.extras || []).map((extra) => extra?.id));
  const details = [slug(line.unitName) === 'orden' ? '' : unitLabel(line.unitName), ...selectedExtras.map(extraLabel)].filter(Boolean).map(escapeHtml).join(' · ');
  const label = escapeHtml(line.productName);
  return `<div class="order-line ${context === 'modal' ? 'order-line--modal' : ''}">
    <h3>${label}</h3>
    <span class="order-line-price">${money(lineUnitTotal(line))}</span>
    <div class="order-line-footer">
      <div class="order-line-meta">${details}</div>
      <div class="quantity-control">
        <button data-cart-action="decrease" data-line-index="${index}" data-line-key="${escapeHtml(line.key)}" type="button" aria-label="${t('Disminuir cantidad de')} ${label}">−</button>
        <span aria-label="${t('Cantidad')}: ${line.quantity}">${line.quantity}</span>
        <button data-cart-action="increase" data-line-index="${index}" data-line-key="${escapeHtml(line.key)}" type="button" aria-label="${t('Aumentar cantidad de')} ${label}">+</button>
        <button class="remove-line" data-cart-action="remove" data-line-index="${index}" data-line-key="${escapeHtml(line.key)}" type="button" aria-label="${t('Quitar')} ${label}">×</button>
      </div>
    </div>
  </div>`;
}

function orderCommentMarkup(context) {
  const id = context === 'modal' ? 'orderCommentModal' : 'orderCommentPanel';
  return `<label class="order-comment order-comment--${context}" for="${id}"><span>${t('Comentario para el pedido (opcional)')}</span><input id="${id}" data-order-comment type="text" maxlength="180" value="${escapeHtml(state.orderComment)}" placeholder="${t('Ej: sin cubiertos o indicaciones de entrega')}" /></label>`;
}

function summaryMarkup(totals) {
  return `<div class="order-summary"><div class="summary-row"><span>${t('Subtotal')}</span><strong>${money(totals.subtotal)}</strong></div>${state.mode === 'delivery' ? `<div class="summary-row"><span>${t('Envío')}</span><strong>${totals.deliveryFee ? money(totals.deliveryFee) : t('Gratis')}</strong></div>` : ''}<div class="summary-row summary-row--discount"><span>${t('Descuento')} (${DISCOUNT_PERCENT}%)</span><strong>−${money(totals.discount)}</strong></div><div class="summary-row summary-row--total"><span>${t('Total')}</span><strong>${money(totals.total)}</strong></div></div>`;
}

function renderOrderPanel() {
  const panel = document.getElementById('orderPanel');
  const count = state.cart.reduce((sum, line) => sum + Number(line.quantity || 0), 0);
  const totals = orderTotals();
  const modeLabel = state.mode === 'delivery' ? 'Delivery' : t('Recoger');
  if (!state.cart.length) {
    panel.innerHTML = `<div class="order-panel-head"><div><span class="order-mode-label">${modeLabel}</span><h2 id="orderPanelTitle">${t('Tu pedido')}</h2></div><span class="header-cart-count" aria-label="0 ${t('artículos')}">0</span></div><div class="order-empty"><div><div class="empty-bowl" aria-hidden="true"></div><p>${t('Tu pedido está esperando algo rico. Explora el menú y agrega tus favoritos.')}</p></div></div>`;
    return;
  }
  panel.innerHTML = `<div class="order-panel-head"><div><span class="order-mode-label">${modeLabel}</span><h2 id="orderPanelTitle">${t('Tu pedido')}</h2></div><span class="header-cart-count" aria-label="${count} ${t('artículos')}">${count}</span></div>
    <div class="order-lines">${state.cart.map((line, index) => orderLineMarkup(line, index)).join('')}</div>
    ${orderCommentMarkup('panel')}
    ${summaryMarkup(totals)}
    <button class="checkout-button" data-open-checkout type="button">${t('Continuar al checkout')} <span aria-hidden="true">→</span></button>`;
}

function renderCartIndicators() {
  const count = state.cart.reduce((sum, line) => sum + Number(line.quantity || 0), 0);
  const total = orderTotals().total;
  const itemLabel = t(count === 1 ? 'artículo' : 'artículos');
  const header = document.getElementById('headerCartButton');
  const mobile = document.getElementById('mobileCartButton');
  document.getElementById('headerCartCount').textContent = count;
  document.getElementById('mobileCartCount').textContent = count;
  document.getElementById('mobileCartTotal').textContent = money(total);
  header.setAttribute('aria-label', `${t('Mi pedido')}, ${count} ${itemLabel}, ${t('Total').toLowerCase()} ${money(total)}`);
  mobile.setAttribute('aria-label', `${t('Ver mi pedido')}, ${count} ${itemLabel}, ${t('Total').toLowerCase()} ${money(total)}`);
  mobile.hidden = count === 0;
}

function renderAll() {
  renderCategoryButtons();
  renderFeaturedProducts();
  renderMenuView();
  renderOrderPanel();
  renderCartIndicators();
  document.querySelectorAll('.mode-option').forEach((button) => {
    const active = button.dataset.mode === state.mode;
    button.classList.toggle('is-active', active);
    button.setAttribute('aria-checked', String(active));
    button.tabIndex = active ? 0 : -1;
  });
  translateStaticContent();
}

function getFocusableElements(container) {
  return [...container.querySelectorAll('a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])')].filter((element) => !element.hidden && element.offsetParent !== null);
}

function focusDescriptor(element) {
  const root = document.getElementById('modalRoot');
  if (!element || !root.contains(element)) return { kind: 'close' };
  if (element.id) return { kind: 'id', value: element.id };
  if (element.matches('[data-unit-id]')) return { kind: 'unit', value: element.dataset.unitId };
  if (element.matches('[data-extra-id]')) return { kind: 'extra', value: element.dataset.extraId };
  if (element.matches('[data-product-quantity]')) return { kind: 'product-quantity', value: element.dataset.productQuantity };
  if (element.matches('[data-cart-action]')) return { kind: 'cart-action', value: element.dataset.lineKey, action: element.dataset.cartAction };
  return { kind: 'close' };
}

function findFocusTarget(descriptor, dialog) {
  if (!descriptor) return dialog.querySelector('[data-close-modal]') || dialog;
  if (descriptor.kind === 'id') return document.getElementById(descriptor.value) || dialog;
  if (descriptor.kind === 'unit') return [...dialog.querySelectorAll('[data-unit-id]')].find((element) => element.dataset.unitId === descriptor.value) || dialog.querySelector('[data-close-modal]') || dialog;
  if (descriptor.kind === 'extra') return [...dialog.querySelectorAll('[data-extra-id]')].find((element) => element.dataset.extraId === descriptor.value) || dialog;
  if (descriptor.kind === 'product-quantity') return [...dialog.querySelectorAll('[data-product-quantity]')].find((element) => element.dataset.productQuantity === descriptor.value) || dialog;
  if (descriptor.kind === 'cart-action') return [...dialog.querySelectorAll('[data-cart-action]')].find((element) => element.dataset.lineKey === descriptor.value && element.dataset.cartAction === descriptor.action) || dialog.querySelector('[data-close-modal]') || dialog;
  if (descriptor.kind === 'whatsapp') return dialog.querySelector('#whatsappButton') || dialog;
  return dialog.querySelector('[data-close-modal]') || dialog;
}

function setPageInert(inert) {
  const elements = [document.querySelector('.skip-link'), document.querySelector('.site-shell'), document.getElementById('mobileCartButton'), document.getElementById('toast')].filter(Boolean);
  elements.forEach((element) => {
    element.inert = inert;
    if (inert) element.setAttribute('aria-hidden', 'true');
    else element.removeAttribute('aria-hidden');
  });
}

function lockBodyScroll() {
  state.modal.scrollY = window.scrollY;
  state.modal.bodyStyles = { position: document.body.style.position, top: document.body.style.top, width: document.body.style.width };
  document.body.classList.add('is-modal-open');
  document.body.style.position = 'fixed';
  document.body.style.top = `-${state.modal.scrollY}px`;
  document.body.style.width = '100%';
  setPageInert(true);
}

function restoreBodyScroll() {
  const styles = state.modal.bodyStyles || {};
  const rootScrollBehavior = document.documentElement.style.scrollBehavior;
  document.body.classList.remove('is-modal-open');
  document.body.style.position = styles.position || '';
  document.body.style.top = styles.top || '';
  document.body.style.width = styles.width || '';
  setPageInert(false);
  document.documentElement.style.scrollBehavior = 'auto';
  window.scrollTo({ top: state.modal.scrollY || 0, behavior: 'auto' });
  document.documentElement.style.scrollBehavior = rootScrollBehavior;
}

function focusModal(descriptor) {
  const dialog = document.querySelector('#modalRoot [role="dialog"]');
  if (!dialog) return;
  requestAnimationFrame(() => findFocusTarget(descriptor, dialog).focus({ preventScroll: true }));
}

function renderModal(type, markup, { trigger, focus, closeOnBackdrop = true, closeOnEscape = true } = {}) {
  const wasOpen = Boolean(state.modal.type);
  if (!wasOpen) {
    state.modal.type = type;
    state.modal.trigger = trigger instanceof HTMLElement ? trigger : document.activeElement;
    state.modal.closeOnBackdrop = closeOnBackdrop;
    state.modal.closeOnEscape = closeOnEscape;
    lockBodyScroll();
  } else {
    state.modal.type = type;
    state.modal.closeOnBackdrop = closeOnBackdrop;
    state.modal.closeOnEscape = closeOnEscape;
  }
  document.getElementById('modalRoot').innerHTML = markup;
  focusModal(focus || { kind: 'close' });
}

function closeModal({ focusTarget } = {}) {
  if (!state.modal.type) {
    document.getElementById('modalRoot').innerHTML = '';
    return;
  }
  const trigger = focusTarget || state.modal.trigger;
  document.getElementById('modalRoot').innerHTML = '';
  restoreBodyScroll();
  state.modal = { type: null, trigger: null, scrollY: 0, bodyStyles: null, closeOnBackdrop: true, closeOnEscape: true };
  state.editingProduct = null;
  state.editingDraft = null;
  const target = trigger instanceof HTMLElement && trigger.isConnected && !trigger.hidden ? trigger : document.getElementById('headerCartButton');
  target?.focus({ preventScroll: true });
}

function focusCartAction(lineKey, action) {
  [...document.querySelectorAll('[data-cart-action]')]
    .find((element) => element.dataset.lineKey === lineKey && element.dataset.cartAction === action)
    ?.focus({ preventScroll: true });
}

function openProductModal(productId, trigger = document.activeElement) {
  const product = state.products.find((item) => Number(item.id) === Number(productId));
  if (!product) return;
  const units = productUnits(product);
  state.editingProduct = product;
  state.editingDraft = { unitId: units[0].id, quantity: 1, extras: [] };
  renderProductModal({ kind: 'close' }, trigger);
}

function currentDraftPrice() {
  const units = productUnits(state.editingProduct);
  const unit = units.find((item) => String(item.id) === String(state.editingDraft.unitId)) || units[0];
  const extras = extrasForCategory(state.editingProduct.category_name, state.editingDraft.extras);
  return (unit.Price + extras.reduce((sum, extra) => sum + extra.price, 0)) * state.editingDraft.quantity;
}

function productModalMarkup() {
  const product = state.editingProduct;
  const units = productUnits(product);
  const extras = extrasForCategory(product.category_name);
  const selectedUnit = units.find((unit) => String(unit.id) === String(state.editingDraft.unitId)) || units[0];
  const productName = escapeHtml(cleanText(product.name));
  return `<div class="modal-backdrop is-bottom" id="productModal"><section class="modal-card" role="dialog" aria-modal="true" aria-labelledby="productModalTitle" tabindex="-1">
    <div class="modal-head"><div><p class="modal-kicker">${t('Personaliza tu pedido')}</p><h2 id="productModalTitle">${productName}</h2></div><button class="modal-close" data-close-modal type="button" aria-label="${t('Cerrar')}">×</button></div>
    <div class="modal-content"><div class="modal-product-intro"><p>${escapeHtml(categoryLabel(cleanText(product.category_name)))}</p></div>
      ${units.length > 1 ? `<fieldset class="choice-group"><legend class="choice-label">${t('Elige el tamaño')}</legend><div class="unit-options" role="radiogroup" aria-label="${t('Tamaño de')} ${productName}">${units.map((unit) => `<button class="unit-option ${String(unit.id) === String(selectedUnit.id) ? 'is-selected' : ''}" data-unit-id="${escapeHtml(unit.id)}" role="radio" aria-checked="${String(unit.id) === String(selectedUnit.id)}" type="button"><strong>${escapeHtml(unitLabel(unit.name))}</strong><span>${money(unit.Price)}</span></button>`).join('')}</div></fieldset>` : `<div class="choice-label">${escapeHtml(unitLabel(selectedUnit.name))} · ${money(selectedUnit.Price)}</div>`}
      ${extras.length ? `<fieldset class="choice-group"><legend class="choice-label">${t('Extras (opcional)')}</legend><div class="extras-list">${extras.map((extra) => `<label class="extra-option"><span><input type="checkbox" data-extra-id="${extra.id}" ${state.editingDraft.extras.includes(extra.id) ? 'checked' : ''} />${escapeHtml(extraLabel(extra))}</span><span class="extra-price">+${money(extra.price)}</span></label>`).join('')}</div></fieldset>` : ''}
      <div class="modal-qty-row"><span id="quantityLabel">${t('Cantidad')}</span><div class="modal-quantity" aria-labelledby="quantityLabel"><button data-product-quantity="decrease" type="button" aria-label="${t('Disminuir cantidad')}">−</button><strong data-product-quantity-value aria-live="polite">${state.editingDraft.quantity}</strong><button data-product-quantity="increase" type="button" aria-label="${t('Aumentar cantidad')}">+</button></div></div>
      <div class="modal-actions"><span class="modal-total"><span>${t('Total')}</span><strong data-product-total aria-live="polite" aria-atomic="true">${money(currentDraftPrice())}</strong></span><button class="modal-submit" id="addToCartButton" type="button">${t('Agregar al pedido')}</button></div>
    </div></section></div>`;
}

function renderProductModal(focus = { kind: 'close' }, trigger) {
  renderModal('product', productModalMarkup(), { trigger, focus, closeOnBackdrop: true, closeOnEscape: true });
}

function updateProductModal() {
  const modal = document.getElementById('productModal');
  if (!modal || !state.editingProduct || !state.editingDraft) return;
  modal.querySelectorAll('[data-unit-id]').forEach((button) => {
    const selected = String(button.dataset.unitId) === String(state.editingDraft.unitId);
    button.classList.toggle('is-selected', selected);
    button.setAttribute('aria-checked', String(selected));
  });
  const allowedExtraIds = new Set(extrasForCategory(state.editingProduct.category_name).map((extra) => extra.id));
  modal.querySelectorAll('[data-extra-id]').forEach((input) => {
    input.checked = allowedExtraIds.has(input.dataset.extraId) && state.editingDraft.extras.includes(input.dataset.extraId);
  });
  const quantity = modal.querySelector('[data-product-quantity-value]');
  const total = modal.querySelector('[data-product-total]');
  if (quantity) quantity.textContent = state.editingDraft.quantity;
  if (total) total.textContent = money(currentDraftPrice());
}

function addDraftToCart() {
  const product = state.editingProduct;
  const units = productUnits(product);
  const unit = units.find((item) => String(item.id) === String(state.editingDraft.unitId)) || units[0];
  const extras = extrasForCategory(product.category_name, state.editingDraft.extras);
  const key = JSON.stringify([product.id, unit.id, extras.map((extra) => extra.id).sort()]);
  const existing = state.cart.find((line) => line.key === key);
  if (existing) existing.quantity = Math.min(20, existing.quantity + state.editingDraft.quantity);
  else state.cart.push({ key, productId: product.id, productName: cleanText(product.name), category: cleanText(product.category_name), unitId: unit.id, unitName: cleanText(unit.name), price: unit.Price, quantity: state.editingDraft.quantity, extras });
  saveCart();
  closeModal();
  renderAll();
  document.querySelector(`[data-product-id="${product.id}"]`)?.focus({ preventScroll: true });
  showToast(t('Agregado al pedido'));
}

function changeLine(index, action) {
  const line = state.cart[index];
  if (!line) return null;
  const lineKey = line.key;
  if (action === 'increase') line.quantity = Math.min(20, line.quantity + 1);
  if (action === 'decrease') line.quantity -= 1;
  if (action === 'remove' || line.quantity <= 0) state.cart.splice(index, 1);
  saveCart();
  return { lineKey, removed: !state.cart.some((item) => item.key === lineKey) };
}

function cartModalMarkup() {
  return `<div class="modal-backdrop is-bottom" id="cartModal"><section class="modal-card modal-card--narrow" role="dialog" aria-modal="true" aria-labelledby="cartModalTitle" tabindex="-1"><div class="modal-head"><div><p class="modal-kicker">${t('Antes de confirmar')}</p><h2 id="cartModalTitle">${t('Tu pedido')}</h2></div><button class="modal-close" data-close-modal type="button" aria-label="${t('Cerrar')}">×</button></div><div class="modal-content"><div class="order-lines order-lines--modal">${state.cart.map((line, index) => orderLineMarkup(line, index, 'modal')).join('')}</div>${orderCommentMarkup('modal')}${summaryMarkup(orderTotals())}<button class="modal-submit" data-open-checkout type="button">${t('Continuar al checkout')} <span aria-hidden="true">→</span></button></div></section></div>`;
}

function openCartModal(trigger = document.activeElement) {
  if (!state.cart.length) {
    showToast('Agrega algo al pedido para continuar');
    return;
  }
  renderModal('cart', cartModalMarkup(), { trigger, focus: { kind: 'close' }, closeOnBackdrop: true, closeOnEscape: true });
}

function checkoutMarkup() {
  const totals = orderTotals();
  const delivery = state.mode === 'delivery';
  const cashSelected = state.payment === 'cash';
  return `<div class="modal-backdrop is-bottom" id="checkoutModal"><section class="modal-card" role="dialog" aria-modal="true" aria-labelledby="checkoutModalTitle" tabindex="-1">
    <div class="modal-head"><h2 id="checkoutModalTitle">${t('Confirmar pedido')}</h2><button class="modal-close" data-close-modal type="button" aria-label="${t('Cerrar checkout')}">×</button></div>
    <div class="modal-content"><div class="checkout-layout"><form class="checkout-form" id="checkoutForm" novalidate>
      <div class="checkout-mode-note">${t(delivery ? 'Delivery seleccionado · envío gratis' : 'Recoger seleccionado · te esperamos en el restaurante')}</div>
      <label class="field-label" for="checkoutName">${t('Nombre')} *<input id="checkoutName" name="name" required minlength="2" placeholder="${t('Tu nombre')}" autocomplete="name" /></label>
      <label class="field-label" for="checkoutPhone">${t('Teléfono')} *<input id="checkoutPhone" name="phone" required type="tel" placeholder="8888-8888" autocomplete="tel" inputmode="tel" /></label>
      ${delivery ? `<label class="field-label" for="checkoutAddress">${t('Dirección de entrega')} *<textarea id="checkoutAddress" name="address" required placeholder="${t('Provincia, cantón, señas exactas...')}" autocomplete="street-address"></textarea></label>` : ''}
      <fieldset class="payment-fieldset"><legend class="choice-label">${t('Forma de pago')}</legend><div class="payment-options">
        <label class="payment-option"><input type="radio" name="payment" value="cash" ${cashSelected ? 'checked' : ''} /><span><strong>${t('Efectivo')}</strong><small>${t('Si necesitas cambio, indícalo abajo.')}</small></span></label>
        <label class="payment-option"><input type="radio" name="payment" value="card" ${state.payment === 'card' ? 'checked' : ''} /><span><strong>${t('Tarjeta')}</strong><small>${t('Pago contra entrega.')}</small></span></label>
        <label class="payment-option"><input type="radio" name="payment" value="sinpe" ${state.payment === 'sinpe' ? 'checked' : ''} /><span><strong>SINPE Móvil</strong><small>${t('El restaurante te indica los datos al confirmar.')}</small></span></label>
      </div></fieldset>
      <div class="cash-field" id="cashField" ${cashSelected ? '' : 'hidden'} aria-hidden="${!cashSelected}"><label class="field-label" for="cashAmount">${t('¿Con cuánto pagarás? (opcional)')}<input id="cashAmount" name="cashAmount" type="number" min="${totals.total}" step="1" inputmode="decimal" aria-describedby="cashAmountHint" placeholder="${t('Ej: 10000')}" ${cashSelected ? '' : 'disabled'} /></label><p id="cashAmountHint" class="field-hint">${t('Te ayudaremos a calcular el cambio.')}</p></div>
      <button class="modal-submit checkout-submit" id="submitOrderButton" type="submit">${t('Preparar pedido')} <span aria-hidden="true">→</span></button><p class="checkout-disclaimer">${t('Al continuar guardaremos tu pedido en este dispositivo y podrás enviarlo al restaurante por WhatsApp.')}</p>
    </form><aside class="checkout-side" aria-label="${t('Resumen del pedido')}"><h3>${t('Resumen')}</h3>${state.cart.map((line) => `<div class="checkout-line"><span>${line.quantity}× ${escapeHtml(line.productName)}</span><strong>${money(lineUnitTotal(line))}</strong></div>`).join('')}${summaryMarkup(totals)}</aside></div></div></section></div>`;
}

function openCheckout(trigger = document.activeElement) {
  if (!state.cart.length) return;
  renderModal('checkout', checkoutMarkup(), { trigger, focus: { kind: 'id', value: 'checkoutName' }, closeOnBackdrop: true, closeOnEscape: false });
}

function paymentLabel(payment) {
  return { cash: t('Efectivo'), card: t('Tarjeta contra entrega'), sinpe: 'SINPE Móvil' }[payment] || t('Efectivo');
}

function setFieldValidity(field, message) {
  if (!field) return;
  field.setCustomValidity(message);
  if (message) field.setAttribute('aria-invalid', 'true');
  else field.removeAttribute('aria-invalid');
}

function validateCheckout(form) {
  const fields = [...form.querySelectorAll('input, textarea')];
  fields.forEach((field) => setFieldValidity(field, ''));
  const phone = form.elements.phone;
  if (phone && phone.value && phone.value.replace(/\D/g, '').length < 8) setFieldValidity(phone, t('Escribe un teléfono válido de al menos 8 dígitos.'));
  const payment = form.elements.payment?.value || 'cash';
  const cash = form.elements.cashAmount;
  if (payment === 'cash' && cash?.value) {
    const amount = Number(cash.value);
    if (!Number.isFinite(amount) || amount < orderTotals().total) setFieldValidity(cash, state.language === 'en' ? `Amount must be at least ${money(orderTotals().total)}.` : `El monto debe ser igual o mayor a ${money(orderTotals().total)}.`);
  }
  if (!form.reportValidity()) {
    form.querySelector(':invalid')?.focus({ preventScroll: true });
    return false;
  }
  return true;
}

function registerOrder(form) {
  const formData = new FormData(form);
  const totals = orderTotals();
  const payment = String(formData.get('payment') || 'cash');
  const cashValue = cleanText(formData.get('cashAmount'));
  const cashAmount = payment === 'cash' && cashValue ? Number(cashValue) : null;
  const order = {
    id: `EP-${String(Date.now()).slice(-6)}`,
    createdAt: new Date().toISOString(),
    status: t('Pendiente de envío'),
    mode: state.mode,
    payment,
    paymentLabel: paymentLabel(payment),
    cashAmount,
    changeDue: cashAmount ? cashAmount - totals.total : null,
    customer: { name: cleanText(formData.get('name')), phone: cleanText(formData.get('phone')), address: cleanText(formData.get('address')) },
    orderNote: cleanText(state.orderComment).slice(0, 180),
    items: state.cart.map(normalizeCartLine).filter(Boolean),
    totals,
  };
  try {
    const orders = JSON.parse(localStorage.getItem(STORAGE_ORDERS) || '[]');
    localStorage.setItem(STORAGE_ORDERS, JSON.stringify([order, ...(Array.isArray(orders) ? orders : [])].slice(0, 20)));
  } catch {
    // The confirmation remains usable even when storage is unavailable.
  }
  state.cart = [];
  saveCart();
  renderAll();
  renderConfirmation(order);
}

function buildWhatsAppMessage(order) {
  const items = order.items.map((line) => {
    const selectedExtras = extrasForCategory(line.category, (line.extras || []).map((extra) => extra?.id));
    const extras = selectedExtras.length ? `\n   ${state.language === 'en' ? 'Extras' : 'Extras'}: ${selectedExtras.map((extra) => extraLabel(extra)).join(', ')}` : '';
    return state.language === 'en'
      ? `${line.quantity} x ${line.productName}\n   Size: ${unitLabel(line.unitName)}${extras}\n   Amount: ${money(lineUnitTotal(line))}`
      : `${line.quantity} x ${line.productName}\n   Tamaño: ${line.unitName}${extras}\n   Importe: ${money(lineUnitTotal(line))}`;
  }).join('\n\n');
  const totals = order.totals;
  const delivery = totals.deliveryFee ? money(totals.deliveryFee) : t('Gratis');
  const cash = order.cashAmount ? (state.language === 'en' ? `\nCash: ${money(order.cashAmount)}\nChange: ${money(order.changeDue)}` : `\nPaga con: ${money(order.cashAmount)}\nCambio: ${money(order.changeDue)}`) : '';
  const comment = order.orderNote ? (state.language === 'en' ? `\nOrder note: ${order.orderNote}` : `\nComentario del pedido: ${order.orderNote}`) : '';
  if (state.language === 'en') return `Hello, I would like to confirm order ${order.id} at El Primero.\n\nMethod: ${order.mode === 'delivery' ? 'Delivery' : 'Pickup'}\nName: ${order.customer.name}\nPhone: ${order.customer.phone}${order.customer.address ? `\nAddress: ${order.customer.address}` : ''}\n\n${items}\n\nSubtotal: ${money(totals.subtotal)}\nDiscount: −${money(totals.discount)}\nDelivery: ${delivery}\nTotal: ${money(totals.total)}\n\nPayment method: ${order.paymentLabel}${cash}${comment}`;
  return `Hola, quiero confirmar el pedido ${order.id} en El Primero.\n\nModalidad: ${order.mode === 'delivery' ? 'Delivery' : 'Recoger'}\nNombre: ${order.customer.name}\nTeléfono: ${order.customer.phone}${order.customer.address ? `\nDirección: ${order.customer.address}` : ''}\n\n${items}\n\nSubtotal: ${money(totals.subtotal)}\nDescuento: −${money(totals.discount)}\nEnvío: ${delivery}\nTotal: ${money(totals.total)}\n\nForma de pago: ${order.paymentLabel}${cash}${comment}`;
}

function whatsappUrl(order) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(buildWhatsAppMessage(order))}`;
}

function renderConfirmation(order) {
  renderModal('confirmation', `<div class="modal-backdrop" id="confirmationModal"><section class="modal-card modal-card--narrow confirmation" role="dialog" aria-modal="true" aria-labelledby="confirmationTitle" tabindex="-1"><div class="modal-content"><div class="confirmation-seal" aria-hidden="true">✓</div><h2 id="confirmationTitle">${t('Pedido listo para enviar')}</h2><p>${t('Guardamos tu pedido en este dispositivo. El restaurante lo recibirá únicamente cuando toques la opción de enviarlo por WhatsApp.')}</p><span class="order-reference">${escapeHtml(order.id)} · ${order.mode === 'delivery' ? 'Delivery' : t('Recoger')}</span><div class="confirmation-summary"><div class="summary-row"><span>${t('Cliente')}</span><strong>${escapeHtml(order.customer.name)}</strong></div><div class="summary-row"><span>${t('Pago')}</span><strong>${escapeHtml(order.paymentLabel)}</strong></div><div class="summary-row summary-row--total"><span>${t('Total')}</span><strong>${money(order.totals.total)}</strong></div></div><div class="confirmation-actions"><a class="whatsapp-button" id="whatsappButton" href="${escapeHtml(whatsappUrl(order))}" target="_blank" rel="noreferrer noopener">${t('Enviar pedido por WhatsApp')} ↗</a><button class="continue-button" data-close-modal type="button">${t('Volver al menú')}</button></div></div></section></div>`, { focus: { kind: 'whatsapp' }, closeOnBackdrop: false, closeOnEscape: false });
}

function showToast(message) {
  const toast = document.getElementById('toast');
  toast.textContent = t(message);
  toast.classList.add('is-visible');
  clearTimeout(state.toastTimer);
  state.toastTimer = setTimeout(() => toast.classList.remove('is-visible'), 2200);
}

function setMobileNav(open, restoreFocus = true) {
  const toggle = document.getElementById('mobileNavToggle');
  const nav = document.getElementById('primaryNav');
  state.mobileNavOpen = open;
  document.querySelector('.topbar').classList.toggle('nav-open', open);
  toggle.setAttribute('aria-expanded', String(open));
  toggle.setAttribute('aria-label', t(open ? 'Cerrar menú' : 'Abrir menú'));
  if (open) nav.querySelector('a')?.focus({ preventScroll: true });
  else if (restoreFocus) toggle.focus({ preventScroll: true });
}

function handleCategoryClick(event) {
  const button = event.target.closest('[data-category]');
  if (!button) return;
  state.activeCategory = button.dataset.category;
  state.query = '';
  document.getElementById('searchInput').value = '';
  renderAll();
}

function handleCartAction(action) {
  const lineKey = action.dataset.lineKey;
  const actionName = action.dataset.cartAction;
  const descriptor = state.modal.type === 'cart' ? focusDescriptor(action) : null;
  const result = changeLine(Number(action.dataset.lineIndex), action.dataset.cartAction);
  if (!result) return;
  renderAll();
  if (state.modal.type !== 'cart') {
    if (!result.removed) focusCartAction(lineKey, actionName);
    return;
  }
  if (!state.cart.length) {
    const trigger = state.modal.trigger;
    closeModal({ focusTarget: trigger });
    showToast('Tu pedido está vacío');
    return;
  }
  renderModal('cart', cartModalMarkup(), { focus: descriptor, closeOnBackdrop: true, closeOnEscape: true });
}

function handleModalClick(event) {
  const backdrop = event.target.closest('.modal-backdrop');
  if (backdrop && event.target === backdrop && state.modal.closeOnBackdrop) {
    closeModal();
    return;
  }
  if (event.target.closest('[data-close-modal]')) {
    closeModal();
    return;
  }
  const checkoutTrigger = event.target.closest('[data-open-checkout]');
  if (checkoutTrigger) {
    openCheckout(checkoutTrigger);
    return;
  }
  const unit = event.target.closest('[data-unit-id]');
  if (unit && state.editingDraft) {
    state.editingDraft.unitId = unit.dataset.unitId;
    updateProductModal();
    return;
  }
  const quantity = event.target.closest('[data-product-quantity]');
  if (quantity && state.editingDraft) {
    state.editingDraft.quantity = Math.max(1, Math.min(20, state.editingDraft.quantity + (quantity.dataset.productQuantity === 'increase' ? 1 : -1)));
    updateProductModal();
    return;
  }
  if (event.target.closest('#addToCartButton')) {
    addDraftToCart();
    return;
  }
  const action = event.target.closest('[data-cart-action]');
  if (action) handleCartAction(action);
}

function handleModalChange(event) {
  if (event.target.matches('[data-extra-id]') && state.editingDraft) {
    const extraId = event.target.dataset.extraId;
    const selectedIds = event.target.checked ? [...new Set([...state.editingDraft.extras, extraId])] : state.editingDraft.extras.filter((id) => id !== extraId);
    state.editingDraft.extras = extrasForCategory(state.editingProduct.category_name, selectedIds).map((extra) => extra.id);
    updateProductModal();
    return;
  }
  if (event.target.name === 'payment') {
    state.payment = event.target.value;
    const field = document.getElementById('cashField');
    const visible = state.payment === 'cash';
    if (field) {
      field.hidden = !visible;
      field.setAttribute('aria-hidden', String(!visible));
      const cashInput = field.querySelector('input');
      if (cashInput) {
        cashInput.disabled = !visible;
        if (!visible) cashInput.setCustomValidity('');
      }
    }
  }
}

function handleOrderCommentInput(event) {
  if (!event.target.matches('[data-order-comment]')) return;
  state.orderComment = normalizeOrderComment(event.target.value);
  document.querySelectorAll('[data-order-comment]').forEach((input) => {
    if (input !== event.target && input.value !== state.orderComment) input.value = state.orderComment;
  });
  saveOrderComment();
}

function handleModalInput(event) {
  handleOrderCommentInput(event);
}

function handleModalSubmit(event) {
  if (event.target.id !== 'checkoutForm') return;
  event.preventDefault();
  if (!validateCheckout(event.target)) return;
  const submit = event.target.querySelector('[type="submit"]');
  if (submit) submit.disabled = true;
  registerOrder(event.target);
}

function handleModeKeydown(event) {
  if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
  const options = [...document.querySelectorAll('.mode-option')];
  const current = options.indexOf(event.target);
  if (current < 0) return;
  event.preventDefault();
  const next = event.key === 'Home' ? 0 : event.key === 'End' ? options.length - 1 : (current + (event.key === 'ArrowRight' ? 1 : -1) + options.length) % options.length;
  options[next].focus();
  options[next].click();
}

function bindEvents() {
  state.cart = readCart();
  if (state.cart.length) state.orderComment = readOrderComment();
  else clearOrderComment();
  saveCart();
  document.getElementById('languageToggle').addEventListener('click', () => {
    state.language = state.language === 'es' ? 'en' : 'es';
    savePreference(STORAGE_LANGUAGE, state.language);
    renderAll();
  });
  document.getElementById('searchInput').addEventListener('input', (event) => {
    state.query = event.target.value;
    renderMenuView();
  });
  document.getElementById('modeSwitch').addEventListener('click', (event) => {
    const button = event.target.closest('[data-mode]');
    if (!button) return;
    state.mode = button.dataset.mode;
    renderAll();
    showToast(state.mode === 'delivery' ? 'Delivery seleccionado' : 'Recoger seleccionado');
  });
  document.getElementById('modeSwitch').addEventListener('keydown', handleModeKeydown);
  document.getElementById('categoryNav').addEventListener('click', handleCategoryClick);
  document.getElementById('mobileCategorySelect').addEventListener('change', (event) => {
    state.activeCategory = event.target.value;
    state.query = '';
    document.getElementById('searchInput').value = '';
    renderAll();
  });
  document.getElementById('productGrid').addEventListener('click', (event) => {
    const categoryButton = event.target.closest('[data-category]');
    const card = event.target.closest('[data-product-id]');
    if (categoryButton) {
      state.activeCategory = categoryButton.dataset.category;
      state.query = '';
      document.getElementById('searchInput').value = '';
      renderAll();
    } else if (card) openProductModal(card.dataset.productId, card);
  });
  document.getElementById('featuredGrid').addEventListener('click', (event) => {
    const card = event.target.closest('[data-product-id]');
    if (card) openProductModal(card.dataset.productId, card);
  });
  document.getElementById('orderPanel').addEventListener('click', (event) => {
    const action = event.target.closest('[data-cart-action]');
    if (action) {
      handleCartAction(action);
      return;
    }
    const checkout = event.target.closest('[data-open-checkout]');
    if (checkout) openCheckout(checkout);
  });
  document.getElementById('orderPanel').addEventListener('input', handleOrderCommentInput);
  document.getElementById('headerCartButton').addEventListener('click', (event) => openCartModal(event.currentTarget));
  document.getElementById('mobileCartButton').addEventListener('click', (event) => openCartModal(event.currentTarget));
  document.getElementById('mobileNavToggle').addEventListener('click', () => setMobileNav(!state.mobileNavOpen));
  document.getElementById('primaryNav').addEventListener('click', () => setMobileNav(false, false));
  document.getElementById('modalRoot').addEventListener('click', handleModalClick);
  document.getElementById('modalRoot').addEventListener('change', handleModalChange);
  document.getElementById('modalRoot').addEventListener('input', handleModalInput);
  document.getElementById('modalRoot').addEventListener('submit', handleModalSubmit);
  document.addEventListener('click', (event) => {
    if (state.mobileNavOpen && !event.target.closest('.topbar')) setMobileNav(false);
  });
  document.addEventListener('keydown', (event) => {
    if (state.modal.type) {
      const dialog = document.querySelector('#modalRoot [role="dialog"]');
      if (event.key === 'Escape' && state.modal.closeOnEscape) {
        event.preventDefault();
        closeModal();
        return;
      }
      if (event.key === 'Tab' && dialog) {
        const focusable = getFocusableElements(dialog);
        if (!focusable.length) {
          event.preventDefault();
          dialog.focus();
          return;
        }
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
      return;
    }
    if (event.key === 'Escape' && state.mobileNavOpen) setMobileNav(false);
  });
  setupSectionObserver();
}

function setupSectionObserver() {
  if (!('IntersectionObserver' in window)) return;
  const links = [...document.querySelectorAll('#primaryNav a')];
  const sections = links.map((link) => document.querySelector(link.hash)).filter(Boolean);
  const observer = new IntersectionObserver((entries) => {
    entries.filter((entry) => entry.isIntersecting).forEach((entry) => {
      links.forEach((link) => {
        if (link.hash === `#${entry.target.id}`) link.setAttribute('aria-current', 'page');
        else link.removeAttribute('aria-current');
      });
    });
  }, { rootMargin: '-35% 0px -55% 0px', threshold: 0 });
  sections.forEach((section) => observer.observe(section));
}

async function loadMenu() {
  try {
    const response = await fetch('menu.json', { cache: 'no-store' });
    if (!response.ok) throw new Error('Menu request failed');
    const products = await response.json();
    state.products = Array.isArray(products) && products.length ? products : fallbackProducts;
  } catch {
    state.products = fallbackProducts;
    const notice = document.getElementById('menuNotice');
    notice.hidden = false;
    notice.textContent = t('Mostrando una selección mientras se carga el menú completo. Si estás abriendo el archivo directamente, inicia un servidor local para consultar las 143 opciones.');
  }
  state.products = state.products
    .map((product) => ({ ...product, id: Number(product.id), name: productDisplayName(product.name), category_name: cleanText(product.category_name), Price: Number(product.Price) }))
    .filter((product) => Number(product.IsStoped || 0) !== 1);
  renderAll();
}

function init() {
  bindEvents();
  renderAll();
  loadMenu();
}

init();
