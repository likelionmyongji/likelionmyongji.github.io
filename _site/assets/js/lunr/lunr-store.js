var store = [{
        "title": "자바스크립트 입문 제 0강",
        "excerpt":"자바스크립트란?   JavaScripts는 웹 브라우저에서 사용하기 위해 만들어진 프로그래밍 언어입니다. 이 언어는 웹 브라우저 상에서 나타나는 UI(사용자 인터페이스)를 동적으로 보여주기 위해 사용됩니다. 최근에는 브라우저 뿐만 아니라 Node.js 런타임을 통해 서버 쪽에서도 사용되고 있습니다.   또한,  NW.js, Electron 등을 통해 데스크탑 앱을 만들 수도 있고, react-native, NativeScript 등으로 모바일 앱도 만들 수 있습니다.   JavaScript는 매년마다 새로운 문법들이 나오며 나날히 발전해 가고 있습니다. 명지대학교(서울) 멋쟁이사자처럼에서는 2학기 교육과정으로 React가 결졍됨에 따라 여름 방학 동안 7기 아기사자들이 쉽게 JavaScript를 이해할 수 있도록 교안을 정리해 올려보고자 합니다.  ","categories": ["JavaScript"],
        "tags": ["JavaScript","vanillaJS","es6","lecture"],
        "url": "http://localhost:4000/javascript/js_lecture0/",
        "teaser":null},{
        "title": "자바스크립트 입문 제 1강",
        "excerpt":"Hello JavaScript!   자바스크립트는 브라우저에서 언제든지 사용해 볼 수 있습니다. 만약 크롬브라우저가 아닌 다른 브라우저를 사용중이라면 크롬을 설치하여 실행해보세요. 그리고 개발자 도구를 열어보세요.   개발자 도구는           윈도우 Ctrl + Shift + I     macOS Command + Option + I      키를 눌러서 열 수 있습니다.     탭에서 Console을 선택하고 다음 코드를 입력창에 입력해보세요.  console.log('HelloLion!');     여기서 console.log는 Console에 특정 내용을 출력하는 명령입니다.     다음으로 아래의 코드를 입력해볼까요?   console.log(1 + 2);   Console에 3이 출력됨에 따라 우리는 JavaScript로 연산을 할 수 있다는 것을 알 수 있습니다.     이제, 여러분이 원하는 내용을 한번 출력해보세요.   console.log('명지대학교(서울) 멋쟁이사자처럼 7기 화이팅');     이번 교안의 내용은 여기까지입니다.   다음 교안에서는 JavaScript의 변수와 상수에 대해 알아보겠습니다.  ","categories": ["JavaScript"],
        "tags": ["JavaScript","vanillaJS","es6","lecture"],
        "url": "http://localhost:4000/javascript/js_lecture1/",
        "teaser":null},{
        "title": "자바스크립트 입문 제 2강",
        "excerpt":"변수와 상수      이번 교안부터 CodeSandBox에서 진행하겠습니다. index.js에 있는 내용을 모두 지우고 코드를 작성하고, 오른쪽 Console에서 결과값을 확인하시면 됩니다.      변수와 상수는 특정 이름에 특정 값을 담을 때 사용합니다.   예를 들어서 lion이라는 변수에 1이라는 값을 넣는다고 가정해봅시다. 그러면 코드를 이렇게 입력하면 됩니다.   let lion = 1; console.log(lion);   결과창에 1이라는 값이 나오는 것을 확인하셨나요?   특정 이름에 특정 값을 선언하는 것, 우리는 이를 선언이라고 합니다. 쉽게 설명하자면 lion이라는 값을 이제부터 1이라고 정해주는 것입니다.   값을 선언 할 때에는 두 가지 종류가 있는데 하나는 변수, 다른 하나는 상수입니다.     변수  변수는 바뀔 수 있는 값으로, 한번 값을 선언하고서 다른 값으로 바꿀 수 있습니다.   let lion = 1; console.log(lion); lion = 'likelion'; console.log(lion);   Console에서 1과 ‘likelion’이 각각 출력되는 것을 확인하셨나요?   변수를 선언 할 때에는 이렇게 let 이라는 키워드를 사용합니다. 사용 하실 때 주의 할 점은 같은 블록 범위 내에서 한번 선언했으면 똑같은 이름으로 선언하지 못합니다.   이런 코드는 오류가 발생합니다.   // SyntaxError: Cannot declare a let variable twice: 'lion'. let lion = 1; let lion = 'likelion';     상수   상수는, 한번 선언하고 값이 바뀌지 않아 값이 고정적입니다. 상수를 선언 할 때에는 다음과 같이 선언합니다.   const lion = 1;   상수를 선언 할 때에는 이렇게 const 이라는 키워드를 사용합니다. 상수를 선언하고 나면, 값을 바꿀 수 없습니다.   이런 코드는 오류가 발생합니다.   // TypeError: Attempted to assign to readonly property. const lion = 1; lion = 'likelion';   “Attempted to assign to readonly property.” 라는 오류가 발생했습니다. 이는 한번 상수로 선언했으면 값을 바꿀 수 없음을 의미합니다.   상수를 선언할 때에도 마찬가지로 한번 선언했으면 같은 이름으로 선언 할 수 없습니다.   // SyntaxError: Cannot declare a const variable twice: 'lion'. const lion = 1; const lion = 'likelion';     추가, var   예전에 JavaScript를 공부했던 분이시라면 var를 알고 계실 것입니다.   모던 JavaScript에서는 더 이상 사용되지 않습니다.     데이터 타입   JavaScript에서 데이터 타입은 아래와 같이 네 종류로 이루어져 있습니다.           숫자 (Number)     문자열 (String)     참/거짓 (Boolean)     null &amp; undefinded      숫자는 위에서 작성해보았듯이 바로 값을 대입해 주면 됩니다.   let lion = 1;   문자열은 작은따옴표(‘’) 또는 큰따옴표(““)로 감싸서 선언합니다.   let myongji = '띵지';   Boolean은 Python에서 다루었듯이 참 혹은 거짓 두가지 종류의 값만을 나타낼 수 있습니다.   let coding = true; let sleep = false;   여기서 참은 trus, 거짓은 false입니다.   null과 undefinded는 JavaScript에서 ‘없음’을 나타냅니다.   둘의 용도는 살짝 다른데 null은 ‘값이 없음’을 나타내고,   // null const friend = null;   undefinded는 ‘아직 값이 설정되지 않음’을 뜻합니다.   // undefinded let lion; console.log(lion);   null 과 undefined 는 둘 다 값이 없음을 의미하는건 맞는데, null 은 우리가 없다고, 고의적으로 설정하는 값을 의미하고, undefined 는 우리가 설정을 하지 않았기 때문에 없는 값을 의미합니다.     이번 교안의 내용은 여기까지입니다.   다음 교안에서는 JavaScript의 연산자에 대해 알아보겠습니다.  ","categories": ["JavaScript"],
        "tags": ["JavaScript","vanillaJS","es6","lecture"],
        "url": "http://localhost:4000/javascript/js_lecture2/",
        "teaser":null},{
        "title": "자바스크립트 입문 제 3강",
        "excerpt":"연산자   연산자는 프로그래밍 언어에서 특정 연산을 하도록 하는 문자입니다.   예를 들어   let lion = 1; // 변수의 선언 lion = 2; // 대입 연산자   여기서 두 번째로 사용된 =문자도 연산자의 한 종류입니다.   아래에서는 연산자의 종류에 대해 자세히 알아보도록 하겠습니다.     연산자의 종류는 아래와 같습니다.           산술 연산자     대입 연산자     논리 연산자     비교 연산자      산술 연산자   산술 연산자는 사칙연산과 같은 작업을 하는 연산자입니다.           + : 덧셈     - : 뺄셈     * : 곱셈     / : 나눗셈      위 네 연산자가 가장 기본적인 산술 연산자입니다.   예를 들어   let sum = 1 + 2; console.log(sum); // 3   위의 코드는 sum이라는 변수를 선언할 때 1 + 2의 결과값을 담습니다. 따라서 Console에는 3이 출력됩니다.   let sum = 1 + 2 * 3 - (4 / 2); console.log(sum); // 5   우리는 위와 같이 조금 더 복잡한 사칙연산도 실행할 수 있습니다.   또한, 다른 프로그래밍 언어에서도 살펴 보았듯이 ++ 같은 연산자도 산술 연산자에 포함됩니다.   let sum = 1; console.log(sum++); // 1 console.log(++sum); // 2   ++은 변수 이름 앞에 오면 1을 더한 다음의 값을 보여주고, 변수 이름 뒤에 오면 1을 더하기 직전의 값을 보여준다는 점에서 차이가 있습니다.   덧셈 외에도 뺄셈도 똑같이 할 수 있습니다.   let sum = 1; console.log(sum--); // 1 console.log(--sum); // 0   대입 연산자   대입 연산자는 변수에 연산한 값을 바로 할당할 때 사용되는 연산자입니다.   예를 들어   let a = 1; a = a + 3;   위와 같은 코드는 다음과 같이 작성할 수 있습니다.   let a = 1; a += 3;   덧셈 이외의 다른 연산자에서도 동일하게 적용 가능합니다.   let a = 1; a += 3; a -= 3; a *= 3; a /= 3; console.log(a); // 1   논리 연산자   논라 연산자는 Boolean Type을 위한 연산자입니다.   논리 연산자로는 세 가지가 있습니다.           ! : NOT     &amp;&amp; : AND     || : OR      논리 연산자는 NOT, AND, OR 연산자 순으로 계산합니다.   NOT 연산자는 값이 true면 false로, false면 true를 반환합니다.   let notT = !false; // true let notF = !true; // false   AND 연산자는 양쪽의 값이 둘다 true 일때만 true입니다.   let andT = true &amp;&amp; true; // true let andF = true &amp;&amp; false; // false   OR 연산자는 양쪽의 값 중 하나라도 true이면 true입니다.   let orT = true || false; // true let orF = false || false; // false   비교 연산자   비교 연산자는 두 값을 비교할 때 사용합니다. 값이 같으면 true, 아니면 false를 반환합니다.   ===는 두 값이 일치하고, 타입도 같은지 검사합니다.   const a = 1; const b = '1'; const c = '1'; console.log(a === b); // false console.log(b === c); // true   ==은 두 값이 같은지 비교하지만 타입 검사는 하지 않습니다.   const a = 1; const b = '1'; const c = '1'; console.log(a == b); // true console.log(b == c); // true   앞으로 여러분이 두 값이 일치하는지 비교 할 때에는 ==대신 === 를 사용 할 것을 권장 드립니다. == 를 사용하다보면 실수를 할 확률이 높아집니다.   두 값이 일치하지 않는지 확인할 때에도 위와 비슷하게 !==를 사용하면 됩니다.   const a = 1; const b = '1'; const c = '2'; console.log(a !== b); // true console.log(b !== c); // true   마찬가지로 !=를 사용하면 타입 겁사를 하지 않습니다.   const a = 1; const b = '1'; const c = '2'; console.log(a != b); // false console.log(b != c); // true   여러분이 두 값이 일치하지 않는지 비교 할 때에는 !=대신 !== 를 사용 할 것을 권장 드립니다. != 를 사용하다보면 실수를 할 확률이 높아집니다.   두 값 중에서 무엇이 더 크고 작은지 비교하기 위해서는 아래와 같은 연산자를 사용할 수 있습니다.   const a = 1; const b = 2; const c = 2; console.log(a &lt; b); // true console.log(b &gt; a); // true console.log(b &gt;= c); // true console.log(a &lt;= c); // true console.log(b &lt; c); // false     주석   코드에 메모를 달고 싶을 때에는 아래와 같이 작성할 수 있습니다. 이를 주석이라고 합니다.   // 이것은 주석입니다.   주석은 여러 줄로도 작성할 수 있습니다,   /*      이것은 여러 줄 주석입니다. */     문자열 붙이기   단순히 두 문자열을 붙일 때에는 +을 사용합니다.   const like = '멋쟁이'; const lion = '사자처럼'; console.log(like + lion); // 멋쟁이사자처럼     이번 교안의 내용은 여기까지입니다.   다음 교안에서는 JavaScript의 조건문에 대해 알아보겠습니다.  ","categories": ["JavaScript"],
        "tags": ["JavaScript","vanillaJS","es6","lecture"],
        "url": "http://localhost:4000/javascript/js_lecture3/",
        "teaser":null},{
        "title": "자바스크립트 입문 제 4강",
        "excerpt":"조건문   조건문을 사용하면 특정 조건이 만족됐을 때 코드를 실행할 수 있습니다.   조건문의 종류는 아래와 같습니다.           if문     switch/case문        if문   if문은 괄호의 조건식이 만족하면 코드를 실행합니다.   const lion = 7; if(lion === 7) {     console.log('멋쟁이사자처럼 7기'); }   결과는 ‘멋쟁이사자처럼 7기’가 Console에 출력됩니다.   만약 lion의 값이 7이 아닌 다른 값이면 결과가 어떻게 나올까요?   const lion = 6; if(lion === 7) {     console.log('멋쟁이사자처럼 7기'); }   결과를 확인해보셨나요? 아무것도 출력되지 않습니다.   if문의 기본 구조는 아래와 같습니다.   if(// 조건식) {     // 만족하면 실행되는 코드; }   조건식을 만족하면 실행되는 코드가 중괄호 {}로 감싸져 있는데, 이를 코드블럭이라고 합니다.   만약 조건식의 결과가 true이면 코드 블럭 내의 코드가 실행되고, false면 실행되지 않습니다.   if-else문   만약 특정 조건이 만족할 때와 만족하지 않을 때에 서로 다른 코드를 실행해야 한다면 어떻게 해야 할까요? 바로 if-else문을 사용하면 됩니다.   const lion = 6; if(lion === 7) {     console.log('멋쟁이사자처럼 7기'); } else {     console.log('7기가 아니시군요!'); }   위의 코드의 결과는 Console에 ‘7기가 아니시군요!’라고 출력이 됩니다.   if-else if문   여러 조건에서 여러 작업을 수행하려면 if-else if문을 사용합니다.   const lion = 5; if(lion === 7) {     console.log('멋쟁이사자처럼 7기'); } else if(lion === 6) {     console.log('멋쟁이사자처럼 6기'); } else if(lion === 5) {     console.log('멋쟁이사자처럼 5기'); } else if((lion &lt;= 4)) {     console.log('멋사 할아버지..?'); } else {     console.log('멋사가 아니시군요!'); }   switch/case문   여러 조건에서 여러 작업을 수행할 때, switch/case문을 사용할 수도 있습니다.   const job = 'front-end'; switch (job) {   case 'front-end':     console.log('프론트엔드 개발자');     break;   case 'back-end':     console.log('백엔드 개발자');     break;   case 'designer':     console.log('디자이너');     break;   case 'director':     console.log('기획자');     break;     default:     console.log('다른 일을 하시나봐요?'); }   switch/case 문은 이와 같이 특정 값이 무엇이냐에 따라 다른 작업을 수행 할 수 있게 해줍니다.   switch/case 문에서는 각 case 에서 실행할 코드를 작성하고 맨 마지막에 break; 를 해주어야 합니다. break 를 하지 않으면 그 다음 case 의 코드까지 실행해버립니다.   그리고, 맨 아래의 default: 는 job 값이 우리가 case 로 준비하지 않은 값일 경우를 의미합니다.     이번 교안의 내용은 여기까지입니다.   다음 교안에서는 JavaScript의 함수에 대해 알아보겠습니다.  ","categories": ["JavaScript"],
        "tags": ["JavaScript","vanillaJS","es6","lecture"],
        "url": "http://localhost:4000/javascript/js_lecture4/",
        "teaser":null},{
        "title": "자바스크립트 입문 제 5강",
        "excerpt":"함수   함수는 JavaScript 뿐 만 아니라 대부분의 프로그래밍 언어에서 핵심입니다. 함수는 학교 수학시간에 배웠던 것처럼 y = f(x)의 형태라고 생각하시면 될 것 같습니다.   예를 들어서 우리가 두 값의 합을 구하고 싶을 때 아래와 같은 코드를 작성합니다.   const a = 1; const b = 2; const sum = a + b;   이러한 코드를 함수를 통해 만들어 보겠습니다.   function add(a, b) {   return a + b; }  const sum = add(1, 2); console.log(sum);   함수를 만들 때는 function 키워드를 사용하며, a, b와 같이 괄호 안에 함수에서 어떤 값을 받아올지 정해주는데 이것을 파라미터(매개변수)라고 합니다.   함수 내부에서 return키워드를 사용하여 함수의 결과물을 지정 할 수 있습니다. return을 하게 되면 함수가 끝나 return 아래의 코드는 호출되지 않습니다.     템플릿 리터럴   우리는 Console에서 문자열을 조합하기 위해서 아래와 같이 +문자를 사용했었습니다.   function hello(name) {   console.log('Hello, ' + name + '!'); } hello('lion');   +문자를 사용해도 좋지만 es6에서 템플릿 리터럴 문법을 사용하여 더욱 간단하게 조합할 수 있게 되었습니다.   function hello(name) {   console.log(`Hello, ${name}!`); } hello('lion');     화살표 함수   함수를 function 키워드 대신에 =&gt;문자를 사용해서도 만들 수 있습니다. 이를 화살표 함수라고 합니다.   const add = (a, b) =&gt; {   return a + b; };  console.log(add(1, 2));   코드 블록 내부에서 바로 return을 하는 경우 아래와 같이 줄여서 쓸 수 있습니다.   const add = (a, b) =&gt; a + b; console.log(add(1, 2));     이번 교안의 내용은 여기까지입니다.   다음 교안에서는 JavaScript의 객체에 대해 알아보겠습니다.  ","categories": ["JavaScript"],
        "tags": ["JavaScript","vanillaJS","es6","lecture"],
        "url": "http://localhost:4000/javascript/js_lecture5/",
        "teaser":null},{
        "title": "자바스크립트 입문 제 6강",
        "excerpt":"객체   객체는 변수나 상수를 사용할 때에 하나의 이름에 대해 여러 종류의 값을 넣을 수 있게 해줍니다.   const jeonghun = {     name: '반정훈',     age: 21,     likelion: 7 };  console.log(jeonghun.name); // 반정훈 console.log(jeonghun.age);  // 21 console.log(jeonghun.likelion;  // 7   객체를 선언 할 때에는 이렇게 { } 문자 안에 원하는 값들을 넣어주면 됩니다. 값을 집어 넣을 때에는 키(Key) : 원하는 값(Value)의 형태로 넣으며, 키에 해당하는 부분은 공백이 없어야 합니다.   const mansu = {     'coding everyday': false };   만약에 공백이 있어야 하는 상황이라면 이를 따옴표로 감싸서 문자열로 넣어주면 됩니다.     함수에서 파라미터로 객체 받기   위에서 만든 객체를 함수의 파라미터로 받아와 봅시다.   const jeonghun = {     name: '반정훈',     age: 21,     likelion: 7 };  function hello(lion){     const text = `안녕하세요, 저는 ${lion.name}(${lion.age})입니다. 멋사 ${lion.likelion}기 입니다.`     console.log(text); }  hello(jeonghun);  /*     안녕하세요, 저는 반정훈(21)입니다. 멋사 7기 입니다. */     객체 비구조화 할당(객체 구조 분해)   위에서 본 함수에서 파라미터로 받아온 값을 조회할 때마다 ${lion.name}와 같이 쓰고 있는데, 객체 비구조화 할당을 통해 아래와 같이 코드를 더욱 간결하게 작성할 수 있습니다.   const mansu = {     name: '김만수',     age: 21,     likelion: 7 };  function hello(lion){     const { name, age, likelion } = lion; // 객체에서 값을 추출해 새로운 상수로 선언     const text = `안녕하세요, 저는 ${name}(${age})입니다. 멋사 ${likelion}기 입니다.`     console.log(text); }  hello(mansu);  /*     안녕하세요, 저는 김만수(21)입니다. 멋사 7기 입니다. */   파라미터 단계에서 객체 비구조화 할당을 하면 더욱 깔끔한 코드를 볼 수 있습니다.   const mansu = {     name: '김만수',     age: 21,     likelion: 7 };  function hello({ name, age, likelion }){     const text = `안녕하세요, 저는 ${name}(${age})입니다. 멋사 ${likelion}기 입니다.`     console.log(text); }  hello(mansu);  /*     안녕하세요, 저는 김만수(21)입니다. 멋사 7기 입니다. */     객체 내부 함수   아래와 같이 객체 내부에 함수를 넣을 수도 있습니다. 함수를 선언 할 때에는 이름이 없어도 됩니다.(주의: 객체 안에 함수를 넣을 때, 화살표 함수로 선언한다면 제대로 작동하지 않습니다)   const jeonghun = {     name: '반정훈',     sound: '코딩은 즐거워',     say: function say() { // 또는 say: function() {     console.log(this.sound);   } };  jeonghun.say(); // 코딩은 즐거워   함수가 객체안에 들어가게 되면, this는 자신이 속해있는 객체를 가르키게 됩니다.     이번 교안의 내용은 여기까지입니다.   다음 교안에서는 JavaScript의 배열에 대해 알아보겠습니다.  ","categories": ["JavaScript"],
        "tags": ["JavaScript","vanillaJS","es6","lecture"],
        "url": "http://localhost:4000/javascript/js_lecture6/",
        "teaser":null},{
        "title": "자바스크립트 입문 제 7강",
        "excerpt":"배열   배열은 JavaScript 객체의 특별한 형태입니다. 배열은 단일 데이터가 아닌 다수의 데이터를 저장할 수 있고, 연관성이 있는 데이터를 같이 저장하므로 저장한 데이터를 찾는데 용이합니다.   예를 들어서 문자열 배열을 선언해봅시다.   const staff = ['김혜현', '황낙주', '반정훈', '한종우'];   배열을 선언할 때에는 위처럼 [ ] 문자로 감싸주면 됩니다.   아래와 같이 객체 배열도 만들 수 있습니다.   const staffs = [{name: '김혜현'}, {name: '황낙주'}, {name: '반정훈'}, {name: '한종우'}];   배열을 선언한 후, n번째 항목을 조회하려면 아래와 같이 하면 됩니다.   staffs[n];  console.log(staffs[0]); // Object {name: '김혜현'}     배열 항목 추가   배열에 새 항목을 추가하려면 배열의 내장 함수 push 함수룰 사용하면 됩니다.   const staffs = [{name: '김혜현'}, {name: '황낙주'}, {name: '반정훈'}, {name: '한종우'}];  staffs.push({     name: '누구일까요?' })     배열 크기 알아내기   배열의 크기를 알고 싶을 때에는 배열의 length 값을 확인하면 됩니다.   const staffs = [{name: '김혜현'}, {name: '황낙주'}, {name: '반정훈'}, {name: '한종우'}];  console.log(staffs.length); // 4     이번 교안의 내용은 여기까지입니다.   다음 교안에서는 JavaScript의 반복문에 대해 알아보겠습니다.  ","categories": ["JavaScript"],
        "tags": ["JavaScript","vanillaJS","es6","lecture"],
        "url": "http://localhost:4000/javascript/js_lecture7/",
        "teaser":null}]
