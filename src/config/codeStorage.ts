import { reactive } from "vue";
export default function () {
  const codeBox = reactive({
    JavaScript: {
      初級: {
        1: `
      console.log(10);
      console.log(typeof 10);
      console.log("a");
      console.log("Hello World");
      console.log(typeof "a");
      console.log(typeof "Hello World");
      console.log(true);
      console.log(typeof true);
      console.log(typeof "false");
      `,
        2: `
      console.log(12 + 5);
      console.log(12.0 + 5.0);
      console.log(12 - 5);
      console.log(12.0 - 5.0);
      console.log(12 * 5);
      console.log(12.0 * 5.0);
      console.log(12 / 5);
      console.log(12.0 / 5.0);
      console.log(1 / 30000000);
      console.log(1 / 0);
      console.log(0 / 0);
    `,
        3: `
      console.log(33 % 5);
      console.log(10 % 2);
      console.log(3 ** 4);
      console.log(2 ** 0);
      console.log(3 == 3);
      console.log(3 == 2);
      console.log(3 != 3);
      console.log(3 != 2);
      console.log(3 > 2);
      console.log(2 > 3);
      console.log(3 < 2);
      console.log(2 < 3);
    `,
        4: `
      console.log("abcde"[4]);
      console.log("Seafood".length);
      console.log("abcd"["abcd".length - 1]);

      let letter = "a";
      let height = 175;
      const MY_NUMBER = 41984980;
      letter = "c";
      height = 190;
      console.log(letter);
      console.log(height);
      console.log(MY_NUMBER);
      `,
        5: `
      let incomingAnimals = 15;
      let animalsInShelter = 10 + incomingAnimals;
      console.log(animalsInShelter);

      let onlineUser = 30 ;
      let onlinePaidUser = 3;
      onlineUser = onlineUser + onlinePaidUser;
      console.log(onlineUser);

      function triangleArea(width, height) {
        return width * height / 2;
      }

      console.log(triangleArea(5,4));
      `,
        6: `
      function square(number){
        return number * number;
      }
      console.log(square(3));

      function stringFirst(s){
        return s[0];
      }
      console.log(stringFirst("Recursion"));

      function getInitial(lastName, firstName){
        return lastName[0] + '.' + firstName[0];
      }
      console.log(getInitial("Steve", "Jobs"));
      `,
        7: `
      function hotelAccommodationFee(price, day) {

        const CLEANING_FEE = 20;
        const FOOD_BILL = 30;
        const TAX_RATE = 0.1;
        const TOTAL = day * (price + CLEANING_FEE + FOOD_BILL);

        return TOTAL * (1 + TAX_RATE);
      }

      console.log(hotelAccommodationFee(80,5));
      `,
        8: `
      function isEven(x) {
        return x % 2 == 0;
      }
      console.log(isEven(10));

      function isLongerThan5(s) {
        return s.length > 5;
      }
      console.log(isLongerThan5("abcdef"));

      function languageSetting(country) {
        if (country == "Japan") {
            return "ja";
        } else {
            return "en";
        }
      }

      console.log(languageSetting("Japan"));
      `,
        9: `
      function canSeeMovie(age){
        if(age >= 13) return true;
        else return false;
      }

      console.log(canSeeMovie(20));

      function countWord(word) {
          if(word == "") {
              return word.length -1;
          }
          return word.length;
      }

      console.log(countWord("hello"));
      `,
        10: `
      console.log(Math.floor(3.3));
      console.log(Math.ceil(10.9));
      console.log(Math.pow(3,4));
      console.log(Math.sqrt(2));

      function pythagoreanTheorem(a,b){
          return Math.sqrt(a*a + b*b);
      }

      console.log(pythagoreanTheorem(3,4));

      `,
        11: `
      let lastName = "Albert";
      console.log(lastName.toUpperCase());
      console.log(lastName.toLowerCase());

      let sentence = "I will go hiking near a ranch in Oregon.";
      console.log(sentence.substring(2,5));
      console.log(sentence.substring(7,sentence.length));
      `,
      },
      中級: {
        1: `
      function forceNewtons(kg,mpss){
          return kg * mpss;
      }
      console.log(forceNewtons(80, 9.807));

      function planetGravityMpss(planet){
        if(planet == "Earth"){
            return 9.80665;
        }

        if(planet == "Jupiter"){
            return 24.79;
        }

        if(planet == "Neptune"){
            return 11.15;
        }

        return 0;
      }

      console.log(planetGravityMpss("Neptune"));
      console.log(forceNewtons(80, 9.80665));
      `,
        2: `
      console.log(Math.floor(Math.random() * 7));
      let s = "Hello";
      console.log(s[Math.floor(Math.random() * s.length)]);

      console.log("A".codePointAt(0));
      console.log("z".codePointAt(0));

      console.log("%".codePointAt(0));
      console.log("?".codePointAt(0));

      let s = "abcde";
      console.log(s.codePointAt(10));

      console.log(String.fromCodePoint(65));
      `,
        3: `
      function randomInteger(min, max){
          return Math.floor(Math.random() * (max - min) + min);
      }

      function isCharCodeEven(stringChar){
          let isEven = false;
          if(stringChar.codePointAt(0) % 2 === 0){
              isEven = true;
          }
          return isEven;
      }

      function chosenCharacter(index, string){
          return "The char [" + string[index] + "] at index " + index;
      }

      function randomCharEvenOrOddDecomposed(s){
          let randomIndex = randomInteger(0, s.length);

          let message = chosenCharacter(randomIndex,s);

          if (isCharCodeEven(s[randomIndex])) {
              message += " is Even";
          } else {
              message += " is Odd"
          }

          return message;
      }

      console.log(randomCharEvenOrOddDecomposed("Don't tell me lies."));
      `,
        4: `
      function gcd(m, n) {

          if ((m % n) == 0){
              return n;
          } else {
              return gcd(n, m % n);
          }
      }

      console.log(gcd(44,242));

      function getGreatestDivisor(n){

        return getGreatestDivisorHelper(n, n-1);
      }

      function getGreatestDivisorHelper(n,k){
        if (n % k == 0){
            return k;
        }
        return getGreatestDivisorHelper(n,k-1);
      }

      console.log(getGreatestDivisor(12));
      `,
        5: `
      function userName(){
          let firstName = "Emily";
          let lastName = "Robertson";

          return firstName + " - " + lastName;
      }

      let firstName = "Masamune";
      let lastName = "Watanabe";

      function myFun(){
          console.log(firstName + " - " + lastName);

          firstName = "Fernando";
          lastName = "Yamato";
          console.log(firstName + " - " + lastName);

          console.log(userName());

          firstName = "Andy";
          lastName = "Jordan";
          console.log(firstName + " - " + lastName);
      }

      myFun();
      `,
        6: `
      function monsterAttackSwitchMenu(monster){
          let attack = 1000;
          let message = "'s attack is:";

          switch(monster) {
              case "Cyclops":
                  attack *= 1.8;
                  message = "Cyclops" + message + attack;
                  break;
              case "Ogre":
                  attack *= 2.5;
                  message = "Ogre" + message + attack;
                  break;
              default :
                  message = "Monster does not exist.";
          }
          return message;
      }

      console.log(monsterAttackSwitchMenu("Ogre"));
      `,
        7: `
      function summationForLoopIteration(n) {
          let total = 0;

          for (let i = 1; i <= n; i++){
              total += i;
          }

          return total;
      }

      console.log(summationForLoopIteration(10));

      function divideByCountIteration(divisor, n){
          let counter = 0;

          for(let temp = n; temp > 1; temp = temp/divisor){
              counter++;
          }

          return counter;
      }

      console.log(divideByCountIteration(2,64));
      `,
        8: `
      function countUpToNWhile(n){
          let i = 0;

          while(i < n){
              console.log(i);
              i++;
          }
      }

      countUpToNWhile(15);

      function summationWhileLoopIteration(n) {
          let total = 0;

          while(n >= 0){
              total += n;
              n--;
          }

          return total;
      }

      console.log(summationWhileLoopIteration(10));
      `,
        9: `
      function findLetter(sentence, letter){
          let found = false;
          let message = "Will we find [" + letter + "] in our message? ";

          for(let i = 0; i < sentence.length; i++){
              if(sentence[i] === letter[0]){
                  found = true;
                  break;
              }
          }

          return found ? message + "It looks like we found it!" : message + "Sadly, we did not find it.";
      }

      console.log(findLetter("It is a sunny day.", "a")):
      `,
        10: `
      class Person{
          constructor(firstName, lastName, heightM,weightKg, birthYear){
              this.firstName = firstName;
              this.lastName = lastName;
              this.heightM = heightM;
              this.weightKg = weightKg;
              this.birthYear = birthYear;
          }

          getFullName(){
              return this.firstName + " " + this.lastName;
          }

          getAge(){
              let currentYear = new Date().getFullYear();
              return currentYear - this.birthYear;
          }
      }

      let carly = new Person("Carly", "Angelo", 1.72, 85.5, 1996);
      console.log(carly.getFullName());
      `,
        11: `
      class Tax{
          constructor(name, federalTax, stateTax, localTax){
              this.name = name;
              this.federalTax = federalTax;
              this.stateTax = stateTax;
              this.localTax = localTax;;
          }
      }

      class DownloadableProduct{
          constructor(title, description, price, sizeMb, extension){
              this.title = title;
              this.description = description;
              this.price = price;
              this.sizeMb = sizeMb;
              this.extension = extension;
          }

          getFinalPrice(taxObject){
              return this.price * (1 + taxObject.federalTax + taxObject.stateTax + taxObject.localTax);
          }
      }
      `,
        12: `
      function printIntArray(intArr){
          for (let i = 0; i < intArr.length ; i++){
              console.log(intArr[i]);
          }
      }

      function printIntArray(intArr){
          for(let i = 0; i < intArr ; i++){
              console.log(intArr[i]);
          }
      }

      let arr1 = [40,3,22,-2,4,8];
      printIntArray(arr1);

      let arr1 = [40,3,22,-2,4,8];
      printIntArray(arr1);
      arr1[3] = 34;
      arr1[1] = 40;
      printIntArray(arr1);

      arr1[2] = 89;
      arr1[5] = 55;
      printIntArray(arr1);
      `,
        13: `
      let dArr = [2,3];

      dArr.unshift(3);
      dArr.unshift(3,43,5234,34);

      dArr.shift();

      dArr.splice(2, 1);

      dArr.unshift(343,343,232,12,23,-23,10);

      dArr.splice(Math.floor(dArr.length / 2), 0, 4);

      dArr.splice(Math.floor(dArr.length / 2), 1);
      dArr.splice(Math.floor(dArr.length / 2), 5);

      dArr.push(4);
      dArr.push(50);
      dArr.push(6,3,4,54);

      dArr.pop();

      for(let i = 0; i < 5; i++) {
          dArr.pop();
      }

      function printArray(intArr){
        let outputString = "[";
        for (let i = 0; i < intArr.length; i++) {
          outputString += intArr[i] + " ";
        }
        console.log(outputString + "]");
      }
      printArray(dArr);
      `,
        14: `
      let myPet = {
          "name":"fluffy",
          "species": "Pomeranian",
          "furColor": "Brown",
          "born": "2018/05/06",
          "favoriteFood": "Carrot sticks"
      }

      console.log(myPet);
      myPet["napTimes"] = "11:00am, 3:30pm, 9:00pm";
      `,
        15: `
      function listIntersection(targetList, searchList){
          let hashmap = {};
          let results = [];

          for(let i = 0; i < targetList.length; i++){
              hashmap[targetList[i]] = targetList[i];
          }

          for(let i=0; i < searchList.length; i++){
              if(hashmap[searchList[i]] !== undefined) results.push(searchList[i]);
          }

          return results;
      }

      console.log(listIntersection([1,2,3,4,5,6],[1,4,4,5,8,9,10,11]));
      `,
        16: `
      function fizzBuzz(x){
          fizzBuzzList = [];

          for (i=1; i < x; i++){
              if (i % 3 == 0 && i % 5 == 0){
                  fizzBuzzList.push("fizz buzz");
              } else if (i % 3 == 0){
                  fizzBuzzList.push("fizz");
              } else if (i % 5 == 0){
                  fizzBuzzList.push("buzz");
              } else {
                  fizzBuzzList.push("-" + i + "-");
              }
          }
          return fizzBuzzList;
      }

      function printList(arr){
          for(i = 0; i < arr.length ; i++){
              console.log(arr[i]);
          }
      }

      printList(fizzBuzz(45));
      `,
      },
      上級: {
        1: `
      class Node{
          constructor(data){
              this.next = null;
              this.data = data;
          }
      }

      class SinglyLinkedList{
          constructor(node){
              this.head = node;
          }
      }

      let node1 = new Node(4);
      let node2 = new Node(65);
      let node3 = new Node(24);

      let numList = new SinglyLinkedList(node1);

      numList.head.next = node2;
      numList.head.next.next = node3;

      let currentNode = numList.head;
      while(currentNode !== null){
          console.log(currentNode.data);
          currentNode = currentNode.next;
      }
      `,
        2: `
      class Node{
            constructor(data){
                this.next = null;
                this.data = data;
            }
        }

        class SinglyLinkedList{
            constructor(arr){
                this.head = arr.length > 0 ? new Node(arr[0]) : new Node(null);

                let currentNode = this.head;
                for(let i = 1; i < arr.length; i++){
                    currentNode.next = new Node(arr[i]);
                    currentNode = currentNode.next;
                }
            }

            at(index){
                let iterator = this.head;
                for(let i = 0; i < index; i++){
                    iterator = iterator.next;
                    if(iterator == null) return null;
                }
                return iterator;
            }
        }

        let numList = new SinglyLinkedList([35,23,546,67,86,234,56,767,34,1,98,78,555]);

        console.log(numList.at(2).data);
        console.log(numList.at(12).data);
      `,
        3: `
      class SinglyLinkedList{
          constructor(arr){
              this.head = arr.length > 0 ? new Node(arr[0]) : new Node(null);

              let currentNode = this.head;
              for(let i = 1; i < arr.length; i++){
                  currentNode.next = new Node(arr[i])
                  currentNode = currentNode.next
              }
          }

          at(index){
              let iterator = this.head;
              for(let i = 0; i < index; i++){
                  iterator = iterator.next;
                  if(iterator == null) return null;
              }

              return iterator;
          }
      }

      let numList = new SinglyLinkedList([35,23,546,67,86,234,56,767,34,1,98,78,555]);

      console.log(numList.at(2).data);
      `,
        4: `
      class Node{
          constructor(data){
              this.data = data;
              this.prev = null;
              this.next = null;
          }
      }

      class DoublyLinkedList{
          constructor(arr){
              if(arr.length <= 0){
                  this.head =  new Node(null);
                  this.tail = this.head;
                  return;
              }

              this.head = new Node(arr[0]);
              let currentNode = this.head;
              for(let i = 1; i < arr.length; i++){
                  currentNode.next = new Node(arr[i]);
                  currentNode.next.prev = currentNode;
                  currentNode = currentNode.next;
              }

              this.tail = currentNode;
          }
      }

      let numList = new DoublyLinkedList([35,23,546,67,86,234,56,767,34,1,98,78,555]);

      console.log(numList.head.data);
      console.log(numList.tail.prev.data);
      `,
        5: `
      class Node{
          constructor(data){
              this.data = data;
              this.next = null;
          }
      }

      class Stack{
          constructor(){
              this.head = null;
          }

          push(data){
              let temp = this.head;
              this.head = new Node(data);
              this.head.next = temp;
          }

          pop(){
              if(this.head == null) return null;
              let temp = this.head;
              this.head = this.head.next;
              return temp.data;
          }

          peek(){
              if(this.head === null) return null;
              return this.head.data;
          }
      }

      let s = new Stack();

      s.push(2);
      console.log(s.peek());

      s.push(4);
      s.push(3);
      s.push(1);
      s.pop();
      console.log(s.peek());
      `,
        6: `
      class Queue{
          constructor(){
              this.head = null;
              this.tail = null;
          }

          peekFront(){
              if(this.head == null) return null;
              return this.head.data;
          }

          peekBack(){
              if(this.tail == null) return this.peekFront();
              return this.tail.data;
          }

          enqueue(data){
              if(this.head == null){
                  this.head = new Node(data);
              }
              else if(this.tail == null){
                  this.tail = new Node(data);
                  this.head.next = this.tail;
              }
              else{
                  this.tail.next = new Node(data);
                  this.tail = this.tail.next;
              }
          }

          dequeue(){
              if(this.head == null) return null;
              let temp = this.head;

              if(this.head.next == null){
                  this.head = null;
                  this.tail = null;
              }
              else this.head = this.head.next;

              return temp.data;
          }
      }
      `,
        7: `
      console.log(function(){ return "A new world"});

      console.log(function(){ return 4 + 5}());

      let p = 40;
      console.log(function(){ return p + 10}());//50
      console.log(function(){ return "P is " + p}() + " ......");

      console.log("squaring..." + function(x){return x*x}(4));

      console.log("looping..." + function(x){
        let sheeps = "";
        for(let i = 1; i <= x; i++) sheeps += i + "sheep~";
        return sheeps;
      }(5));

      console.log((()=>4+4)());

      console.log((x=>x+3)(4));

      console.log(((x,y)=>x+y)(10,15)); //25

      console.log(((a,b)=>{
        a = Math.pow(a,2);
        b = Math.pow(b,2);
        return Math.sqrt(a+b);
      })(3,4));
      `,
        8: `
      function functionInputTest(f){
        return f() + ".... called from another function!"
      }

      console.log(functionInputTest(function(){return "hello world"}))

      function fSquaredX(f, x){
        return f(x*x);
      }

      console.log(fSquaredX(function(a){ return a + 30}, 5));

      let callable1 = function(p){return "p is " + p};

      console.log(fSquaredX(callable1,10));
      `,
        9: `
      function helloFunction(){
        return function(){return "hello world"};
      }

      console.log(helloFunction());

      console.log(helloFunction()());
      let outputF = helloFunction();
      console.log("Running a function that was generated...." + outputF());

      function constantMultiplication(x){
        return function(y){return y*x};
      }

      let multiplyBy4 = constantMultiplication(4);
      console.log(multiplyBy4(3));
      console.log(multiplyBy4(10));
      console.log(multiplyBy4(5));
      `,
        10: `
      function synchronousFunction(f, x){
        let results = f(10);
        return f(x) + f(x * x) + results;
      }

      console.log(synchronousFunction(function(x){
        console.log("Call on " + x);
        return x/2;
      }, 254));
      `,
        11: `
      function myMap(f, list){
        let results = [];
        for(let i = 0; i < list.length; i++) results.push(f(list[i]));
        return results;
      }

      let nums = [1,2,3,4,5,6,7];
      console.log(nums);
      console.log(myMap(x=>x*x, nums));

      console.log(nums.map(x=>x*x));

      function myFilter(predicateF, list){
        let results = [];
        for(let i = 0; i < list.length; i++){
            if(predicateF(list[i]) === true) results.push(list[i]);
        }

        return results;
      }

      let list1 = [1,2,3,4,5,6,7,8,9,10]
      console.log(myFilter(x=>x%2!==0, list1));

      console.log(list1.filter(x=>x%2!==0));
      `,
        12: `
      function myReduce(reduceCallback, list, initial){
        let lastResult = initial;
        for(let i = 0; i < list.length; i++){
            let result = reduceCallback(list[i], lastResult);
            lastResult = result;
        }
        return lastResult;
      }

      let list1 = [1,2,3];
      let list2 = [1,2,3,4,5,6,7,8,9,10];

      console.log(myReduce((x,total)=>x*total, list1, 1));

      console.log(myReduce((x,total)=>x*total, list2, 1));

      console.log(list2.reduce((total,x)=>total*x));
      console.log(list2.reduce((total,x)=>total*x, 1));
      `,
      },
    },
    Java: {
      初級: {
        1: `
      System.out.println(10);
      System.out.println(0b1000);
      System.out.println(3.14);
      System.out.println('a');
      System.out.println("a");
      System.out.println("Hello World");
      System.out.println(true);
      System.out.println(false);
        `,
        2: `
      System.out.println(12 + 5);
      System.out.println(12.0 + 5.0);
      System.out.println(12 - 5);
      System.out.println(12.0 - 5.0);
      System.out.println(12 * 5);
      System.out.println(12.0 * 5.0);
      System.out.println(12 / 5);
      System.out.println(12.0 / 5.0);
      System.out.println(1 / 30000000);
      System.out.println(1.0 / 30000000);
      `,
        3: `
      System.out.println(33 % 5);
      System.out.println(10 % 2);
      System.out.println(21 % 2 * 8);
      System.out.println(21 - 2 % 2);
      System.out.println(3 == 3);
      System.out.println(3 == 2);
      System.out.println(3 != 3);
      System.out.println(3 != 2);
      System.out.println(3 > 2);
      System.out.println(2 > 3);
      System.out.println(3 < 2);
      System.out.println(2 < 3);
    `,
        4: `
      System.out.println("abcde".charAt(4));
      System.out.println("Seafood".length());
      System.out.println("abcd".charAt("abcd".length() - 1));
      char letter = 'a';
      final int MY_NUMBER = 41984980;
      letter = 'c';
      System.out.println(letter);
      System.out.println(MY_NUMBER);
      `,
        5: `
      int incomingAnimals = 15;
      int animalsInShelter = 10 + incomingAnimals;
      System.out.println(animalsInShelter);

      public static double triangleArea(int width, int height) {
          return width * height / 2;
      }
      System.out.println(triangleArea(5,4));
      `,
        6: `
      public static int square(int number){
          return number * number;
      }
      System.out.println(square(3));

      public static char stringFirst(String s){
          return s.charAt(0);
      }
      System.out.println(stringFirst("Recursion"));
      `,
        7: `
      public static double hotelAccommodationFee(int price, int day) {

          final int CLEANING_FEE = 20;
          final int FOOD_BILL = 30;
          final double TAX_RATE = 0.1;
          final int TOTAL = day * (price + CLEANING_FEE + FOOD_BILL);

          return TOTAL * (1 + TAX_RATE);
      }
      System.out.println(hotelAccommodationFee(80,5));
      `,
        8: `
      public static String languageSetting(String country) {
        if (country == "Japan") return "ja";
        else return "en";
      }

      System.out.println(languageSetting("Japan"));
    `,
        9: `
      public static String firstLastCharacter(String word){
          if(word.length() == 0){
              return "Type random words";
          }
          else{
              return word.charAt(0) + " " + word.charAt(word.length()-1);
          }
      }

      System.out.println(firstLastCharacter("lunch"));
    `,
        10: `
      System.out.println(Math.floor(3.3));
      System.out.println(Math.ceil(3.3));
      System.out.println(Math.pow(3,4));

      public static double pythagoreanTheorem(double a, double b){
          return Math.sqrt(a*a + b*b);
      }

      System.out.println(pythagoreanTheorem(3,4));

      `,
        11: `
      String lastName = "Albert";
      System.out.println(lastName.toUpperCase());
      System.out.println(lastName.toLowerCase());

      String sentence = "I will go hiking near a ranch in Oregon.";
      System.out.println(sentence.substring(2,10));
      `,
      },
      中級: {
        1: `
      public static double planetGravityMpss(String planet){
          if(planet == "Earth"){
              return 9.80665;
          }

          if(planet == "Jupiter"){
              return 24.79;
          }

          if(planet == "Neptune"){
              return 11.15;
          }

          return 0;
      }

      System.out.println(forceNewtons(80, 9.807));
      System.out.println(planetGravityMpss("Neptune"));
      `,
        2: `
      String s = "Hello";
      System.out.println(s.charAt((int)Math.floor(Math.random() * s.length())));

      System.out.println("A".codePointAt(0));
      System.out.println("z".codePointAt(0));

      System.out.println("%".codePointAt(0));
      System.out.println("?".codePointAt(0));

      String s = "abcde";
      System.out.println(s.codePointAt(1));

      System.out.println((char)65);
      `,
        3: `
      public static String chosenCharacter(int index, String string){
          return "The char [" + string.charAt(index) + "] at index " + index;
      }

      public static String randomCharEvenOrOdd(String s){
          int randomIndex = randomInteger(0, s.length());

          String message = chosenCharacter(randomIndex,s);

          if (isCharCodeEven(s.charAt(randomIndex))) {
              message += " is Even";
          } else {
              message += " is Odd";
          }

          return message;
      }

      System.out.println(randomCharEvenOrOdd("Don't tell me lies."));
      `,
        4: `
      public static int gcd(int m, int n) {

          if ((m % n) == 0){
              return n;
          } else {
              return gcd(n, m % n);
          }
      }

      System.out.println(gcd(44,242));

      public static int getGreatestDivisor(int n){

          return getGreatestDivisorHelper(n, n-1);
      }

      public static int getGreatestDivisorHelper(int n, int k){
          if (n % k == 0){
            return k;
          }
          return getGreatestDivisorHelper(n,k-1);
      }

      System.out.println(getGreatestDivisor(12));
      `,
        5: `
      public static String firstName = "Masamune";
      public static String lastName = "Watanabe";

      public static String userName(){
          String firstName = "Emily";
          String lastName = "Robertson";

          return firstName + " - " + lastName;
      }

      System.out.println(firstName + " - " + lastName);

      String firstName = "Fernando";
      String lastName = "Yamato";
      System.out.println(firstName + " - " + lastName);

      System.out.println(userName());
      `,
        6: `
      public static String monsterAttackSwitchMenu(String monster){
          int attack = 1000;
          String message = "'s attack is:";

          switch(monster) {
              case "Cyclops":
                  attack *= 1.8;
                  message = "Cyclops" + message + attack;
                  break;
              case "Ogre":
                  attack *= 2.5;
                  message = "Ogre" + message + attack;
                  break;
              default :
                  message = "Monster does not exist.";
          }
          return message;
      }
      System.out.println(monsterAttackSwitchMenu("Ogre"));
      `,
        // ループ再帰
        7: `
      public static int summationForLoopIteration(int n) {
          int total = 0;

          for(int i = 1; i <= n; i++){
              total += i;
          }

          return total;
      }

      System.out.println(summationForLoopIteration(10));

      public static int divideBy2CountIteration(int n){
          int counter = 0;

          for(int temp = n; temp > 1; temp = temp/2){
            counter++;
          }

          return counter;
      }

      System.out.println(divideBy2CountIteration(64));
      `,
        8: `
      public static void countUpToNWhile(int n){
          int i = 0;

          while(i < n){
              System.out.println(i);
              i++;
          }
      }

      countUpToNWhile(15);

      public static int summationWhileLoopIteration(int n) {
          int total = 0;

          while(n >= 0){
              total += n;
              n--;
          }
          return total;
      }

      System.out.println(summationWhileLoopIteration(10));
      `,
        // break,continue
        9: `
      public static String findLetter(String sentence, char letter){
          boolean found = false;
          String message = "Will we find [" + letter + "] in our message? ";

          for(int i = 0; i < sentence.length(); i++){
              if(sentence.charAt(i) == letter){
                  found = true;
                  break;
              }
          }

          return found ? message + "It looks like we found it!" : message + "Sadly, we did not find it.";
      }

      System.out.println(findLetter("It is a sunny day.", 'a'));
      `,
        // オブジェクト
        10: `
      class Person{
          public String firstName;
          public String lastName;
          public int birthYear;

          public Person(String firstName, String lastName, int birthYear){
              this.firstName = firstName;
              this.lastName = lastName;
              this.heightM = heightM;
              this.weightKg = weightKg;
              this.birthYear = birthYear;
          }

          public String getFullName(){
              return this.firstName + " " + this.lastName;
          }

          public int getAge(){
              int currentYear = Calendar.getInstance().get(Calendar.YEAR);
              return currentYear - this.birthYear;
          }
      }
      `,
        // オブジェクト２
        11: `
      class Tax{
          public String name;
          public double federalTax;
          public double stateTax;
          public double localTax;

          public Tax(String name, double federalTax, double stateTax, double localTax){
              this.name = name;
              this.federalTax = federalTax;
              this.stateTax = stateTax;
              this.localTax = localTax;;
          }
      }
      `,
        // 配列
        12: `
      public static void printIntArray(int intArr[]){
          for(int i = 0; i < intArr.length; i++){
              System.out.print(intArr[i] + " ");
          }
          System.out.println();
      }

      int[] arr = new int[6];
      printIntArray(arr);

      for(int i = 0; i < arr.length; i++){
          arr[i] = i;
      }

      int[] arr1 = new int[]{20,13,-12,2,5};
      printIntArray(arr1);

      arr1[3] = 34;
      arr1[1] = 40;
      printIntArray(arr1);
      `,
        //動的配列
        13: `
      public static void printArrayList(ArrayList<Integer> intArr){
          for(int i = 0; i < intArr.size(); i++){
              System.out.print(intArr.get(i));
          }
          System.out.println();
      }

      ArrayList<Integer> dArr = new ArrayList<Integer> ();

      dArr.add(2);
      dArr.add(3);
      dArr.add(0, 3);
      dArr.add(1, 34);

      dArr.remove(0);

      dArr.set(1, 100);

      dArr.add((int)(Math.floor(dArr.size()/2)), 77);
      dArr.add(222);

      dArr.remove(dArr.size()-1);
      printArrayList(dArr);
      `,
        // 連想配列
        14: `
      Map<String, String> myPet = new HashMap<String, String>();
      myPet.put("name","fluffy");
      myPet.put("species", "Pomeranian");
      myPet.put("furColor", "Brown");
      myPet.put("born", "2018/05/06");
      myPet.put("favoriteFood", "Carrot sticks");

      System.out.println(myPet.get("name"));
      myPet.put("napTimes", "11:00am, 3:30pm, 9:00pm");
      System.out.println(myPet.get("napTimes"));
      `,
        // ハッシュマップキャッシング
        15: `
      public static ArrayList<Integer> listIntersection(int[] targetList, int[] searchList){
          HashMap<Integer, Integer> hashmap = new HashMap<>();
          ArrayList<Integer> results = new ArrayList<>();
          for(int i = 0; i < targetList.length; i++){
              hashmap.put(targetList[i], targetList[i]);
          }
          for(int i = 0; i < searchList.length; i++){
              if(hashmap.get(searchList[i]) != null) results.add(searchList[i]);
          }

          return results;
      }

      int[] targetList1 = {1,2,3,4,5,6};
      int[] searchList1 = {1,4,4,5,8,9,10,11};
      System.out.println(listIntersection(targetList1, searchList1));
      `,
        16: `
      public static ArrayList<String> fizzBuzz(int x){
          ArrayList<String> fizzBuzzArrayList = new ArrayList<String>();
          for (int i = 1; i < x; ++i) {
              if (i % 3 == 0 && i % 5 == 0) {
                  fizzBuzzArrayList.add("fizzBuzz");
              } else if (i % 3 == 0) {
                  fizzBuzzArrayList.add("fizz");
              } else if (i % 5 == 0) {
                  fizzBuzzArrayList.add("buzz");
              } else {
                  String s = String.format("-%d-", i);
                  fizzBuzzArrayList.add(s);
              }
          }
          return fizzBuzzArrayList;
      }

      ArrayList<String> fizzBuzzArrayList = fizzBuzz(45);

      printList(fizzBuzzArrayList);
      `,
      },
      上級: {
        1: `
      class Node {
          public int data;
          public Node next;

          public Node(int data) {
              this.data = data;
          }
      }

      class SinglyLinkedList{
          public Node head;

          public SinglyLinkedList(Node head){
              this.head = head;
          }
      }

      Node node1 = new Node(4);
      Node node2 = new Node(65);
      Node node3 = new Node(24);

      SinglyLinkedList numList = new SinglyLinkedList(node1);

      numList.head.next = node2;
      numList.head.next.next = node3;

      Node currentNode = numList.head;
      while(currentNode != null){
          System.out.println(currentNode.data);
          currentNode = currentNode.next;
      }
      `,
        2: `
      class Node{
          public int data;
          public Node next;

          public Node(int data){
              this.data = data;
          }
      }

      class SinglyLinkedList{
          public Node head;

          public SinglyLinkedList(int[] arr){
              this.head = arr.length > 0 ? new Node(arr[0]) : null;

              Node currentNode = this.head;
              System.out.print("[ ");
              System.out.print(currentNode.data + " ");
              for(int i = 1; i < arr.length; i++){
                  currentNode.next = new Node(arr[i]);
                  currentNode = currentNode.next;
                  System.out.print(currentNode.data + " ");
              }
              System.out.println("]");
          }

          public Node at(int index){
              Node iterator = this.head;
              for(int i = 0; i < index; i++){
                  iterator = iterator.next;
                  if(iterator == null) return null;
              }
              return iterator;
          }
      }
      `,
        3: `
      class SinglyLinkedList{
          public Node head;
          public int[] arr;

          public SinglyLinkedList(int[] arr){
              this.head = arr.length > 0? new Node(arr[0]) : null;
              this.arr = arr;

              Node currentNode = this.head;
              for(int i=1; i < arr.length;i++){
                  currentNode.next = new Node(arr[i]);
                  currentNode = currentNode.next;
              }
          }

          public Node at(int index){
              Node iterator = this.head;
              for(int i=0; i < index;i++){
                  iterator = iterator.next;
                  if(iterator == null) return null;
              }
              return iterator;
          }
      }

      int[] arr = new int[]{35,23,546,67,86,234,56,767,34,1,98,78,555};
      SinglyLinkedList numList = new SinglyLinkedList(arr);
      System.out.println(numList.at(2).data);
      `,
        4: `
      class Node{
          public int data;
          public Node prev;
          public Node next;

          public Node(int data){
              this.data = data;
          }
      }

      class DoublyLinkedList{
          public Node head;
          public Node tail;

          public DoublyLinkedList(int[] arr){
              if(arr.length <= 0){
                  this.head = null;
                  this.tail = this.head;
                  return;
              }

              this.head = new Node(arr[0]);
              Node currentNode = this.head;
              for(int i=1; i < arr.length; i++){
                  currentNode.next = new Node(arr[i]);
                  currentNode.next.prev = currentNode;
                  currentNode = currentNode.next;
              }
              this.tail = currentNode;
          }
      }

      int[] arr = new int[]{35,23,546,67,86,234};
      DoublyLinkedList numList = new DoublyLinkedList(arr);

      System.out.println(numList.head.next.prev.data);

      System.out.println(numList.tail.data);
      `,
        5: `
      class Node{
          public int data;
          public Node next;

          public Node(int data){
              this.data = data;
              this.next = null;
          }
      }

      class Stack {
          public Node head;

          public Stack(){
              this.head = null;
          }

          public void push(int data){
              Node temp = this.head;
              this.head = new Node(data);
              this.head.next = temp;
          }

          public Integer pop(){
              if (this.head == null) return null;
              Node temp = this.head;
              this.head = this.head.next;
              return temp.data;
          }

          public Integer peek(){
              if (this.head == null) return null;
              return this.head.data;
          }
      }

      Stack stack = new Stack();
      stack.push(2);
      System.out.println(stack.peek());

      stack.push(4);
      stack.push(3);
      stack.push(1);
      stack.pop();
      System.out.println(stack.peek());
      `,
        6: `
      class Queue{
          public Node head;
          public Node tail;

          public Queue(){
              this.head = null;
              this.tail = null;
          }

          public Integer peekFront(){
              if(this.head == null) return null;
              return this.head.data;
          }

          public Integer peekBack(){
              if(this.tail == null) return this.peekFront();
              return this.tail.data;
          }

          public void enqueue(int data){
              if(this.head == null){
                  this.head = new Node(data);
              }
              else if(this.tail == null){
                  this.tail = new Node(data);
                  this.head.next = this.tail;
              }
              else{
                  this.tail.next = new Node(data);
                  this.tail = this.tail.next;
              }
          }

          public Integer dequeue(){
              if(this.head == null) return null;
              Node temp = this.head;

              if(this.head.next == null){
                  this.head = null;
                  this.tail = null;
              }
              else this.head = this.head.next;

              return temp.data;
          }
      }
      `,
        7: `
      Supplier<String> lambda1 = () -> { return "A new world";};

      System.out.println(lambda1.get());

      Supplier<Integer> lambda2 = () -> { return 4+5;};
      System.out.println(lambda2.get());

      Integer p = 40;

      Supplier<Integer> lambda3 = () -> { return 4+p;};
      System.out.println(lambda3.get());
      Supplier<String> lambda4 = () -> { return "P is " + p;};
      System.out.println(lambda4.get());

      Function<Integer, Integer> squaredF = (x)->{ return x * x;};

      System.out.println("Squaring...." + squaredF.apply(4));
      `,
        8: `
      public static String functionInputTest(Supplier<String> func){
          return func.get() + ".... called from another function!";
      }

      public static Integer fSquaredX(Function<Integer, Integer> f, int x){
          int p = x * x;
          return f.apply(p);
      }

      public static String fSquaredX2(Function<Integer, String> f, int x){
          int p = x * x;
          return f.apply(p);
      }

      Supplier<String> myCallable = () -> {return "hello world";};
      System.out.println(myCallable.get());
      System.out.println(functionInputTest(myCallable));

      Function<Integer, Integer> callable1 = (p) -> {return p + 30;};
      System.out.println(fSquaredX(callable1, 5));

      Function<Integer, String> callable2 = (p) -> {return "p is " + p;};

      System.out.println(fSquaredX2(callable2, 8));
      `,
        9: `
      Supplier<Supplier<String>> helloFunction = () -> () -> {return "hello world";};

      System.out.println(helloFunction.get().get());
      Supplier<String> outputF = helloFunction.get();

      System.out.println("Running a function that was generated...." + outputF.get());

      Function<Integer, Function<Integer, Integer>> constantMultiplication = x -> y -> {return y*x;};

      System.out.println(constantMultiplication.apply(4).apply(3));

      Function<Integer, Integer> multiplyBy4 = constantMultiplication.apply(4);

      System.out.println(multiplyBy4.apply(3));
      System.out.println(multiplyBy4.apply(5));
      `,
        10: `
      BiFunction<Function<Integer, Integer>, Integer, Integer> synchronousFunction = (f, x)->{
          int result = f.apply(10);
          return f.apply(x) + f.apply(x*x) + result;
      };

      Function<Integer, Integer> tempFunc = x ->{
          System.out.println("Call on " + x);
          return x/2;
      };

      System.out.println(synchronousFunction.apply(tempFunc,254));
      `,
        11: `
      BiFunction<Function<Integer, Integer>, int[], ArrayList<Integer>> myMap = (f, list) ->{

          ArrayList<Integer> result = new ArrayList<>();
          for(int i = 0; i < list.length; i++){
              result.add(f.apply(list[i]));
          }
          return result;
      };

      Function<Integer, Integer> squaredX = x -> x * x;
      int[] nums = {1,2,3,4,5,6,7};
      System.out.println(myMap.apply(x -> x * x, nums));
      System.out.println(myMap.apply(squaredX, nums));

      List<Integer> numList = Arrays.asList(1,2,3,4,5,6,7);
      numList.stream()
          .map(x -> x*x)
          .forEach(System.out::println);

      numList.stream()
          .map(squaredX)
          .forEach(System.out::println);
      `,
        12: `
      BiFunction<Predicate<Integer>, int[], ArrayList<Integer>> myFilter = (f, list) ->{

        ArrayList<Integer> result = new ArrayList<>();
        for(int i = 0; i < list.length; i++){
            if(f.test(list[i])) result.add(list[i]);
        }
        return result;
      };

      int[] nums = {1,2,3,4,5,6,7,8,9,10};
      System.out.println(myFilter.apply(x -> x%2!=0, nums));

      List<Integer> numList = Arrays.asList(1,2,3,4,5,6,7,8,9,10);
      numList.stream()
        .filter(x -> x%2!=0)
        .forEach(System.out::println);
      `,
        13: `
      public static int myReduce(BiFunction<Integer, Integer, Integer> reduceCallback, int[] list, int initial){
          int lastResult = initial;
          for(int i = 0; i < list.length; i++){
              int result = reduceCallback.apply(list[i], lastResult);
              lastResult = result;
          }
          return lastResult;
      }
      int[] list1 = {1,2,3};
      int[] list2 = {1,2,3,4,5,6,7,8,9,10};

      System.out.println(myReduce((x,total) -> x*total, list1, 1));

      System.out.println(myReduce((x,total) -> x*total, list2, 1));

      System.out.println(Arrays.stream(list2).reduce((total, x) -> total * x));
      System.out.println(Arrays.stream(list2).reduce(1,(total, x) -> total * x));
      `,
      },
    },
  });
  return {
    codeBox,
  };
}
