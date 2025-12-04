# 📖 Como Editar a Web de Ghorghalado

**Guía sinxela para persoas sen coñecementos técnicos**

## 🎯 Introdución

Esta web está deseñada para que poidas cambiar o contido facilmente sen necesidade de saber programación. Todo o texto está gardado en arquivos especiais que podes editar como se fose un documento de Word.

## 📁 Arquivos Importantes para Editar

### 🔧 Arquivos que DEVES editar:
- `data/sections.json` → Contido das seccións da web
- `data/contact.json` → Información de contacto
- `images/` → Cartafol onde subir imaxes

### ⚠️ Arquivos que NON deves tocar:
- `index.html`, `css/styles.css`, `js/main.js` → Código da web
- `_config.yml`, `.gitignore` → Configuración

## ✏️ Como Editar o Contido das Seccións

### 📂 Arquivo: `data/sections.json`

Este arquivo contén toda a información das seccións principais da web. Está organizado así:

```
Sección 1: Sobre o Mel
Sección 2: A Rexión  
Sección 3: Propiedades
```

### 📝 Estrutura dunha Sección:

Cada sección ten estas partes:

1. **id**: Nome interno (NON CAMBIAR)
2. **title**: Título que aparece na web
3. **description**: Texto principal da sección
4. **cards**: Tarxetas pequenas con información
5. **additionalContent**: Contido extra (parágrafos, listas)

### 🔍 Exemplo de Como Editar:

**Para cambiar o título dunha sección:**
```json
"title": "O Novo Título que Queres"
```

**Para cambiar a descrición:**
```json
"description": "Aquí escribes o novo texto que queres que apareza"
```

**Para editar unha tarxeta:**
```json
{
  "title": "Novo Título da Tarxeta",
  "content": "Novo contido da tarxeta que aparecerá na web"
}
```

## 📞 Como Editar a Información de Contacto

### 📂 Arquivo: `data/contact.json`

Este arquivo contén toda a información de contacto:

```json
{
  "description": "Texto que aparece na sección de contacto",
  "email": "teu-email@exemplo.com",
  "phone": "+34 xxx xxx xxx",
  "address": "O teu enderezo completo",
  "socialMedia": [
    {
      "name": "Instagram",
      "url": "https://instagram.com/teu-usuario"
    }
  ]
}
```

### ✏️ Para cambiar:
- **Email**: Cambia `"teu-email@exemplo.com"` polo teu email real
- **Teléfono**: Cambia `"+34 xxx xxx xxx"` polo teu número
- **Redes sociais**: Cambia as URLs polas túas redes sociais reais

## 🖼️ Como Engadir Imaxes

### 📁 Cartafol: `images/`

1. **Sube as imaxes** ao cartafol `images/`
2. **Nomes recomendados**:
   - `mel-principal.jpg` → Imaxe principal do mel
   - `colmenas.jpg` → Foto das colmenas
   - `montes-galegos.jpg` → Paisaxe da rexión
   - `proceso-mel.jpg` → Proceso de elaboración

### 🔗 Como referenciar as imaxes no JSON:

Se engades unha imaxe chamada `mel-principal.jpg`, podedes referenciarla así:

```json
"additionalContent": [
  {
    "type": "image",
    "src": "images/mel-principal.jpg",
    "alt": "Descrición da imaxe"
  }
]
```

## ➕ Como Engadir Novas Seccións

### 1. Abrir `data/sections.json`
### 2. Engadir nova sección ao final:

```json
{
  "id": "nova-seccion",
  "title": "Título da Nova Sección",
  "description": "Descrición da nova sección que aparecerá na web",
  "cards": [
    {
      "title": "Primera Tarxeta",
      "content": "Contido da primeira tarxeta"
    },
    {
      "title": "Segunda Tarxeta", 
      "content": "Contido da segunda tarxeta"
    }
  ]
}
```

### 3. Engadir ao menú de navegación:

No arquivo `index.html`, busca esta liña e engade a nova sección:

```html
<a href="#nova-seccion" class="nav-link">Nova Sección</a>
```

## ⚠️ Regras Importantes

### ✅ O que SI podes facer:
- Cambiar textos e títulos
- Engadir ou quitar tarxetas
- Cambiar información de contacto
- Subir novas imaxes
- Engadir novas seccións

### ❌ O que NON deves facer:
- Cambiar os "id" das seccións
- Borrar comiñas `"` ou comas `,`
- Tocar arquivos que non sexan JSON
- Borrar chaves `{}` ou corchetes `[]`

## 🔧 Formato Correcto dos Arquivos JSON

### ✅ Correcto:
```json
{
  "title": "Título Correcto",
  "description": "Texto correcto"
}
```

### ❌ Incorrecto (falta coma):
```json
{
  "title": "Título Correcto"
  "description": "Texto correcto"
}
```

### ❌ Incorrecto (faltan comiñas):
```json
{
  title: Título Incorrecto,
  description: Texto incorrecto
}
```

## 🚀 Como Publicar os Cambios

1. **Garda os arquivos** que editaches
2. **Sube os cambios** a GitHub
3. **Espera 2-3 minutos** → A web actualizarase automaticamente

## 🆘 Que Facer se Algo Vai Mal

### Si a web non carga:
1. **Revisa** se gardaches ben os arquivos JSON
2. **Comproba** que non falten comas nin comiñas
3. **Usa unha ferramenta online** como https://jsonlint.com para verificar o JSON

### Si tes dúbidas:
1. **Fai unha copia** dos arquivos antes de editar
2. **Cambia pouco a pouco** e proba os cambios
3. **Pide axuda** se non estás seguro/a

## 🎨 Personalizar Cores (Avanzado)

Se queres cambiar as cores da web, podes editar estas liñas en `css/styles.css`:

```css
:root {
    --primary-color: #D4A548; /* Dourado principal */
    --secondary-color: #8B4513; /* Marrón */
    --accent-color: #F4E09B; /* Dourado claro */
}
```

**Códigos de cores comúns:**
- Dourado: `#D4A548`, `#FFD700`
- Verde: `#228B22`, `#32CD32`
- Azul: `#4169E1`, `#1E90FF`
- Marrón: `#8B4513`, `#A0522D`

---

## 📞 Contacto para Soporte

Si necesitas axuda adicional, non dubides en preguntar! Esta guía está feita para que poidas editar a web con confianza e autonomía.

**¡Boa sorte editando a túa web do mel Ghorghalado!** 🍯