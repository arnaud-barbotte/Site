# Aplex - Site Vitrine Landing Page

Site web vitrine pour **Aplex**, société spécialiste Apple (macOS, iOS) : vente, gestion de parc informatique et maintenance professionnelle.

## 🚀 Déploiement

Ce site est conçu pour être hébergé sur **GitHub Pages**.

### Activer GitHub Pages

1. Allez dans les paramètres de votre dépôt GitHub
2. Sélectionnez **"Pages"** dans le menu de gauche
3. Sous **"Source"**, choisissez :
   - Branche : `vibe/aplex-landing-a217c1` (ou `main`/`master` après merge)
   - Dossier : `/aplex`
4. Cliquez sur **"Save"**

✅ Votre site sera accessible à : `https://[votre-utilisateur].github.io/aplex/`

### Avec un domaine personnalisé

Si vous avez un domaine (ex: `aplex.fr`) :

1. Créez un fichier `CNAME` dans le dossier `aplex/` avec votre domaine :
   ```bash
   echo "aplex.fr" > aplex/CNAME
   ```

2. Configurez les DNS de votre domaine avec :
   - Un enregistrement CNAME pointant vers `[votre-utilisateur].github.io`
   - Ou un enregistrement A pointant vers les IPs de GitHub Pages

## 📁 Structure du projet

```
aplex/
├── index.html          # Page d'accueil (Landing Page)
├── css/
│   └── style.css       # Styles CSS (design minimaliste Apple)
├── js/
│   └── script.js       # JavaScript (animations, interactions)
├── img/
│   └── logo.png        # Logo Aplex (à fournir)
└── README.md           # Documentation
```

## 🛠️ Personnalisation

### 1. Logo

Placez votre fichier logo dans `aplex/img/logo.png` (format recommandé : PNG avec fond transparent, ~400x100px).

### 2. Contenu

#### Modifier les informations de contact

Dans `index.html`, recherchez la section **Contact** et modifiez :
```html
<a href="mailto:contact@aplex.fr">contact@aplex.fr</a>
<a href="tel:+33123456789">+33 1 23 45 67 89</a>
<span>123 Rue de Paris, 75001 Paris, France</span>
```

#### Modifier les services

Dans `index.html`, section **Services**, modifiez les cartes de services selon vos offres.

#### Modifier la présentation

Dans `index.html`, section **Présentation**, adaptez le texte à votre société.

### 3. Couleurs

Dans `css/style.css`, modifiez les variables CSS au début du fichier :
```css
:root {
    --color-primary: #0071e3;    /* Bleu Apple */
    --color-dark: #1d1d1f;        /* Gris foncé Apple */
    --color-light: #ffffff;      /* Blanc */
    /* ... */
}
```

### 4. Formulaire de contact

Pour activer l'envoi d'emails, vous devez :

**Option 1 : Utiliser Formspree (gratuit)**
1. Allez sur [https://formspree.io](https://formspree.io)
2. Créez un compte
3. Dans `index.html`, modifiez l'attribut `action` du formulaire :
   ```html
   <form id="contactForm" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```
4. Dans `js/script.js`, commentez la logique actuelle et décommentez la partie fetch

**Option 2 : Utiliser votre propre backend**
- Configurez un endpoint API pour recevoir les données du formulaire
- Mettez à jour l'URL dans le JavaScript

## 🎨 Design

- **Inspiration** : Design minimaliste inspiré de l'esthétique Apple
- **Couleurs** : Palette sobre et professionnelle (bleu Apple, gris, blanc)
- **Responsive** : Adapté mobile, tablette et desktop
- **Animations** : Effets légers pour une expérience fluide

## 📱 Fonctionnalités

- ✅ Navigation fluide avec ancres
- ✅ Menu mobile responsive
- ✅ Animations au défilement
- ✅ Formulaire de contact
- ✅ Bouton "Retour en haut"
- ✅ Design responsive
- ✅ Accessibilité (ARIA labels, clavier)

## 🔧 Technologies

- HTML5 sémantique
- CSS3 (Flexbox, Grid, Variables CSS)
- JavaScript Vanilla (ES6+)
- Pas de dépendances externes

## 📝 Changelog

- **v1.0.0** : Version initiale - Landing Page complète

## 🤝 Contribution

1. Forkez le dépôt
2. Créez une branche (`git checkout -b feature/ma-fonctionnalite`)
3. Commitez vos modifications (`git commit -m 'Ajout de ma fonctionnalite'`)
4. Poussez vers la branche (`git push origin feature/ma-fonctionnalite`)
5. Ouvrez une Pull Request

## 📄 Licence

Ce projet est sous licence **MIT** - libre d'utilisation pour usage personnel ou commercial.

---

**Aplex** - Spécialiste Apple pour les professionnels

*Vente, gestion de parc et maintenance macOS & iOS*
