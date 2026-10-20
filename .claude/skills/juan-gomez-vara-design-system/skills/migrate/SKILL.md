---
name: juan-gomez-vara-migrate
description: "Replace hardcoded hex and px in Juan Gomez Vara with design tokens. Use when migrating existing UI onto this system."
---

# Juan Gomez Vara — migrate to tokens

1. Read `references/tokens.md` and `references/foundations.md`. Those values are the map.
2. For a hex, find the **semantic** role that carries it in the current theme. Do not alias a primitive if a role exists.
3. For a px, find the spacing / radius / size step. Prefer a role (`radius-action`) when the catalog has one.
4. Run `node checkers/token-lint.mjs <files>` — it only knows **this** system's tokens. A hit is a leftover hardcoded value.
5. Unknown hex/px: ask which existing role to use. Do not add a new token in code.
