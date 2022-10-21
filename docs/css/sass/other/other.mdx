### #{} 防止意外解析

```scss
// 方法，分成5个参数，冒号会使程序错误地解析，所以加#{}，参数$name也会被错误的解析，也加上#{}

@mixin keyframe($name,$begin,$beginVal,$end,$endVal) {
  @-webkit-keyframes #{$name} {
    from {
      #{$begin}: #{$beginVal};
    }
    to {
      #{$end}: #{$endVal};
    }
  }
}

// 错误 在带：的整句外面加#{}，依旧错误解析，必须在冒号2边分别加#{}
@mixin keyframe($name,$begin,$beginVal,$end,$endVal) {
  @-webkit-keyframes #{$name} {
    from {
      #{$begin:$beginVal};
    }
    to {
      #{$end:$endVal};
    }
  }
}

p {
  border: 5px solid blue;
  width: 100px;
  height: 100px;

  &:hover {
    //translate(0,0)
    @include keyframe(pmove, transform, translate(0, 0), transform, translate(200px, 100px));
    @include animation(pmove 2s)
  }
}
```
