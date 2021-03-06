# Considerações gerais sobre Git #

Este material tem como objetivo proporcionar uma introdução com os comandos básicos para configurar git e usar as príncipais funções de versionamento.

## Configurar Git ##

verifique se o Git está instalado:

`git --version`

- Configuração global de usuário:

```bash
git config --global user.name "<Seu Nome >"

git config --global user.email "<Seu email>"
```

---

- Configurações adicionais opcional

```bash
git config --global color.ui auto`

git config --global merge.conflictstyle diff3
```

---

- Confira os dados usando o camando

`git config --list`

__

ao final para sair digite "q"

- Para verificar o usuáro registrado use o comando:

`git config user.name`

- Para verificar o email registrado use o comando:

`git config user.email`

> Configurar git para um repositório específico

`git config user.name "<Seu Nome>"`

`git config user.email "<Seu email>"`

 No caso de configurar o git para um uso específico ele deverá ser o mesmo do repositório e não ficará gravado nas configurações globais

---
