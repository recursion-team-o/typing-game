<script setup lang="ts">
import { ref, onMounted, Vue, reactive} from "vue"
import { codeStore } from '../stores/code'

const code = codeStore();
const keyboard = ref(null);
const inputs = ref('');
const upper = ref(null);
//キーボードのhashmap
const keys: { [name: string]: string } = {};

//1
keys["1"] = "num1";
keys["2"] = "num2";
keys["3"] = "num3";
keys["4"] = "num4";
keys["5"] = "num5";
keys["6"] = "num6";
keys["7"] = "num7";
keys["8"] = "num8";
keys["9"] = "num9";
keys["0"] = "num0";
keys["-"] = "bar";
keys["^"] = "hat";
keys["¥"] = "¥";
keys["Backspace"] = "Backspace";
//uppercase
keys["!"] = "num1";
keys['"'] = "num2";
keys["#"] = "num3";
keys["$"] = "num4";
keys["%"] = "num5";
keys["&"] = "num6";
keys["'"] = "num7";
keys["("] = "num8";
keys[")"] = "num9";
keys["="] = "bar";
keys["~"] = "hat";
keys["|"] = "¥";

//2
keys["q"] = "q";
keys["w"] = "w";
keys["e"] = "e";
keys["r"] = "r";
keys["t"] = "t";
keys["y"] = "y";
keys["u"] = "u";
keys["i"] = "i";
keys["o"] = "o";
keys["p"] = "p";
keys["@"] = "atmark";
keys["["] = "bigparaini";
keys["]"] = "bigparafini";
//uppercase
keys["Q"] = "q";
keys["W"] = "w";
keys["E"] = "e";
keys["R"] = "r";
keys["T"] = "t";
keys["Y"] = "y";
keys["U"] = "u";
keys["I"] = "i";
keys["O"] = "o";
keys["P"] = "p";
keys["`"] = "atmark";
keys["{"] = "bigparaini";
keys["}"] = "bigparafini";

//3
keys["Control"] = "Control";
keys["a"] = "a";
keys["s"] = "s";
keys["d"] = "d";
keys["f"] = "f";
keys["g"] = "g";
keys["h"] = "h";
keys["j"] = "j";
keys["k"] = "k";
keys["l"] = "l";
keys[";"] = "semi";
keys[":"] = "coron";
keys["Enter"] = "Enter";
//uppercase
keys["A"] = "a";
keys["s"] = "s";
keys["D"] = "d";
keys["F"] = "f";
keys["G"] = "g";
keys["H"] = "h";
keys["J"] = "j";
keys["K"] = "k";
keys["L"] = "l";
keys["+"] = "semi";
keys["*"] = "coron";

//4
keys["Shift"] = "Shift";
keys["z"] = "z";
keys["x"] = "x";
keys["c"] = "c";
keys["v"] = "v";
keys["b"] = "b";
keys["n"] = "n";
keys["m"] = "m";
keys[","] = "hai";
keys["."] = "peri";
keys["/"] = "slash";
keys["_"] = "sub";
//4 uppercase
keys["Z"] = "z";
keys["X"] = "x";
keys["C"] = "c";
keys["V"] = "v";
keys["B"] = "b";
keys["N"] = "n";
keys["M"] = "m";
keys["<"] = "hai";
keys[">"] = "peri";
keys["?"] = "slash";

//5
keys["Alt"] = "Alt";
keys["Meta"] = "Meta";
keys[" "] = "space";

//キーボード押したらひかる
//ロジックとしては押したボタンのkey.valueを取得する。"."+key.valueというクラスリストを持つノードを探す。（それぞれに対応するクラスの名前はあらかじめひつ一つのclasslistに書いてある。そのノードに光る要素を加える。keyupしたらremove。
const KeyDown = () => {
  for(let key in keys){
      if(key === event.key){
        keyboard.value.querySelectorAll("." + keys[key])[0].classList.remove("bg-gray-100")
        keyboard.value.querySelectorAll("." + keys[key])[0].classList.add("bg-indigo-500")
      }
    }
  if(event.shiftKey){
    console.log("shift is clicked");
    console.log(event.key);
    for(let key in keys){
      if(key === event.key){
        keyboard.value.querySelectorAll("." + keys[key])[0].classList.remove("bg-gray-100")
        keyboard.value.querySelectorAll("." + keys[key])[0].classList.add("bg-indigo-500")
      }
    }
  }
};
const KeyUp = () => {
  for(let key in keys){
      if(key === event.key){
        keyboard.value.querySelectorAll("." + keys[key])[0].classList.remove("bg-indigo-500")
        keyboard.value.querySelectorAll("." + keys[key])[0].classList.add("bg-gray-100")
      }
    }
  if(event.shiftKey){
    for(let key in keys){
      if(key === event.key){
        keyboard.value.querySelectorAll("." + keys[key])[0].classList.remove("bg-indigo-500")
        keyboard.value.querySelectorAll("." + keys[key])[0].classList.add("bg-gray-100")
      }
    }
  }
};



</script>

<template class="box">
  <div>
    <!-- 上半分のHTML -->
    <div ref="upper" class="upperbox mt-2 mb-2 bg-white flex justify-around items-center">
      <pre class="codearea p-5">
        <code class="language-html "><span id="correct">{{code.correctcode}}</span><span id="that">{{code.pointercode}}</span>{{code.personalcode}}</code>
      </pre>
    </div>
  </div>
    

    <!--キーボードの設計
    - 縦五行である。
      - １４(割合: 13が同サイズ、一番右約1.6倍)
      - １４(割合: 13が同サイズ、一番ひだり約1.5倍...これは見た目の調整的に1.6ではなく1.5）
      - １３(割合: 11が同じ、残り２が1.7倍）
      - １２(割合: 10が同じ、残り２が1.8倍）
      - ５(横970pxを10等分。97px 1:2:4:2;1 => 97:194:388:194:97px)

    - 下半分の画面のサイズが338pxなのでpaddingをのぞいて330pxとする
    - 一個66pxとなる

      横が978px
        66 * 13 = 858px
        112 = 970px
        978px

      たてが338px
        - padding 8
        - 330px
      - 330 / 5 = 66px

      10
      12421
      
      以下キーボードのHTML-->

    <div class="bottombox flex justify-center items-center bg-gray-900">
      <div ref="keyboard" class="boardarea bg-gray-200 p-1">

        <!-- １行目　-->
        <div class="oneline flex">
          <div class="bg-gray-600 buttons flex justify-center items-center">
            <div class="num1 bg-gray-100 hover:bg-indigo-400 p-2 innerbuttons">
              <div>!</div>
              <div>1</div>
            </div>
          </div>
          <div class="bg-gray-600 buttons flex justify-center items-center">
            <div class="num2 bg-gray-100 hover:bg-indigo-400 p-2 innerbuttons">
              <div>"</div>
              <div>2</div>
            </div>
          </div>
          <div class="bg-gray-600 buttons flex justify-center items-center">
            <div class="num3 bg-gray-100 hover:bg-indigo-400 p-2 innerbuttons">
              <div>#</div>
              <div>3</div>
            </div>
          </div>
          <div class="bg-gray-600 buttons flex justify-center items-center">
            <div class="num4 bg-gray-100 hover:bg-indigo-400 p-2 innerbuttons"> 
              <div>$</div>
              <div>4</div>
            </div>
          </div>
          <div class="bg-gray-600 buttons flex justify-center items-center">
            <div class="num5 bg-gray-100 hover:bg-indigo-400 p-2 innerbuttons"> 
              <div>%</div>
              <div>5</div>
            </div>
          </div>
          <div class="bg-gray-600 buttons flex justify-center items-center">
            <div class="num6 bg-gray-100 hover:bg-indigo-400 p-2 innerbuttons"> 
              <div>&amp;</div>
              <div>6</div>
            </div>
          </div>
          <div class="bg-gray-600 buttons flex justify-center items-center">
            <div class="num7 bg-gray-100 hover:bg-indigo-400 p-2 innerbuttons"> 
              <div>'</div>
              <div>7</div>
            </div>
          </div>
          <div class="bg-gray-600 buttons flex justify-center items-center">
            <div class="num8 bg-gray-100 hover:bg-indigo-400 p-2 innerbuttons"> 
              <div>(</div>
              <div>8</div>
            </div>
          </div>
          <div class="bg-gray-600 buttons flex justify-center items-center">
            <div class="num9 bg-gray-100 hover:bg-indigo-400 p-2 innerbuttons"> 
              <div>)</div>
              <div>9</div>
            </div>
          </div>
          <div class="bg-gray-600 buttons flex justify-center items-center">
            <div class="num0 bg-gray-100 hover:bg-indigo-400 p-2 innerbuttons"> 
              <div><br/></div>
              <div>0</div>
            </div>
          </div>
          <div class="bg-gray-600 buttons flex justify-center items-center">
            <div class="bar bg-gray-100 hover:bg-indigo-400 p-2 innerbuttons"> 
              <div>=</div>
              <div>-</div>
            </div>
          </div>
          <div class="bg-gray-600 buttons flex justify-center items-center">
            <div class="hat bg-gray-100 hover:bg-indigo-400 p-2 innerbuttons"> 
              <div>^</div>
              <div>~</div>
            </div>
          </div>
          <div class="bg-gray-600 buttons flex justify-center items-center">
            <div class="¥ bg-gray-100 hover:bg-indigo-400 p-2 innerbuttons"> 
              <div>¥</div>
              <div>|</div>
            </div>
          </div>
          <div class="bg-gray-600 onesix flex justify-center items-center">
            <div class="Backspace bg-gray-100 hover:bg-indigo-400 p-2 innerbuttons"> 
              <div><br/></div>
              <div>backspace</div>
            </div>
          </div>
        </div>

        <!-- 2行目　-->
        <div class="oneline flex">
          <div class="bg-gray-600 onefive flex justify-center items-center">
            <div class="tabs bg-gray-100 p-2 innerbuttons"> 
              <div><br/></div>
              <div></div>
            </div>
          </div>
          <div class="bg-gray-600 buttons flex justify-center items-center">
            <div class="q bg-gray-100 hover:bg-indigo-400 p-2 innerbuttons"> 
              <div><br/></div>
              <div>Q</div>
            </div>
          </div>
          <div class="bg-gray-600 buttons flex justify-center items-center">
            <div class="w bg-gray-100 hover:bg-indigo-400 p-2 innerbuttons"> 
              <div><br/></div>
              <div>W</div>
            </div>
          </div>
          <div class="bg-gray-600 buttons flex justify-center items-center">
            <div class="e bg-gray-100 hover:bg-indigo-400 p-2 innerbuttons"> 
              <div><br/></div>
              <div>E</div>
            </div>
          </div>
          <div class="bg-gray-600 buttons flex justify-center items-center">
           <div class="r bg-gray-100 hover:bg-indigo-400 p-2 innerbuttons"> 
              <div><br/></div>
              <div>R</div>
            </div>
          </div>
          <div class="bg-gray-600 buttons flex justify-center items-center">
            <div class="t bg-gray-100 hover:bg-indigo-400 p-2 innerbuttons"> 
              <div><br/></div>
              <div>T</div>
            </div>
          </div>
          <div class="bg-gray-600 buttons flex justify-center items-center">
            <div class="y bg-gray-100 hover:bg-indigo-400 p-2 innerbuttons"> 
              <div><br/></div>
              <div>Y</div>
            </div>
          </div>
          <div class="bg-gray-600 buttons flex justify-center items-center">
            <div class="u bg-gray-100 hover:bg-indigo-400 p-2 innerbuttons"> 
              <div><br/></div>
              <div>U</div>
            </div>
          </div>
          <div class="bg-gray-600 buttons flex justify-center items-center">
            <div class="i bg-gray-100 hover:bg-indigo-400 p-2 innerbuttons"> 
              <div><br/></div>
              <div>I</div>
            </div>
          </div>
          <div class="bg-gray-600 buttons flex justify-center items-center">
            <div class="o bg-gray-100 hover:bg-indigo-400 p-2 innerbuttons"> 
              <div><br/></div>
              <div>O</div>
            </div>
          </div>
          <div class="bg-gray-600 buttons flex justify-center items-center">
            <div class="p bg-gray-100 hover:bg-indigo-400 p-2 innerbuttons"> 
              <div><br/></div>
              <div>P</div>
            </div>
          </div>
          <div class="bg-gray-600 buttons flex justify-center items-center">
            <div class="atmark bg-gray-100 hover:bg-indigo-400 p-2 innerbuttons"> 
              <div>`</div>
              <div>@</div>
            </div>
          </div>
          <div class="bg-gray-600 buttons flex justify-center items-center">
            <div class="bigparaini bg-gray-100 hover:bg-indigo-400 p-2 innerbuttons"> 
              <div>{</div>
              <div>[</div>
            </div>
          </div>
          <div class="bg-gray-600 buttons flex justify-center items-center">
            <div class="bigparafini bg-gray-100 hover:bg-indigo-400 p-2 innerbuttons"> 
              <div>}</div>
              <div>]</div>
            </div>
          </div>
        </div>

        <!-- 3行目　-->
        <div class="oneline flex">
          <div class="bg-gray-600 oneseven flex justify-center items-center">
            <div class="Control bg-gray-100 hover:bg-indigo-400 p-2 innerbuttons"> 
              <div><br/></div>
              <div>control</div>
            </div>
          </div>
          <div class="bg-gray-600 buttons flex justify-center items-center">
            <div class="a bg-gray-100 hover:bg-indigo-400 p-2 innerbuttons"> 
              <div><br/></div>
              <div>A</div>
            </div>
          </div>
          <div class="bg-gray-600 buttons flex justify-center items-center">
            <div class="s bg-gray-100 hover:bg-indigo-400 p-2 innerbuttons"> 
              <div><br/></div>
              <div>S</div>
            </div>
          </div>
          <div class="bg-gray-600 buttons flex justify-center items-center">
            <div class="d bg-gray-100 hover:bg-indigo-400 p-2 innerbuttons"> 
              <div><br/></div>
              <div>D</div>
            </div>
          </div>
          <div class="bg-gray-600 buttons flex justify-center items-center">
            <div class="f bg-gray-100 hover:bg-indigo-400 p-2 innerbuttons"> 
              <div><br/></div>
              <div>F</div>
            </div>
          </div>
          <div class="bg-gray-600 buttons flex justify-center items-center">
            <div class="g bg-gray-100 hover:bg-indigo-400 p-2 innerbuttons"> 
              <div><br/></div>
              <div>G</div>
            </div>
          </div>
          <div class="bg-gray-600 buttons flex justify-center items-center">
            <div class="h bg-gray-100 hover:bg-indigo-400 p-2 innerbuttons"> 
              <div><br/></div>
              <div>H</div>
            </div>
          </div>
          <div class="bg-gray-600 buttons flex justify-center items-center">
            <div class="j bg-gray-100 hover:bg-indigo-400 p-2 innerbuttons"> 
              <div><br/></div>
              <div>J</div>
            </div>
          </div>
          <div class="bg-gray-600 buttons flex justify-center items-center">
            <div class="k bg-gray-100 hover:bg-indigo-400 p-2 innerbuttons"> 
              <div><br/></div>
              <div>K</div>
            </div>
          </div>
          <div class="bg-gray-600 buttons flex justify-center items-center">
            <div class="l bg-gray-100 hover:bg-indigo-400 p-2 innerbuttons"> 
              <div><br/></div>
              <div>L</div>
            </div>
          </div>
          <div class="bg-gray-600 buttons flex justify-center items-center">
            <div class="semi bg-gray-100 hover:bg-indigo-400 p-2 innerbuttons"> 
              <div>+</div>
              <div>;</div>
            </div>
          </div>
          <div class="bg-gray-600 buttons flex justify-center items-center">
            <div class="coron bg-gray-100 hover:bg-indigo-400 p-2 innerbuttons"> 
              <div>*</div>
              <div>:</div>
            </div>
          </div>
          <div class="bg-gray-600 oneseven flex justify-center items-center">
            <div class="Enter bg-gray-100 hover:bg-indigo-400 p-2 innerbuttons"> 
              <div><br/></div>
              <div>Enter</div>
            </div>
          </div>
        </div>

        <!-- 4行目　-->
        <div class="oneline flex">
          <div class="bg-gray-600 onefive flex justify-center items-center">
            <div class="Shift bg-gray-100 hover:bg-indigo-400 p-2 innerbuttons"> 
              <div><br/></div>
              <div>Shift</div>
            </div>
          </div>
          <div class="bg-gray-600 buttons flex justify-center items-center">
            <div class="z bg-gray-100 hover:bg-indigo-400 p-2 innerbuttons"> 
              <div><br/></div>
              <div>Z</div>
            </div>
          </div>
          <div class="bg-gray-600 buttons flex justify-center items-center">
            <div class="x bg-gray-100 hover:bg-indigo-400 p-2 innerbuttons"> 
              <div><br/></div>
              <div>x</div>
            </div>
          </div>
          <div class="bg-gray-600 buttons flex justify-center items-center">
            <div class="c bg-gray-100 hover:bg-indigo-400 p-2 innerbuttons"> 
              <div><br/></div>
              <div>C</div>
            </div>
          </div>
          <div class="bg-gray-600 buttons flex justify-center items-center">
            <div class="v bg-gray-100 hover:bg-indigo-400 p-2 innerbuttons"> 
              <div><br/></div>
              <div>V</div>
            </div>
          </div>
          <div class="bg-gray-600 buttons flex justify-center items-center">
            <div class="b bg-gray-100 hover:bg-indigo-400 p-2 innerbuttons"> 
              <div><br/></div>
              <div>B</div>
            </div>
          </div>
          <div class="bg-gray-600 buttons flex justify-center items-center">
            <div class="n bg-gray-100 hover:bg-indigo-400 p-2 innerbuttons"> 
              <div><br/></div>
              <div>N</div>
            </div>
          </div>
          <div class="bg-gray-600 buttons flex justify-center items-center">
            <div class="m bg-gray-100 hover:bg-indigo-400 p-2 innerbuttons"> 
              <div><br/></div>
              <div>M</div>
            </div>
          </div>
          <div class="bg-gray-600 buttons flex justify-center items-center">
            <div class="hai bg-gray-100 hover:bg-indigo-400 p-2 innerbuttons"> 
              <div>&lt;</div>
              <div>,</div>&gt;
            </div>
          </div>
          <div class="bg-gray-600 buttons flex justify-center items-center">
            <div class="peri bg-gray-100 hover:bg-indigo-400 p-2 innerbuttons"> 
              <div>&gt;</div>
              <div>.</div>
            </div>
          </div>
          <div class="bg-gray-600 buttons flex justify-center items-center">
            <div class="slash bg-gray-100 hover:bg-indigo-400 p-2 innerbuttons"> 
              <div>?</div>
              <div>/</div>
            </div>
          </div>
          <div class="bg-gray-600 buttons flex justify-center items-center">
            <div class="sub bg-gray-100 hover:bg-indigo-400 p-2 innerbuttons"> 
              <div><br/></div>
              <div>_</div>
            </div>
          </div>
          <div class="bg-gray-600 oneeight flex justify-center items-center">
            <div class="Shift bg-gray-100 hover:bg-indigo-400 p-2 innerbuttons"> 
              <div><br/></div>
              <div>Shift</div>
            </div>
          </div>
        </div>

        <!-- 5行目　-->
        <div class="oneline flex">
          <div class="bg-gray-600 onefour flex justify-center items-center">
            <div class="Alt bg-gray-100 hover:bg-indigo-400 p-2 innerbuttons"> 
              <div><br/></div>
              <div>option</div>
            </div>
          </div>
          <div class="bg-gray-600 oneten flex justify-center items-center">
            <div class="Meta bg-gray-100 hover:bg-indigo-400 p-2 innerbuttons"> 
              <div><br/></div>
              <div>command</div>
            </div>
          </div>
          <div id="space" class="bg-gray-600 spacebar flex justify-center items-center">
            <div class="space bg-gray-100 p-2 hover:bg-indigo-400 innerbuttons"></div>
          </div>
          <div class="bg-gray-600 oneten flex justify-center items-center">
            <div class="Meta bg-gray-100 p-2 innerbuttons"> 
              <div><br/></div>
              <div></div>
            </div>
          </div>
          <div class="bg-gray-600 onefour flex justify-center items-center">
            <div class="bg-gray-100  p-2 innerbuttons"> 
              <div><br/></div>
              <div></div>
            </div>
          </div>
        </div>


      </div>
    </div>
  </div>

</template>

<style>
.box{
  height: 100vh;
  width: 100%;
}
.mass{
  width: 100%
}
.upperbox{
  height: 45vh
}
.codearea{
  width: 90%;
  height: 100%
}
.bottombox{
  width: 100%;
  height: 45.3vh
}
.boardarea{
  width: 978px;
  height: 338px
}
.oneline{
  height: 66px;
  width: 100%
}
.buttons{
  width: 66px;
  height: 66px
}
.innerbuttons{
  width: 97%;
  height: 97%
}
.onefour{
  width:97px;
  height:66px
}
.onefive{
  width: 107px;
  height: 66px
}
.onesix{
  width: 112px;
  height: 66px
}
.oneseven{
  width: 122px;
  height: 66px
}
.oneeight{
  width:155px;
  height:66px
}
.oneten{
  width: 194px;
  height: 66px
}
.spacebar{
  width: 400px;
  height:66px
}

</style>
