
/* Se puede crear el repositorio desde Github luego se clona al PC y después se sube tod. el trabajo con gitpush
git init: Iniciarlizar nuevo repositorio
git add (archivo): Pasa de untracked a listo para commit (staged)
git add . : Agrega todos los archivos de la lista aun no commiteados
git commit -m "Mi mensaje": Realiza un commit
git clone (url. github): Clona un repositorio desde github
git push origin master: Empujar los cambios a la nube
git add ArchivoEjemplo.js: Crea el archivo pero no lo guarda de forma definitiva , lo almacena en (string area)
git pull: Sirve para recibir cambios de repositorio remoto a local.
git rm –cached: Mueve los archivos que le indiquemos al estado Untracked
git rm –force: Elimina los archivos de Git y del disco duro. Git guarda el resgitro de la existencia de los archivos, por lo que podremos recuperarlos si es necesario 

/* Analizar cambios en los archivos:

git log: muestra la lista de commits realizados
git show: nos muestra los cambios que han existido sobre un archivo y es muy útil para detectar cuando se  produjeron ciertos cambios, qué se rompió y como lo podemos solucionar. Pero podemos ser mas detallados. 
git diff: Nos muestra la diferencia entre una versión y otra, no ncesariamento todos lso cambios desde la creación (Gif diff commitA commitB)

/* Branch y Merge 
Las ramas o branches son la forma de hacer cambios en nuestro proyecto sin afectar el flujo de trabajo de la rama principal. Esto porque queremos trabajar en una parte muy especifica de la aplicación o simplemente experimentar. La cabecera o head representan la rama y el commit de esa rama donde estamos trabajando. Por defecto, esta caecera aparecerá emn el ultimo commit de nuestra rama principal. Pro podemos  cambiarlo al crear una rama (git brahch rama, git checkout -b rama) o movernos en el tiempo a cualquier otro commit de cualquier otra rama con los comandos (git reset id-commit, git checkout rama-o-id-commit)

git branch “nombre de rama” : Crea una  rama
git checkout “nombre de la rama”: Cambiarse de rama 

