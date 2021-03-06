import { createRouter, createWebHistory } from "vue-router";
import LandingPageLight from "@/views/LandingPageLight.vue";
import LandingPageDark from "@/views/LandingPageDark.vue";
// import { data } from "./data";
import SignIn from "@/views/SignIn.vue";
import Settings from "@/views/Settings.vue";
import Home from "@/views/Home.vue";
import ForgetPassword from "@/views/ForgetPassword.vue";
import Registration from "@/views/Registration.vue";
import ForgetPasswordStatus from "@/views/ForgetPasswordStatus.vue";
import CreateDeck from "@/views/CreateDeck.vue";
import StudyDeck from "@/views/StudyDeckQuestion.vue";

import ViewCardDeck from "@/views/ViewCardDeck.vue";
import StudyDeckAnswer from "@/views/StudyDeckAnswer.vue";
import EditCardDeck from "@/views/EditCardDeck.vue";

import Groups from "@/views/Groups.vue";
import createGroup from "@/views/CreateGroup.vue";
import students from "@/views/Students.vue";
import addStudent from "@/views/AddStudents.vue";
import StudentStudyDeckStats from "@/views/StudentStudyDeckStats";

import PickUser from "@/views/PickUser.vue";
import ViewGroupDeck from "@/views/ViewGroupDeck.vue";
import EditGroup from "@/views/EditGroup.vue";
import CreateGroupDeck from "@/views/CreateGroupDeck";
import ViewGroupCardDeck from "@/views/ViewGroupCardDeck.vue";
import EditGroupCardDeck from "@/views/EditGroupCardDeck.vue";

const routes = [
	{
		path: "/",
		name: "LandingPageLight",
		component: LandingPageLight,
		props: {
			rectangle9521: require("../img/LandingPageLight/shades2.png"),
			rectangle9522: require("../img/LandingPageLight/shades2.png"),
			gradientShape: require("../img/LandingPageLight/shades3.png"),
			buildYourNextLand: "Learn it.<br />Repeat it.<br />Repeatly.",
			createCustomLandin:
				"With our interactive flashcards, aceing your exams will be a piece of cake. With the help of technology, learning will never be the same again.",
			repeatly: "Repeatly",
			logoIcon11: require("../img/repeatlyIcon.png"),
			spanText1: "Home",
			aboutUs1: "About Us",
			features1: "Features",
			flashcards1: "Flashcards",
			bg: require("../img/LandingPageLight/video.png"),
			aboutUsTitle: "Supercharge your learning with us",
			aboutUsDescription:
				"Using research backed active recall and spaced repetition, our software will enable you to recall and retain information for your exams like never before. Created by 5 Business Analytics students from the National University of Singapore who felt learning could be supercharged through spaced repetition.",
			rectangle95421: require("../img/LandingPageLight/shades.png"),
			scrigglyline2: require("../img/LandingPageLight/scriggly-line.png"),
			scrigglyline1: require("../img/LandingPageLight/scriggly-line.png"),
			scrigglyline: require("../img/LandingPageLight/scriggly-line.png"),
			add1: require("../img/LandingPageLight/add-1@2x.png"),
			add2: require("../img/LandingPageLight/add-1@2x.png"),
			maskGroup: require("../img/LandingPageLight/mask-group-6@1x.png"),
			logoIcon2: require("../img/repeatlyIcon.png"),
			saveTonsOfTimeG: "Start Using Repeatly Today",
			getBetaAccess: "Sign Up",
			group162511: require("../img/LandingPageLight/learn.png"),
			zigzag: require("../img/LandingPageLight/scriggly-line@2x.png"),
			darkTheme: "Dark Theme",
			ellipse: require("../img/LandingPageLight/ourFeaturesEllipse.png"),
			overlapGroup1: require("../img/LandingPageLight/mask-group-8@1x.png"),
			rectangle95422: require("../img/LandingPageLight/rectangle-9542-11@1x.png"),
			marketing: "marketing",
			history: "history",
			language1: "malay",
			generalEducation: "general education",
			chemistry: "chemistry",
			law1: "law",
			language2: "chinese",
			worldMaps: "world maps",
			economics: "economics",
			physics: "physics",
			language3: "english",
			watchThis1MinVid:
				"Explore all pre-made flashcards created by others. Searching our wide database created by other Repeatly users and organize them into your library.",
			overlapGroup2: require("../img/LandingPageLight/mask-group-8@1x.png"),
			rectangle95423: require("../img/LandingPageLight/rectangle-9542-11@1x.png"),
			networks: "networks",
			filmTv: "film & tv",
			geography: "geography",
			politicalScience: "political science",
			technology: "technology",
			law2: "law",
			language4: "french",
			sociology: "sociology",
			dataStructures: "data structures",
			business: "business",
			language5: "english",
			explore:
				"Using Repeatly is a great way to study and revise. Allowing students to recap topics on the go that would otherwise be mundane.",
			theFeatureWeProvideForYou: "The Feature We Provide For You",
			fullyResponsive1: "Security",
			withLotsOfUnique1:
				"We protect your data only with the best encryption and privacy focused features",
			fullyResponsive2: "Personalised",
			withLotsOfUnique2:
				"Create a more personalised learning through different colour theme and gamification",
			fullyResponsive3: "Create Your Own",
			withLotsOfUnique3:
				"Create your own flashcard or refer to our database of created flashcards",
			fullyResponsive4: "Leaderboard",
			withLotsOfUnique4:
				"Challenge yourself with friends, peers and students worldwide",
			fullyResponsive5: "Scalability",
			withLotsOfUnique5:
				"We provide flexibility to accomodate teachers with large number of students",
			fullyResponsive6: "Analytics",
			withLotsOfUnique6:
				"We provide analytics for teachers to track your students??? progress",
			add3: require("../img/LandingPageLight/add-1@2x.png"),
			logoIcon12: require("../img/repeatlyIcon.png"),
			repeately: "Repeately",
			x2020UxthemeAll: "?? 2022 Repeatly, All Rights Reserved",
			aboutUs2: "About Us",
			features2: "Features",
			flashcards2: "Flashcards",
			group16249321Props3: {
				fullyResponsive: "Leaderboard",
				withLotsOfUnique:
					"Challenge yourself with friends, peers and students worldwide",
				className: "group-162492-1",
				iconProps: { className: "icon-4" },
			},
			icon1Props: { className: "icon-2" },
			icon2Props2: { className: "icon-3" },
			group16249322Props: {
				fullyResponsive: "Leaderboard",
				withLotsOfUnique:
					"Challenge yourself with friends, peers and students worldwide",
				className: "group-162492-1",
				iconProps: { className: "icon-4" },
			},
			icon3Props: { className: "icon-5" },
		},
	},
	{
		path: "/dark-theme",
		name: "LandingPageDark",
		component: LandingPageDark,
		props: {
			ellipse: require("../img/LandingPageLight/ourFeaturesEllipse.png"),
			rectangle9521: require("../img/LandingPageDark/shades.png"),
			rectangle9522: require("../img/LandingPageDark/shades2.png"),
			gradientShape: require("../img/LandingPageDark/shades3.png"),
			repeatly: "Repeatly",
			logoIcon11: require("../img/repeatlyIcon.png"),
			spanText1: "Home",
			aboutUs1: "About Us",
			features1: "Features",
			flashcards1: "Flashcards",
			bg: require("../img/LandingPageLight/video.png"),
			aboutUsTitle: "Supercharge your learning with us",
			aboutUsDescription:
				"Using research backed active recall and spaced repetition, our software will enable you to recall and retain information for your exams like never before. Created by 5 Business Analytics students from the National University of Singapore who felt learning could be supercharged through spaced repetition.",
			rectangle95421: require("../img/LandingPageDark/shades5.png"),
			scrigglyline2: require("../img/LandingPageDark/zigzag.png"),
			scrigglyline1: require("../img/LandingPageDark/zigzag2.png"),
			scrigglyline: require("../img/LandingPageDark/zigzag3.png"),
			add1: require("../img/LandingPageDark/add1.png"),
			add2: require("../img/LandingPageDark/add2.png"),
			maskGroup: require("../img/LandingPageDark/maskgroup.png"),
			logoIcon2: require("../img/LandingPageDark/repeatlylogo.png"),
			saveTonsOfTimeG: "Start Using Repeatly Today",
			getBetaAccess: "Sign Up",
			group162511: require("../img/LandingPageLight/learn.png"),
			zigzag: require("../img/LandingPageDark/zigzag4.png"),
			lightTheme: "Dark Theme",
			ellipse59: require("../img/LandingPageDark/ecllipsedarktheme.png"),
			buildYourNextLand2: "Find and organize flashcards.",
			overlapGroup1: require("../img/LandingPageDark/maskgroup2.png"),
			rectangle95422: require("../img/LandingPageDark/rectangle.png"),
			marketing: "marketing",
			history: "history",
			language1: "malay",
			generalEducation: "general education",
			chemistry: "chemistry",
			law1: "law",
			language2: "chinese",
			worldMaps: "world maps",
			economics: "economics",
			physics: "physics",
			language3: "english",
			watchThis1MinVid:
				"Explore all pre-made flashcards created by others. Searching our wide database created by other Repeatly users and organize them into your library.",
			overlapGroup2: require("../img/LandingPageDark/maskgroup3.png"),
			rectangle95423: require("../img/LandingPageDark/rectangle.png"),
			networks: "networks",
			filmTv: "film & tv",
			geography: "geography",
			politicalScience: "political science",
			technology: "technology",
			law2: "law",
			language4: "french",
			sociology: "sociology",
			dataStructures: "data structures",
			business: "business",
			language5: "english",
			explore:
				"Using Repeatly is a great way to study and revise. Allowing students to recap topics on the go that would otherwise be mundane.",
			theFeatureWeProvideForYou: "The Feature We Provide For You",
			fullyResponsive1: "Security",
			withLotsOfUnique1:
				"We protect your data only with the best encryption and privacy focused features",
			fullyResponsive2: "Scalability",
			withLotsOfUnique2:
				"We provide flexibility to accomodate teachers with large number of students",
			fullyResponsive3: "Create Your Own",
			withLotsOfUnique3:
				"Create your own flashcard or refer to our database of created flashcards",
			fullyResponsive4: "Leaderboard",
			withLotsOfUnique4:
				"Challenge yourself with friends, peers and students worldwide",
			add3: require("../img/LandingPageDark/add3.png"),
			logoIcon12: require("../img/repeatlyIcon.png"),
			repeately: "Repeately",
			x2020UxthemeAll: "?? 2022 Repeatly, All Rights Reserved",
			aboutUs2: "About Us",
			features2: "Features",
			flashcards2: "Flashcards",
			group1624931Props2: {
				fullyResponsive: "Personalised",
				withLotsOfUnique:
					"Create a more personalised learning through different colour theme and gamification",
				iconProps: {
					className: "icon-1",
				},
			},
			icon1Props: {
				className: "icon-2",
			},
			icon2Props2: {
				className: "icon-3",
			},
			group1624932Props: {
				fullyResponsive: "Leaderboard",
				withLotsOfUnique:
					"Challenge yourself with friends, peers and students worldwide",
				className: "group-162492-1",
				iconProps: {
					className: "icon-4",
				},
			},
			icon3Props: {
				className: "icon-5",
			},
		},
	},
	{
		path: "/forgot-password",
		name: "ForgetPassword",
		component: ForgetPassword,
	},
	{
		path: "/registration",
		name: "Registration",
		component: Registration,
	},

	{
		path: "/password-status",
		name: "ForgetPasswordStatus",
		component: ForgetPasswordStatus,
		props: true,
	},

	{
		path: "/study-student-stats",
		name: "StudentStudyDeckStats",
		component: StudentStudyDeckStats,
	},
	{
		path: "/sign-in",
		name: "SignIn",
		component: SignIn,
		props: {
			backgroundSetup: require("../img/Login/background.png"),
			rectangle9521: require("../img/Login/shades.png"),
			spanText1: "Don???t have an account? ",
			spanText2: "Sign up now",
			socialMediaLoginProps: SignIn.socialMediaLoginProps,
		},
	},
	{
		path: "/home",
		name: "Home",
		component: Home,
		props: {
			MyDashboard: "My Dashboard",
		},
	},
	{
		path: "/create-deck",
		name: "CreateDeck",
		component: CreateDeck,
		props: {
			MyDashboard: "Create Deck",
		},
	},

	{
		path: "/create-group-deck",
		name: "CreateGroupDeck",
		component: CreateGroupDeck,
		props: {
			MyDashboard: "Create Group Deck",
		},
	},

	{
		path: "/settings",
		name: "Settings",
		component: Settings,
	},
	{
		path: "/groups",
		name: "Groups",
		component: Groups,
		props: {
			MyDashboard: "Groups",
		},
	},
	{
		path: "/create-group",
		name: "createGroup",
		component: createGroup,
		props: {
			MyDashboard: "Create Your Group",
		},
	},
	{
		path: "/edit-group",
		name: "editGroup",
		component: EditGroup,
		props: {
			MyDashboard: "Edit Group",
		},
	},
	{
		path: "/study-deck",
		name: "StudyDeck",
		component: StudyDeck,
		props: {
			MyDashboard: "Card Deck Details",
		},
	},
	{
		path: "/view-card-deck",
		name: "ViewCardDeck",
		component: ViewCardDeck,
		props: {
			MyDashboard: "Question",
		},
	},
	{
		path: "/study-deck-answer",
		name: "StudyDeckAnswer",
		component: StudyDeckAnswer,
	},
	{
		path: "/students",
		name: "students",
		component: students,
		props: {
			MyDashboard: "My Students",
		},
	},
	{
		path: "/add-students",
		name: "addStudent",
		component: addStudent,
		props: {
			MyDashboard: "Add Students",
		},
	},
	{
		path: "/edit-card-deck",
		name: "EditCardDeck",
		component: EditCardDeck,
		props: {
			MyDashboard: "Edit Study Questions",
		},
	},
	{
		path: "/pick-user",
		name: "PickUser",
		component: PickUser,
	},
	{
		path: "/view-group-deck",
		name: "ViewGroupDeck",
		component: ViewGroupDeck,
		props: {
			MyDashboard: "View Group Deck",
		},
	},
	{
		path: "/:catchAll(.*)",
		name: "LandingPageLight",
		component: LandingPageLight,
		props: {
			rectangle9521: require("../img/LandingPageLight/shades2.png"),
			rectangle9522: require("../img/LandingPageLight/shades2.png"),
			gradientShape: require("../img/LandingPageLight/shades3.png"),
			buildYourNextLand: "Learn it.<br />Repeat it.<br />Repeatly.",
			createCustomLandin:
				"With our interactive flashcards, aceing your exams will be a piece of cake. With the help of technology, learning will never be the same again.",
			repeatly: "Repeatly",
			logoIcon11: require("../img/repeatlyIcon.png"),
			spanText1: "Home",
			aboutUs1: "About Us",
			features1: "Features",
			flashcards1: "Flashcards",
			bg: require("../img/LandingPageLight/video.png"),
			aboutUsTitle: "Supercharge your learning with us",
			aboutUsDescription:
				"Using research backed active recall and spaced repetition, our software will enable you to recall and retain information for your exams like never before. Created by 5 Business Analytics students from the National University of Singapore who felt learning could be supercharged through spaced repetition.",
			rectangle95421: require("../img/LandingPageLight/shades.png"),
			scrigglyline2: require("../img/LandingPageLight/scriggly-line.png"),
			scrigglyline1: require("../img/LandingPageLight/scriggly-line.png"),
			scrigglyline: require("../img/LandingPageLight/scriggly-line.png"),
			add1: require("../img/LandingPageLight/add-1@2x.png"),
			add2: require("../img/LandingPageLight/add-1@2x.png"),
			maskGroup: require("../img/LandingPageLight/mask-group-6@1x.png"),
			logoIcon2: require("../img/repeatlyIcon.png"),
			saveTonsOfTimeG: "Start Using Repeatly Today",
			getBetaAccess: "Sign Up",
			group162511: require("../img/LandingPageLight/learn.png"),
			zigzag: require("../img/LandingPageLight/scriggly-line@2x.png"),
			darkTheme: "Dark Theme",
			ellipse: require("../img/LandingPageLight/ourFeaturesEllipse.png"),
			overlapGroup1: require("../img/LandingPageLight/mask-group-8@1x.png"),
			rectangle95422: require("../img/LandingPageLight/rectangle-9542-11@1x.png"),
			marketing: "marketing",
			history: "history",
			language1: "malay",
			generalEducation: "general education",
			chemistry: "chemistry",
			law1: "law",
			language2: "chinese",
			worldMaps: "world maps",
			economics: "economics",
			physics: "physics",
			language3: "english",
			watchThis1MinVid:
				"Explore all pre-made flashcards created by others. Searching our wide database created by other Repeatly users and organize them into your library.",
			overlapGroup2: require("../img/LandingPageLight/mask-group-8@1x.png"),
			rectangle95423: require("../img/LandingPageLight/rectangle-9542-11@1x.png"),
			networks: "networks",
			filmTv: "film & tv",
			geography: "geography",
			politicalScience: "political science",
			technology: "technology",
			law2: "law",
			language4: "french",
			sociology: "sociology",
			dataStructures: "data structures",
			business: "business",
			language5: "english",
			explore:
				"Using Repeatly is a great way to study and revise. Allowing students to recap topics on the go that would otherwise be mundane.",
			theFeatureWeProvideForYou: "The Feature We Provide For You",
			fullyResponsive1: "Security",
			withLotsOfUnique1:
				"We protect your data only with the best encryption and privacy focused features",
			fullyResponsive2: "Personalised",
			withLotsOfUnique2:
				"Create a more personalised learning through different colour theme and gamification",
			fullyResponsive3: "Create Your Own",
			withLotsOfUnique3:
				"Create your own flashcard or refer to our database of created flashcards",
			fullyResponsive4: "Leaderboard",
			withLotsOfUnique4:
				"Challenge yourself with friends, peers and students worldwide",
			fullyResponsive5: "Scalability",
			withLotsOfUnique5:
				"We provide flexibility to accomodate teachers with large number of students",
			fullyResponsive6: "Analytics",
			withLotsOfUnique6:
				"We provide analytics for teachers to track your students??? progress",
			add3: require("../img/LandingPageLight/add-1@2x.png"),
			logoIcon12: require("../img/repeatlyIcon.png"),
			repeately: "Repeately",
			x2020UxthemeAll: "?? 2022 Repeatly, All Rights Reserved",
			aboutUs2: "About Us",
			features2: "Features",
			flashcards2: "Flashcards",
			group16249321Props3: {
				fullyResponsive: "Leaderboard",
				withLotsOfUnique:
					"Challenge yourself with friends, peers and students worldwide",
				className: "group-162492-1",
				iconProps: { className: "icon-4" },
			},
			icon1Props: { className: "icon-2" },
			icon2Props2: { className: "icon-3" },
			group16249322Props: {
				fullyResponsive: "Leaderboard",
				withLotsOfUnique:
					"Challenge yourself with friends, peers and students worldwide",
				className: "group-162492-1",
				iconProps: { className: "icon-4" },
			},
			icon3Props: { className: "icon-5" },
		},
	},
	{
		path: "/settings",
		name: "Settings",
		component: Settings,
	},
	{
		path: "/groups",
		name: "Groups",
		component: Groups,
		props: {
			MyDashboard: "Groups",
		},
	},
	{
		path: "/create-group",
		name: "createGroup",
		component: createGroup,
		props: {
			MyDashboard: "Create Your Group",
		},
	},
	{
		path: "/edit-group",
		name: "editGroup",
		component: EditGroup,
		props: {
			MyDashboard: "Edit Group",
		},
	},
	{
		path: "/study-deck",
		name: "StudyDeck",
		component: StudyDeck,
		props: {
			MyDashboard: "Card Deck Details",
		},
	},
	{
		path: "/view-card-deck",
		name: "ViewCardDeck",
		component: ViewCardDeck,
		props: {
			MyDashboard: "Question",
		},
	},
	{
		path: "/study-deck-answer",
		name: "StudyDeckAnswer",
		component: StudyDeckAnswer,
	},
	{
		path: "/students",
		name: "students",
		component: students,
		props: {
			MyDashboard: "My Students",
		},
	},
	{
		path: "/add-students",
		name: "addStudent",
		component: addStudent,
		props: {
			MyDashboard: "Add Students",
		},
	},
	{
		path: "/edit-card-deck",
		name: "EditCardDeck",
		component: EditCardDeck,
		props: {
			MyDashboard: "Edit Study Questions",
		},
	},
	{
		path: "/pick-user",
		name: "PickUser",
		component: PickUser,
	},
	{
		path: "/view-group-deck",
		name: "ViewGroupDeck",
		component: ViewGroupDeck,
		props: {
			MyDashboard: "View Group Deck",
		},
	},
	{
		path: "/view-group-card-deck",
		name: "ViewGroupCardDeck",
		component: ViewGroupCardDeck,
		props: {
			MyDashboard: "View Group Card Deck",
		},
	},
	{
		path: "/edit-group-card-deck",
		name: "EditGroupCardDeck",
		component: EditGroupCardDeck,
		props: {
			MyDashboard: "Edit Study Questions",
		},
	},
	{
		path: "/:catchAll(.*)",
		name: "LandingPageLight",
		component: LandingPageLight,
		props: {
			rectangle9521: require("../img/LandingPageLight/shades2.png"),
			rectangle9522: require("../img/LandingPageLight/shades2.png"),
			gradientShape: require("../img/LandingPageLight/shades3.png"),
			buildYourNextLand: "Learn it.<br />Repeat it.<br />Repeatly.",
			createCustomLandin:
				"With our interactive flashcards, aceing your exams will be a piece of cake. With the help of technology, learning will never be the same again.",
			repeatly: "Repeatly",
			logoIcon11: require("../img/repeatlyIcon.png"),
			spanText1: "Home",
			aboutUs1: "About Us",
			features1: "Features",
			flashcards1: "Flashcards",
			bg: require("../img/LandingPageLight/video.png"),
			aboutUsTitle: "Supercharge your learning with us",
			aboutUsDescription:
				"Using research backed active recall and spaced repetition, our software will enable you to recall and retain information for your exams like never before. Created by 5 Business Analytics students from the National University of Singapore who felt learning could be supercharged through spaced repetition.",
			rectangle95421: require("../img/LandingPageLight/shades.png"),
			scrigglyline2: require("../img/LandingPageLight/scriggly-line.png"),
			scrigglyline1: require("../img/LandingPageLight/scriggly-line.png"),
			scrigglyline: require("../img/LandingPageLight/scriggly-line.png"),
			add1: require("../img/LandingPageLight/add-1@2x.png"),
			add2: require("../img/LandingPageLight/add-1@2x.png"),
			maskGroup: require("../img/LandingPageLight/mask-group-6@1x.png"),
			logoIcon2: require("../img/repeatlyIcon.png"),
			saveTonsOfTimeG: "Start Using Repeatly Today",
			getBetaAccess: "Sign Up",
			group162511: require("../img/LandingPageLight/learn.png"),
			zigzag: require("../img/LandingPageLight/scriggly-line@2x.png"),
			darkTheme: "Dark Theme",
			ellipse: require("../img/LandingPageLight/ourFeaturesEllipse.png"),
			overlapGroup1: require("../img/LandingPageLight/mask-group-8@1x.png"),
			rectangle95422: require("../img/LandingPageLight/rectangle-9542-11@1x.png"),
			marketing: "marketing",
			history: "history",
			language1: "malay",
			generalEducation: "general education",
			chemistry: "chemistry",
			law1: "law",
			language2: "chinese",
			worldMaps: "world maps",
			economics: "economics",
			physics: "physics",
			language3: "english",
			watchThis1MinVid:
				"Explore all pre-made flashcards created by others. Searching our wide database created by other Repeatly users and organize them into your library.",
			overlapGroup2: require("../img/LandingPageLight/mask-group-8@1x.png"),
			rectangle95423: require("../img/LandingPageLight/rectangle-9542-11@1x.png"),
			networks: "networks",
			filmTv: "film & tv",
			geography: "geography",
			politicalScience: "political science",
			technology: "technology",
			law2: "law",
			language4: "french",
			sociology: "sociology",
			dataStructures: "data structures",
			business: "business",
			language5: "english",
			explore:
				"Using Repeatly is a great way to study and revise. Allowing students to recap topics on the go that would otherwise be mundane.",
			theFeatureWeProvideForYou: "The Feature We Provide For You",
			fullyResponsive1: "Security",
			withLotsOfUnique1:
				"We protect your data only with the best encryption and privacy focused features",
			fullyResponsive2: "Personalised",
			withLotsOfUnique2:
				"Create a more personalised learning through different colour theme and gamification",
			fullyResponsive3: "Create Your Own",
			withLotsOfUnique3:
				"Create your own flashcard or refer to our database of created flashcards",
			fullyResponsive4: "Leaderboard",
			withLotsOfUnique4:
				"Challenge yourself with friends, peers and students worldwide",
			fullyResponsive5: "Scalability",
			withLotsOfUnique5:
				"We provide flexibility to accomodate teachers with large number of students",
			fullyResponsive6: "Analytics",
			withLotsOfUnique6:
				"We provide analytics for teachers to track your students??? progress",
			add3: require("../img/LandingPageLight/add-1@2x.png"),
			logoIcon12: require("../img/repeatlyIcon.png"),
			repeately: "Repeately",
			x2020UxthemeAll: "?? 2022 Repeatly, All Rights Reserved",
			aboutUs2: "About Us",
			features2: "Features",
			flashcards2: "Flashcards",
			group16249321Props3: {
				fullyResponsive: "Leaderboard",
				withLotsOfUnique:
					"Challenge yourself with friends, peers and students worldwide",
				className: "group-162492-1",
				iconProps: { className: "icon-4" },
			},
			icon1Props: { className: "icon-2" },
			icon2Props2: { className: "icon-3" },
			group16249322Props: {
				fullyResponsive: "Leaderboard",
				withLotsOfUnique:
					"Challenge yourself with friends, peers and students worldwide",
				className: "group-162492-1",
				iconProps: { className: "icon-4" },
			},
			icon3Props: { className: "icon-5" },
		},
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
