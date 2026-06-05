# Bertel - Prompt System para GPT Image 2

Sistema de prompts baseado na identidade visual aprovada da Bertel. Use-o para gerar imagens e peças consistentes, evitando resultados genéricos.

## Fontes de referência obrigatórias

- Prancha visual: `D:\Bertel\prancha-de-identidade-visual-bertel.png`
- Logo oficial: `D:\Bertel\logo.png`
- Design System: `D:\Bertel\brand-system\02_Bertel_Design_System.md`
- Brand Designer: `D:\Bertel\brand-system\05_Bertel_Brand_Designer.md`

## Variáveis obrigatórias

- `{FORMATO}`: formato e dimensões da peça.
- `{OBJETIVO}`: visualização, autoridade, educação, salvamento ou WhatsApp.
- `{TEMA}`: assunto do conteúdo.
- `{TIPO_DE_PEÇA}`: capa, slide interno, checklist, CTA, imagem de Reels etc.
- `{TÍTULO}`: headline principal.
- `{TEXTO_EXATO}`: todo texto que deve aparecer.
- `{CTA}`: ação esperada.
- `{MATERIAL_DOMINANTE}`: concreto, pedra preta, madeira, vidro, ouro escovado ou outro aprovado.
- `{IMAGEM_CONCEITUAL}`: cena ou elemento visual.
- `{RESTRIÇÕES}`: cuidados específicos da pauta.

## Vocabulário visual obrigatório

Incluir nos prompts, conforme necessário:

```text
editorial architectural art direction, refined contemporary construction brand, controlled negative space, precise 12-column grid, elegant serif headline, clean functional sans-serif, thin architectural linework, subtle measurement marks, restrained brushed-gold accents, deep-black and graphite surfaces, premium but accessible, timeless, sober, carefully framed
```

## Sistema tipográfico nos prompts

### Headline editorial

```text
Use an elegant high-contrast editorial serif similar to Cormorant Garamond SemiBold, in sentence case, with refined proportions and controlled line spacing.
```

### Headline institucional

```text
Use a refined classical serif similar to Cinzel SemiBold for a short institutional title only.
```

### Título funcional e CTA

```text
Use a clean geometric sans-serif similar to Manrope SemiBold or Bold.
```

### Corpo de texto

```text
Use a highly legible neutral sans-serif similar to Inter Regular or Medium.
```

Nunca pedir apenas `modern font`, `premium font` ou `clean typography`. Sempre definir a função tipográfica.

## Paleta obrigatória

```text
Use the Bertel palette strictly:
deep black #050505,
architectural graphite #191919,
Bertel gold #D4AF37,
aged gold #A47C2C,
off-white #F2EDE3,
concrete grey #777777.
Gold must remain a restrained accent, never the dominant surface.
```

## Prompt negativo padrão

Adicionar ao final de todos os prompts:

```text
Do not create fake Bertel projects, fake before-and-after proof, invented clients, testimonials, awards, seals, certifications, uniforms, vehicles, guarantees, numbers or public contracts. Do not imply that conceptual AI-generated architecture is a real Bertel project. Do not add extra text. Do not misspell Portuguese. Do not distort or redesign the Bertel logo. Do not use aggressive condensed typography, generic contractor flyer layouts, excessive gold, excessive glow, bright yellow, orange, blue corporate palettes, cluttered grids, cartoon icons, cheap stock-photo aesthetics or inaccessible ultra-luxury mansion imagery. Do not promise perfect results, unrealistic deadlines, 100% satisfaction or dust-free construction.
```

## Prompt mestre

Use como base antes de escolher a variação específica:

```text
Create a {FORMATO} for Bertel Reformas e Construções.

Purpose: {OBJETIVO}.
Content theme: {TEMA}.
Asset type: {TIPO_DE_PEÇA}.

Follow Bertel's approved editorial architectural identity. The piece must feel precise, elegant, trustworthy, timeless and professionally organized. Use controlled negative space, a precise 12-column grid, sober architectural framing, thin gold linework, subtle measurement marks and a refined material palette.

{PALETA_OBRIGATÓRIA}

Typography:
- editorial headline: Cormorant Garamond SemiBold style, sentence case;
- functional title and CTA: Manrope SemiBold style;
- supporting text: Inter Regular style.

Use {MATERIAL_DOMINANTE} as the primary material reference. Visual concept: {IMAGEM_CONCEITUAL}.

Include only this exact Portuguese text:
"{TEXTO_EXATO}"

CTA: "{CTA}"

Reserve a precise clean area for the official Bertel logo. Do not redraw the logo.

{RESTRIÇÕES}
{PROMPT_NEGATIVO_PADRÃO}
```

## 1. Capa editorial de carrossel

```text
Create a 1080x1350 Instagram carousel cover for Bertel Reformas e Construções.

Build an elegant editorial architectural composition with deep-black and graphite surfaces, an architectural image or material detail, generous negative space and a thin incomplete gold frame. Use a Cormorant Garamond SemiBold-style headline in sentence case. The headline must be the clear focal point and occupy no more than 45% of the canvas.

Use a small Manrope SemiBold label only if necessary. Keep the official Bertel logo small and precisely aligned near the bottom. Add subtle architectural linework or measurement marks at low opacity.

Headline exactly:
"{TÍTULO}"

Theme: {TEMA}.
Objective: {OBJETIVO}.
Material reference: {MATERIAL_DOMINANTE}.
Conceptual image: {IMAGEM_CONCEITUAL}.

Do not use lists, multiple headlines or aggressive condensed typography on the cover.

{RESTRIÇÕES}
{PROMPT_NEGATIVO_PADRÃO}
```

## 2. Slide educativo editorial

```text
Create a 1080x1350 educational carousel slide for Bertel Reformas e Construções.

Use a precise editorial grid with one clear idea. Use Manrope Bold for the functional title and Inter Regular for the supporting explanation. Keep a small Cormorant Garamond accent phrase only if it improves hierarchy. Use deep black, graphite, off-white and restrained Bertel gold.

Use one supporting visual only: an architectural detail, material close-up, line icon or conceptual renovation element. Add a thin gold divider, subtle measurement marks and generous margins.

Include only this exact Portuguese text:
"{TEXTO_EXATO}"

Theme: {TEMA}.
Objective: {OBJETIVO}.

{RESTRIÇÕES}
{PROMPT_NEGATIVO_PADRÃO}
```

## 3. Slide checklist

```text
Create a 1080x1350 save-worthy checklist slide for Bertel Reformas e Construções.

Use a clear 12-column grid, a Manrope Bold title, Inter Regular checklist items and thin gold line icons. Use deep black and graphite backgrounds with off-white text. Keep the layout highly readable, spacious and functional.

Use no more than five checklist items. Avoid photography unless it occupies a single controlled area and does not reduce readability.

Include only this exact Portuguese text:
"{TEXTO_EXATO}"

Objective: {OBJETIVO}.

{RESTRIÇÕES}
{PROMPT_NEGATIVO_PADRÃO}
```

## 4. Slide comparativo

```text
Create a 1080x1350 comparison slide for Bertel Reformas e Construções.

Use a refined two-area editorial layout, not a dense table. Separate the two concepts with a thin gold architectural divider. Use Manrope Bold for headings and Inter Regular for supporting text. Maintain deep black, graphite, off-white and restrained gold.

If the comparison resembles before-and-after, clearly treat it as conceptual unless real Bertel material is supplied.

Include only this exact Portuguese text:
"{TEXTO_EXATO}"

Theme: {TEMA}.

{RESTRIÇÕES}
{PROMPT_NEGATIVO_PADRÃO}
```

## 5. Slide CTA

```text
Create a 1080x1350 final CTA slide for Bertel Reformas e Construções.

Use an elegant Cormorant Garamond headline, a Manrope SemiBold CTA and a clean area for the official Bertel logo. Use a dark architectural background, a restrained gold button or line, and generous negative space.

Include only this exact Portuguese text:
"{TEXTO_EXATO}"

CTA:
"{CTA}"

If a WhatsApp number appears, use only: (47) 93387-5683.

{RESTRIÇÕES}
{PROMPT_NEGATIVO_PADRÃO}
```

## 6. Imagem base para Reels

O texto principal será aplicado depois no Remotion.

```text
Create a 1080x1920 vertical conceptual image for a Bertel Reformas e Construções Reel.

Use sophisticated architectural photography, controlled warm lighting, deep-black and graphite shadows, restrained gold reflections and precise composition. The image must feel editorial, sober and trustworthy.

Visual concept: {IMAGEM_CONCEITUAL}.
Material reference: {MATERIAL_DOMINANTE}.
Theme: {TEMA}.

Leave clean negative space for captions and on-screen text. Do not include text, logo or CTA in the image. Do not imply that the scene is a real Bertel project.

{RESTRIÇÕES}
{PROMPT_NEGATIVO_PADRÃO}
```

## 7. Capa de Reels

```text
Create a 1080x1920 Instagram Reel cover for Bertel Reformas e Construções.

Use a vertically framed architectural image with a dark editorial treatment. Apply a short Cormorant Garamond headline in sentence case, restrained gold linework and a small official logo area near the bottom. Keep the central safe area readable when cropped to the Instagram feed.

Headline exactly:
"{TÍTULO}"

Do not add subtitles or extra labels unless requested.

{RESTRIÇÕES}
{PROMPT_NEGATIVO_PADRÃO}
```

## 8. Capa de Notion

```text
Create a 2400x600 Notion cover for Bertel Reformas e Construções.

Use a clean editorial architectural layout with all critical content inside the central safe zone. Use a deep-black background, subtle graphite architecture linework, a restrained gold accent and off-white typography. Use Cormorant Garamond for the main title and Manrope for the subtitle.

Include only this exact Portuguese text:
"{TEXTO_EXATO}"

Keep the official logo centered and undistorted. The composition must remain readable on desktop and mobile crops.

{RESTRIÇÕES}
{PROMPT_NEGATIVO_PADRÃO}
```

## 9. Prancha visual ou moodboard

```text
Create a professional brand direction board for Bertel Reformas e Construções.

Show the approved identity as a coherent system: logo usage, color palette, typography hierarchy, architectural linework, material palette, social-media applications and editorial photography direction.

Use Cormorant Garamond, Cinzel, Manrope and Inter according to their defined roles. Use deep black, architectural graphite, Bertel gold, aged gold, off-white and concrete grey. Include brushed gold, black stone, concrete, wood panel, marble and architectural glass as material references.

The board must feel like a real professional design-system presentation, not a collage of advertisements.

{RESTRIÇÕES}
{PROMPT_NEGATIVO_PADRÃO}
```

## Exemplo preenchido

```text
{FORMATO}: Instagram carousel cover, 1080x1350
{OBJETIVO}: gerar salvamentos e autoridade
{TEMA}: informações necessárias para pedir orçamento
{TIPO_DE_PEÇA}: capa editorial de carrossel
{TÍTULO}: Antes do orçamento, organize estas informações
{TEXTO_EXATO}: Antes do orçamento, organize estas informações
{CTA}: Salve para consultar depois
{MATERIAL_DOMINANTE}: black stone and brushed gold
{IMAGEM_CONCEITUAL}: architectural close-up with measuring tape and subtle blueprint lines
{RESTRIÇÕES}: Do not imply that the image is a real Bertel project.
```

## Checklist de revisão

- O texto está em português correto?
- A fonte cumpre a função definida?
- A peça tem uma headline dominante?
- O dourado está controlado?
- A composição tem espaço negativo?
- A imagem parece conceitual, não portfólio falso?
- A logo está correta?
- O conteúdo funciona no celular?
- Não há texto extra, promessa ou prova inventada?
