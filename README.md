# Ghorghalado - Mel de Galicia

Un sitio web sobre o mel Ghorghalado, un tesoro dourado das terras galegas.

## 🍯 Sobre o Proxecto

Esta páxina web está deseñada para mostrar información sobre o mel Ghorghalado, un produto único de Galicia. O sitio está completamente en galego e está optimizado para ser facilmente editable por persoas sen coñecementos técnicos.

## 🌟 Características

- **Deseño responsivo**: Funciona perfectamente en móbiles, tablets e ordenadores
- **Temática dourada**: Cores inspiradas no mel e a natureza galega
- **Contido modular**: Fácil de editar e ampliar
- **Optimizado para GitHub Pages**: Listo para desplegar

## 📁 Estrutura do Proxecto

```
ghorghalado/
├── index.html          # Páxina principal
├── css/
│   └── styles.css      # Estilos do sitio web
├── js/
│   └── main.js        # Funcionalidade JavaScript
├── data/
│   ├── sections.json  # Contido das seccións (EDITABLE)
│   └── contact.json   # Información de contacto (EDITABLE)
├── images/            # Cartafol para imaxes
└── README.md          # Este arquivo
```

## ✏️ Como Editar o Contido

### Para persoas sen coñecementos técnicos:

1. **Editar seccións principais**: Modifica o arquivo `data/sections.json`
2. **Cambiar información de contacto**: Edita o arquivo `data/contact.json`
3. **Engadir imaxes**: Sube arquivos á carpeta `images/`

### Exemplos de edición:

**Para engadir unha nova sección en `data/sections.json`:**
```json
{
  "id": "nova-seccion",
  "title": "Título da Nova Sección",
  "description": "Descrición da sección...",
  "cards": [
    {
      "title": "Tarxeta 1",
      "content": "Contido da tarxeta..."
    }
  ]
}
```

## 🚀 Despregue en GitHub Pages

1. Sube todos os arquivos ao teu repositorio de GitHub
2. Vai á configuración do repositorio
3. Activa GitHub Pages desde a rama `main`
4. O teu sitio estará dispoñible en: `https://usuario.github.io/ghorghalado`

## 🎨 Personalización

### Cambiar cores:
Edita as variables CSS en `css/styles.css`:
```css
:root {
    --primary-color: #D4A548; /* Dourado principal */
    --secondary-color: #8B4513; /* Marrón */
    --accent-color: #F4E09B; /* Dourado claro */
}
```

## 📞 Soporte

Se necesitas axuda para editar o sitio web, consulta a documentación en `COMO_EDITAR.md` ou ponte en contacto co desenvolvedor.

## 🏆 Créditos

Desenvolvido con ❤️ para mostrar a beleza do mel galego.