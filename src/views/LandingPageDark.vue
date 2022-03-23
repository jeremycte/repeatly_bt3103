<template>
  <div class="container-center-horizontal">
    <div class="landing-page-dark-theme-1920 screen">
      <div class="overlap-group9">
        <div class="overlap-group7">
          <img class="rectangle-9521" :src="rectangle9521" />
          <img
            class="rectangle-9522"
            :src="rectangle9522"
          />
          <img class="gradient-shape" :src="gradientShape" />
          <div class="content-hero-title">
            <h1
              class="build-your-next-land-dark inter-bold-white-100px "
            >Learn it.<br />Repeat it.<br />Repeatly.</h1>
            <div
              class="create-custom-landin nunitosans-normal-white-30px animate-enter">
            With our interactive flashcards, aceing your exams will be a piece of cake. With the help of technology, learning will never be the same again.</div>
          </div>
          <div class="repeatly inter-bold-white-40px">{{ repeatly }}</div>
          <img class="logo-icon-1" :src="logoIcon11" />
          <div class="place inter-medium-white-28px" id="place">
            <span
              class="span0 inter-medium-white-28px"
              >Home</span
>
          </div>
          <a href="#group-162499">
            <div class="about-us inter-medium-white-28px">
              {{ aboutUs1 }}
            </div>
          </a>
          <a href="#features-1">
          <div class="features inter-medium-white-28px">
            {{ features1 }}
          </div>
          </a>
          <a href="#organize-flashcards">
            <div class="flashcards inter-medium-white-28px">
              {{ flashcards1 }}
            </div>
          </a>
          <div class="bg" :style="{ 'background-image': 'url(' + bg + ')' }">
            <iframe
              style="border: 0; pointer-events: auto"
              id="ytplayer"
              type="text/html"
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0&mute=0&autoplay=1"
              frameborder="0"
              allowfullscreen="allowfullscreen"
              mozallowfullscreen="mozallowfullscreen"
              msallowfullscreen="msallowfullscreen"
              oallowfullscreen="oallowfullscreen"
              webkitallowfullscreen="webkitallowfullscreen"
            ></iframe>
          </div>
          <div class="group-162499" id="group-162499">
            <div
              class="about-us-title inter-bold-white-75px"
              id="about-us-title"
            >
              {{ aboutUsTitle }}
            </div>
            <div
              class="about-us-description nunitosans-normal-white-26px"
            >
              {{ aboutUsDescription }}
            </div>
          </div>
          <a href="#features-1">
          <div class="our-features">
            <div class="frame-1-1dark">
              <div class="our-features-1-dark inter-bold-white-25px">
                Our Features
              </div>
              <img
                class="arrow-right-up"
                src="../../img/LandingPageLight/arrow-right-up@2x.png"
              />
            </div>
          </div>
          </a>
          <img class="rectangle-9542" :src="rectangle95421" /><img
            class="scriggly-line2"
            :src="scrigglyline2"
          /><img class="scriggly-line1" :src="scrigglyline1" /><img
            class="scriggly-line"
            :src="scrigglyline"
          />
          <div class="ellipse-container">
            <div class="ellipse-57 border-3px-white"></div>
            <div class="ellipse-58 border-1px-white"></div>
          </div>
          <div class="balls animate-enter1" show-on-scroll>
            <div class="ellipse-container-1">
              <div class="ellipse-57-1 border-3px-white"></div>
              <div class="ellipse-58-1 border-1px-white"></div>
            </div>
          </div>
          <img class="add" :src="add1" /><img class="add-1" :src="add2" />
          <div class="overlap-group2">
            <div class="rectangle-9541 border-2px-white"></div>
            <div class="overlap-group1">
              <div class="overlap-group">
                <div class="rectangle-9541-1 border-4px-white"></div>
                <img class="mask-group" :src="maskGroup" />
              </div>
              <img class="logo-icon-2" :src="logoIcon2" />
            </div>
          </div>
          <div class="cta">
            <div class="flex-col">
              <div class="save-tons-of-time-g inter-bold-white-60px">
                {{ saveTonsOfTimeG }}
              </div>
              <div class="button">
                <div class="get-beta-access-dark inter-bold-white-30px">
                  Sign Up
                </div>
              </div>
            </div>
            <div
              class="group-162511"
              :style="{ 'background-image': 'url(' + group162511 + ')' }"
            ></div>
          </div>
          <img class="zig-zag animate-enter2" show-on-scroll :src="zigzag" />
          <router-link to="/">
          <div class="dark-theme-button animate-enter3" show-on-scroll>
            <div class="frame-1dark">
              <div class="dark-theme-1 inter-bold-white-25px">
                Light Theme
              </div>
              <img class="ellipse-dark" :src="ellipse" />
            </div>
          </div>
          </router-link>
          <router-link to="/sign-in">
          <div class="login-button">
            <div class="overlap-group3 border-1px-white">
              <div class="get-beta-access-1 inter-normal-white-20px">Login</div>
            </div>
          </div>
          </router-link>
          <div class="register-button">
            <div class="overlap-group4 border-1px-white">
              <div class="get-beta-access-2 inter-normal-white-20px">
                Register
              </div>
            </div>
          </div>
          <div
            class="organize-flashcards animate-enter4"
            id="organize-flashcards"
            show-on-scroll
          >
            <div class="build-your-next-land-1 inter-bold-white-58px create-custom-landin.animate-enter">
              Find and organize flashcards.
            </div>
          </div>
          <div class="overlap-group5-dark">
            <div class="group-162511-1-dark">
              <div class="group-162508-dark">
                <div
                  class="overlap-group-2-dark inter-bold-white-40px"
                  :style="{ 'background-image': 'url(' + overlapGroup1 + ')' }"
                >
                  <img class="rectangle-9542-1-dark" :src="rectangle95422" />
                  <div class="marketing">{{ marketing }}</div>
                  <div class="history">{{ history }}</div>
                  <div class="language">{{ language1 }}</div>
                  <div class="general-education">{{ generalEducation }}</div>
                  <div class="chemistry">{{ chemistry }}</div>
                  <div class="law">{{ law1 }}</div>
                  <div class="language-1">{{ language2 }}</div>
                  <div class="world-maps">{{ worldMaps }}</div>
                  <div class="economics">{{ economics }}</div>
                  <div class="physics">{{ physics }}</div>
                  <div class="language-2">{{ language3 }}</div>
                </div>
              </div>
            </div>
            <div
              class="watch-this-1-min-vid nunitosans-normal-white-35px animate-enter5"
              show-on-scroll
            >
              {{ watchThis1MinVid }}
            </div>
          </div>
          <div class="overlap-group6">
            <div class="group-162511-2">
              <div class="group-162508-1-dark">
                <div
                  class="overlap-group-2-dark inter-bold-white-40px"
                  :style="{ 'background-image': 'url(' + overlapGroup2 + ')' }"
                >
                  <img class="rectangle-9542-2-dark" :src="rectangle95423" />
                  <div class="networks">{{ networks }}</div>
                  <div class="film-tv">{{ filmTv }}</div>
                  <div class="geography">{{ geography }}</div>
                  <div class="political-science">{{ politicalScience }}</div>
                  <div class="technology">{{ technology }}</div>
                  <div class="law-1">{{ law2 }}</div>
                  <div class="language-3">{{ language4 }}</div>
                  <div class="sociology">{{ sociology }}</div>
                  <div class="data-structures">{{ dataStructures }}</div>
                  <div class="business">{{ business }}</div>
                  <div class="language-4">{{ language5 }}</div>
                </div>
              </div>
            </div>
            <div
              class="explore nunitosans-normal-white-35px animate-enter6"
              show-on-scroll
            >
              {{ explore }}
            </div>
          </div>
          <div class="features-1" id="features-1">
            <div
              class="the-feature-we-provide-for-you inter-bold-white-60px"
            >
              {{ theFeatureWeProvideForYou }}
            </div>
            <div class="group-container">
              <div class="group-162495">
                <div class="group-162492">
                  <div class="x1">
                    <!-- <icon /> -->
                    <div class="group-162491">
                      <div
                        class="fully-responsive inter-light-white-28px"
                      >
                        {{ fullyResponsive1 }}
                      </div>
                      <div
                        class="with-lots-of-unique nunitosans-normal-white-20px"
                      >
                        {{ withLotsOfUnique1 }}
                      </div>
                    </div>
                  </div>
                </div>

                <div class="group-162494">
                  <div class="x1-1">
                    <!-- <icon :className="icon1Props.className" /> -->
                    <div class="group-162491-1">
                      <div
                        class="fully-responsive-1 inter-light-white-28px"
                      >
                        {{ fullyResponsive2 }}
                      </div>
                      <div
                        class="with-lots-of-unique-1 nunitosans-normal-white-22px"
                      >
                        {{ withLotsOfUnique2 }}
                      </div>
                    </div>
                  </div>
                </div>
                <div class="group-162493-1">
                  <div class="x1-4">
                    <!-- <icon :className="iconProps.className" /> -->
                    <div class="group-162491-4">
                      <div
                        class="fully-responsive-4 inter-light-white-28px"
                      >
                        Scalability
                      </div>
                      <div
                        class="with-lots-of-unique-3 nunitosans-normal-white-22px"
                      >
                        We provide flexibility to accomodate teachers with large
                        number of students
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="group-162496">
                <div class="group-162494-1">
                  <div class="x1-2">
                    <!-- <icon :className="icon2Props2.className" /> -->
                    <div class="group-162491-2">
                      <div
                        class="fully-responsive-2 inter-light-white-28px"
                      >
                        {{ fullyResponsive3 }}
                      </div>
                      <div
                        class="with-lots-of-unique nunitosans-normal-white-22px"
                      >
                        {{ withLotsOfUnique3 }}
                      </div>
                    </div>
                  </div>
                </div>
                <div class="group-162493">
                  <div class="x1-3">
                    <!-- <icon :className="icon3Props.className" /> -->
                    <div class="group-162491-3">
                      <div
                        class="fully-responsive-3 inter-light-white-28px"
                      >
                        {{ fullyResponsive4 }}
                      </div>
                      <div
                        class="with-lots-of-unique-2 nunitosans-normal-white-22px"
                      >
                        {{ withLotsOfUnique4 }}
                      </div>
                    </div>
                  </div>
                </div>
                <div class="group-162493">
                  <div class="x1-4">
                    <!-- <icon :className="iconProps.className" /> -->
                    <div class="group-162491-4">
                      <div
                        class="fully-responsive-4 inter-light-white-28px"
                      >
                        Analytics
                      </div>
                      <div
                        class="with-lots-of-unique-3 nunitosans-normal-white-22px"
                      >
                        We provide analytics for teachers to track your
                        students’ progress
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img class="add-2" :src="add3" />
      </div>
      <div class="overlap-group8-darkfoot">
        <div class="footer-dark">
          <a href="#place">
            <div class="group-162475">
              <img class="logo-icon-1-1" :src="logoIcon12" />
              <div class="repeately inter-bold-white-35px">
                {{ repeately }}
              </div>
            </div></a>
          <div class="x2020-ux-theme-all nunitosans-normal-white-26px-2">
            {{ x2020UxthemeAll }}
          </div>
        </div>
        <div class="group-162545">
          <a href="#about-us-title">
            <div class="about-us-1 inter-medium-white-28px">
              {{ aboutUs2 }}
            </div>
          </a>
          <a href="#about-us-title">
          <div class="features-2 inter-medium-white-28px">
            {{ features2 }}
          </div>
          </a>
          <a href="#organize-flashcards">
            <div class="flashcards-1 inter-medium-white-28px">
              {{ flashcards2 }}
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import Icon from "@/components/LandingPage/Icon.vue";

export default {
  name: "LandingPageLight",
  props: [
    "rectangle9521",
    "rectangle9522",
    "gradientShape",
    "buildYourNextLand",
    "createCustomLandin",
    "repeatly",
    "logoIcon11",
    "spanText1",
    "spanText2",
    "aboutUs1",
    "features1",
    "flashcards1",
    "bg",
    "aboutUsTitle",
    "aboutUsDescription",
    "rectangle95421",
    "scrigglyline2",
    "scrigglyline1",
    "scrigglyline",
    "add1",
    "add2",
    "maskGroup",
    "logoIcon2",
    "saveTonsOfTimeG",
    "getBetaAccess",
    "group162511",
    "zigzag",
    "darkTheme",
    "ellipse",
    "overlapGroup1",
    "rectangle95422",
    "marketing",
    "history",
    "language1",
    "generalEducation",
    "chemistry",
    "law1",
    "language2",
    "worldMaps",
    "economics",
    "physics",
    "language3",
    "watchThis1MinVid",
    "overlapGroup2",
    "rectangle95423",
    "networks",
    "filmTv",
    "geography",
    "politicalScience",
    "technology",
    "law2",
    "language4",
    "sociology",
    "dataStructures",
    "business",
    "language5",
    "explore",
    "theFeatureWeProvideForYou",
    "fullyResponsive1",
    "withLotsOfUnique1",
    "fullyResponsive2",
    "withLotsOfUnique2",
    "fullyResponsive3",
    "withLotsOfUnique3",
    "fullyResponsive4",
    "withLotsOfUnique4",
    "add3",
    "logoIcon12",
    "repeately",
    "x2020UxthemeAll",
    "aboutUs2",
    "features2",
    "flashcards2",
    "group16249321Props3",
  ],
};
</script>

<style>
.landing-page-dark-theme-1920 {
  align-items: flex-start;
  background-color: var(--eerie-black-42);
  display: flex;
  flex-direction: column;
  height: 4433px;
  overflow: hidden;
  width: 1920px;
}

.overlap-group9 {
  height: 4588px;
  margin-left: -520.33px;
  margin-top: -290px;
  position: relative;
  width: 2798px;
}

.overlap-group8-darkfoot {
  align-self: center;
  height: 54px;
  margin-left: 59px;
  margin-top: 63px;
  position: relative;
  width: 1681px;
}

.rectangle-9521 {
  height: 1187px;
  left: 1713px;
  position: absolute;
  top: 2844px;
  width: 997px;
}

.rectangle-9522 {
  height: 1321px;
  left: 1265px;
  position: absolute;
  top: 225px;
  width: 1534px;
}

.gradient-shape {
  height: 1469px;
  left: 140px;
  position: absolute;
  top: 0;
  width: 1445px;
}

.content-hero-title {
  display: flex;
  flex-direction: column;
  height: 470px;
  left: 640px;
  position: absolute;
  top: 544px;
  width: 756px;
}

.build-your-next-land-dark {
  height: 309px;
  letter-spacing: 0;
  line-height: 103px;
  width: 582px;
}

.create-custom-landin {
  height: 117px;
  letter-spacing: -0.66px;
  line-height: 39px;
  margin-top: 24px;
  width: 721px;
}

.repeatly {
  left: 731px;
  letter-spacing: 0;
  line-height: 56px;
  position: absolute;
  top: 339px;
  white-space: nowrap;
}

.logo-icon-1 {
  height: 74px;
  left: 640px;
  object-fit: cover;
  position: absolute;
  top: 332px;
  width: 74px;
}

.place {
  cursor: pointer;
  left: 1144px;
  position: absolute;
  text-align: right;
  top: 350px;
  transition: all 0.2s ease;
  width: 80px;
}

.span0 {
  letter-spacing: -0.14px;
}

.span1 {
  letter-spacing: 0;
}

.place:hover,
.about-us:hover,
.features:hover,
.flashcards:hover,
.button:hover,
.dark-theme-button:hover,
.group-162508-dark:hover,
.group-162508-1-dark:hover,
.about-us-1:hover,
.features-2:hover {
  transform: scale(1.1);
}

.about-us {
  cursor: pointer;
  left: 1288px;
  letter-spacing: 0;
  position: absolute;
  text-align: right;
  top: 350px;
  transition: all 0.2s ease;
  width: 129px;
}

.features {
  cursor: pointer;
  left: 1481px;
  letter-spacing: 0;
  position: absolute;
  text-align: right;
  top: 350px;
  transition: all 0.2s ease;
  width: 120px;
}

.flashcards {
  cursor: pointer;
  left: 1665px;
  letter-spacing: 0;
  position: absolute;
  text-align: right;
  top: 350px;
  transition: all 0.2s ease;
  width: 151px;
}

.bg {
  background-size: 100% 100%;
  height: 770px;
  left: 640px;
  position: absolute;
  top: 1486px;
  width: 1672px;
}

.group-162499 {
  display: flex;
  height: 156px;
  left: 640px;
  position: absolute;
  top: 1266px;
  width: 1723px;
}

.about-us-title {
  height: 140px;
  letter-spacing: 0;
  line-height: 70px;
  width: 756px;
}

.about-us-description {
  height: 156px;
  letter-spacing: -0.66px;
  line-height: 39px;
  margin-left: 84px;
  width: 879px;
}

.rectangle-9542 {
  height: 1091px;
  left: 0;
  position: absolute;
  top: 1752px;
  width: 1101px;
}

.scriggly-line2 {
  height: 32px;
  left: 1351px;
  position: absolute;
  top: 519px;
  width: 103px;
}

.scriggly-line1 {
  cursor: pointer;
  height: 35px;
  left: 2261px;
  position: absolute;
  top: 975px;
  transition: all 0.2s ease;
  width: 99px;
}

.scriggly-line1:hover,
.group-162532:hover,
.zig-zag:hover {
  transform: rotate(15deg);
}

.scriggly-line {
  height: 31px;
  left: 1618px;
  position: absolute;
  top: 3688px;
  width: 98px;
}

.ellipse-container {
  height: 63px;
  left: 2256px;
  position: absolute;
  top: 594px;
  width: 53px;
}

.ellipse-57 {
  border-radius: 20.91px;
  height: 42px;
  left: 0;
  position: absolute;
  top: 0;
  width: 42px;
}

.ellipse-dark {
    height: 21px;
    margin-left: 7.8px;
    margin-top: 6.5px;
    width: 21px;
}

.ellipse-58 {
  border-radius: 20.91px;
  height: 42px;
  left: 11px;
  position: absolute;
  top: 21px;
  width: 42px;
}

.add {
  height: 73px;
  left: 1455px;
  position: absolute;
  top: 826px;
  width: 73px;
}

.add-1 {
  height: 56px;
  left: 612px;
  position: absolute;
  top: 3078px;
  width: 56px;
}

.overlap-group2 {
  height: 648px;
  left: 1592px;
  position: absolute;
  top: 474px;
  width: 652px;
}

.rectangle-9541 {
  border-radius: 22.18px;
  height: 437px;
  left: 69px;
  position: absolute;
  top: 69px;
  transform: rotate(23.64deg);
  width: 437px;
}

.group-162532 {
  align-items: flex-start;
  cursor: pointer;
  display: flex;
  height: 570px;
  justify-content: flex-end;
  left: 82px;
  min-width: 570px;
  position: absolute;
  top: 78px;
  transition: all 0.2s ease;
}

.overlap-group1 {
  height: 580px;
  margin-top: -5.27px;
  position: relative;
  width: 580px;
}

.overlap-group {
  height: 580px;
  left: 0;
  position: absolute;
  top: 0;
  width: 580px;
}

.rectangle-9541-1 {
  background-color: var(--dull-lavender);
  border-radius: 22.18px;
  height: 441px;
  left: 70px;
  position: absolute;
  top: 70px;
  transform: rotate(23.64deg);
  width: 441px;
}

.mask-group {
  height: 570px;
  left: 4px;
  position: absolute;
  top: 5px;
  width: 570px;
}

.logo-icon-2 {
  height: 172px;
  left: 203px;
  object-fit: cover;
  position: absolute;
  top: 205px;
  width: 172px;
}

.cta {
  align-items: flex-start;
  display: flex;
  height: 363px;
  left: 748px;
  min-width: 1565px;
  position: absolute;
  top: 4225px;
}

.flex-col {
  align-items: center;
  align-self: center;
  display: flex;
  flex-direction: column;
  margin-top: 79.25px;
  min-height: 203px;
  width: 827px;
}

.save-tons-of-time-g {
  letter-spacing: 0;
  min-height: 84px;
  width: 827px;
}

.button {
  align-items: flex-start;
  border-radius: 6px;
  cursor: pointer;
  display: flex;
  margin-right: 66.09px;
  margin-top: 36px;
  overflow: hidden;
  transition: all 0.2s ease;
  width: 350px;
}

.bg-1 {
  background-color: var(--indigo);
  border-radius: 5px;
  cursor: pointer;
  height: 83px;
  left: 0;
  position: absolute;
  top: 0;
  transition: all 0.2s ease;
  width: 350px;
}

.get-beta-access-dark {
  flex: 1;
  height: 36px;
  letter-spacing: 0;
  margin-top: 25px;
  text-align: center;
}

.group-162511 {
  background-position: 50% 50%;
  background-size: cover;
  height: 363px;
  margin-left: 128px;
  margin-top: -0.05px;
  width: 608px;
}

.zig-zag {
  cursor: pointer;
  height: 100px;
  left: 724px;
  position: absolute;
  top: 2304px;
  transition: all 0.2s ease;
  width: 146px;
}

.dark-theme-button {
  background-color: var(--dull-lavender);
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  height: 69px;
  left: 931px;
  position: absolute;
  top: 1063px;
  transition: all 0.2s ease;
  width: 242px;
}

.frame-1dark {
  display: flex;
  height: 28.47px;
  margin-left: 31px;
  margin-top: 19px;
  width: 182.33px;
}

.dark-theme-1 {
  height: 30px;
  letter-spacing: 0;
  margin-left: -0.8px;
  margin-top: 5.2px;
  width: 153px;
}

.ellipse-59 {
  height: 21px;
  margin-left: 7.8px;
  margin-top: 3.5px;
  width: 21px;
}

.organize-flashcards {
  display: flex;
  height: 70px;
  left: 684px;
  position: absolute;
  top: 3244px;
  width: 836px;
}

.build-your-next-land-1 {
  height: 70px;
  letter-spacing: 0;
  width: 834px;
}

.overlap-group5-dark {
  height: 1058px;
  left: 500px;
  position: absolute;
  top: 3039px;
  width: 1699px;
}

.group-162511-1-dark {
  display: flex;
  height: 1058px;
  left: 0;
  position: absolute;
  top: 0;
  width: 1124px;
}

.group-162508-dark {
  align-items: flex-start;
  cursor: pointer;
  display: flex;
  height: 1057.7px;
  min-width: 1146px;
  transition: all 0.2s ease;
}

.overlap-group-2-dark {
  background-size: 100% 100%;
  height: 1058px;
  margin-top: -0.15px;
  position: relative;
  width: 1124px;
}

.rectangle-9542-1-dark {
  height: 445px;
  left: 157px;
  position: absolute;
  top: 303px;
  width: 840px;
}

.marketing {
  left: 700px;
  letter-spacing: 0;
  position: absolute;
  top: 364px;
}

.history {
  left: 261px;
  letter-spacing: 0;
  position: absolute;
  top: 364px;
}

.language {
  left: 667px;
  letter-spacing: 0;
  position: absolute;
  top: 449px;
}

.general-education {
  left: 721px;
  letter-spacing: 0;
  position: absolute;
  top: 519px;
  width: 221px;
}

.chemistry {
  left: 611px;
  letter-spacing: 0;
  position: absolute;
  top: 623px;
}

.law {
  left: 523px;
  letter-spacing: 0;
  position: absolute;
  top: 463px;
}

.language-1 {
  left: 251px;
  letter-spacing: 0;
  position: absolute;
  top: 542px;
}

.world-maps {
  left: 453px;
  letter-spacing: 0;
  position: absolute;
  top: 538px;
}

.economics {
  left: 261px;
  letter-spacing: 0;
  position: absolute;
  top: 623px;
}

.physics {
  left: 251px;
  letter-spacing: 0;
  position: absolute;
  top: 453px;
}

.language-2 {
  left: 487px;
  letter-spacing: 0;
  position: absolute;
  top: 378px;
}

.watch-this-1-min-vid {
  left: 1036px;
  letter-spacing: -0.66px;
  line-height: 39px;
  position: absolute;
  top: 435px;
  width: 663px;
}

.overlap-group6 {
  height: 1063px;
  left: 725px;
  position: absolute;
  top: 3464px;
  width: 1606px;
}

.group-162511-2 {
  display: flex;
  height: 1063px;
  left: 477px;
  position: absolute;
  top: 0;
  width: 1129px;
}

.group-162508-1-dark {
  align-items: flex-start;
  cursor: pointer;
  display: flex;
  height: 1062.8px;
  min-width: 1151.42px;
  transition: all 0.2s ease;
}

.overlap-group-3 {
  background-size: 100% 100%;
  height: 1063px;
  margin-top: -0.1px;
  position: relative;
  width: 1129px;
}

.rectangle-9542-2-dark {
  height: 447px;
  left: 158px;
  position: absolute;
  top: 305px;
  width: 844px;
}

.networks {
  left: 718px;
  letter-spacing: 0;
  position: absolute;
  top: 384px;
}

.film-tv {
  left: 229px;
  letter-spacing: 0;
  position: absolute;
  top: 370px;
}

.geography {
  left: 664px;
  letter-spacing: 0;
  position: absolute;
  top: 455px;
}

.political-science {
  left: 718px;
  letter-spacing: 0;
  position: absolute;
  top: 526px;
  width: 257px;
}

.technology {
  left: 600px;
  letter-spacing: 0;
  position: absolute;
  top: 630px;
}

.law-1 {
  left: 513px;
  letter-spacing: 0;
  position: absolute;
  top: 464px;
}

.language-3 {
  left: 219px;
  letter-spacing: 0;
  position: absolute;
  top: 549px;
}

.sociology {
  left: 469px;
  letter-spacing: 0;
  position: absolute;
  top: 550px;
}

.data-structures {
  left: 229px;
  letter-spacing: 0;
  position: absolute;
  top: 630px;
}

.business {
  left: 219px;
  letter-spacing: 0;
  position: absolute;
  top: 459px;
}

.language-4 {
  left: 493px;
  letter-spacing: 0;
  position: absolute;
  top: 375px;
}

.explore {
  left: 0;
  letter-spacing: -0.66px;
  line-height: 39px;
  position: absolute;
  text-align: right;
  top: 437px;
  width: 589px;
}

.features-1 {
  display: flex;
  flex-direction: column;
  height: 877px;
  left: 832px;
  position: absolute;
  top: 2328px;
  width: 1298px;
}

.the-feature-we-provide-for-you {
  height: 140px;
  letter-spacing: 0;
  line-height: 70px;
  margin-left: 301px;
  text-align: center;
  width: 695px;
}

.group-container {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  margin-top: 39px;
  min-height: 698px;
  width: 1296px;
}

.group-162495 {
  display: flex;
  height: 336px;
  position: relative;
  width: 1296px;
}

.group-162492 {
  align-items: flex-end;
  display: flex;
  height: 335.58px;
  justify-content: flex-end;
  min-width: 414.72px;
  padding: 23.5px 45.4px;
}

.x1,
.x1-1,
.x1-2 {
  display: flex;
  flex-direction: column;
  height: 258px;
  position: relative;
  width: 323px;
}

.group-162491 {
  display: flex;
  flex-direction: column;
  height: 158.84px;
  margin-left: 0;
  margin-top: 22.4px;
  width: 326.92px;
}

.fully-responsive {
  height: 38.03px;
  letter-spacing: -0.75px;
  margin-left: 54px;
  margin-top: 0;
  text-align: center;
  width: 214.92px;
}

.with-lots-of-unique {
  height: 93.96px;
  letter-spacing: -0.5px;
  line-height: 28px;
  margin-left: 0;
  margin-top: 26.8px;
  text-align: center;
  width: 322.92px;
}

.group-162494 {
  align-items: flex-end;
  display: flex;
  height: 335.58px;
  justify-content: flex-end;
  margin-left: 25.9px;
  min-width: 414.72px;
  padding: 23.5px 45.4px;
}

.group-162491-1 {
  display: flex;
  flex-direction: column;
  height: 158.84px;
  margin-top: 22.4px;
  width: 326.92px;
}

.fully-responsive-1 {
  height: 38.03px;
  letter-spacing: -0.75px;
  margin-left: 95px;
  text-align: center;
  width: 131.76px;
}

.with-lots-of-unique-1 {
  height: 93.96px;
  letter-spacing: -0.5px;
  line-height: 28px;
  margin-top: 26.8px;
  text-align: center;
  width: 322.92px;
}

.group-162496 {
  display: flex;
  height: 336px;
  margin-top: 27px;
  position: relative;
  width: 1296px;
}

.group-162494-1 {
  align-items: flex-end;
  display: flex;
  height: 335.58px;
  justify-content: flex-end;
  margin-top: 0;
  min-width: 414.72px;
  padding: 23.5px 45.4px;
}

.group-162491-2 {
  display: flex;
  flex-direction: column;
  height: 158.84px;
  margin-left: 0;
  margin-top: 22.4px;
  width: 326.92px;
}

.fully-responsive-2 {
  height: 38.03px;
  letter-spacing: 0;
  margin-left: 44.3px;
  margin-top: 0;
  text-align: center;
  width: 234.36px;
}

.group-162493 {
  align-items: flex-start;
  display: flex;
  height: 335.58px;
  justify-content: flex-end;
  margin-left: 25.9px;
  min-width: 414.72px;
  padding: 53.7px 45.4px;
}

.x1-3 {
  display: flex;
  flex-direction: column;
  height: 227px;
  position: relative;
  width: 323px;
}

.group-162491-3 {
  display: flex;
  flex-direction: column;
  height: 127.52px;
  margin-top: 22.4px;
  width: 326.92px;
}

.fully-responsive-3 {
  height: 38.03px;
  letter-spacing: 0;
  margin-left: 99.4px;
  text-align: center;
  width: 124.2px;
}

.with-lots-of-unique-2 {
  height: 62.64px;
  letter-spacing: -0.5px;
  line-height: 28px;
  margin-top: 26.8px;
  text-align: center;
  width: 322.92px;
}

.add-2 {
  height: 58px;
  left: 2220px;
  position: absolute;
  top: 2352px;
  width: 58px;
}

.overlap-group7 {
  align-self: center;
  height: 54px;
  margin-left: 59px;
  margin-top: 28px;
  position: relative;
  width: 1681px;
}

.footer-dark {
  align-items: center;
  display: flex;
  /* height: 54px; */
  /* left: 0; */
  /* min-width: 1681px; */
  position: absolute;
}

.group-162475 {
  align-items: flex-end;
  cursor: pointer;
  display: flex;
  min-width: 245px;
}

.logo-icon-1-1 {
  height: 54px;
  object-fit: cover;
  width: 54px;
}

.repeately {
  letter-spacing: 0;
  line-height: 49px;
  margin-bottom: 1px;
  margin-left: 17px;
  min-height: 49px;
  min-width: 172px;
  white-space: nowrap;
}

.x2020-ux-theme-all {
  letter-spacing: -0.5px;
  line-height: 38px;
  margin-left: 991px;
  margin-top: 4px;
  min-height: 38px;
  text-align: right;
  white-space: nowrap;
  width: 443px;
}

.group-162545 {
  align-items: flex-start;
  display: flex;
  height: 34px;
  left: 556px;
  min-width: 534px;
  position: absolute;
  top: 14px;
}

.about-us-1 {
  cursor: pointer;
  letter-spacing: 0;
  min-height: 34px;
  text-align: right;
  transition: all 0.2s ease;
  width: 129px;
}

.features-2 {
  cursor: pointer;
  letter-spacing: 0;
  margin-left: 64px;
  min-height: 34px;
  text-align: right;
  transition: all 0.2s ease;
  width: 120px;
}

.flashcards-1 {
  cursor: pointer;
  letter-spacing: 0;
  margin-left: 64px;
  min-height: 34px;
  text-align: right;
  width: 151px;
}

@keyframes animate-enter-frames {
  from {
    opacity: 0;
    transform: translate(-25px, 0);
  }
  to {
    opacity: 1;
    transform: translate(0, 0);
  }
}

@keyframes animate-enter2-frames {
  from {
    opacity: 0;
    transform: rotate(25deg);
  }
  to {
    opacity: 1;
    transform: rotate(0);
  }
}

@keyframes animate-enter3-frames {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes animate-enter5-frames {
  from {
    opacity: 0;
    transform: translate(25px, 0);
  }
  to {
    opacity: 1;
    transform: translate(0, 0);
  }
}

@keyframes animate-enter6-frames {
  from {
    opacity: 0;
    transform: translate(-25px, 0);
  }
  to {
    opacity: 1;
    transform: translate(0, 0);
  }
}

/**BALLS */
.balls {
  cursor: pointer;
  height: 73px;
  left: 2124px;
  opacity: 0;
  position: absolute;
  top: 3275px;
  transform: rotate(25deg);
  transition: all 0.2s ease;
  width: 62px;
}

.balls.animate-enter1 {
  animation: animate-enter1-frames 0.5s ease-in-out 0s 1 normal forwards;
  opacity: 0;
  transform: rotate(25deg);
}

.balls:hover {
  transform: rotate(15deg);
}

.ellipse-container-1 {
  height: 73px;
  position: relative;
}

.ellipse-57-1 {
  border-radius: 24.31px;
  height: 49px;
  left: 0;
  position: absolute;
  top: 0;
  width: 49px;
}

.ellipse-58-1 {
  border-radius: 24.31px;
  height: 49px;
  left: 13px;
  position: absolute;
  top: 24px;
  width: 49px;
}

@keyframes animate-enter1-frames {
  from {
    opacity: 0;
    transform: rotate(25deg);
  }
  to {
    opacity: 1;
    transform: rotate(0);
  }
}

/**Flashcard code */
.organize-flashcards {
  height: 70px;
  left: 684px;
  opacity: 0;
  position: absolute;
  top: 3244px;
  transform: translate(-25px, 0);
  width: 836px;
}

.organize-flashcards.animate-enter4 {
  animation: animate-enter4-frames 0.4s ease-in-out 0s 1 normal forwards;
  opacity: 0;
  transform: translate(-25px, 0);
}

.build-your-next-land-1,
.build-your-next-land-dark {
  animation: animate-enter4-frames 0.5s ease-in-out 0s 1 normal forwards;
}

@keyframes animate-enter4-frames {
  from {
    opacity: 0;
    transform: translate(-25px, 0);
  }
  to {
    opacity: 1;
    transform: translate(0, 0);
  }
}

/*Group 162493 */
.group-162493-1 {
  align-items: flex-end;
  display: flex;
  height: 335.58px;
  justify-content: flex-end;
  margin-left: 25.9px;
  min-width: 414.72px;
  padding: 23.5px 45.4px;
}

.x1-4 {
  display: flex;
  flex-direction: column;
  height: 258px;
  position: relative;
  width: 323px;
}

.group-162491-4 {
  display: flex;
  flex-direction: column;
  height: 158.84px;
  margin-left: 0;
  margin-top: 22.4px;
  width: 326.92px;
}

.fully-responsive-4 {
  height: 38.03px;
  letter-spacing: -0.75px;
  margin-left: 54px;
  margin-top: 0;
  text-align: center;
  width: 214.92px;
}

.with-lots-of-unique-3 {
  height: 93.96px;
  letter-spacing: -0.5px;
  line-height: 28px;
  margin-left: 0;
  margin-top: 26.8px;
  text-align: center;
  width: 322.92px;
}

.group-162493-1.group-162492-1 {
  align-items: flex-start;
  padding: 53.7px 45.4px;
}

.group-162493-1.group-162492-1 .x1-4 {
  height: 227px;
}

.group-162493-1.group-162492-1 .group-162491-4 {
  height: 127.52px;
}

.group-162493-1.group-162492-1 .with-lots-of-unique-3 {
  height: 62.64px;
}

/**LOGIN */
.login-button {
  align-items: flex-start;
  cursor: pointer;
  display: flex;
  height: 61px;
  left: 1907px;
  min-width: 220px;
  position: absolute;
  top: 337px;
  transition: all 0.2s ease;
}

.login-button:hover {
  transform: scale(1.1);
}

.overlap-group3 {
  -webkit-backdrop-filter: blur(2px) brightness(100%);
  align-items: flex-end;
  backdrop-filter: blur(2px) brightness(100%);
  background-color: var(--dull-lavender);
  border-radius: 10px;
  display: flex;
  height: 63px;
  margin-left: -1px;
  margin-top: -1px;
  min-width: 220px;
  padding: 15.9px 11.1px;
}

.get-beta-access-1 {
  letter-spacing: -0.5px;
  min-height: 25px;
  text-align: center;
  width: 195px;
}

/**OUr Features */
.our-features {
  background-color: var(--dull-lavender);
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  height: 69px;
  left: 640px;
  position: absolute;
  top: 1063px;
  transition: all 0.2s ease;
  width: 242px;
}

.our-features:hover {
  transform: scale(1.1);
}

.frame-1-1dark {
  display: flex;
  height: 28.47px;
  margin-left: 27px;
  margin-top: 25px;
  width: 194px;
}

.our-features-1-dark {
  height: 30px;
  letter-spacing: 0;
  margin-left: -3.7px;
  margin-top: -0.8px;
  width: 159px;
}

.arrow-right-up {
  height: 29px;
  margin-left: 7.7px;
  margin-top: -0.5px;
  width: 29px;
}

/**Register Button */
.register-button {
  align-items: flex-start;
  cursor: pointer;
  display: flex;
  height: 61px;
  left: 2142px;
  min-width: 220px;
  position: absolute;
  top: 337px;
  transition: all 0.2s ease;
}

.register-button:hover {
  transform: scale(1.1);
}

.overlap-group4 {
  -webkit-backdrop-filter: blur(2px) brightness(100%);
  align-items: flex-end;
  backdrop-filter: blur(2px) brightness(100%);
  background-color: var(--eerie-black-22);
  border-radius: 10px;
  display: flex;
  height: 63px;
  margin-left: -1px;
  margin-top: -1px;
  min-width: 220px;
  padding: 15.4px 11.8px;
}

.get-beta-access-2 {
  letter-spacing: -0.5px;
  min-height: 25px;
  text-align: center;
  width: 195px;
}

.group-162493-1 {
  align-items: flex-end;
  display: flex;
  height: 335.58px;
  justify-content: flex-end;
  margin-left: 25.9px;
  min-width: 414.72px;
  padding: 23.5px 45.4px;
}

.x1-4 {
  display: flex;
  flex-direction: column;
  height: 258px;
  position: relative;
  width: 323px;
}

.group-162491-4 {
  display: flex;
  flex-direction: column;
  height: 158.84px;
  margin-left: 0;
  margin-top: 22.4px;
  width: 326.92px;
}

.fully-responsive-4 {
  height: 38.03px;
  letter-spacing: -0.75px;
  margin-left: 54px;
  margin-top: 0;
  text-align: center;
  width: 214.92px;
}

.with-lots-of-unique-3 {
  height: 93.96px;
  letter-spacing: -0.5px;
  line-height: 28px;
  margin-left: 0;
  margin-top: 26.8px;
  text-align: center;
  width: 322.92px;
}

.group-162493-1.group-162492-1 {
  align-items: flex-start;
  padding: 53.7px 45.4px;
}

.group-162493-1.group-162492-1 .x1-4 {
  height: 227px;
}

.group-162493-1.group-162492-1 .group-162491-4 {
  height: 127.52px;
}

.group-162493-1.group-162492-1 .with-lots-of-unique-3 {
  height: 62.64px;
}

.inter-bold-white-40px {
  color: var(--white);
  font-family: var(--font-family-inter);
  font-size: var(--font-size-xxxxl);
  font-style: normal;
  font-weight: 700;
}

.inter-medium-white-28px {
  color: var(--white);
  font-family: var(--font-family-inter);
  font-size: var(--font-size-m2);
  font-style: normal;
  font-weight: 500;
}

.inter-light-white-28px {
  color: var(--white);
  font-family: var(--font-family-inter);
  font-size: var(--font-size-m2);
  font-style: normal;
  font-weight: 300;
}

.nunitosans-normal-white-22px {
  color: var(--white-23);
  font-family: var(--font-family-nunito_sans);
  font-size: var(--font-size-xl2);
  font-style: normal;
  font-weight: 400;
}

.inter-bold-white-25px {
  color: var(--white);
  font-family: var(--font-family-inter);
  font-size: 25px;
  font-style: normal;
  font-weight: 700;
}

.inter-bold-white-60px {
  color: var(--white);
  font-family: var(--font-family-inter);
  font-size: 60px;
  font-style: normal;
  font-weight: 700;
}

.inter-normal-white-20px {
  color: var(--white);
  font-family: var(--font-family-inter);
  font-size: var(--font-size-s22);
  font-style: normal;
  font-weight: 400;
}

.nunitosans-normal-white-35px {
  color: var(--white-23);
  font-family: var(--font-family-nunito_sans);
  font-size: var(--font-size-xxxl);
  font-style: normal;
  font-weight: 400;
}

.inter-bold-white-100px {
  color: var(--white);
  font-family: var(--font-family-inter);
  font-size: 100px;
  font-style: normal;
  font-weight: 700;
}

.nunitosans-normal-white-30px {
  color: var(--white-23);
  font-family: var(--font-family-nunito_sans);
  font-size: var(--font-size-l2);
  font-style: normal;
  font-weight: 400;
}

.inter-bold-white-75px {
  color: var(--white);
  font-family: var(--font-family-inter);
  font-size: 75px;
  font-style: normal;
  font-weight: 700;
}

.nunitosans-normal-white-26px {
  color: var(--white-23);
  font-family: var(--font-family-nunito_sans);
  font-size: var(--font-size-xxxxl2);
  font-style: normal;
  font-weight: 400;
}

.inter-bold-white-30px {
  color: var(--white);
  font-family: var(--font-family-inter);
  font-size: var(--font-size-l2);
  font-style: normal;
  font-weight: 700;
}

.inter-bold-white-58px {
  color: var(--white);
  font-family: var(--font-family-inter);
  font-size: 58px;
  font-style: normal;
  font-weight: 700;
}

.nunitosans-normal-white-20px {
  color: var(--white-23);
  font-family: var(--font-family-nunito_sans);
  font-size: var(--font-size-s22);
  font-style: normal;
  font-weight: 400;
}

.inter-bold-white-35px {
  color: var(--white);
  font-family: var(--font-family-inter);
  font-size: var(--font-size-xxxl);
  font-style: normal;
  font-weight: 700;
}

.nunitosans-normal-white-26px-2 {
  color: var(--white);
  font-family: var(--font-family-nunito_sans);
  font-size: var(--font-size-xxxxl2);
  font-style: normal;
  font-weight: 400;
}

.border-1px-white {
  border: 1px solid var(--white);
}

.border-3px-white {
  border: 3px solid var(--white);
}

.border-3-6px-white {
  border: 3.6px solid var(--white);
}

.border-1-2px-white {
  border: 1.2px solid var(--white);
}

.border-2px-white {
  border: 2px solid var(--white);
}

.border-4px-white {
  border: 4px solid var(--white);
}

</style>
