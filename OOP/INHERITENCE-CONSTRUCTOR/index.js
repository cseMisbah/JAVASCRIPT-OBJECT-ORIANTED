/*
class Father {
  constructor(msg) {
    //console.log("I am a constructor of father class");
    console.log(msg);
  }
}

class Son extends Father {}
//new Son();
//new Father();
new Father("I am a constructor of father class");
new Son("I am a constructor from son class");
*/
/*
class Father {}

class Son extends Father {
  constructor(msg) {
    super();
    //console.log("I am a constructor of son  class");
    console.log(msg);
  }
}

new Father();
//new Son();
new Son("I am a constructor of son class");
new Father("I am a constructor params from father class");
*/

class Father {
  constructor(msg_father) {
    //console.log("I am a father constructor");
    console.log(msg_father);
  }
}

class Son extends Father {
  constructor(msg_son) {
    super();
    // console.log("I am a constructor of son");
    console.log(msg_son);
  }
}
//new Father();
new Father("I am a father constructor");
//new Son("");
new Son("I am a constructor of son");
