<template>
  <div :class="[`icon`, className || ``]">
    <img
      class="vuesaxlinear"
      src="https://anima-uploads.s3.amazonaws.com/projects/6231a346e960d27abb0c8fdd/releases/6237dcb521663abe445fd24c/img/vuesax-linear-code-7@2x.png"
    />
  </div>
</template>

<script>
export default {
  name: "Icon",
  props: ["className"],
};
</script>

<style>
.icon {
  background-image: url(https://anima-uploads.s3.amazonaws.com/projects/6231a346e960d27abb0c8fdd/releases/62346139747fa6ab32571d28/img/oval-2@2x.png);
  background-size: 100% 100%;
  display: flex;
  height: 77.18px;
  margin-left: 124.2px;
  margin-top: 0;
  width: 74.52px;
}

.vuesaxlinear {
  height: 35.79px;
  margin-left: 20.3px;
  margin-top: 19.8px;
  width: 34.56px;
}

.icon.icon-1 {
  background-image: url(https://anima-uploads.s3.amazonaws.com/projects/6231a346e960d27abb0c8fdd/releases/62346139747fa6ab32571d28/img/oval@2x.png);
}

.icon.icon-2 {
  background-image: url(https://anima-uploads.s3.amazonaws.com/projects/6231a346e960d27abb0c8fdd/releases/62346139747fa6ab32571d28/img/oval-1@2x.png);
  margin-top: unset;
  width: 74.52px;
}

.icon.icon-2 .vuesaxlinear {
  width: 34.56px;
}

.icon.icon-3 {
  background-image: url(https://anima-uploads.s3.amazonaws.com/projects/6231a346e960d27abb0c8fdd/releases/62346139747fa6ab32571d28/img/oval-4@2x.png);
}

.icon.icon-4 {
  background-image: url(https://anima-uploads.s3.amazonaws.com/projects/6231a346e960d27abb0c8fdd/releases/62346139747fa6ab32571d28/img/oval-5@2x.png);
}

.icon.icon-5 {
  background-image: url(https://anima-uploads.s3.amazonaws.com/projects/6231a346e960d27abb0c8fdd/releases/6237dcb521663abe445fd24c/img/oval-15@2x.png);
  margin-top: unset;
}
</style>
