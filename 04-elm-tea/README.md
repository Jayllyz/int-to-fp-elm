Ce TP vous introduit l'architecture Elm ("The Elm Architecture" abrégée "TEA").

1. Lire le code source dans `src/Main.elm` et essayer de prédire le comportement du programme.
2. Lancer Elm reactor (en étant dans le dossier `04-elm-tea`):

   ```
   elm reactor
   ```

   et vérifier que le programme se comporte comme vous l'espériez !

3. Quel rôle a le type `Msg` ? Et le type `Model`? À quoi sert `init` ?
   `view` ? Et `update` ? Assurez vous de comprendre les annotations de types
   au-dessus de ces fonctions.
   -> Msg : énumération des messages (evenements) possibles
   -> Model : structure de données
   -> init : fonction qui initialise le model
   -> view : fonction qui affiche le model
   -> update : fonction qui met à jour le model en fonction du message

4. Rajouter un bouton "Remise à zéro" qui remet le compteur à zéro lorsqu'on clique dessus.
5. Contempler le schéma `tea.png` à côté de ce README et faites le lien avec
   ce que vous avez vu précédemment.
   -> Schéma de l'architecture Elm (ordre des événements)
6. Que fait la syntaxe `{ model | count = 5 }` ? Le record `model` est-il modifié ?
    -> Permet de modifier le champ count du record model mais le record model n'est pas modifié il est recréé
