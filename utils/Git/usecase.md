# Comandos basicos para uso do git no versionamento de um projeto #

## Principais Comandos ##

- Cria um diretório .git e passa a disponibilizar o versionamento
*seus diretórios e arquivos só seram monitorados com os comandos apropriados*

`git init`

---

- Verifica o status dos arquivos a saber:

    - M = modificado
    - A = adicionado
    - D = deletado
    - R = renomeado
    - C = copiado
    - U = atualizado porém sem merge

`git status`

---

- Adiciona diretorios e arquivos ao stage

 > **stage**: o a condição ou local onde arquivos e diretórios ficam quando estão sendo monitorados com snapshots ("fotografias") do estados naquele determinado momento estão sendo registradas
 > quando usamos dessa forma estamo incluindo tudo que foi modificado no stage
 *na maioria dos casos usamos o comando abaixo para adicionar arquivo e diretórios ao stage, isso vale mesmo que estejamos acrescentando um único arquivo, o comando abaixo é o mais rápido.*

`git add .`

---

- Adiciona as modificações de forma permanente

 > após colocado no stage precisamos usar o comando abaixo afim de registrar as snapshots feita nos arquivos e diretórios adicionados ao stage, só então eles estão escritos na pasta .git

`git commit -m "sua msg sobre a modificação/criação"`

---

- Verifica se existe um repositório remoto, local na nuvem onder pode existir uma cópia do projeto local

 > retorna o endereço do repositório remoto, caso contrário retorna linha vazia.

`git remote -v`

---
