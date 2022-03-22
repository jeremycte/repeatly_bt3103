<template>
  <div class="social-media-login">
    <div class="other-account">
      <div class="line-span">
        <p class="span-line-account  valign-text-middle inter-normal-black-14px">
          or do it via other accounts
        </p>
        <img
          class="vector-1"
          src="https://anima-uploads.s3.amazonaws.com/projects/6231a346e960d27abb0c8fdd/releases/6231a453c59722c0165f17f8/img/vector-1@1x.png"
        />
        <img
          class="vector-3"
          src="https://anima-uploads.s3.amazonaws.com/projects/6231a346e960d27abb0c8fdd/releases/6231a453c59722c0165f17f8/img/vector-3@1x.png"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SocialMediaLogin",
};
</script>

<style>
.social-media-login {
  display: flex;
  flex-direction: column;
  height: 121px;
  left: 1157px;
  position: absolute;
  top: 734px;
  width: 598px;
}

.other-account {
  align-items: flex-start;
  display: flex;
  min-width: 600px;
}

.line-span {
  height: 49px;
  position: relative;
  width: 597px;
}

.span-line-account {
  height: 49px;
  left: 9px;
  letter-spacing: 0;
  line-height: 16px;
  position: absolute;
  text-align: center;
  top: 14px;
  width: 587px;
}

.vector-1 {
  height: 2px;
  left: 9px;
  position: absolute;
  top: 24px;
  width: 183px;
}

.vector-3 {
  height: 2px;
  left: 415px;
  position: absolute;
  top: 23px;
  width: 183px;
}
</style>
