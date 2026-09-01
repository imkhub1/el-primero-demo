const STORAGE_CART = 'el-primero-cart-v1';
const STORAGE_ORDERS = 'el-primero-orders-v1';
const WHATSAPP_NUMBER = '50625601234';
const DISCOUNT_PERCENT = 10;
const DELIVERY_FEE = 0;
const FEATURED_PRODUCTS = [
  { id: 1, image: 'https://images.unsplash.com/photo-1564464392342-54692a5d59a0?auto=format&fit=crop&w=900&q=80', alt: 'Imagen ilustrativa de un plato de arroz frito.' },
  { id: 26, image: 'https://images.unsplash.com/photo-1680991554256-da64cc827619?auto=format&fit=crop&w=900&q=80', alt: 'Imagen ilustrativa de un tazón con vegetales y fideos.' },
  { id: 45, image: 'https://images.unsplash.com/photo-1767324672643-c4979362f922?auto=format&fit=crop&w=900&q=80', alt: 'Imagen ilustrativa de fideos salteados.' },
  { id: 68, image: 'https://images.unsplash.com/photo-1767324672655-8e0f5e814897?auto=format&fit=crop&w=900&q=80', alt: 'Imagen ilustrativa de carne de res salteada.' },
];


const EXTRAS = [
  { id: 'camarones', name: 'Camarones extra', price: 2400 },
  { id: 'carne', name: 'Carne extra', price: 2400 },
  { id: 'chorizo', name: 'Chorizo extra', price: 1800 },
  { id: 'verdura', name: 'Verdura extra', price: 1000 },
  { id: 'huevo', name: 'Huevo extra', price: 500 },
];

const CATEGORY_ORDER = [
  'Todos', 'Bebidas', 'Casados Combinado', 'Casados Chino', 'Arroz Frito',
  'Arroz En Salsa', 'Arroz En Salsa Tomate', 'Arroz En Salsa Curry',
  'Chop Suey En Salsa', 'Chop Suey En Seco', 'Chau Min', 'Espagueti', 'Sopa',
  'Aperitivos', 'Carne De Res', 'Carne De Cerdo', 'Pescado', 'Camarones',
  'Carne Blanca', 'Ensaladas Frias', 'Platillos De China', 'Combos',
  'combos familiar', 'SERVICIOS',
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
  SERVICIOS: { label: 'Servicios', glyph: '+' },
};

const state = {
  products: [],
  activeCategory: 'Todos',
  query: '',
  cart: [],
  mode: 'delivery',
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
  { id: 120, name: 'Coca', category_name: 'Bebidas', Price: 1200, units: [{ id: 120, name: 'unidad', Price: 1200 }] },
];

const money = (amount) => `₡${Math.round(Number(amount) || 0).toLocaleString('es-CR')}`;
const cleanText = (value) => String(value ?? '').replace(/[\u200B-\u200D\uFEFF]/g, '').replace(/\s+/g, ' ').trim();
const escapeHtml = (value) => String(value ?? '').replace(/[&<>'"]/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[char]));
const slug = (value) => cleanText(value).toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
const reducedMotion = () => window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

function normalizeCartLine(line) {
  const productId = Number(line?.productId);
  const quantityValue = Number(line?.quantity);
  if (!Number.isFinite(productId) || productId <= 0 || !Number.isFinite(quantityValue) || quantityValue <= 0) return null;
  const quantity = Math.min(20, Math.max(1, quantityValue));
  const extras = Array.isArray(line.extras)
    ? line.extras.map((extra) => EXTRAS.find((item) => item.id === extra?.id)).filter(Boolean).map((extra) => ({ ...extra }))
    : [];
  const productName = cleanText(line.productName) || 'Producto';
  const unitName = cleanText(line.unitName) || 'unidad';
  const note = cleanText(line.note).slice(0, 140);
  const key = line.key || JSON.stringify([productId, line.unitId ?? productId, extras.map((extra) => extra.id).sort(), note]);
  return {
    ...line,
    key,
    productId,
    productName,
    category: cleanText(line.category),
    unitId: line.unitId ?? productId,
    unitName,
    price: Number(line.price) || 0,
    quantity,
    extras,
    note,
  };
}

function readCart() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_CART) || '[]');
    return Array.isArray(saved) ? saved.map(normalizeCartLine).filter(Boolean) : [];
  } catch {
    return [];
  }
}

function saveCart() {
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
  return (Number(line.price) + (line.extras || []).reduce((sum, extra) => sum + Number(extra.price || 0), 0)) * Number(line.quantity || 0);
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
  const markup = categoryNames().map((category) => {
    const meta = CATEGORY_META[category] || { label: category, glyph: '•' };
    const active = state.activeCategory === category;
    return `<button class="category-button ${active ? 'is-active' : ''}" data-category="${escapeHtml(category)}" aria-pressed="${active}" type="button"><span class="category-glyph" aria-hidden="true">${meta.glyph}</span><span>${escapeHtml(meta.label)}</span></button>`;
  }).join('');
  document.getElementById('categoryNav').innerHTML = markup;
  document.getElementById('mobileCategoryNav').innerHTML = markup;
  requestAnimationFrame(() => {
    const mobileScroller = document.getElementById('mobileCategoryNav');
    const activeButton = mobileScroller.querySelector('.category-button.is-active');
    if (!activeButton || mobileScroller.clientWidth === 0 || mobileScroller.scrollWidth <= mobileScroller.clientWidth) return;
    const scrollerRect = mobileScroller.getBoundingClientRect();
    const activeRect = activeButton.getBoundingClientRect();
    const maxScrollLeft = mobileScroller.scrollWidth - mobileScroller.clientWidth;
    const targetScrollLeft = mobileScroller.scrollLeft + activeRect.left - scrollerRect.left - (mobileScroller.clientWidth - activeRect.width) / 2;
    mobileScroller.scrollTo({
      left: Math.max(0, Math.min(targetScrollLeft, maxScrollLeft)),
      top: mobileScroller.scrollTop,
      behavior: reducedMotion() ? 'auto' : 'smooth',
    });
  });
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
  setMenuAnnouncement(`${categories.length} categorías disponibles`);
  document.getElementById('menuViewHint').textContent = 'Explora por categoría o busca directamente un plato.';
  grid.innerHTML = categories.map((category) => {
    const meta = CATEGORY_META[category] || { label: category, glyph: '•' };
    const count = counts[category] || 0;
    return `<button class="category-index-card" data-category="${escapeHtml(category)}" type="button">
      <span class="category-index-icon" aria-hidden="true">${meta.glyph}</span>
      <span class="category-index-copy"><strong>${escapeHtml(meta.label)}</strong><small>${count} ${count === 1 ? 'opción' : 'opciones'}</small></span>
      <span class="category-index-arrow" aria-hidden="true">↗</span>
    </button>`;
  }).join('');
}

function renderProducts() {
  const products = getVisibleProducts();
  const categoryLabel = CATEGORY_META[state.activeCategory]?.label || state.activeCategory;
  const queryLabel = cleanText(state.query);
  setMenuAnnouncement(`${products.length} ${products.length === 1 ? 'opción' : 'opciones'}${queryLabel ? ` para ${queryLabel}` : ` en ${categoryLabel}`}`);
  const grid = document.getElementById('productGrid');
  grid.className = 'product-grid';
  document.getElementById('menuViewHint').textContent = queryLabel ? `Resultados para “${queryLabel}”.` : 'Selecciona un plato para elegir tamaño, extras y cantidad.';
  if (!products.length) {
    grid.innerHTML = '<div class="empty-results"><strong>No encontramos ese antojo.</strong><span>Prueba con otro nombre o vuelve a ver todo el menú.</span></div>';
    return;
  }
  grid.innerHTML = products.map((product) => {
    const units = productUnits(product);
    const price = Math.min(...units.map((unit) => unit.Price));
    const quantity = cartQuantityFor(product.id);
    const productName = cleanText(product.name);
    const productLabel = `Personalizar ${productName}${quantity ? `, ${quantity} en tu pedido` : ''}`;
    return `<button class="product-card" data-product-id="${product.id}" type="button" aria-label="${escapeHtml(productLabel)}">
      <span class="product-body">
        <span class="product-category">${escapeHtml(CATEGORY_META[cleanText(product.category_name)]?.label || cleanText(product.category_name))}</span>
        <span class="product-card-title">${escapeHtml(productName)}</span>
        <span class="product-footer">
          <span class="product-price"><span>${units.length > 1 ? 'Desde' : 'Precio'}</span><strong>${money(price)}</strong></span>
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
    return `<button class="featured-card" data-product-id="${product.id}" type="button" aria-label="Personalizar ${escapeHtml(productName)}">
      <span class="featured-image"><img src="${featured.image}" alt="${featured.alt}" loading="lazy" width="900" height="650"></span>
      <span class="featured-card-body">
        <span class="featured-card-kicker">${escapeHtml(CATEGORY_META[cleanText(product.category_name)]?.label || cleanText(product.category_name))}</span>
        <span class="featured-card-title">${escapeHtml(productName)}</span>
        <span class="featured-card-footer"><span>${units.length > 1 ? 'Desde' : 'Precio'} <strong>${money(price)}</strong></span><span aria-hidden="true">+</span></span>
      </span>
    </button>`;
  }).join('');
}


function renderMenuView() {
  if (state.activeCategory === 'Todos' && !cleanText(state.query)) renderCategoryIndex();
  else renderProducts();
}

function orderLineMarkup(line, index, context = 'panel') {
  const extras = line.extras?.length ? ` · ${line.extras.map((extra) => escapeHtml(extra.name)).join(', ')}` : '';
  const label = escapeHtml(line.productName);
  return `<div class="order-line ${context === 'modal' ? 'order-line--modal' : ''}">
    <div>
      <h3>${label}</h3>
      <div class="order-line-meta">${escapeHtml(line.unitName)}${extras}</div>
      ${line.note ? `<div class="order-line-note">“${escapeHtml(line.note)}”</div>` : ''}
      <div class="quantity-control">
        <button data-cart-action="decrease" data-line-index="${index}" data-line-key="${escapeHtml(line.key)}" type="button" aria-label="Disminuir cantidad de ${label}">−</button>
        <span aria-label="Cantidad: ${line.quantity}">${line.quantity}</span>
        <button data-cart-action="increase" data-line-index="${index}" data-line-key="${escapeHtml(line.key)}" type="button" aria-label="Aumentar cantidad de ${label}">+</button>
        <button class="remove-line" data-cart-action="remove" data-line-index="${index}" data-line-key="${escapeHtml(line.key)}" type="button" aria-label="Quitar ${label}">Quitar</button>
      </div>
    </div>
    <span class="order-line-price">${money(lineUnitTotal(line))}</span>
  </div>`;
}

function summaryMarkup(totals) {
  return `<div class="order-summary"><div class="summary-row"><span>Subtotal</span><strong>${money(totals.subtotal)}</strong></div>${state.mode === 'delivery' ? `<div class="summary-row"><span>Envío</span><strong>${totals.deliveryFee ? money(totals.deliveryFee) : 'Gratis'}</strong></div>` : ''}<div class="summary-row summary-row--discount"><span>Descuento (${DISCOUNT_PERCENT}%)</span><strong>−${money(totals.discount)}</strong></div><div class="summary-row summary-row--total"><span>Total</span><strong>${money(totals.total)}</strong></div></div>`;
}

function renderOrderPanel() {
  const panel = document.getElementById('orderPanel');
  const count = state.cart.reduce((sum, line) => sum + Number(line.quantity || 0), 0);
  const totals = orderTotals();
  if (!state.cart.length) {
    panel.innerHTML = `<div class="order-panel-head"><div><span class="order-mode-label">${state.mode === 'delivery' ? 'Delivery' : 'Recoger'}</span><h2 id="orderPanelTitle">Tu pedido</h2></div><span class="header-cart-count" aria-label="0 artículos">0</span></div><div class="order-empty"><div><div class="empty-bowl" aria-hidden="true"></div><p>Tu pedido está esperando algo rico. Explora el menú y agrega tus favoritos.</p></div></div>`;
    return;
  }
  panel.innerHTML = `<div class="order-panel-head"><div><span class="order-mode-label">${state.mode === 'delivery' ? 'Delivery' : 'Recoger'}</span><h2 id="orderPanelTitle">Tu pedido</h2></div><span class="header-cart-count" aria-label="${count} artículos">${count}</span></div>
    <div class="order-lines">${state.cart.map((line, index) => orderLineMarkup(line, index)).join('')}</div>
    ${summaryMarkup(totals)}
    <button class="checkout-button" data-open-checkout type="button">Continuar al checkout <span aria-hidden="true">→</span></button>
    <p class="cart-help">Puedes ajustar cantidades antes de confirmar.</p>`;
}

function renderCartIndicators() {
  const count = state.cart.reduce((sum, line) => sum + Number(line.quantity || 0), 0);
  const total = orderTotals().total;
  const itemLabel = count === 1 ? 'artículo' : 'artículos';
  const header = document.getElementById('headerCartButton');
  const mobile = document.getElementById('mobileCartButton');
  document.getElementById('headerCartCount').textContent = count;
  document.getElementById('mobileCartCount').textContent = count;
  document.getElementById('mobileCartTotal').textContent = money(total);
  header.setAttribute('aria-label', `Mi pedido, ${count} ${itemLabel}, total ${money(total)}`);
  mobile.setAttribute('aria-label', `Ver mi pedido, ${count} ${itemLabel}, total ${money(total)}`);
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
  document.body.classList.remove('is-modal-open');
  document.body.style.position = styles.position || '';
  document.body.style.top = styles.top || '';
  document.body.style.width = styles.width || '';
  setPageInert(false);
  window.scrollTo({ top: state.modal.scrollY || 0, behavior: 'auto' });
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
  const scrollY = state.modal.scrollY;
  document.getElementById('modalRoot').innerHTML = '';
  restoreBodyScroll();
  state.modal = { type: null, trigger: null, scrollY: 0, bodyStyles: null, closeOnBackdrop: true, closeOnEscape: true };
  state.editingProduct = null;
  state.editingDraft = null;
  const target = trigger instanceof HTMLElement && trigger.isConnected && !trigger.hidden ? trigger : document.getElementById('headerCartButton');
  target?.focus({ preventScroll: true });
  window.scrollTo({ top: scrollY || 0, behavior: 'auto' });
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
  state.editingDraft = { unitId: units[0].id, quantity: 1, extras: [], note: '' };
  renderProductModal({ kind: 'close' }, trigger);
}

function currentDraftPrice() {
  const units = productUnits(state.editingProduct);
  const unit = units.find((item) => String(item.id) === String(state.editingDraft.unitId)) || units[0];
  const extras = EXTRAS.filter((extra) => state.editingDraft.extras.includes(extra.id));
  return (unit.Price + extras.reduce((sum, extra) => sum + extra.price, 0)) * state.editingDraft.quantity;
}

function productModalMarkup() {
  const product = state.editingProduct;
  const units = productUnits(product);
  const selectedUnit = units.find((unit) => String(unit.id) === String(state.editingDraft.unitId)) || units[0];
  return `<div class="modal-backdrop is-bottom" id="productModal"><section class="modal-card" role="dialog" aria-modal="true" aria-labelledby="productModalTitle" tabindex="-1">
    <div class="modal-head"><div><p class="modal-kicker">Personaliza tu pedido</p><h2 id="productModalTitle">${escapeHtml(cleanText(product.name))}</h2></div><button class="modal-close" data-close-modal type="button" aria-label="Cerrar">×</button></div>
    <div class="modal-content"><div class="modal-product-intro"><p>${escapeHtml(CATEGORY_META[cleanText(product.category_name)]?.label || cleanText(product.category_name))}</p></div>
      ${units.length > 1 ? `<fieldset class="choice-group"><legend class="choice-label">Elige el tamaño</legend><div class="unit-options" role="radiogroup" aria-label="Tamaño de ${escapeHtml(cleanText(product.name))}">${units.map((unit) => `<button class="unit-option ${String(unit.id) === String(selectedUnit.id) ? 'is-selected' : ''}" data-unit-id="${escapeHtml(unit.id)}" role="radio" aria-checked="${String(unit.id) === String(selectedUnit.id)}" type="button"><strong>${escapeHtml(unit.name)}</strong><span>${money(unit.Price)}</span></button>`).join('')}</div></fieldset>` : `<div class="choice-label">${escapeHtml(selectedUnit.name)} · ${money(selectedUnit.Price)}</div>`}
      <fieldset class="choice-group"><legend class="choice-label">Extras (opcional)</legend><div class="extras-list">${EXTRAS.map((extra) => `<label class="extra-option"><span><input type="checkbox" data-extra-id="${extra.id}" ${state.editingDraft.extras.includes(extra.id) ? 'checked' : ''} />${escapeHtml(extra.name)}</span><span class="extra-price">+${money(extra.price)}</span></label>`).join('')}</div></fieldset>
      <label class="field-label" for="itemNote">Nota para cocina (opcional)<textarea id="itemNote" maxlength="140" placeholder="Ej: poca salsa, sin cebolla...">${escapeHtml(state.editingDraft.note)}</textarea></label>
      <div class="modal-qty-row"><span id="quantityLabel">Cantidad</span><div class="modal-quantity" aria-labelledby="quantityLabel"><button data-product-quantity="decrease" type="button" aria-label="Disminuir cantidad">−</button><strong aria-live="polite">${state.editingDraft.quantity}</strong><button data-product-quantity="increase" type="button" aria-label="Aumentar cantidad">+</button></div></div>
      <div class="modal-actions"><span class="modal-total"><span>Total</span><strong>${money(currentDraftPrice())}</strong></span><button class="modal-submit" id="addToCartButton" type="button">Agregar al pedido</button></div>
    </div></section></div>`;
}

function renderProductModal(focus = { kind: 'close' }, trigger) {
  renderModal('product', productModalMarkup(), { trigger, focus, closeOnBackdrop: true, closeOnEscape: true });
}

function addDraftToCart() {
  const product = state.editingProduct;
  const units = productUnits(product);
  const unit = units.find((item) => String(item.id) === String(state.editingDraft.unitId)) || units[0];
  const extras = EXTRAS.filter((extra) => state.editingDraft.extras.includes(extra.id));
  const note = cleanText(document.getElementById('itemNote')?.value || state.editingDraft.note).slice(0, 140);
  const key = JSON.stringify([product.id, unit.id, extras.map((extra) => extra.id).sort(), note]);
  const existing = state.cart.find((line) => line.key === key);
  if (existing) existing.quantity = Math.min(20, existing.quantity + state.editingDraft.quantity);
  else state.cart.push({ key, productId: product.id, productName: cleanText(product.name), category: cleanText(product.category_name), unitId: unit.id, unitName: cleanText(unit.name), price: unit.Price, quantity: state.editingDraft.quantity, extras, note });
  saveCart();
  closeModal();
  renderAll();
  document.querySelector(`[data-product-id="${product.id}"]`)?.focus({ preventScroll: true });
  showToast('Agregado al pedido');
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
  return `<div class="modal-backdrop is-bottom" id="cartModal"><section class="modal-card modal-card--narrow" role="dialog" aria-modal="true" aria-labelledby="cartModalTitle" tabindex="-1"><div class="modal-head"><div><p class="modal-kicker">Antes de confirmar</p><h2 id="cartModalTitle">Tu pedido</h2></div><button class="modal-close" data-close-modal type="button" aria-label="Cerrar">×</button></div><div class="modal-content"><div class="order-lines order-lines--modal">${state.cart.map((line, index) => orderLineMarkup(line, index, 'modal')).join('')}</div>${summaryMarkup(orderTotals())}<button class="modal-submit" data-open-checkout type="button">Continuar al checkout <span aria-hidden="true">→</span></button></div></section></div>`;
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
  return `<div class="modal-backdrop is-bottom" id="checkoutModal"><section class="modal-card" role="dialog" aria-modal="true" aria-labelledby="checkoutModalTitle" tabindex="-1"><div class="modal-head"><div><p class="modal-kicker">Último paso</p><h2 id="checkoutModalTitle">Confirmar pedido</h2></div><button class="modal-close" data-close-modal type="button" aria-label="Cerrar checkout">×</button></div><div class="modal-content"><div class="checkout-layout"><form class="checkout-form" id="checkoutForm" novalidate><div class="checkout-mode-note">${delivery ? 'Delivery seleccionado · envío gratis' : 'Recoger seleccionado · te esperamos en el restaurante'}</div><label class="field-label" for="checkoutName">Nombre *<input id="checkoutName" name="name" required minlength="2" placeholder="Tu nombre" autocomplete="name" /></label><label class="field-label" for="checkoutPhone">Teléfono *<input id="checkoutPhone" name="phone" required type="tel" placeholder="8888-8888" autocomplete="tel" inputmode="tel" /></label>${delivery ? '<label class="field-label" for="checkoutAddress">Dirección de entrega *<textarea id="checkoutAddress" name="address" required placeholder="Provincia, cantón, señas exactas..." autocomplete="street-address"></textarea></label>' : ''}<label class="field-label" for="orderNote">Nota del pedido (opcional)<textarea id="orderNote" name="orderNote" maxlength="180" placeholder="Ej: factura, indicaciones para entregar..."></textarea></label><fieldset class="payment-fieldset"><legend class="choice-label">Forma de pago</legend><div class="payment-options"><label class="payment-option"><input type="radio" name="payment" value="cash" ${cashSelected ? 'checked' : ''} /><span><strong>Efectivo</strong><small>Si necesitas cambio, indícalo abajo.</small></span></label><label class="payment-option"><input type="radio" name="payment" value="card" ${state.payment === 'card' ? 'checked' : ''} /><span><strong>Tarjeta</strong><small>Pago contra entrega.</small></span></label><label class="payment-option"><input type="radio" name="payment" value="sinpe" ${state.payment === 'sinpe' ? 'checked' : ''} /><span><strong>SINPE Móvil</strong><small>El restaurante te indica los datos al confirmar.</small></span></label></div></fieldset><div class="cash-field" id="cashField" ${cashSelected ? '' : 'hidden'} aria-hidden="${!cashSelected}"><label class="field-label" for="cashAmount">¿Con cuánto pagarás? (opcional)<input id="cashAmount" name="cashAmount" type="number" min="${totals.total}" step="1" inputmode="decimal" aria-describedby="cashAmountHint" placeholder="Ej: 10000" ${cashSelected ? '' : 'disabled'} /></label><p id="cashAmountHint" class="field-hint">Te ayudaremos a calcular el cambio.</p></div><button class="modal-submit checkout-submit" id="submitOrderButton" type="submit">Preparar pedido <span aria-hidden="true">→</span></button><p class="checkout-disclaimer">Al continuar guardaremos tu pedido en este dispositivo y podrás enviarlo al restaurante por WhatsApp.</p></form><aside class="checkout-side" aria-label="Resumen del pedido"><h3>Resumen</h3>${state.cart.map((line) => `<div class="checkout-line"><span>${line.quantity}× ${escapeHtml(line.productName)}</span><strong>${money(lineUnitTotal(line))}</strong></div>`).join('')}${summaryMarkup(totals)}</aside></div></div></section></div>`;
}

function openCheckout(trigger = document.activeElement) {
  if (!state.cart.length) return;
  renderModal('checkout', checkoutMarkup(), { trigger, focus: { kind: 'id', value: 'checkoutName' }, closeOnBackdrop: false, closeOnEscape: false });
}

function paymentLabel(payment) {
  return { cash: 'Efectivo', card: 'Tarjeta contra entrega', sinpe: 'SINPE Móvil' }[payment] || 'Efectivo';
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
  if (phone && phone.value && phone.value.replace(/\D/g, '').length < 8) setFieldValidity(phone, 'Escribe un teléfono válido de al menos 8 dígitos.');
  const payment = form.elements.payment?.value || 'cash';
  const cash = form.elements.cashAmount;
  if (payment === 'cash' && cash?.value) {
    const amount = Number(cash.value);
    if (!Number.isFinite(amount) || amount < orderTotals().total) setFieldValidity(cash, `El monto debe ser igual o mayor a ${money(orderTotals().total)}.`);
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
    status: 'Pendiente de envío',
    mode: state.mode,
    payment,
    paymentLabel: paymentLabel(payment),
    cashAmount,
    changeDue: cashAmount ? cashAmount - totals.total : null,
    customer: { name: cleanText(formData.get('name')), phone: cleanText(formData.get('phone')), address: cleanText(formData.get('address')) },
    orderNote: cleanText(formData.get('orderNote')),
    items: state.cart.map((line) => ({ ...line, extras: line.extras?.map((extra) => ({ ...extra })) || [] })),
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
    const extras = line.extras?.length ? `\n   Extras: ${line.extras.map((extra) => extra.name).join(', ')}` : '';
    const note = line.note ? `\n   Nota: ${line.note}` : '';
    return `${line.quantity} x ${line.productName}\n   Tamaño: ${line.unitName}${extras}${note}\n   Importe: ${money(lineUnitTotal(line))}`;
  }).join('\n\n');
  const totals = order.totals;
  const delivery = totals.deliveryFee ? money(totals.deliveryFee) : 'Gratis';
  const cash = order.cashAmount ? `\nPaga con: ${money(order.cashAmount)}\nCambio: ${money(order.changeDue)}` : '';
  const note = order.orderNote ? `\nNota del pedido: ${order.orderNote}` : '';
  return `Hola, quiero confirmar el pedido ${order.id} en El Primero.\n\nModalidad: ${order.mode === 'delivery' ? 'Delivery' : 'Recoger'}\nNombre: ${order.customer.name}\nTeléfono: ${order.customer.phone}${order.customer.address ? `\nDirección: ${order.customer.address}` : ''}\n\n${items}\n\nSubtotal: ${money(totals.subtotal)}\nDescuento: −${money(totals.discount)}\nEnvío: ${delivery}\nTotal: ${money(totals.total)}\n\nForma de pago: ${order.paymentLabel}${cash}${note}`;
}

function whatsappUrl(order) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(buildWhatsAppMessage(order))}`;
}

function renderConfirmation(order) {
  renderModal('confirmation', `<div class="modal-backdrop" id="confirmationModal"><section class="modal-card modal-card--narrow confirmation" role="dialog" aria-modal="true" aria-labelledby="confirmationTitle" tabindex="-1"><div class="modal-content"><div class="confirmation-seal" aria-hidden="true">✓</div><h2 id="confirmationTitle">Pedido listo para enviar</h2><p>Guardamos tu pedido en este dispositivo. El restaurante lo recibirá únicamente cuando toques la opción de enviarlo por WhatsApp.</p><span class="order-reference">${escapeHtml(order.id)} · ${order.mode === 'delivery' ? 'Delivery' : 'Recoger'}</span><div class="confirmation-summary"><div class="summary-row"><span>Cliente</span><strong>${escapeHtml(order.customer.name)}</strong></div><div class="summary-row"><span>Pago</span><strong>${escapeHtml(order.paymentLabel)}</strong></div><div class="summary-row summary-row--total"><span>Total</span><strong>${money(order.totals.total)}</strong></div></div><div class="confirmation-actions"><a class="whatsapp-button" id="whatsappButton" href="${escapeHtml(whatsappUrl(order))}" target="_blank" rel="noreferrer noopener">Enviar pedido por WhatsApp ↗</a><button class="continue-button" data-close-modal type="button">Volver al menú</button></div></div></section></div>`, { focus: { kind: 'whatsapp' }, closeOnBackdrop: false, closeOnEscape: false });
}

function showToast(message) {
  const toast = document.getElementById('toast');
  toast.textContent = message;
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
  toggle.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
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
    renderProductModal({ kind: 'unit', value: unit.dataset.unitId });
    return;
  }
  const quantity = event.target.closest('[data-product-quantity]');
  if (quantity && state.editingDraft) {
    state.editingDraft.quantity = Math.max(1, Math.min(20, state.editingDraft.quantity + (quantity.dataset.productQuantity === 'increase' ? 1 : -1)));
    renderProductModal({ kind: 'product-quantity', value: quantity.dataset.productQuantity });
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
    const focus = { kind: 'extra', value: extraId };
    state.editingDraft.extras = event.target.checked ? [...new Set([...state.editingDraft.extras, extraId])] : state.editingDraft.extras.filter((id) => id !== extraId);
    renderProductModal(focus);
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

function handleModalInput(event) {
  if (event.target.id === 'itemNote' && state.editingDraft) state.editingDraft.note = event.target.value;
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
  document.getElementById('mobileCategoryNav').addEventListener('click', handleCategoryClick);
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
  document.getElementById('headerCartButton').addEventListener('click', (event) => openCartModal(event.currentTarget));
  document.getElementById('heroCartButton').addEventListener('click', (event) => openCartModal(event.currentTarget));
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
    notice.textContent = 'Mostrando una selección mientras se carga el menú completo. Si estás abriendo el archivo directamente, inicia un servidor local para consultar las 143 opciones.';
  }
  state.products = state.products
    .map((product) => ({ ...product, id: Number(product.id), name: cleanText(product.name), category_name: cleanText(product.category_name), Price: Number(product.Price) }))
    .filter((product) => Number(product.IsStoped || 0) !== 1);
  renderAll();
}

function init() {
  bindEvents();
  renderAll();
  loadMenu();
}

init();
