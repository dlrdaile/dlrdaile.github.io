var posts=["2024/03/07/程序开发的开闭原则/","2024/02/26/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };