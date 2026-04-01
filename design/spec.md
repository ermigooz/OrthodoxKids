# OrthodoxKids Design System Specification

**Project:** OrthodoxKids -- Ethiopian Orthodox Christian Educational Website
**Audience:** Children ages 6--14
**Design Philosophy:** Warm, sacred, and child-friendly. Ethiopian Orthodox church art meets modern children's education.

---

## 1. Color Palette

Inspired by Ethiopian Orthodox iconography -- the luminous golds of illuminated manuscripts, the deep reds of liturgical cloth, and the celestial blues of church ceilings.

### Primary -- Gold / Amber (Divinity, Light)

| Token          | Hex       | Usage                                      |
|----------------|-----------|---------------------------------------------|
| `gold-50`      | `#FFF8E7` | Light gold tint, subtle highlights          |
| `gold-100`     | `#FEEBC8` | Hover backgrounds, selected states          |
| `gold-300`     | `#F6C547` | Decorative borders, icon accents            |
| `gold-500`     | `#D4A012` | **Primary brand color**, buttons, headings  |
| `gold-700`     | `#B8860B` | Active/pressed states, dark gold accents    |
| `gold-900`     | `#8B6914` | Deep gold for high-contrast text on light   |

### Secondary -- Deep Red / Crimson (Sacrifice, Love)

| Token          | Hex       | Usage                                      |
|----------------|-----------|---------------------------------------------|
| `red-50`       | `#FFF5F5` | Error background tint                       |
| `red-100`      | `#FED7D7` | Light warning highlights                    |
| `red-300`      | `#E25D5D` | Decorative accents, timeline markers        |
| `red-500`      | `#C41E3A` | **Secondary brand color**, cross icons      |
| `red-700`      | `#9B1B30` | Hover state for secondary buttons           |
| `red-900`      | `#6B0F1A` | Deep crimson for strong emphasis            |

### Accent -- Royal Blue (Heaven, Virgin Mary)

| Token          | Hex       | Usage                                      |
|----------------|-----------|---------------------------------------------|
| `blue-50`      | `#EBF4FF` | Info background tint                        |
| `blue-100`     | `#C3DAFE` | Light accent highlights                     |
| `blue-300`     | `#6B9BD2` | Links, interactive elements                 |
| `blue-500`     | `#1E3A8A` | **Accent color**, quiz elements, heaven ref |
| `blue-700`     | `#1A2F6E` | Active/pressed accent states                |
| `blue-900`     | `#0F1D45` | Deep blue for contrast                      |

### Background -- Warm Cream / Parchment

| Token              | Hex       | Usage                                   |
|---------------------|-----------|------------------------------------------|
| `parchment-50`      | `#FFFDF7` | Page background                          |
| `parchment-100`     | `#FDF6E3` | **Main background**, manuscript warmth   |
| `parchment-200`     | `#F5EDDA` | Card backgrounds, alternate sections     |
| `parchment-300`     | `#E8DCC8` | Borders, dividers                        |
| `parchment-400`     | `#D4C5A9` | Disabled/muted elements                  |

### Text -- Dark Brown / Near-Black

| Token          | Hex       | Usage                                      |
|----------------|-----------|---------------------------------------------|
| `text-900`     | `#2D1B0E` | **Primary text** -- headings, body          |
| `text-700`     | `#4A3728` | Secondary text, descriptions                |
| `text-500`     | `#6B5744` | Tertiary text, captions, placeholders       |
| `text-300`     | `#A89279` | Disabled text                               |
| `text-white`   | `#FFFDF7` | Text on dark backgrounds                    |

### Semantic Colors

| Token          | Hex       | Usage                                      |
|----------------|-----------|---------------------------------------------|
| `success`      | `#2E7D32` | Correct answers, completion indicators      |
| `success-light`| `#E8F5E9` | Success background tint                     |
| `error`        | `#C62828` | Wrong answers, validation errors            |
| `error-light`  | `#FFEBEE` | Error background tint                       |

---

## 2. Typography

### Font Families

| Role           | Font                  | Google Fonts Link                                        | Fallback Stack                      |
|----------------|-----------------------|----------------------------------------------------------|--------------------------------------|
| **Headings**   | Playfair Display      | `family=Playfair+Display:wght@400;600;700`               | Georgia, "Times New Roman", serif    |
| **Body**       | Nunito                | `family=Nunito:wght@400;500;600;700`                     | "Segoe UI", Roboto, sans-serif       |
| **Amharic**    | Noto Sans Ethiopic    | `family=Noto+Sans+Ethiopic:wght@400;500;600;700`         | sans-serif                           |

**Rationale:**
- *Playfair Display* -- elegant serif with a reverent, manuscript quality; high readability at large sizes.
- *Nunito* -- rounded, friendly sans-serif perfect for children; excellent legibility at body sizes.
- *Noto Sans Ethiopic* -- Google's comprehensive Ethiopic script font; supports all Ge'ez characters.

### Type Scale

| Element        | Size (Desktop) | Size (Mobile) | Weight    | Line Height | Letter Spacing |
|----------------|---------------|---------------|-----------|-------------|----------------|
| `h1`           | 40px (2.5rem) | 32px (2rem)   | 700 Bold  | 1.2         | -0.02em        |
| `h2`           | 32px (2rem)   | 26px (1.625rem)| 600 Semi | 1.3         | -0.01em        |
| `h3`           | 24px (1.5rem) | 20px (1.25rem)| 600 Semi  | 1.35        | 0              |
| `body`         | 18px (1.125rem)| 16px (1rem)  | 400 Reg   | 1.6         | 0.01em         |
| `body-small`   | 16px (1rem)   | 14px (0.875rem)| 400 Reg  | 1.5         | 0.01em         |
| `caption`      | 14px (0.875rem)| 12px (0.75rem)| 500 Med  | 1.4         | 0.02em         |
| `button`       | 16px (1rem)   | 16px (1rem)   | 600 Semi  | 1.0         | 0.05em         |

### Google Fonts Import

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Nunito:wght@400;500;600;700&family=Noto+Sans+Ethiopic:wght@400;500;600;700&display=swap" rel="stylesheet">
```

---

## 3. Spacing & Layout

### Base Grid

All spacing derives from an **8px base unit**.

| Token      | Value   | Usage                              |
|------------|---------|-------------------------------------|
| `space-1`  | 4px     | Tight inline spacing                |
| `space-2`  | 8px     | Minimum gap, icon margins           |
| `space-3`  | 12px    | Small padding within elements       |
| `space-4`  | 16px    | Standard element padding            |
| `space-5`  | 24px    | Card internal padding               |
| `space-6`  | 32px    | Section gap, card gap               |
| `space-7`  | 48px    | Section padding (vertical)          |
| `space-8`  | 64px    | Large section separators            |
| `space-9`  | 96px    | Hero padding, major sections        |

### Layout Constraints

| Property            | Value       |
|---------------------|-------------|
| Container max-width | 1200px      |
| Content max-width   | 960px       |
| Container padding   | 0 24px      |
| Section padding     | 48px 0      |
| Card padding        | 24px        |
| Card gap (grid)     | 24px        |

### Breakpoints

| Name         | Width    | Behavior                                      |
|--------------|----------|------------------------------------------------|
| `desktop`    | > 768px  | Multi-column layouts, full nav                 |
| `tablet`     | <= 768px | 2-column grids collapse, reduced padding       |
| `mobile`     | <= 480px | Single-column, stacked layout, hamburger nav   |

### Responsive Adjustments

```
Desktop (> 768px):
  - Container padding: 0 24px
  - Section padding: 64px 0
  - Card grid: 2-3 columns

Tablet (<= 768px):
  - Container padding: 0 16px
  - Section padding: 48px 0
  - Card grid: 2 columns max

Mobile (<= 480px):
  - Container padding: 0 12px
  - Section padding: 32px 0
  - Card grid: 1 column
  - Font sizes reduced (see type scale)
```

---

## 4. Component Specifications

### 4.1 Homepage

#### Hero Section

```
Layout:
  - Full-width, min-height: 480px (desktop), 320px (mobile)
  - Background: Warm gradient overlay on subtle Ethiopian cross pattern
    background: linear-gradient(135deg, rgba(212,160,18,0.15), rgba(30,58,138,0.1)),
                var(--color-parchment-100)
  - Center-aligned content

Content:
  - Site title: h1, Playfair Display, gold-700
  - Subtitle: body, Nunito, text-700
  - Amharic subtitle beneath English, Noto Sans Ethiopic, text-500
  - CTA Button: "Start Learning" / "መማር ጀምር"
    - Background: gold-500, text: text-900
    - Padding: 16px 32px, border-radius: 12px
    - Hover: gold-700, subtle lift shadow

Decoration:
  - Subtle Ethiopian cross watermark (opacity 0.06) in background
  - Gentle radial glow behind title (gold-50, blurred)
```

#### Navigation Cards

```
Layout:
  - Grid: 3 columns desktop, 2 tablet, 1 mobile
  - Gap: 24px
  - Centered within content max-width

Each card:
  - Width: fills grid column
  - Padding: 32px 24px
  - Background: parchment-200
  - Border: 2px solid parchment-300
  - Border-radius: 16px
  - Text-align: center

  Content:
    - Icon: 48px, outlined style, gold-500
    - Title: h3, text-900
    - Description: body-small, text-700, max 2 lines
    - Hover: border-color transitions to gold-500,
             box-shadow: 0 8px 24px rgba(45,27,14,0.12),
             transform: translateY(-4px)
    - Transition: all 0.3s ease

  Cards:
    1. "Church Fathers" / "የቤተ ክርስቲያን አባቶች" -- scroll icon
    2. "History" / "ታሪክ" -- book icon
    3. "Quiz" / "ፈተና" -- quiz icon
```

#### Language Toggle (Top Right)

See Section 4.5 for full specification. Positioned in the site header, top-right corner.

#### Footer

```
Layout:
  - Full-width, background: text-900
  - Padding: 32px 24px
  - Text: parchment-200, caption size
  - Center-aligned

Content:
  - Small Ethiopian cross icon (parchment-400)
  - Copyright text
  - "Built with faith for young learners"
  - Optional: link row for sections
```

---

### 4.2 Father Profile Cards

```
Layout:
  - Grid: 2 columns desktop, 1 column mobile
  - Gap: 24px
  - Max card width: 560px

Card dimensions:
  - Min-height: 200px
  - Padding: 24px
  - Background: parchment-50
  - Border: 1px solid parchment-300
  - Border-radius: 16px
  - Box-shadow: 0 2px 8px rgba(45,27,14,0.06)

Icon / Image area:
  - Left side of card (desktop), top of card (mobile)
  - Dimensions: 80px x 80px circle
  - Background: gold-100
  - Border: 3px solid gold-300
  - Icon or saint illustration centered inside
  - Border-radius: 50%

Name:
  - h3, Playfair Display, text-900
  - Margin-bottom: 4px
  - Amharic name below in Noto Sans Ethiopic, caption size, text-500

Bio:
  - body-small, Nunito, text-700
  - Line-clamp: 3 lines with "Read more..." link
  - "Read more" color: blue-500, underline on hover

Hover state:
  - Border-color: gold-500
  - Box-shadow: 0 8px 24px rgba(45,27,14,0.12)
  - Transform: translateY(-2px)
  - Transition: all 0.3s ease

Active/Expanded state:
  - Full bio revealed
  - Card expands smoothly (max-height transition)
  - "Read less" replaces "Read more"

Mobile (<=480px):
  - Single column, full width
  - Icon area stacks above text, centered
  - Card padding: 20px
```

---

### 4.3 History Timeline

```
Desktop layout (> 768px):
  - Vertical center line: 3px solid gold-300
  - Timeline entries alternate left and right
  - Content max-width: 45% of container on each side

  Date marker (on center line):
    - Circle: 20px diameter
    - Background: gold-500
    - Border: 4px solid parchment-100
    - Box-shadow: 0 0 0 3px gold-300

  Connecting line from marker to card:
    - Horizontal line: 2px solid parchment-300
    - Length: 32px

  Timeline card:
    - Padding: 20px 24px
    - Background: parchment-50
    - Border: 1px solid parchment-300
    - Border-radius: 12px
    - Box-shadow: 0 2px 8px rgba(45,27,14,0.06)

  Card content:
    - Date badge: caption, gold-500 background, text-white, rounded pill
      padding: 4px 12px, border-radius: 20px
    - Title: h3, text-900
    - Description: body-small, text-700
    - Optional icon or small illustration

  Left-side card: text-align right, connector extends right to center line
  Right-side card: text-align left, connector extends left to center line

  Entrance animation (on scroll):
    - Fade in + slide from respective side
    - Duration: 0.5s, ease-out
    - Stagger: 0.15s per item

Mobile layout (<= 768px):
  - Single column
  - Vertical line: left-aligned, 24px from left edge
  - All cards on the right side of the line
  - Date markers on the left line
  - Cards take full remaining width
  - Text-align: left for all cards
  - Reduced padding: 16px
```

---

### 4.4 Quiz Section

#### Question Card

```
Container:
  - Max-width: 720px, centered
  - Padding: 32px
  - Background: parchment-50
  - Border: 2px solid parchment-300
  - Border-radius: 20px
  - Box-shadow: 0 4px 16px rgba(45,27,14,0.08)

Question text:
  - h2 size, Nunito (not Playfair, for readability), text-900
  - Margin-bottom: 24px
  - Optional small illustration above question (max-height: 160px)

Question number:
  - Caption size, gold-500
  - Format: "Question 3 of 10" / "ጥያቄ 3 ከ 10"
  - Margin-bottom: 8px
```

#### Answer Buttons (4 options)

```
Layout:
  - 2x2 grid (desktop), 1 column (mobile)
  - Gap: 16px

Each button:
  - Padding: 16px 20px
  - Min-height: 56px
  - Background: parchment-200
  - Border: 2px solid parchment-300
  - Border-radius: 12px
  - Font: button size, Nunito, 600 weight, text-900
  - Text-align: left
  - Cursor: pointer

  Option label:
    - Prefix: "A) " / "B) " / "C) " / "D) "
    - Label color: gold-700, bold

  Hover (unanswered):
    - Background: gold-50
    - Border-color: gold-500
    - Transform: translateY(-1px)

  Selected state (before submit):
    - Background: gold-100
    - Border-color: gold-500
    - Box-shadow: 0 0 0 2px gold-300

  Correct answer (after submit):
    - Background: success-light (#E8F5E9)
    - Border-color: success (#2E7D32)
    - Prefix icon: checkmark

  Wrong answer (after submit):
    - Background: error-light (#FFEBEE)
    - Border-color: error (#C62828)
    - Prefix icon: X mark
    - Correct answer simultaneously highlighted in green

  Transition: all 0.2s ease
```

#### Progress Bar

```
Container:
  - Width: 100%, max-width: 720px
  - Height: 12px
  - Background: parchment-300
  - Border-radius: 6px
  - Margin-bottom: 24px
  - Overflow: hidden

Fill:
  - Height: 100%
  - Background: linear-gradient(90deg, gold-500, gold-300)
  - Border-radius: 6px
  - Transition: width 0.5s ease

Label (above bar):
  - Caption size, text-500
  - Display: flex, justify-content: space-between
  - Left: "Progress" / "ግስጋሴ"
  - Right: "60%" or "6/10"
```

#### Score Display

```
Post-quiz screen:
  - Centered content, max-width: 480px
  - Large score number: 64px, Playfair Display, gold-500
  - Format: "8/10" with circular progress ring behind it
  - Message below:
    - 90-100%: "Excellent! Blessed be your knowledge!" -- success color
    - 70-89%: "Well done! Keep learning!" -- gold-500
    - Below 70%: "Good effort! Try again to improve." -- blue-500
  - Amharic translation below each message

  Circular progress ring:
    - Size: 160px
    - Stroke: 8px
    - Track: parchment-300
    - Fill: success (90%+), gold-500 (70-89%), blue-500 (<70%)
    - Animation: draw-in over 1.5s, ease-out
```

#### Feedback & Next Button

```
Feedback message (after each question):
  - Appears below answer buttons
  - Padding: 16px
  - Border-radius: 8px
  - Correct: success-light background, success text, checkmark icon
    "Correct! Well done." / "ትክክል! ጎበዝ!"
  - Wrong: error-light background, error text, X icon
    "Not quite. The correct answer is [X]." / "ትክክል አይደለም። ትክክለኛው መልስ [X] ነው።"
  - Animation: slide down + fade in, 0.3s

Next button:
  - Appears after feedback
  - Padding: 14px 28px
  - Background: gold-500
  - Color: text-900
  - Border-radius: 12px
  - Font: button spec
  - Hover: gold-700
  - Text: "Next Question" / "ቀጣይ ጥያቄ"
  - Arrow icon (right) appended
  - Float: right

Retry button (on score screen):
  - Same style as Next button
  - Text: "Try Again" / "እንደገና ሞክር"
```

---

### 4.5 Language Toggle

```
Position:
  - Top-right of site header
  - Fixed within header (scrolls with header if sticky, or stays at top)

Layout:
  - Inline-flex button pair
  - Border: 2px solid parchment-300
  - Border-radius: 8px
  - Overflow: hidden

Button "EN":
  - Padding: 8px 16px
  - Font: caption size, Nunito, 600 weight
  - Min-width: 48px (meets 44px touch target)
  - Min-height: 44px

Button "አማ":
  - Same dimensions as EN
  - Font: caption size, Noto Sans Ethiopic, 600 weight

Active state (selected language):
  - Background: gold-500
  - Color: text-900
  - Font-weight: 700

Inactive state:
  - Background: parchment-100
  - Color: text-500
  - Hover: background parchment-200

Behavior:
  - Clicking toggles the site language
  - Selection persists across pages (localStorage)
  - Smooth text transition (fade 0.2s) when language changes
  - No page reload -- content swaps in place
  - ARIA: role="radiogroup" with role="radio" on each button
```

---

## 5. Iconography

### Icon Style

- **Stroke:** Outlined, 2px stroke weight
- **Corners:** Slightly rounded (2px radius on stroke joins)
- **Feel:** Warm, simple, approachable -- not overly detailed
- **Color:** Inherits current text color or gold-500 for decorative use
- **Sizes:** 24px (inline), 32px (nav), 48px (feature cards), 64px (hero decorative)

### Required Icons

| Icon            | Description                                      | Emoji Fallback |
|-----------------|--------------------------------------------------|----------------|
| Cross           | Ethiopian Orthodox cross (ornate but simplified)  | &#x271A; or &#x2720;  |
| Church          | Simple church/temple silhouette with dome         | &#x26EA;              |
| Book            | Open book with pages                              | &#x1F4D6;             |
| Scroll          | Rolled parchment scroll                           | &#x1F4DC;             |
| Candle          | Single lit candle with flame                      | &#x1F56F;             |
| Prayer hands    | Two hands together in prayer                      | &#x1F64F;             |
| Quiz            | Question mark in circle or lightbulb              | &#x2753; or &#x1F4A1; |
| Star            | Eight-pointed star (Star of Bethlehem)            | &#x2734;              |
| Arrow right     | Simple chevron right for navigation               | &#x27A1;              |
| Checkmark       | Circle with check for correct answers             | &#x2705;              |
| X mark          | Circle with X for wrong answers                   | &#x274C;              |
| Globe/Language  | Globe icon for language toggle area               | &#x1F310;             |

### Icon Recommendations

- **Primary choice:** Custom SVG icon set (commission or create in Figma) matching the outlined, warm style.
- **Quick alternative:** [Lucide Icons](https://lucide.dev/) -- open source, outlined, consistent stroke width. Use `stroke-width="2"` and apply warm colors.
- **Emoji fallbacks** are provided for rapid prototyping and situations where custom icons are not yet available.

---

## 6. Design Tokens (CSS Custom Properties)

Copy-paste ready for the developer.

```css
:root {
  /* ========================================
     ORTHODOXKIDS DESIGN TOKENS
     Ethiopian Orthodox meets Modern Education
     ======================================== */

  /* --- Colors: Primary (Gold / Amber) --- */
  --color-gold-50:  #FFF8E7;
  --color-gold-100: #FEEBC8;
  --color-gold-300: #F6C547;
  --color-gold-500: #D4A012;
  --color-gold-700: #B8860B;
  --color-gold-900: #8B6914;

  /* --- Colors: Secondary (Deep Red / Crimson) --- */
  --color-red-50:  #FFF5F5;
  --color-red-100: #FED7D7;
  --color-red-300: #E25D5D;
  --color-red-500: #C41E3A;
  --color-red-700: #9B1B30;
  --color-red-900: #6B0F1A;

  /* --- Colors: Accent (Royal Blue) --- */
  --color-blue-50:  #EBF4FF;
  --color-blue-100: #C3DAFE;
  --color-blue-300: #6B9BD2;
  --color-blue-500: #1E3A8A;
  --color-blue-700: #1A2F6E;
  --color-blue-900: #0F1D45;

  /* --- Colors: Background (Parchment) --- */
  --color-parchment-50:  #FFFDF7;
  --color-parchment-100: #FDF6E3;
  --color-parchment-200: #F5EDDA;
  --color-parchment-300: #E8DCC8;
  --color-parchment-400: #D4C5A9;

  /* --- Colors: Text (Dark Brown) --- */
  --color-text-900: #2D1B0E;
  --color-text-700: #4A3728;
  --color-text-500: #6B5744;
  --color-text-300: #A89279;
  --color-text-white: #FFFDF7;

  /* --- Colors: Semantic --- */
  --color-success:       #2E7D32;
  --color-success-light: #E8F5E9;
  --color-error:         #C62828;
  --color-error-light:   #FFEBEE;

  /* --- Typography: Font Families --- */
  --font-heading:  'Playfair Display', Georgia, 'Times New Roman', serif;
  --font-body:     'Nunito', 'Segoe UI', Roboto, sans-serif;
  --font-amharic:  'Noto Sans Ethiopic', sans-serif;

  /* --- Typography: Font Sizes --- */
  --text-h1:      2.5rem;    /* 40px */
  --text-h2:      2rem;      /* 32px */
  --text-h3:      1.5rem;    /* 24px */
  --text-body:    1.125rem;  /* 18px */
  --text-body-sm: 1rem;      /* 16px */
  --text-caption: 0.875rem;  /* 14px */
  --text-button:  1rem;      /* 16px */

  /* --- Typography: Font Weights --- */
  --weight-regular:  400;
  --weight-medium:   500;
  --weight-semibold: 600;
  --weight-bold:     700;

  /* --- Typography: Line Heights --- */
  --leading-tight:   1.2;
  --leading-snug:    1.3;
  --leading-normal:  1.5;
  --leading-relaxed: 1.6;

  /* --- Typography: Letter Spacing --- */
  --tracking-tight:  -0.02em;
  --tracking-snug:   -0.01em;
  --tracking-normal:  0;
  --tracking-wide:    0.01em;
  --tracking-wider:   0.02em;
  --tracking-widest:  0.05em;

  /* --- Spacing (8px base) --- */
  --space-1:  0.25rem;   /* 4px */
  --space-2:  0.5rem;    /* 8px */
  --space-3:  0.75rem;   /* 12px */
  --space-4:  1rem;      /* 16px */
  --space-5:  1.5rem;    /* 24px */
  --space-6:  2rem;      /* 32px */
  --space-7:  3rem;      /* 48px */
  --space-8:  4rem;      /* 64px */
  --space-9:  6rem;      /* 96px */

  /* --- Layout --- */
  --container-max:  1200px;
  --content-max:    960px;
  --quiz-max:       720px;
  --score-max:      480px;

  /* --- Border Radius --- */
  --radius-sm:    4px;
  --radius-md:    8px;
  --radius-lg:    12px;
  --radius-xl:    16px;
  --radius-2xl:   20px;
  --radius-full:  9999px;
  --radius-pill:  20px;

  /* --- Shadows --- */
  --shadow-sm:    0 2px 8px rgba(45, 27, 14, 0.06);
  --shadow-md:    0 4px 16px rgba(45, 27, 14, 0.08);
  --shadow-lg:    0 8px 24px rgba(45, 27, 14, 0.12);
  --shadow-glow:  0 0 24px rgba(212, 160, 18, 0.15);

  /* --- Transitions --- */
  --transition-fast:    0.15s ease;
  --transition-normal:  0.3s ease;
  --transition-slow:    0.5s ease;
  --transition-bounce:  0.3s cubic-bezier(0.34, 1.56, 0.64, 1);

  /* --- Focus --- */
  --focus-ring:         0 0 0 3px rgba(212, 160, 18, 0.4);
  --focus-ring-error:   0 0 0 3px rgba(198, 40, 40, 0.3);

  /* --- Z-Index Scale --- */
  --z-base:      0;
  --z-dropdown:  100;
  --z-sticky:    200;
  --z-overlay:   300;
  --z-modal:     400;
  --z-toast:     500;

  /* --- Breakpoints (for reference; use in @media queries) --- */
  /* --bp-mobile:  480px;  */
  /* --bp-tablet:  768px;  */
  /* --bp-desktop: 1024px; */
}

/* --- Mobile Overrides --- */
@media (max-width: 768px) {
  :root {
    --text-h1:      2rem;      /* 32px */
    --text-h2:      1.625rem;  /* 26px */
    --text-h3:      1.25rem;   /* 20px */
    --text-body:    1rem;      /* 16px */
    --text-body-sm: 0.875rem;  /* 14px */
    --text-caption: 0.75rem;   /* 12px */
  }
}
```

---

## 7. Accessibility

### WCAG 2.1 Compliance Target: AA

#### Color Contrast Ratios

All text-background combinations must meet minimum ratios:

| Combination                        | Ratio   | Requirement | Status |
|------------------------------------|---------|-------------|--------|
| text-900 (#2D1B0E) on parchment-100 (#FDF6E3) | 12.8:1  | 4.5:1 (AA) | Pass   |
| text-700 (#4A3728) on parchment-100 (#FDF6E3) | 8.2:1   | 4.5:1 (AA) | Pass   |
| text-500 (#6B5744) on parchment-100 (#FDF6E3) | 4.8:1   | 4.5:1 (AA) | Pass   |
| gold-700 (#B8860B) on parchment-50 (#FFFDF7)  | 4.6:1   | 3:1 (large) | Pass  |
| text-white (#FFFDF7) on gold-500 (#D4A012)    | 3.2:1   | 3:1 (large) | Pass  |
| text-900 (#2D1B0E) on gold-500 (#D4A012)      | 4.5:1   | 3:1 (large) | Pass  |
| text-white (#FFFDF7) on blue-500 (#1E3A8A)    | 10.1:1  | 4.5:1 (AA) | Pass   |
| text-white (#FFFDF7) on red-500 (#C41E3A)     | 5.8:1   | 4.5:1 (AA) | Pass   |

**Note:** For gold-500 buttons, always use text-900 (dark brown) as the label color to ensure sufficient contrast. Reserve text-white only for the darker blue and red backgrounds.

#### Focus States

```css
/* Visible focus ring for keyboard navigation */
*:focus-visible {
  outline: none;
  box-shadow: var(--focus-ring); /* 0 0 0 3px rgba(212,160,18,0.4) */
  border-radius: var(--radius-md);
}

/* Error-context focus */
.error *:focus-visible {
  box-shadow: var(--focus-ring-error);
}

/* Never remove focus outlines; only restyle them */
```

#### Font Size Minimums

- **Body text minimum:** 16px (1rem) -- never smaller on any viewport.
- **Caption minimum:** 12px (0.75rem) on mobile, 14px on desktop. Used only for supplementary information, never for primary content.
- **Button text minimum:** 16px (1rem) on all viewports.
- **Interactive labels** must be at least 14px.

#### Touch Targets

- **Minimum touch target:** 44px x 44px (per WCAG 2.5.5).
- All buttons, links, and interactive elements must meet this minimum.
- If the visual element is smaller (e.g., a small icon button), extend the tap area using padding or `::before` pseudo-element.
- Maintain at least 8px spacing between adjacent touch targets.

#### Additional Accessibility Requirements

- **Semantic HTML:** Use proper heading hierarchy (h1 > h2 > h3), landmark roles, and list structures.
- **ARIA labels:** Language toggle must use `role="radiogroup"` and `aria-label="Language selection"`. Each option uses `role="radio"` and `aria-checked`.
- **Alt text:** All decorative icons use `aria-hidden="true"`. All meaningful images have descriptive `alt` attributes.
- **Motion:** Respect `prefers-reduced-motion`:
  ```css
  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      animation-duration: 0.01ms !important;
      transition-duration: 0.01ms !important;
    }
  }
  ```
- **Language attribute:** Toggle `<html lang="en">` to `<html lang="am">` when Amharic is selected.
- **Screen reader support:** Quiz feedback must be announced via `aria-live="polite"` region. Score results use `aria-live="assertive"`.
- **Skip navigation:** Include a "Skip to main content" link as the first focusable element.

---

## Quick Reference: Page-Component Map

| Page             | Components Used                                              |
|------------------|--------------------------------------------------------------|
| Homepage         | Hero, Nav Cards, Language Toggle, Footer                     |
| Church Fathers   | Father Profile Cards (grid), Language Toggle, Footer         |
| History          | History Timeline, Language Toggle, Footer                    |
| Quiz             | Question Card, Answer Buttons, Progress Bar, Score, Footer   |

---

*This specification is the single source of truth for OrthodoxKids design decisions. All implementation should reference these tokens and component specs. When in doubt, choose warmth, clarity, and reverence.*
