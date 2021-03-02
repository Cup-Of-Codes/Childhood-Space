# Childhood-Space


Childhood Space it is a place which children can learn & have fun at same time.

**Thursday Feb 25** : We suggest a lot of ideas for this project , every one have his idea then we voting to the best . It was *Childhood Space* , After that we decide what features that will be in our website : 
- **Learning** : The child can learn and playing simple games to learn.
  - Math Learning
  - English Learning
- **Games** : The child can play games and learning to concentration and mind Blowing
  - Memory Game
  - Shapes Game

**Weekend** :
- *Sara* did Home page and style it .
- *Mohammad & Anagheem* did Memory game .
- *Khalid & Malak* Nothing

**Sunday Feb 28** , Today is the hardest day So :
- *Sara* add some images and form to home page , edit some styling , help anagheem to style memory game.
- *Mohammad & Anagheem* add levels to memory game.
- *Khalid & Malak* start work with learning page ,add:
  - learning option : Math or English
  - Math lessons Option : Numbers Lesson, Addition lesson or Substraction lesson


**Monday Mar 1** :
- *Sara* : Edit home page , add background , add popup message , work in contact us page and add some styling.
- *Mohammad* : help Anaghemm & Khalid to edit memory game. add color lesson with Malak.
- *Malak* : add Number & substraction lesson , work with mohammad to add English learning , add colors lesson & Sense lessson.
- *Anagheem* : work with khaled to edit Memory game , and trying to make shapes game.
- *Khalid* : work with Anagheem to edit Memory game

**Tuesday Mar 2**:
- *Sara* : continue stayling home page , work with Malak in Shape game.
- *Anagheem* : edit Memory game , add styling to game page , work with malak in shape game.
- *mohammad* : edit learning page styling , work with malak in shape game.
- *Malak* : work in shape game with all group member , help others on styling , and solve conflicts.
- *khalid* : Nothing.


Wireframes :
![home_wireframe](img/home-wireframe.PNG)
![game_wireframe](img/game-wireframe.png)
![learning_wireframe](img/learning-wireframe.png)

userStories :
- As Mia , I want to learn Math So I can have high marks in school.
- As Ryan , I want to have fun when I'm learning English
- As Mom , I want to find easy way to learn my child
- As Dad , I want to increase my children growth mindset by catching the memory game
- as ali, I want to find that's help me to know the shapes name in english So I can solve math exam.

**functionality :**
- *Home page* : 
  - We have `form` on home page the child should put his name and will welcome message will appear.
  - `save()` : will take the name from `form` and save it inside local storage.
  - `myFunction()` : responsible for showing popup message.

- *Game* :
  - We have two games :
    - Memory game :
      -  
    - Shapes game :
      - HTML : We have empty div for this game & everything adding dynamiclly using JS.
      - JS : We have two arrays which `shapesName` & `shapesPic` stored the shapes names and shapes picture.
      - `playShapeGame(event)` : this function for handling on click listener , it's calling another function which is `addRandomImag()`
      - `addRandomImage()` : it's generate a random question and Random three shape images .
      - `checkShape()`: is check if the child choose the correct answer from three images thats we have , if he answer correct then we will generate a new question and new three images .

- *Learning* :

  - We have two types of learning *Math Learning* and *English Learning*.
  - **Lesson** is a constructor Object it's describe lesoon type , and it's image.
  - **LessonElement** each lesson may have ELemnts such as Number lesson hava Numbers , som Lesson Elemnt describe any elements may we have it inside lesson , it has `elementName` & `img`.
  - We have Two type of learning :
    - Math Learning : have three type of lessons
      - Numbers Lesson.
      - Addition Lesson.
      - Substraction Lesson.
    - English Learning :
      - Colors Lesson.
      - Senses Lesson.
  - `chooseOne()` : is an event listener function, if the child choose Math learning will show math lessons and if he choose English learning will show english lessons.
  - `chooseLesson()` : after the child choose the type of learning will choose the lesson , this function responsible fo showing him the lesson that he want.
  - `chooseNumber()`: if the user choose number lesson will appear 10 numbers  for him and if he click to a specific number this function will show the image of it.
  - `chooseColor()` : if the user choose color lesson he will have like a small game with color , there is a random img of color will appear & the child should choose the correct color name .


Group Members :
- Malak Al-momani (leader)
- Khaled Bassam
- Sara Altaweel 
- Mohammad Alkhazali

- Anagheem Bayan 



201 Final Project
