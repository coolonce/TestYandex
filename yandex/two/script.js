"use strict"
var jq = function(cls){
  if(typeof cls == "string")
  {
    return new jq(Array.prototype.slice.call(document.querySelectorAll(cls)));
  }
  if(typeof cls != "string" && typeof cls != "undefined")
  {
    for (var i in cls) {
      this[i] = cls[i];
    }
    this.elem = cls;
    this.length = cls.length;
  }
  return this;
   //return new jq.f.init(cls);
}
jq.prototype = new function (cls) {

  this.css = function (param, value) {
    if(!value)
    {
      return eval("this.elem[0].style."+param);
    }else{
      for (var i in this.objects) {
        eval("this.elem["+i+"].style."+param+"='"+value+"';");
      }
    }
    return this;
  };
  this.width = function (px = null) {
    if(px == null)
    {
      var width = getComputedStyle(this.elem[0]).width;
      return width;
    }else {
      for (var i in this.elem) {
        this.elem[i].style.setProperty("width", px+"px", "");
      }
    }
    return this;
  };
  this.height = function (px = null) {
    if(px == null)
    {
      var height = getComputedStyle(this.elem[0]).width;
      return height;
    }else {
      for (var i in this.elem) {
        this.elem[i].style.setProperty("height", px+"px", "");
      }
    }
    return this;
  };
  this.hide = function () {
    for (var i in elem) {
      this.elem[i].style.setProperty("display", "none", "");
    }
    return this;
  };
  this.show = function () {
    for (var i in elem) {
      this.elem[i].style.setProperty("display", "block", "");
    }
    return this;
  };
  this.toggle = function () {
    var displ = getComputedStyle(this.elem[0]).display;
    for (var i in this.elem) {
      if(displ == "none")
      {
          this.elem[i].style.setProperty("display", "block", "");
      }else{
          this.elem[i].style.setProperty("display", "none", "");
      }
    }
    return this;
  };


  this.toArray = function () { return this.elem;};
  this.elem = [];
  this.length = 0;
  this.splice = function () {};
};
var $ = function (cls) {
  return new jq(cls);
}
var fr = function (cls) {
  return new jq(cls);
}

/*
jq.f = jq.prototype =  {
  constructor: jq,
  elem : null,
  init: function (cls) {
    this.elem = document.getElementsByClassName(cls);
    this.fullCss = getComputedStyle(this.elem[0]);
    //console.log(document.getElementsByClassName(this.cls));
    var r = [];
    for (var i = 0; i < document.getElementsByClassName(cls).length; i++) {
      var elem = document.getElementsByClassName(cls)[i];
      var tmp = Object.assign(elem, getComputedStyle(elem));
      r.push(tmp);
      this.elem = elem;
    }
    this.splice =function() {};
    //return r;
  },
  width: function (px = null) {
    if(px == null)
    {
      var width = this.fullCss.width;
      return width;
    }else {
      this.elem.style.setProperty("width", px+"px", "");
    }
  },
  height: function (px = null) {
    if(px == null)
    {
      var height = this.fullCss.height;
      return height;
    }else {
      this.elem.style.setProperty("height", px+"px", "");
      return this;
    }
  },
  hide: function () {
      this.elem.style.setProperty("display", "none", "");
      return true;
  },
  show: function () {
    this.elem.style.setProperty("display", "block", "");
    return true;
  },
  toggle: function () {
    if(this.fullCss.display == "none")
    {
      this.elem.style.setProperty("display", "block", "");
      return true;
    }else{
      this.elem.style.setProperty("display", "none", "");
      return true;
    }
    return false;
  },

};*/
//jq.f.init.prototype = jq.f;
/*
(function () {
   fr = new fr("one");
})();*/
/*
var fr1= (function(){
  var fr1 = function (selector) {
    console.log(selector);
    return new fr.find(selector);
  }
})();*/
//fr = new fr();

//console.log( jq("one").toggle());
