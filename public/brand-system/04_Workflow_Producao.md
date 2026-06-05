# Bertel - Workflow de Produção

Fluxo operacional para criar conteúdos consistentes, revisar português e manter o sistema visual da Bertel.

## Regra de abertura

Antes de qualquer produção:

1. confirmar que o cliente é Bertel Reformas e Construções;
2. consultar o PDF para informações oficiais;
3. consultar a prancha aprovada para direção visual;
4. consultar Brand System, Design System e Prompt System;
5. verificar se a peça usa imagem conceitual ou material real.

## Ordem das skills

1. `pdf`
   - Consultar dados oficiais e restrições.

2. `content-strategy`
   - Definir objetivo, pilar, público e função do conteúdo.

3. `marketing-psychology`
   - Melhorar gancho, clareza, intenção de salvar/seguir e CTA ético.

4. `social-post-writer`
   - Criar estrutura completa de carrossel, legenda ou roteiro.

5. `humanize-writing`
   - Retirar linguagem genérica, exagerada ou robótica.

6. `creative-production:generative-polish`
   - Definir direção visual e separar geração criativa de elementos que exigem precisão.

7. `imagegen`
   - Gerar imagens ou peças quando solicitado.

8. `remotion:remotion-best-practices`
   - Aplicar texto, legendas, CTA e animação em Reels.

9. `notion:notion-knowledge-capture`
   - Organizar a versão aprovada no espaço correto.

## Revisão obrigatória de português

Todo conteúdo deve passar por revisão antes de ser salvo ou enviado:

- acentuação;
- concordância;
- pontuação;
- ortografia;
- nome da empresa;
- contatos;
- coerência entre título e corpo;
- consistência de caixa alta e caixa normal.

Não remover acentos para facilitar prompts. Textos exibidos nas artes devem ser escritos em português correto.

## Fluxo para carrossel

1. Definir pauta, objetivo, público e pilar.
2. Criar copy de até cinco slides.
3. Revisar o português.
4. Definir função visual de cada slide:
   - capa editorial;
   - educativo;
   - checklist;
   - comparativo;
   - CTA.
5. Escolher tipografia, material dominante e composição.
6. Preencher o prompt correspondente.
7. Gerar a primeira versão.
8. Revisar texto, logo, composição, contraste e restrições.
9. Rejeitar qualquer peça com erro de português ou prova falsa.
10. Salvar a versão aprovada e registrar no Notion.

## Fluxo para Reels

1. Criar roteiro de até 30 segundos.
2. Revisar fala, texto de tela e CTA.
3. Gerar imagem ou vídeo base sem texto principal.
4. Usar o Design System para definir fontes, cores e enquadramento.
5. Aplicar texto e legendas no Remotion.
6. Verificar leitura no celular e áreas seguras.
7. Renderizar e revisar antes de aprovar.

## Separação de responsabilidades

### GPT Image 2 pode gerar

- fotografia conceitual;
- ambientes;
- texturas;
- composição exploratória;
- iluminação;
- primeira versão de peças com texto curto.

### Aplicar ou revisar de forma controlada

- logo;
- contatos;
- dados;
- CTAs;
- textos longos;
- antes/depois;
- claims;
- prova social.

## Estrutura de pastas

```text
D:\Bertel\
  brand-system\
    00_Fontes_e_Evidencias.md
    01_Bertel_Brand_System.md
    02_Bertel_Design_System.md
    03_Bertel_Prompt_System.md
    04_Workflow_Producao.md
    05_Bertel_Brand_Designer.md
  prompts\
    carrossel\
    reels\
  output\
    capas\
    posts\
    reels\
```

## Organização no Notion

A página-mãe da Bertel deve reunir:

- Fontes e evidências;
- Brand System;
- Design System;
- Prompt System;
- Workflow de Produção;
- Calendários editoriais;
- Produção de conteúdo;
- Assets;
- Entregas ao cliente;
- Histórico e aprendizados.

Páginas internas permanecem privadas. Entregas ao cliente só são publicadas quando solicitado.

## Restrições permanentes

- Não usar Vercel neste fluxo.
- Não alterar o site oficial.
- Não misturar Bertel com Salomão Serviços.
- Não publicar prova falsa.
- Não inventar obra, equipe, cliente, depoimento ou antes/depois.
- Não aprovar conteúdo com erro de português.
- Não transformar percepção premium em promessa de perfeição.
