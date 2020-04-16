/*ページ遷移用JavaScript

Qiitaの以下の記事を参考
■jQuery で作るシングルページ・アプリケーション(SPA) 70行で動くサンプル付き
https://qiita.com/Web_akira/items/291de76be597506cf3e8
id名をページ名（概念的に）にしています。

*/
$(function(){
  //初期表示
  if( location.hash === ''){
    displayPage("#home");
  }else{
    displayPage(location.hash);
  }
  /*
    完了フラグ（falseになったら遷移は不可にする）
    途中でURLを変更しても、falseになっていたら遷移不可
  */
  var completeFlg = true;

  /*
    リンクをクリックしてページ遷移処理
    ハッシュのみを変更する
  */
  $('.link').click(function(e){
    e.preventDefault();
    var hash = "#"+$(this).attr('data-hash');
    location.hash = hash;
  });

  /*
    ハッシュが変更されたら、そのハッシュに基づいて表示する
  */
  $(window).hashchange(function(){
    if(completeFlg === true){
      clearPage();
      displayPage(location.hash);
    }
  });

  //ページ初期化処理
  function clearPage(){
    $(".contents_article").css("display","none");
  }
  
  //ページ表示
  function displayPage(hash){
   // $(hash).css("display","block");
   $(hash).fadeIn(1000, "linear"); //アニメーションを付けることもできる
  }
});

jQuery('.icon-hamburger').on('click', function() {
  if(jQuery('.menu-container .menu').css('display') === 'block') {
    jQuery('.menu-container .menu').slideUp('1500');
  }else {
    jQuery('.menu-container .menu').slideDown('1500');
  }
});

