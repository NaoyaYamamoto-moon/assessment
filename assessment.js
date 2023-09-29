'use strict';
const usernameinput=document.getElementById('user-name');
const button=document.getElementById('assessment');
const resultdiv=document.getElementById('result-area');
const tweetdiv=document.getElementById('tweet-area');

const answers=[
'###userName###のいいところは声です。###userName###の特徴的な声は皆を惹きつけ、心に残ります。',
'###userName###のいいところはまなざしです。###userName###に見つめられた人は、気になって仕方がないでしょう。',
'###userName###のいいところは情熱です。###userName###の情熱に周りの人は感化されます。',
'###userName###のいいところは厳しさです。###userName###の厳しさがものごとをいつも成功に導きます。',
'###userName###のいいところは知識です。博識な###userName###を多くの人が頼りにしています。',
'###userName###のいいところはユニークさです。###userName###だけのその特徴が皆を楽しくさせます。',
'###userName###のいいところは用心深さです。###userName###の洞察に、多くの人が助けられます。',
'###userName###のいいところは見た目です。内側から溢れ出る###userName###の良さに皆が気を惹かれます。',
'###userName###のいいところは決断力です。###userName###がする決断にいつも助けられる人がいます。',
'###userName###のいいところは思いやりです。###userName###に気をかけてもらった多くの人が感謝しています。',
'###userName###のいいところは感受性です。###userName###が感じたことに皆が共感し、わかりあうことができます。',
'###userName###のいいところは節度です。強引すぎない###userName###の考えに皆が感謝しています。',
'###userName###のいいところは好奇心です。新しいことに向かっていく###userName###の心構えが多くの人に魅力的に映ります。',
'###userName###のいいところは気配りです。###userName###の配慮が多くの人を救っています。',
'###userName###のいいところはその全てです。ありのままの###userName###自身がいいところなのです。',
'###userName###のいいところは自制心です。やばいと思ったときにしっかりと衝動を抑えられる###userName###が皆から評価されています。',
'###userName###のいいところは優しさです。###userName###の優しい雰囲気や立ち振る舞いに多くの人が癒やされています。'
];

button.onclick=()=>{
  //console.log('pushed');
  const username=usernameinput.value;
  if(username.length===0){
    return;
  }
  //console.log(username);
  resultdiv.innerText='';
  // const header=document.createElement('h3');
  // header.innerText='診断結果';
  // resultdiv.appendChild(header);

  // const paragraph=document.createElement('p');
  // const result=assessment(username);
  // paragraph.innerText=result;
  // resultdiv.appendChild(paragraph);
  
  const headerdiv=document.createElement('div');
  headerdiv.setAttribute('class', 'card-header text-bg-primary');
  headerdiv.innerText='診断結果';

  const bodydiv=document.createElement('div');
  bodydiv.setAttribute('class', 'card-body');

  const paragraph=document.createElement('p');
  paragraph.setAttribute('class', 'card-text');
  const result=assessment(username);
  paragraph.innerText=result;
  bodydiv.appendChild(paragraph);

  resultdiv.setAttribute('class', 'card');

  resultdiv.appendChild(headerdiv);
  resultdiv.appendChild(bodydiv);
  
  
  const anchor=document.createElement('a');
  const href='https://twitter.com/intent/tweet?button_hashtag='+encodeURIComponent('いいとこ')+'&ref_src=twsrc%5Etfw';
  anchor.setAttribute('href',href);
  anchor.setAttribute('class','twitter-hashtag-button');
  anchor.setAttribute('data-text',result);
  anchor.innerText='Tweet #いいとこ';
  tweetdiv.appendChild(anchor);
  const sc=document.createElement('script');
  sc.setAttribute('src','https://platform.twitter.com/widgets.js');
  tweetdiv.appendChild(sc);
};

 usernameinput.onkeydown=event=>{
  if(event.key==='Enter'){
  button.onclick();
  }
};

function assessment(username){
  let sum=0;
  for(let i=0;i<username.length;i++){
    sum+=username.charCodeAt(i);
  }
  const index=sum%answers.length;
  let result=answers[index];
  result=result.replaceAll('###userName###',username);
  return result;
}

console.log(assessment('ACDuuC'));
console.log(assessment('ACDuuC'));
// console.assert(
//   assessment('ACDuuC')===
//   'ACDuhuuuCのいいところはユニークさです。ACDuuCだけのその特徴が皆を楽しくさせます。',
//   '間違い'
// )
