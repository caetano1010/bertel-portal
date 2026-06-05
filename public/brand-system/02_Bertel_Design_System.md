# Bertel — Sistema Visual da Marca
**Reformas e Construções · Versão 1.0**

> Construção e reforma com padrão elevado, precisão técnica e acabamento sofisticado.

---

## Atributos da Marca

| Atributo | Definição |
|---|---|
| Arquitetônico | Linguagem visual inspirada em projetos e plantas técnicas |
| Preciso | Cada elemento tem propósito e posicionamento calculado |
| Elegante | Estética refinada, sem excessos |
| Confiável | Visual que transmite solidez e experiência |
| Premium | Materiais e acabamento de alto padrão como referência visual |
| Atemporal | Evita tendências passageiras; foca em clássico duradouro |

---

## 1. Sistema de Cores

### Paleta Principal

| Nome | Hex | Uso |
|---|---|---|
| Preto Profundo | `#050505` | Fundo principal, backgrounds |
| Grafite Arquitetônico | `#191919` | Cards, painéis secundários |
| Ouro Bertel | `#D4AF37` | Cor de destaque principal, CTAs, logotipo |
| Ouro Envelhecido | `#A47C2C` | Gradientes, variação do ouro |
| Off-white | `#F2EDE3` | Textos principais sobre fundo escuro |
| Cinza Concreto | `#777777` | Textos secundários, labels |

### Gradientes

| Nome | CSS |
|---|---|
| Preto Profundo → Grafite | `linear-gradient(135deg, #050505 0%, #191919 100%)` |
| Ouro Envelhecido → Ouro Bertel | `linear-gradient(135deg, #D4AF37 0%, #A47C2C 100%)` |
| Soft Gold Light | `linear-gradient(135deg, #f8f0d4 0%, #D4AF37 100%)` |
| Stone Gray → Graphite | `linear-gradient(135deg, #888 0%, #191919 100%)` |

### Tokens CSS

```css
:root {
  --preto:            #050505;
  --grafite:          #191919;
  --ouro-bertel:      #D4AF37;
  --ouro-envelhecido: #A47C2C;
  --offwhite:         #F2EDE3;
  --cinza-concreto:   #777777;

  --grad-preto-grafite: linear-gradient(135deg, #050505, #191919);
  --grad-ouro:          linear-gradient(135deg, #D4AF37, #A47C2C);
  --grad-gold-light:    linear-gradient(135deg, #f8f0d4, #D4AF37);
  --grad-stone:         linear-gradient(135deg, #888, #191919);
}
```

---

## 2. Tipografia

### Famílias Tipográficas

| Família | Estilo | Uso | Importar |
|---|---|---|---|
| **Cinzel** | Serif maiúsculo, clássico | Títulos H1–H2, nome da marca | Google Fonts |
| **Cormorant Garamond** | Serif elegante, itálico | Subtítulos H3, citações, editorial | Google Fonts |
| **Manrope** | Sans-serif moderno | Corpo, UI, subtítulos, labels | Google Fonts |
| **Montserrat** | Sans-serif geométrico | Alternativa para corpo | Google Fonts |

```html
<link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700;900&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Manrope:wght@300;400;500;600;700;800&family=Montserrat:wght@400;500;600;700&display=swap" rel="stylesheet" />
```

### Escala Tipográfica

| Token | Família | Tamanho | Peso | Letter-spacing | Uso |
|---|---|---|---|---|---|
| `--t-h1` | Cinzel | 48px | 700 | 0.05em | Headlines principais |
| `--t-h2` | Cinzel | 32/40px | 600 | 0.05em | Títulos de seção |
| `--t-h3` | Cormorant Garamond | 24px | 400 italic | 0 | Subtítulos editoriais |
| `--t-subtitle` | Manrope SemiBold | 20px | 600 | 0 | Subtítulos de UI |
| `--t-body` | Manrope Regular | 16/24px | 400 | 0 | Corpo de texto |
| `--t-caption` | Manrope | 12/18px | 400 | 0.05em | Legendas, anotações |
| `--t-label` | Manrope | 10px | 700 | 0.2em | Labels, tags, botões |
| `--t-cta` | Manrope SemiBold | 11px | 700 | 0.2em | Botões / CTA |

### CSS de Tipografia

```css
/* Títulos Principais */
h1, h2 {
  font-family: 'Cinzel', serif;
  font-weight: 700;
  letter-spacing: 0.05em;
  color: #F2EDE3;
}

/* Subtítulos Editoriais */
h3, blockquote {
  font-family: 'Cormorant Garamond', serif;
  font-style: italic;
  font-weight: 400;
}

/* Corpo e UI */
body, p, span {
  font-family: 'Manrope', sans-serif;
  font-weight: 400;
  line-height: 1.6;
}

/* Labels */
.label {
  font-family: 'Manrope', sans-serif;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #D4AF37;
}
```

---

## 3. Uso da Marca / Logotipos

### Variações Disponíveis

| Variação | Fundo | Cor do símbolo | Cor do texto | Uso |
|---|---|---|---|---|
| Marca Principal | Preto `#050505` | Ouro `#D4AF37` | Off-white `#F2EDE3` | Uso padrão |
| Símbolo Isolado | Transparente | Ouro `#D4AF37` | — | Ícone, favicon |
| Assinatura Horizontal | Escuro | Ouro `#D4AF37` | Off-white | Cabeçalhos, rodapés |
| Versão Clara (fundo escuro) | Grafite `#191919` | Ouro `#D4AF37` | Off-white | Variação secundária |
| Sugestão Ouro/Branco | Gradiente ouro | Preto `#050505` | Preto | Destaques premium |

### Regras de Uso

- **Nunca** distorcer ou redimensionar de forma não proporcional
- **Nunca** aplicar cores fora do sistema de cores da marca
- **Nunca** usar sobre fundos que comprometam a legibilidade
- Manter área de proteção de **½ altura do B** ao redor do logotipo
- Tamanho mínimo: **120px** de largura em digital

---

## 4. Componentes de UI

### Botões

```css
/* Primário — CTA principal */
.btn-primary {
  font-family: 'Manrope', sans-serif;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  padding: 14px 28px;
  background: linear-gradient(135deg, #D4AF37, #A47C2C);
  color: #050505;
  border: none;
  border-radius: 2px;
  cursor: pointer;
}
.btn-primary:hover {
  opacity: 0.85;
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(212,175,55,0.3);
}

/* Secundário — outline ouro */
.btn-secondary {
  background: transparent;
  color: #D4AF37;
  border: 1px solid #D4AF37;
  /* mesmos font-*, padding, border-radius que primário */
}
.btn-secondary:hover {
  background: rgba(212,175,55,0.1);
  transform: translateY(-2px);
}

/* Ghost — outline sutil */
.btn-ghost {
  background: transparent;
  color: #F2EDE3;
  border: 1px solid rgba(255,255,255,0.2);
}
.btn-ghost:hover {
  border-color: #F2EDE3;
  transform: translateY(-2px);
}
```

### Tags / Badges

```css
/* Tag base */
.tag {
  font-family: 'Manrope', sans-serif;
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  padding: 5px 12px;
  border-radius: 1px;
}

.tag-gold    { background: rgba(212,175,55,0.12); color: #D4AF37; border: 1px solid rgba(212,175,55,0.3); }
.tag-dark    { background: rgba(255,255,255,0.05); color: #F2EDE3; border: 1px solid rgba(255,255,255,0.1); }
.tag-filled  { background: #D4AF37; color: #050505; }
```

### Divisores

```css
/* Linha ouro */
.divider-gold {
  height: 1px;
  background: linear-gradient(135deg, #D4AF37, #A47C2C);
}

/* Linha sutil */
.divider-subtle {
  height: 1px;
  background: rgba(255,255,255,0.08);
}

/* Ornamental (CSS puro) */
.divider-ornament {
  display: flex;
  align-items: center;
  gap: 16px;
  color: #D4AF37;
}
.divider-ornament::before,
.divider-ornament::after {
  content: '';
  flex: 1;
  height: 1px;
  background: rgba(212,175,55,0.3);
}
```

### Card de Projeto

```css
.card-projeto {
  background: #191919;
  border: 1px solid rgba(212,175,55,0.15);
  padding: 24px;
  border-radius: 2px;
  position: relative;
  overflow: hidden;
}
/* Barra lateral ouro */
.card-projeto::before {
  content: '';
  position: absolute;
  top: 0; left: 0;
  width: 3px; height: 100%;
  background: linear-gradient(180deg, #D4AF37, #A47C2C);
}

.card-projeto h3 {
  font-family: 'Cinzel', serif;
  font-style: normal;
  font-size: 14px;
  color: #D4AF37;
  margin-bottom: 8px;
}
.card-projeto p {
  font-size: 12px;
  color: #777777;
  line-height: 1.5;
}
```

### Campos de Formulário

```css
.field-label {
  font-family: 'Manrope', sans-serif;
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: #777777;
  display: block;
  margin-bottom: 6px;
}

.field-input {
  background: rgba(5,5,5,0.8);
  border: 1px solid rgba(255,255,255,0.1);
  color: #F2EDE3;
  font-family: 'Manrope', sans-serif;
  font-size: 13px;
  padding: 10px 14px;
  border-radius: 2px;
  width: 100%;
  outline: none;
  transition: border-color 0.3s ease;
}
.field-input:focus {
  border-color: #D4AF37;
}
```

---

## 5. Paleta de Materiais

Referências visuais de texturas e acabamentos que compõem a identidade da marca.

| Material | Referência | Uso na comunicação |
|---|---|---|
| Brushed Gold | Dourado escovado, reflexo linear | Detalhes premium, molduras |
| Black Stone | Pedra escura com veios | Fundos de destaque, texturas |
| Concrete | Cimento polido, neutro | Backgrounds secundários |
| Wood Panel | Madeira ripada escura | Ambientes residenciais, warmth |
| Marble | Mármore branco com veios | Sofisticação, alto padrão |
| Glass / Reflection | Vidro refletivo, transparência | Acabamento contemporâneo |

---

## 6. Linguagem Gráfica

### Elementos Arquitetônicos

- **Linhas de cota** tracejadas em ouro (`stroke-dasharray: 4 2; stroke: rgba(212,175,55,0.5)`)
- **Molduras com cantos** — bordas retas, cantos com detalhe L em ouro
- **Grade de alinhamento** — padrão geométrico fino de fundo
- **Padrão estelar** — derivado da estrela do logotipo, repetido como wallpaper

### Padrões Geométricos (CSS/SVG)

```html
<!-- Padrão estrela -->
<pattern id="star-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
  <polygon points="20,4 22,15 34,15 24,21 28,32 20,26 12,32 16,21 6,15 18,15"
    fill="none" stroke="rgba(212,175,55,0.25)" stroke-width="0.8"/>
</pattern>

<!-- Grade arquitetônica -->
<pattern id="grid-pattern" width="20" height="20" patternUnits="userSpaceOnUse">
  <path d="M 20 0 L 0 0 0 20" fill="none"
    stroke="rgba(212,175,55,0.12)" stroke-width="0.5"/>
</pattern>

<!-- Losango premium -->
<pattern id="diamond-pattern" width="30" height="30" patternUnits="userSpaceOnUse">
  <rect x="9" y="9" width="12" height="12" fill="none"
    stroke="rgba(212,175,55,0.2)" stroke-width="0.7"
    transform="rotate(45 15 15)"/>
</pattern>
```

---

## 7. Formatos para Redes Sociais

| Formato | Proporção | Resolução | Uso |
|---|---|---|---|
| Post Feed | 4:5 | 1080 × 1350px | Instagram feed principal |
| Capa Carrossel | 4:5 | 1080 × 1350px | Primeira slide de carrossel |
| Conteúdo Carrossel | 4:5 | 1080 × 1350px | Slides de conteúdo |
| Antes e Depois | 4:5 | 1080 × 1350px | Comparativo de projetos |
| Capa Reel | 9:16 | 1080 × 1920px | Capa de vídeo vertical |
| Story | 9:16 | 1080 × 1920px | Stories e Reels |
| Banner de Site | 16:5 | 1440 × 450px | Header do website |
| Slide de Apresentação | 16:9 | 1920 × 1080px | Proposta comercial |
| Cartão de Visitas (frente) | 9:5 | 900 × 500px | Print / digital |

### Estrutura de Layout (Posts Feed)

```
┌────────────────────────────┐
│  ★ [símbolo sutil]         │  ← topo direito, opacidade baixa
│                            │
│  [imagem de fundo/obra]    │
│                            │
│  ────────────────────────  │  ← gradiente escuro ascendente
│  "Texto da legenda         │
│   em Cormorant Italic"     │
│                            │
│  ✦ BERTEL ✦               │  ← Cinzel, ouro, letter-spacing
└────────────────────────────┘
```

---

## 8. Espaçamento & Grid

### Escala de Espaçamento (Base 8px)

| Token | Valor | Uso |
|---|---|---|
| `--space-xs` | 4px | Micro — ícones, badges internos |
| `--space-sm` | 8px | Gap interno de componentes |
| `--space-md` | 16px | Padding padrão, gap entre itens |
| `--space-lg` | 24px | Gap entre cards |
| `--space-xl` | 32px | Padding de seção interna |
| `--space-2xl` | 48px | Padding vertical de seções |
| `--space-3xl` | 64px | Margens externas, header |
| `--space-4xl` | 96px | Espaçamento macro entre seções |

### Border Radius

| Token | Valor | Uso |
|---|---|---|
| `--radius` | 2px | Padrão — softening mínimo, visual arquitetônico |
| `--radius-0` | 0px | Versão absoluta — máxima rigidez e autoridade |

### Sombras

```css
--shadow-sm:   0 2px 8px rgba(0, 0, 0, 0.4);
--shadow-md:   0 8px 24px rgba(0, 0, 0, 0.6);
--shadow-gold: 0 8px 32px rgba(212, 175, 55, 0.25);
```

---

## 9. Website e Sistema Digital

### Breakpoints

| Nome | Largura | Observação |
|---|---|---|
| Mobile | < 768px | Layout de coluna única |
| Tablet | 768–1024px | Grid 2 colunas |
| Desktop | > 1024px | Grid completo |
| Wide | > 1440px | Conteúdo centralizado, max-width |

### Estrutura de Navegação

```
Home  |  Serviços  |  Projetos  |  Orçamento
```

- **Font nav:** Manrope 9px, 700, letter-spacing 0.2em, uppercase
- **Estado ativo:** border-bottom 2px solid `#D4AF37`
- **Background:** `rgba(5,5,5,0.95)` + `backdrop-filter: blur(12px)`
- **Sticky:** sim, com transição suave

### Headline Hero (Website)

```html
<h1 style="font-family:'Cinzel',serif;font-size:clamp(32px,5vw,64px);
           font-weight:700;color:#F2EDE3;line-height:1.1;">
  Reformas e construções<br/>
  com padrão elevado
</h1>
```

---

## 10. Direção de Conteúdo (Estilo Fotográfico)

### Referências Visuais

- Ambientes internos sofisticados: iluminação baixa e dramática, luz quente
- Detalhes de acabamento: mármore, madeira, aço escovado em close
- Projetos arquitetônicos: fachadas modernas ao entardecer, céu contrastado
- Antes/depois: sempre com iluminação profissional, mesmo no "antes"

### Tom de Comunicação

- **Não usa:** "o melhor", "número 1", superlativos sem comprovação
- **Usa:** precisão técnica, referências ao processo, resultado concreto
- **Voz:** confiante, direta, sofisticada — não arrogante
- **Calls-to-action:** "Solicitar Avaliação", "Ver Projetos", "Do projeto à entrega"

---

## 11. Aplicações da Marca

### Cartão de Visitas

| Elemento | Especificação |
|---|---|
| Frente | Fundo `#050505`, logotipo centralizado ouro |
| Verso | Off-white `#F2EDE3`, dados em Manrope preto |
| Acabamento | Laminação fosca + hot stamping dourado no logo |
| Formato | 90 × 50mm |

### Proposta Comercial

| Elemento | Especificação |
|---|---|
| Capa | Fundo escuro, logo + "PROPOSTA COMERCIAL" em Cinzel |
| Miolo | Fundo off-white, tipografia preta, detalhes ouro |
| Separadores | Linha ouro fina + numeração de seção |

### Slide de Apresentação (16:9)

| Elemento | Especificação |
|---|---|
| Título do slide | Cinzel 32px, ouro `#D4AF37` |
| Corpo | Manrope 18px, `#191919` sobre fundo claro |
| Fundo | Off-white com marca d'água do símbolo em 4% opacidade |
| Rodapé | Logo horizontal + número de página |

---

## Referência Rápida — Cheat Sheet

```
MARCA
  Nome:       BERTEL (sempre maiúsculo)
  Subtítulo:  Reformas e Construções

CORES PRINCIPAIS
  Preto:      #050505
  Grafite:    #191919
  Ouro:       #D4AF37
  Off-white:  #F2EDE3

FONTES
  Display:    Cinzel 700
  Editorial:  Cormorant Garamond italic
  UI / corpo: Manrope 400–700

BOTÃO CTA
  bg: linear-gradient(135deg, #D4AF37, #A47C2C)
  text: #050505
  font: Manrope 700, 11px, letter-spacing 0.2em, uppercase

BORDER RADIUS: 2px
TRANSIÇÃO:    0.3s cubic-bezier(0.4, 0, 0.2, 1)
```

---

*Sistema Visual da Marca — Bertel Reformas e Construções · v1.0*