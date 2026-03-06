# 🌿 Zest — Design System CSS — Référence Exhaustive

> **Organic Code v3.0** — Source de vérité UNIQUE pour toute la DA du projet Zest.
> Palette inspirée du personnage Yuzu : Menthe Riche · Or Yuzu · Vert Forêt · Crème Fouettée.
> **CE FICHIER CONTIENT LE CSS BRUT COMPLET DE CHAQUE ÉLÉMENT.** Un IA doit pouvoir reproduire la DA pixel-perfect en lisant uniquement ce document.

---

## 📁 Architecture des fichiers

```
public/
├── style.css              ← POINT D'ENTRÉE (importe css/all.css + overrides Zest)
└── css/
    ├── all.css             ← Importe tout le design system
    ├── tokens.css          ← Variables CSS (~115 custom properties)
    ├── reset.css           ← Reset navigateur
    ├── base.css            ← Styles de base (body, headings, liens, selection, focus…)
    ├── animations.css      ← Keyframes + classes d'animation
    ├── utilities.css       ← Classes utilitaires (flex, spacing, typo, colors, display…)
    ├── components/
    │   ├── accordion.css
    │   ├── avatar.css
    │   ├── back-to-top.css
    │   ├── badges.css
    │   ├── breadcrumbs.css
    │   ├── buttons.css
    │   ├── cards.css
    │   ├── drag-drop.css
    │   ├── dropdown.css
    │   ├── file-upload.css
    │   ├── footer.css
    │   ├── forms.css
    │   ├── grid.css
    │   ├── hero.css
    │   ├── loader.css
    │   ├── modal.css
    │   ├── navbar.css
    │   ├── notifications.css
    │   ├── pagination.css
    │   ├── scrollbar.css
    │   ├── sections.css
    │   ├── sidebar.css
    │   ├── tables.css
    │   ├── tabs.css
    │   ├── theme-toggle.css
    │   └── tooltips.css
    └── themes/
        ├── dark.css         ← Ajustements composants mode sombre
        └── light.css        ← Ajustements composants mode clair
```

---

## ☀️ Mode Clair : "Matcha Crème" (Validé)

> Un fond vert très pâle et crémeux. Vivant, organique, doux pour les yeux.
> Ni blanc pur agressif, ni gris triste — une teinte végétale vivante.

```css
/* ═══════════════════════════════════════════════════
   ☀️ Mode Clair : "Matcha Crème" (Validé)
   Fond vert très pâle et crémeux. Vivant, organique.
   ═══════════════════════════════════════════════════ */
[data-theme="light"] {
  /* --- 1. FOND & SURFACES --- */
  --color-bg: #e9f3ed; /* Matcha Crème */
  --color-bg-elevated: #ffffff;
  --color-bg-alt: #e3ece8; /* Sidebar distincte */
  --color-surface: #ffffff;
  --color-surface-hover: #f4f8f6;

  /* --- 2. PRIMARY (même énergie menthe, vibrant sur crème) --- */
  --color-primary: #14b8a6;
  --color-primary-hover: #0d9488;
  --color-primary-muted: #c5f0e3;
  --color-primary-light: rgba(20, 184, 166, 0.1);
  --color-primary-alpha-10: rgba(20, 184, 166, 0.08);
  --color-primary-alpha-15: rgba(20, 184, 166, 0.12);
  --color-primary-alpha-25: rgba(20, 184, 166, 0.2);
  --color-primary-alpha-35: rgba(20, 184, 166, 0.28);

  /* --- 3. ACCENTS --- */
  --color-accent: #f59e0b;
  --color-accent-hover: #d97706;

  /* --- 4. TEXTE (harmonie dark ↔ light) --- */
  /* On utilise le vert profond du dark mode pour le texte.
     Ça crée une harmonie parfaite entre les 2 thèmes. */
  --color-text: #132a24;
  --color-text-muted: #4a665e; /* Vert sauge doux */
  --color-text-dim: #8fa39d;
  --color-on-primary: #042f2e;

  /* --- 5. BORDURES organiques (vert d'eau, pas gris) --- */
  --color-border: #cddbd5;
  --color-border-light: #dcebe5;
  --color-border-focus: #14b8a6;

  /* --- 6. FEEDBACK --- */
  --color-success: #3aaa7e;
  --color-warning: #c9a83a;
  --color-error: #c85050; /* Rouge organique doux */

  /* --- 7. OMBRES teintées vert, douces --- */
  --color-shadow: rgba(19, 42, 36, 0.08);
  --shadow-btn: 0 4px 16px rgba(20, 184, 166, 0.25);
  --shadow-card: 0 2px 12px rgba(19, 42, 36, 0.07);
  --shadow-card-hover: 0 8px 28px rgba(20, 184, 166, 0.15);

  /* --- 8. OVERLAY --- */
  --overlay-bg: rgba(19, 42, 36, 0.2);
  /* Pas de flou en light pour garder la netteté du design "papier" */
  --backdrop-blur: none;
}
```

### Points clés du Light Theme

| Choix                     | Raison                                       |
| ------------------------- | -------------------------------------------- |
| `#E9F3ED` (pas blanc)     | Teinte végétale vivante, organique           |
| Texte `#132A24`           | Vert profond = le bg du dark mode → harmonie |
| Ombres `rgba(19,42,36,…)` | Teintées vert, pas noires                    |
| Primary identique au dark | Menthe vibrante sur les 2 thèmes             |
| Pas de `backdrop-blur`    | Netteté "papier" en light                    |

---

**Le HTML charge `style.css?v=2.4`** :

```html
<link rel="stylesheet" href="style.css?v=2.4" />
```

`style.css` fait :

1. `@import "css/all.css";` — charge tout le design system
2. Ajoute les **overrides spécifiques à Zest** (login-card, logo, background désactivé, etc.)

**Ordre de chargement dans `all.css` :**

1. Foundation : `tokens.css` → `reset.css` → `base.css` → `animations.css`
2. Components : 26 fichiers (buttons, cards, navbar, footer, forms, badges, modal, tooltips, notifications, hero, sections, grid, pagination, avatar, loader, scrollbar, back-to-top, theme-toggle, dropdown, sidebar, tabs, file-upload, drag-drop, tables, breadcrumbs, accordion)
3. Themes : `dark.css` → `light.css`
4. Utilities : `utilities.css` (dernier = plus haute spécificité)

---

## ⚠️ OVERRIDES ZEST (`style.css`) — CSS BRUT COMPLET

> **Ce fichier est critique.** Il contient toutes les personnalisations Zest par rapport au design system générique.

```css
/* ═══ Import du Design System ═══ */
@import "css/all.css";

/* ═══ CRITIQUE : Désactivation grille + halo ═══ */
body::before,
body::after {
  display: none;
}

/* ═══ Login Card — Glassmorphism ═══ */
.login-card {
  width: 100%;
  max-width: 420px;
  padding: var(--space-2xl);
  background: rgba(20, 31, 24, 0.75);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid var(--color-border-light);
  border-radius: var(--radius-card);
  box-shadow: var(--shadow-glow);
}

[data-theme="light"] .login-card {
  background: rgba(234, 237, 233, 0.8);
  box-shadow: var(--shadow-card);
}

@supports not (backdrop-filter: blur(16px)) {
  .login-card {
    background: rgba(20, 31, 24, 0.95);
  }
  [data-theme="light"] .login-card {
    background: rgba(234, 237, 233, 0.95);
  }
}

/* ═══ Tagline + Logo ═══ */
.zest-tagline {
  font-size: var(--text-sm);
  font-weight: var(--weight-semibold);
  color: var(--color-accent);
  letter-spacing: var(--tracking-wider);
  text-transform: uppercase;
  margin-bottom: var(--space-xs);
  user-select: none;
}

.zest-logo {
  font-family: var(--font-display);
  font-size: var(--text-4xl);
  font-weight: var(--weight-black);
  color: var(--color-primary);
  text-align: center;
  line-height: var(--leading-none);
  user-select: none;
}

/* ═══ Options de raccourcissement ═══ */
.shorten-options {
  padding: var(--space-sm) 0;
}
.shorten-options .form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-md);
  align-items: start;
}
.shorten-options .form-group {
  min-width: 0;
  width: 100%;
}

/* ═══ Résultat du lien raccourci ═══ */
.link-result {
  display: none;
  padding: var(--space-md);
  background: var(--color-bg-elevated);
  border: 1px solid var(--color-primary);
  border-radius: var(--radius-md);
  margin-top: var(--space-md);
  animation: fadeInUp 0.3s ease;
}
.link-result.visible {
  display: block;
}
.link-result-url {
  font-family: var(--font-mono);
  font-size: var(--text-lg);
  font-weight: var(--weight-semibold);
  color: var(--color-primary);
  word-break: break-all;
}
.link-result-actions {
  display: flex;
  gap: var(--space-sm);
  margin-top: var(--space-sm);
}

/* ═══ Tableau overrides ═══ */
.table {
  border-collapse: collapse;
  width: 100%;
}
.table td,
.table th {
  padding: 0.75rem;
  vertical-align: middle;
}
.table tbody tr {
  transition: background var(--transition-fast);
  cursor: default;
}
.table tbody tr:hover {
  background: var(--color-bg-elevated);
}

/* ═══ Admin section ═══ */
.admin-section {
  margin-top: var(--space-3xl);
  padding-top: var(--space-2xl);
  border-top: 1px solid var(--color-border-light);
}

/* ═══ URL tronquée ═══ */
.url-truncate {
  max-width: 300px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: inline-block;
  vertical-align: middle;
}

/* ═══ Feedback copie ═══ */
.copy-feedback {
  display: inline-flex;
  align-items: center;
  gap: var(--space-xs);
  color: var(--color-success);
  font-size: var(--text-sm);
  font-weight: var(--weight-medium);
  opacity: 0;
  transition: opacity var(--transition-fast);
}
.copy-feedback.show {
  opacity: 1;
}

/* ═══ Dashboard header ═══ */
.dashboard-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: var(--space-md);
  margin-bottom: var(--space-2xl);
}

/* ═══ État vide ═══ */
.empty-state {
  text-align: center;
  padding: var(--space-3xl) var(--space-xl);
  color: var(--color-text-muted);
}

/* ═══ Toast container (override) ═══ */
.toast-container {
  position: fixed;
  bottom: var(--space-lg);
  right: var(--space-lg);
  z-index: var(--z-notification);
  display: flex;
  flex-direction: column-reverse;
  gap: var(--space-sm);
  pointer-events: none;
}
.toast-container .toast {
  pointer-events: auto;
}

/* ═══ URL input row ═══ */
.url-input-row {
  display: flex;
  gap: 0.5rem;
  align-items: stretch;
}

/* ═══ Navbar actions desktop gap ═══ */
.navbar-actions {
  gap: var(--space-md);
}

/* ═══ Table scroll mobile ═══ */
.table-wrapper {
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}

/* ═══ Tooltip data-tooltip (override simplifié) ═══ */
[data-tooltip] {
  position: relative;
  cursor: help;
}
[data-tooltip]:hover::after {
  content: attr(data-tooltip);
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  padding: 0.4rem 0.8rem;
  background: var(--color-bg-elevated);
  border: 1px solid var(--color-border-light);
  border-radius: var(--radius-sm);
  font-size: var(--text-xs);
  white-space: nowrap;
  max-width: 400px;
  overflow: hidden;
  text-overflow: ellipsis;
  z-index: 100;
  pointer-events: none;
}

/* ═══ Toggle login/invitation transition ═══ */
#passwordGroup,
#invitationCodeGroup {
  transition:
    opacity 0.2s ease,
    max-height 0.3s ease;
}

/* ═══ Responsive — style.css ═══ */
@media (max-width: 768px) {
  .login-card {
    margin: var(--space-md);
    padding: var(--space-xl);
  }
  .url-truncate {
    max-width: 150px;
  }
  .dashboard-header {
    flex-direction: column;
    align-items: flex-start;
  }
  .shorten-options .form-row {
    grid-template-columns: 1fr;
    gap: var(--space-sm);
  }
  .navbar-actions {
    gap: var(--space-sm);
  }
  #navUsername {
    display: none;
  }
  .shorten-options .form-group {
    min-width: 0;
    width: 100%;
  }
  .btn-xs {
    min-height: 44px;
    min-width: 44px;
    padding: 0.5rem 1rem;
  }
  .modal {
    max-width: calc(100vw - 2rem);
    margin: 1rem;
  }
}
@media (max-width: 576px) {
  .link-result-actions {
    flex-direction: column;
  }
  .url-truncate {
    max-width: 120px;
  }
  .navbar-actions .btn {
    padding-inline: var(--space-sm);
    font-size: var(--text-xs);
  }
  .url-input-row {
    flex-direction: column;
    align-items: stretch;
  }
  .url-input-row .btn {
    width: 100%;
  }
  .modal-footer {
    flex-wrap: wrap;
  }
  .modal-footer .btn {
    flex: 1;
    min-width: 80px;
  }
}
@media (max-width: 400px) {
  .toast-container {
    left: var(--space-sm);
    right: var(--space-sm);
  }
  .toast-container .toast {
    max-width: 100%;
  }
}
```

---

## 🖌️ CSS INLINE DANS LE HTML

> Les fichiers HTML contiennent du CSS inline (`style=""`) et des `<style>` blocs. Voici **tout** ce qui est défini en dehors des fichiers CSS.

### `<style>` bloc — `index.html` et `invite.html`

```css
/* Défini en <style> dans le <head> des pages login/invite */
.login-page {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: var(--space-md);
}
```

### Attributs `style=""` — `dashboard.html`

```html
<!-- navUsername -->
<span id="navUsername" style="min-width: 80px; text-align: right">
  <!-- adminNavLink (caché par défaut) -->
  <a id="adminNavLink" style="display: none; flex-shrink: 0">
    <!-- Boutons navbar -->
    <button style="flex-shrink: 0">
      <!-- main container padding -->
      <main
        class="container"
        style="padding-top: calc(var(--header-height) + var(--space-2xl)); padding-bottom: var(--space-3xl)"
      >
        <!-- Section header aligné gauche -->
        <div class="section-header" style="text-align: left">
          <!-- URL input flex -->
          <input class="form-input" style="flex: 1" />

          <!-- Bouton raccourcir -->
          <button class="btn btn-primary" style="white-space: nowrap">
            <!-- Erreur inline raccourcissement -->
            <div
              id="shortenError"
              style="display: none; color: var(--color-error); font-size: var(--text-sm);"
            >
              <!-- Lien résultat gap -->
              <div
                class="flex items-center justify-between flex-wrap"
                style="gap: var(--space-sm)"
              >
                <!-- État vide caché -->
                <div id="emptyState" style="display: none">
                  <!-- Modals cachées -->
                  <div class="modal-backdrop" style="display: none">
                    <!-- Alertes login/invite cachées -->
                    <div class="alert alert-error" style="display: none">
                      <!-- Skip link accessibilité -->
                      <a
                        class="sr-only"
                        style="position: absolute; left: -9999px; top: auto; width: 1px; height: 1px; overflow: hidden;"
                      ></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </button>
        </div>
      </main></button></a
></span>
```

### Attributs `style=""` — `admin.html`

```html
<!-- navUsername -->
<span id="navUsername" style="min-width: 80px; text-align: right">
  <!-- Boutons navbar -->
  <button style="flex-shrink: 0">
    <a class="btn btn-ghost btn-sm" style="flex-shrink: 0">
      <!-- main container padding -->
      <main
        class="container"
        style="padding-top: calc(var(--header-height) + var(--space-2xl)); padding-bottom: var(--space-3xl)"
      >
        <!-- Section header aligné gauche -->
        <div class="section-header" style="text-align: left">
          <!-- Carte créer utilisateur -->
          <div class="card mt-lg" style="max-width: 500px">
            <!-- Bloc invitation — fond + bordure accent -->
            <div
              style="background: var(--color-bg-elevated); border: 1px solid var(--color-accent); border-radius: var(--radius-md); padding: var(--space-md); margin: var(--space-md) 0; word-break: break-all;"
            >
              <!-- Label invitation -->
              <p
                class="text-xs text-muted"
                style="margin-bottom: var(--space-xs)"
              >
                <!-- Lien invitation couleur accent + sélection complète -->
              </p>

              <p
                class="font-mono text-sm"
                id="invitationLink"
                style="color: var(--color-accent); user-select: all"
              >
                <!-- Modals + skip link identiques à dashboard -->
              </p>
            </div>
          </div>
        </div>
      </main></a
    >
  </button></span
>
```

---

## 🌟 Fond de page (body background)

> ⚠️ **DANS ZEST**, `body::before` (grille) et `body::after` (halo radial) sont **DÉSACTIVÉS** via `style.css` (`display: none`).

**Le fond est une couleur plate uniquement :**

- Dark mode : `--color-bg` = `#132A24` (Vert Forêt Profond)
- Light mode : `--color-bg` = `#DEF5DB` (Vert Pastel Yuzu)

**Pas de grille. Pas de halo. Juste la couleur.**

Le design system (`base.css`) définit ces effets mais `style.css` les override :

```css
/* base.css : grille 40×40px (DÉSACTIVÉE dans Zest) */
body::before {
  content: "";
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 0;
  background-image:
    linear-gradient(var(--grid-color) 1px, transparent 1px),
    linear-gradient(90deg, var(--grid-color) 1px, transparent 1px);
  background-size: 40px 40px;
}

/* base.css : halo radial (DÉSACTIVÉ dans Zest) */
body::after {
  content: "";
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 60vh;
  pointer-events: none;
  z-index: 0;
  background: var(--bg-gradient);
}

/* base.css : contenu au-dessus des effets */
body > * {
  position: relative;
  z-index: var(--z-base);
}
```

---

## 🎨 Palette de couleurs

> Architecture **dark-first** : `:root` = dark, `[data-theme="light"]` = override clair.

### 🌙 Mode Sombre (défaut) — `:root, [data-theme="dark"]`

| Token                      | Valeur                                                                     | Rôle                                |
| -------------------------- | -------------------------------------------------------------------------- | ----------------------------------- |
| `--color-bg`               | `#132a24`                                                                  | Fond global — Vert Forêt Profond    |
| `--color-bg-elevated`      | `#172f29`                                                                  | Fond élevé (inputs, modals, toasts) |
| `--color-bg-alt`           | `#1c3f36`                                                                  | Zone alternative (sidebar)          |
| `--color-surface`          | `#1c3f36`                                                                  | Surface cartes/panneaux             |
| `--color-surface-hover`    | `#235047`                                                                  | Surface au survol                   |
| `--color-primary`          | `#14b8a6`                                                                  | Menthe Riche — boutons, logo, liens |
| `--color-primary-hover`    | `#0d9488`                                                                  | Menthe foncée survol                |
| `--color-primary-muted`    | `#134e48`                                                                  | Menthe très atténuée                |
| `--color-primary-light`    | `rgba(20, 184, 166, 0.15)`                                                 | Highlights transparents             |
| `--color-primary-alpha-10` | `rgba(20, 184, 166, 0.1)`                                                  | Alpha 10%                           |
| `--color-primary-alpha-15` | `rgba(20, 184, 166, 0.15)`                                                 | Alpha 15%                           |
| `--color-primary-alpha-25` | `rgba(20, 184, 166, 0.25)`                                                 | Alpha 25%                           |
| `--color-primary-alpha-35` | `rgba(20, 184, 166, 0.35)`                                                 | Alpha 35%                           |
| `--color-accent`           | `#fcd34d`                                                                  | Or Lumineux — « Le Zest »           |
| `--color-accent-hover`     | `#fde68a`                                                                  | Or pâle survol                      |
| `--color-secondary`        | `#88badc`                                                                  | Bleu Ciel Pastel                    |
| `--color-secondary-hover`  | `#a5cceb`                                                                  | Bleu ciel plus clair                |
| `--color-secondary-muted`  | `rgba(136, 186, 220, 0.15)`                                                | Bleu transparent                    |
| `--color-text`             | `#e6f2ee`                                                                  | Texte principal                     |
| `--color-text-muted`       | `#9abdb5`                                                                  | Texte secondaire, labels            |
| `--color-text-dim`         | `#6a9288`                                                                  | Placeholders                        |
| `--color-on-primary`       | `#042f2e`                                                                  | Texte sur fond primary              |
| `--color-border`           | `rgba(20, 184, 166, 0.22)`                                                 | Bordure principale                  |
| `--color-border-light`     | `rgba(20, 184, 166, 0.09)`                                                 | Bordure subtile                     |
| `--color-border-focus`     | `#14b8a6`                                                                  | Bordure au focus                    |
| `--color-success`          | `#4ade80`                                                                  | Succès                              |
| `--color-warning`          | `#f8e08e`                                                                  | Avertissement                       |
| `--color-error`            | `#f87171`                                                                  | Erreur                              |
| `--color-pop`              | `#fca5a5`                                                                  | Rose Pastel — likes                 |
| `--color-pop-hover`        | `#f87171`                                                                  | Rose corail survol                  |
| `--color-shadow`           | `rgba(20, 184, 166, 0.3)`                                                  | Couleur ombre de référence          |
| `--overlay-bg`             | `rgba(6, 18, 14, 0.72)`                                                    | Backdrop modal                      |
| `--grid-color`             | `rgba(20, 184, 166, 0.04)`                                                 | Grille background (DÉSACTIVÉE)      |
| `--bg-gradient`            | `radial-gradient(circle at 50% 0%, rgba(20,184,166,0.1), transparent 70%)` | Halo (DÉSACTIVÉ)                    |

### ☀️ Mode Clair — `[data-theme="light"]`

| Token                      | Valeur                                                                       | Rôle                |
| -------------------------- | ---------------------------------------------------------------------------- | ------------------- |
| `--color-bg`               | `#def5db`                                                                    | Vert Pastel Yuzu    |
| `--color-bg-elevated`      | `#ffffff`                                                                    | Blanc pur           |
| `--color-bg-alt`           | `#cfeecb`                                                                    | Fond alternatif     |
| `--color-surface`          | `#ffffff`                                                                    | Surface cartes      |
| `--color-surface-hover`    | `#f8faf8`                                                                    | Surface survol      |
| `--color-primary`          | `#80e0c2`                                                                    | Menthe Pastel       |
| `--color-primary-hover`    | `#5dcba8`                                                                    | Menthe soutenue     |
| `--color-primary-muted`    | `#c5f0e3`                                                                    | Menthe très pâle    |
| `--color-primary-light`    | `rgba(128, 224, 194, 0.12)`                                                  | Highlights          |
| `--color-primary-alpha-10` | `rgba(128, 224, 194, 0.1)`                                                   | Alpha 10%           |
| `--color-primary-alpha-15` | `rgba(128, 224, 194, 0.15)`                                                  | Alpha 15%           |
| `--color-primary-alpha-25` | `rgba(128, 224, 194, 0.25)`                                                  | Alpha 25%           |
| `--color-primary-alpha-35` | `rgba(128, 224, 194, 0.35)`                                                  | Alpha 35%           |
| `--color-accent`           | `#f59e0b`                                                                    | Or Chaud            |
| `--color-accent-hover`     | `#d97706`                                                                    | Or foncé            |
| `--color-secondary`        | `#71a8cf`                                                                    | Bleu Azur           |
| `--color-secondary-hover`  | `#5590b8`                                                                    | Bleu Azur foncé     |
| `--color-secondary-muted`  | `rgba(113, 168, 207, 0.12)`                                                  | Bleu transparent    |
| `--color-text`             | `#3d524b`                                                                    | Gris-Vert Foncé     |
| `--color-text-muted`       | `#7a9690`                                                                    | Texte secondaire    |
| `--color-text-dim`         | `#a8c0bb`                                                                    | Texte atténué       |
| `--color-on-primary`       | `#0a2a22`                                                                    | Texte sur bouton    |
| `--color-border`           | `rgba(128, 224, 194, 0.35)`                                                  | Bordure principale  |
| `--color-border-light`     | `#c8e8c4`                                                                    | Bordure subtile     |
| `--color-border-focus`     | `#80e0c2`                                                                    | Bordure focus       |
| `--color-success`          | `#3aaa7e`                                                                    | Succès              |
| `--color-warning`          | `#c9a83a`                                                                    | Avertissement       |
| `--color-error`            | `#d05555`                                                                    | Erreur              |
| `--color-shadow`           | `rgba(61, 82, 75, 0.15)`                                                     | Couleur ombre       |
| `--overlay-bg`             | `rgba(13, 42, 36, 0.35)`                                                     | Backdrop modal      |
| `--grid-color`             | `rgba(61, 82, 75, 0.05)`                                                     | Grille (DÉSACTIVÉE) |
| `--bg-gradient`            | `radial-gradient(circle at 50% 0%, rgba(128,224,194,0.12), transparent 70%)` | Halo (DÉSACTIVÉ)    |

### 🏷️ Marques (statiques — pas de variation thème)

| Token             | Valeur    |
| ----------------- | --------- |
| `--brand-x`       | `#000000` |
| `--brand-github`  | `#333333` |
| `--brand-reddit`  | `#ff4500` |
| `--brand-youtube` | `#ff0000` |
| `--brand-twitch`  | `#9146ff` |
| `--brand-tiktok`  | `#fe2c55` |
| `--brand-discord` | `#5865f2` |
| `--brand-osu`     | `#ff66aa` |
| `--brand-steam`   | `#1b2838` |
| `--brand-riot`    | `#d32936` |

---

## ✍️ Typographie

| Token            | Valeur                                                               | Usage          |
| ---------------- | -------------------------------------------------------------------- | -------------- |
| `--font-display` | `"Nunito", sans-serif`                                               | Titres, logo   |
| `--font-body`    | `"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif` | Corps de texte |
| `--font-mono`    | `"JetBrains Mono", "Fira Code", "Cascadia Code", monospace`          | Code           |

Google Fonts chargées :

```html
<link
  href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Nunito:wght@700;800;900&family=JetBrains+Mono:wght@400;500&display=swap"
  rel="stylesheet"
/>
```

### Échelle de tailles

| Token         | Taille            |
| ------------- | ----------------- |
| `--text-xs`   | `0.75rem` / 12px  |
| `--text-sm`   | `0.875rem` / 14px |
| `--text-base` | `1rem` / 16px     |
| `--text-lg`   | `1.125rem` / 18px |
| `--text-xl`   | `1.25rem` / 20px  |
| `--text-2xl`  | `1.5rem` / 24px   |
| `--text-3xl`  | `1.75rem` / 28px  |
| `--text-4xl`  | `2.5rem` / 40px   |
| `--text-5xl`  | `3.5rem` / 56px   |

### Poids

| Token                | Valeur |
| -------------------- | ------ |
| `--weight-normal`    | 400    |
| `--weight-medium`    | 500    |
| `--weight-semibold`  | 600    |
| `--weight-bold`      | 700    |
| `--weight-extrabold` | 800    |
| `--weight-black`     | 900    |

### Interlignage & letter-spacing

| Token               | Valeur  |
| ------------------- | ------- |
| `--leading-none`    | 1       |
| `--leading-tight`   | 1.1     |
| `--leading-snug`    | 1.25    |
| `--leading-normal`  | 1.5     |
| `--leading-relaxed` | 1.6     |
| `--tracking-tight`  | -0.02em |
| `--tracking-normal` | 0       |
| `--tracking-wide`   | 0.5px   |
| `--tracking-wider`  | 0.08em  |

---

## 📐 Espacement + Layout + Bordures

| Token                 | Valeur           |
| --------------------- | ---------------- |
| `--space-2xs`         | `0.125rem` / 2px |
| `--space-xs`          | `0.25rem` / 4px  |
| `--space-sm`          | `0.5rem` / 8px   |
| `--space-md`          | `1rem` / 16px    |
| `--space-lg`          | `1.5rem` / 24px  |
| `--space-xl`          | `2rem` / 32px    |
| `--space-2xl`         | `3rem` / 48px    |
| `--space-3xl`         | `4rem` / 64px    |
| `--space-4xl`         | `5rem` / 80px    |
| `--space-5xl`         | `6rem` / 96px    |
| `--container-max`     | `1400px`         |
| `--container-narrow`  | `900px`          |
| `--container-wide`    | `1600px`         |
| `--container-padding` | `20px`           |
| `--header-height`     | `56px`           |
| `--border-width`      | `1px`            |
| `--border-thick`      | `2px`            |
| `--border-extra`      | `3px`            |

### Border Radius

| Token           | Valeur   | Usage            |
| --------------- | -------- | ---------------- |
| `--radius-xs`   | `4px`    | Inline code      |
| `--radius-sm`   | `6px`    | Petits éléments  |
| `--radius-md`   | `12px`   | Inputs, panneaux |
| `--radius-btn`  | `16px`   | Boutons          |
| `--radius-card` | `24px`   | Cartes           |
| `--radius-full` | `9999px` | Badges, avatars  |

---

## 🌫️ Ombres & Glow

### Mode Sombre

| Token                  | Valeur                              |
| ---------------------- | ----------------------------------- |
| `--shadow-xs`          | `0 1px 2px rgba(0,0,0,.35)`         |
| `--shadow-sm`          | `0 1px 3px rgba(0,0,0,.45)`         |
| `--shadow-md`          | `0 4px 12px rgba(0,0,0,.5)`         |
| `--shadow-lg`          | `0 10px 20px rgba(0,0,0,.6)`        |
| `--shadow-xl`          | `0 20px 40px rgba(0,0,0,.7)`        |
| `--shadow-btn`         | `0px 0px 18px rgba(20,184,166,.4)`  |
| `--shadow-btn-hover`   | `0px 0px 28px rgba(20,184,166,.65)` |
| `--shadow-card`        | `0px 0px 0px transparent`           |
| `--shadow-card-hover`  | `0px 0px 24px rgba(20,184,166,.12)` |
| `--shadow-float`       | `0 0 40px rgba(20,184,166,.08)`     |
| `--shadow-glow`        | `0 0 20px rgba(20,184,166,.14)`     |
| `--shadow-glow-strong` | `0 0 32px rgba(20,184,166,.28)`     |
| `--focus-ring`         | `0 0 0 2px rgba(20,184,166,.55)`    |

### Mode Clair

| Token                  | Valeur                             |
| ---------------------- | ---------------------------------- |
| `--shadow-xs`          | `0 1px 2px rgba(0,0,0,.04)`        |
| `--shadow-sm`          | `0 1px 3px rgba(0,0,0,.07)`        |
| `--shadow-md`          | `0 4px 12px rgba(0,0,0,.08)`       |
| `--shadow-lg`          | `0 10px 24px rgba(0,0,0,.1)`       |
| `--shadow-xl`          | `0 20px 40px rgba(0,0,0,.12)`      |
| `--shadow-btn`         | `0 4px 16px rgba(128,224,194,.4)`  |
| `--shadow-btn-hover`   | `0 6px 24px rgba(128,224,194,.55)` |
| `--shadow-card`        | `0 4px 16px rgba(61,82,75,.1)`     |
| `--shadow-card-hover`  | `0 8px 28px rgba(128,224,194,.25)` |
| `--shadow-float`       | `0 20px 40px rgba(61,82,75,.1)`    |
| `--shadow-glow`        | `0 0 20px rgba(128,224,194,.2)`    |
| `--shadow-glow-strong` | `0 0 32px rgba(128,224,194,.35)`   |
| `--focus-ring`         | `0 0 0 2px rgba(128,224,194,.55)`  |

---

## ⚡ Transitions

| Token                 | Valeur                                | Usage             |
| --------------------- | ------------------------------------- | ----------------- |
| `--transition-fast`   | `0.15s ease`                          | Hover rapide      |
| `--transition-base`   | `0.25s cubic-bezier(0.4,0,0.2,1)`     | Interactions      |
| `--transition-slow`   | `0.35s ease`                          | Animations douces |
| `--transition-bounce` | `0.4s cubic-bezier(0.34,1.56,0.64,1)` | Effet ressort     |
| `--transition-theme`  | `0.5s ease`                           | Changement thème  |

## 🪟 Z-Index

| Token                | Valeur | Usage            |
| -------------------- | ------ | ---------------- |
| `--z-base`           | `1`    | Contenu normal   |
| `--z-dropdown`       | `100`  | Menus déroulants |
| `--z-sticky`         | `200`  | Navbar, sidebar  |
| `--z-modal-backdrop` | `400`  | Fond modal       |
| `--z-modal`          | `500`  | Modals           |
| `--z-notification`   | `600`  | Toasts           |
| `--z-tooltip`        | `700`  | Tooltips         |
| `--z-theme-toggle`   | `1000` | Bouton thème     |

## 📱 Breakpoints

| Nom   | Valeur   | Usage              |
| ----- | -------- | ------------------ |
| `xs`  | `400px`  | Petits téléphones  |
| `sm`  | `576px`  | Téléphones         |
| `md`  | `768px`  | Tablettes portrait |
| `lg`  | `900px`  | Tablettes paysage  |
| `xl`  | `1200px` | Desktops           |
| `2xl` | `1400px` | Grands écrans      |

---

## 🔄 Reset (`reset.css`) — CSS brut

```css
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 16px;
  scroll-behavior: smooth;
  -webkit-text-size-adjust: 100%;
  -moz-text-size-adjust: 100%;
  text-size-adjust: 100%;
  tab-size: 4;
}

body {
  min-height: 100vh;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

img,
picture,
video,
canvas,
svg {
  display: block;
  max-width: 100%;
  height: auto;
}

input,
button,
textarea,
select {
  font: inherit;
  color: inherit;
  background: none;
  border: none;
}

button {
  cursor: pointer;
}
ul,
ol {
  list-style: none;
}
a {
  color: inherit;
  text-decoration: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
fieldset {
  border: none;
}

input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
input[type="number"] {
  -moz-appearance: textfield;
}
input[type="search"]::-webkit-search-cancel-button {
  -webkit-appearance: none;
}

@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }
}
```

---

## 🏗️ Base Styles (`base.css`) — CSS brut

```css
body {
  font-family: var(--font-body);
  font-weight: var(--weight-normal);
  line-height: var(--leading-relaxed);
  color: var(--color-text);
  background-color: var(--color-bg);
  transition:
    background-color var(--transition-theme),
    color var(--transition-theme);
}

/* Headings — tous utilisent --font-display */
h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: var(--font-display);
  font-weight: var(--weight-extrabold);
  line-height: var(--leading-tight);
  color: var(--color-text);
  letter-spacing: var(--tracking-tight);
}
h1 {
  font-size: var(--text-5xl);
}
h2 {
  font-size: var(--text-4xl);
}
h3 {
  font-size: var(--text-3xl);
}
h4 {
  font-size: var(--text-2xl);
}
h5 {
  font-size: var(--text-xl);
}
h6 {
  font-size: var(--text-lg);
}

p {
  line-height: var(--leading-relaxed);
}

a {
  color: var(--color-primary);
  text-decoration: none;
  transition: color var(--transition-fast);
}
a:hover {
  color: var(--color-primary-hover);
}

strong,
b {
  font-weight: var(--weight-bold);
}
small {
  font-size: var(--text-sm);
}

code,
kbd,
pre,
samp {
  font-family: var(--font-mono);
  font-size: 0.9em;
}
code {
  background: var(--color-surface);
  padding: 0.15em 0.4em;
  border-radius: var(--radius-xs);
  border: var(--border-width) solid var(--color-border-light);
}
pre {
  background: var(--color-surface);
  padding: var(--space-md);
  border-radius: var(--radius-md);
  border: var(--border-width) solid var(--color-border-light);
  overflow-x: auto;
}
pre code {
  background: none;
  padding: 0;
  border: none;
  border-radius: 0;
}

::selection {
  background: var(--color-primary);
  color: var(--color-on-primary);
}
::placeholder {
  color: var(--color-text-dim);
  opacity: 1;
}
:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}

hr {
  border: none;
  height: var(--border-width);
  background: var(--color-border-light);
  margin: var(--space-xl) 0;
}
blockquote {
  border-left: var(--border-extra) solid var(--color-primary);
  padding-left: var(--space-md);
  color: var(--color-text-muted);
  font-style: italic;
}
```

---

## 🎬 Animations (`animations.css`) — CSS brut complet

```css
/* ═══ KEYFRAMES ═══ */
@keyframes float {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-12px);
  }
}
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateX(100%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes dropdownFadeIn {
  from {
    opacity: 0;
    transform: translateY(-8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
@keyframes pulse {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}
@keyframes shimmer {
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
}
@keyframes scaleIn {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

/* ═══ CLASSES ═══ */
.animate-float {
  animation: float 5s ease-in-out infinite;
}
.animate-fadeInUp {
  animation: fadeInUp 0.6s ease-out forwards;
}
.animate-fadeIn {
  animation: fadeIn 0.3s ease forwards;
}
.animate-slideIn {
  animation: slideIn 0.3s ease forwards;
}
.animate-slideUp {
  animation: slideUp 0.5s ease forwards;
}
.animate-slideDown {
  animation: slideDown 0.2s ease forwards;
}
.animate-spin {
  animation: spin 0.8s linear infinite;
}
.animate-pulse {
  animation: pulse 2s ease-in-out infinite;
}
.animate-scaleIn {
  animation: scaleIn 0.2s ease forwards;
}

/* ═══ STAGGER DELAYS ═══ */
.delay-1 {
  animation-delay: 0.05s;
}
.delay-2 {
  animation-delay: 0.1s;
}
.delay-3 {
  animation-delay: 0.15s;
}
.delay-4 {
  animation-delay: 0.2s;
}
.delay-5 {
  animation-delay: 0.25s;
}
.delay-6 {
  animation-delay: 0.3s;
}

/* ═══ REDUCED MOTION ═══ */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
  .animate-float,
  .animate-fadeInUp,
  .animate-fadeIn,
  .animate-slideIn,
  .animate-slideUp,
  .animate-slideDown,
  .animate-spin,
  .animate-pulse,
  .animate-scaleIn {
    animation: none !important;
    opacity: 1 !important;
    transform: none !important;
  }
}
```

---

## 📦 Composants — CSS brut complet

### Boutons `.btn` (`components/buttons.css`)

```css
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-sm);
  padding: var(--space-sm) var(--space-lg);
  font-family: var(--font-body);
  font-size: var(--text-sm);
  font-weight: var(--weight-semibold);
  line-height: var(--leading-snug);
  letter-spacing: var(--tracking-wide);
  text-decoration: none;
  text-transform: uppercase;
  border: var(--border-thick) solid transparent;
  border-radius: var(--radius-btn);
  cursor: pointer;
  user-select: none;
  white-space: nowrap;
  transition:
    background-color var(--transition-base),
    color var(--transition-base),
    border-color var(--transition-base),
    box-shadow var(--transition-base),
    transform var(--transition-fast);
}

/* Primary */
.btn-primary {
  background-color: var(--color-primary);
  color: var(--color-on-primary);
  border-color: var(--color-primary);
  box-shadow: var(--shadow-btn);
}
.btn-primary:hover {
  background-color: var(--color-primary-hover);
  border-color: var(--color-primary-hover);
  box-shadow: var(--shadow-btn-hover);
  transform: translateY(-2px);
}
.btn-primary:active {
  transform: translateY(0);
  box-shadow: var(--shadow-xs);
}

/* Secondary (outlined) */
.btn-secondary {
  background-color: transparent;
  color: var(--color-primary);
  border-color: var(--color-primary);
}
.btn-secondary:hover {
  background-color: var(--color-primary-alpha-10);
  box-shadow: var(--shadow-btn);
  transform: translateY(-2px);
}
.btn-secondary:active {
  transform: translateY(0);
}

/* Ghost */
.btn-ghost {
  background-color: transparent;
  color: var(--color-text-muted);
  border-color: transparent;
}
.btn-ghost:hover {
  background-color: var(--color-surface-hover);
  color: var(--color-text);
}
.btn-ghost:active {
  background-color: var(--color-primary-alpha-10);
}

/* Accent */
.btn-accent {
  background-color: var(--color-accent);
  color: var(--color-on-primary);
  border-color: var(--color-accent);
  box-shadow: var(--shadow-btn);
}
.btn-accent:hover {
  background-color: var(--color-accent-hover);
  border-color: var(--color-accent-hover);
  box-shadow: var(--shadow-btn-hover);
  transform: translateY(-2px);
}
.btn-accent:active {
  transform: translateY(0);
}

/* Danger */
.btn-danger {
  background-color: var(--color-error);
  color: #fff;
  border-color: var(--color-error);
}
.btn-danger:hover {
  filter: brightness(1.1);
  transform: translateY(-2px);
}
.btn-danger:active {
  transform: translateY(0);
}

/* Sizes */
.btn-xs {
  padding: var(--space-2xs) var(--space-sm);
  font-size: var(--text-xs);
  border-radius: var(--radius-sm);
}
.btn-sm {
  padding: var(--space-xs) var(--space-md);
  font-size: var(--text-xs);
}
.btn-lg {
  padding: var(--space-md) var(--space-xl);
  font-size: var(--text-base);
}
.btn-xl {
  padding: var(--space-md) var(--space-2xl);
  font-size: var(--text-lg);
}

/* Shapes */
.btn-icon {
  padding: var(--space-sm);
  border-radius: var(--radius-full);
  aspect-ratio: 1;
}
.btn-icon.btn-sm {
  padding: var(--space-xs);
}
.btn-icon.btn-lg {
  padding: var(--space-md);
}
.btn-pill {
  border-radius: var(--radius-full);
}
.btn-block {
  display: flex;
  width: 100%;
}

/* States */
.btn:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
  box-shadow: var(--focus-ring);
}
.btn:disabled,
.btn[aria-disabled="true"] {
  opacity: 0.5;
  cursor: not-allowed;
  pointer-events: none;
  transform: none;
  box-shadow: none;
}
.btn[aria-busy="true"] {
  position: relative;
  color: transparent;
  pointer-events: none;
}
.btn[aria-busy="true"]::after {
  content: "";
  position: absolute;
  width: 16px;
  height: 16px;
  border: 2px solid var(--color-on-primary);
  border-top-color: transparent;
  border-radius: var(--radius-full);
  animation: spin 0.6s linear infinite;
}

/* Button Group */
.btn-group {
  display: inline-flex;
  gap: 0;
}
.btn-group .btn {
  border-radius: 0;
}
.btn-group .btn:first-child {
  border-radius: var(--radius-btn) 0 0 var(--radius-btn);
}
.btn-group .btn:last-child {
  border-radius: 0 var(--radius-btn) var(--radius-btn) 0;
}
.btn-group .btn + .btn {
  border-left: 0;
}
```

---

### Cartes `.card` (`components/cards.css`)

```css
.card {
  display: flex;
  flex-direction: column;
  background-color: var(--color-surface);
  border: var(--border-width) solid var(--color-border-light);
  border-radius: var(--radius-card);
  overflow: hidden;
  transition:
    box-shadow var(--transition-base),
    transform var(--transition-base),
    border-color var(--transition-base),
    background-color var(--transition-theme);
}
.card-header {
  padding: var(--space-lg);
  border-bottom: var(--border-width) solid var(--color-border-light);
}
.card-body {
  padding: var(--space-lg);
  flex: 1;
}
.card-footer {
  padding: var(--space-md) var(--space-lg);
  border-top: var(--border-width) solid var(--color-border-light);
}
.card-img {
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
}
.card-img-top {
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  border-radius: var(--radius-card) var(--radius-card) 0 0;
}

/* Interactive */
.card-interactive {
  cursor: pointer;
  box-shadow: var(--shadow-card);
}
.card-interactive:hover {
  box-shadow: var(--shadow-card-hover);
  transform: translateY(-4px);
  border-color: var(--color-primary-alpha-25);
}
.card-interactive:active {
  transform: translateY(-1px);
}
.card-interactive:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
  box-shadow: var(--focus-ring);
}

/* Variants */
.card-elevated {
  background-color: var(--color-bg-elevated);
  box-shadow: var(--shadow-md);
}
.card-elevated:hover {
  box-shadow: var(--shadow-lg);
}
.card-outlined {
  background-color: transparent;
  border: var(--border-thick) solid var(--color-border);
}
.card-outlined:hover {
  border-color: var(--color-primary);
}
.card-featured {
  border-color: var(--color-primary-alpha-35);
  box-shadow: var(--shadow-glow);
}
.card-featured:hover {
  box-shadow: var(--shadow-glow-strong);
}
.card-compact .card-header,
.card-compact .card-body,
.card-compact .card-footer {
  padding: var(--space-md);
}
.card-flat {
  border: none;
  box-shadow: none;
  background-color: var(--color-surface);
}
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: var(--space-lg);
}
@media (max-width: 576px) {
  .card-grid {
    grid-template-columns: 1fr;
  }
}
```

---

### Formulaires (`components/forms.css`)

```css
.form-group {
  display: flex;
  flex-direction: column;
  gap: var(--space-xs);
}
.form-group + .form-group {
  margin-top: var(--space-md);
}
.form-row > .form-group + .form-group {
  margin-top: 0;
}
.form-row {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: var(--space-md);
}

.form-label {
  font-size: var(--text-sm);
  font-weight: var(--weight-medium);
  color: var(--color-text);
}
.form-label-required::after {
  content: " *";
  color: var(--color-error);
}
.form-hint {
  font-size: var(--text-xs);
  color: var(--color-text-dim);
  margin-top: var(--space-2xs);
}

.form-input,
.form-textarea,
.form-select {
  width: 100%;
  padding: var(--space-sm) var(--space-md);
  font-family: var(--font-body);
  font-size: var(--text-sm);
  color: var(--color-text);
  background-color: var(--color-bg-elevated);
  border: var(--border-width) solid var(--color-border-light);
  border-radius: var(--radius-md);
  transition:
    border-color var(--transition-fast),
    box-shadow var(--transition-fast),
    background-color var(--transition-theme);
}
.form-input::placeholder,
.form-textarea::placeholder {
  color: var(--color-text-dim);
}
.form-input:hover,
.form-textarea:hover,
.form-select:hover {
  border-color: var(--color-primary-muted);
}
.form-input:focus,
.form-textarea:focus,
.form-select:focus {
  outline: none;
  border-color: var(--color-primary);
  box-shadow: var(--focus-ring);
}

.form-input-sm {
  padding: var(--space-xs) var(--space-sm);
  font-size: var(--text-xs);
}
.form-input-lg {
  padding: var(--space-md) var(--space-lg);
  font-size: var(--text-base);
}
.form-textarea {
  min-height: 120px;
  resize: vertical;
  line-height: var(--leading-normal);
}

.form-select {
  appearance: none;
  padding-right: var(--space-2xl);
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%2394a3b8' d='M6 8.825c-.2 0-.4-.075-.55-.225l-3-3a.75.75 0 1 1 1.1-1.05L6 7l2.45-2.45a.75.75 0 1 1 1.1 1.05l-3 3c-.15.15-.35.225-.55.225z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right var(--space-md) center;
  background-size: 12px;
  cursor: pointer;
}

/* Checkbox & Radio */
.form-check {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  cursor: pointer;
}
.form-check-input {
  appearance: none;
  width: 18px;
  height: 18px;
  border: var(--border-thick) solid var(--color-border-light);
  background-color: var(--color-bg-elevated);
  cursor: pointer;
  flex-shrink: 0;
  transition:
    border-color var(--transition-fast),
    background-color var(--transition-fast);
}
.form-check-input[type="checkbox"] {
  border-radius: var(--radius-xs);
}
.form-check-input[type="radio"] {
  border-radius: var(--radius-full);
}
.form-check-input:hover {
  border-color: var(--color-primary);
}
.form-check-input:checked {
  background-color: var(--color-primary);
  border-color: var(--color-primary);
}
.form-check-input[type="checkbox"]:checked {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23052e16' d='M10.28 2.28a.75.75 0 0 1 0 1.06l-5.5 5.5a.75.75 0 0 1-1.06 0l-2.5-2.5a.75.75 0 1 1 1.06-1.06L4.25 7.25l4.97-4.97a.75.75 0 0 1 1.06 0z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: center;
}
.form-check-input[type="radio"]:checked {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 8 8'%3E%3Ccircle cx='4' cy='4' r='3' fill='%23052e16'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: center;
}
.form-check-label {
  font-size: var(--text-sm);
  color: var(--color-text);
  cursor: pointer;
}

/* Switch / Toggle */
.form-switch {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  cursor: pointer;
}
.form-switch-input {
  appearance: none;
  width: 44px;
  height: 24px;
  background-color: var(--color-border-light);
  border-radius: var(--radius-full);
  cursor: pointer;
  position: relative;
  transition: background-color var(--transition-fast);
  flex-shrink: 0;
}
.form-switch-input::before {
  content: "";
  position: absolute;
  top: 2px;
  left: 2px;
  width: 20px;
  height: 20px;
  background-color: var(--color-text);
  border-radius: var(--radius-full);
  transition: transform var(--transition-base);
}
.form-switch-input:checked {
  background-color: var(--color-primary);
}
.form-switch-input:checked::before {
  transform: translateX(20px);
  background-color: var(--color-on-primary);
}

/* Validation */
.form-input.is-invalid,
.form-textarea.is-invalid,
.form-select.is-invalid {
  border-color: var(--color-error);
}
.form-input.is-invalid:focus,
.form-textarea.is-invalid:focus,
.form-select.is-invalid:focus {
  box-shadow: 0 0 0 2px rgba(239, 68, 68, 0.25);
}
.form-input.is-valid,
.form-textarea.is-valid,
.form-select.is-valid {
  border-color: var(--color-success);
}
.form-error {
  font-size: var(--text-xs);
  color: var(--color-error);
  margin-top: var(--space-2xs);
}
.form-success {
  font-size: var(--text-xs);
  color: var(--color-success);
  margin-top: var(--space-2xs);
}

/* Disabled */
.form-input:disabled,
.form-textarea:disabled,
.form-select:disabled,
.form-check-input:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

/* Input Group */
.input-group {
  display: flex;
  align-items: stretch;
}
.input-group .form-input {
  border-radius: 0;
  flex: 1;
}
.input-group .form-input:first-child {
  border-radius: var(--radius-md) 0 0 var(--radius-md);
}
.input-group .form-input:last-child {
  border-radius: 0 var(--radius-md) var(--radius-md) 0;
}
.input-group .btn {
  border-radius: 0;
}
.input-group .btn:last-child {
  border-radius: 0 var(--radius-md) var(--radius-md) 0;
}
.input-group .input-group-text {
  display: flex;
  align-items: center;
  padding: var(--space-sm) var(--space-md);
  font-size: var(--text-sm);
  color: var(--color-text-muted);
  background-color: var(--color-surface);
  border: var(--border-width) solid var(--color-border-light);
}
```

---

### Badges `.badge` (`components/badges.css`)

```css
.badge {
  display: inline-flex;
  align-items: center;
  gap: var(--space-xs);
  padding: var(--space-2xs) var(--space-sm);
  font-family: var(--font-body);
  font-size: var(--text-xs);
  font-weight: var(--weight-semibold);
  letter-spacing: var(--tracking-wide);
  line-height: var(--leading-snug);
  border-radius: var(--radius-full);
  white-space: nowrap;
  transition:
    background-color var(--transition-theme),
    color var(--transition-theme);
}
.badge-primary {
  background-color: var(--color-primary-alpha-15);
  color: var(--color-primary);
}
.badge-accent {
  background-color: rgba(255, 200, 69, 0.15);
  color: var(--color-accent);
}
.badge-success {
  background-color: rgba(34, 197, 94, 0.15);
  color: var(--color-success);
}
.badge-warning {
  background-color: rgba(245, 158, 11, 0.15);
  color: var(--color-warning);
}
.badge-error {
  background-color: rgba(239, 68, 68, 0.15);
  color: var(--color-error);
}
.badge-neutral {
  background-color: var(--color-surface-hover);
  color: var(--color-text-muted);
}

/* Solid */
.badge-solid {
  background-color: var(--color-primary);
  color: var(--color-on-primary);
}
.badge-solid.badge-error {
  background-color: var(--color-error);
  color: #fff;
}
.badge-solid.badge-success {
  background-color: var(--color-success);
  color: #fff;
}

/* Outlined */
.badge-outlined {
  background-color: transparent;
  border: var(--border-width) solid currentColor;
}

/* Sizes */
.badge-sm {
  padding: 1px var(--space-xs);
  font-size: 0.625rem;
}
.badge-lg {
  padding: var(--space-xs) var(--space-md);
  font-size: var(--text-sm);
}

/* Interactive */
.badge-interactive {
  cursor: pointer;
  transition:
    filter var(--transition-fast),
    transform var(--transition-fast);
}
.badge-interactive:hover {
  filter: brightness(1.1);
  transform: scale(1.05);
}

/* Dot */
.badge-dot {
  position: relative;
  padding-left: calc(var(--space-sm) + 10px);
}
.badge-dot::before {
  content: "";
  position: absolute;
  left: var(--space-sm);
  top: 50%;
  transform: translateY(-50%);
  width: 6px;
  height: 6px;
  border-radius: var(--radius-full);
  background-color: currentColor;
}

/* Status dot */
.status-dot {
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: var(--radius-full);
  background-color: var(--color-text-dim);
}
.status-dot-online {
  background-color: var(--color-success);
}
.status-dot-away {
  background-color: var(--color-warning);
}
.status-dot-offline {
  background-color: var(--color-error);
}

/* Counter */
.badge-counter {
  min-width: 20px;
  height: 20px;
  padding: 0 var(--space-xs);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 0.625rem;
  font-weight: var(--weight-bold);
  border-radius: var(--radius-full);
  background-color: var(--color-error);
  color: #fff;
}
```

---

### Navbar (`components/navbar.css`)

```css
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: var(--header-height);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-inline: var(--container-padding);
  background-color: var(--color-bg);
  border-bottom: var(--border-width) solid var(--color-border-light);
  z-index: var(--z-sticky);
  transition:
    background-color var(--transition-theme),
    border-color var(--transition-theme);
}
.navbar-sticky {
  position: sticky;
}
.navbar-transparent {
  background-color: transparent;
  border-bottom-color: transparent;
}
.navbar-transparent.navbar-scrolled {
  background-color: var(--color-bg);
  border-bottom-color: var(--color-border-light);
}
.navbar-blur {
  background-color: rgba(var(--color-bg), 0.85);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
}

.navbar-brand {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  font-family: var(--font-display);
  font-size: var(--text-lg);
  font-weight: var(--weight-bold);
  color: var(--color-primary);
  text-decoration: none;
  white-space: nowrap;
}
.navbar-brand img,
.navbar-brand svg {
  height: 32px;
  width: auto;
}

.navbar-nav {
  display: flex;
  align-items: center;
  gap: var(--space-xs);
  list-style: none;
  margin: 0;
  padding: 0;
}
.navbar-actions {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
}

.nav-link {
  display: inline-flex;
  align-items: center;
  gap: var(--space-xs);
  padding: var(--space-xs) var(--space-md);
  font-size: var(--text-sm);
  font-weight: var(--weight-medium);
  color: var(--color-text-muted);
  text-decoration: none;
  border-radius: var(--radius-sm);
  transition:
    color var(--transition-fast),
    background-color var(--transition-fast);
}
.nav-link:hover {
  color: var(--color-primary);
  background-color: var(--color-primary-alpha-10);
}
.nav-link.active,
.nav-link[aria-current="page"] {
  color: var(--color-primary);
  font-weight: var(--weight-semibold);
}

/* Mobile toggle */
.navbar-toggle {
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 36px;
  height: 36px;
  padding: var(--space-xs);
  background: transparent;
  border: none;
  cursor: pointer;
}
.navbar-toggle span {
  display: block;
  width: 100%;
  height: 2px;
  background-color: var(--color-text);
  border-radius: var(--radius-full);
  transition:
    transform var(--transition-base),
    opacity var(--transition-base);
}
.navbar-toggle[aria-expanded="true"] span:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}
.navbar-toggle[aria-expanded="true"] span:nth-child(2) {
  opacity: 0;
}
.navbar-toggle[aria-expanded="true"] span:nth-child(3) {
  transform: rotate(-45deg) translate(5px, -5px);
}

@media (max-width: 768px) {
  .navbar-toggle {
    display: flex;
  }
  .navbar-nav {
    display: none;
    position: absolute;
    top: var(--header-height);
    left: 0;
    right: 0;
    flex-direction: column;
    padding: var(--space-md);
    background-color: var(--color-bg-elevated);
    border-bottom: var(--border-width) solid var(--color-border-light);
    box-shadow: var(--shadow-lg);
    z-index: var(--z-dropdown);
  }
  .navbar-nav.open,
  .navbar-nav[data-open="true"] {
    display: flex;
    animation: slideDown 0.2s ease forwards;
  }
  .nav-link {
    padding: var(--space-sm) var(--space-md);
    width: 100%;
    border-radius: var(--radius-md);
  }
}
.navbar + main,
.navbar + .main-content {
  padding-top: var(--header-height);
}
```

---

### Modals (`components/modal.css`)

```css
.modal-backdrop {
  position: fixed;
  inset: 0;
  background-color: var(--overlay-bg);
  z-index: var(--z-modal-backdrop);
  opacity: 0;
  visibility: hidden;
  transition:
    opacity var(--transition-base),
    visibility var(--transition-base);
}
.modal-backdrop.open,
.modal-backdrop[data-open="true"] {
  opacity: 1;
  visibility: visible;
}

.modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0.95);
  width: 90%;
  max-width: 540px;
  max-height: 85vh;
  display: flex;
  flex-direction: column;
  background-color: var(--color-bg-elevated);
  border: var(--border-width) solid var(--color-border-light);
  border-radius: var(--radius-card);
  box-shadow: var(--shadow-xl);
  z-index: var(--z-modal);
  opacity: 0;
  visibility: hidden;
  transition:
    opacity var(--transition-base),
    visibility var(--transition-base),
    transform var(--transition-base);
}
.modal.open,
.modal[data-open="true"] {
  opacity: 1;
  visibility: visible;
  transform: translate(-50%, -50%) scale(1);
}

/* Sizes */
.modal-sm {
  max-width: 400px;
}
.modal-lg {
  max-width: 720px;
}
.modal-xl {
  max-width: 960px;
}
.modal-fullscreen {
  width: 100%;
  max-width: 100%;
  max-height: 100%;
  height: 100%;
  border-radius: 0;
}

.modal-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--space-lg);
  border-bottom: var(--border-width) solid var(--color-border-light);
  flex-shrink: 0;
}
.modal-title {
  font-family: var(--font-display);
  font-size: var(--text-lg);
  font-weight: var(--weight-bold);
  color: var(--color-text);
  margin: 0;
}
.modal-close {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  padding: 0;
  font-size: var(--text-lg);
  color: var(--color-text-muted);
  background: transparent;
  border: none;
  border-radius: var(--radius-sm);
  cursor: pointer;
  transition:
    color var(--transition-fast),
    background-color var(--transition-fast);
}
.modal-close:hover {
  color: var(--color-text);
  background-color: var(--color-surface-hover);
}
.modal-body {
  padding: var(--space-lg);
  overflow-y: auto;
  flex: 1;
}
.modal-footer {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: var(--space-sm);
  padding: var(--space-md) var(--space-lg);
  border-top: var(--border-width) solid var(--color-border-light);
  flex-shrink: 0;
}
body.modal-open {
  overflow: hidden;
}

@media (max-width: 576px) {
  .modal {
    width: 95%;
    max-height: 90vh;
  }
  .modal-header,
  .modal-body,
  .modal-footer {
    padding: var(--space-md);
  }
}
```

---

### Tables (`components/tables.css`)

```css
.table-wrapper {
  width: 100%;
  overflow-x: auto;
  border-radius: var(--radius-md);
  border: var(--border-width) solid var(--color-border-light);
}
.table {
  width: 100%;
  border-collapse: collapse;
  font-size: var(--text-sm);
}
.table th,
.table td {
  padding: var(--space-sm) var(--space-md);
  text-align: left;
  border-bottom: var(--border-width) solid var(--color-border-light);
}
.table th {
  font-weight: var(--weight-semibold);
  font-size: var(--text-xs);
  text-transform: uppercase;
  letter-spacing: var(--tracking-wider);
  color: var(--color-text-muted);
  background-color: var(--color-surface);
}
.table td {
  color: var(--color-text);
}
.table tbody tr {
  transition: background-color var(--transition-fast);
}
.table tbody tr:hover {
  background-color: var(--color-surface-hover);
}
.table tbody tr:last-child td {
  border-bottom: none;
}

/* Variants */
.table-striped tbody tr:nth-child(even) {
  background-color: var(--color-surface);
}
.table-compact th,
.table-compact td {
  padding: var(--space-xs) var(--space-sm);
}
.table-borderless,
.table-borderless th,
.table-borderless td {
  border: none;
}

/* Sortable */
.table-sortable th {
  cursor: pointer;
}
.table-sortable th:hover {
  color: var(--color-primary);
}
.table-sort-icon {
  display: inline-block;
  margin-left: var(--space-xs);
  font-size: var(--text-xs);
  opacity: 0.4;
}
th[aria-sort] .table-sort-icon {
  opacity: 1;
  color: var(--color-primary);
}

/* Responsive card-layout */
@media (max-width: 576px) {
  .table-responsive {
    display: block;
  }
  .table-responsive thead {
    display: none;
  }
  .table-responsive tbody,
  .table-responsive tr,
  .table-responsive td {
    display: block;
  }
  .table-responsive tr {
    padding: var(--space-sm) 0;
    border-bottom: var(--border-width) solid var(--color-border-light);
  }
  .table-responsive td {
    padding: var(--space-2xs) var(--space-md);
    border-bottom: none;
    text-align: right;
  }
  .table-responsive td::before {
    content: attr(data-label);
    float: left;
    font-weight: var(--weight-semibold);
    color: var(--color-text-muted);
    text-transform: uppercase;
    font-size: var(--text-xs);
    letter-spacing: var(--tracking-wider);
  }
}
```

---

### Notifications — Toasts & Alerts (`components/notifications.css`)

```css
.toast-container {
  position: fixed;
  bottom: var(--space-lg);
  right: var(--space-lg);
  display: flex;
  flex-direction: column-reverse;
  gap: var(--space-sm);
  z-index: var(--z-notification);
  pointer-events: none;
}
.toast-container-top {
  bottom: auto;
  top: calc(var(--header-height) + var(--space-md));
}

.toast {
  display: flex;
  align-items: flex-start;
  gap: var(--space-sm);
  min-width: 280px;
  max-width: 420px;
  padding: var(--space-md);
  background-color: var(--color-bg-elevated);
  border: var(--border-width) solid var(--color-border-light);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-lg);
  pointer-events: all;
  animation: slideIn 0.3s ease forwards;
  transition:
    opacity var(--transition-base),
    transform var(--transition-base);
}
.toast-exiting {
  opacity: 0;
  transform: translateX(100%);
}
.toast-icon {
  flex-shrink: 0;
  width: 20px;
  height: 20px;
  margin-top: 1px;
}
.toast-content {
  flex: 1;
  min-width: 0;
}
.toast-title {
  font-size: var(--text-sm);
  font-weight: var(--weight-semibold);
  color: var(--color-text);
  margin-bottom: var(--space-2xs);
}
.toast-message {
  font-size: var(--text-xs);
  color: var(--color-text-muted);
  line-height: var(--leading-normal);
}
.toast-close {
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  padding: 0;
  color: var(--color-text-dim);
  background: transparent;
  border: none;
  border-radius: var(--radius-xs);
  cursor: pointer;
  transition:
    color var(--transition-fast),
    background-color var(--transition-fast);
}
.toast-close:hover {
  color: var(--color-text);
  background-color: var(--color-surface-hover);
}

/* Variants */
.toast-success {
  border-left: 3px solid var(--color-success);
}
.toast-success .toast-icon {
  color: var(--color-success);
}
.toast-warning {
  border-left: 3px solid var(--color-warning);
}
.toast-warning .toast-icon {
  color: var(--color-warning);
}
.toast-error {
  border-left: 3px solid var(--color-error);
}
.toast-error .toast-icon {
  color: var(--color-error);
}
.toast-info {
  border-left: 3px solid var(--color-primary);
}
.toast-info .toast-icon {
  color: var(--color-primary);
}

/* Inline Alert */
.alert {
  display: flex;
  align-items: flex-start;
  gap: var(--space-sm);
  padding: var(--space-md);
  border-radius: var(--radius-md);
  border: var(--border-width) solid;
  font-size: var(--text-sm);
  line-height: var(--leading-normal);
}
.alert-success {
  background-color: rgba(34, 197, 94, 0.1);
  border-color: rgba(34, 197, 94, 0.3);
  color: var(--color-success);
}
.alert-warning {
  background-color: rgba(245, 158, 11, 0.1);
  border-color: rgba(245, 158, 11, 0.3);
  color: var(--color-warning);
}
.alert-error {
  background-color: rgba(239, 68, 68, 0.1);
  border-color: rgba(239, 68, 68, 0.3);
  color: var(--color-error);
}
.alert-info {
  background-color: var(--color-primary-alpha-10);
  border-color: var(--color-primary-alpha-25);
  color: var(--color-primary);
}
.alert-title {
  font-weight: var(--weight-semibold);
  margin-bottom: var(--space-2xs);
}

@media (max-width: 576px) {
  .toast-container {
    left: var(--space-md);
    right: var(--space-md);
    bottom: var(--space-md);
  }
  .toast {
    min-width: auto;
    max-width: none;
  }
}
```

---

### Theme Toggle (`components/theme-toggle.css`)

```css
.theme-toggle {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  padding: 0;
  color: var(--color-text-muted);
  background-color: transparent;
  border: var(--border-width) solid var(--color-border-light);
  border-radius: var(--radius-full);
  cursor: pointer;
  z-index: var(--z-theme-toggle);
  transition:
    color var(--transition-fast),
    background-color var(--transition-fast),
    border-color var(--transition-fast),
    transform var(--transition-fast);
}
.theme-toggle:hover {
  color: var(--color-primary);
  border-color: var(--color-primary);
  background-color: var(--color-primary-alpha-10);
  transform: rotate(15deg);
}
.theme-toggle:active {
  transform: rotate(30deg) scale(0.95);
}
.theme-toggle svg {
  width: 20px;
  height: 20px;
  transition: transform var(--transition-base);
}

/* Icon swap */
.theme-toggle .icon-sun,
.theme-toggle .icon-moon {
  position: absolute;
  transition:
    opacity var(--transition-fast),
    transform var(--transition-base);
}
:root .theme-toggle .icon-sun,
[data-theme="dark"] .theme-toggle .icon-sun {
  opacity: 1;
  transform: rotate(0deg) scale(1);
}
:root .theme-toggle .icon-moon,
[data-theme="dark"] .theme-toggle .icon-moon {
  opacity: 0;
  transform: rotate(-90deg) scale(0.5);
}
[data-theme="light"] .theme-toggle .icon-sun {
  opacity: 0;
  transform: rotate(90deg) scale(0.5);
}
[data-theme="light"] .theme-toggle .icon-moon {
  opacity: 1;
  transform: rotate(0deg) scale(1);
}

/* Variants */
.theme-toggle-pill {
  width: auto;
  padding: var(--space-xs) var(--space-md);
  border-radius: var(--radius-full);
  gap: var(--space-xs);
  font-size: var(--text-xs);
  font-weight: var(--weight-medium);
}
.theme-toggle-fixed {
  position: fixed;
  top: var(--space-md);
  right: var(--space-md);
}
.navbar ~ .theme-toggle-fixed {
  top: calc(var(--header-height) + var(--space-md));
}
```

---

### Tooltips (`components/tooltips.css`)

```css
[data-tooltip] {
  position: relative;
  cursor: help;
}
[data-tooltip]::after {
  content: attr(data-tooltip);
  position: absolute;
  bottom: calc(100% + 8px);
  left: 50%;
  transform: translateX(-50%) translateY(4px);
  padding: var(--space-xs) var(--space-sm);
  font-family: var(--font-body);
  font-size: var(--text-xs);
  font-weight: var(--weight-medium);
  line-height: var(--leading-snug);
  white-space: nowrap;
  color: var(--color-on-primary);
  background-color: var(--color-primary);
  border-radius: var(--radius-sm);
  box-shadow: var(--shadow-md);
  z-index: var(--z-tooltip);
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transition:
    opacity var(--transition-fast),
    visibility var(--transition-fast),
    transform var(--transition-fast);
}
[data-tooltip]:hover::after,
[data-tooltip]:focus-visible::after {
  opacity: 1;
  visibility: visible;
  transform: translateX(-50%) translateY(0);
}

/* Positioning */
[data-tooltip-position="bottom"]::after {
  bottom: auto;
  top: calc(100% + 8px);
  transform: translateX(-50%) translateY(-4px);
}
[data-tooltip-position="bottom"]:hover::after {
  transform: translateX(-50%) translateY(0);
}
[data-tooltip-position="left"]::after {
  bottom: auto;
  top: 50%;
  left: auto;
  right: calc(100% + 8px);
  transform: translateY(-50%) translateX(4px);
}
[data-tooltip-position="left"]:hover::after {
  transform: translateY(-50%) translateX(0);
}
[data-tooltip-position="right"]::after {
  bottom: auto;
  top: 50%;
  left: calc(100% + 8px);
  transform: translateY(-50%) translateX(-4px);
}
[data-tooltip-position="right"]:hover::after {
  transform: translateY(-50%) translateX(0);
}

/* JS tooltip */
.tooltip {
  position: absolute;
  padding: var(--space-xs) var(--space-sm);
  font-size: var(--text-xs);
  font-weight: var(--weight-medium);
  color: var(--color-on-primary);
  background-color: var(--color-primary);
  border-radius: var(--radius-sm);
  box-shadow: var(--shadow-md);
  z-index: var(--z-tooltip);
  pointer-events: none;
  animation: fadeIn 0.15s ease forwards;
}
.tooltip-dark {
  background-color: var(--color-surface);
  color: var(--color-text);
  border: var(--border-width) solid var(--color-border-light);
}
```

---

### Hero (`components/hero.css`)

```css
.hero {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 70vh;
  padding: var(--space-3xl) var(--container-padding);
  text-align: center;
  overflow: hidden;
}
.hero-full {
  min-height: 100vh;
}
.hero-short {
  min-height: 40vh;
}

.hero-content {
  position: relative;
  z-index: 2;
  max-width: var(--container-narrow);
  margin-inline: auto;
}
.hero-title {
  font-family: var(--font-display);
  font-size: clamp(var(--text-3xl), 6vw, var(--text-5xl));
  font-weight: var(--weight-black);
  line-height: var(--leading-tight);
  letter-spacing: var(--tracking-tight);
  color: var(--color-text);
  margin-bottom: var(--space-md);
}
.hero-title .highlight,
.hero-title .text-primary {
  color: var(--color-primary);
}
.hero-subtitle {
  font-size: clamp(var(--text-base), 2vw, var(--text-xl));
  color: var(--color-text-muted);
  line-height: var(--leading-relaxed);
  max-width: 640px;
  margin-inline: auto;
  margin-bottom: var(--space-xl);
}
.hero-actions {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-md);
  flex-wrap: wrap;
}

.hero-blob {
  position: absolute;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    var(--color-primary-alpha-15),
    transparent 70%
  );
  filter: blur(60px);
  pointer-events: none;
  z-index: 0;
}
.hero-blob-1 {
  top: -100px;
  right: -100px;
}
.hero-blob-2 {
  bottom: -100px;
  left: -100px;
  opacity: 0.6;
}

.hero-visual {
  position: relative;
  z-index: 2;
  max-width: 300px;
  margin-inline: auto;
  margin-top: var(--space-xl);
}
.hero-visual img {
  width: 100%;
  height: auto;
  animation: float 5s ease-in-out infinite;
}

/* Split layout */
.hero-split {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-2xl);
  text-align: left;
  align-items: center;
}
.hero-split .hero-content {
  max-width: none;
}
.hero-split .hero-visual {
  max-width: 100%;
  margin-top: 0;
}
@media (max-width: 768px) {
  .hero-split {
    grid-template-columns: 1fr;
    text-align: center;
  }
  .hero-split .hero-visual {
    order: -1;
    max-width: 250px;
    margin-inline: auto;
  }
}

/* Stats */
.hero-stats {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-2xl);
  margin-top: var(--space-2xl);
  flex-wrap: wrap;
}
.hero-stat {
  text-align: center;
}
.hero-stat-value {
  font-family: var(--font-display);
  font-size: var(--text-3xl);
  font-weight: var(--weight-bold);
  color: var(--color-primary);
}
.hero-stat-label {
  font-size: var(--text-sm);
  color: var(--color-text-muted);
  margin-top: var(--space-2xs);
}
```

---

### Sections & Features (`components/sections.css`)

```css
.section {
  padding: var(--space-3xl) 0;
}
.section-sm {
  padding: var(--space-2xl) 0;
}
.section-lg {
  padding: var(--space-5xl) 0;
}

.section-header {
  text-align: center;
  max-width: var(--container-narrow);
  margin-inline: auto;
  margin-bottom: var(--space-2xl);
}
.section-label {
  display: inline-block;
  font-size: var(--text-xs);
  font-weight: var(--weight-bold);
  text-transform: uppercase;
  letter-spacing: var(--tracking-wider);
  color: var(--color-primary);
  margin-bottom: var(--space-sm);
}
.section-title {
  font-family: var(--font-display);
  font-size: clamp(var(--text-2xl), 4vw, var(--text-4xl));
  font-weight: var(--weight-bold);
  line-height: var(--leading-tight);
  color: var(--color-text);
  margin-bottom: var(--space-md);
}
.section-description {
  font-size: var(--text-lg);
  color: var(--color-text-muted);
  line-height: var(--leading-relaxed);
  max-width: 640px;
  margin-inline: auto;
}

/* Backgrounds */
.section-alt {
  background-color: var(--color-bg-elevated);
}
.section-surface {
  background-color: var(--color-surface);
}
.section-gradient {
  background: linear-gradient(
    180deg,
    transparent,
    var(--color-primary-alpha-10) 50%,
    transparent
  );
}

/* Feature grid */
.feature-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: var(--space-xl);
}
.feature-item {
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
  padding: var(--space-xl);
  background-color: var(--color-surface);
  border: var(--border-width) solid var(--color-border-light);
  border-radius: var(--radius-card);
  transition:
    border-color var(--transition-base),
    box-shadow var(--transition-base),
    transform var(--transition-base);
}
.feature-item:hover {
  border-color: var(--color-primary-alpha-25);
  box-shadow: var(--shadow-glow);
  transform: translateY(-4px);
}
.feature-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  background-color: var(--color-primary-alpha-15);
  color: var(--color-primary);
  border-radius: var(--radius-md);
  font-size: var(--text-xl);
}
.feature-title {
  font-family: var(--font-display);
  font-size: var(--text-lg);
  font-weight: var(--weight-bold);
  color: var(--color-text);
}
.feature-description {
  font-size: var(--text-sm);
  color: var(--color-text-muted);
  line-height: var(--leading-relaxed);
}

/* Dividers */
.divider {
  border: none;
  border-top: var(--border-width) solid var(--color-border-light);
  margin: var(--space-xl) 0;
}
.divider-primary {
  border-top-color: var(--color-primary-alpha-25);
}
.divider-sm {
  margin: var(--space-md) 0;
}
.divider-lg {
  margin: var(--space-3xl) 0;
}
```

---

### Footer (`components/footer.css`)

```css
.footer {
  padding: var(--space-2xl) 0 var(--space-lg);
  background-color: var(--color-bg);
  border-top: var(--border-width) solid var(--color-border-light);
  transition:
    background-color var(--transition-theme),
    border-color var(--transition-theme);
}
.footer-inner {
  width: 90%;
  max-width: var(--container-max);
  margin-inline: auto;
  padding-inline: var(--container-padding);
}
.footer-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: var(--space-xl);
  margin-bottom: var(--space-xl);
}
.footer-col h3,
.footer-col h4 {
  font-family: var(--font-display);
  font-size: var(--text-sm);
  font-weight: var(--weight-bold);
  text-transform: uppercase;
  letter-spacing: var(--tracking-wider);
  color: var(--color-primary);
  margin-bottom: var(--space-md);
}
.footer-col ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
.footer-col li + li {
  margin-top: var(--space-xs);
}
.footer-col a {
  font-size: var(--text-sm);
  color: var(--color-text-muted);
  text-decoration: none;
  transition: color var(--transition-fast);
}
.footer-col a:hover {
  color: var(--color-primary);
}

.footer-bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: var(--space-md);
  padding-top: var(--space-lg);
  border-top: var(--border-width) solid var(--color-border-light);
}
.footer-copy {
  font-size: var(--text-xs);
  color: var(--color-text-dim);
}
.footer-social {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
}
.footer-social a {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  color: var(--color-text-muted);
  border: var(--border-width) solid var(--color-border-light);
  border-radius: var(--radius-full);
  text-decoration: none;
  transition:
    color var(--transition-fast),
    border-color var(--transition-fast),
    background-color var(--transition-fast);
}
.footer-social a:hover {
  color: var(--color-primary);
  border-color: var(--color-primary);
  background-color: var(--color-primary-alpha-10);
}
.footer-social svg {
  width: 18px;
  height: 18px;
}

@media (max-width: 576px) {
  .footer-grid {
    grid-template-columns: 1fr;
  }
  .footer-bottom {
    flex-direction: column;
    text-align: center;
  }
}
```

---

### Grid System (`components/grid.css`)

```css
.grid-responsive {
  display: grid;
  gap: var(--space-lg);
}
.grid-cols-1 {
  grid-template-columns: 1fr;
}
.grid-cols-2 {
  grid-template-columns: repeat(2, 1fr);
}
.grid-cols-3 {
  grid-template-columns: repeat(3, 1fr);
}
.grid-cols-4 {
  grid-template-columns: repeat(4, 1fr);
}
.grid-cols-5 {
  grid-template-columns: repeat(5, 1fr);
}
.grid-cols-6 {
  grid-template-columns: repeat(6, 1fr);
}
.grid-auto-sm {
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
}
.grid-auto-md {
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
}
.grid-auto-lg {
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
}
.grid-sidebar {
  grid-template-columns: 260px 1fr;
}
.grid-sidebar-right {
  grid-template-columns: 1fr 260px;
}
.grid-content {
  grid-template-columns: 1fr minmax(0, var(--container-max)) 1fr;
}

/* Placement */
.col-span-2 {
  grid-column: span 2;
}
.col-span-3 {
  grid-column: span 3;
}
.col-span-full {
  grid-column: 1 / -1;
}
.row-span-2 {
  grid-row: span 2;
}
.grid-center {
  place-items: center;
}
.grid-start {
  align-items: start;
}
.grid-stretch {
  align-items: stretch;
}

/* Responsive */
@media (max-width: 1200px) {
  .grid-cols-5,
  .grid-cols-6 {
    grid-template-columns: repeat(4, 1fr);
  }
}
@media (max-width: 900px) {
  .grid-cols-3,
  .grid-cols-4,
  .grid-cols-5 {
    grid-template-columns: repeat(2, 1fr);
  }
  .grid-cols-6 {
    grid-template-columns: repeat(3, 1fr);
  }
  .grid-sidebar,
  .grid-sidebar-right {
    grid-template-columns: 1fr;
  }
}
@media (max-width: 576px) {
  .grid-cols-2,
  .grid-cols-3,
  .grid-cols-4,
  .grid-cols-5 {
    grid-template-columns: 1fr;
  }
  .grid-cols-6 {
    grid-template-columns: repeat(2, 1fr);
  }
}
```

---

### Dropdown (`components/dropdown.css`)

```css
.dropdown {
  position: relative;
  display: inline-block;
}
.dropdown-menu {
  position: absolute;
  top: calc(100% + var(--space-xs));
  left: 0;
  min-width: 200px;
  max-height: 320px;
  overflow-y: auto;
  padding: var(--space-xs) 0;
  background-color: var(--color-bg-elevated);
  border: var(--border-width) solid var(--color-border-light);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-lg);
  z-index: var(--z-dropdown);
  opacity: 0;
  visibility: hidden;
  transform: translateY(-8px);
  transition:
    opacity var(--transition-fast),
    visibility var(--transition-fast),
    transform var(--transition-fast);
}
.dropdown-menu.open,
.dropdown-menu[data-open="true"],
.dropdown.open .dropdown-menu {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}
.dropdown-menu-right {
  left: auto;
  right: 0;
}
.dropdown-menu-center {
  left: 50%;
  transform: translateX(-50%) translateY(-8px);
}
.dropdown-menu-center.open {
  transform: translateX(-50%) translateY(0);
}
.dropdown-up .dropdown-menu {
  top: auto;
  bottom: calc(100% + var(--space-xs));
  transform: translateY(8px);
}
.dropdown-up .dropdown-menu.open {
  transform: translateY(0);
}

.dropdown-item {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  width: 100%;
  padding: var(--space-sm) var(--space-md);
  font-size: var(--text-sm);
  color: var(--color-text);
  background: none;
  border: none;
  text-align: left;
  text-decoration: none;
  cursor: pointer;
  transition:
    background-color var(--transition-fast),
    color var(--transition-fast);
}
.dropdown-item:hover {
  background-color: var(--color-primary-alpha-10);
  color: var(--color-primary);
}
.dropdown-item.active {
  background-color: var(--color-primary-alpha-15);
  color: var(--color-primary);
  font-weight: var(--weight-semibold);
}
.dropdown-item:disabled,
.dropdown-item[aria-disabled="true"] {
  opacity: 0.5;
  cursor: not-allowed;
  pointer-events: none;
}
.dropdown-item svg,
.dropdown-item .dropdown-icon {
  width: 16px;
  height: 16px;
  flex-shrink: 0;
  color: var(--color-text-muted);
}
.dropdown-item:hover svg {
  color: var(--color-primary);
}

.dropdown-divider {
  height: 0;
  margin: var(--space-xs) 0;
  border: none;
  border-top: var(--border-width) solid var(--color-border-light);
}
.dropdown-header {
  padding: var(--space-sm) var(--space-md);
  font-size: var(--text-xs);
  font-weight: var(--weight-bold);
  text-transform: uppercase;
  letter-spacing: var(--tracking-wider);
  color: var(--color-text-dim);
}
```

---

### Sidebar (`components/sidebar.css`)

```css
.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  width: 260px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: var(--color-bg-elevated);
  border-right: var(--border-width) solid var(--color-border-light);
  z-index: var(--z-sticky);
  overflow-y: auto;
  transition:
    transform var(--transition-base),
    background-color var(--transition-theme);
}
.sidebar-right {
  left: auto;
  right: 0;
  border-right: none;
  border-left: var(--border-width) solid var(--color-border-light);
}
.sidebar-collapsed {
  width: 60px;
}
.sidebar-collapsed .sidebar-label,
.sidebar-collapsed .sidebar-section-title {
  display: none;
}

.sidebar-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--space-md) var(--space-lg);
  height: var(--header-height);
  border-bottom: var(--border-width) solid var(--color-border-light);
  flex-shrink: 0;
}
.sidebar-brand {
  font-family: var(--font-display);
  font-size: var(--text-lg);
  font-weight: var(--weight-bold);
  color: var(--color-primary);
  text-decoration: none;
}
.sidebar-body {
  flex: 1;
  padding: var(--space-md) var(--space-sm);
  overflow-y: auto;
}
.sidebar-footer {
  padding: var(--space-md) var(--space-lg);
  border-top: var(--border-width) solid var(--color-border-light);
  flex-shrink: 0;
}
.sidebar-nav {
  list-style: none;
  padding: 0;
  margin: 0;
}
.sidebar-section-title {
  padding: var(--space-md) var(--space-md) var(--space-xs);
  font-size: var(--text-xs);
  font-weight: var(--weight-bold);
  text-transform: uppercase;
  letter-spacing: var(--tracking-wider);
  color: var(--color-text-dim);
}
.sidebar-link {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  padding: var(--space-sm) var(--space-md);
  font-size: var(--text-sm);
  font-weight: var(--weight-medium);
  color: var(--color-text-muted);
  text-decoration: none;
  border-radius: var(--radius-sm);
  transition:
    color var(--transition-fast),
    background-color var(--transition-fast);
}
.sidebar-link:hover {
  color: var(--color-primary);
  background-color: var(--color-primary-alpha-10);
}
.sidebar-link.active {
  color: var(--color-primary);
  background-color: var(--color-primary-alpha-15);
  font-weight: var(--weight-semibold);
}
.sidebar-link svg,
.sidebar-link .sidebar-icon {
  width: 18px;
  height: 18px;
  flex-shrink: 0;
}
.sidebar-label {
  flex: 1;
}
.sidebar-badge {
  font-size: var(--text-xs);
  font-weight: var(--weight-bold);
  padding: 1px var(--space-xs);
  border-radius: var(--radius-full);
  background-color: var(--color-primary-alpha-15);
  color: var(--color-primary);
}

.with-sidebar {
  margin-left: 260px;
}
.with-sidebar-collapsed {
  margin-left: 60px;
}

@media (max-width: 768px) {
  .sidebar {
    transform: translateX(-100%);
  }
  .sidebar-right {
    transform: translateX(100%);
  }
  .sidebar.open,
  .sidebar[data-open="true"] {
    transform: translateX(0);
  }
  .sidebar-overlay {
    position: fixed;
    inset: 0;
    background-color: var(--overlay-bg);
    z-index: calc(var(--z-sticky) - 1);
    opacity: 0;
    visibility: hidden;
    transition:
      opacity var(--transition-base),
      visibility var(--transition-base);
  }
  .sidebar-overlay.open {
    opacity: 1;
    visibility: visible;
  }
  .with-sidebar,
  .with-sidebar-collapsed {
    margin-left: 0;
  }
}
```

---

### Tabs (`components/tabs.css`)

```css
.tabs {
  display: flex;
  align-items: center;
  gap: 0;
  border-bottom: var(--border-width) solid var(--color-border-light);
  overflow-x: auto;
  scrollbar-width: none;
}
.tabs::-webkit-scrollbar {
  display: none;
}
.tab {
  display: inline-flex;
  align-items: center;
  gap: var(--space-xs);
  padding: var(--space-sm) var(--space-lg);
  font-family: var(--font-body);
  font-size: var(--text-sm);
  font-weight: var(--weight-medium);
  color: var(--color-text-muted);
  background: none;
  border: none;
  border-bottom: 2px solid transparent;
  cursor: pointer;
  white-space: nowrap;
  transition:
    color var(--transition-fast),
    border-color var(--transition-fast);
  margin-bottom: -1px;
}
.tab:hover {
  color: var(--color-text);
}
.tab.active,
.tab[aria-selected="true"] {
  color: var(--color-primary);
  border-bottom-color: var(--color-primary);
  font-weight: var(--weight-semibold);
}
.tab:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}
.tab svg {
  width: 16px;
  height: 16px;
}

.tab-panel {
  display: none;
  padding: var(--space-lg) 0;
}
.tab-panel.active,
.tab-panel[data-active="true"] {
  display: block;
  animation: fadeIn 0.2s ease forwards;
}

/* Pill variant */
.tabs-pill {
  border-bottom: none;
  gap: var(--space-xs);
  padding: var(--space-xs);
  background-color: var(--color-surface);
  border-radius: var(--radius-btn);
}
.tabs-pill .tab {
  border-bottom: none;
  border-radius: var(--radius-btn);
  margin-bottom: 0;
  padding: var(--space-xs) var(--space-md);
}
.tabs-pill .tab.active {
  background-color: var(--color-primary);
  color: var(--color-on-primary);
}

/* Vertical */
.tabs-vertical {
  flex-direction: column;
  border-bottom: none;
  border-right: var(--border-width) solid var(--color-border-light);
  min-width: 180px;
}
.tabs-vertical .tab {
  border-bottom: none;
  border-right: 2px solid transparent;
  margin-bottom: 0;
  margin-right: -1px;
  text-align: left;
  justify-content: flex-start;
}
.tabs-vertical .tab.active {
  border-right-color: var(--color-primary);
}
.tabs-layout {
  display: flex;
  gap: var(--space-lg);
}
.tabs-layout .tab-panel {
  flex: 1;
}
```

---

### Avatar (`components/avatar.css`)

```css
.avatar {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: var(--radius-full);
  overflow: hidden;
  background-color: var(--color-primary-alpha-15);
  color: var(--color-primary);
  font-family: var(--font-display);
  font-weight: var(--weight-bold);
  font-size: var(--text-sm);
  flex-shrink: 0;
  position: relative;
}
.avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.avatar-xs {
  width: 24px;
  height: 24px;
  font-size: var(--text-xs);
}
.avatar-sm {
  width: 32px;
  height: 32px;
  font-size: var(--text-xs);
}
.avatar-lg {
  width: 56px;
  height: 56px;
  font-size: var(--text-lg);
}
.avatar-xl {
  width: 80px;
  height: 80px;
  font-size: var(--text-2xl);
}
.avatar-2xl {
  width: 120px;
  height: 120px;
  font-size: var(--text-4xl);
}
.avatar-square {
  border-radius: var(--radius-md);
}
.avatar-rounded {
  border-radius: var(--radius-card);
}
.avatar-bordered {
  border: var(--border-extra) solid var(--color-primary);
}
.avatar-ring {
  box-shadow:
    0 0 0 3px var(--color-bg),
    0 0 0 5px var(--color-primary);
}

/* Status */
.avatar-status::after {
  content: "";
  position: absolute;
  bottom: 0;
  right: 0;
  width: 12px;
  height: 12px;
  border-radius: var(--radius-full);
  border: 2px solid var(--color-bg);
  background-color: var(--color-text-dim);
}
.avatar-status.online::after {
  background-color: var(--color-success);
}
.avatar-status.away::after {
  background-color: var(--color-warning);
}
.avatar-status.busy::after {
  background-color: var(--color-error);
}
.avatar-xs.avatar-status::after {
  width: 8px;
  height: 8px;
}
.avatar-sm.avatar-status::after {
  width: 10px;
  height: 10px;
}
.avatar-lg.avatar-status::after {
  width: 14px;
  height: 14px;
}
.avatar-xl.avatar-status::after {
  width: 16px;
  height: 16px;
}

/* Group */
.avatar-group {
  display: flex;
  align-items: center;
}
.avatar-group .avatar {
  border: 2px solid var(--color-bg);
  margin-left: -8px;
  transition: transform var(--transition-fast);
}
.avatar-group .avatar:first-child {
  margin-left: 0;
}
.avatar-group .avatar:hover {
  transform: translateY(-2px);
  z-index: 1;
}
.avatar-overflow {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-surface);
  color: var(--color-text-muted);
  font-size: var(--text-xs);
  font-weight: var(--weight-semibold);
}
```

---

### Loader / Spinner / Skeleton / Progress (`components/loader.css`)

```css
.spinner {
  display: inline-block;
  width: 24px;
  height: 24px;
  border: 3px solid var(--color-border-light);
  border-top-color: var(--color-primary);
  border-radius: var(--radius-full);
  animation: spin 0.8s linear infinite;
}
.spinner-sm {
  width: 16px;
  height: 16px;
  border-width: 2px;
}
.spinner-lg {
  width: 40px;
  height: 40px;
  border-width: 4px;
}
.spinner-xl {
  width: 56px;
  height: 56px;
  border-width: 4px;
}
.spinner-center {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--space-2xl);
}
.spinner-overlay {
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--overlay-bg);
  z-index: var(--z-modal);
}

/* Skeleton */
.skeleton {
  background: linear-gradient(
    90deg,
    var(--color-surface) 25%,
    var(--color-surface-hover) 37%,
    var(--color-surface) 63%
  );
  background-size: 200% 100%;
  animation: shimmer 1.5s ease-in-out infinite;
  border-radius: var(--radius-sm);
}
.skeleton-text {
  height: 1em;
  margin-bottom: var(--space-sm);
  border-radius: var(--radius-xs);
}
.skeleton-text:last-child {
  width: 70%;
}
.skeleton-heading {
  height: 1.5em;
  width: 60%;
  margin-bottom: var(--space-md);
  border-radius: var(--radius-sm);
}
.skeleton-circle {
  width: 40px;
  height: 40px;
  border-radius: var(--radius-full);
}
.skeleton-rect {
  width: 100%;
  height: 200px;
  border-radius: var(--radius-md);
}
.skeleton-card {
  border-radius: var(--radius-card);
  height: 280px;
}

/* Progress */
.progress {
  width: 100%;
  height: 8px;
  background-color: var(--color-surface);
  border-radius: var(--radius-full);
  overflow: hidden;
}
.progress-bar {
  height: 100%;
  background-color: var(--color-primary);
  border-radius: var(--radius-full);
  transition: width var(--transition-base);
}
.progress-bar-success {
  background-color: var(--color-success);
}
.progress-bar-warning {
  background-color: var(--color-warning);
}
.progress-bar-error {
  background-color: var(--color-error);
}
.progress-indeterminate .progress-bar {
  width: 30%;
  animation: shimmer 1.5s ease-in-out infinite;
}
.progress-sm {
  height: 4px;
}
.progress-lg {
  height: 12px;
}
.progress-labeled {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
}
.progress-labeled .progress {
  flex: 1;
}
.progress-label {
  font-size: var(--text-xs);
  font-weight: var(--weight-semibold);
  color: var(--color-text-muted);
  white-space: nowrap;
}
```

---

### Scrollbar (`components/scrollbar.css`)

```css
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}
::-webkit-scrollbar-track {
  background: transparent;
}
::-webkit-scrollbar-thumb {
  background-color: var(--color-border-light);
  border-radius: var(--radius-full);
  border: 2px solid transparent;
  background-clip: content-box;
}
::-webkit-scrollbar-thumb:hover {
  background-color: var(--color-primary-muted);
}
::-webkit-scrollbar-thumb:active {
  background-color: var(--color-primary);
}
::-webkit-scrollbar-corner {
  background: transparent;
}
* {
  scrollbar-width: thin;
  scrollbar-color: var(--color-border-light) transparent;
}

.scrollbar-thin::-webkit-scrollbar {
  width: 4px;
  height: 4px;
}
.scrollbar-hidden {
  scrollbar-width: none;
  -ms-overflow-style: none;
}
.scrollbar-hidden::-webkit-scrollbar {
  display: none;
}
.scrollbar-auto {
  scrollbar-width: none;
}
.scrollbar-auto::-webkit-scrollbar-thumb {
  background-color: transparent;
}
.scrollbar-auto:hover {
  scrollbar-width: thin;
}
.scrollbar-auto:hover::-webkit-scrollbar-thumb {
  background-color: var(--color-border-light);
}
```

---

### Back to Top (`components/back-to-top.css`)

```css
.back-to-top {
  position: fixed;
  bottom: var(--space-lg);
  right: var(--space-lg);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  padding: 0;
  color: var(--color-on-primary);
  background-color: var(--color-primary);
  border: var(--border-thick) solid var(--color-primary);
  border-radius: var(--radius-full);
  box-shadow: var(--shadow-btn);
  cursor: pointer;
  z-index: var(--z-sticky);
  opacity: 0;
  visibility: hidden;
  transform: translateY(20px);
  transition:
    opacity var(--transition-base),
    visibility var(--transition-base),
    transform var(--transition-base),
    background-color var(--transition-fast),
    box-shadow var(--transition-fast);
}
.back-to-top svg {
  width: 20px;
  height: 20px;
}
.back-to-top.visible,
.back-to-top[data-visible="true"] {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}
.back-to-top:hover {
  background-color: var(--color-primary-hover);
  box-shadow: var(--shadow-btn-hover);
  transform: translateY(-2px);
}
.back-to-top:active {
  transform: translateY(0);
}

@media (max-width: 576px) {
  .back-to-top {
    bottom: var(--space-md);
    right: var(--space-md);
    width: 40px;
    height: 40px;
  }
}
```

---

### Pagination (`components/pagination.css`)

```css
.pagination {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-xs);
  list-style: none;
  padding: 0;
  margin: var(--space-xl) 0;
}
.pagination-item {
  display: inline-flex;
}
.pagination-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 36px;
  height: 36px;
  padding: 0 var(--space-sm);
  font-size: var(--text-sm);
  font-weight: var(--weight-medium);
  color: var(--color-text-muted);
  background-color: transparent;
  border: var(--border-width) solid var(--color-border-light);
  border-radius: var(--radius-sm);
  text-decoration: none;
  cursor: pointer;
  transition:
    color var(--transition-fast),
    background-color var(--transition-fast),
    border-color var(--transition-fast);
}
.pagination-link:hover {
  color: var(--color-primary);
  border-color: var(--color-primary);
  background-color: var(--color-primary-alpha-10);
}
.pagination-link.active,
.pagination-link[aria-current="page"] {
  color: var(--color-on-primary);
  background-color: var(--color-primary);
  border-color: var(--color-primary);
  font-weight: var(--weight-semibold);
}
.pagination-link:disabled,
.pagination-link[aria-disabled="true"] {
  opacity: 0.4;
  cursor: not-allowed;
  pointer-events: none;
}
.pagination-ellipsis {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 36px;
  height: 36px;
  font-size: var(--text-sm);
  color: var(--color-text-dim);
}
.pagination-compact .pagination-link {
  border-radius: var(--radius-full);
}

/* Dots */
.pagination-dots {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-sm);
}
.pagination-dot {
  width: 10px;
  height: 10px;
  border-radius: var(--radius-full);
  background-color: var(--color-border-light);
  border: none;
  cursor: pointer;
  transition:
    background-color var(--transition-fast),
    transform var(--transition-fast);
}
.pagination-dot.active {
  background-color: var(--color-primary);
  transform: scale(1.2);
}
.pagination-dot:hover {
  background-color: var(--color-primary-muted);
}
```

---

### File Upload (`components/file-upload.css`)

```css
.file-upload {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--space-md);
  padding: var(--space-2xl);
  background-color: var(--color-surface);
  border: var(--border-thick) dashed var(--color-border-light);
  border-radius: var(--radius-card);
  text-align: center;
  cursor: pointer;
  transition:
    border-color var(--transition-fast),
    background-color var(--transition-fast);
}
.file-upload:hover {
  border-color: var(--color-primary-muted);
  background-color: var(--color-primary-alpha-10);
}
.file-upload.dragover {
  border-color: var(--color-primary);
  background-color: var(--color-primary-alpha-15);
  box-shadow: var(--shadow-glow);
}
.file-upload-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  background-color: var(--color-primary-alpha-15);
  color: var(--color-primary);
  border-radius: var(--radius-full);
  font-size: var(--text-2xl);
}
.file-upload-text {
  font-size: var(--text-sm);
  color: var(--color-text-muted);
  line-height: var(--leading-relaxed);
}
.file-upload-text strong {
  color: var(--color-primary);
}
.file-upload-hint {
  font-size: var(--text-xs);
  color: var(--color-text-dim);
}
.file-upload input[type="file"] {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
}
.file-upload-compact {
  flex-direction: row;
  padding: var(--space-md);
  gap: var(--space-sm);
}
.file-upload-compact .file-upload-icon {
  width: 40px;
  height: 40px;
  font-size: var(--text-lg);
}
.file-upload:has(input:disabled),
.file-upload.disabled {
  opacity: 0.5;
  cursor: not-allowed;
  pointer-events: none;
}

.file-list {
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
  margin-top: var(--space-md);
}
.file-item {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  padding: var(--space-sm) var(--space-md);
  background-color: var(--color-surface);
  border: var(--border-width) solid var(--color-border-light);
  border-radius: var(--radius-md);
}
.file-item-icon {
  flex-shrink: 0;
  width: 20px;
  height: 20px;
  color: var(--color-primary);
}
.file-item-name {
  font-size: var(--text-sm);
  color: var(--color-text);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.file-item-size {
  font-size: var(--text-xs);
  color: var(--color-text-dim);
}
.file-item-remove {
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  padding: 0;
  color: var(--color-text-dim);
  background: transparent;
  border: none;
  border-radius: var(--radius-xs);
  cursor: pointer;
}
.file-item-remove:hover {
  color: var(--color-error);
  background-color: rgba(239, 68, 68, 0.1);
}
```

---

### Drag & Drop (`components/drag-drop.css`)

```css
.drag-item {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  padding: var(--space-sm) var(--space-md);
  background-color: var(--color-surface);
  border: var(--border-width) solid var(--color-border-light);
  border-radius: var(--radius-md);
  cursor: grab;
  user-select: none;
  transition:
    box-shadow var(--transition-fast),
    border-color var(--transition-fast),
    transform var(--transition-fast);
}
.drag-item:hover {
  border-color: var(--color-primary-alpha-25);
}
.drag-item:active {
  cursor: grabbing;
}
.drag-item.dragging {
  opacity: 0.5;
  box-shadow: var(--shadow-lg);
  transform: rotate(2deg);
  border-color: var(--color-primary);
  z-index: var(--z-dropdown);
}
.drag-item.drop-target {
  border-color: var(--color-primary);
  background-color: var(--color-primary-alpha-10);
  box-shadow: var(--shadow-glow);
}

.drag-handle {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  color: var(--color-text-dim);
  cursor: grab;
}
.drag-handle:active {
  cursor: grabbing;
}
.drag-handle svg {
  width: 14px;
  height: 14px;
}
.drag-handle-dots::before {
  content: "⋮⋮";
  letter-spacing: 2px;
  font-size: var(--text-sm);
  color: var(--color-text-dim);
}

.drop-zone {
  min-height: 60px;
  padding: var(--space-md);
  border: var(--border-thick) dashed var(--color-border-light);
  border-radius: var(--radius-md);
  transition:
    border-color var(--transition-fast),
    background-color var(--transition-fast);
}
.drop-zone.active {
  border-color: var(--color-primary);
  background-color: var(--color-primary-alpha-10);
}
.drop-zone-placeholder {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  font-size: var(--text-sm);
  color: var(--color-text-dim);
}

.drag-list {
  display: flex;
  flex-direction: column;
  gap: var(--space-xs);
  list-style: none;
  padding: 0;
  margin: 0;
}
.drag-list .insert-indicator {
  height: 2px;
  background-color: var(--color-primary);
  border-radius: var(--radius-full);
  margin: calc(var(--space-xs) * -1) 0;
}
.drag-item[aria-disabled="true"],
.drag-item.disabled {
  opacity: 0.5;
  cursor: not-allowed;
  pointer-events: none;
}
```

---

### Breadcrumbs (`components/breadcrumbs.css`)

```css
.breadcrumb {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: var(--space-xs);
  list-style: none;
  padding: 0;
  margin: 0;
  font-size: var(--text-sm);
}
.breadcrumb-item {
  display: inline-flex;
  align-items: center;
  gap: var(--space-xs);
}
.breadcrumb-item + .breadcrumb-item::before {
  content: "/";
  color: var(--color-text-dim);
  font-size: var(--text-xs);
}
.breadcrumb-link {
  color: var(--color-text-muted);
  text-decoration: none;
  transition: color var(--transition-fast);
}
.breadcrumb-link:hover {
  color: var(--color-primary);
}
.breadcrumb-item.active,
.breadcrumb-item[aria-current="page"] {
  color: var(--color-text);
  font-weight: var(--weight-medium);
}
```

---

### Accordion (`components/accordion.css`)

```css
.accordion {
  display: flex;
  flex-direction: column;
  border: var(--border-width) solid var(--color-border-light);
  border-radius: var(--radius-md);
  overflow: hidden;
}
.accordion-item {
  border-bottom: var(--border-width) solid var(--color-border-light);
}
.accordion-item:last-child {
  border-bottom: none;
}

.accordion-trigger {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: var(--space-md) var(--space-lg);
  font-family: var(--font-body);
  font-size: var(--text-sm);
  font-weight: var(--weight-semibold);
  color: var(--color-text);
  background: none;
  border: none;
  cursor: pointer;
  text-align: left;
  transition:
    background-color var(--transition-fast),
    color var(--transition-fast);
}
.accordion-trigger:hover {
  background-color: var(--color-surface-hover);
}
.accordion-icon {
  flex-shrink: 0;
  width: 16px;
  height: 16px;
  color: var(--color-text-muted);
  transition: transform var(--transition-base);
}
.accordion-item.open .accordion-icon,
details[open] .accordion-icon {
  transform: rotate(180deg);
}

.accordion-content {
  padding: 0 var(--space-lg) var(--space-lg);
  font-size: var(--text-sm);
  color: var(--color-text-muted);
  line-height: var(--leading-relaxed);
  display: none;
}
.accordion-item.open .accordion-content {
  display: block;
  animation: slideDown 0.2s ease forwards;
}

/* Native details/summary */
details.accordion-item summary {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--space-md) var(--space-lg);
  font-weight: var(--weight-semibold);
  cursor: pointer;
  list-style: none;
}
details.accordion-item summary::-webkit-details-marker {
  display: none;
}
details.accordion-item summary:hover {
  background-color: var(--color-surface-hover);
}
details.accordion-item[open] .accordion-content {
  display: block;
}

/* Spaced variant */
.accordion-spaced {
  border: none;
  gap: var(--space-sm);
}
.accordion-spaced .accordion-item {
  border: var(--border-width) solid var(--color-border-light);
  border-radius: var(--radius-md);
  overflow: hidden;
}
.accordion-spaced .accordion-item:last-child {
  border-bottom: var(--border-width) solid var(--color-border-light);
}
```

---

## 🎨 Ajustements Thème — Composants (`themes/dark.css` + `themes/light.css`)

### Mode Sombre (`:root, [data-theme="dark"]`)

```css
:root,
[data-theme="dark"] {
  .card {
    background-color: var(--color-surface);
  }
  .card-interactive:hover {
    box-shadow: var(--shadow-glow);
  }
  .hero-blob {
    opacity: 0.8;
  }
  .table th {
    background-color: var(--color-bg-elevated);
  }
  .form-input:focus,
  .form-textarea:focus,
  .form-select:focus {
    box-shadow: var(--focus-ring), var(--shadow-glow);
  }
  code,
  pre {
    background-color: var(--color-bg-elevated);
  }
  .badge-solid {
    box-shadow: 0 0 10px rgba(110, 231, 183, 0.25);
  }
}
```

### Mode Clair (`[data-theme="light"]`)

```css
[data-theme="light"] {
  .card {
    background-color: var(--color-surface);
    box-shadow: var(--shadow-card);
  }
  .card-interactive:hover {
    box-shadow: var(--shadow-card-hover);
    border-color: var(--color-primary-alpha-25);
  }
  .card-featured {
    border-color: var(--color-primary-alpha-35);
  }
  .hero-blob {
    opacity: 0.4;
    filter: blur(80px);
  }
  .btn-primary:active,
  .btn-secondary:active {
    box-shadow: 0 2px 8px rgba(52, 211, 153, 0.2);
    transform: translateY(1px);
  }
  .table th {
    background-color: var(--color-surface);
    color: var(--color-text-muted);
  }
  .form-input:focus,
  .form-textarea:focus,
  .form-select:focus {
    box-shadow: var(--focus-ring);
  }
  code,
  pre {
    background-color: var(--color-surface);
    border: var(--border-width) solid var(--color-border-light);
  }
  .badge-solid {
    box-shadow: 0 2px 6px rgba(52, 211, 153, 0.15);
  }
  .toast {
    box-shadow: var(--shadow-card);
  }
  .feature-item:hover {
    box-shadow: var(--shadow-card-hover);
  }
  .sidebar {
    background-color: var(--color-bg);
  }
}
```

---

## 🧰 Classes Utilitaires — Résumé (`utilities.css`)

> Le fichier complet fait 487 lignes. Voici toutes les classes en résumé condensé.

### Layout

`.container` (90% width, max-width container-max, auto margins) · `.container-narrow` (max-width container-narrow) · `.container-wide` (max-width container-wide) · `.flex` · `.inline-flex` · `.flex-col` · `.flex-wrap` · `.items-center/start/end/stretch/baseline` · `.justify-center/between/around/evenly/start/end` · `.flex-1/auto/none` · `.gap-{2xs,xs,sm,md,lg,xl,2xl}` · `.grid` · `.grid-cols-{1-4}` · `.place-center`

### Spacing

**Margin** : `.m-{0,2xs,xs,sm,md,lg,xl,2xl,3xl,auto}` · `.mt-/mr-/mb-/ml-/mx-/my-` avec les mêmes suffixes
**Padding** : `.p-{0,2xs,xs,sm,md,lg,xl,2xl,3xl}` · `.pt-/pr-/pb-/pl-/px-/py-` avec les mêmes suffixes

### Typographie

`.text-{xs,sm,base,lg,xl,2xl,3xl,4xl}` · `.font-{sans,display,mono}` · `.font-{normal,medium,semibold,bold,extrabold}` · `.text-{left,center,right}` · `.uppercase/lowercase/capitalize/normal-case` · `.leading-{none,tight,snug,normal,relaxed}` · `.tracking-{tight,normal,wide,wider}` · `.truncate` (text-overflow: ellipsis) · `.line-clamp-{2,3,4}` (-webkit-line-clamp) · `.whitespace-{normal,nowrap,pre}` · `.break-words/break-all`

### Couleurs

**Texte** : `.text-primary/accent/success/warning/error/muted/dim` · **Fond** : `.bg-primary/accent/success/surface/elevated/transparent`

### Display & Position

`.block/inline-block/inline/hidden` · `.visible/invisible` · `.opacity-{0,25,50,75,100}` · `.relative/absolute/fixed/sticky` · `.inset-0` · `.top-0/right-0/bottom-0/left-0` · `.overflow-{hidden,auto,scroll,visible}` · `.z-{0,10,20,30,40,50}`

### Sizing

`.w-{full,auto,screen}` · `.h-{full,auto,screen}` · `.min-w-0/min-h-0/min-h-screen` · `.max-w-{xs(320),sm(480),md(640),lg(768),xl(1024),2xl(1280),full,none}`

### Borders

`.rounded-{none,xs,sm,md,btn,card,full}` · `.border/border-0/border-t/border-b/border-l/border-r` · `.border-light/border-primary/border-accent/border-error`

### Accessibility

`.sr-only` (position absolute, overflow hidden, clip, 1px × 1px — contenu lu par lecteurs d'écran)

### Interactive

`.cursor-{pointer,default,not-allowed,grab,grabbing}` · `.pointer-events-{none,auto}` · `.select-{none,all,auto}`

---

## 📐 Anatomie des pages Zest

### Page Login (`index.html`) / Invite (`invite.html`)

```
body
  └── button.theme-toggle.theme-toggle-fixed   ← fixé en haut à droite (login/invite uniquement)
  └── main.login-page                          ← flex, centré, min-height 100vh
       └── div.login-card.animate-scaleIn      ← glassmorphism, max-width 420px
            ├── div.text-center.mb-2xl
            │    ├── p.zest-tagline             ← "Il ne reste que le"
            │    └── h1.zest-logo              ← "Zest"
            ├── form#loginForm
            │    ├── div.form-group
            │    │    ├── label.form-label
            │    │    └── input.form-input
            │    ├── div.form-group
            │    │    ├── label.form-label
            │    │    └── input.form-input[type=password]
            │    ├── div.alert.alert-error      ← style="display:none"
            │    └── button.btn.btn-primary.btn-block.btn-lg.mt-md
            └── (invite: div#inviteForm avec 2 inputs password + confirmation)
```

### Dashboard (`dashboard.html`)

```
body
  ├── a.sr-only[style=position:absolute;left:-9999px;...]  ← skip link
  ├── nav.navbar.navbar-blur
  │    ├── a.navbar-brand → "Zest"
  │    └── div.navbar-actions
  │         ├── span#navUsername.text-sm.text-muted[style=min-width:80px;text-align:right]
  │         ├── a#adminNavLink.btn.btn-ghost.btn-sm[style=display:none;flex-shrink:0]
  │         ├── button#profileBtn.btn.btn-ghost.btn-sm[style=flex-shrink:0]
  │         ├── button.theme-toggle#themeToggle                    ← dans navbar (pas fixed)
  │         └── button#logoutBtn.btn.btn-ghost.btn-sm[style=flex-shrink:0]
  ├── main#main-content.container[style=padding-top:calc(var(--header-height)+var(--space-2xl));padding-bottom:var(--space-3xl)]
  │    ├── section.mb-3xl  ← Raccourcir un lien
  │    │    ├── div.section-header[style=text-align:left]
  │    │    │    ├── h1.text-2xl.font-bold.font-display
  │    │    │    └── p.text-muted.text-sm.mt-xs
  │    │    ├── div.mt-md.url-input-row
  │    │    │    ├── input.form-input[style=flex:1]
  │    │    │    └── button.btn.btn-primary[style=white-space:nowrap]
  │    │    ├── div#shortenError.form-error.mt-xs[style=display:none;color:var(--color-error);font-size:var(--text-sm)]
  │    │    ├── div.shorten-options.mt-sm → .form-row (grid 1fr 1fr) → 2× .form-group
  │    │    └── div#linkResult.link-result
  │    └── section.mb-3xl  ← Mes liens
  │         ├── div.dashboard-header → h2 + span.badge.badge-primary.badge-sm
  │         ├── div.table-wrapper → table.table.table-striped
  │         └── div#emptyState.empty-state[style=display:none]
  ├── div#deleteModalBackdrop.modal-backdrop[style=display:none]
  │    └── div.modal → modal-header + modal-body + modal-footer (btn-ghost + btn-danger)
  ├── div#setPasswordBackdrop.modal-backdrop[style=display:none]
  │    └── div.modal → set password form
  ├── div#profileModalBackdrop.modal-backdrop[style=display:none]
  │    └── div.modal → profile form (3 fields + btn-ghost + btn-primary)
  └── div#toastContainer.toast-container
```

### Admin (`admin.html`)

```
body
  ├── a.sr-only[style=...] ← skip link identique
  ├── nav.navbar.navbar-blur ← même structure, lien "Dashboard" au lieu de "Administration"
  ├── main.container[style=padding-top:calc(...);padding-bottom:var(--space-3xl)]
  │    ├── div.section-header[style=text-align:left]
  │    │    ├── span.section-label → "Administration"
  │    │    └── h1.text-2xl.font-bold.font-display → "Gestion des utilisateurs"
  │    ├── div.card.mt-lg[style=max-width:500px] ← Créer un utilisateur
  │    │    └── div.card-body → form → input + select + button.btn.btn-accent
  │    └── div.mt-xl ← Liste des utilisateurs
  │         ├── h2 + span.badge.badge-accent.badge-sm
  │         └── div.table-wrapper → table.table.table-striped
  ├── div#deleteModalBackdrop → modal confirmation suppression (btn-ghost + btn-danger)
  ├── div#invitationModalBackdrop → modal lien d'invitation
  │    └── div.modal → modal-body contient un div inline-styled:
  │         background: var(--color-bg-elevated); border: 1px solid var(--color-accent);
  │         border-radius: var(--radius-md); padding: var(--space-md);
  │         margin: var(--space-md) 0; word-break: break-all;
  │         → p.font-mono.text-sm[style=color:var(--color-accent);user-select:all]
  │    └── modal-footer → btn-accent + btn-ghost
  ├── div#profileModalBackdrop → modal profil identique au dashboard
  └── div#toastContainer.toast-container
```

---

## 📏 Règles de composition

### Boutons — Quel bouton utiliser ?

| Contexte                                           | Classe                             |
| -------------------------------------------------- | ---------------------------------- |
| Action principale (connexion, raccourcir, valider) | `btn btn-primary`                  |
| Action secondaire (copier)                         | `btn btn-secondary btn-sm`         |
| Navigation / outil (profil, déco, admin)           | `btn btn-ghost btn-sm`             |
| Création admin                                     | `btn btn-accent`                   |
| Suppression destructive                            | `btn btn-danger`                   |
| Pleine largeur (formulaire login)                  | `btn btn-primary btn-block btn-lg` |
| Modale — annulation                                | `btn btn-ghost`                    |

### Badges — Compteurs

| Contexte                      | Classe                         |
| ----------------------------- | ------------------------------ |
| Dashboard — nombre de liens   | `badge badge-primary badge-sm` |
| Admin — nombre d'utilisateurs | `badge badge-accent badge-sm`  |

### Modals — Structure obligatoire

```html
<div class="modal-backdrop" style="display: none">
  <div class="modal" role="dialog" aria-modal="true" aria-labelledby="...">
    <div class="modal-header">
      <h3 class="modal-title" id="...">Titre</h3>
      <button class="modal-close" aria-label="Fermer">&times;</button>
    </div>
    <div class="modal-body">...</div>
    <div class="modal-footer">
      <button class="btn btn-ghost">Annuler</button>
      <button class="btn btn-primary">Confirmer</button>
    </div>
  </div>
</div>
```

### Container principal avec navbar fixe

```html
<main
  class="container"
  style="padding-top: calc(var(--header-height) + var(--space-2xl)); padding-bottom: var(--space-3xl);"
></main>
```

### Table avec données

```html
<div class="table-wrapper">
  <table class="table table-striped">
    <thead>
      <tr>
        <th>...</th>
      </tr>
    </thead>
    <tbody>
      <!-- dynamic -->
    </tbody>
  </table>
</div>
```

---

## ♿ Accessibilité

- **Skip link** : `<a class="sr-only" style="position: absolute; left: -9999px; ...">Aller au contenu principal</a>` en premier élément du body
- **Focus visible** : `:focus-visible` → `outline: 2px solid var(--color-primary); outline-offset: 2px;`
- **Modals** : `role="dialog"`, `aria-modal="true"`, `aria-labelledby="..."`, `body.modal-open` pour le scroll lock
- **Thème** : `data-theme="dark|light"` sur `<html>`
- **Reduced motion** : `@media (prefers-reduced-motion: reduce)` désactive toutes les animations
- **Theme toggle** : `aria-label="Changer le thème"`

---

## ❌ Ce qu'il ne faut PAS faire

1. **Ne pas activer** `body::before` / `body::after` — la grille et le halo sont **DÉSACTIVÉS**
2. **Ne pas utiliser de classes inline** pour le spacing quand une utilitaire existe (ex: utiliser `.mt-md` pas `style="margin-top: 16px"`)
3. **Ne pas dupliquer les tokens** — toujours utiliser `var(--token)`, jamais les valeurs brutes
4. **Ne pas oublier les transitions** thème : `transition: ... var(--transition-theme)` sur les éléments avec couleur de fond
5. **Ne pas confondre** `.form-input` (classe CSS) et `<input>` (élément HTML brut sans style)
6. **Ne pas utiliser** `rgba()` manuellement — les tokens `--color-*-alpha-*` existent
7. **Ne pas omettre** `backdrop-filter` et `-webkit-backdrop-filter` ensemble pour la compatibilité Safari
